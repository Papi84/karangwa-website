import { NextRequest, NextResponse } from 'next/server';
import { getPosts } from '@/lib/content';
import { initSchema } from '@/lib/db';

export async function GET() {
  try {
    await initSchema();
    const posts = await getPosts('published');
    return NextResponse.json({ posts });
  } catch (err) {
    console.error('[Posts] Error:', err);
    const msg = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
