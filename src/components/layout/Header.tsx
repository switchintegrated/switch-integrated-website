"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Solutions", href: "/solutions" },
  { label: "Why Switch", href: "/why-switch" },
  { label: "Partnership", href: "/partnership" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <a href="#" onClick={closeMenu} className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-950 font-bold text-white">
            SI
          </div>
          <div>
            <p className="text-sm font-semibold tracking-wide">
              Switch Integrated
            </p>
            <p className="text-xs text-slate-500">Connect. Engage. Grow.</p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-slate-950"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="/contact"
            className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-cyan-700"
          >
            Let’s Talk
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-slate-950 lg:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-slate-200 bg-white px-6 py-5 shadow-xl lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-slate-950"
              >
                {link.label}
              </a>
            ))}

            <a
              href="/contact"
              onClick={closeMenu}
              className="mt-3 inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-cyan-700"
            >
              Let’s Talk
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
