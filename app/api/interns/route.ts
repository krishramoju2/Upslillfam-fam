// app/api/interns/route.ts
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';

let internCount = 0; // In-memory counter (reset on server restart)

export async function GET() {
  return NextResponse.json({ count: internCount });
}

export async function POST() {
  internCount += 1;
  return NextResponse.json({ message: 'Intern count updated', count: internCount });
}
