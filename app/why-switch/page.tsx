import type { Metadata } from "next";
import Image from "next/image";
import {
  CheckCircle2,
  Globe2,
  PlugZap,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { client } from "@/sanity/lib/client";
import { siteSettingsQuery, whySwitchPageQuery } from "@/sanity/lib/queries";
import { Footer } from "@/src/components/layout/Footer";
import { Header } from "@/src/components/layout/Header";

export const revalidate = 60;

type Seo = {
  title?: string;
  description?: string;
};

type WhySwitchPageContent = {
  heroEyebrow?: string;
  heroHeadline?: string;
  heroSubheadline?: string;
  reasons?: {
    title?: string;
    description?: string;
  }[];
  seo?: Seo;
};

type SiteSettings = {
  siteName?: string;
  tagline?: string;
  email?: string;
  phone?: string;
  address?: string;
  linkedin?: string;
  footerText?: string;
};

const reasonIcons = [ShieldCheck, Sparkles, Globe2, PlugZap, CheckCircle2];

const fallbackPage = {
  heroEyebrow: "Why Switch Integrated",
  heroHeadline: "What It Feels Like to Work With the Right Partner.",
  heroSubheadline:
    "Choosing a digital solutions partner is about more than capability. It’s about who shows up, how they work, and whether they’re genuinely invested in your success. Here’s what working with Switch Integrated looks like.",
  reasons: [
    {
      title: "We Know This Space Deeply",
      description:
        "Digital communication in Africa has its own rhythms, its own challenges, and its own rules. We’ve operated in this space long enough to understand what works, what doesn’t, and how to navigate the complexity, so you don’t have to.",
    },
    {
      title: "We’re Built for Your Scale",
      description:
        "Whether you’re running thousands of messages a day or millions, our solutions flex with you. We build for where you are now and where you’re going, not just the immediate need.",
    },
    {
      title: "We Think Continentally",
      description:
        "Our vision isn’t limited to one market. As Africa’s digital economy grows, we’re growing with it — and we bring that pan-African perspective to every client relationship.",
    },
    {
      title: "We Make Integration Straightforward",
      description:
        "New technology should solve problems, not create them. We’re committed to making onboarding, integration, and day-to-day operations as smooth and simple as possible.",
    },
    {
      title: "We’re Genuinely Invested in Your Outcomes",
      description:
        "We measure our success by yours. That’s not a marketing line, it’s the philosophy that shapes how we engage with every partner, from first conversation to long-term delivery.",
    },
  ],
  seo: {
    title: "Why Switch Integrated | Your Digital Communication Partner in Africa",
    description:
      "Discover why African enterprises, fintechs, and growing businesses choose Switch Integrated as their digital communication and customer engagement partner.",
  },
};

function mergePage(content?: WhySwitchPageContent | null) {
  return {
    ...fallbackPage,
    ...content,
    reasons:
      content?.reasons && content.reasons.length > 0
        ? content.reasons
        : fallbackPage.reasons,
    seo: {
      ...fallbackPage.seo,
      ...content?.seo,
    },
  };
}

export async function generateMetadata(): Promise<Metadata> {
  const page = await client.fetch<WhySwitchPageContent | null>(
    whySwitchPageQuery,
  );
  const content = mergePage(page);

  return {
    title: content.seo.title,
    description: content.seo.description,
    openGraph: {
      title: content.seo.title,
      description: content.seo.description,
      type: "website",
    },
  };
}

export default async function WhySwitchPage() {
  const [page, siteSettings] = await Promise.all([
    client.fetch<WhySwitchPageContent | null>(whySwitchPageQuery),
    client.fetch<SiteSettings | null>(siteSettingsQuery),
  ]);

  const content = mergePage(page);

  return (
    <main className="min-h-screen bg-[#f7fbfc] text-brand-dark">
      <Header />

      <section className="relative overflow-hidden bg-white px-6 pt-20 pb-14 lg:px-8 lg:pt-24 lg:pb-16">
        <div className="absolute left-[-12%] top-[-20%] h-96 w-96 rounded-full bg-brand-secondary/10 blur-3xl" />
        <div className="absolute right-[-10%] bottom-[-35%] h-[30rem] w-[30rem] rounded-full bg-brand-primary/10 blur-3xl" />

        <Image
          src="/brand/switch-icon-teal.svg"
          alt=""
          width={360}
          height={360}
          className="absolute -right-12 top-14 hidden h-72 w-72 opacity-[0.06] lg:block"
        />

        <div className="relative mx-auto max-w-6xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-brand-secondary">
            {content.heroEyebrow}
          </p>

          <h1 className="mx-auto mt-5 max-w-5xl font-heading text-5xl font-extrabold tracking-[-0.05em] md:text-7xl">
            {content.heroHeadline}
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            {content.heroSubheadline}
          </p>

          <div className="mx-auto mt-9 grid max-w-4xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {["Trust", "Scale", "Integration", "Outcomes"].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-brand-secondary/15 bg-brand-soft/80 px-5 py-4 text-sm font-black uppercase tracking-[0.16em] text-brand-primary shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pt-10 pb-20 lg:px-8 lg:pt-12 lg:pb-24">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {content.reasons.slice(0, 5).map((reason, index) => {
            const Icon = reasonIcons[index % reasonIcons.length];

            return (
              <article
                key={reason.title}
                className="group relative overflow-hidden rounded-[2rem] border border-brand-secondary/15 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-primary/10"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary opacity-0 transition group-hover:opacity-100" />
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand-secondary/10 transition group-hover:scale-125" />

                <div className="relative">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-primary text-brand-secondary shadow-lg shadow-brand-primary/15 transition group-hover:bg-brand-secondary group-hover:text-brand-primary">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h2 className="mt-7 font-heading text-2xl font-extrabold tracking-[-0.03em]">
                    {reason.title}
                  </h2>

                  <p className="mt-4 leading-7 text-slate-600">
                    {reason.description}
                  </p>
                </div>
              </article>
            );
          })}

          <article className="relative overflow-hidden rounded-[2rem] bg-brand-primary p-8 text-white shadow-2xl shadow-brand-primary/20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(43,188,190,0.28),transparent_28%),radial-gradient(circle_at_10%_90%,rgba(43,188,190,0.18),transparent_24%)]" />

            <Image
              src="/brand/switch-icon-teal.svg"
              alt=""
              width={240}
              height={240}
              className="absolute -right-10 -top-10 h-52 w-52 opacity-10"
            />

            <div className="relative">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-brand-secondary">
                Switch advantage
              </p>

              <h2 className="mt-5 font-heading text-3xl font-extrabold tracking-[-0.04em]">
                Built for partners who need more than a vendor.
              </h2>

              <p className="mt-5 leading-7 text-white/75">
                The difference is not only what we deliver. It is how we listen,
                how we integrate, and how we stay invested after go-live.
              </p>

              <div className="mt-7 grid grid-cols-2 gap-3">
                {["Reliable", "Clear", "Scalable", "Partner-led"].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-bold text-white"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>
      </section>

      <Footer settings={siteSettings} />
    </main>
  );
}
