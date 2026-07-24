import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/db';
import { initIdeasSchema, SCOPING_PRICES } from '@/lib/ideas';

// POST /api/ideas/quote — AI-generate a scope + estimate for an idea
export async function POST(req: NextRequest) {
  try {
    await initIdeasSchema();
    const db = getDb();
    const body = await req.json();

    const { ideaId, tier } = body; // tier: 'basic_scope' or 'detailed_scope'

    if (!ideaId) {
      return NextResponse.json({ error: 'Idea ID required' }, { status: 400 });
    }

    // Check idea exists
    const ideas = await db`SELECT id, title, description, category, tech_stack FROM ideas WHERE id = ${ideaId}`;
    const ideaRows = ideas as any[];
    if (!ideaRows[0]) {
      return NextResponse.json({ error: 'Idea not found' }, { status: 404 });
    }

    const idea = ideaRows[0];
    const price = tier === 'detailed_scope' ? SCOPING_PRICES.detailed_scope : SCOPING_PRICES.basic_scope;

    // AI-generated scope (simulated for now — real LLM integration later)
    const scopeBreakdown = generateScope(idea.title, idea.description);
    const costEstimate = generateCostEstimate(idea.tech_stack || []);
    const timeEstimate = generateTimeEstimate(idea.tech_stack || []);

    // Update the idea with scope
    await db`
      UPDATE ideas SET
        scope_breakdown = ${scopeBreakdown},
        cost_estimate = ${costEstimate},
        time_estimate = ${timeEstimate},
        quoted_price = ${price},
        status = 'scoped'
      WHERE id = ${ideaId}
    `;

    return NextResponse.json({
      scope: {
        breakdown: scopeBreakdown,
        costEstimate,
        timeEstimate,
        price,
        tier,
      },
    });
  } catch (err) {
    console.error('[Ideas Quote] Error:', err);
    const msg = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

// VOTE endpoint — upvote an idea
export async function PUT(req: NextRequest) {
  try {
    await initIdeasSchema();
    const db = getDb();
    const { ideaId } = await req.json();

    if (!ideaId) {
      return NextResponse.json({ error: 'Idea ID required' }, { status: 400 });
    }

    await db`UPDATE ideas SET votes = votes + 1 WHERE id = ${ideaId}`;

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[Ideas Vote] Error:', err);
    return NextResponse.json({ error: 'Failed to vote' }, { status: 500 });
  }
}

// --- Mock generators (replace with real LLM later) ---

function generateScope(title: string, desc: string): string {
  return `## Project: ${title}\n\n### Overview\n${desc.slice(0, 200)}...\n\n### Technical Requirements\n1. Frontend: React/Next.js with authentication\n2. Backend: API with database layer\n3. Database: PostgreSQL with proper indexing\n4. Deployment: Vercel + managed DB\n\n### Milestones\n1. **Week 1-2**: Core architecture + auth\n2. **Week 3-4**: Main feature implementation\n3. **Week 5**: Testing + deployment\n4. **Week 6**: Launch + monitoring\n\n### Risks\n- Complexity of real-time features\n- Third-party API rate limits\n- User adoption in first month`;
}

function generateCostEstimate(techStack: string[]): string {
  const base = techStack.length > 0 ? '15,000 RWF/mo' : '8,000 RWF/mo';
  return `Estimated monthly operating cost: ${base}\nOne-time development: 200,000 - 500,000 RWF depending on scope`;
}

function generateTimeEstimate(techStack: string[]): string {
  return techStack.length > 3 ? '6-8 weeks to MVP' : '4-6 weeks to MVP';
}
