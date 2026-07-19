import Image from "next/image";
import Link from "next/link";

import { Footer } from "@/src/components/layout/Footer";
import { Header } from "@/src/components/layout/Header";
import { solutions } from "@/src/data/site";
import { ArrowRight } from "lucide-react";

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-[#f7fbfc] text-brand-dark">
      <Header />

      <section className="relative overflow-hidden bg-white px-6 py-24 lg:px-8">
        <div className="absolute left-[-10%] top-[-20%] h-96 w-96 rounded-full bg-brand-secondary/10 blur-3xl" />
        <div className="absolute bottom-[-20%] right-[-12%] h-[28rem] w-[28rem] rounded-full bg-brand-primary/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-brand-primary">
              Our Solutions
            </p>
            <h1 className="mt-5 font-heading text-5xl font-extrabold tracking-[-0.04em] md:text-6xl">
              Solutions Built Around How Africa Communicates
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Whether you’re sending transaction alerts, verifying users, running
              customer engagement campaigns, or scaling mobile communication
              infrastructure, Switch Integrated has solutions to support you.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[2.5rem] border border-brand-secondary/20 bg-white p-3 shadow-2xl shadow-brand-primary/15">
            <Image
              src="/images/switch-solutions-technology.png"
              alt="Abstract digital communication interface showing SMS, OTP, USSD and API channels connected through one layer"
              width={1600}
              height={1000}
              className="h-[430px] w-full rounded-[2rem] object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
          {solutions.map((solution) => {
            const Icon = solution.icon;

            return (
              <article
                key={solution.title}
                className="group relative overflow-hidden rounded-[2rem] border border-brand-secondary/15 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-primary/10"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary opacity-0 transition group-hover:opacity-100" />
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand-secondary/10 transition group-hover:scale-125" />

                <div className="relative">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-primary text-brand-secondary shadow-lg shadow-brand-primary/15">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h2 className="mt-8 font-heading text-3xl font-extrabold tracking-[-0.025em]">
                    {solution.title}
                  </h2>

                  <p className="mt-5 text-lg leading-8 text-slate-600">
                    {solution.description}
                  </p>

                  <Link
                    href="/contact"
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-primary px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-brand-dark"
                  >
                    Discuss this solution
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-white px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[2.5rem] bg-brand-primary text-white shadow-2xl shadow-brand-primary/20 lg:grid-cols-[1fr_0.8fr]">
          <div className="p-8 md:p-14">
            <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-brand-secondary">
              Custom Requirements
            </p>
            <h2 className="mt-4 max-w-3xl font-heading text-4xl font-extrabold tracking-[-0.035em] md:text-5xl">
              Something specific in mind? Let’s build it together.
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              For businesses looking to expand through new channels, platforms, or
              mobile technology integrations, Switch Integrated can explore
              partnership structuring, telecom integrations, and bespoke solution
              development.
            </p>

            <Link
              href="/contact"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-brand-secondary px-7 py-4 text-sm font-bold text-brand-dark transition hover:-translate-y-0.5 hover:bg-white"
            >
              Start a Conversation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="relative min-h-[320px] bg-brand-dark/20 p-5">
            <Image
              src="/images/switch-solutions-technology.png"
              alt="Digital communication channels connected through infrastructure"
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
