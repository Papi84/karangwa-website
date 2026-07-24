import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/db';
import { initIdeasSchema } from '@/lib/ideas';

// GET /api/ideas — list public ideas
export async function GET() {
  try {
    await initIdeasSchema();
    const db = getDb();

    const ideas = await db`
      SELECT id, title, description, category, tech_stack, user_name, status,
             votes, scope_breakdown, cost_estimate, time_estimate, quoted_price,
             created_at
      FROM ideas
      WHERE is_public = true
      ORDER BY votes DESC, created_at DESC
    `;

    return NextResponse.json({ ideas });
  } catch (err) {
    console.error('[Ideas] Error:', err);
    const msg = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
