import { NextRequest, NextResponse } from 'next/server';
import { getPost } from '@/lib/content';
import { initSchema } from '@/lib/db';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    await initSchema();
    const { slug } = await params;
    const post = await getPost(slug);

    if (!post) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }

    return NextResponse.json({ post });
  } catch (err) {
    console.error('[Post] Error:', err);
    const msg = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
