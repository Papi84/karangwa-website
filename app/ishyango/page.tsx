export default function IshyangoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6">
            🧠 Ishyango.AI
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-purple-200 mb-6 sm:mb-8">
            Git-like Learning Companion for PDFs
          </p>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto mb-8 sm:mb-10 lg:mb-12">
            Track your learning, one commit at a time. Just as developers track code changes with Git,
            learners can now track their knowledge journey with Git-like commits.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <a
              href="https://github.com/Papi84/ishyango-desktop"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition text-center"
            >
              View on GitHub
            </a>
            <a
              href="#features"
              className="w-full sm:w-auto bg-transparent border-2 border-purple-400 text-purple-200 hover:bg-purple-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition text-center"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Hackathon Badge */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="text-center">
          <span className="inline-block bg-blue-600 text-white px-4 sm:px-6 py-2 rounded-full text-sm font-semibold">
            🏆 Submitted to Qwen Cloud Hackathon 2026
          </span>
        </div>
      </section>

      {/* Problem Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8 text-center">
            The Problem
          </h2>
          <div className="bg-slate-800/50 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-slate-700">
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
              Students, researchers, and lifelong learners struggle to retain what they read from PDFs
              and academic papers. Traditional note-taking is scattered, insights are lost across
              multiple documents, and there's no systematic way to track learning progress over time.
              Existing PDF readers focus on reading, not learning retention.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8 text-center">
            The Solution
          </h2>
          <div className="bg-purple-900/50 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-purple-700">
            <p className="text-base sm:text-lg lg:text-xl text-purple-100 leading-relaxed mb-4 sm:mb-6">
              Ishyango.AI introduces a revolutionary approach: <strong className="text-white">Git-like commits for learning</strong>.
            </p>
            <p className="text-base sm:text-lg lg:text-xl text-purple-100 leading-relaxed">
              Each text selection from a PDF is saved as a "commit" with full text excerpt, page number,
              timestamp, tags, and notes. This creates a searchable, organized history of learning that
              grows with the user.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 sm:mb-12 text-center">
          Features
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Feature 1 */}
          <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700">
            <div className="text-4xl mb-4">📄</div>
            <h3 className="text-xl font-bold text-white mb-3">PDF Viewer</h3>
            <p className="text-gray-300">
              Full-featured PDF rendering with smooth navigation, zoom controls, and text selection.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700">
            <div className="text-4xl mb-4">✏️</div>
            <h3 className="text-xl font-bold text-white mb-3">Text Selection</h3>
            <p className="text-gray-300">
              Highlight and capture text from any PDF with precise selection and page tracking.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-xl font-bold text-white mb-3">Learning Commits</h3>
            <p className="text-gray-300">
              Save selections as timestamped commits with page numbers, tags, and notes.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-white mb-3">Commit History</h3>
            <p className="text-gray-300">
              View and search your learning over time with a Git-like commit history.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700">
            <div className="text-4xl mb-4">💾</div>
            <h3 className="text-xl font-bold text-white mb-3">Local Storage</h3>
            <p className="text-gray-300">
              100% privacy-first with SQLite local storage. No cloud dependencies.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-bold text-white mb-3">AI Insights (v2.0)</h3>
            <p className="text-gray-300">
              Qwen API integration for automated summaries, concepts, and tags. Coming soon!
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 sm:mb-12 text-center">
          Tech Stack
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700">
              <h3 className="text-lg font-bold text-purple-400 mb-2">Frontend</h3>
              <p className="text-gray-300">React + TypeScript</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700">
              <h3 className="text-lg font-bold text-purple-400 mb-2">Desktop Shell</h3>
              <p className="text-gray-300">Tauri v2</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700">
              <h3 className="text-lg font-bold text-purple-400 mb-2">Backend</h3>
              <p className="text-gray-300">Rust</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700">
              <h3 className="text-lg font-bold text-purple-400 mb-2">Database</h3>
              <p className="text-gray-300">SQLite (rusqlite)</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700">
              <h3 className="text-lg font-bold text-purple-400 mb-2">PDF Rendering</h3>
              <p className="text-gray-300">PDF.js</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700">
              <h3 className="text-lg font-bold text-purple-400 mb-2">OCR</h3>
              <p className="text-gray-300">EasyOCR (local)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 text-center">
            🚀 Download Ishyango.AI Desktop
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-purple-200 mb-8 text-center max-w-2xl mx-auto">
            Start tracking your learning today. Free and open-source.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center">
            {/* Linux Download */}
            <a
              href="https://github.com/Papi84/ishyango-desktop/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              Linux (.deb)
            </a>

            {/* Windows Download */}
            <a
              href="https://github.com/Papi84/ishyango-desktop/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4h-13.05M0 12.6h9.75v9.451L0 20.55M10.949 12.6H24V24l-12.9-1.801"/>
              </svg>
              Windows (.exe)
            </a>

            {/* macOS Download */}
            <a
              href="https://github.com/Papi84/ishyango-desktop/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-.8 1.94-.8s.16 1.06-.59 1.91c-.69.79-1.82.7-1.82.7s-.1-1.02.47-1.81"/>
              </svg>
              macOS (.dmg)
            </a>
          </div>

          <p className="text-sm text-gray-400 mt-6 text-center">
            Also available on{' '}
            <a
              href="https://github.com/Papi84/ishyango-desktop"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 underline"
            >
              GitHub
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-slate-800">
        <div className="text-center text-gray-400">
          <p className="mb-4 text-sm sm:text-base">
            Made with ❤️ by Karangwa for the Qwen Cloud Hackathon 2026
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://github.com/Papi84/ishyango-desktop"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 transition"
            >
              GitHub
            </a>
            <a
              href="https://qwencloud-hackathon.devpost.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 transition"
            >
              Hackathon
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}