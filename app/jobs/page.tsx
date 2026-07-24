'use client';

import { useState, useEffect } from 'react';
import MobileNav from '@/components/MobileNav';
import Link from 'next/link';
import MatrixRain from '@/components/MatrixRain';

interface Job {
  id: number;
  title: string;
  company: string;
  location: string | null;
  type: string;
  salary_range: string | null;
  description: string;
  requirements: string[];
  apply_url: string | null;
  is_featured: boolean;
  created_at: string;
}

const TYPE_BADGES: Record<string, string> = {
  'full-time': 'bg-blue-500/20 text-blue-300 border-blue-500',
  'part-time': 'bg-purple-500/20 text-purple-300 border-purple-500',
  'contract': 'bg-yellow-500/20 text-yellow-300 border-yellow-500',
  'remote': 'bg-green-500/20 text-green-300 border-green-500',
  'internship': 'bg-pink-500/20 text-pink-300 border-pink-500',
};

export default function JobsPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>('all');

  useEffect(() => {
    fetch('/api/jobs')
      .then((r) => r.json())
      .then((data) => setJobs(data.jobs || []))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const filtered = filter === 'all' ? jobs : jobs.filter((j) => j.type === filter);
  const featured = filtered.filter((j) => j.is_featured);
  const regular = filtered.filter((j) => !j.is_featured);

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
            <Link href="/" className="text-sm lg:text-base xl:text-lg font-extrabold text-white hover:text-[var(--neon-green)] transition duration-300 py-2 whitespace-nowrap">HOME</Link>
            <Link href="/ishyango" className="text-sm lg:text-base xl:text-lg font-extrabold text-white hover:text-[var(--neon-green)] transition duration-300 py-2 whitespace-nowrap">ISHYANGO.AI</Link>
            <Link href="/blog" className="text-sm lg:text-base xl:text-lg font-extrabold text-white hover:text-[var(--neon-green)] transition duration-300 py-2 whitespace-nowrap">AI NEWS</Link>
            <Link href="/jobs" className="text-sm lg:text-base xl:text-lg font-extrabold text-[var(--neon-green)] transition duration-300 py-2 whitespace-nowrap">JOBS</Link>
            <Link href="/#projects" className="text-sm lg:text-base xl:text-lg font-extrabold text-white hover:text-[var(--neon-green)] transition duration-300 py-2 whitespace-nowrap">PROJECTS</Link>
            <Link href="/#contact" className="text-sm lg:text-base xl:text-lg font-extrabold text-white hover:text-[var(--neon-green)] transition duration-300 py-2 whitespace-nowrap">CONTACT</Link>
          </div>
          <MobileNav links={[
            { href: "/", label: "HOME" },
            { href: "/ishyango", label: "ISHYANGO.AI" },
            { href: "/blog", label: "AI NEWS" },
            { href: "/jobs", label: "JOBS" },
            { href: "/ideas", label: "IDEAS" },
            { href: "/#projects", label: "PROJECTS" },
            { href: "/#contact", label: "CONTACT" },
            ]} />
        </div>
      </nav>

      {/* Header */}
      <section className="pt-32 pb-12 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="neon-blue">Job</span> <span className="neon-text">Board</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
            Tech & AI jobs for builders. Find your next role — or post one.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/jobs/submit" className="glass-card px-6 py-3 rounded border border-[var(--neon-green)] text-[var(--neon-green)] hover:bg-[var(--neon-green)] hover:text-[var(--dark-bg)] font-bold transition text-sm md:text-base">
              <i className="fas fa-plus mr-2"></i>Post a Job
            </Link>
            <a href="#services" className="glass-card px-6 py-3 rounded border border-[var(--neon-blue)] text-[var(--neon-blue)] hover:bg-[var(--neon-blue)] hover:text-[var(--dark-bg)] font-bold transition text-sm md:text-base">
              <i className="fas fa-star mr-2"></i>Career Services
            </a>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="pb-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap gap-2 justify-center">
            {['all', 'full-time', 'part-time', 'contract', 'remote', 'internship'].map((t) => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={`px-4 py-2 rounded-full text-xs md:text-sm font-semibold border transition ${
                  filter === t
                    ? 'bg-[var(--neon-green)] text-[var(--dark-bg)] border-[var(--neon-green)]'
                    : 'glass-card text-gray-300 border-gray-600 hover:border-[var(--neon-green)]'
                }`}
              >
                {t === 'all' ? 'All' : t.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Jobs List */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-5xl">
          {loading ? (
            <div className="text-center py-16">
              <i className="fas fa-spinner fa-spin text-4xl neon-text"></i>
              <p className="text-gray-400 mt-4">Loading jobs...</p>
            </div>
          ) : filtered.length === 0 ? (
            <div className="glass-card p-16 text-center">
              <i className="fas fa-briefcase text-5xl text-gray-500 mb-4"></i>
              <p className="text-xl text-gray-300">No jobs listed yet</p>
              <p className="text-gray-500 mt-2">Be the first to post one!</p>
              <Link href="/jobs/submit" className="inline-block mt-6 glass-card px-6 py-3 rounded border border-[var(--neon-green)] text-[var(--neon-green)] hover:bg-[var(--neon-green)] hover:text-[var(--dark-bg)] font-bold transition text-sm">
                <i className="fas fa-plus mr-2"></i>Post a Job
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Featured */}
              {featured.map((job) => (
                <JobCard key={job.id} job={job} featured />
              ))}
              {/* Regular */}
              {regular.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Career Services */}
      <section id="services" className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 neon-blue">
            Career Services
          </h2>
          <p className="text-center text-gray-300 mb-12 max-w-xl mx-auto">
            Get your CV polished, ace the interview, and land the job.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* CV Polish */}
            <div className="glass-card p-8 text-center hover:border-[var(--neon-green)] transition">
              <i className="fas fa-file-alt text-4xl neon-text mb-4"></i>
              <h3 className="text-xl font-bold mb-2">CV Polish</h3>
              <p className="text-3xl font-bold mb-4">15,000 <span className="text-sm text-gray-400">RWF</span></p>
              <p className="text-gray-400 text-sm mb-4">AI-powered resume optimization + human review</p>
              <ul className="text-left text-sm text-gray-300 space-y-2 mb-6">
                <li><i className="fas fa-check text-[var(--neon-green)] mr-2"></i>ATS optimization</li>
                <li><i className="fas fa-check text-[var(--neon-green)] mr-2"></i>Keyword targeting</li>
                <li><i className="fas fa-check text-[var(--neon-green)] mr-2"></i>Format cleanup</li>
                <li><i className="fas fa-check text-[var(--neon-green)] mr-2"></i>1 revision round</li>
              </ul>
              <a href="mailto:stevegoharder@gmail.com?subject=CV%20Polish%20Service" className="glass-card px-6 py-3 rounded border border-[var(--neon-green)] text-[var(--neon-green)] hover:bg-[var(--neon-green)] hover:text-[var(--dark-bg)] font-bold transition text-sm inline-block">
                Get Started
              </a>
            </div>

            {/* Interview Prep */}
            <div className="glass-card p-8 text-center border-[var(--neon-blue)] hover:border-[var(--neon-blue)] transition">
              <i className="fas fa-comments text-4xl neon-blue mb-4"></i>
              <h3 className="text-xl font-bold mb-2">Interview Prep</h3>
              <p className="text-3xl font-bold mb-4">25,000 <span className="text-sm text-gray-400">RWF</span></p>
              <p className="text-gray-400 text-sm mb-4">Mock interview + personalized feedback + AI coaching</p>
              <ul className="text-left text-sm text-gray-300 space-y-2 mb-6">
                <li><i className="fas fa-check text-[var(--neon-blue)] mr-2"></i>1 mock interview session</li>
                <li><i className="fas fa-check text-[var(--neon-blue)] mr-2"></i>AI-powered feedback</li>
                <li><i className="fas fa-check text-[var(--neon-blue)] mr-2"></i>Common questions guide</li>
                <li><i className="fas fa-check text-[var(--neon-blue)] mr-2"></i>Follow-up tips</li>
              </ul>
              <a href="mailto:stevegoharder@gmail.com?subject=Interview%20Prep%20Service" className="glass-card px-6 py-3 rounded border border-[var(--neon-blue)] text-[var(--neon-blue)] hover:bg-[var(--neon-blue)] hover:text-[var(--dark-bg)] font-bold transition text-sm inline-block">
                Get Started
              </a>
            </div>

            {/* Full Package */}
            <div className="glass-card p-8 text-center border-[var(--neon-green)] border-2 hover:border-[var(--neon-green)] transition relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--neon-green)] text-[var(--dark-bg)] px-4 py-1 rounded-full text-xs font-bold">BEST VALUE</span>
              <i className="fas fa-crown text-4xl text-yellow-400 mb-4"></i>
              <h3 className="text-xl font-bold mb-2">Full Package</h3>
              <p className="text-3xl font-bold mb-4">35,000 <span className="text-sm text-gray-400">RWF</span></p>
              <p className="text-gray-400 text-sm mb-4">CV polish + interview prep + priority job matching</p>
              <ul className="text-left text-sm text-gray-300 space-y-2 mb-6">
                <li><i className="fas fa-check text-[var(--neon-green)] mr-2"></i>Everything in CV Polish</li>
                <li><i className="fas fa-check text-[var(--neon-green)] mr-2"></i>Everything in Interview Prep</li>
                <li><i className="fas fa-check text-[var(--neon-green)] mr-2"></i>Priority job alerts</li>
                <li><i className="fas fa-check text-[var(--neon-green)] mr-2"></i>Direct referrals</li>
              </ul>
              <a href="mailto:stevegoharder@gmail.com?subject=Full%20Career%20Package" className="glass-card px-6 py-3 rounded bg-[var(--neon-green)] text-[var(--dark-bg)] hover:bg-[var(--neon-green)] font-bold transition text-sm inline-block">
                Get Started
              </a>
            </div>
          </div>
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

// Job Card Component
function JobCard({ job, featured }: { job: Job; featured?: boolean }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`glass-card p-6 transition ${
      featured ? 'border-[var(--neon-green)] border-2' : 'hover:border-[var(--neon-blue)]'
    }`}>
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            {featured && <span className="text-xs bg-yellow-500/20 text-yellow-300 px-2 py-0.5 rounded font-bold">FEATURED</span>}
            <span className={`text-xs px-2 py-0.5 rounded border ${TYPE_BADGES[job.type] || 'bg-gray-500/20 text-gray-300'}`}>
              {job.type.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
            </span>
          </div>
          <h3 className="text-xl font-bold text-white">{job.title}</h3>
          <p className="text-[var(--neon-green)] font-semibold">{job.company}</p>
          <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 mt-2">
            {job.location && <span><i className="fas fa-map-marker-alt mr-1"></i>{job.location}</span>}
            {job.salary_range && <span><i className="fas fa-money-bill-wave mr-1"></i>{job.salary_range}</span>}
            <span><i className="far fa-calendar mr-1"></i>{new Date(job.created_at).toLocaleDateString()}</span>
          </div>
        </div>
      </div>

      <p className={`text-gray-300 text-sm mt-4 ${expanded ? '' : 'line-clamp-2'}`}>
        {job.description}
      </p>

      {job.description.length > 150 && (
        <button onClick={() => setExpanded(!expanded)} className="text-xs text-[var(--neon-blue)] hover:underline mt-1">
          {expanded ? 'Show less' : 'Read more'}
        </button>
      )}

      {job.requirements.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          {job.requirements.map((req, i) => (
            <span key={i} className="text-xs px-2 py-0.5 rounded bg-gray-700/30 text-gray-400 border border-gray-600">{req}</span>
          ))}
        </div>
      )}

      <div className="mt-4">
        {job.apply_url ? (
          <a href={job.apply_url} target="_blank" rel="noopener noreferrer"
            className="glass-card px-5 py-2 rounded border border-[var(--neon-green)] text-[var(--neon-green)] hover:bg-[var(--neon-green)] hover:text-[var(--dark-bg)] font-bold transition text-sm inline-block">
            <i className="fas fa-external-link-alt mr-1"></i>Apply
          </a>
        ) : (
          <a href="mailto:stevegoharder@gmail.com?subject=Application%20for%20Job%20%23" className="glass-card px-5 py-2 rounded border border-gray-500 text-gray-300 hover:border-[var(--neon-green)] transition text-sm inline-block">
            <i className="fas fa-envelope mr-1"></i>Apply via Email
          </a>
        )}
      </div>
    </div>
  );
}
