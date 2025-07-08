// app/api/jobs/route.ts
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import cheerio from 'cheerio';

const JOB_SOURCE_URL = 'https://remoteok.com/remote-dev-jobs'; // or change to any other

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const keyword = searchParams.get('keyword')?.toLowerCase();
    const company = searchParams.get('company')?.toLowerCase();

    const res = await fetch(JOB_SOURCE_URL, {
      headers: {
        'User-Agent': 'Mozilla/5.0',
      },
    });

    const html = await res.text();
    const $ = cheerio.load(html);

    const jobs: {
      title: string;
      company: string;
      link: string;
    }[] = [];

    $('.job').each((_, el) => {
      const title = $(el).find('.company_and_position [itemprop="title"]').text().trim();
      const company = $(el).find('.companyLink h3').text().trim();
      const link = 'https://remoteok.com' + $(el).attr('data-href');

      if (title && company && link) {
        jobs.push({ title, company, link });
      }
    });

    const filtered = jobs.filter((job) => {
      const matchKeyword = keyword ? job.title.toLowerCase().includes(keyword) : true;
      const matchCompany = company ? job.company.toLowerCase().includes(company) : true;
      return matchKeyword && matchCompany;
    });

    return NextResponse.json(filtered.slice(0, 20));
  } catch (err) {
    return NextResponse.json({ error: 'Failed to scrape job data' }, { status: 500 });
  }
}
