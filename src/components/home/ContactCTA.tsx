import Link from "next/link";
import {
  ArrowRight,
  Mail,
  MapPin,
  MessageSquareText,
  Phone,
  Sparkles,
} from "lucide-react";

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

export function ContactCTA({ settings }: { settings?: SiteSettings | null }) {
  const content = {
    ...fallbackSettings,
    ...settings,
  };

  const contactItems = [
    {
      icon: Phone,
      label: "Phone",
      value: content.phone,
      href: phoneHref(content.phone),
    },
    {
      icon: Mail,
      label: "Email",
      value: content.email,
      href: `mailto:${content.email}`,
    },
    {
      icon: MapPin,
      label: "Office",
      value: content.address,
      href: null,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f4fcfc] px-6 py-24 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(30,188,187,0.18),transparent_32%),radial-gradient(circle_at_85%_80%,rgba(0,56,82,0.14),transparent_34%)]" />

      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-brand-primary p-8 text-white shadow-2xl shadow-brand-primary/25 md:p-12 lg:p-16">
        <div className="absolute right-[-8rem] top-[-8rem] h-80 w-80 rounded-full bg-brand-secondary/20 blur-3xl" />
        <div className="absolute bottom-[-10rem] left-[-8rem] h-96 w-96 rounded-full bg-white/10 blur-3xl" />

        <div className="relative grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.06] px-4 py-3 backdrop-blur-sm">
              <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-secondary/15">
                <span className="absolute h-4 w-4 rounded-full bg-brand-secondary/40 animate-ping" />
                <span className="relative h-2.5 w-2.5 rounded-full bg-brand-secondary shadow-[0_0_22px_rgba(30,188,187,0.95)]" />
              </span>

              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <span className="text-[0.68rem] font-black uppercase tracking-[0.24em] text-brand-secondary">
                  Live signal
                </span>
                <span className="text-sm font-semibold text-white/90 sm:text-base">
                  Ready to build better customer communication?
                </span>
              </div>
            </div>

            <h2 className="mt-8 max-w-4xl font-heading text-4xl font-extrabold tracking-[-0.04em] text-white md:text-6xl">
              Let’s help your business connect, engage, and grow.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              Talk to {content.siteName} about messaging, verification, USSD,
              digital communication infrastructure, and partnership-led
              solutions for your business.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-secondary px-7 py-4 text-sm font-black text-brand-primary shadow-xl shadow-brand-secondary/20 transition hover:-translate-y-0.5 hover:bg-white"
              >
                Contact Switch
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>

              <a
                href={`mailto:${content.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-brand-primary"
              >
                <Mail className="h-4 w-4" />
                {content.email}
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            {contactItems.map((item) => {
              const Icon = item.icon;

              const inner = (
                <div className="flex gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-secondary text-brand-primary">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-brand-secondary">
                      {item.label}
                    </p>
                    <p className="mt-2 text-sm font-bold leading-6 text-white">
                      {item.value}
                    </p>
                  </div>
                </div>
              );

              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  className="group rounded-[1.5rem] border border-white/10 bg-white/10 p-5 backdrop-blur transition hover:bg-white/15"
                >
                  {inner}
                </a>
              ) : (
                <div
                  key={item.label}
                  className="group rounded-[1.5rem] border border-white/10 bg-white/10 p-5 backdrop-blur transition hover:bg-white/15"
                >
                  {inner}
                </div>
              );
            })}

            <div className="rounded-[1.5rem] border border-brand-secondary/30 bg-brand-secondary/15 p-5">
              <div className="flex gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white text-brand-primary">
                  <MessageSquareText className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-brand-secondary">
                    Core promise
                  </p>
                  <p className="mt-2 text-sm font-bold leading-6 text-white">
                    {content.tagline}
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden rounded-[1.5rem] border border-white/10 bg-brand-dark/20 p-5 lg:block">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white/10 text-brand-secondary">
                  <Sparkles className="h-5 w-5" />
                </div>
                <p className="text-sm font-bold leading-6 text-white/75">
                  Built for reliable customer communication across the channels
                  people already use.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
