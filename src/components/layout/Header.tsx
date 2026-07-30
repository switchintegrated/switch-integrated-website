"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Solutions", href: "/solutions" },
  { label: "Why Switch", href: "/why-switch" },
  { label: "Partnership", href: "/partnership" },
  { label: "Contact", href: "/contact" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 px-6 py-4 backdrop-blur-xl lg:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-primary text-sm font-extrabold text-white shadow-lg shadow-brand-primary/20">
            SI
          </div>
          <div className="leading-tight">
            <p className="font-heading text-lg font-extrabold tracking-tight text-brand-dark">
              Switch Integrated
            </p>
            <p className="text-xs font-semibold text-slate-500">
              Connect. Engage. Grow.
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-slate-200 bg-white p-1 shadow-sm md:flex">
          {navItems.map((item) => {
            const active = isActive(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-5 py-3 text-sm font-bold transition ${
                  active
                    ? "bg-brand-primary text-white shadow-lg shadow-brand-primary/20"
                    : "text-slate-600 hover:bg-brand-soft hover:text-brand-primary"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className="hidden rounded-full bg-brand-primary px-7 py-4 text-sm font-extrabold text-white shadow-xl shadow-brand-primary/20 transition hover:-translate-y-0.5 hover:bg-brand-dark lg:inline-flex"
        >
          Let’s Talk
        </Link>
      </div>
    </header>
  );
}
