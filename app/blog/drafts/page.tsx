'use client';

import { useState } from 'react';
import Link from 'next/link';
import MatrixRain from '@/components/MatrixRain';

interface Draft {
  id: string;
  topic: string;
  sourceUrl: string;
  sourceText: string;
  createdAt: string;
  status: string;
}

export default function DraftsPage() {
  const [drafts, setDrafts] = useState<Draft[]>([]);
  const [scraping, setScraping] = useState(false);
  const [scraped, setScraped] = useState(false);

  async function scrapeNow() {
    setScraping(true);
    setScraped(false);
    try {
      const res = await fetch('/api/newsletter/generate');
      const data = await res.json();
      setDrafts(data.drafts || []);
      setScraped(true);
    } catch (err) {
      console.error(err);
    }
    setScraping(false);
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
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            <Link href="/" className="text-sm lg:text-base font-extrabold text-white hover:text-[var(--neon-green)] transition duration-300 py-2">HOME</Link>
            <Link href="/blog" className="text-sm lg:text-base font-extrabold text-[var(--neon-green)] transition duration-300 py-2">AI NEWS</Link>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold neon-text">Drafts</h1>
              <p className="text-gray-400 mt-2">
                AI topics scraped from X — pick one and write a post
              </p>
            </div>
            <button
              onClick={scrapeNow}
              disabled={scraping}
              className="glass-card px-6 py-3 rounded border border-[var(--neon-green)] text-[var(--neon-green)] hover:bg-[var(--neon-green)] hover:text-[var(--dark-bg)] font-bold transition duration-300 disabled:opacity-50 whitespace-nowrap"
            >
              {scraping ? (
                <><i className="fas fa-spinner fa-spin mr-2"></i>Scraping X...</>
              ) : (
                <><i className="fab fa-x-twitter mr-2"></i>Scrape X now</>
              )}
            </button>
          </div>

          {scraped && drafts.length === 0 && (
            <div className="glass-card p-8 text-center">
              <i className="fas fa-check-circle text-4xl neon-green mb-4"></i>
              <p className="text-gray-300 text-lg">Scraped but found no new topics</p>
              <p className="text-gray-500 text-sm mt-2">Try again later or check the X sources in the scraper config.</p>
            </div>
          )}

          {!scraped && drafts.length === 0 && (
            <div className="glass-card p-16 text-center">
              <i className="fas fa-pen-fancy text-6xl neon-blue mb-6"></i>
              <p className="text-gray-300 text-xl mb-2">No drafts yet</p>
              <p className="text-gray-500">Click "Scrape X now" to fetch trending AI topics from X.</p>
            </div>
          )}

          <div className="grid gap-6">
            {drafts.map((draft) => (
              <div key={draft.id} className="glass-card p-6 hover:border-[var(--neon-blue)] transition duration-300">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white">{draft.topic}</h3>
                    <p className="text-gray-400 text-sm mt-2 line-clamp-2">{draft.sourceText}</p>
                    <div className="flex items-center gap-4 mt-3 text-xs text-gray-500">
                      {draft.sourceUrl && (
                        <a href={draft.sourceUrl} target="_blank" rel="noopener noreferrer"
                          className="text-[var(--neon-blue)] hover:underline">
                          <i className="fab fa-x-twitter mr-1"></i>View source
                        </a>
                      )}
                      <span>
                        <i className="far fa-clock mr-1"></i>
                        {new Date(draft.createdAt).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/blog" className="glass-card px-6 py-3 rounded border border-gray-500 text-gray-300 hover:border-[var(--neon-green)] transition duration-300 inline-block">
              <i className="fas fa-arrow-left mr-2"></i>Back to blog
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
