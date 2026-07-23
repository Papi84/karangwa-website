import { NextRequest, NextResponse } from 'next/server';
import { addSubscriber } from '@/lib/content';
import { initSchema } from '@/lib/db';

export async function POST(req: NextRequest) {
  try {
    await initSchema();
    const { email, name } = await req.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email required' }, { status: 400 });
    }

    await addSubscriber(email, name || undefined);
    console.log(`[Subscribe] New subscriber: ${email}`);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[Subscribe] Error:', err);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}
