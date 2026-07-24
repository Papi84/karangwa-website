import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/db';
import { initIdeasSchema } from '@/lib/ideas';

// POST /api/ideas/submit — submit a new idea
export async function POST(req: NextRequest) {
  try {
    await initIdeasSchema();
    const db = getDb();
    const body = await req.json();

    const { title, description, category, tech_stack, user_email, user_name, is_public } = body;

    if (!title || !description) {
      return NextResponse.json({ error: 'Title and description are required' }, { status: 400 });
    }

    const result = await db`
      INSERT INTO ideas (title, description, category, tech_stack, user_email, user_name, is_public)
      VALUES (
        ${title}, ${description}, ${category || null},
        ${tech_stack || []}, ${user_email || null}, ${user_name || null},
        ${is_public !== false}
      )
      RETURNING id, title, status, created_at
    `;
    const rows = result as any[];

    return NextResponse.json({ idea: rows[0] }, { status: 201 });
  } catch (err) {
    console.error('[Ideas Submit] Error:', err);
    const msg = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
