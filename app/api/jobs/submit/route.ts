import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/db';
import { initJobsSchema } from '@/lib/jobs';

// POST /api/jobs/submit — company submits a job listing
export async function POST(req: NextRequest) {
  try {
    await initJobsSchema();
    const db = getDb();
    const body = await req.json();

    const { title, company, location, type, salary_range, description, requirements, apply_url, contact_email } = body;

    if (!title || !company || !description) {
      return NextResponse.json({ error: 'Title, company, and description are required' }, { status: 400 });
    }

    const result = await db`
      INSERT INTO jobs (title, company, location, type, salary_range, description, requirements, apply_url, contact_email)
      VALUES (
        ${title}, ${company}, ${location || null},
        ${type || 'full-time'}, ${salary_range || null},
        ${description}, ${requirements || []},
        ${apply_url || null}, ${contact_email || null}
      )
      RETURNING id, title, company, status, created_at
    `;

    const rows = result as any[]; return NextResponse.json({ job: rows[0] }, { status: 201 });
  } catch (err) {
    console.error('[Jobs Submit] Error:', err);
    const msg = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
