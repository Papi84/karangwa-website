'use client';

import Link from 'next/link';
import MatrixRain from '@/components/MatrixRain';

export default function WhyIshyangoAI() {
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

      {/* Article */}
      <article className="pt-40 pb-20 px-4 md:px-8">
        <div className="container mx-auto max-w-4xl">
          
          {/* Header */}
          <header className="text-center mb-16 md:mb-24">
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <span className="px-4 py-2 bg-[var(--neon-green)] bg-opacity-20 text-[var(--dark-bg)] rounded-full text-sm font-bold border border-[var(--neon-green)]">Ishyango.AI</span>
              <span className="px-4 py-2 bg-[var(--neon-green)] bg-opacity-20 text-[var(--dark-bg)] rounded-full text-sm font-bold border border-[var(--neon-green)]">EdTech</span>
              <span className="px-4 py-2 bg-[var(--neon-green)] bg-opacity-20 text-[var(--dark-bg)] rounded-full text-sm font-bold border border-[var(--neon-green)]">AI</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 neon-text leading-tight">
              Why I'm Building Ishyango.AI
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
              The story behind the 40,000-year-old bone that inspired an AI tool for students
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500">
              <span className="flex items-center">
                <i className="fas fa-calendar mr-2"></i>
                June 11, 2026
              </span>
              <span className="flex items-center">
                <i className="fas fa-clock mr-2"></i>
                5 min read
              </span>
              <span className="flex items-center">
                <i className="fas fa-user mr-2"></i>
                Karangwa Abubakar
              </span>
            </div>
          </header>

          {/* Content Card */}
          <div className="glass-card p-8 md:p-12 lg:p-16 mb-12">
            <div className="prose prose-lg md:prose-xl max-w-none">
              
              {/* Introduction */}
              <p className="text-gray-300 text-lg md:text-xl mb-8 md:mb-12 leading-relaxed md:leading-loose">
                <span className="text-5xl md:text-7xl font-bold neon-text float-left mr-4 md:mr-6 mt-2 md:mt-4">F</span>orty thousand years ago, somewhere in the highlands overlooking the Congo River, an unknown African carved mathematical notches into a baboon fibula. This bone tool would become known as the <strong className="text-white">Ishango Bone</strong> — one of the oldest mathematical artifacts ever discovered.
              </p>

              <p className="text-gray-300 text-lg md:text-xl mb-8 md:mb-12 leading-relaxed md:leading-loose">
                Today, I'm building an AI-powered learning tool inspired by that ancient innovation. This is the story of why.
              </p>

              {/* The Problem */}
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 mt-12 md:mt-16 neon-blue flex items-center">
                <i className="fas fa-exclamation-triangle mr-3 md:mr-4"></i>
                The Problem
              </h2>

              <p className="text-gray-300 text-lg md:text-xl mb-6 md:mb-8 leading-relaxed md:leading-loose">
                As a <strong className="text-white">lifelong</strong> Computer Science student, I read <strong className="text-white">hundreds of PDFs</strong> every semester. Technical books, research papers, documentation — the content never ends.
              </p>

              <p className="text-gray-300 text-lg md:text-xl mb-6 md:mb-8 leading-relaxed md:leading-loose">
                But here's what I noticed:
              </p>

              <ul className="text-gray-300 text-lg md:text-xl mb-8 md:mb-12 space-y-4 md:space-y-6">
                <li className="flex items-start">
                  <i className="fas fa-times text-red-500 mr-4 mt-1 flex-shrink-0"></i>
                  <span>I'd highlight important passages, then <strong className="text-white">forget why I highlighted them</strong></span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-times text-red-500 mr-4 mt-1 flex-shrink-0"></i>
                  <span>My notes were <strong className="text-white">scattered across notebooks, apps, and sticky notes</strong></span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-times text-red-500 mr-4 mt-1 flex-shrink-0"></i>
                  <span>I couldn't <strong className="text-white">connect ideas across different papers</strong></span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-times text-red-500 mr-4 mt-1 flex-shrink-0"></i>
                  <span>I spent more time <strong className="text-white">organizing than actually learning</strong></span>
                </li>
              </ul>

              <p className="text-gray-300 text-lg md:text-xl mb-8 md:mb-12 leading-relaxed md:leading-loose">
                Sound familiar? You're not alone. This is the <strong className="text-white">universal student struggle</strong>.
              </p>

              {/* The Inspiration */}
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 mt-12 md:mt-16 neon-blue flex items-center">
                <i className="fas fa-lightbulb mr-3 md:mr-4"></i>
                The Inspiration
              </h2>

              <p className="text-gray-300 text-lg md:text-xl mb-6 md:mb-8 leading-relaxed md:leading-loose">
                The Ishango Bone wasn't just a counting tool. It was a <strong className="text-white">knowledge preservation system</strong>. Someone, 40,000 years ago, looked at the patterns of the universe and said: <em className="text-[var(--neon-green)]">"I need a way to remember this."</em>
              </p>

              {/* Quote Box */}
              <div className="glass-card p-6 md:p-8 my-8 md:my-12 border-l-4 border-[var(--neon-green)] bg-opacity-30">
                <p className="text-gray-300 text-lg md:text-xl italic leading-relaxed">
                  <i className="fas fa-quote-left mr-3 text-[var(--neon-green)]"></i>
                  The Ishango bone tracked lunar phases, mathematical sequences, and counting systems. It was a <strong className="text-white">Git-like version control system for knowledge</strong> — tracking insights across time.
                  <i className="fas fa-quote-right ml-3 text-[var(--neon-green)]"></i>
                </p>
              </div>

              <p className="text-gray-300 text-lg md:text-xl mb-6 md:mb-8 leading-relaxed md:leading-loose">
                That's when it hit me: <strong className="text-[var(--neon-green)] text-xl md:text-2xl">What if we had a modern Ishango Bone?</strong> A tool that:
              </p>

              <ul className="text-gray-300 text-lg md:text-xl mb-8 md:mb-12 space-y-4 md:space-y-6">
                <li className="flex items-start">
                  <i className="fas fa-check text-[var(--neon-green)] mr-4 mt-1 flex-shrink-0 text-xl"></i>
                  <span>Tracks your understanding like <strong className="text-white">git commits</strong></span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-[var(--neon-green)] mr-4 mt-1 flex-shrink-0 text-xl"></i>
                  <span>Makes <strong className="text-white">color-coded notes</strong> (red = critical, green = key insight)</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-[var(--neon-green)] mr-4 mt-1 flex-shrink-0 text-xl"></i>
                  <span>Uses <strong className="text-white">AI to summarize and connect concepts</strong></span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-[var(--neon-green)] mr-4 mt-1 flex-shrink-0 text-xl"></i>
                  <span>Builds a <strong className="text-white">knowledge graph across all your PDFs</strong></span>
                </li>
              </ul>

              {/* The Vision */}
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 mt-12 md:mt-16 neon-blue flex items-center">
                <i className="fas fa-rocket mr-3 md:mr-4"></i>
                The Vision
              </h2>

              <p className="text-gray-300 text-lg md:text-xl mb-6 md:mb-8 leading-relaxed md:leading-loose">
                <strong className="text-[var(--neon-green)] text-xl">Ishyango.AI</strong> is that tool. It's a desktop application (built with Tauri, Rust, and React) that:
              </p>

              {/* Feature Cards */}
              <div className="grid md:grid-cols-2 gap-6 md:gap-8 my-8 md:my-12">
                <div className="glass-card p-6 md:p-8 hover:transform hover:-translate-y-2 transition duration-300">
                  <h3 className="text-xl md:text-2xl font-bold mb-4 neon-blue flex items-center">
                    <i className="fas fa-book-open mr-3"></i>
                    Read Naturally
                  </h3>
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                    Just read PDFs like normal. Select text to capture insights. No friction, no interruption.
                  </p>
                </div>

                <div className="glass-card p-6 md:p-8 hover:transform hover:-translate-y-2 transition duration-300">
                  <h3 className="text-xl md:text-2xl font-bold mb-4 neon-blue flex items-center">
                    <i className="fas fa-code-branch mr-3"></i>
                    Git-like Commits
                  </h3>
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                    Track your understanding over time. See how your knowledge evolves chapter by chapter.
                  </p>
                </div>

                <div className="glass-card p-6 md:p-8 hover:transform hover:-translate-y-2 transition duration-300">
                  <h3 className="text-xl md:text-2xl font-bold mb-4 neon-blue flex items-center">
                    <i className="fas fa-brain mr-3"></i>
                    AI Summarization
                  </h3>
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                    AI extracts key concepts and connects them across all your reading.
                  </p>
                </div>

                <div className="glass-card p-6 md:p-8 hover:transform hover:-translate-y-2 transition duration-300">
                  <h3 className="text-xl md:text-2xl font-bold mb-4 neon-blue flex items-center">
                    <i className="fas fa-project-diagram mr-3"></i>
                    Knowledge Graph
                  </h3>
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                    Visualize connections between concepts across hundreds of PDFs.
                  </p>
                </div>
              </div>

              {/* The Journey */}
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 mt-12 md:mt-16 neon-blue flex items-center">
                <i className="fas fa-road mr-3 md:mr-4"></i>
                The Journey
              </h2>

              <p className="text-gray-300 text-lg md:text-xl mb-6 md:mb-8 leading-relaxed md:leading-loose">
                I'm building this as a <strong className="text-white">lifelong Computer Science student</strong>, juggling:
              </p>

              <ul className="text-gray-300 text-lg md:text-xl mb-8 md:mb-12 space-y-4 md:space-y-6">
                <li className="flex items-start">
                  <i className="fas fa-graduation-cap text-[var(--neon-blue)] mr-4 mt-1 flex-shrink-0 text-xl"></i>
                  <span>Heavy coursework (Linear Algebra, Combinatorics, DDIA)</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-dumbbell text-[var(--neon-blue)] mr-4 mt-1 flex-shrink-0 text-xl"></i>
                  <span>Gym training (because gains matter)</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-code text-[var(--neon-blue)] mr-4 mt-1 flex-shrink-0 text-xl"></i>
                  <span>Building in public (this website, weekly blog)</span>
                </li>
              </ul>

              <p className="text-gray-300 text-lg md:text-xl mb-8 md:mb-12 leading-relaxed md:leading-loose">
                It's not easy. But 40,000 years ago, someone carved mathematical notches into a bone by candlelight (or whatever they used back then). <strong className="text-[var(--neon-green)] text-xl">I can code after lectures.</strong>
              </p>

              {/* Call to Action */}
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 mt-12 md:mt-16 neon-blue flex items-center">
                <i className="fas fa-envelope mr-3 md:mr-4"></i>
                Join the Journey
              </h2>

              <p className="text-gray-300 text-lg md:text-xl mb-6 md:mb-8 leading-relaxed md:leading-loose">
                I'll be sharing weekly updates about:
              </p>

              <ul className="text-gray-300 text-lg md:text-xl mb-8 md:mb-12 space-y-4 md:space-y-6">
                <li className="flex items-start">
                  <i className="fas fa-newspaper text-[var(--neon-green)] mr-4 mt-1 flex-shrink-0 text-xl"></i>
                  <span>AI news & insights (K(now).AI newsletter)</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-hammer text-[var(--neon-green)] mr-4 mt-1 flex-shrink-0 text-xl"></i>
                  <span>Building Ishyango.AI (technical deep-dives)</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-book text-[var(--neon-green)] mr-4 mt-1 flex-shrink-0 text-xl"></i>
                  <span>Learning journey (CS student life)</span>
                </li>
              </ul>

              {/* CTA Box */}
              <div className="glass-card p-8 md:p-12 my-8 md:my-12 text-center border-2 border-[var(--neon-green)] bg-opacity-30">
                <p className="text-gray-300 text-lg md:text-xl mb-6 md:mb-8">
                  <strong className="text-white text-xl md:text-2xl">Want to follow along?</strong>
                </p>
                <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6">
                  <Link href="/blog" className="glass-card px-8 py-4 rounded border border-[var(--neon-green)] text-[var(--neon-green)] hover:bg-[var(--neon-green)] hover:text-[var(--dark-bg)] font-bold transition duration-300 text-base md:text-lg whitespace-nowrap">
                    <i className="fas fa-envelope mr-2"></i>Subscribe to Newsletter
                  </Link>
                  <Link href="/#ishyango" className="glass-card px-8 py-4 rounded border border-[var(--neon-green)] text-[var(--neon-green)] hover:bg-[var(--neon-green)] hover:text-[var(--dark-bg)] font-bold transition duration-300 text-base md:text-lg whitespace-nowrap">
                    <i className="fas fa-rocket mr-2"></i>Join Ishyango.AI Waitlist
                  </Link>
                </div>
              </div>

              {/* Closing */}
              <p className="text-gray-300 text-lg md:text-xl mb-8 md:mb-12 leading-relaxed md:leading-loose text-center italic">
                <i className="fas fa-bone mr-3 text-[var(--neon-green)] text-xl"></i>
                Ancient wisdom meets modern AI.
                <i className="fas fa-bone ml-3 text-[var(--neon-green)] text-xl"></i>
              </p>
            </div>
          </div>

          {/* Back to Blog */}
          <div className="text-center">
            <Link href="/blog" className="glass-card px-8 py-4 rounded border border-gray-500 text-gray-300 hover:border-[var(--neon-blue)] hover:text-[var(--neon-blue)] transition duration-300 inline-block text-base md:text-lg">
              <i className="fas fa-arrow-left mr-2"></i>Back to Blog
            </Link>
          </div>
        </div>
      </article>

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
