// Content types and DB-backed helpers for K(now) AI blog
import { getDb } from './db';

export type PostStatus = 'published';
export type DraftStatus = 'pending' | 'approved' | 'rejected';

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  tags: string[];
  sourceUrl?: string;
}

export interface Draft {
  id: number;
  sourceTweetId?: string;
  sourceAuthor?: string;
  sourceUrl?: string;
  rawContent: string;
  topicSummary?: string;
  suggestedTitle?: string;
  status: DraftStatus;
  slug?: string;
  postBody?: string;
  createdAt: string;
  reviewedAt?: string;
  publishedAt?: string;
}

// ── Posts ──

export async function getPosts(status?: PostStatus): Promise<Post[]> {
  const db = getDb();
  const result = await db.query(
    `SELECT slug, title, excerpt, content, author, published_at, updated_at, tags, source_url FROM posts ORDER BY published_at DESC`
  );
  return result.rows.map(mapPost);
}

export async function getPost(slug: string): Promise<Post | null> {
  const db = getDb();
  const result = await db.query(
    `SELECT slug, title, excerpt, content, author, published_at, updated_at, tags, source_url FROM posts WHERE slug = $1`,
    [slug]
  );
  return result.rows[0] ? mapPost(result.rows[0]) : null;
}

export async function savePost(post: {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author?: string;
  tags?: string[];
  sourceUrl?: string;
  draftId?: number;
}): Promise<void> {
  const db = getDb();
  await db.query(
    `INSERT INTO posts (slug, title, excerpt, content, author, published_at, tags, source_url, draft_id)
     VALUES ($1, $2, $3, $4, $5, now(), $6, $7, $8)
     ON CONFLICT (slug) DO UPDATE SET
       title = EXCLUDED.title,
       excerpt = EXCLUDED.excerpt,
       content = EXCLUDED.content,
       updated_at = now(),
       tags = EXCLUDED.tags`,
    [post.slug, post.title, post.excerpt, post.content, post.author || 'K(now) AI', post.tags || [], post.sourceUrl || null, post.draftId || null]
  );
}

// ── Drafts ──

export async function getDrafts(status?: DraftStatus): Promise<Draft[]> {
  const db = getDb();
  const result = status
    ? await db.query(
        `SELECT id, source_tweet_id, source_author, source_url, raw_content,
                topic_summary, suggested_title, status, slug, post_body,
                created_at, reviewed_at, published_at
         FROM drafts WHERE status = $1 ORDER BY created_at DESC`,
        [status]
      )
    : await db.query(
        `SELECT id, source_tweet_id, source_author, source_url, raw_content,
                topic_summary, suggested_title, status, slug, post_body,
                created_at, reviewed_at, published_at
         FROM drafts ORDER BY created_at DESC`
      );
  return result.rows.map(mapDraft);
}

export async function saveDraft(draft: {
  sourceTweetId?: string;
  sourceAuthor?: string;
  sourceUrl?: string;
  rawContent: string;
  topicSummary?: string;
  suggestedTitle?: string;
}): Promise<Draft | null> {
  const db = getDb();
  const result = await db.query(
    `INSERT INTO drafts (source_tweet_id, source_author, source_url, raw_content, topic_summary, suggested_title)
     VALUES ($1, $2, $3, $4, $5, $6)
     ON CONFLICT (source_tweet_id) WHERE source_tweet_id IS NOT NULL DO NOTHING
     RETURNING id, source_tweet_id, source_author, source_url, raw_content,
               topic_summary, suggested_title, status, slug, post_body,
               created_at, reviewed_at, published_at`,
    [draft.sourceTweetId || null, draft.sourceAuthor || null, draft.sourceUrl || null, draft.rawContent, draft.topicSummary || null, draft.suggestedTitle || null]
  );
  return result.rows[0] ? mapDraft(result.rows[0]) : null;
}

export async function updateDraftStatus(id: number, status: DraftStatus, slug?: string, postBody?: string): Promise<void> {
  const db = getDb();
  const now = new Date().toISOString();
  await db.query(
    `UPDATE drafts SET status = $1, slug = $2, post_body = $3, reviewed_at = now(), published_at = $4 WHERE id = $5`,
    [status, slug || null, postBody || null, status === 'approved' ? now : null, id]
  );
}

// ── Subscribers ──

export async function addSubscriber(email: string, name?: string): Promise<void> {
  const db = getDb();
  await db.query(
    `INSERT INTO subscribers (email, name) VALUES ($1, $2)
     ON CONFLICT (email) DO UPDATE SET status = 'active', name = EXCLUDED.name`,
    [email.toLowerCase(), name || null]
  );
}

export async function removeSubscriber(email: string): Promise<void> {
  const db = getDb();
  await db.query(`UPDATE subscribers SET status = 'unsubscribed' WHERE email = $1`, [email.toLowerCase()]);
}

export async function getActiveSubscribers(): Promise<{ email: string; name?: string }[]> {
  const db = getDb();
  const result = await db.query(`SELECT email, name FROM subscribers WHERE status = 'active'`);
  return result.rows;
}

// ── Mappers ──

function mapPost(row: any): Post {
  return {
    slug: row.slug,
    title: row.title,
    excerpt: row.excerpt,
    content: row.content,
    author: row.author,
    publishedAt: row.published_at,
    updatedAt: row.updated_at,
    tags: row.tags || [],
    sourceUrl: row.source_url,
  };
}

function mapDraft(row: any): Draft {
  return {
    id: row.id,
    sourceTweetId: row.source_tweet_id,
    sourceAuthor: row.source_author,
    sourceUrl: row.source_url,
    rawContent: row.raw_content,
    topicSummary: row.topic_summary,
    suggestedTitle: row.suggested_title,
    status: row.status,
    slug: row.slug,
    postBody: row.post_body,
    createdAt: row.created_at,
    reviewedAt: row.reviewed_at,
    publishedAt: row.published_at,
  };
}
