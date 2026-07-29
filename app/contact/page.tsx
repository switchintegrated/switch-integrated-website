import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/src/components/contact/ContactForm";
import { Building2, Globe2, Mail, Phone } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { contactPageQuery, siteSettingsQuery } from "@/sanity/lib/queries";
import { Footer } from "@/src/components/layout/Footer";
import { Header } from "@/src/components/layout/Header";
import { ContactItem } from "@/src/components/shared/ContactItem";

export const revalidate = 60;

type Seo = {
  title?: string;
  description?: string;
};

type ContactPageContent = {
  heroEyebrow?: string;
  heroHeadline?: string;
  heroSubheadline?: string;
  heroImage?: unknown;
  heroImageAlt?: string;
  reachEyebrow?: string;
  reachHeadline?: string;
  reachDescription?: string;
  serviceOptions?: string[];
  formButtonText?: string;
  successMessage?: string;
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

const fallbackPage = {
  heroEyebrow: "Contact Us",
  heroHeadline: "We’re ready when you are.",
  heroSubheadline:
    "Every great partnership starts with a conversation. Whether you have a specific brief in mind or you’re still exploring what’s possible, our team is ready to listen, advise, and help you find the right path forward.",
  heroImageAlt: "Abstract customer communication and support signal interface",
  reachEyebrow: "Reach Out",
  reachHeadline: "Let’s see what we can build together.",
  reachDescription:
    "Use the form or contact Switch Integrated directly through any of the details below.",
  serviceOptions: [
    "Messaging & Verification",
    "USSD & Mobile Engagement",
    "Digital Communication Infrastructure",
    "Strategic Partnerships & Custom Solutions",
  ],
  formButtonText: "Start the Conversation",
  successMessage:
    "Thank you. Your message has been received and our team will get back to you shortly.",
  seo: {
    title: "Contact Switch Integrated",
    description:
      "Contact Switch Integrated for messaging, verification, USSD, customer engagement, and digital communication infrastructure solutions.",
  },
};

function mergePage(content?: ContactPageContent | null) {
  return {
    ...fallbackPage,
    ...content,
    serviceOptions:
      content?.serviceOptions && content.serviceOptions.length > 0
        ? content.serviceOptions
        : fallbackPage.serviceOptions,
    seo: {
      ...fallbackPage.seo,
      ...content?.seo,
    },
  };
}

export async function generateMetadata(): Promise<Metadata> {
  const page = await client.fetch<ContactPageContent | null>(contactPageQuery);
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

export default async function ContactPage() {
  const [page, siteSettings] = await Promise.all([
    client.fetch<ContactPageContent | null>(contactPageQuery),
    client.fetch<SiteSettings | null>(siteSettingsQuery),
  ]);

  const content = mergePage(page);

  const heroImageSrc = content.heroImage
    ? urlFor(content.heroImage).width(1600).height(1000).url()
    : "/images/switch-contact-signal.png";

  return (
    <main className="min-h-screen bg-[#f7fbfc] text-brand-dark">
      <Header />

      <section className="relative overflow-hidden bg-white px-6 py-24 lg:px-8">
        <div className="absolute left-[-10%] top-[-20%] h-96 w-96 rounded-full bg-brand-secondary/10 blur-3xl" />
        <div className="absolute bottom-[-25%] right-[-12%] h-[28rem] w-[28rem] rounded-full bg-brand-primary/10 blur-3xl" />

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
              alt={content.heroImageAlt || fallbackPage.heroImageAlt}
              width={1600}
              height={1000}
              className="h-[430px] w-full rounded-[2rem] object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="relative overflow-hidden rounded-[2rem] bg-brand-primary p-8 text-white shadow-2xl shadow-brand-primary/20">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand-secondary/20 blur-2xl" />
            <div className="relative">
              <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-brand-secondary">
                {content.reachEyebrow}
              </p>
              <h2 className="mt-5 font-heading text-3xl font-extrabold tracking-[-0.03em]">
                {content.reachHeadline}
              </h2>
              <p className="mt-4 leading-7 text-slate-300">
                {content.reachDescription}
              </p>

              <div className="mt-8 rounded-[2rem] bg-white/10 p-6 backdrop-blur">
                <ContactItem
                  icon={Mail}
                  title="Email"
                  value={siteSettings?.email || "info@switchipl.com"}
                />
                <ContactItem
                  icon={Phone}
                  title="Phone"
                  value={siteSettings?.phone || "+234-913-958-0126"}
                />
                <ContactItem
                  icon={Building2}
                  title="Office"
                  value={
                    siteSettings?.address ||
                    "42, Ashiek Jarma Street, Jabi, Abuja."
                  }
                />
                <ContactItem
                  icon={Globe2}
                  title="LinkedIn"
                  value={
                    siteSettings?.linkedin ||
                    "linkedin.com/company/switch-integrated"
                  }
                />
              </div>
            </div>
          </div>

          <ContactForm
            serviceOptions={content.serviceOptions}
            buttonText={content.formButtonText}
            successMessage={content.successMessage}
          />
        </div>
      </section>

      <Footer settings={siteSettings} />
    </main>
  );
}
