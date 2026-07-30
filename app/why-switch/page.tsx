import type { Metadata } from "next";
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

      <section className="bg-white px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-brand-primary">
            {content.heroEyebrow}
          </p>

          <h1 className="mt-5 font-heading text-5xl font-extrabold tracking-[-0.04em] md:text-6xl">
            {content.heroHeadline}
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            {content.heroSubheadline}
          </p>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {content.reasons.slice(0, 5).map((reason, index) => {
            const Icon = reasonIcons[index % reasonIcons.length];

            return (
              <article
                key={reason.title}
                className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-primary/10"
              >
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-soft text-brand-primary">
                  <Icon className="h-6 w-6" />
                </div>

                <h2 className="mt-7 font-heading text-2xl font-extrabold">
                  {reason.title}
                </h2>

                <p className="mt-4 leading-7 text-slate-600">
                  {reason.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <Footer settings={siteSettings} />
    </main>
  );
}
