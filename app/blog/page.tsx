'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import MatrixRain from '@/components/MatrixRain';
import NewsletterSignup from '@/components/NewsletterSignup';

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  tags: string[];
  sourceUrl?: string;
}

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch('/api/posts');
        const data = await res.json();
        setPosts(data.posts || []);
      } catch {
        // Static fallback if API not ready
        setPosts([]);
      }
      setLoading(false);
    }
    fetchPosts();
  }, []);

  return (
    <main className="min-h-screen relative">
      <MatrixRain />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card mx-0 mt-0 md:mx-4 md:mt-4 md:max-w-[calc(100%-2rem)] md:left-1/2 md:-translate-x-1/2">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center gap-4">
          <div className="flex items-center">
            <div className="mr-3">
              <i className="fas fa-code text-2xl neon-text"></i>
            </div>
            <h1 className="text-lg md:text-xl font-bold">
              <span className="glitch" data-text="KARANGWA.DEV">KARANGWA.DEV</span>
            </h1>
          </div>
          <div className="hidden md:flex items-center justify-end flex-1 gap-4 lg:gap-6 xl:gap-8">
            <Link href="/" className="text-sm lg:text-base xl:text-lg font-extrabold text-white hover:text-[var(--neon-green)] hover:underline decoration-[var(--neon-green)] decoration-2 underline-offset-8 transition duration-300 cursor-pointer py-2 whitespace-nowrap">HOME</Link>
            <Link href="/ishyango" className="text-sm lg:text-base xl:text-lg font-extrabold text-white hover:text-[var(--neon-green)] hover:underline decoration-[var(--neon-green)] decoration-2 underline-offset-8 transition duration-300 cursor-pointer py-2 whitespace-nowrap">ISHYANGO.AI</Link>
            <Link href="/#projects" className="text-sm lg:text-base xl:text-lg font-extrabold text-white hover:text-[var(--neon-green)] hover:underline decoration-[var(--neon-green)] decoration-2 underline-offset-8 transition duration-300 cursor-pointer py-2 whitespace-nowrap">PROJECTS</Link>
            <Link href="/blog" className="text-sm lg:text-base xl:text-lg font-extrabold text-[var(--neon-green)] hover:text-[var(--neon-green)] hover:underline decoration-[var(--neon-green)] decoration-2 underline-offset-8 transition duration-300 cursor-pointer py-2 whitespace-nowrap">AI NEWS</Link>
            <Link href="/jobs" className="text-sm lg:text-base xl:text-lg font-extrabold text-white hover:text-[var(--neon-green)] hover:underline decoration-[var(--neon-green)] decoration-2 underline-offset-8 transition duration-300 cursor-pointer py-2 whitespace-nowrap">JOBS</Link>
            <Link href="/#about" className="text-sm lg:text-base xl:text-lg font-extrabold text-white hover:text-[var(--neon-green)] hover:underline decoration-[var(--neon-green)] decoration-2 underline-offset-8 transition duration-300 cursor-pointer py-2 whitespace-nowrap">ABOUT</Link>
            <Link href="/#contact" className="text-sm lg:text-base xl:text-lg font-extrabold text-white hover:text-[var(--neon-green)] hover:underline decoration-[var(--neon-green)] decoration-2 underline-offset-8 transition duration-300 cursor-pointer py-2 whitespace-nowrap">CONTACT</Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl text-center flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold mb-6">
            <span className="neon-text">K(now).AI</span>
          </h1>
          <p className="text-lg md:text-xl xl:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Your daily intelligence brief on the frontier of artificial intelligence.
            News, analysis, and insights — curated daily.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="#subscribe" className="glass-card px-8 py-4 rounded border border-[var(--neon-green)] text-[var(--neon-green)] hover:bg-[var(--neon-green)] hover:text-[var(--dark-bg)] font-bold transition duration-300 text-base md:text-lg">
              <i className="fas fa-envelope mr-2"></i>Subscribe
            </Link>
            <Link href="/blog/drafts" className="glass-card px-8 py-4 rounded border border-[var(--neon-blue)] text-[var(--neon-blue)] hover:bg-[var(--neon-blue)] hover:text-[var(--dark-bg)] font-bold transition duration-300 text-base md:text-lg">
              <i className="fas fa-pen-fancy mr-2"></i>Drafts
            </Link>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl xl:max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 neon-text">Latest Briefs</h2>

          {loading ? (
            <div className="text-center py-16 text-gray-400">
              <i className="fas fa-spinner fa-spin text-4xl"></i>
              <p className="mt-4">Loading briefs...</p>
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-16 text-gray-400">
              <i className="fas fa-newspaper text-5xl mb-4"></i>
              <p className="text-xl">No posts yet — stay tuned!</p>
              <p className="text-sm mt-2">The first AI brief is being prepared right now.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {posts.map((post) => (
                <div key={post.slug} className="glass-card p-6 hover:transform hover:-translate-y-2 transition duration-300 h-full flex flex-col">
                  <Link href={`/blog/posts/${post.slug}`} className="flex-1 block">
                    <div className="mb-4">
                      <h3 className="text-lg md:text-xl font-bold text-white">{post.title}</h3>
                      <p className="text-xs text-gray-400 mt-1">
                        {new Date(post.publishedAt).toLocaleDateString("en-US", {
                          month: "short", day: "numeric", year: "numeric"
                        })}
                      </p>
                    </div>
                    <p className="text-gray-300 text-sm mb-4">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span key={tag} className="px-2 md:px-3 py-1 bg-[var(--neon-green)] bg-opacity-20 text-[var(--dark-bg)] rounded text-xs md:text-sm border border-[var(--neon-green)]">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-[var(--neon-blue)] hover:underline text-sm">
                      Read more <i className="fas fa-arrow-right ml-1"></i>
                    </span>
                  </Link>

                  {/* Quick share */}
                  <div className="flex items-center gap-2 mt-3 pt-3 border-t border-gray-700/50 text-xs">
                    <span className="text-gray-500 mr-1">Share:</span>
                    <button
                      onClick={() => { const u = encodeURIComponent(`${window.location.origin}/blog/posts/${post.slug}`); const t = encodeURIComponent(post.title); window.open(`https://twitter.com/intent/tweet?text=${t}&url=${u}`, '_blank', 'width=600,height=400'); }}
                      className="text-gray-500 hover:text-[#1DA1F2] transition" title="Share on X"
                    ><i className="fab fa-x-twitter"></i></button>
                    <button
                      onClick={() => { const u = encodeURIComponent(`${window.location.origin}/blog/posts/${post.slug}`); window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${u}`, '_blank', 'width=600,height=400'); }}
                      className="text-gray-500 hover:text-[#0A66C2] transition" title="Share on LinkedIn"
                    ><i className="fab fa-linkedin-in"></i></button>
                    <button
                      onClick={() => { const u = encodeURIComponent(`${window.location.origin}/blog/posts/${post.slug}`); window.open(`https://wa.me/?text=${encodeURIComponent(post.title)}%20${u}`, '_blank'); }}
                      className="text-gray-500 hover:text-[#25D366] transition" title="Share on WhatsApp"
                    ><i className="fab fa-whatsapp"></i></button>
                    <button
                      onClick={() => { navigator.clipboard.writeText(`${window.location.origin}/blog/posts/${post.slug}`); }}
                      className="text-gray-500 hover:text-[var(--neon-green)] transition" title="Copy link"
                    ><i className="fas fa-link"></i></button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section id="subscribe" className="py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <NewsletterSignup />
        </div>
      </section>

      {/* Footer */}
      <footer className="glass-card mx-4 mb-6 md:mb-8">
        <div className="container mx-auto px-4 py-6 text-center">
          <div className="flex justify-center gap-6 mb-6">
            <a href="https://github.com/Papi84" target="_blank" rel="noopener noreferrer"
              className="text-white hover:text-[var(--neon-green)] text-3xl transition duration-300 transform hover:scale-110" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/karangwa-papi-9ab80426b/" target="_blank" rel="noopener noreferrer"
              className="text-white hover:text-[#0A66C2] text-3xl transition duration-300 transform hover:scale-110" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://twitter.com/coolerme" target="_blank" rel="noopener noreferrer"
              className="text-white hover:text-[#1DA1F2] text-3xl transition duration-300 transform hover:scale-110" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
          <p className="text-gray-400 text-xs md:text-sm mb-2">
            <i className="fas fa-code mr-2"></i>
            Built with <span className="neon-green">♥</span> by Karangwa Abubakar
          </p>
          <p className="text-gray-400 text-xs md:text-sm">
            © 2026 - Solving problems like a real engineer
          </p>
        </div>
      </footer>
    </main>
  );
}
