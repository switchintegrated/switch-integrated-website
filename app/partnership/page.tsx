import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Handshake,
  Landmark,
  Rocket,
  UsersRound,
} from "lucide-react";

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { partnershipPageQuery, siteSettingsQuery } from "@/sanity/lib/queries";
import { Footer } from "@/src/components/layout/Footer";
import { Header } from "@/src/components/layout/Header";

export const revalidate = 60;

type Seo = {
  title?: string;
  description?: string;
};

type PartnerType = {
  title?: string;
  description?: string;
};

type PartnershipPageContent = {
  heroEyebrow?: string;
  heroHeadline?: string;
  heroSubheadline?: string;
  heroImage?: unknown;
  heroImageAlt?: string;
  partnerEyebrow?: string;
  partnerHeadline?: string;
  partnerBody?: string;
  audienceEyebrow?: string;
  audienceHeadline?: string;
  partnerTypes?: PartnerType[];
  ctaHeadline?: string;
  ctaDescription?: string;
  ctaButtonText?: string;
  ctaButtonUrl?: string;
  ctaImage?: unknown;
  ctaImageAlt?: string;
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

const partnerIcons = [Building2, Landmark, UsersRound, Rocket];

const fallbackPage = {
  heroEyebrow: "Partnership",
  heroHeadline: "Let’s build something that lasts.",
  heroSubheadline:
    "Africa’s digital future will be built through intentional collaboration between enterprises, fintechs, technology innovators, operators, and service providers who are willing to grow together.",
  heroImageAlt:
    "Abstract partnership bridge connecting business and technology organisations",
  partnerEyebrow: "How We Partner",
  partnerHeadline: "Relationships before transactions.",
  partnerBody:
    "Switch Integrated is committed to building the kind of partnerships shaped by shared vision, mutual investment, and a genuine belief that what we build together will matter.\n\nWe are not looking for one-off transactions. We work with businesses and partners that want reliable communication systems, practical digital solutions, and long-term growth across African markets.",
  audienceEyebrow: "Who We Work With",
  audienceHeadline:
    "Built for organisations ready to connect, engage, and grow.",
  partnerTypes: [
    {
      title: "Enterprises & Large Brands",
      description:
        "For organisations that need reliable communication, customer engagement, verification, and infrastructure support at scale.",
    },
    {
      title: "Fintechs & Financial Institutions",
      description:
        "For businesses that need secure messaging, OTP verification, transaction alerts, and dependable customer communication.",
    },
    {
      title: "Telecom & Technology Partners",
      description:
        "For operators and technology partners looking to collaborate on mobile-first communication solutions and integrations.",
    },
    {
      title: "Startups & Growing Businesses",
      description:
        "For ambitious teams building on solid foundations and looking for a communication partner that can grow with them.",
    },
  ],
  ctaHeadline: "Ready to start a conversation?",
  ctaDescription:
    "If you are a business looking for a reliable communication partner, a fintech scaling your digital infrastructure, or a startup ready to build on solid foundations, Switch Integrated would love to start a conversation.",
  ctaButtonText: "Let’s Build Together",
  ctaButtonUrl: "/contact",
  ctaImageAlt: "Business team reviewing digital strategy together",
  seo: {
    title: "Partnership | Switch Integrated",
    description:
      "Partner with Switch Integrated to build scalable communication, customer engagement, verification, and mobile infrastructure solutions.",
  },
};

function mergePage(content?: PartnershipPageContent | null) {
  return {
    ...fallbackPage,
    ...content,
    partnerTypes:
      content?.partnerTypes && content.partnerTypes.length > 0
        ? content.partnerTypes
        : fallbackPage.partnerTypes,
    seo: {
      ...fallbackPage.seo,
      ...content?.seo,
    },
  };
}

export async function generateMetadata(): Promise<Metadata> {
  const page = await client.fetch<PartnershipPageContent | null>(
    partnershipPageQuery,
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

export default async function PartnershipPage() {
  const [page, siteSettings] = await Promise.all([
    client.fetch<PartnershipPageContent | null>(partnershipPageQuery),
    client.fetch<SiteSettings | null>(siteSettingsQuery),
  ]);

  const content = mergePage(page);
  const heroImageSrc = content.heroImage
    ? urlFor(content.heroImage).width(1600).height(1000).url()
    : "/images/about-team-strategy.webp";
  const ctaImageSrc = content.ctaImage
    ? urlFor(content.ctaImage).width(1600).height(1000).url()
    : "/images/partnership-strategy-meeting.webp";

  return (
    <main className="min-h-screen bg-[#f7fbfc] text-brand-dark">
      <Header />

      <section className="relative overflow-hidden bg-gradient-to-br from-brand-soft via-white to-brand-secondary/10 px-6 py-16 lg:px-8 lg:py-20">
        <div className="absolute left-[-8%] top-[-10%] h-80 w-80 rounded-full bg-brand-secondary/18 blur-3xl" />
        <div className="absolute right-[8%] top-[8%] h-56 w-56 rounded-full bg-brand-primary/10 blur-3xl" />
        <div className="absolute right-[-6%] bottom-[-12%] h-80 w-80 rounded-full bg-brand-secondary/12 blur-3xl" />
        <div className="absolute left-[-12%] top-[-20%] h-96 w-96 rounded-full bg-brand-secondary/10 blur-3xl" />
        <div className="absolute bottom-[-25%] right-[-12%] h-[28rem] w-[28rem] rounded-full bg-brand-primary/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-brand-primary">
              {content.heroEyebrow}
            </p>
            <h1 className="mt-5 font-heading text-5xl font-extrabold tracking-[-0.04em] md:text-6xl">
              {content.heroHeadline}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              {content.heroSubheadline}
            </p>
          </div>

          <div className="relative self-start overflow-hidden rounded-[2.5rem] border border-brand-secondary/20 bg-white/85 p-3 shadow-2xl shadow-brand-primary/15 backdrop-blur lg:-mt-2">
            <Image
              src={heroImageSrc}
              alt={content.heroImageAlt || fallbackPage.heroImageAlt}
              width={1600}
              height={1000}
              className="h-[380px] w-full rounded-[2rem] object-cover object-[76%_center] lg:h-[420px] lg:scale-[1.02]"
              priority
            />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-6 py-16 lg:px-8 lg:py-20">
        <div className="absolute left-[-10%] top-[10%] h-80 w-80 rounded-full bg-brand-secondary/10 blur-3xl" />
        <div className="absolute right-[-10%] bottom-[-20%] h-96 w-96 rounded-full bg-brand-primary/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-stretch">
          <div className="rounded-[2rem] border border-brand-secondary/15 bg-white/80 p-8 shadow-sm backdrop-blur">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-brand-secondary">
              {content.partnerEyebrow}
            </p>

            <h2 className="mt-4 font-heading text-4xl font-extrabold tracking-[-0.04em] md:text-5xl">
              {content.partnerHeadline}
            </h2>

            <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {["Shared vision", "Mutual investment", "Long-term growth"].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-brand-secondary/15 bg-brand-soft/80 px-4 py-3 text-xs font-black uppercase tracking-[0.16em] text-brand-primary"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] bg-brand-primary p-8 text-white shadow-2xl shadow-brand-primary/20 md:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(43,188,190,0.24),transparent_28%),radial-gradient(circle_at_8%_90%,rgba(43,188,190,0.16),transparent_24%)]" />

            <Image
              src="/brand/switch-icon-teal.svg"
              alt=""
              width={260}
              height={260}
              className="absolute -right-12 -top-14 h-56 w-56 opacity-10"
            />

            <div className="relative space-y-6 text-lg leading-8 text-white/78">
              {content.partnerBody.split("\n\n").map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 pt-16 pb-10 lg:px-8 lg:pt-20 lg:pb-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-brand-primary">
              {content.audienceEyebrow}
            </p>
            <h2 className="mt-4 font-heading text-4xl font-extrabold tracking-[-0.035em] md:text-5xl">
              {content.audienceHeadline}
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {content.partnerTypes.map((partner, index) => {
              const Icon = partnerIcons[index % partnerIcons.length];

              return (
                <article
                  key={partner.title}
                  className="group relative overflow-hidden rounded-[2rem] border border-brand-secondary/15 bg-[#f7fbfc] p-8 transition hover:-translate-y-1 hover:bg-white hover:shadow-2xl hover:shadow-brand-primary/10"
                >
                  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand-secondary/10 transition group-hover:scale-125" />
                  <div className="relative">
                    <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-primary text-brand-secondary shadow-lg shadow-brand-primary/15">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-7 font-heading text-2xl font-extrabold">
                      {partner.title}
                    </h3>
                    <p className="mt-4 leading-7 text-slate-600">
                      {partner.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 pt-10 pb-20 lg:px-8 lg:pt-12 lg:pb-24">
        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[2.5rem] bg-brand-primary text-white shadow-2xl shadow-brand-primary/20 lg:grid-cols-[1fr_0.8fr]">
          <div className="p-8 md:p-14">
            <Handshake className="h-10 w-10 text-brand-secondary" />
            <h2 className="mt-8 max-w-3xl font-heading text-4xl font-extrabold tracking-[-0.035em] md:text-5xl">
              {content.ctaHeadline}
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              {content.ctaDescription}
            </p>

            <Link
              href={content.ctaButtonUrl}
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-brand-secondary px-7 py-4 text-sm font-bold text-brand-dark transition hover:-translate-y-0.5 hover:bg-white"
            >
              {content.ctaButtonText}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="relative min-h-[300px] bg-brand-dark/20 p-5">
            <Image
              src={ctaImageSrc}
              alt={content.ctaImageAlt || fallbackPage.ctaImageAlt}
              width={1600}
              height={1000}
              className="h-full min-h-[300px] w-full rounded-[2rem] object-cover object-center opacity-95"
            />
          </div>
        </div>
      </section>

      <Footer settings={siteSettings} />
    </main>
  );
}
