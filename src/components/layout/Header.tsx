"use client";

import Link from "next/link";
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
    <header className="sticky top-0 z-50 border-b border-brand-secondary/10 bg-white/90 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link
          href="/"
          onClick={closeMenu}
          className="group flex items-center gap-3"
        >
          <div className="relative grid h-12 w-12 place-items-center overflow-hidden rounded-2xl bg-brand-primary text-sm font-extrabold text-white shadow-lg shadow-brand-primary/20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(30,188,187,0.55),transparent_36%)]" />
            <span className="relative">SI</span>
          </div>

          <div>
            <p className="font-heading text-sm font-extrabold tracking-[-0.02em] text-brand-dark transition group-hover:text-brand-primary">
              Switch Integrated
            </p>
            <p className="text-xs font-medium text-slate-500">
              Connect. Engage. Grow.
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-slate-200 bg-white/80 p-1 text-sm font-semibold text-slate-600 shadow-sm lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2.5 transition hover:bg-brand-soft hover:text-brand-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-brand-primary px-6 py-3 text-sm font-bold text-white shadow-lg shadow-brand-primary/20 transition hover:-translate-y-0.5 hover:bg-brand-dark"
          >
            Let’s Talk
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className="grid h-11 w-11 place-items-center rounded-full border border-brand-secondary/20 bg-brand-soft text-brand-primary lg:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-brand-secondary/10 bg-white px-6 py-5 shadow-xl lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-2xl px-4 py-3 text-sm font-bold text-slate-700 transition hover:bg-brand-soft hover:text-brand-primary"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={closeMenu}
              className="mt-3 inline-flex items-center justify-center rounded-full bg-brand-primary px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-dark"
            >
              Let’s Talk
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
