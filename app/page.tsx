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
} from "@/sanity/lib/queries";

export const revalidate = 60;

type Homepage = {
  heroEyebrow?: string;
  heroHeadline?: string;
  heroSubheadline?: string;
  primaryCtaText?: string;
  primaryCtaUrl?: string;
  secondaryCtaText?: string;
  secondaryCtaUrl?: string;
  audiences?: string[];
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

export default async function Home() {
  const [homepage, services, siteSettings, aboutPage] = await Promise.all([
    client.fetch<Homepage | null>(homepageQuery),
    client.fetch<Service[]>(servicesQuery),
    client.fetch<SiteSettings | null>(siteSettingsQuery),
    client.fetch<AboutPage | null>(aboutPageQuery),
  ]);

  return (
    <main className="min-h-screen bg-[#f7fbfc] text-brand-dark">
      <Header />
      <HeroSection content={homepage} />
      <SolutionsSection services={services} />
      <EcosystemSection />
      <AudienceSection />
      <AboutPreview content={aboutPage} />
      <WhySwitchSection />
      <HowWeWorkSection />
      <ContactCTA settings={siteSettings} />
      <Footer settings={siteSettings} />
    </main>
  );
}
