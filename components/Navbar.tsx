"use client";

import { Menu, Sparkles, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Problem", href: "#problem" },
  { label: "Solution", href: "#solution" },
  { label: "Demo", href: "#demo" },
  { label: "Pricing", href: "#pricing" },
  { label: "Industries", href: "#industries" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-2xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8" aria-label="Main navigation">
          <a href="#top" className="flex items-center gap-3" onClick={closeMenu}>
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-300 ring-1 ring-cyan-300/30">
              <Sparkles size={20} aria-hidden="true" />
            </span>
            <span className="text-base font-bold tracking-tight text-white sm:text-lg">The Techcorner AI</span>
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm font-medium text-slate-300 transition hover:text-cyan-300">
                {link.label}
              </a>
            ))}
          </div>

          <a href="#contact" className="hidden rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-300 lg:inline-flex">
            Free Website Review
          </a>

          <button type="button" className="inline-flex rounded-xl border border-white/10 bg-white/5 p-2 text-white lg:hidden" aria-label="Open menu" onClick={() => setIsOpen(true)}>
            <Menu size={24} aria-hidden="true" />
          </button>
        </nav>
      </header>

      {isOpen && (
        <div className="fixed inset-0 z-[999] bg-slate-950 text-white lg:hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_26rem),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.18),transparent_28rem)]" />
          <div className="relative flex min-h-screen flex-col">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <a href="#top" onClick={closeMenu} className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-300 ring-1 ring-cyan-300/30">
                  <Sparkles size={20} aria-hidden="true" />
                </span>
                <span className="font-bold text-white">The Techcorner AI</span>
              </a>
              <button type="button" className="rounded-xl border border-white/10 bg-white/5 p-2 text-white" aria-label="Close menu" onClick={closeMenu}>
                <X size={24} aria-hidden="true" />
              </button>
            </div>

            <div className="flex flex-1 flex-col justify-between px-5 py-8">
              <div className="space-y-3">
                {navLinks.map((link) => (
                  <a key={link.href} href={link.href} onClick={closeMenu} className="block rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-lg font-semibold text-slate-100 transition hover:border-cyan-300/30 hover:bg-cyan-300/10">
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="pt-8">
                <a href="#contact" onClick={closeMenu} className="flex w-full items-center justify-center rounded-full bg-cyan-400 px-5 py-4 text-center font-black text-slate-950 shadow-xl shadow-cyan-500/20">
                  Get a Free Website Review
                </a>
                <p className="mt-5 text-center text-sm text-slate-400">AI-powered websites that capture leads even after hours.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
