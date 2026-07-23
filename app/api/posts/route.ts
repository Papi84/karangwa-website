import { NextRequest, NextResponse } from 'next/server';
import { getPosts, getPost, savePost } from '@/lib/content';
import { seedContent } from '@/lib/seed';

// Seed content on first load
let seeded = false;
function ensureSeeded() {
  if (!seeded) {
    seedContent();
    seeded = true;
  }
}

// GET /api/posts — list published posts
export async function GET() {
  ensureSeeded();
  const posts = getPosts('published');
  return NextResponse.json({ posts });
}
