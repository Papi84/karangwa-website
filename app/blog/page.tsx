'use client';

import Link from 'next/link';
import MatrixRain from '@/components/MatrixRain';

const blogPosts = [
  {
    slug: 'why-ishyango-ai',
    title: 'Why I\'m Building Ishyango.AI',
    excerpt: 'The story behind the 40,000-year-old bone that inspired an AI tool for students.',
    date: 'June 11, 2026',
    readTime: '5 min read',
    tags: ['Ishyango.AI', 'EdTech', 'AI'],
  },
];

export default function Blog() {
  return (
    <main className="min-h-screen relative">
      <MatrixRain />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-card mx-4 mt-4 md:mx-8">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center flex-wrap gap-4">
          <div className="flex items-center">
            <div className="mr-3">
              <i className="fas fa-code text-2xl neon-text"></i>
            </div>
            <h1 className="text-lg md:text-xl font-bold">
              <span className="glitch" data-text="KARANGWA.DEV">KARANGWA.DEV</span>
            </h1>
          </div>
          
          <div className="hidden md:flex items-center justify-end flex-1 gap-8 lg:gap-12">
            <Link href="/" className="text-lg lg:text-2xl font-extrabold text-white hover:text-[var(--neon-green)] hover:underline decoration-[var(--neon-green)] decoration-2 underline-offset-8 transition duration-300 cursor-pointer py-2">HOME</Link>
            <Link href="/#ishyango" className="text-lg lg:text-2xl font-extrabold text-white hover:text-[var(--neon-green)] hover:underline decoration-[var(--neon-green)] decoration-2 underline-offset-8 transition duration-300 cursor-pointer py-2">ISHYANGO.AI</Link>
            <Link href="/#projects" className="text-lg lg:text-2xl font-extrabold text-white hover:text-[var(--neon-green)] hover:underline decoration-[var(--neon-green)] decoration-2 underline-offset-8 transition duration-300 cursor-pointer py-2">PROJECTS</Link>
            <Link href="/blog" className="text-lg lg:text-2xl font-extrabold text-[var(--neon-green)] hover:text-[var(--neon-green)] hover:underline decoration-[var(--neon-green)] decoration-2 underline-offset-8 transition duration-300 cursor-pointer py-2">AI NEWS</Link>
            <Link href="/#about" className="text-lg lg:text-2xl font-extrabold text-white hover:text-[var(--neon-green)] hover:underline decoration-[var(--neon-green)] decoration-2 underline-offset-8 transition duration-300 cursor-pointer py-2">ABOUT</Link>
            <Link href="/#contact" className="text-lg lg:text-2xl font-extrabold text-white hover:text-[var(--neon-green)] hover:underline decoration-[var(--neon-green)] decoration-2 underline-offset-8 transition duration-300 cursor-pointer py-2">CONTACT</Link>
          </div>
        </div>
      </nav>

      {/* Blog Header */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-5xl text-center flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="neon-text">K(now).AI</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Weekly AI news & insights for students and builders. 
            EdTech focus, technical deep-dives, and building journey updates.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="#subscribe" className="glass-card px-8 py-4 rounded border border-[var(--neon-green)] text-[var(--neon-green)] hover:bg-[var(--neon-green)] hover:text-[var(--dark-bg)] font-bold transition duration-300 text-base md:text-lg">
              <i className="fas fa-envelope mr-2"></i>Subscribe
            </Link>
            <Link href="/" className="glass-card px-8 py-4 rounded border border-gray-500 text-gray-300 hover:border-[var(--neon-blue)] hover:text-[var(--neon-blue)] transition duration-300 text-base md:text-lg">
              <i className="fas fa-arrow-left mr-2"></i>Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {blogPosts.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.slug} className="glass-card p-6 hover:transform hover:-translate-y-2 transition duration-300">
                <div className="flex items-center mb-4">
                  <i className="fas fa-newspaper text-3xl md:text-4xl neon-blue mr-3"></i>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-white">{post.title}</h3>
                    <p className="text-xs md:text-sm text-gray-400">{post.date} · {post.readTime}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm md:text-base mb-4">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span key={tag} className="px-2 md:px-3 py-1 bg-[var(--neon-green)] bg-opacity-20 text-white rounded text-xs md:text-sm border border-[var(--neon-green)]">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-[var(--neon-blue)] hover:underline text-sm md:text-base">
                  <i className="fas fa-arrow-right mr-2"></i>Read More
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="subscribe" className="py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="glass-card p-6 md:p-8 text-center">
            <i className="fas fa-newspaper text-4xl md:text-6xl neon-blue mb-4"></i>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Subscribe to K(now).AI</h2>
            <p className="text-gray-300 mb-6 text-sm md:text-base">
              Weekly AI news & insights for students and builders. 
              EdTech focus, technical deep-dives, and building journey updates.
            </p>
            <form className="flex flex-col md:flex-row gap-3 md:gap-4">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 rounded glass-card bg-transparent border border-[var(--neon-green)] text-white placeholder-gray-400 focus:outline-none focus:border-[var(--neon-blue)] text-sm md:text-base"
              />
              <button type="submit" className="glass-card px-6 py-3 rounded border border-[var(--neon-green)] text-[var(--neon-green)] hover:bg-[var(--neon-green)] hover:text-[var(--dark-bg)] font-bold hover:shadow-lg hover:shadow-[var(--glow-green)] transition duration-300 text-sm md:text-base">
                <i className="fas fa-paper-plane mr-2"></i>Subscribe
              </button>
            </form>
            <p className="text-xs md:text-sm text-gray-400 mt-4">
              <i className="fas fa-lock mr-2"></i>No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="glass-card mx-4 mb-6 md:mb-8">
        <div className="container mx-auto px-4 py-6 text-center text-gray-400 text-xs md:text-sm">
          <p>
            <i className="fas fa-code mr-2"></i>
            Built with <span className="neon-green">♥</span> by Karangwa Abubakar
          </p>
          <p className="mt-2">
            © 2026 - Solving problems like a real engineer
          </p>
        </div>
      </footer>
    </main>
  );
}
