import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/db';
import { initJobsSchema } from '@/lib/jobs';

// GET /api/jobs — list approved + featured jobs
export async function GET() {
  try {
    await initJobsSchema();
    const db = getDb();

    const jobs = await db`
      SELECT id, title, company, location, type, salary_range, description,
             requirements, apply_url, is_featured, created_at
      FROM jobs
      WHERE status = 'approved' OR status = 'featured'
      ORDER BY is_featured DESC, created_at DESC
    `;

    return NextResponse.json({ jobs });
  } catch (err) {
    console.error('[Jobs] Error:', err);
    const msg = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
