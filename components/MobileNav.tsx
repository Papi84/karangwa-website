'use client';

import { useState } from 'react';
import Link from 'next/link';

interface NavLink {
  href: string;
  label: string;
  active?: boolean;
}

interface MobileNavProps {
  links: NavLink[];
}

export default function MobileNav({ links }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden relative z-50 flex h-11 w-11 items-center justify-center rounded-md border border-[var(--neon-green)]/60 bg-[rgba(10,10,15,0.7)] text-[var(--neon-green)] text-2xl shadow-[0_0_12px_rgba(0,255,157,0.28)] transition hover:border-[var(--neon-green)]"
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        <i className={`fas ${open ? 'fa-times' : 'fa-bars'} transition-transform duration-300`}></i>
      </button>

      {/* Mobile Menu Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-40 md:hidden animate-fadeIn"
          onClick={() => setOpen(false)}
        >
          <div
            className="flex flex-col items-center justify-center h-full gap-8"
            onClick={(e) => e.stopPropagation()}
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`flex min-h-[44px] items-center justify-center text-2xl font-extrabold transition duration-300 py-2 px-6 rounded ${
                  link.active
                    ? 'text-[var(--neon-green)] border border-[var(--neon-green)]'
                    : 'text-white hover:text-[var(--neon-green)]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
