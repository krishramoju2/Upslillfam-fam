// app/api/hrcontacts/route.ts
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import cheerio from 'cheerio';

const HR_SOURCE_URL = 'https://punecareer.wordpress.com/all-company-hr-emails/';

export async function GET() {
  try {
    const res = await fetch(HR_SOURCE_URL, { headers: { 'User-Agent': 'Mozilla/5.0' } });
    const html = await res.text();
    const $ = cheerio.load(html);

    const emails: string[] = [];
    const text = $('body').text().split(/[\s,]+/);
    text.forEach(token => {
      if (token.includes('@') && token.includes('.')) {
        const cleaned = token.replace(/[\s\W]+$/g, '');
        if (cleaned.length > 6) emails.push(cleaned);
      }
    });

    const unique = Array.from(new Set(emails)).slice(0, 50);

    const contacts = unique.map(email => ({
      company: email.split('@')[1]?.split('.')[0] || 'Unknown',
      email,
    }));

    return NextResponse.json({ contacts });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to scrape HR emails' }, { status: 500 });
  }
}
