"use client";

import { useState, useRef, FormEvent } from "react";

// Google Apps Script Web App URL — update this once you deploy the script
const APPS_SCRIPT_URL =
  process.env.NEXT_PUBLIC_APPS_SCRIPT_URL || "";
// We'll build this now — see the Google Apps Script template below

type FormStatus = "idle" | "loading" | "success" | "error";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const honeypotRef = useRef<HTMLInputElement>(null);

  function validateEmail(e: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    // Honeypot check — if filled, it's a bot
    if (honeypotRef.current?.value) {
      // Silently succeed to not tip off bots
      setStatus("success");
      setMessage("You're subscribed!");
      setSubmitted(true);
      return;
    }

    // Client-side validation
    if (!validateEmail(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // Apps Script doesn't support CORS preflight
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      // With no-cors we can't read the response, but a 200-like status means it went through
      setStatus("success");
      setMessage("You're subscribed! 🎉");
      setSubmitted(true);
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again or email me directly.");
    }
  }

  if (submitted) {
    return (
      <div className="glass-card p-6 md:p-8 xl:p-12 text-center">
        <i className="fas fa-check-circle text-4xl md:text-6xl neon-green mb-4"></i>
        <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold mb-4">You're In! 🎉</h2>
        <p className="text-gray-300 text-sm md:text-base">
          Thanks for subscribing to K(now).AI. You'll get the next edition straight to your inbox.
        </p>
      </div>
    );
  }

  return (
    <div className="glass-card p-6 md:p-8 xl:p-12 text-center">
      <i className="fas fa-newspaper text-4xl md:text-6xl neon-blue mb-4"></i>
      <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold mb-4">K(now).AI Newsletter</h2>
      <p className="text-gray-300 mb-6 text-sm md:text-base">
        Weekly AI news & insights for students and builders.
        EdTech focus, technical deep-dives, and building journey updates.
      </p>

      {/* Status messages */}
      {status === "error" && (
        <div className="mb-4 px-4 py-2 rounded bg-red-900 bg-opacity-30 border border-red-500 text-red-300 text-sm">
          {message}
        </div>
      )}
      {status === "success" && (
        <div className="mb-4 px-4 py-2 rounded bg-green-900 bg-opacity-30 border border-[var(--neon-green)] text-[var(--neon-green)] text-sm">
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3 md:gap-4">
        {/* Honeypot — hidden from real users, bots fill it */}
        <input
          ref={honeypotRef}
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          className="absolute -left-[9999px] opacity-0 h-0 w-0"
          aria-hidden="true"
        />

        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") setStatus("idle");
          }}
          placeholder="your@email.com"
          required
          disabled={status === "loading"}
          className="flex-1 px-4 py-3 rounded glass-card bg-transparent border border-[var(--neon-green)] text-white placeholder-gray-400 focus:outline-none focus:border-[var(--neon-blue)] text-sm md:text-base disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="glass-card px-6 py-3 rounded border border-[var(--neon-green)] text-[var(--neon-green)] hover:bg-[var(--neon-green)] hover:text-[var(--dark-bg)] font-bold hover:shadow-lg hover:shadow-[var(--glow-green)] transition duration-300 text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "loading" ? (
            <>
              <i className="fas fa-spinner fa-spin mr-2"></i>Sending...
            </>
          ) : (
            <>
              <i className="fas fa-paper-plane mr-2"></i>Subscribe
            </>
          )}
        </button>
      </form>
      <p className="text-xs md:text-sm text-gray-400 mt-4">
        <i className="fas fa-lock mr-2"></i>No spam. Unsubscribe anytime.
      </p>
    </div>
  );
}
