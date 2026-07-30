import type { Metadata } from "next";
import { Footer } from "@/src/components/layout/Footer";
import { Header } from "@/src/components/layout/Header";
import { AboutPreview } from "@/src/components/home/AboutPreview";
import { AudienceSection } from "@/src/components/home/AudienceSection";
import { ContactCTA } from "@/src/components/home/ContactCTA";
import { EcosystemSection } from "@/src/components/home/EcosystemSection";
import { HeroSection } from "@/src/components/home/HeroSection";
import { HowWeWorkSection } from "@/src/components/home/HowWeWorkSection";
import { SolutionsSection } from "@/src/components/home/SolutionsSection";
import { WhySwitchSection } from "@/src/components/home/WhySwitchSection";
import { client } from "@/sanity/lib/client";
import {
  aboutPageQuery,
  homepageQuery,
  servicesQuery,
  siteSettingsQuery,
  whySwitchPageQuery,
} from "@/sanity/lib/queries";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const homepage = await client.fetch<Homepage | null>(homepageQuery);

  const title =
    homepage?.seo?.title ||
    "Switch Integrated | Digital Communication Solutions | Nigeria";

  const description =
    homepage?.seo?.description ||
    "Switch Integrated is a Nigerian digital solutions and customer engagement company delivering enterprise messaging, OTP, USSD, mobile engagement, and digital communication infrastructure for businesses across Africa.";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
    },
  };
}


type Homepage = {
  seo?: {
    title?: string;
    description?: string;
  };
  heroEyebrow?: string;
  heroHeadline?: string;
  heroSubheadline?: string;
  primaryCtaText?: string;
  primaryCtaUrl?: string;
  secondaryCtaText?: string;
  secondaryCtaUrl?: string;
  audiences?: (
    | string
    | {
        title?: string;
        description?: string;
      }
  )[];
  ecosystemEyebrow?: string;
  ecosystemTitle?: string;
  ecosystemDescription?: string;
  ecosystemItems?: string[];
  audienceEyebrow?: string;
  audienceTitle?: string;
  audienceDescription?: string;
  audienceCards?: string[];
  howWeWorkEyebrow?: string;
  howWeWorkTitle?: string;
  howWeWorkDescription?: string;
  howWeWorkSteps?: {
    title?: string;
    description?: string;
  }[];
};

type Service = {
  title?: string;
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

type AboutPage = {
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
};

type WhySwitchPage = {
  heroEyebrow?: string;
  heroHeadline?: string;
  heroSubheadline?: string;
  reasons?: {
    title?: string;
    description?: string;
  }[];
};

export default async function Home() {
  const [homepage, services, siteSettings, aboutPage, whySwitchPage] =
    await Promise.all([
      client.fetch<Homepage | null>(homepageQuery),
      client.fetch<Service[]>(servicesQuery),
      client.fetch<SiteSettings | null>(siteSettingsQuery),
      client.fetch<AboutPage | null>(aboutPageQuery),
      client.fetch<WhySwitchPage | null>(whySwitchPageQuery),
    ]);

  return (
    <main className="min-h-screen bg-[#f7fbfc] text-brand-dark">
      <Header />
      <HeroSection content={homepage} />
      <SolutionsSection services={services} />
      <EcosystemSection content={homepage} />
      <AudienceSection content={homepage} />
      <AboutPreview content={aboutPage} />
      <WhySwitchSection content={whySwitchPage} />
      <HowWeWorkSection content={homepage} />
      <ContactCTA settings={siteSettings} />
      <Footer settings={siteSettings} />
    </main>
  );
}
