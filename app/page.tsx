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
import { homepageQuery } from "@/sanity/lib/queries";

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

export default async function Home() {
  const homepage = await client.fetch<Homepage | null>(homepageQuery);

  return (
    <main className="min-h-screen bg-[#f7fbfc] text-brand-dark">
      <Header />
      <HeroSection content={homepage} />
      <SolutionsSection />
      <EcosystemSection />
      <AudienceSection />
      <AboutPreview />
      <WhySwitchSection />
      <HowWeWorkSection />
      <ContactCTA />
      <Footer />
    </main>
  );
}
