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
    title: "Contact Switch Integrated | Start a Conversation Today",
    description:
      "Get in touch with Switch Integrated. Whether you need enterprise messaging, OTP services, USSD solutions, or a strategic communication partner, we’re ready to help.",
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
    : "/images/contact-customer-support.webp";

  const rawLinkedin =
    siteSettings?.linkedin || "linkedin.com/company/switch-integrated";
  const linkedinHref = rawLinkedin.startsWith("http")
    ? rawLinkedin
    : `https://${rawLinkedin}`;

  return (
    <main className="min-h-screen bg-[#f7fbfc] text-brand-dark">
      <Header />

      <section className="relative overflow-hidden bg-gradient-to-br from-brand-soft via-white to-brand-secondary/10 px-6 pt-20 pb-12 lg:px-8 lg:pt-24 lg:pb-14">
        <div className="absolute left-[-10%] top-[-18%] h-96 w-96 rounded-full bg-brand-secondary/15 blur-3xl" />
        <div className="absolute right-[10%] top-[14%] h-56 w-56 rounded-full bg-brand-primary/10 blur-3xl" />
        <div className="absolute bottom-[-25%] right-[-12%] h-[28rem] w-[28rem] rounded-full bg-brand-primary/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-brand-secondary">
              {content.heroEyebrow}
            </p>

            <h1 className="mt-5 font-heading text-5xl font-extrabold tracking-[-0.05em] md:text-6xl">
              {content.heroHeadline}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              {content.heroSubheadline}
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                "Tell us your need",
                "Speak with Switch",
                "Build the right path",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-brand-secondary/15 bg-white/80 px-4 py-3 text-xs font-black uppercase tracking-[0.14em] text-brand-primary shadow-sm backdrop-blur"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2.5rem] border border-brand-secondary/20 bg-white/85 p-3 shadow-2xl shadow-brand-primary/15 backdrop-blur">
            <Image
              src={heroImageSrc}
              alt={content.heroImageAlt || fallbackPage.heroImageAlt}
              width={1600}
              height={1000}
              className="h-[380px] w-full rounded-[2rem] object-cover object-center lg:h-[410px]"
              priority
            />

            <div className="absolute left-8 top-8 rounded-full border border-white/30 bg-white/90 px-5 py-3 text-xs font-black uppercase tracking-[0.18em] text-brand-primary shadow-xl backdrop-blur">
              Start a conversation
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pt-10 pb-20 lg:px-8 lg:pt-12 lg:pb-24">
        <div className="mx-auto grid max-w-7xl items-start gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="relative overflow-hidden rounded-[2rem] bg-brand-primary p-7 text-white shadow-2xl shadow-brand-primary/20 md:p-8">
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

              <div className="mt-7 rounded-[2rem] bg-white/10 p-5 backdrop-blur md:p-6">
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
                <div className="flex gap-5 border-t border-white/10 pt-6">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white/10 text-brand-secondary">
                    <Globe2 className="h-5 w-5" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-sm text-white/55">LinkedIn</p>
                    <a
                      href={linkedinHref}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-white underline decoration-brand-secondary/60 underline-offset-4 transition hover:bg-brand-secondary hover:text-brand-primary"
                    >
                      Visit our LinkedIn page
                    </a>
                  </div>
                </div>
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
