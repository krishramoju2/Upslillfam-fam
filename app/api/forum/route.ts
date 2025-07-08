// app/api/forum/route.ts
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
const cheerio = require('cheerio');
import { NextResponse } from 'next/server';

let forumPosts: {
  text: string;
  font: string;
  timestamp: number;
}[] = [];

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const font = searchParams.get('font');
  const keyword = searchParams.get('keyword')?.toLowerCase();

  let filtered = forumPosts;

  if (font) {
    filtered = filtered.filter(post => post.font === font);
  }

  if (keyword) {
    filtered = filtered.filter(post => post.text.toLowerCase().includes(keyword));
  }

  return NextResponse.json(filtered.slice(-50).reverse()); // show latest 50 posts
}

export async function POST(req: Request) {
  try {
    const { text, font } = await req.json();
    if (!text || !font) {
      return NextResponse.json({ error: 'Missing text or font' }, { status: 400 });
    }

    forumPosts.push({
      text,
      font,
      timestamp: Date.now(),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }
}
