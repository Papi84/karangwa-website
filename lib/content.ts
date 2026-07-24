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

// Helper: get DB and cast results
function db() {
  return getDb();
}

// ── Posts ──

export async function getPosts(status?: PostStatus): Promise<Post[]> {
  const rows = (await db()`
    SELECT slug, title, excerpt, content, author, published_at, updated_at, tags, source_url
    FROM posts
    ORDER BY published_at DESC
  `) as any[];
  return rows.map(mapPost);
}

export async function getPost(slug: string): Promise<Post | null> {
  const rows = (await db()`
    SELECT slug, title, excerpt, content, author, published_at, updated_at, tags, source_url
    FROM posts
    WHERE slug = ${slug}
  `) as any[];
  return rows[0] ? mapPost(rows[0]) : null;
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
  await db()`
    INSERT INTO posts (slug, title, excerpt, content, author, published_at, tags, source_url, draft_id)
    VALUES (${post.slug}, ${post.title}, ${post.excerpt}, ${post.content},
            ${post.author || 'K(now) AI'}, now(), ${post.tags || []},
            ${post.sourceUrl || null}, ${post.draftId || null})
    ON CONFLICT (slug) DO UPDATE SET
      title = EXCLUDED.title,
      excerpt = EXCLUDED.excerpt,
      content = EXCLUDED.content,
      updated_at = now(),
      tags = EXCLUDED.tags
  `;
}

// ── Drafts ──

export async function getDrafts(status?: DraftStatus): Promise<Draft[]> {
  const rows = (status
    ? await db()`
        SELECT id, source_tweet_id, source_author, source_url, raw_content,
               topic_summary, suggested_title, status, slug, post_body,
               created_at, reviewed_at, published_at
        FROM drafts WHERE status = ${status} ORDER BY created_at DESC
      `
    : await db()`
        SELECT id, source_tweet_id, source_author, source_url, raw_content,
               topic_summary, suggested_title, status, slug, post_body,
               created_at, reviewed_at, published_at
        FROM drafts ORDER BY created_at DESC
      `
  ) as any[];
  return rows.map(mapDraft);
}

export async function saveDraft(draft: {
  sourceTweetId?: string;
  sourceAuthor?: string;
  sourceUrl?: string;
  rawContent: string;
  topicSummary?: string;
  suggestedTitle?: string;
}): Promise<Draft | null> {
  const rows = (await db()`
    INSERT INTO drafts (source_tweet_id, source_author, source_url, raw_content, topic_summary, suggested_title)
    VALUES (${draft.sourceTweetId || null}, ${draft.sourceAuthor || null},
            ${draft.sourceUrl || null}, ${draft.rawContent},
            ${draft.topicSummary || null}, ${draft.suggestedTitle || null})
    ON CONFLICT (source_tweet_id) WHERE source_tweet_id IS NOT NULL DO NOTHING
    RETURNING id, source_tweet_id, source_author, source_url, raw_content,
              topic_summary, suggested_title, status, slug, post_body,
              created_at, reviewed_at, published_at
  `) as any[];
  return rows[0] ? mapDraft(rows[0]) : null;
}

export async function updateDraftStatus(id: number, status: DraftStatus, slug?: string, postBody?: string): Promise<void> {
  const now = new Date().toISOString();
  await db()`
    UPDATE drafts SET
      status = ${status},
      slug = ${slug || null},
      post_body = ${postBody || null},
      reviewed_at = now(),
      published_at = ${status === 'approved' ? now : null}::timestamptz
    WHERE id = ${id}
  `;
}

// ── Subscribers ──

export async function addSubscriber(email: string, name?: string): Promise<void> {
  await db()`
    INSERT INTO subscribers (email, name) VALUES (${email.toLowerCase()}, ${name || null})
    ON CONFLICT (email) DO UPDATE SET status = 'active', name = EXCLUDED.name
  `;
}

export async function removeSubscriber(email: string): Promise<void> {
  await db()`UPDATE subscribers SET status = 'unsubscribed' WHERE email = ${email.toLowerCase()}`;
}

export async function getActiveSubscribers(): Promise<{ email: string; name?: string }[]> {
  return (await db()`SELECT email, name FROM subscribers WHERE status = 'active'`) as any[];
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
