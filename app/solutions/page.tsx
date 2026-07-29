import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  MessageSquareText,
  Network,
  Smartphone,
} from "lucide-react";

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import {
  servicesQuery,
  siteSettingsQuery,
  solutionsPageQuery,
} from "@/sanity/lib/queries";
import { Footer } from "@/src/components/layout/Footer";
import { Header } from "@/src/components/layout/Header";

export const revalidate = 60;

type Seo = {
  title?: string;
  description?: string;
};

type SanityImage = {
  asset?: {
    _ref?: string;
    _type?: string;
  };
};

type SolutionsPageContent = {
  heroEyebrow?: string;
  heroHeadline?: string;
  heroSubheadline?: string;
  heroImage?: SanityImage;
  heroImageAlt?: string;
  serviceCardCtaText?: string;
  customEyebrow?: string;
  customHeadline?: string;
  customDescription?: string;
  customImage?: SanityImage;
  customImageAlt?: string;
  customCtaText?: string;
  customCtaUrl?: string;
  seo?: Seo;
};

type Service = {
  title?: string;
  iconType?: "messaging" | "ussd" | "infrastructure" | "partnerships";
  shortDescription?: string;
  longDescription?: string;
  slug?: string;
  order?: number;
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

const iconMap = {
  messaging: MessageSquareText,
  ussd: Smartphone,
  infrastructure: Network,
  partnerships: BadgeCheck,
};

function getServiceIcon(service: Service) {
  if (service.iconType && iconMap[service.iconType]) {
    return iconMap[service.iconType];
  }

  const title = service.title || "";

  if (title.toLowerCase().includes("messaging")) return iconMap.messaging;
  if (title.toLowerCase().includes("ussd")) return iconMap.ussd;
  if (title.toLowerCase().includes("infrastructure")) return iconMap.infrastructure;

  return iconMap.partnerships;
}

const fallbackPage: Required<
  Omit<SolutionsPageContent, "seo" | "heroImage" | "customImage">
> & {
  heroImage?: SanityImage;
  customImage?: SanityImage;
  seo: Seo;
} = {
  heroEyebrow: "Our Solutions",
  heroHeadline: "Solutions Built Around How Africa Communicates",
  heroSubheadline:
    "Whether you’re sending transaction alerts, verifying users, running customer engagement campaigns, or scaling mobile communication infrastructure, Switch Integrated has solutions to support you.",
  heroImageAlt:
    "Abstract digital communication interface showing SMS, OTP, USSD and API channels connected through one layer",
  serviceCardCtaText: "Discuss this solution",
  customEyebrow: "Custom Requirements",
  customHeadline: "Something specific in mind? Let’s build it together.",
  customDescription:
    "For businesses looking to expand through new channels, platforms, or mobile technology integrations, Switch Integrated can explore partnership structuring, telecom integrations, and bespoke solution development.",
  customImageAlt: "Digital communication channels connected through infrastructure",
  customCtaText: "Start a Conversation",
  customCtaUrl: "/contact",
  seo: {
    title: "Solutions | Switch Integrated",
    description:
      "Explore Switch Integrated solutions for messaging, OTP, USSD, APIs, customer engagement, and digital communication infrastructure.",
  },
};

function mergePage(content?: SolutionsPageContent | null) {
  return {
    ...fallbackPage,
    ...content,
    seo: {
      ...fallbackPage.seo,
      ...content?.seo,
    },
  };
}

function imageUrl(image?: SanityImage, fallback?: string) {
  if (image?.asset?._ref) {
    return urlFor(image).width(1600).height(1000).fit("crop").url();
  }

  return fallback || "/images/switch-solutions-technology.png";
}

export async function generateMetadata(): Promise<Metadata> {
  const page = await client.fetch<SolutionsPageContent | null>(
    solutionsPageQuery,
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

export default async function SolutionsPage() {
  const [page, services, siteSettings] = await Promise.all([
    client.fetch<SolutionsPageContent | null>(solutionsPageQuery),
    client.fetch<Service[]>(servicesQuery),
    client.fetch<SiteSettings | null>(siteSettingsQuery),
  ]);

  const content = mergePage(page);
  const heroImageSrc = imageUrl(
    content.heroImage,
    "/images/switch-solutions-technology.png",
  );
  const customImageSrc = imageUrl(
    content.customImage,
    "/images/switch-solutions-technology.png",
  );

  return (
    <main className="min-h-screen bg-[#f7fbfc] text-brand-dark">
      <Header />

      <section className="relative overflow-hidden bg-white px-6 py-24 lg:px-8">
        <div className="absolute left-[-10%] top-[-20%] h-96 w-96 rounded-full bg-brand-secondary/10 blur-3xl" />
        <div className="absolute bottom-[-20%] right-[-12%] h-[28rem] w-[28rem] rounded-full bg-brand-primary/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
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

          <div className="relative overflow-hidden rounded-[2.5rem] border border-brand-secondary/20 bg-white p-3 shadow-2xl shadow-brand-primary/15">
            <Image
              src={heroImageSrc}
              alt={content.heroImageAlt}
              width={1600}
              height={1000}
              className="h-[430px] w-full rounded-[2rem] object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
          {services.map((service) => {
            const title = service.title || "Untitled Service";
            const description =
              service.longDescription ||
              service.shortDescription ||
              "A Switch Integrated solution designed to support business communication and customer engagement.";
            const Icon = getServiceIcon(service);

            return (
              <article
                key={service.slug || title}
                className="group relative overflow-hidden rounded-[2rem] border border-brand-secondary/15 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-primary/10"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary opacity-0 transition group-hover:opacity-100" />
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand-secondary/10 transition group-hover:scale-125" />

                <div className="relative">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-primary text-brand-secondary shadow-lg shadow-brand-primary/15">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h2 className="mt-8 font-heading text-3xl font-extrabold tracking-[-0.025em]">
                    {title}
                  </h2>

                  <p className="mt-5 text-lg leading-8 text-slate-600">
                    {description}
                  </p>

                  <Link
                    href="/contact"
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-primary px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-brand-dark"
                  >
                    {content.serviceCardCtaText}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-white px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[2.5rem] bg-brand-primary text-white shadow-2xl shadow-brand-primary/20 lg:grid-cols-[1fr_0.8fr]">
          <div className="p-8 md:p-14">
            <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-brand-secondary">
              {content.customEyebrow}
            </p>

            <h2 className="mt-4 max-w-3xl font-heading text-4xl font-extrabold tracking-[-0.035em] md:text-5xl">
              {content.customHeadline}
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              {content.customDescription}
            </p>

            <Link
              href={content.customCtaUrl}
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-brand-secondary px-7 py-4 text-sm font-bold text-brand-dark transition hover:-translate-y-0.5 hover:bg-white"
            >
              {content.customCtaText}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="relative min-h-[320px] bg-brand-dark/20 p-5">
            <Image
              src={customImageSrc}
              alt={content.customImageAlt}
              width={1600}
              height={1000}
              className="h-full min-h-[320px] w-full rounded-[2rem] object-cover opacity-95"
            />
          </div>
        </div>
      </section>

      <Footer settings={siteSettings} />
    </main>
  );
}
