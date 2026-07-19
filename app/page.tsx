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

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7fbfc] text-brand-dark">
      <Header />
      <HeroSection />
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
