'use client';

import { useState } from 'react';
import MobileNav from '@/components/MobileNav';
import Link from 'next/link';
import MatrixRain from '@/components/MatrixRain';

export default function SubmitJobPage() {
  const [form, setForm] = useState({
    title: '', company: '', location: '', type: 'full-time',
    salary_range: '', description: '', requirements: '', apply_url: '', contact_email: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/jobs/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          requirements: form.requirements.split(',').map(r => r.trim()).filter(Boolean),
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus('success');
        setMessage('Job posted! It will appear after review.');
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong.');
      }
    } catch {
      setStatus('error');
      setMessage('Network error. Try again.');
    }
  }

  return (
    <main className="min-h-screen relative">
      <MatrixRain />

      <nav className="fixed top-0 left-0 right-0 z-50 glass-card mx-0 mt-0 md:mx-4 md:mt-4 md:max-w-[calc(100%-2rem)] md:left-1/2 md:-translate-x-1/2">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center gap-4">
          <div className="flex items-center">
            <div className="mr-3"><i className="fas fa-code text-2xl neon-text"></i></div>
            <h1 className="text-lg md:text-xl font-bold"><span className="glitch" data-text="KARANGWA.DEV">KARANGWA.DEV</span></h1>
          </div>
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            <Link href="/" className="text-sm lg:text-base font-extrabold text-white hover:text-[var(--neon-green)] transition py-2">HOME</Link>
            <Link href="/jobs" className="text-sm lg:text-base font-extrabold text-[var(--neon-green)] transition py-2">JOBS</Link>
          </div>
          <MobileNav links={[
            { href: "/", label: "HOME" },
            { href: "/blog", label: "AI NEWS" },
            { href: "/jobs", label: "JOBS", active: true },
            { href: "/ideas", label: "IDEAS" },
            ]} />
        </div>
      </nav>

      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-2xl">
          <Link href="/jobs" className="glass-card inline-block px-4 py-2 rounded text-sm text-gray-300 hover:text-[var(--neon-green)] transition mb-8">
            <i className="fas fa-arrow-left mr-2"></i>Back to jobs
          </Link>

          <h1 className="text-3xl md:text-5xl font-bold mb-4 neon-text">Post a Job</h1>
          <p className="text-gray-400 mb-8">Free for now. Featured listings coming soon.</p>

          {status === 'success' ? (
            <div className="glass-card p-8 text-center">
              <i className="fas fa-check-circle text-5xl neon-green mb-4"></i>
              <p className="text-xl font-bold text-white mb-2">Job Posted! 🎉</p>
              <p className="text-gray-400 mb-6">{message}</p>
              <Link href="/jobs" className="glass-card px-6 py-3 rounded border border-[var(--neon-green)] text-[var(--neon-green)] hover:bg-[var(--neon-green)] hover:text-[var(--dark-bg)] font-bold transition inline-block">
                View Jobs
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-1">Job Title *</label>
                <input required value={form.title} onChange={(e) => setForm({...form, title: e.target.value})}
                  className="w-full px-4 py-3 rounded bg-[var(--dark-bg)] border border-gray-600 text-white focus:border-[var(--neon-green)] focus:outline-none transition text-sm" />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-1">Company *</label>
                  <input required value={form.company} onChange={(e) => setForm({...form, company: e.target.value})}
                    className="w-full px-4 py-3 rounded bg-[var(--dark-bg)] border border-gray-600 text-white focus:border-[var(--neon-green)] focus:outline-none transition text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-1">Location</label>
                  <input value={form.location} onChange={(e) => setForm({...form, location: e.target.value})}
                    className="w-full px-4 py-3 rounded bg-[var(--dark-bg)] border border-gray-600 text-white focus:border-[var(--neon-green)] focus:outline-none transition text-sm"
                    placeholder="e.g. Kigali, Rwanda" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-1">Type</label>
                  <select value={form.type} onChange={(e) => setForm({...form, type: e.target.value})}
                    className="w-full px-4 py-3 rounded bg-[var(--dark-bg)] border border-gray-600 text-white focus:border-[var(--neon-green)] focus:outline-none transition text-sm">
                    <option value="full-time">Full Time</option>
                    <option value="part-time">Part Time</option>
                    <option value="contract">Contract</option>
                    <option value="remote">Remote</option>
                    <option value="internship">Internship</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-1">Salary Range</label>
                  <input value={form.salary_range} onChange={(e) => setForm({...form, salary_range: e.target.value})}
                    className="w-full px-4 py-3 rounded bg-[var(--dark-bg)] border border-gray-600 text-white focus:border-[var(--neon-green)] focus:outline-none transition text-sm"
                    placeholder="e.g. $30K - $80K" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-1">Description *</label>
                <textarea required rows={5} value={form.description} onChange={(e) => setForm({...form, description: e.target.value})}
                  className="w-full px-4 py-3 rounded bg-[var(--dark-bg)] border border-gray-600 text-white focus:border-[var(--neon-green)] focus:outline-none transition text-sm" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-1">Requirements (comma-separated)</label>
                <input value={form.requirements} onChange={(e) => setForm({...form, requirements: e.target.value})}
                  className="w-full px-4 py-3 rounded bg-[var(--dark-bg)] border border-gray-600 text-white focus:border-[var(--neon-green)] focus:outline-none transition text-sm"
                  placeholder="e.g. Python, React, 2+ years experience" />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-1">Apply URL</label>
                  <input type="url" value={form.apply_url} onChange={(e) => setForm({...form, apply_url: e.target.value})}
                    className="w-full px-4 py-3 rounded bg-[var(--dark-bg)] border border-gray-600 text-white focus:border-[var(--neon-green)] focus:outline-none transition text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-1">Contact Email</label>
                  <input type="email" value={form.contact_email} onChange={(e) => setForm({...form, contact_email: e.target.value})}
                    className="w-full px-4 py-3 rounded bg-[var(--dark-bg)] border border-gray-600 text-white focus:border-[var(--neon-green)] focus:outline-none transition text-sm" />
                </div>
              </div>

              {status === 'error' && (
                <p className="text-red-400 text-sm text-center">{message}</p>
              )}

              <button type="submit" disabled={status === 'loading'}
                className="w-full bg-[var(--neon-green)] text-[var(--dark-bg)] py-3 rounded font-bold hover:shadow-lg hover:shadow-[var(--glow-green)] disabled:opacity-50 transition text-sm">
                {status === 'loading' ? <><i className="fas fa-spinner fa-spin mr-2"></i>Posting...</> : <><i className="fas fa-paper-plane mr-2"></i>Post Job</>}
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
