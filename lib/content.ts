// Content types and helpers for K(now) AI blog

export type PostStatus = "draft" | "published";

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  status: PostStatus;
  tags: string[];
  coverImage?: string;
  sourceUrl?: string;
  trendingTopic?: string;
}

const store = new Map<string, Post>();

export function getPosts(status?: PostStatus): Post[] {
  const all = Array.from(store.values());
  if (status) return all.filter((p) => p.status === status).sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
  return all.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getPost(slug: string): Post | undefined {
  return store.get(slug);
}

export function savePost(post: Post): void {
  store.set(post.slug, post);
}

// Draft queue
export interface Draft {
  id: string;
  topic: string;
  sourceUrl: string;
  sourceText: string;
  suggestedTitle?: string;
  createdAt: string;
  status: "pending" | "accepted" | "rejected";
}

const draftStore = new Map<string, Draft>();

export function getDrafts(status?: Draft["status"]): Draft[] {
  const all = Array.from(draftStore.values());
  if (status) return all.filter((d) => d.status === status);
  return all;
}

export function saveDraft(draft: Draft): void {
  draftStore.set(draft.id, draft);
}
