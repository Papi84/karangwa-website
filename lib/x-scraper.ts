// X (Twitter) topic scraper for AI breaking news

export interface XSource {
  type: "account" | "keyword" | "list";
  value: string;
  label: string;
}

export interface XScrapeResult {
  topic: string;
  sourceUrl: string;
  snippet: string;
  timestamp: string;
}

export const AI_SOURCES: XSource[] = [
  { type: "account", value: "kif", label: "AI Breaking News" },
  { type: "account", value: "AndrewYNg", label: "Andrew Ng" },
  { type: "account", value: "OpenAI", label: "OpenAI" },
  { type: "account", value: "GoogleDeepMind", label: "Google DeepMind" },
  { type: "account", value: "AnthropicAI", label: "Anthropic" },
  { type: "keyword", value: "AI news", label: "General AI News" },
  { type: "keyword", value: "LLM", label: "LLM Updates" },
  { type: "keyword", value: "machine learning breakthrough", label: "ML Breakthroughs" },
];

export async function scrapeAITrending(): Promise<XScrapeResult[]> {
  const results: XScrapeResult[] = [];

  for (const source of AI_SOURCES) {
    try {
      if (source.type === "account") {
        const posts = await scrapeXAccount(source.value);
        results.push(
          ...posts.map((p) => ({
            topic: p.text.slice(0, 100),
            sourceUrl: `https://x.com/${source.value}/status/${p.id}`,
            snippet: p.text,
            timestamp: new Date().toISOString(),
          }))
        );
      }
    } catch (err) {
      console.error(`Failed to scrape ${source.label}:`, err);
    }
  }

  return results
    .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
    .slice(0, 20);
}

interface XPost {
  id: string;
  text: string;
  timestamp: string;
}

const NITTER_INSTANCES = [
  "https://nitter.net",
  "https://nitter.lucabased.xyz",
  "https://nitter.poast.org",
];

async function scrapeXAccount(username: string): Promise<XPost[]> {
  for (const instance of NITTER_INSTANCES) {
    try {
      const url = `${instance}/${username}/rss`;
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 5000);

      const res = await fetch(url, { signal: controller.signal });
      clearTimeout(timeout);

      if (!res.ok) continue;

      const xml = await res.text();
      const items = xml.match(/<item>[\s\S]*?<\/item>/g) || [];

      return items.slice(0, 5).map((item) => {
        const title = item.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/)?.[1] || "";
        const link = item.match(/<link>(.*?)<\/link>/)?.[1] || "";
        const pubDate = item.match(/<pubDate>(.*?)<\/pubDate>/)?.[1] || "";
        return {
          id: link.split("/").pop() || "",
          text: title,
          timestamp: pubDate,
        };
      });
    } catch {
      continue;
    }
  }
  return [];
}
