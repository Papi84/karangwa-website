// Ideas Vault — DB schema, types, and helpers
import { getDb } from './db';

// Init ideas table
export async function initIdeasSchema(): Promise<void> {
  const db = getDb();

  await db`
    CREATE TABLE IF NOT EXISTS ideas (
      id SERIAL PRIMARY KEY,
      title VARCHAR(256) NOT NULL,
      description TEXT NOT NULL,
      category VARCHAR(64),
      tech_stack TEXT[] DEFAULT '{}',
      user_email VARCHAR(256),
      user_name VARCHAR(128),
      status VARCHAR(16) NOT NULL DEFAULT 'submitted',
      -- submitted, scoped, quoted, in_progress, completed
      votes INTEGER NOT NULL DEFAULT 0,
      scope_breakdown TEXT,       -- AI-generated
      cost_estimate VARCHAR(128), -- AI-generated
      time_estimate VARCHAR(128), -- AI-generated
      quoted_price INTEGER,       -- in RWF
      is_public BOOLEAN NOT NULL DEFAULT true,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
      updated_at TIMESTAMPTZ
    );
  `;

  await db`CREATE INDEX IF NOT EXISTS idx_ideas_status ON ideas(status);`;
  await db`CREATE INDEX IF NOT EXISTS idx_ideas_votes ON ideas(votes DESC);`;
}

export interface Idea {
  id: number;
  title: string;
  description: string;
  category: string | null;
  techStack: string[];
  userEmail: string | null;
  userName: string | null;
  status: string;
  votes: number;
  scopeBreakdown: string | null;
  costEstimate: string | null;
  timeEstimate: string | null;
  quotedPrice: number | null;
  isPublic: boolean;
  createdAt: string;
}

// Service pricing for idea scoping
export const SCOPING_PRICES = {
  basic_scope: 8,   // $8 — AI breakdown + cost/time estimate
  detailed_scope: 15, // $15 — AI + human review
  full_build: null,      // Custom quote
} as const;
