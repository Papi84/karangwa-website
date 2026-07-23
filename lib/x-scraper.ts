// X (Twitter) topic scraper for AI breaking news
// Uses Nitter RSS (free, no API key needed)

export interface XSource {
  type: 'account' | 'keyword';
  value: string;
  label: string;
}

export interface XScrapeResult {
  sourceTweetId: string;
  sourceAuthor: string;
  sourceUrl: string;
  snippet: string;
  timestamp: string;
}

// Configured AI news sources
const AI_SOURCES: XSource[] = [
  { type: 'account', value: 'kif', label: 'AI Breaking News' },
  { type: 'account', value: 'AndrewYNg', label: 'Andrew Ng' },
  { type: 'account', value: 'OpenAI', label: 'OpenAI' },
  { type: 'account', value: 'GoogleDeepMind', label: 'Google DeepMind' },
  { type: 'account', value: 'AnthropicAI', label: 'Anthropic' },
  { type: 'account', value: 'ylecun', label: 'Yann LeCun' },
  { type: 'account', value: 'kdemarco', label: 'AI News' },
];

// Nitter instances — rotates if one is down
const NITTER_INSTANCES = [
  'https://nitter.net',
  'https://nitter.lucabased.xyz',
  'https://nitter.poast.org',
];

interface XPost {
  id: string;
  text: string;
  author: string;
  timestamp: string;
}

export async function scrapeAITrending(): Promise<XScrapeResult[]> {
  const results: XScrapeResult[] = [];

  for (const source of AI_SOURCES) {
    try {
      if (source.type === 'account') {
        const posts = await scrapeXAccount(source.value);
        results.push(
          ...posts.map((p) => ({
            sourceTweetId: p.id,
            sourceAuthor: source.value,
            sourceUrl: `https://x.com/${source.value}/status/${p.id}`,
            snippet: p.text,
            timestamp: p.timestamp || new Date().toISOString(),
          }))
        );
      }
    } catch (err) {
      console.error(`[X Scraper] Failed ${source.label}:`, (err as Error).message);
    }
  }

  return results.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
}

async function scrapeXAccount(username: string): Promise<XPost[]> {
  for (const instance of NITTER_INSTANCES) {
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 5000);

      const res = await fetch(`${instance}/${username}/rss`, { signal: controller.signal });
      clearTimeout(timeout);

      if (!res.ok) continue;

      const xml = await res.text();
      const items = xml.match(/<item>[\s\S]*?<\/item>/g) || [];

      return items.slice(0, 10).map((item) => {
        const title = item.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/)?.[1] || '';
        const link = item.match(/<link>(.*?)<\/link>/)?.[1] || '';
        const pubDate = item.match(/<pubDate>(.*?)<\/pubDate>/)?.[1] || '';
        return {
          id: link.split('/').pop() || '',
          text: title,
          author: username,
          timestamp: pubDate,
        };
      });
    } catch {
      continue;
    }
  }
  return [];
}

// LLM summarization using the configured API
export async function summarizeForDraft(
  rawContent: string,
  sourceAuthor: string
): Promise<{ topicSummary: string; suggestedTitle: string }> {
  const apiKey = process.env.LLM_API_KEY;
  const model = process.env.LLM_MODEL || 'gpt-4o-mini';

  if (!apiKey) {
    // Fallback: basic summarization without LLM
    return {
      topicSummary: rawContent.slice(0, 200),
      suggestedTitle: rawContent.slice(0, 80),
    };
  }

  try {
    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model,
        messages: [
          {
            role: 'system',
            content: 'You are a tech newsletter editor. Given a tweet/post about AI, produce:\n'
              + '1. A 1-2 sentence summary of the key news\n'
              + '2. A suggested blog post title (max 10 words, catchy but accurate)\n'
              + 'Return as JSON: { "topicSummary": "...", "suggestedTitle": "..." }',
          },
          {
            role: 'user',
            content: `From @${sourceAuthor}: ${rawContent}`,
          },
        ],
        temperature: 0.3,
        response_format: { type: 'json_object' },
      }),
    });

    const data = await res.json();
    const parsed = JSON.parse(data.choices?.[0]?.message?.content || '{}');
    return {
      topicSummary: parsed.topicSummary || rawContent.slice(0, 200),
      suggestedTitle: parsed.suggestedTitle || rawContent.slice(0, 80),
    };
  } catch (err) {
    console.error('[LLM] Summarization failed:', err);
    return {
      topicSummary: rawContent.slice(0, 200),
      suggestedTitle: rawContent.slice(0, 80),
    };
  }
}
