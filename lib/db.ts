// Database connection using Neon serverless Postgres
import { neon } from '@neondatabase/serverless';

let sql: ReturnType<typeof neon> | null = null;

export function getDb() {
  if (!sql) {
    const connectionString = process.env.DATABASE_URL;
    if (!connectionString) {
      throw new Error('DATABASE_URL env var not set');
    }
    sql = neon(connectionString);
  }
  return sql;
}

// Initialize schema — called on first API request
export async function initSchema(): Promise<void> {
  const db = getDb();

  try {
    await db`
      CREATE TABLE IF NOT EXISTS drafts (
        id SERIAL PRIMARY KEY,
        source_tweet_id VARCHAR(64),
        source_author VARCHAR(128),
        source_url TEXT,
        raw_content TEXT NOT NULL,
        topic_summary TEXT,
        suggested_title VARCHAR(256),
        status VARCHAR(16) NOT NULL DEFAULT 'pending',
        slug VARCHAR(256) UNIQUE,
        post_body TEXT,
        created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
        reviewed_at TIMESTAMPTZ,
        published_at TIMESTAMPTZ
      );
    `;

    await db`
      CREATE TABLE IF NOT EXISTS posts (
        slug VARCHAR(256) PRIMARY KEY,
        title VARCHAR(512) NOT NULL,
        excerpt TEXT NOT NULL,
        content TEXT NOT NULL,
        author VARCHAR(128) NOT NULL DEFAULT 'K(now) AI',
        published_at TIMESTAMPTZ NOT NULL DEFAULT now(),
        updated_at TIMESTAMPTZ,
        tags TEXT[] DEFAULT '{}',
        source_url TEXT,
        draft_id INTEGER REFERENCES drafts(id)
      );
    `;

    await db`
      CREATE TABLE IF NOT EXISTS subscribers (
        email VARCHAR(256) PRIMARY KEY,
        name VARCHAR(256),
        subscribed_at TIMESTAMPTZ NOT NULL DEFAULT now(),
        status VARCHAR(16) NOT NULL DEFAULT 'active'
      );
    `;

    // Indexes
    await db`CREATE INDEX IF NOT EXISTS idx_drafts_source_tweet ON drafts(source_tweet_id) WHERE source_tweet_id IS NOT NULL;`;
    await db`CREATE INDEX IF NOT EXISTS idx_drafts_status ON drafts(status);`;
    await db`CREATE INDEX IF NOT EXISTS idx_posts_published ON posts(published_at DESC);`;

    console.log('[DB] Schema ready');
  } catch (err) {
    console.warn('[DB] Schema init warning (will retry):', (err as Error).message);
  }
}
