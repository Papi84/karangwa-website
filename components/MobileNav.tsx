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
        className="md:hidden text-[var(--neon-green)] text-2xl z-50 relative"
        aria-label="Toggle menu"
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
                className={`text-2xl font-extrabold transition duration-300 py-2 px-6 rounded ${
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
