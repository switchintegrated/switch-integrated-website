import { Footer } from "@/src/components/layout/Footer";
import { Header } from "@/src/components/layout/Header";
import { reasons } from "@/src/data/site";
import {
  CheckCircle2,
  Globe2,
  PlugZap,
  Scale,
  ShieldCheck,
} from "lucide-react";

const extraReasons = [
  {
    title: "We Think Continentally",
    description:
      "Our vision is not limited to one market. As Africa’s digital economy grows, we bring a broader pan-African perspective to every client relationship.",
    icon: Globe2,
  },
  {
    title: "We Make Integration Straightforward",
    description:
      "New technology should solve problems, not create them. We focus on clear onboarding, practical implementation, and simple support.",
    icon: PlugZap,
  },
];

export default function WhySwitchPage() {
  return (
    <main className="min-h-screen bg-[#f7fbfc] text-brand-dark">
      <Header />

      <section className="bg-white px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-brand-primary">
            Why Switch Integrated
          </p>
          <h1 className="mt-5 text-5xl font-semibold tracking-tight md:text-6xl">
            What it feels like to work with the right partner.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Choosing a digital solutions partner is about more than capability.
            It’s about who shows up, how they work, and whether they’re
            genuinely invested in your success.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <article
              key={reason.title}
              className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm"
            >
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-soft text-brand-primary">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h2 className="mt-7 text-2xl font-semibold">{reason.title}</h2>
              <p className="mt-4 leading-7 text-slate-600">
                {reason.description}
              </p>
            </article>
          ))}

          {extraReasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <article
                key={reason.title}
                className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm"
              >
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-soft text-brand-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h2 className="mt-7 text-2xl font-semibold">{reason.title}</h2>
                <p className="mt-4 leading-7 text-slate-600">
                  {reason.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-white px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
          <div className="rounded-[2rem] bg-brand-primary p-8 text-white">
            <Scale className="h-8 w-8 text-brand-secondary" />
            <h2 className="mt-6 text-2xl font-semibold">Built for scale</h2>
            <p className="mt-4 leading-7 text-slate-300">
              Whether you are running thousands of messages a day or millions,
              the website positioning presents Switch as a partner that can grow
              with the client.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-[#f7fbfc] p-8 lg:col-span-2">
            <CheckCircle2 className="h-8 w-8 text-brand-primary" />
            <h2 className="mt-6 text-3xl font-semibold">
              We measure success by your outcomes.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Switch Integrated is positioned as a long-term partner, not just a
              vendor. That means the website should keep reinforcing trust,
              clarity, responsiveness, and business growth.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
