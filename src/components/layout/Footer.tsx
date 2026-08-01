import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Mail, MapPin, Phone, Sparkles } from "lucide-react";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Solutions", href: "/solutions" },
  { label: "Why Switch", href: "/why-switch" },
  { label: "Partnership", href: "/partnership" },
  { label: "Contact", href: "/contact" },
];

type SiteSettings = {
  siteName?: string;
  tagline?: string;
  email?: string;
  phone?: string;
  address?: string;
  linkedin?: string;
  footerText?: string;
};

const fallbackSettings: Required<SiteSettings> = {
  siteName: "Switch Integrated",
  tagline: "Connect. Engage. Grow.",
  email: "info@switchipl.com",
  phone: "+234-913-958-0126",
  address: "42, Ashiek Jarma Street, Jabi, Abuja.",
  linkedin: "https://linkedin.com/company/switch-integrated",
  footerText:
    "Switch Integrated helps African businesses communicate better, reach further, and grow faster through digital communication solutions.",
};

function phoneHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

export function Footer({ settings }: { settings?: SiteSettings | null }) {
  const content = {
    ...fallbackSettings,
    ...settings,
  };

  return (
    <footer className="bg-brand-dark px-6 py-14 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-white/10 pb-10 lg:grid-cols-[1.2fr_0.8fr_1fr]">
          <div>
            <Link href="/" className="inline-flex">
              <Image
                src="/brand/switch-logo-footer.svg"
                alt={content.siteName}
                width={220}
                height={64}
                className="h-14 w-auto brightness-0 invert"
              />
            </Link>

            <p className="mt-6 max-w-md text-sm leading-7 text-white/60">
              {content.footerText}
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-bold text-brand-secondary">
              <Sparkles className="h-4 w-4" />
              {content.tagline}
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
                href={phoneHref(content.phone)}
                className="flex gap-3 transition hover:text-brand-secondary"
              >
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-secondary" />
                {content.phone}
              </a>

              <a
                href={`mailto:${content.email}`}
                className="flex gap-3 transition hover:text-brand-secondary"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-secondary" />
                {content.email}
              </a>

              <div className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-secondary" />
                <span>{content.address}</span>
              </div>

              <a
                href={content.linkedin}
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
            © {new Date().getFullYear()} {content.siteName}. All rights
            reserved.
          </p>
          <p>Built for better business communication.</p>
        </div>
      </div>
    </footer>
  );
}
