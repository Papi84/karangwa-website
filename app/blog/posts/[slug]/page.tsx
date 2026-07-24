'use client';

import { useState, useEffect } from 'react';
import MobileNav from '@/components/MobileNav';
import Link from 'next/link';
import { useParams } from 'next/navigation';
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

export default function PostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    async function fetchPost() {
      try {
        const res = await fetch(`/api/posts/${slug}`);
        if (!res.ok) { setNotFound(true); return; }
        const data = await res.json();
        setPost(data.post);
      } catch {
        setNotFound(true);
      }
      setLoading(false);
    }
    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <main className="min-h-screen relative">
        <MatrixRain />
        <div className="flex items-center justify-center min-h-screen">
          <i className="fas fa-spinner fa-spin text-4xl neon-text"></i>
        </div>
      </main>
    );
  }

  if (notFound || !post) {
    return (
      <main className="min-h-screen relative">
        <MatrixRain />
        <div className="flex items-center justify-center min-h-screen px-4">
          <div className="text-center">
            <i className="fas fa-exclamation-triangle text-5xl neon-blue mb-6"></i>
            <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
            <Link href="/blog" className="glass-card px-6 py-3 rounded border border-[var(--neon-green)] text-[var(--neon-green)] hover:bg-[var(--neon-green)] hover:text-[var(--dark-bg)] font-bold transition duration-300">
              <i className="fas fa-arrow-left mr-2"></i>Back to Blog
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen relative">
      <MatrixRain />

      <nav className="fixed top-0 left-0 right-0 z-50 glass-card mx-0 mt-0 md:mx-4 md:mt-4 md:max-w-[calc(100%-2rem)] md:left-1/2 md:-translate-x-1/2">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center gap-4">
          <div className="flex items-center">
            <div className="mr-3"><i className="fas fa-code text-2xl neon-text"></i></div>
            <h1 className="text-lg md:text-xl font-bold">
              <span className="glitch" data-text="KARANGWA.DEV">KARANGWA.DEV</span>
            </h1>
          </div>
          <div className="hidden md:flex items-center justify-end flex-1 gap-4 lg:gap-6 xl:gap-8">
            <Link href="/" className="text-sm lg:text-base xl:text-lg font-extrabold text-white hover:text-[var(--neon-green)] transition duration-300 py-2 whitespace-nowrap">HOME</Link>
            <Link href="/ishyango" className="text-sm lg:text-base xl:text-lg font-extrabold text-white hover:text-[var(--neon-green)] transition duration-300 py-2 whitespace-nowrap">ISHYANGO.AI</Link>
            <Link href="/blog" className="text-sm lg:text-base xl:text-lg font-extrabold text-[var(--neon-green)] transition duration-300 py-2 whitespace-nowrap">AI NEWS</Link>
            <MobileNav links={[
              { href: "/", label: "HOME" },
              { href: "/blog", label: "AI NEWS", active: true },
              { href: "/jobs", label: "JOBS" },
              { href: "/ideas", label: "IDEAS" },
            ]} />
          </div>
        </div>
      </nav>

      <article className="pt-40 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Link href="/blog" className="glass-card inline-block px-4 py-2 rounded text-sm text-gray-300 hover:text-[var(--neon-green)] transition duration-300 mb-8">
            <i className="fas fa-arrow-left mr-2"></i>Back to briefs
          </Link>

          <header className="mb-12">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 neon-text leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-6">
              <span><i className="far fa-calendar mr-2"></i>
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  month: "long", day: "numeric", year: "numeric"
                })}
              </span>
              <span><i className="far fa-user mr-2"></i>{post.author}</span>
              {post.sourceUrl && (
                <a href={post.sourceUrl} target="_blank" rel="noopener noreferrer"
                  className="text-[var(--neon-blue)] hover:underline">
                  <i className="fas fa-external-link-alt mr-1"></i>Source
                </a>
              )}
            </div>

            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-[var(--neon-green)] bg-opacity-20 text-[var(--dark-bg)] rounded text-xs md:text-sm border border-[var(--neon-green)]">
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          <div className="glass-card p-8 md:p-12 lg:p-16 mb-12">
            <div className="text-gray-300 text-lg leading-relaxed space-y-4">
              {post.content.split("\n").map((line, i) => {
                if (line.startsWith("## ")) {
                  return <h2 key={i} className="text-2xl md:text-3xl font-bold mt-10 mb-6 neon-blue">{line.slice(3)}</h2>;
                }
                if (line.startsWith("### ")) {
                  return <h3 key={i} className="text-xl md:text-2xl font-bold mt-8 mb-4 text-white">{line.slice(4)}</h3>;
                }
                if (line.startsWith("**") && line.endsWith("**")) {
                  return <p key={i} className="font-bold text-white mt-4">{line.slice(2, -2)}</p>;
                }
                if (line.startsWith("- ")) {
                  return <li key={i} className="ml-6 text-gray-400 list-disc">{line.slice(2)}</li>;
                }
                if (line.trim() === "") return <br key={i} />;
                return <p key={i}>{line}</p>;
              })}
            </div>
          </div>

          {/* Share buttons */}
          <div id="share" className="glass-card p-8 md:p-10 mb-12 text-center">
            <p className="text-lg font-bold mb-6 neon-text">Share this brief</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); const u = encodeURIComponent(window.location.href); const t = encodeURIComponent(post.title); window.open(`https://twitter.com/intent/tweet?text=${t}&url=${u}`, '_blank', 'width=600,height=400'); }}
                className="glass-card px-5 py-3 rounded border border-[#1DA1F2] text-[#1DA1F2] hover:bg-[#1DA1F2] hover:text-white font-bold transition text-sm flex items-center gap-2"
              ><i className="fab fa-x-twitter"></i> X</a>

              <a
                href="#"
                onClick={(e) => { e.preventDefault(); const u = encodeURIComponent(window.location.href); window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${u}`, '_blank', 'width=600,height=400'); }}
                className="glass-card px-5 py-3 rounded border border-[#0A66C2] text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white font-bold transition text-sm flex items-center gap-2"
              ><i className="fab fa-linkedin-in"></i> LinkedIn</a>

              <a
                href="#"
                onClick={(e) => { e.preventDefault(); const u = encodeURIComponent(window.location.href); window.open(`https://www.facebook.com/sharer/sharer.php?u=${u}`, '_blank', 'width=600,height=400'); }}
                className="glass-card px-5 py-3 rounded border border-[#1877F2] text-[#1877F2] hover:bg-[#1877F2] hover:text-white font-bold transition text-sm flex items-center gap-2"
              ><i className="fab fa-facebook-f"></i> Facebook</a>

              <a
                href="#"
                onClick={(e) => { e.preventDefault(); const u = encodeURIComponent(window.location.href); const t = encodeURIComponent(post.title); window.open(`https://wa.me/?text=${t}%20${u}`, '_blank'); }}
                className="glass-card px-5 py-3 rounded border border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white font-bold transition text-sm flex items-center gap-2"
              ><i className="fab fa-whatsapp"></i> WhatsApp</a>

              <button
                onClick={() => { navigator.clipboard.writeText(window.location.href); alert('Link copied!'); }}
                className="glass-card px-5 py-3 rounded border border-gray-500 text-gray-300 hover:border-[var(--neon-green)] hover:text-[var(--neon-green)] font-bold transition text-sm flex items-center gap-2"
              ><i className="fas fa-link"></i> Copy link</button>
            </div>
          </div>

          {/* Newsletter CTA */}
          <div className="mb-16">
            <NewsletterSignup />
          </div>

          {/* Navigation */}
          <div className="text-center">
            <Link href="/blog" className="glass-card px-8 py-4 rounded border border-gray-500 text-gray-300 hover:border-[var(--neon-blue)] hover:text-[var(--neon-blue)] transition duration-300 inline-block">
              <i className="fas fa-arrow-left mr-2"></i>All briefs
            </Link>
          </div>
        </div>
      </article>

      <footer className="glass-card mx-4 mb-6 md:mb-8">
        <div className="container mx-auto px-4 py-6 text-center">
          <p className="text-gray-400 text-xs md:text-sm">
            <i className="fas fa-code mr-2"></i>
            Built with <span className="neon-green">♥</span> by Karangwa Abubakar
          </p>
        </div>
      </footer>
    </main>
  );
}
