'use client';

import Link from 'next/link';
import MatrixRain from '@/components/MatrixRain';
import NewsletterSignup from '@/components/NewsletterSignup';

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

function getShareUrl(slug: string) {
  return `https://www.karangwa.com/blog/${slug}`;
}

export default function Blog() {
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
            <Link href="/#ishyango" className="text-sm lg:text-base xl:text-lg font-extrabold text-white hover:text-[var(--neon-green)] hover:underline decoration-[var(--neon-green)] decoration-2 underline-offset-8 transition duration-300 cursor-pointer py-2 whitespace-nowrap">ISHYANGO.AI</Link>
            <Link href="/#projects" className="text-sm lg:text-base xl:text-lg font-extrabold text-white hover:text-[var(--neon-green)] hover:underline decoration-[var(--neon-green)] decoration-2 underline-offset-8 transition duration-300 cursor-pointer py-2 whitespace-nowrap">PROJECTS</Link>
            <Link href="/blog" className="text-sm lg:text-base xl:text-lg font-extrabold text-[var(--neon-green)] hover:text-[var(--neon-green)] hover:underline decoration-[var(--neon-green)] decoration-2 underline-offset-8 transition duration-300 cursor-pointer py-2 whitespace-nowrap">AI NEWS</Link>
            <Link href="/#about" className="text-sm lg:text-base xl:text-lg font-extrabold text-white hover:text-[var(--neon-green)] hover:underline decoration-[var(--neon-green)] decoration-2 underline-offset-8 transition duration-300 cursor-pointer py-2 whitespace-nowrap">ABOUT</Link>
            <Link href="/#contact" className="text-sm lg:text-base xl:text-lg font-extrabold text-white hover:text-[var(--neon-green)] hover:underline decoration-[var(--neon-green)] decoration-2 underline-offset-8 transition duration-300 cursor-pointer py-2 whitespace-nowrap">CONTACT</Link>
          </div>
        </div>
      </nav>

      {/* Blog Header */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl text-center flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold mb-6">
            <span className="neon-text">K(now).AI</span>
          </h1>
          <p className="text-lg md:text-xl xl:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
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
        <div className="container mx-auto max-w-5xl xl:max-w-6xl 2xl:max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 xl:gap-10">
            {blogPosts.map((post) => (
              <div key={post.slug} className="glass-card p-6 hover:transform hover:-translate-y-2 transition duration-300">
                <Link href={`/blog/${post.slug}`}>
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
                    <span key={tag} className="px-2 md:px-3 py-1 bg-[var(--neon-green)] bg-opacity-20 text-[var(--dark-bg)] rounded text-xs md:text-sm border border-[var(--neon-green)]">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-[var(--neon-blue)] hover:underline text-sm md:text-base">
                  <i className="fas fa-arrow-right mr-2"></i>Read More
                </span>
                </Link>

                {/* Social share buttons */}
                <div className="flex gap-2 mt-4 pt-3 border-t border-gray-700 border-opacity-50">
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(getShareUrl(post.slug))}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-[#1DA1F2] text-sm transition duration-200"
                    aria-label="Share on Twitter"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(getShareUrl(post.slug))}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-[#0A66C2] text-sm transition duration-200"
                    aria-label="Share on LinkedIn"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(getShareUrl(post.slug))}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-[#1877F2] text-sm transition duration-200"
                    aria-label="Share on Facebook"
                  >
                    <i className="fab fa-facebook"></i>
                  </a>
                  <button
                    onClick={() => navigator.clipboard.writeText(getShareUrl(post.slug))}
                    className="text-gray-500 hover:text-[var(--neon-green)] text-sm transition duration-200 ml-auto"
                    aria-label="Copy link"
                  >
                    <i className="fas fa-link"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="subscribe" className="py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <NewsletterSignup />
        </div>
      </section>

      {/* Footer */}
      <footer className="glass-card mx-4 mb-6 md:mb-8">
        <div className="container mx-auto px-4 py-6 text-center">
          {/* Social Media Links */}
          <div className="flex justify-center gap-6 mb-6">
            <a 
              href="https://github.com/Papi84" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-[var(--neon-green)] text-3xl transition duration-300 transform hover:scale-110"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a 
              href="https://linkedin.com/in/karangwa-papi-9ab80426b/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-[#0A66C2] text-3xl transition duration-300 transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a 
              href="https://twitter.com/coolerme" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-[#1DA1F2] text-3xl transition duration-300 transform hover:scale-110"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
          
          <p className="text-gray-400 text-xs md:text-sm mb-2 flex items-center justify-center">
            <i className="fas fa-code mr-2"></i>
            Built with <span className="neon-green ml-1">♥</span> by Karangwa Abubakar
          </p>
          <p className="text-gray-400 text-xs md:text-sm flex items-center justify-center">
            © 2026 - Solving problems like a real engineer
          </p>
          
          
        </div>
      </footer>
    </main>
  );
}
