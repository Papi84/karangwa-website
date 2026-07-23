import { NextRequest, NextResponse } from 'next/server';
import { getPost } from '@/lib/content';
import { seedContent } from '@/lib/seed';

let seeded = false;
function ensureSeeded() {
  if (!seeded) {
    seedContent();
    seeded = true;
  }
}

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  ensureSeeded();
  const { slug } = await params;
  const post = getPost(slug);

  if (!post || post.status !== 'published') {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  return NextResponse.json({ post });
}
