import type { Metadata } from "next";
import {
  CheckCircle2,
  Globe2,
  PlugZap,
  Scale,
  ShieldCheck,
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
  scaleCardTitle?: string;
  scaleCardDescription?: string;
  outcomeCardTitle?: string;
  outcomeCardDescription?: string;
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

const reasonIcons = [ShieldCheck, Globe2, PlugZap, CheckCircle2];

const fallbackPage: Required<Omit<WhySwitchPageContent, "reasons" | "seo">> & {
  reasons: {
    title: string;
    description: string;
  }[];
  seo: Seo;
} = {
  heroEyebrow: "Why Switch Integrated",
  heroHeadline: "What it feels like to work with the right partner.",
  heroSubheadline:
    "Choosing a digital solutions partner is about more than capability. It’s about who shows up, how they work, and whether they’re genuinely invested in your success.",
  reasons: [
    {
      title: "We Know This Space Deeply",
      description:
        "We understand the communication, engagement, and infrastructure realities African businesses face.",
    },
    {
      title: "We’re Built for Your Scale",
      description:
        "Our solutions are designed to support growing businesses, established enterprises, and high-volume communication needs.",
    },
    {
      title: "We Think Continentally",
      description:
        "We build with Africa’s wider business and communication landscape in mind.",
    },
    {
      title: "We Make Integration Straightforward",
      description:
        "We focus on practical implementation, clear processes, and solutions that are easy to adopt.",
    },
    {
      title: "We’re Genuinely Invested in Your Outcomes",
      description:
        "We approach every engagement as a long-term partnership, not just a one-time service delivery.",
    },
  ],
  scaleCardTitle: "Built for scale",
  scaleCardDescription:
    "Whether you are running thousands of messages a day or millions, Switch Integrated is positioned as a partner that can grow with you.",
  outcomeCardTitle: "We measure success by your outcomes.",
  outcomeCardDescription:
    "Switch Integrated is positioned as a long-term partner, not just a vendor. That means every engagement should reinforce trust, clarity, responsiveness, and business growth.",
  seo: {
    title: "Why Switch Integrated | Reliable Communication Infrastructure",
    description:
      "See why businesses choose Switch Integrated for scalable messaging, verification, USSD, APIs, and customer engagement solutions.",
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

          <h1 className="mt-5 text-5xl font-semibold tracking-tight md:text-6xl">
            {content.heroHeadline}
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            {content.heroSubheadline}
          </p>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {content.reasons.map((reason, index) => {
            const Icon = reasonIcons[index % reasonIcons.length];

            return (
              <article
                key={reason.title}
                className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-primary/10"
              >
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-soft text-brand-primary">
                  <Icon className="h-6 w-6" />
                </div>

                <h2 className="mt-7 text-2xl font-semibold">{reason.title}</h2>

                <p className="mt-4 leading-7 text-slate-600">
                  {reason.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-white px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
          <div className="rounded-[2rem] bg-brand-primary p-8 text-white">
            <Scale className="h-8 w-8 text-brand-secondary" />
            <h2 className="mt-6 text-2xl font-semibold">
              {content.scaleCardTitle}
            </h2>
            <p className="mt-4 leading-7 text-slate-300">
              {content.scaleCardDescription}
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-[#f7fbfc] p-8 lg:col-span-2">
            <CheckCircle2 className="h-8 w-8 text-brand-primary" />
            <h2 className="mt-6 text-3xl font-semibold">
              {content.outcomeCardTitle}
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              {content.outcomeCardDescription}
            </p>
          </div>
        </div>
      </section>

      <Footer settings={siteSettings} />
    </main>
  );
}
