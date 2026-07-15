import { Footer } from "@/src/components/layout/Footer";
import { Header } from "@/src/components/layout/Header";
import { solutions } from "@/src/data/site";
import { ArrowRight } from "lucide-react";

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-[#f7fbfc] text-slate-950">
      <Header />

      <section className="bg-white px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-700">
            Our Solutions
          </p>
          <h1 className="mt-5 text-5xl font-semibold tracking-tight md:text-6xl">
            Solutions Built Around How Africa Communicates
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Whether you’re sending transaction alerts, verifying users, running
            customer engagement campaigns, or scaling mobile communication
            infrastructure, Switch Integrated has solutions to support you.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
          {solutions.map((solution) => {
            const Icon = solution.icon;

            return (
              <article
                key={solution.title}
                className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm"
              >
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-slate-950 text-cyan-300">
                  <Icon className="h-6 w-6" />
                </div>

                <h2 className="mt-8 text-3xl font-semibold">
                  {solution.title}
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  {solution.description}
                </p>

                <a
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white transition hover:bg-cyan-700"
                >
                  Discuss this solution
                  <ArrowRight className="h-4 w-4" />
                </a>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-white px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-[2.5rem] bg-slate-950 p-8 text-white shadow-2xl md:p-14">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
            Custom Requirements
          </p>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
            Something specific in mind? Let’s build it together.
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            For businesses looking to expand through new channels, platforms, or
            mobile technology integrations, Switch Integrated can explore
            partnership structuring, telecom integrations, and bespoke solution
            development.
          </p>

          <a
            href="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-cyan-300 px-7 py-4 text-sm font-bold text-slate-950 transition hover:bg-cyan-200"
          >
            Start a Conversation
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
