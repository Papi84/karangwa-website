import { NextRequest, NextResponse } from 'next/server';
import { scrapeAITrending } from '@/lib/x-scraper';
import { saveDraft } from '@/lib/content';

export async function GET() {
  try {
    const results = await scrapeAITrending();

    const drafts = results.map((r) => {
      const draft = {
        id: crypto.randomUUID(),
        topic: r.topic,
        sourceUrl: r.sourceUrl,
        sourceText: r.snippet,
        createdAt: r.timestamp,
        status: 'pending' as const,
      };
      saveDraft(draft);
      return draft;
    });

    return NextResponse.json({
      message: `Scraped ${drafts.length} trending topics`,
      drafts: drafts.slice(0, 5),
      total: drafts.length,
    });
  } catch (err) {
    console.error('[Newsletter Generate] Error:', err);
    return NextResponse.json({ error: 'Failed to scrape AI news' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { topic, sourceUrl, sourceText } = await req.json();
    if (!topic) {
      return NextResponse.json({ error: 'Topic is required' }, { status: 400 });
    }

    const draft = {
      id: crypto.randomUUID(),
      topic,
      sourceUrl: sourceUrl || '',
      sourceText: sourceText || '',
      createdAt: new Date().toISOString(),
      status: 'pending' as const,
    };
    saveDraft(draft);

    return NextResponse.json({ draft });
  } catch (err) {
    console.error('[Newsletter Generate] Error:', err);
    return NextResponse.json({ error: 'Failed to create draft' }, { status: 500 });
  }
}
