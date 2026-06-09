'use client';

import MatrixRain from '@/components/MatrixRain';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <MatrixRain />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-card mx-4 mt-4 md:mx-8">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center flex-wrap gap-2">
          <div className="flex items-center">
            <div className="mr-3">
              <i className="fas fa-code text-2xl neon-text"></i>
            </div>
            <h1 className="text-lg md:text-xl font-bold">
              <span className="glitch" data-text="KARANGWA.DEV">KARANGWA.DEV</span>
            </h1>
          </div>
          
          <div className="hidden md:flex items-center text-base lg:text-lg font-bold">
            <Link href="#home" className="hover:text-[var(--neon-green)] transition duration-300 mr-6 lg:mr-8">HOME</Link>
            <Link href="#ishyango" className="hover:text-[var(--neon-green)] transition duration-300 mr-6 lg:mr-8">ISHYANGO.AI</Link>
            <Link href="#projects" className="hover:text-[var(--neon-green)] transition duration-300 mr-6 lg:mr-8">PROJECTS</Link>
            <Link href="#blog" className="hover:text-[var(--neon-green)] transition duration-300 mr-6 lg:mr-8">AI NEWS</Link>
            <Link href="#about" className="hover:text-[var(--neon-green)] transition duration-300 mr-6 lg:mr-8">ABOUT</Link>
            <Link href="#contact" className="hover:text-[var(--neon-green)] transition duration-300">CONTACT</Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden text-[var(--neon-green)] text-2xl">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
        <div className="container mx-auto max-w-5xl">
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

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
              <span className="neon-blue">KARANGWA</span>
              <br />
              <span className="neon-text">ABUBAKAR</span>
            </h2>

            <p className="text-base md:text-xl lg:text-2xl mb-6 md:mb-8 text-gray-300">
              <i className="fas fa-brain mr-2 neon-text"></i>
              AI in Education + Builder
            </p>

            <p className="text-sm md:text-lg mb-8 md:mb-12 text-gray-400 max-w-2xl mx-auto px-4">
              CS Student @ UCT building tools that help students learn better. 
              Currently working on <span className="neon-blue">Ishyango.AI</span> - a Git-like learning companion for PDFs.
            </p>

            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              <Link href="#ishyango" className="glass-card px-6 md:px-8 py-3 md:py-4 rounded border border-[var(--neon-green)] text-[var(--neon-green)] hover:bg-[var(--neon-green)] hover:text-[var(--dark-bg)] font-bold hover:shadow-lg hover:shadow-[var(--glow-green)] transition duration-300 text-sm md:text-base">
                <i className="fas fa-rocket mr-2"></i>Ishyango.AI
              </Link>
              <Link href="#projects" className="glass-card px-6 md:px-8 py-3 md:py-4 rounded border border-[var(--neon-green)] text-[var(--neon-green)] hover:bg-[var(--neon-green)] hover:text-[var(--dark-bg)] transition duration-300 text-sm md:text-base">
                <i className="fas fa-code mr-2"></i>Projects
              </Link>
              <Link href="https://github.com/Papi84" target="_blank" className="glass-card px-6 md:px-8 py-3 md:py-4 rounded border border-gray-500 text-gray-300 hover:border-[var(--neon-blue)] hover:text-[var(--neon-blue)] transition duration-300 text-sm md:text-base">
                <i className="fab fa-github mr-2"></i>GitHub
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Ishyango.AI Featured Section */}
      <section id="ishyango" className="py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-4">
            <span className="glitch neon-text" data-text="ISHYANGO.AI">ISHYANGO.AI</span>
          </h2>
          <p className="text-center text-gray-400 mb-8 md:mb-12 text-sm md:text-base">Git-like Learning Companion for PDFs</p>

          <div className="glass-card p-4 md:p-8">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
              <div>
                <div className="text-4xl md:text-6xl mb-4">🦴</div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 neon-blue">The Vision</h3>
                <p className="text-gray-300 mb-4 text-sm md:text-base">
                  Students read hundreds of PDFs but lose insights in scattered notes. 
                  Ishyango.AI tracks your understanding like git commits, makes color-coded notes, 
                  and uses AI to connect concepts across 1000+ page technical books.
                </p>
                <p className="text-gray-300 mb-6 text-sm md:text-base">
                  Named after the <strong>Ishango Bone</strong> (40,000-year-old African mathematical tool). 
                  Ancient wisdom meets modern AI.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-2 md:px-3 py-1 bg-[var(--neon-green)] bg-opacity-20 text-[var(--neon-green)] rounded text-xs md:text-sm">Tauri</span>
                  <span className="px-2 md:px-3 py-1 bg-[var(--neon-green)] bg-opacity-20 text-[var(--neon-green)] rounded text-xs md:text-sm">Rust</span>
                  <span className="px-2 md:px-3 py-1 bg-[var(--neon-green)] bg-opacity-20 text-[var(--neon-green)] rounded text-xs md:text-sm">React</span>
                  <span className="px-2 md:px-3 py-1 bg-[var(--neon-green)] bg-opacity-20 text-[var(--neon-green)] rounded text-xs md:text-sm">AI/ML</span>
                  <span className="px-2 md:px-3 py-1 bg-[var(--neon-green)] bg-opacity-20 text-[var(--neon-green)] rounded text-xs md:text-sm">SQLite</span>
                </div>
                <Link href="#contact" className="glass-card px-6 py-3 rounded bg-[var(--neon-blue)] text-[var(--dark-bg)] font-bold inline-block hover:shadow-lg hover:shadow-[var(--glow-blue)] transition duration-300 text-sm md:text-base">
                  <i className="fas fa-envelope mr-2"></i>Join Waitlist
                </Link>
              </div>
              <div className="glass-card p-4 md:p-6 text-center">
                <i className="fas fa-book-open text-4xl md:text-6xl neon-blue mb-4"></i>
                <h4 className="text-lg md:text-xl font-bold mb-2">Features</h4>
                <ul className="text-gray-300 text-xs md:text-sm space-y-2 text-left">
                  <li>✓ Git-like commit system for learning</li>
                  <li>✓ Color-coded notes (red=critical, green=key)</li>
                  <li>✓ AI-powered summarization</li>
                  <li>✓ Knowledge graph across PDFs</li>
                  <li>✓ Export to Obsidian/Notion</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 md:mb-16">
            <span className="glitch neon-text" data-text="PROJECTS">PROJECTS</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
                <span className="px-2 md:px-3 py-1 bg-[var(--neon-green)] bg-opacity-20 text-[var(--neon-green)] rounded text-xs md:text-sm">Tauri</span>
                <span className="px-2 md:px-3 py-1 bg-[var(--neon-green)] bg-opacity-20 text-[var(--neon-green)] rounded text-xs md:text-sm">Rust</span>
                <span className="px-2 md:px-3 py-1 bg-[var(--neon-green)] bg-opacity-20 text-[var(--neon-green)] rounded text-xs md:text-sm">AI</span>
              </div>
              <Link href="#ishyango" className="text-[var(--neon-blue)] hover:underline text-sm md:text-base">
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
                <span className="px-2 md:px-3 py-1 bg-[var(--neon-green)] bg-opacity-20 text-[var(--neon-green)] rounded text-xs md:text-sm">React</span>
                <span className="px-2 md:px-3 py-1 bg-[var(--neon-green)] bg-opacity-20 text-[var(--neon-green)] rounded text-xs md:text-sm">Node.js</span>
                <span className="px-2 md:px-3 py-1 bg-[var(--neon-green)] bg-opacity-20 text-[var(--neon-green)] rounded text-xs md:text-sm">Qwen API</span>
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
                <span className="px-2 md:px-3 py-1 bg-[var(--neon-green)] bg-opacity-20 text-[var(--neon-green)] rounded text-xs md:text-sm">C++</span>
                <span className="px-2 md:px-3 py-1 bg-[var(--neon-green)] bg-opacity-20 text-[var(--neon-green)] rounded text-xs md:text-sm">Digital Logic</span>
              </div>
              <Link href="https://github.com/Papi84" target="_blank" className="text-[var(--neon-blue)] hover:underline text-sm md:text-base">
                <i className="fab fa-github mr-2"></i>View Code
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="glass-card p-6 md:p-8 text-center">
            <i className="fas fa-newspaper text-4xl md:text-6xl neon-blue mb-4"></i>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">K(now).AI Newsletter</h2>
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
              <button type="submit" className="glass-card px-6 py-3 rounded bg-[var(--neon-green)] text-[var(--dark-bg)] font-bold hover:shadow-lg hover:shadow-[var(--glow-green)] transition duration-300 text-sm md:text-base">
                <i className="fas fa-paper-plane mr-2"></i>Subscribe
              </button>
            </form>
            <p className="text-xs md:text-sm text-gray-400 mt-4">
              <i className="fas fa-lock mr-2"></i>No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-20 px-4 mb-16 md:mb-20">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 md:mb-16">
            <span className="glitch neon-text" data-text="INITIALIZE_CONTACT">INITIALIZE_CONTACT</span>
          </h2>

          <div className="glass-card p-6 md:p-8">
            <div className="text-center mb-8">
              <i className="fas fa-satellite-dish text-4xl md:text-6xl neon-blue mb-4"></i>
              <p className="text-gray-300 mb-6 text-sm md:text-base">
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
