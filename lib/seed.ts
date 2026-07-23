import { savePost, type Post } from "./content";

// Sample starter posts
const samplePosts: Post[] = [
  {
    slug: "ai-breakthroughs-july-2026",
    title: "The Biggest AI Breakthroughs This Month",
    excerpt: "From new reasoning architectures to open-source models matching frontier labs — here's everything that happened in AI this month.",
    content: `## Frontier Models Get Cheaper\n\nThe cost of running state-of-the-art AI models has dropped dramatically. Multiple labs released smaller, more efficient models that match frontier-level performance at a fraction of the compute cost.\n\n## Open Source Catches Up\n\nSeveral open-weight models have closed the gap with closed-source alternatives. This democratization means startups and individuals can now access capabilities previously available only to tech giants.\n\n## Reasoning Breakthroughs\n\nNew chain-of-thought techniques produce models that "think" before answering, dramatically improving accuracy on complex math, coding, and logic problems.\n\n## What This Means\n\nFor builders and creators: the barriers to entry have never been lower. If you've been waiting to build something with AI, now is the time.`,
    author: "K(now) AI",
    publishedAt: "2026-07-20T08:00:00.000Z",
    status: "published",
    tags: ["breakthroughs", "frontier-models", "open-source"],
  },
  {
    slug: "ai-coding-assistants-2026",
    title: "AI Coding Assistants in 2026 — What's Changed",
    excerpt: "Coding with AI has evolved beyond autocomplete. Here's how developers are using AI agents to build entire features autonomously.",
    content: `## Beyond Autocomplete\n\nAI coding assistants have evolved from simple autocomplete tools to autonomous agents that can plan, write, test, and deploy code.\n\n## The New Workflow\n\nDevelopers describe features in natural language, review AI-generated code, and focus on architecture and edge cases.\n\n## Key Tools This Month\n\n- **Claude Code** — Agentic coding directly in the terminal\n- **Cursor** — IDE-native AI with deep context understanding\n- **GitHub Copilot Agent** — Autonomous PR generation\n\n## The Bottom Line\n\nAI isn't replacing developers — it's amplifying them. The best teams are 2-3x more productive.`,
    author: "K(now) AI",
    publishedAt: "2026-07-18T08:00:00.000Z",
    status: "published",
    tags: ["coding", "tools", "productivity"],
  },
  {
    slug: "what-is-agentic-ai",
    title: "What Is Agentic AI? A Simple Explainer",
    excerpt: "Everyone's talking about AI agents. Here's what they are, why they matter, and how they'll change how we use software.",
    content: `## What Are AI Agents?\n\nAn AI agent is a system that can pursue goals independently — not just answer questions, but plan, execute, and iterate on tasks.\n\n## How They Work\n\n1. **Receive a goal** — "Book a flight to London"\n2. **Break it down** — check dates, search flights, compare prices\n3. **Execute steps** — interact with multiple tools and APIs\n4. **Handle errors** — if something fails, try another approach\n5. **Report back** — summarize what was done\n\n## Why Now\n\nThree things aligned: better reasoning, tool use, and long-term memory.\n\n## The Impact\n\nAgentic AI will turn software from something you *use* into something that *does things for you*.`,
    author: "K(now) AI",
    publishedAt: "2026-07-15T08:00:00.000Z",
    status: "published",
    tags: ["agentic-ai", "explainer", "trends"],
  },
];

export function seedContent(): void {
  for (const post of samplePosts) {
    savePost(post);
  }
}
