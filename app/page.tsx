'use client';

import MatrixRain from '@/components/MatrixRain';
import DownloadIshyango from '@/components/DownloadIshyango';
import NewsletterSignup from '@/components/NewsletterSignup';
import Link from 'next/link';
import MobileNav from '@/components/MobileNav';

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <MatrixRain />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card mx-0 mt-0 md:mx-4 md:mt-4 md:max-w-[calc(100%-2rem)] md:left-1/2 md:-translate-x-1/2">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-3">
          <div className="flex items-center min-w-0">
            <div className="mr-3 shrink-0">
              <i className="fas fa-code text-2xl neon-text"></i>
            </div>
            <h1 className="text-base md:text-xl font-bold truncate">
              <span className="glitch" data-text="KARANGWA.DEV">KARANGWA.DEV</span>
            </h1>
          </div>

          <div className="hidden md:flex items-center justify-end flex-1 gap-4 lg:gap-6 xl:gap-8">
            <Link href="#home" className="text-sm lg:text-base xl:text-lg font-extrabold text-white hover:text-[var(--neon-green)] hover:underline decoration-[var(--neon-green)] decoration-2 underline-offset-8 transition duration-300 cursor-pointer py-2 whitespace-nowrap">HOME</Link>
            <Link href="/ishyango" className="text-sm lg:text-base xl:text-lg font-extrabold text-white hover:text-[var(--neon-green)] hover:underline decoration-[var(--neon-green)] decoration-2 underline-offset-8 transition duration-300 cursor-pointer py-2 whitespace-nowrap">ISHYANGO.AI</Link>
            <Link href="#projects" className="text-sm lg:text-base xl:text-lg font-extrabold text-white hover:text-[var(--neon-green)] hover:underline decoration-[var(--neon-green)] decoration-2 underline-offset-8 transition duration-300 cursor-pointer py-2 whitespace-nowrap">PROJECTS</Link>
            <Link href="/blog" className="text-sm lg:text-base xl:text-lg font-extrabold text-white hover:text-[var(--neon-green)] hover:underline decoration-[var(--neon-green)] decoration-2 underline-offset-8 transition duration-300 cursor-pointer py-2 whitespace-nowrap">AI NEWS</Link>
            <Link href="/jobs" className="text-sm lg:text-base xl:text-lg font-extrabold text-white hover:text-[var(--neon-green)] hover:underline decoration-[var(--neon-green)] decoration-2 underline-offset-8 transition duration-300 cursor-pointer py-2 whitespace-nowrap">JOBS</Link>
            <Link href="/ideas" className="text-sm lg:text-base xl:text-lg font-extrabold text-white hover:text-[var(--neon-green)] hover:underline decoration-[var(--neon-green)] decoration-2 underline-offset-8 transition duration-300 cursor-pointer py-2 whitespace-nowrap">IDEAS</Link>
            <Link href="#about" className="text-sm lg:text-base xl:text-lg font-extrabold text-white hover:text-[var(--neon-green)] hover:underline decoration-[var(--neon-green)] decoration-2 underline-offset-8 transition duration-300 cursor-pointer py-2 whitespace-nowrap">ABOUT</Link>
            <Link href="#contact" className="text-sm lg:text-base xl:text-lg font-extrabold text-white hover:text-[var(--neon-green)] hover:underline decoration-[var(--neon-green)] decoration-2 underline-offset-8 transition duration-300 cursor-pointer py-2 whitespace-nowrap">CONTACT</Link>
          </div>

          <MobileNav links={[
            { href: "#home", label: "HOME" },
            { href: "/ishyango", label: "ISHYANGO.AI" },
            { href: "#projects", label: "PROJECTS" },
            { href: "/blog", label: "AI NEWS" },
            { href: "/jobs", label: "JOBS" },
            { href: "/ideas", label: "IDEAS" },
            { href: "#about", label: "ABOUT" },
            { href: "#contact", label: "CONTACT" },
          ]} />
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
        <div className="container mx-auto max-w-5xl xl:max-w-6xl 2xl:max-w-7xl">
          <div className="text-center">
            <div className="mb-6 inline-block">
              <div className="glass-card p-4 md:p-6 text-left">
                <p className="text-xs md:text-base">
                  <span className="neon-text">karangwa@dev</span> cat about.txt
                </p>
                <p className="text-xs md:text-base mt-2">
                  &gt; <span className="typewriter">Building AI-powered tools for students. Creator of Ishyango.AI</span><span className="terminal-cursor"></span>
                </p>
              </div>
            </div>

            <h2 className="mb-4 text-[clamp(2.5rem,8vw,6rem)] font-bold leading-[0.9] md:mb-6">
              <span className="neon-blue">KARANGWA</span>
              <br />
              <span className="neon-text">ABUBAKAR</span>
            </h2>

            <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl mb-6 md:mb-8 text-gray-300">
              <i className="fas fa-brain mr-2 neon-text"></i>
              AI in Education + Builder
            </p>

            <p className="text-sm md:text-lg xl:text-xl mb-8 md:mb-12 text-gray-400 max-w-3xl mx-auto px-4">
              CS Student @ UCT building tools that help students learn better. 
              Currently working on <span className="neon-blue">Ishyango.AI</span> - a Git-like learning companion for PDFs.
            </p>

            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              <Link href="/ishyango" className="glass-card min-h-[44px] px-5 py-3 rounded border border-[var(--neon-green)] text-[var(--neon-green)] hover:bg-[var(--neon-green)] hover:text-[var(--dark-bg)] font-bold hover:shadow-lg hover:shadow-[var(--glow-green)] transition duration-300 text-sm md:text-base">
                <i className="fas fa-rocket mr-2"></i>Ishyango.AI
              </Link>
              <Link href="#projects" className="glass-card min-h-[44px] px-5 py-3 rounded border border-[var(--neon-green)] text-[var(--neon-green)] hover:bg-[var(--neon-green)] hover:text-[var(--dark-bg)] transition duration-300 text-sm md:text-base">
                <i className="fas fa-code mr-2"></i>Projects
              </Link>
              <Link href="https://github.com/Papi84" target="_blank" className="glass-card min-h-[44px] px-5 py-3 rounded border border-gray-500 text-gray-300 hover:border-[var(--neon-blue)] hover:text-[var(--neon-blue)] transition duration-300 text-sm md:text-base">
                <i className="fab fa-github mr-2"></i>GitHub
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Ishyango.AI Featured Section — Compact card → full page */}
      <section className="py-16 md:py-20 xl:py-28 px-4">
        <div className="container mx-auto max-w-5xl xl:max-w-6xl 2xl:max-w-7xl">
          <Link href="/ishyango">
            <div className="glass-card p-6 md:p-8 xl:p-12 text-center hover:border-[var(--neon-green)] hover:shadow-lg hover:shadow-[var(--glow-green)] transition duration-300 cursor-pointer group">
              <div className="text-4xl md:text-6xl mb-4">🦴</div>
              <h2 className="text-2xl md:text-4xl xl:text-5xl font-bold mb-4">
                <span className="glitch neon-text" data-text="ISHYANGO.AI">ISHYANGO.AI</span>
              </h2>
              <p className="text-gray-400 mb-2 text-sm md:text-base">Git-like Learning Companion for PDFs</p>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto text-sm md:text-base">
                Tracks your understanding like git commits, color-codes notes, and uses AI to connect 
                concepts across 1000+ page technical books. Named after the 40,000-year-old Ishango Bone.
              </p>
              <span className="inline-block glass-card px-6 py-3 rounded border border-[var(--neon-green)] text-[var(--neon-green)] group-hover:bg-[var(--neon-green)] group-hover:text-[var(--dark-bg)] font-bold transition duration-300 text-sm md:text-base">
                <i className="fas fa-arrow-right mr-2"></i>Go to Ishyango.AI
              </span>
            </div>
          </Link>
        </div>
      </section>

      <DownloadIshyango />

      {/* Projects Section */}
      <section id="projects" className="py-16 md:py-20 xl:py-28 px-4">
        <div className="container mx-auto max-w-5xl xl:max-w-6xl 2xl:max-w-7xl">
          <h2 className="text-2xl md:text-4xl xl:text-5xl font-bold text-center mb-12 md:mb-16">
            <span className="glitch neon-text" data-text="PROJECTS">PROJECTS</span>
          </h2>

          <div className="auto-fit-grid">
            {/* Ishyango.AI Card */}
            <div className="glass-card p-4 md:p-6">
              <div className="flex items-center mb-4">
                <i className="fas fa-brain text-3xl md:text-4xl neon-blue mr-3 md:mr-4"></i>
                <h3 className="text-lg md:text-xl font-bold">Ishyango.AI</h3>
              </div>
              <p className="text-gray-300 mb-4 text-sm md:text-base">
                Git-like learning companion for PDFs. Track understanding, make notes, retain knowledge from technical books.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 md:px-3 py-1 bg-[var(--neon-green)] bg-opacity-20 text-[var(--dark-bg)] rounded text-xs md:text-sm border border-[var(--neon-green)]">Tauri</span>
                <span className="px-2 md:px-3 py-1 bg-[var(--neon-green)] bg-opacity-20 text-[var(--dark-bg)] rounded text-xs md:text-sm border border-[var(--neon-green)]">Rust</span>
                <span className="px-2 md:px-3 py-1 bg-[var(--neon-green)] bg-opacity-20 text-[var(--dark-bg)] rounded text-xs md:text-sm border border-[var(--neon-green)]">AI</span>
              </div>
              <Link href="/ishyango" className="text-[var(--neon-blue)] hover:underline text-sm md:text-base">
                <i className="fas fa-arrow-right mr-2"></i>Learn More
              </Link>
            </div>

            {/* Buddy.AI Card */}
            <div className="glass-card p-4 md:p-6">
              <div className="flex items-center mb-4">
                <i className="fas fa-robot text-3xl md:text-4xl neon-blue mr-3 md:mr-4"></i>
                <h3 className="text-lg md:text-xl font-bold">Buddy.AI</h3>
              </div>
              <p className="text-gray-300 mb-4 text-sm md:text-base">
                Intelligent research assistant. Chat with PDFs, get AI summaries, extract key insights from academic papers.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 md:px-3 py-1 bg-[var(--neon-green)] bg-opacity-20 text-[var(--dark-bg)] rounded text-xs md:text-sm border border-[var(--neon-green)]">React</span>
                <span className="px-2 md:px-3 py-1 bg-[var(--neon-green)] bg-opacity-20 text-[var(--dark-bg)] rounded text-xs md:text-sm border border-[var(--neon-green)]">Node.js</span>
                <span className="px-2 md:px-3 py-1 bg-[var(--neon-green)] bg-opacity-20 text-[var(--dark-bg)] rounded text-xs md:text-sm border border-[var(--neon-green)]">Qwen API</span>
              </div>
              <Link href="https://github.com/Papi84" target="_blank" className="text-[var(--neon-blue)] hover:underline text-sm md:text-base">
                <i className="fab fa-github mr-2"></i>View Code
              </Link>
            </div>

            {/* Logic Gates Card */}
            <div className="glass-card p-4 md:p-6">
              <div className="flex items-center mb-4">
                <i className="fas fa-microchip text-3xl md:text-4xl neon-blue mr-3 md:mr-4"></i>
                <h3 className="text-lg md:text-xl font-bold">Logic Gates Simulator</h3>
              </div>
              <p className="text-gray-300 mb-4 text-sm md:text-base">
                C++ simulation of digital logic gates. Build circuits, test truth tables, understand computer architecture.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 md:px-3 py-1 bg-[var(--neon-green)] bg-opacity-20 text-[var(--dark-bg)] rounded text-xs md:text-sm border border-[var(--neon-green)]">C++</span>
                <span className="px-2 md:px-3 py-1 bg-[var(--neon-green)] bg-opacity-20 text-[var(--dark-bg)] rounded text-xs md:text-sm border border-[var(--neon-green)]">Digital Logic</span>
              </div>
              <Link href="https://github.com/Papi84" target="_blank" className="text-[var(--neon-blue)] hover:underline text-sm md:text-base">
                <i className="fab fa-github mr-2"></i>View Code
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="py-16 md:py-20 xl:py-28 px-4">
        <div className="container mx-auto max-w-3xl xl:max-w-4xl 2xl:max-w-5xl">
          <NewsletterSignup />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-20 xl:py-28 px-4 mb-16 md:mb-20 xl:mb-28">
        <div className="container mx-auto max-w-3xl xl:max-w-4xl 2xl:max-w-5xl">
          <h2 className="text-2xl md:text-4xl xl:text-5xl font-bold text-center mb-12 md:mb-16">
            <span className="glitch neon-text" data-text="INITIALIZE_CONTACT">INITIALIZE_CONTACT</span>
          </h2>

          <div className="glass-card p-6 md:p-8 xl:p-12">
            <div className="text-center mb-8">
              <i className="fas fa-satellite-dish text-4xl md:text-6xl xl:text-7xl neon-blue mb-4"></i>
              <p className="text-gray-300 mb-6 text-sm md:text-base xl:text-lg">
                Ready to build something amazing together? Let's connect!
              </p>
            </div>

            <div className="space-y-3 md:space-y-4">
              <a href="mailto:stevegoharder@gmail.com" className="glass-card p-3 md:p-4 flex items-center hover:bg-[var(--neon-green)] hover:bg-opacity-10 transition duration-300">
                <i className="fas fa-envelope text-xl md:text-2xl neon-green mr-3 md:mr-4"></i>
                <div>
                  <p className="font-bold text-sm md:text-base">Email</p>
                  <p className="text-gray-400 text-xs md:text-sm">stevegoharder@gmail.com</p>
                </div>
              </a>

              <a href="https://github.com/Papi84" target="_blank" className="glass-card p-3 md:p-4 flex items-center hover:bg-[var(--neon-blue)] hover:bg-opacity-10 transition duration-300">
                <i className="fab fa-github text-xl md:text-2xl neon-blue mr-3 md:mr-4"></i>
                <div>
                  <p className="font-bold text-sm md:text-base">GitHub</p>
                  <p className="text-gray-400 text-xs md:text-sm">@Papi84</p>
                </div>
              </a>

              <a href="https://linkedin.com/in/karangwa-papi-9ab80426b/" target="_blank" className="glass-card p-3 md:p-4 flex items-center hover:bg-[var(--neon-green)] hover:bg-opacity-10 transition duration-300">
                <i className="fab fa-linkedin text-xl md:text-2xl neon-green mr-3 md:mr-4"></i>
                <div>
                  <p className="font-bold text-sm md:text-base">LinkedIn</p>
                  <p className="text-gray-400 text-xs md:text-sm">Karangwa Papi</p>
                </div>
              </a>

              <a href="https://twitter.com/coolerme" target="_blank" className="glass-card p-3 md:p-4 flex items-center hover:bg-[var(--neon-blue)] hover:bg-opacity-10 transition duration-300">
                <i className="fab fa-twitter text-xl md:text-2xl neon-blue mr-3 md:mr-4"></i>
                <div>
                  <p className="font-bold text-sm md:text-base">Twitter/X</p>
                  <p className="text-gray-400 text-xs md:text-sm">@coolerme</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="support" className="py-16 md:py-20 xl:py-28 px-4">
        <div className="container mx-auto max-w-3xl xl:max-w-4xl 2xl:max-w-5xl">
          <div className="glass-card p-6 md:p-8 xl:p-12 text-center">
            <i className="fas fa-hand-holding-heart text-4xl md:text-6xl neon-blue mb-4"></i>
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold mb-4">Support This Project</h2>
            <p className="text-gray-300 mb-6 text-sm md:text-base">If you find these projects useful, consider supporting development.</p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 xl:gap-6 justify-center">
              <a href="https://paypal.me/yourusername" target="_blank" rel="noopener noreferrer" className="glass-card px-6 py-3 rounded border border-[var(--neon-green)] text-[var(--neon-green)] hover:bg-[var(--neon-green)] hover:text-[var(--dark-bg)] font-bold transition">
                Support via PayPal
              </a>

              <a href="https://patreon.com/yourusername" target="_blank" rel="noopener noreferrer" className="glass-card px-6 py-3 rounded border border-[var(--neon-blue)] text-[var(--neon-blue)] hover:bg-[var(--neon-blue)] hover:text-[var(--dark-bg)] font-bold transition">
                Become a Patron
              </a>

              <a href="https://github.com/sponsors/Papi84" target="_blank" rel="noopener noreferrer" className="glass-card px-6 py-3 rounded border border-purple-500 text-purple-300 hover:bg-purple-600 hover:text-white font-bold transition">
                GitHub Sponsor
              </a>
            </div>

            <p className="text-xs text-gray-400 mt-4">Thanks for your support — every contribution helps keep these projects alive.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="glass-card mx-4 mb-6 md:mb-8 xl:mb-12 xl:mx-8 xl:max-w-[calc(100%-4rem)] xl:left-1/2 xl:relative xl:-translate-x-1/2">
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
