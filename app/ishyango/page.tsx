export default function IshyangoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white mb-6">
            🧠 Ishyango.AI
          </h1>
          <p className="text-2xl text-purple-200 mb-8">
            Git-like Learning Companion for PDFs
          </p>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
            Track your learning, one commit at a time. Just as developers track code changes with Git,
            learners can now track their knowledge journey with Git-like commits.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="https://github.com/Papi84/ishyango-desktop"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition"
            >
              View on GitHub
            </a>
            <a
              href="#features"
              className="bg-transparent border-2 border-purple-400 text-purple-200 hover:bg-purple-900 px-8 py-4 rounded-lg font-semibold transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Hackathon Badge */}
      <section className="container mx-auto px-4 py-8">
        <div className="text-center">
          <span className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
            🏆 Submitted to Qwen Cloud Hackathon 2026
          </span>
        </div>
      </section>

      {/* Problem Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">
            The Problem
          </h2>
          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700">
            <p className="text-xl text-gray-300 leading-relaxed">
              Students, researchers, and lifelong learners struggle to retain what they read from PDFs
              and academic papers. Traditional note-taking is scattered, insights are lost across
              multiple documents, and there's no systematic way to track learning progress over time.
              Existing PDF readers focus on reading, not learning retention.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">
            The Solution
          </h2>
          <div className="bg-purple-900/50 backdrop-blur-sm p-8 rounded-xl border border-purple-700">
            <p className="text-xl text-purple-100 leading-relaxed mb-6">
              Ishyango.AI introduces a revolutionary approach: <strong className="text-white">Git-like commits for learning</strong>.
            </p>
            <p className="text-xl text-purple-100 leading-relaxed">
              Each text selection from a PDF is saved as a "commit" with full text excerpt, page number,
              timestamp, tags, and notes. This creates a searchable, organized history of learning that
              grows with the user.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Features
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Tech Stack
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
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
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Download
        </h2>
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-4">Linux</h3>
            <div className="flex gap-4 justify-center mb-6">
              <span className="bg-purple-600 text-white px-6 py-2 rounded-lg">.deb</span>
              <span className="bg-purple-600 text-white px-6 py-2 rounded-lg">.AppImage</span>
            </div>
            <a
              href="https://github.com/Papi84/ishyango-desktop/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition"
            >
              Download on GitHub
            </a>
          </div>
          <div className="mt-8 text-gray-400">
            <p>Windows &amp; macOS versions coming soon!</p>
            <div className="mt-6 text-left">
  <h4 className="font-bold mb-2 text-white">Installation (Linux):</h4>
  <code className="block bg-slate-800 px-4 py-2 rounded text-sm text-purple-300">
    sudo dpkg -i ishyango-desktop_*.deb
  </code>
  <p className="mt-2 text-sm">
    Or use the .AppImage for a portable version!
  </p>
</div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 border-t border-slate-800">
        <div className="text-center text-gray-400">
          <p className="mb-4">
            Made with ❤️ by Karangwa for the Qwen Cloud Hackathon 2026
          </p>
          <div className="flex gap-4 justify-center">
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