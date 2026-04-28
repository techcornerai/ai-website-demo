"use client";

import { Bot, Menu, Sparkles, X, Zap } from "lucide-react";
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

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-2xl">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8"
          aria-label="Main navigation"
        >
          <a
            href="#top"
            onClick={closeMenu}
            className="group flex items-center gap-3"
            aria-label="The Techcorner AI home"
          >
            <span className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl bg-cyan-400/15 text-cyan-300 ring-1 ring-cyan-300/30">
              <span className="absolute inset-0 bg-gradient-to-br from-cyan-300/20 to-blue-600/20" />
              <Sparkles
                size={20}
                className="relative transition group-hover:scale-110"
                aria-hidden="true"
              />
            </span>

            <span className="leading-tight">
              <span className="block text-base font-black tracking-tight text-white sm:text-lg">
                The Techcorner AI
              </span>
              <span className="hidden text-xs font-medium text-slate-400 sm:block">
                AI websites for small businesses
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-slate-300 transition hover:text-cyan-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="#demo"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-bold text-white transition hover:border-cyan-300/40 hover:bg-cyan-300/10"
            >
              <Bot size={16} aria-hidden="true" />
              AI Demo
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-black text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-300"
            >
              Free Website Review
              <Zap size={16} aria-hidden="true" />
            </a>
          </div>

          <button
            type="button"
            className="inline-flex rounded-xl border border-white/10 bg-white/5 p-2 text-white transition hover:border-cyan-300/40 hover:bg-cyan-300/10 lg:hidden"
            aria-label="Open menu"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={24} aria-hidden="true" />
          </button>
        </nav>
      </header>

      {isOpen && (
        <div className="fixed inset-0 z-[999] bg-slate-950 text-white lg:hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_26rem),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.18),transparent_28rem)]" />

          <div className="relative flex min-h-screen flex-col">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <a
                href="#top"
                onClick={closeMenu}
                className="flex items-center gap-3"
                aria-label="The Techcorner AI home"
              >
                <span className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl bg-cyan-400/15 text-cyan-300 ring-1 ring-cyan-300/30">
                  <span className="absolute inset-0 bg-gradient-to-br from-cyan-300/20 to-blue-600/20" />
                  <Sparkles size={20} className="relative" aria-hidden="true" />
                </span>

                <span>
                  <span className="block font-black text-white">
                    The Techcorner AI
                  </span>
                  <span className="block text-xs text-slate-400">
                    AI websites for small businesses
                  </span>
                </span>
              </a>

              <button
                type="button"
                className="rounded-xl border border-white/10 bg-white/5 p-2 text-white transition hover:border-cyan-300/40 hover:bg-cyan-300/10"
                aria-label="Close menu"
                onClick={closeMenu}
              >
                <X size={24} aria-hidden="true" />
              </button>
            </div>

            <div className="flex flex-1 flex-col justify-between px-5 py-8">
              <div>
                <div className="mb-6 rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-5">
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-slate-950/70 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-cyan-300 ring-1 ring-cyan-300/20">
                    <Zap size={14} aria-hidden="true" />
                    24/7 Lead Capture
                  </div>

                  <p className="text-lg font-black leading-7 text-white">
                    Your website should answer questions and capture leads even
                    when you are busy.
                  </p>
                </div>

                <div className="space-y-3">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={closeMenu}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-lg font-bold text-slate-100 transition hover:border-cyan-300/30 hover:bg-cyan-300/10"
                    >
                      {link.label}
                      <span className="text-cyan-300">→</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="pt-8">
                <div className="grid gap-3 sm:grid-cols-2">
                  <a
                    href="#demo"
                    onClick={closeMenu}
                    className="flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-4 text-center font-black text-white transition hover:border-cyan-300/40 hover:bg-cyan-300/10"
                  >
                    <Bot size={18} aria-hidden="true" />
                    See Demo
                  </a>

                  <a
                    href="#contact"
                    onClick={closeMenu}
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-cyan-400 px-5 py-4 text-center font-black text-slate-950 shadow-xl shadow-cyan-500/20"
                  >
                    Free Review
                    <Zap size={18} aria-hidden="true" />
                  </a>
                </div>

                <p className="mt-5 text-center text-sm leading-6 text-slate-400">
                  Built for home care agencies, salons, restaurants, contractors,
                  med spas, mobile mechanics, and local service businesses.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}