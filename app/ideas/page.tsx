'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import MatrixRain from '@/components/MatrixRain';
import NewsletterSignup from '@/components/NewsletterSignup';

interface Idea {
  id: number;
  title: string;
  description: string;
  category: string | null;
  tech_stack: string[];
  user_name: string | null;
  status: string;
  votes: number;
  scope_breakdown: string | null;
  cost_estimate: string | null;
  time_estimate: string | null;
  quoted_price: number | null;
  created_at: string;
}

const STATUS_BADGES: Record<string, string> = {
  submitted: 'bg-gray-500/20 text-gray-300 border-gray-500',
  scoped: 'bg-blue-500/20 text-blue-300 border-blue-500',
  quoted: 'bg-purple-500/20 text-purple-300 border-purple-500',
  in_progress: 'bg-yellow-500/20 text-yellow-300 border-yellow-500',
  completed: 'bg-green-500/20 text-green-300 border-green-500',
};

export default function IdeasPage() {
  const [ideas, setIdeas] = useState<Idea[]>([]);
  const [loading, setLoading] = useState(true);
  const [showSubmit, setShowSubmit] = useState(false);
  const [voting, setVoting] = useState<number | null>(null);

  // Submit form state
  const [form, setForm] = useState({
    title: '', description: '', category: '', tech_stack: '', user_name: '',
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  useEffect(() => {
    fetch('/api/ideas')
      .then((r) => r.json())
      .then((data) => setIdeas(data.ideas || []))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  async function vote(ideaId: number) {
    setVoting(ideaId);
    try {
      await fetch('/api/ideas/quote', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ideaId }),
      });
      setIdeas((prev) =>
        prev.map((i) => (i.id === ideaId ? { ...i, votes: i.votes + 1 } : i))
      );
    } catch {}
    setVoting(null);
  }

  async function submitIdea(e: React.FormEvent) {
    e.preventDefault();
    setSubmitStatus('loading');
    try {
      const res = await fetch('/api/ideas/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          tech_stack: form.tech_stack.split(',').map((s) => s.trim()).filter(Boolean),
        }),
      });
      if (res.ok) {
        setSubmitStatus('success');
        setForm({ title: '', description: '', category: '', tech_stack: '', user_name: '' });
        // Refresh ideas
        const data = await fetch('/api/ideas').then((r) => r.json());
        setIdeas(data.ideas || []);
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    }
  }

  return (
    <main className="min-h-screen relative">
      <MatrixRain />

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card mx-0 mt-0 md:mx-4 md:mt-4 md:max-w-[calc(100%-2rem)] md:left-1/2 md:-translate-x-1/2">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center gap-4">
          <div className="flex items-center">
            <div className="mr-3"><i className="fas fa-code text-2xl neon-text"></i></div>
            <h1 className="text-lg md:text-xl font-bold"><span className="glitch" data-text="KARANGWA.DEV">KARANGWA.DEV</span></h1>
          </div>
          <div className="hidden md:flex items-center justify-end flex-1 gap-4 lg:gap-6 xl:gap-8">
            <Link href="/" className="text-sm lg:text-base xl:text-lg font-extrabold text-white hover:text-[var(--neon-green)] transition py-2 whitespace-nowrap">HOME</Link>
            <Link href="/blog" className="text-sm lg:text-base xl:text-lg font-extrabold text-white hover:text-[var(--neon-green)] transition py-2 whitespace-nowrap">AI NEWS</Link>
            <Link href="/jobs" className="text-sm lg:text-base xl:text-lg font-extrabold text-white hover:text-[var(--neon-green)] transition py-2 whitespace-nowrap">JOBS</Link>
            <Link href="/ideas" className="text-sm lg:text-base xl:text-lg font-extrabold text-[var(--neon-green)] transition py-2 whitespace-nowrap">IDEAS</Link>
            <Link href="/#projects" className="text-sm lg:text-base xl:text-lg font-extrabold text-white hover:text-[var(--neon-green)] transition py-2 whitespace-nowrap">PROJECTS</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-12 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="neon-text">Ideas</span> <span className="neon-blue">Vault</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
            Drop your unfinished ideas. Get them scoped, quoted, and built.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={() => setShowSubmit(!showSubmit)}
              className="glass-card px-6 py-3 rounded border border-[var(--neon-green)] text-[var(--neon-green)] hover:bg-[var(--neon-green)] hover:text-[var(--dark-bg)] font-bold transition text-sm md:text-base">
              <i className="fas fa-lightbulb mr-2"></i>Submit an Idea
            </button>
            <a href="#pricing" className="glass-card px-6 py-3 rounded border border-[var(--neon-blue)] text-[var(--neon-blue)] hover:bg-[var(--neon-blue)] hover:text-[var(--dark-bg)] font-bold transition text-sm md:text-base">
              <i className="fas fa-tag mr-2"></i>Scoping Prices
            </a>
          </div>
        </div>
      </section>

      {/* Submit Form */}
      {showSubmit && (
        <section className="pb-12 px-4">
          <div className="container mx-auto max-w-2xl">
            {submitStatus === 'success' ? (
              <div className="glass-card p-8 text-center">
                <i className="fas fa-check-circle text-5xl neon-green mb-4"></i>
                <p className="text-xl font-bold text-white mb-2">Idea Submitted! 🎉</p>
                <p className="text-gray-400 mb-4">It will be scoped shortly.</p>
                <button onClick={() => setShowSubmit(false)}
                  className="glass-card px-6 py-2 rounded border border-gray-500 text-gray-300 hover:border-[var(--neon-green)] transition text-sm">
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={submitIdea} className="glass-card p-6 space-y-4">
                <h2 className="text-xl font-bold mb-2 neon-text">Submit Your Idea</h2>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-1">Idea Title *</label>
                  <input required value={form.title} onChange={(e) => setForm({...form, title: e.target.value})}
                    className="w-full px-4 py-2.5 rounded bg-[var(--dark-bg)] border border-gray-600 text-white focus:border-[var(--neon-green)] focus:outline-none text-sm" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-1">Description *</label>
                  <textarea required rows={4} value={form.description} onChange={(e) => setForm({...form, description: e.target.value})}
                    className="w-full px-4 py-2.5 rounded bg-[var(--dark-bg)] border border-gray-600 text-white focus:border-[var(--neon-green)] focus:outline-none text-sm" />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-1">Category</label>
                    <select value={form.category} onChange={(e) => setForm({...form, category: e.target.value})}
                      className="w-full px-4 py-2.5 rounded bg-[var(--dark-bg)] border border-gray-600 text-white focus:border-[var(--neon-green)] focus:outline-none text-sm">
                      <option value="">Select...</option>
                      <option value="web-app">Web App</option>
                      <option value="mobile">Mobile App</option>
                      <option value="ai-ml">AI/ML</option>
                      <option value="saas">SaaS</option>
                      <option value="desktop">Desktop</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-1">Your Name</label>
                    <input value={form.user_name} onChange={(e) => setForm({...form, user_name: e.target.value})}
                      className="w-full px-4 py-2.5 rounded bg-[var(--dark-bg)] border border-gray-600 text-white focus:border-[var(--neon-green)] focus:outline-none text-sm" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-1">Tech Stack (comma-separated)</label>
                  <input value={form.tech_stack} onChange={(e) => setForm({...form, tech_stack: e.target.value})}
                    placeholder="e.g. React, Python, PostgreSQL"
                    className="w-full px-4 py-2.5 rounded bg-[var(--dark-bg)] border border-gray-600 text-white focus:border-[var(--neon-green)] focus:outline-none text-sm" />
                </div>

                {submitStatus === 'error' && <p className="text-red-400 text-sm">Something went wrong. Try again.</p>}

                <button type="submit" disabled={submitStatus === 'loading'}
                  className="w-full bg-[var(--neon-green)] text-[var(--dark-bg)] py-2.5 rounded font-bold hover:shadow-lg hover:shadow-[var(--glow-green)] disabled:opacity-50 transition text-sm">
                  {submitStatus === 'loading' ? 'Submitting...' : 'Submit Idea'}
                </button>
              </form>
            )}
          </div>
        </section>
      )}

      {/* Ideas Grid */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 neon-text">Trending Ideas</h2>

          {loading ? (
            <div className="text-center py-16">
              <i className="fas fa-spinner fa-spin text-4xl neon-text"></i>
              <p className="text-gray-400 mt-4">Loading ideas...</p>
            </div>
          ) : ideas.length === 0 ? (
            <div className="glass-card p-16 text-center">
              <i className="fas fa-lightbulb text-5xl text-gray-500 mb-4"></i>
              <p className="text-xl text-gray-300">No ideas yet</p>
              <p className="text-gray-500 mt-2">Be the first to drop one!</p>
              <button onClick={() => setShowSubmit(true)}
                className="mt-6 glass-card px-6 py-3 rounded border border-[var(--neon-green)] text-[var(--neon-green)] hover:bg-[var(--neon-green)] hover:text-[var(--dark-bg)] font-bold transition text-sm">
                Submit an Idea
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ideas.map((idea) => (
                <div key={idea.id} className="glass-card p-6 hover:border-[var(--neon-green)] transition flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-xs px-2 py-0.5 rounded border ${STATUS_BADGES[idea.status] || 'bg-gray-500/20'}`}>
                      {idea.status.replace('_', ' ')}
                    </span>
                    {idea.category && (
                      <span className="text-xs px-2 py-0.5 rounded bg-[var(--neon-blue)]/10 text-[var(--neon-blue)] border border-[var(--neon-blue)]/30">
                        {idea.category}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">{idea.title}</h3>
                  <p className="text-gray-400 text-sm mb-3 line-clamp-3 flex-1">{idea.description}</p>

                  {idea.tech_stack.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-3">
                      {idea.tech_stack.map((t, i) => (
                        <span key={i} className="text-xs px-1.5 py-0.5 rounded bg-gray-700/30 text-gray-400">{t}</span>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-3 border-t border-gray-700/50 mt-auto">
                    <button onClick={() => vote(idea.id)} disabled={voting === idea.id}
                      className="flex items-center gap-1 text-sm text-gray-400 hover:text-[var(--neon-green)] transition disabled:opacity-50">
                      <i className={`fas fa-arrow-up ${voting === idea.id ? 'fa-spin' : ''}`}></i>
                      <span>{idea.votes}</span>
                    </button>

                    {idea.scope_breakdown && (
                      <button onClick={() => {
                        alert(`Scope: ${idea.scope_breakdown}\n\nCost: ${idea.cost_estimate}\n\nTime: ${idea.time_estimate}`);
                      }} className="text-xs text-[var(--neon-blue)] hover:underline">
                        View Scope
                      </button>
                    )}

                    {idea.quoted_price && (
                      <span className="text-xs font-bold text-[var(--neon-green)]">{idea.quoted_price.toLocaleString()} RWF</span>
                    )}

                    {!idea.scope_breakdown && (
                      <a href="mailto:stevegoharder@gmail.com?subject=Scope%20Idea%20%23" className="text-xs text-[var(--neon-blue)] hover:underline">
                        Get Quote
                      </a>
                    )}
                  </div>

                  <div className="text-xs text-gray-500 mt-2">
                    {idea.user_name && <span>by {idea.user_name} · </span>}
                    {new Date(idea.created_at).toLocaleDateString()}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 neon-blue">
            Scoping Prices
          </h2>
          <p className="text-center text-gray-300 mb-12">
            Not sure if your idea is viable? Let us scope it.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-card p-8 text-center hover:border-[var(--neon-green)] transition">
              <i className="fas fa-brain text-4xl neon-text mb-4"></i>
              <h3 className="text-xl font-bold mb-2">Basic Scope</h3>
              <p className="text-3xl font-bold mb-4">10,000 <span className="text-sm text-gray-400">RWF</span></p>
              <ul className="text-left text-sm text-gray-300 space-y-2 mb-6">
                <li><i className="fas fa-check text-[var(--neon-green)] mr-2"></i>AI-generated breakdown</li>
                <li><i className="fas fa-check text-[var(--neon-green)] mr-2"></i>Cost & time estimate</li>
                <li><i className="fas fa-check text-[var(--neon-green)] mr-2"></i>Tech stack suggestions</li>
                <li><i className="fas fa-check text-[var(--neon-green)] mr-2"></i>48h turnaround</li>
              </ul>
              <a href="mailto:stevegoharder@gmail.com?subject=Basic%20Scope" className="glass-card px-6 py-3 rounded border border-[var(--neon-green)] text-[var(--neon-green)] hover:bg-[var(--neon-green)] hover:text-[var(--dark-bg)] font-bold transition text-sm inline-block">
                Get Scoped
              </a>
            </div>

            <div className="glass-card p-8 text-center border-[var(--neon-blue)] hover:border-[var(--neon-blue)] transition">
              <i className="fas fa-search-plus text-4xl neon-blue mb-4"></i>
              <h3 className="text-xl font-bold mb-2">Detailed Scope</h3>
              <p className="text-3xl font-bold mb-4">25,000 <span className="text-sm text-gray-400">RWF</span></p>
              <ul className="text-left text-sm text-gray-300 space-y-2 mb-6">
                <li><i className="fas fa-check text-[var(--neon-blue)] mr-2"></i>Everything in Basic</li>
                <li><i className="fas fa-check text-[var(--neon-blue)] mr-2"></i>Human expert review</li>
                <li><i className="fas fa-check text-[var(--neon-blue)] mr-2"></i>Architecture diagram</li>
                <li><i className="fas fa-check text-[var(--neon-blue)] mr-2"></i>MVP roadmap</li>
              </ul>
              <a href="mailto:stevegoharder@gmail.com?subject=Detailed%20Scope" className="glass-card px-6 py-3 rounded border border-[var(--neon-blue)] text-[var(--neon-blue)] hover:bg-[var(--neon-blue)] hover:text-[var(--dark-bg)] font-bold transition text-sm inline-block">
                Get Scoped
              </a>
            </div>

            <div className="glass-card p-8 text-center border-[var(--neon-green)] border-2 hover:border-[var(--neon-green)] transition relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--neon-green)] text-[var(--dark-bg)] px-4 py-1 rounded-full text-xs font-bold">CUSTOM</span>
              <i className="fas fa-rocket text-4xl text-yellow-400 mb-4"></i>
              <h3 className="text-xl font-bold mb-2">Full Build</h3>
              <p className="text-3xl font-bold mb-4">Custom <span className="text-sm text-gray-400">Quote</span></p>
              <ul className="text-left text-sm text-gray-300 space-y-2 mb-6">
                <li><i className="fas fa-check text-[var(--neon-green)] mr-2"></i>Complete MVP development</li>
                <li><i className="fas fa-check text-[var(--neon-green)] mr-2"></i>Dedicated team</li>
                <li><i className="fas fa-check text-[var(--neon-green)] mr-2"></i>2-week delivery sprints</li>
                <li><i className="fas fa-check text-[var(--neon-green)] mr-2"></i>Post-launch support</li>
              </ul>
              <a href="mailto:stevegoharder@gmail.com?subject=Full%20Build%20Quote" className="glass-card px-6 py-3 rounded bg-[var(--neon-green)] text-[var(--dark-bg)] hover:bg-[var(--neon-green)] font-bold transition text-sm inline-block">
                Request Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <NewsletterSignup />
        </div>
      </section>

      {/* Footer */}
      <footer className="glass-card mx-4 mb-6 md:mb-8">
        <div className="container mx-auto px-4 py-6 text-center">
          <p className="text-gray-400 text-xs md:text-sm">
            <i className="fas fa-code mr-2"></i>Built with <span className="neon-green">♥</span> by Karangwa Abubakar
          </p>
        </div>
      </footer>
    </main>
  );
}
