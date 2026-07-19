import Image from "next/image";
import Link from "next/link";

import { Footer } from "@/src/components/layout/Footer";
import { Header } from "@/src/components/layout/Header";
import {
  ArrowRight,
  Building2,
  Handshake,
  Landmark,
  Rocket,
  UsersRound,
} from "lucide-react";

const partnerTypes = [
  {
    title: "Enterprises & Large Brands",
    description:
      "For organisations that need reliable communication, customer engagement, verification, and infrastructure support at scale.",
    icon: Building2,
  },
  {
    title: "Fintechs & Financial Institutions",
    description:
      "For businesses that need secure messaging, OTP verification, transaction alerts, and dependable customer communication.",
    icon: Landmark,
  },
  {
    title: "Telecom & Technology Partners",
    description:
      "For operators and technology partners looking to collaborate on mobile-first communication solutions and integrations.",
    icon: UsersRound,
  },
  {
    title: "Startups & Growing Businesses",
    description:
      "For ambitious teams building on solid foundations and looking for a communication partner that can grow with them.",
    icon: Rocket,
  },
];

export default function PartnershipPage() {
  return (
    <main className="min-h-screen bg-[#f7fbfc] text-brand-dark">
      <Header />

      <section className="relative overflow-hidden bg-white px-6 py-24 lg:px-8">
        <div className="absolute left-[-12%] top-[-20%] h-96 w-96 rounded-full bg-brand-secondary/10 blur-3xl" />
        <div className="absolute bottom-[-25%] right-[-12%] h-[28rem] w-[28rem] rounded-full bg-brand-primary/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-brand-primary">
              Partnership
            </p>
            <h1 className="mt-5 font-heading text-5xl font-extrabold tracking-[-0.04em] md:text-6xl">
              Let’s build something that lasts.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Africa’s digital future will be built through intentional
              collaboration between enterprises, fintechs, technology innovators,
              operators, and service providers who are willing to grow together.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[2.5rem] border border-brand-secondary/20 bg-white p-3 shadow-2xl shadow-brand-primary/15">
            <Image
              src="/images/switch-partnership-bridge.png"
              alt="Abstract partnership bridge connecting business and technology organisations"
              width={1600}
              height={1000}
              className="h-[430px] w-full rounded-[2rem] object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-brand-primary">
              How We Partner
            </p>
            <h2 className="mt-4 font-heading text-4xl font-extrabold tracking-[-0.035em]">
              Relationships before transactions.
            </h2>
          </div>

          <div className="space-y-6 rounded-[2rem] border border-brand-secondary/15 bg-white p-8 text-lg leading-8 text-slate-600 shadow-sm">
            <p>
              Switch Integrated is committed to building the kind of
              partnerships shaped by shared vision, mutual investment, and a
              genuine belief that what we build together will matter.
            </p>
            <p>
              We are not looking for one-off transactions. We work with
              businesses and partners that want reliable communication systems,
              practical digital solutions, and long-term growth across African
              markets.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-brand-primary">
              Who We Work With
            </p>
            <h2 className="mt-4 font-heading text-4xl font-extrabold tracking-[-0.035em] md:text-5xl">
              Built for organisations ready to connect, engage, and grow.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {partnerTypes.map((partner) => {
              const Icon = partner.icon;

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

      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[2.5rem] bg-brand-primary text-white shadow-2xl shadow-brand-primary/20 lg:grid-cols-[1fr_0.8fr]">
          <div className="p-8 md:p-14">
            <Handshake className="h-10 w-10 text-brand-secondary" />
            <h2 className="mt-8 max-w-3xl font-heading text-4xl font-extrabold tracking-[-0.035em] md:text-5xl">
              Ready to start a conversation?
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              If you are a business looking for a reliable communication partner,
              a fintech scaling your digital infrastructure, or a startup ready to
              build on solid foundations, Switch Integrated would love to start a
              conversation.
            </p>

            <Link
              href="/contact"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-brand-secondary px-7 py-4 text-sm font-bold text-brand-dark transition hover:-translate-y-0.5 hover:bg-white"
            >
              Let’s Build Together
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="relative min-h-[320px] bg-brand-dark/20 p-5">
            <Image
              src="/images/switch-partnership-bridge.png"
              alt="Partnership bridge visual"
              width={1600}
              height={1000}
              className="h-full min-h-[320px] w-full rounded-[2rem] object-cover opacity-95"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
