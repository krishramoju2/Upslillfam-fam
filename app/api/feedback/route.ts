// app/api/feedback/route.ts
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
const cheerio = require('cheerio');
import { NextResponse } from 'next/server';

let feedbackList: { feedback: string; timestamp: string }[] = []; // In-memory storage

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { feedback } = body;

    if (!feedback || typeof feedback !== 'string') {
      return NextResponse.json({ error: 'Invalid feedback' }, { status: 400 });
    }

    feedbackList.push({ feedback, timestamp: new Date().toISOString() });

    return NextResponse.json({ message: 'Feedback received', total: feedbackList.length });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to process feedback' }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json(feedbackList.slice(-10)); // Returns latest 10 feedbacks
}
