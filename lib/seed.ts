import { savePost } from './content';

const samplePosts = [
  {
    slug: 'ai-breakthroughs-july-2026',
    title: 'The Biggest AI Breakthroughs This Month',
    excerpt: "From new reasoning architectures to open-source models matching frontier labs — here's everything that happened in AI this month.",
    content: `## Frontier Models Get Cheaper\n\nThe cost of running state-of-the-art AI models has dropped dramatically. Multiple labs released smaller, more efficient models that match frontier-level performance at a fraction of the compute cost.\n\n## Open Source Catches Up\n\nSeveral open-weight models have closed the gap with closed-source alternatives.\n\n## Reasoning Breakthroughs\n\nNew chain-of-thought techniques produce models that "think" before answering.\n\n## What This Means\n\nFor builders and creators: the barriers to entry have never been lower.`,
    author: 'K(now) AI',
    tags: ['breakthroughs', 'frontier-models', 'open-source'],
  },
  {
    slug: 'ai-coding-assistants-2026',
    title: "AI Coding Assistants in 2026 — What's Changed",
    excerpt: "Coding with AI has evolved beyond autocomplete. Here's how developers are using AI agents to build entire features autonomously.",
    content: `## Beyond Autocomplete\n\nAI coding assistants have evolved from simple autocomplete to autonomous agents.\n\n## Key Tools This Month\n\n- **Claude Code** — Agentic coding in the terminal\n- **Cursor** — IDE-native AI with deep context\n- **GitHub Copilot Agent** — Autonomous PR generation\n\n## The Bottom Line\n\nAI isn't replacing developers — it's amplifying them.`,
    author: 'K(now) AI',
    tags: ['coding', 'tools', 'productivity'],
  },
  {
    slug: 'what-is-agentic-ai',
    title: 'What Is Agentic AI? A Simple Explainer',
    excerpt: "Everyone's talking about AI agents. Here's what they are, why they matter, and how they'll change how we use software.",
    content: `## What Are AI Agents?\n\nAn AI agent pursues goals independently — planning, executing, and iterating on tasks.\n\n## How They Work\n\n1. **Receive a goal** — "Book a flight to London"\n2. **Break it down** — check dates, search flights, compare prices\n3. **Execute** — interact with tools and APIs\n4. **Report back** — summarize results\n\n## Why Now\n\nThree things aligned: better reasoning, tool use, and long-term memory.`,
    author: 'K(now) AI',
    tags: ['agentic-ai', 'explainer', 'trends'],
  },
];

export async function seedContent(): Promise<void> {
  for (const post of samplePosts) {
    try {
      await savePost(post);
    } catch {
      // Post may already exist — skip
    }
  }
  console.log('[Seed] Sample posts seeded');
}
