import type { Metadata } from "next";
import Image from "next/image";

import { client } from "@/sanity/lib/client";
import { aboutPageQuery, siteSettingsQuery } from "@/sanity/lib/queries";
import { Footer } from "@/src/components/layout/Footer";
import { Header } from "@/src/components/layout/Header";
import {
  CheckCircle2,
  Eye,
  Handshake,
  Lightbulb,
  MessageCircle,
  Target,
} from "lucide-react";

export const revalidate = 60;

type Seo = {
  title?: string;
  description?: string;
};

type AboutPageContent = {
  heroEyebrow?: string;
  heroHeadline?: string;
  heroSubheadline?: string;
  storyTitle?: string;
  storyBody?: string;
  vision?: string;
  mission?: string;
  values?: {
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

const valueIcons = [Handshake, Lightbulb, MessageCircle, CheckCircle2];

const fallbackAbout: Required<Omit<AboutPageContent, "values" | "seo">> & {
  values: {
    title: string;
    description: string;
  }[];
  seo: Seo;
} = {
  heroEyebrow: "About Switch Integrated",
  heroHeadline:
    "Africa’s businesses deserve communication infrastructure that actually works for them.",
  heroSubheadline:
    "Switch Integrated is a Nigerian-based digital solutions and customer engagement company working at the crossroads of mobile technology, digital infrastructure, and customer experience.",
  storyTitle: "Built to help businesses reach, serve, and grow.",
  storyBody:
    "Our focus is simple: helping organisations across Africa reach their customers reliably, communicate at scale, and build the kind of digital engagement that drives real growth.",
  vision:
    "To be the trusted digital solutions partner that African businesses turn to as they build, connect, and grow, today and into the future.",
  mission:
    "To deliver reliable, innovative digital solutions and customer engagement technology that helps businesses across Africa communicate better, serve their customers more effectively, and thrive in a rapidly evolving digital economy.",
  values: [
    {
      title: "Partnership First",
      description:
        "We don’t just deliver solutions, we build relationships. Every engagement begins with listening, because the best solution is always the one that actually fits what you need.",
    },
    {
      title: "Innovation With Purpose",
      description:
        "We embrace new thinking, not for its own sake, but because the right solution at the right time creates real value for the businesses and people we serve.",
    },
    {
      title: "Candour",
      description:
        "We say what we mean and mean what we say. With Switch Integrated, there are no hidden agendas, just honest conversation, clear expectations, and follow-through you can count on.",
    },
    {
      title: "Growth, Together",
      description:
        "We grow when our clients grow. That alignment drives everything, from how we build our solutions to how we show up for our partners every single day.",
    },
  ],
  seo: {
    title: "About Switch Integrated | African Digital Solutions Partner",
    description:
      "Learn about Switch Integrated, a digital solutions and customer engagement partner helping African businesses communicate, engage, and grow.",
  },
};

function mergeAbout(content?: AboutPageContent | null) {
  return {
    ...fallbackAbout,
    ...content,
    values:
      content?.values && content.values.length > 0
        ? content.values
        : fallbackAbout.values,
    seo: {
      ...fallbackAbout.seo,
      ...content?.seo,
    },
  };
}

export async function generateMetadata(): Promise<Metadata> {
  const aboutPage = await client.fetch<AboutPageContent | null>(aboutPageQuery);
  const about = mergeAbout(aboutPage);

  return {
    title: about.seo.title,
    description: about.seo.description,
    openGraph: {
      title: about.seo.title,
      description: about.seo.description,
      type: "website",
    },
  };
}

export default async function AboutPage() {
  const [aboutPage, siteSettings] = await Promise.all([
    client.fetch<AboutPageContent | null>(aboutPageQuery),
    client.fetch<SiteSettings | null>(siteSettingsQuery),
  ]);

  const about = mergeAbout(aboutPage);
  const storyParagraphs = about.storyBody
    .split("\n")
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  return (
    <main className="min-h-screen bg-[#f7fbfc] text-brand-dark">
      <Header />

      <section className="relative overflow-hidden bg-white px-6 py-24 lg:px-8">
        <div className="absolute left-[-10%] top-[-20%] h-96 w-96 rounded-full bg-brand-secondary/10 blur-3xl" />
        <div className="absolute bottom-[-25%] right-[-10%] h-[28rem] w-[28rem] rounded-full bg-brand-primary/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-brand-primary">
              {about.heroEyebrow}
            </p>
            <h1 className="mt-5 font-heading text-5xl font-extrabold tracking-[-0.045em] md:text-6xl">
              {about.heroHeadline}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              {about.heroSubheadline}
            </p>
          </div>

          <div className="relative">
            <div className="absolute -left-6 -top-6 h-28 w-28 rounded-full bg-brand-secondary/30 blur-2xl" />
            <div className="absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-brand-primary/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2.5rem] border border-brand-secondary/20 bg-white p-3 shadow-2xl shadow-brand-primary/15">
              <Image
                src="/images/switch-home-about-crop.jpg"
                alt="Business professionals discussing digital communication strategy on a laptop"
                width={1803}
                height={1002}
                className="h-[430px] w-full rounded-[2rem] object-cover"
                priority
              />

              <div className="absolute inset-x-8 bottom-8 rounded-[1.5rem] border border-white/30 bg-white/90 p-5 shadow-xl backdrop-blur">
                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    "Mobile technology",
                    "Digital infrastructure",
                    "Customer experience",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl bg-brand-soft px-4 py-3 text-center text-xs font-extrabold text-brand-primary"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-brand-primary">
              Our Story
            </p>
            <h2 className="mt-4 font-heading text-4xl font-extrabold tracking-[-0.035em]">
              {about.storyTitle}
            </h2>
          </div>

          <div className="space-y-6 rounded-[2rem] border border-brand-secondary/15 bg-white p-8 text-lg leading-8 text-slate-600 shadow-sm">
            {storyParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <div className="group rounded-[2rem] border border-brand-secondary/15 bg-[#f7fbfc] p-8 transition hover:-translate-y-1 hover:bg-white hover:shadow-2xl hover:shadow-brand-primary/10">
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-primary text-brand-secondary shadow-lg shadow-brand-primary/15">
              <Eye className="h-6 w-6" />
            </div>
            <h2 className="mt-7 font-heading text-3xl font-extrabold">
              Our Vision
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              {about.vision}
            </p>
          </div>

          <div className="group rounded-[2rem] border border-brand-secondary/15 bg-[#f7fbfc] p-8 transition hover:-translate-y-1 hover:bg-white hover:shadow-2xl hover:shadow-brand-primary/10">
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-primary text-brand-secondary shadow-lg shadow-brand-primary/15">
              <Target className="h-6 w-6" />
            </div>
            <h2 className="mt-7 font-heading text-3xl font-extrabold">
              Our Mission
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              {about.mission}
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-brand-primary">
              Core Values
            </p>
            <h2 className="mt-4 font-heading text-4xl font-extrabold tracking-[-0.035em] md:text-5xl">
              The principles that shape how we work.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              These values guide how we engage with clients, build solutions,
              and show up as a long-term partner.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {about.values.map((value, index) => {
              const Icon = valueIcons[index % valueIcons.length];

              return (
                <article
                  key={value.title}
                  className="group relative overflow-hidden rounded-[2rem] border border-brand-secondary/15 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-primary/10"
                >
                  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand-secondary/10 transition group-hover:scale-125" />
                  <div className="relative">
                    <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-primary text-brand-secondary shadow-lg shadow-brand-primary/15">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-7 font-heading text-2xl font-extrabold">
                      {value.title}
                    </h3>
                    <p className="mt-4 leading-7 text-slate-600">
                      {value.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <Footer settings={siteSettings} />
    </main>
  );
}
