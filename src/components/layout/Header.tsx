"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

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
    <header className="sticky top-0 z-[100] border-b border-slate-200/80 bg-white/95 px-5 py-4 backdrop-blur-xl lg:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/brand/switch-logo-horizontal.svg"
            alt="Switch Integrated"
            width={210}
            height={56}
            priority
            className="h-12 w-auto max-w-[250px] sm:max-w-none"
          />
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
          href="/contact#contact-form"
          className="hidden rounded-full bg-brand-primary px-7 py-4 text-sm font-extrabold text-white shadow-xl shadow-brand-primary/20 transition hover:-translate-y-0.5 hover:bg-brand-dark lg:inline-flex"
        >
          Let’s Talk
        </Link>

        <details className="group relative md:hidden">
          <summary className="flex h-12 w-12 cursor-pointer list-none items-center justify-center rounded-2xl border border-brand-secondary/20 bg-brand-soft text-brand-primary shadow-sm marker:hidden [&::-webkit-details-marker]:hidden">
            <Menu className="h-6 w-6" />
          </summary>

          <div className="fixed inset-x-4 top-[105px] z-[120] rounded-[1.5rem] border border-brand-secondary/15 bg-white p-3 shadow-2xl shadow-brand-primary/20">
            <nav className="grid gap-2">
              {navItems.map((item) => {
                const active = isActive(pathname, item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`rounded-2xl px-4 py-4 text-base font-extrabold transition ${
                      active
                        ? "bg-brand-primary text-white"
                        : "text-slate-700 hover:bg-brand-soft hover:text-brand-primary"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <Link
                href="/contact#contact-form"
                className="mt-2 rounded-2xl bg-brand-primary px-4 py-4 text-center text-base font-extrabold text-white shadow-lg shadow-brand-primary/20"
              >
                Let’s Talk
              </Link>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
