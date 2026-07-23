import { NextRequest, NextResponse } from 'next/server';
import { scrapeAITrending, summarizeForDraft } from '@/lib/x-scraper';
import { saveDraft } from '@/lib/content';
import { initSchema } from '@/lib/db';

// Auth check for webhook calls
function isAuthorized(req: NextRequest): boolean {
  const secret = process.env.WEBHOOK_SECRET;
  if (!secret) return true; // Allow if no secret configured (dev mode)
  const auth = req.headers.get('authorization')?.replace('Bearer ', '');
  return auth === secret;
}

// GET — manual scrape from the /blog/drafts page
export async function GET() {
  try {
    await initSchema();
    const results = await scrapeAITrending();
    const drafts = [];

    for (const r of results) {
      const summary = await summarizeForDraft(r.snippet, r.sourceAuthor);
      const draft = await saveDraft({
        sourceTweetId: r.sourceTweetId,
        sourceAuthor: r.sourceAuthor,
        sourceUrl: r.sourceUrl,
        rawContent: r.snippet,
        topicSummary: summary.topicSummary,
        suggestedTitle: summary.suggestedTitle,
      });
      if (draft) drafts.push(draft);
    }

    return NextResponse.json({
      message: `Scraped ${results.length} tweets, created ${drafts.length} new drafts`,
      drafts: drafts.slice(0, 10),
      total: drafts.length,
    });
  } catch (err) {
    console.error('[Generate] Error:', err);
    return NextResponse.json({ error: 'Failed to scrape AI news' }, { status: 500 });
  }
}

// POST — webhook endpoint for GitHub Actions
export async function POST(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  return GET();
}
