import Link from "next/link";
import { ExternalLink, Mail, MapPin, Phone, Sparkles } from "lucide-react";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Solutions", href: "/solutions" },
  { label: "Why Switch", href: "/why-switch" },
  { label: "Partnership", href: "/partnership" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-brand-dark px-6 py-14 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-white/10 pb-10 lg:grid-cols-[1.2fr_0.8fr_1fr]">
          <div>
            <Link href="/" className="group flex items-center gap-3">
              <div className="relative grid h-12 w-12 place-items-center overflow-hidden rounded-2xl bg-brand-secondary text-sm font-extrabold text-brand-primary shadow-lg shadow-brand-secondary/10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.7),transparent_34%)]" />
                <span className="relative">SI</span>
              </div>

              <div>
                <p className="font-heading text-base font-extrabold tracking-[-0.03em] text-white">
                  Switch Integrated
                </p>
                <p className="text-xs font-medium text-white/50">
                  Connect. Engage. Grow.
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-md text-sm leading-7 text-white/60">
              Switch Integrated helps African businesses
              communicate better, reach further, and grow faster through digital
              communication solutions.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-bold text-brand-secondary">
              <Sparkles className="h-4 w-4" />
              Where businesses connect, engage, and grow.
            </div>
          </div>

          <div>
            <p className="font-heading text-sm font-extrabold uppercase tracking-[0.22em] text-brand-secondary">
              Explore
            </p>

            <div className="mt-5 grid gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold text-white/65 transition hover:text-brand-secondary"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="font-heading text-sm font-extrabold uppercase tracking-[0.22em] text-brand-secondary">
              Contact
            </p>

            <div className="mt-5 grid gap-4 text-sm text-white/65">
              <a
                href="tel:+2349139580126"
                className="flex gap-3 transition hover:text-brand-secondary"
              >
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-secondary" />
                +234-913-958-0126
              </a>

              <a
                href="mailto:info@switchipl.com"
                className="flex gap-3 transition hover:text-brand-secondary"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-secondary" />
                info@switchipl.com
              </a>

              <div className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-secondary" />
                <span>42, Ashiek Jarma Street, Jabi, Abuja</span>
              </div>

              <a
                href="https://linkedin.com/company/switch-integrated"
                target="_blank"
                rel="noreferrer"
                className="flex gap-3 transition hover:text-brand-secondary"
              >
                <ExternalLink className="mt-0.5 h-4 w-4 shrink-0 text-brand-secondary" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-7 text-xs text-white/45 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Switch Integrated. All
            rights reserved.
          </p>
          <p>Built for better business communication.</p>
        </div>
      </div>
    </footer>
  );
}
