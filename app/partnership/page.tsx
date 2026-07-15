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
    <main className="min-h-screen bg-[#f7fbfc] text-slate-950">
      <Header />

      <section className="bg-white px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-700">
            Partnership
          </p>
          <h1 className="mt-5 text-5xl font-semibold tracking-tight md:text-6xl">
            Let’s build something that lasts.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Africa’s digital future will be built through intentional
            collaboration between enterprises, fintechs, technology innovators,
            operators, and service providers who are willing to grow together.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-700">
              How We Partner
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight">
              Relationships before transactions.
            </h2>
          </div>

          <div className="space-y-6 rounded-[2rem] border border-slate-200 bg-white p-8 text-lg leading-8 text-slate-600 shadow-sm">
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
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-700">
              Who We Work With
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Built for organisations ready to connect, engage, and grow.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {partnerTypes.map((partner) => {
              const Icon = partner.icon;

              return (
                <article
                  key={partner.title}
                  className="rounded-[2rem] border border-slate-200 bg-[#f7fbfc] p-8"
                >
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-slate-950 text-cyan-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-7 text-2xl font-semibold">
                    {partner.title}
                  </h3>
                  <p className="mt-4 leading-7 text-slate-600">
                    {partner.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-[2.5rem] bg-slate-950 p-8 text-white shadow-2xl md:p-14">
          <Handshake className="h-10 w-10 text-cyan-300" />
          <h2 className="mt-8 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
            Ready to start a conversation?
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            If you are a business looking for a reliable communication partner,
            a fintech scaling your digital infrastructure, or a startup ready to
            build on solid foundations, Switch Integrated would love to start a
            conversation.
          </p>

          <a
            href="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-cyan-300 px-7 py-4 text-sm font-bold text-slate-950 transition hover:bg-cyan-200"
          >
            Let’s Build Together
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
