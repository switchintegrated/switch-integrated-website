import { ArrowRight } from "lucide-react";
import { solutions } from "@/src/data/site";
import { SectionHeader } from "@/src/components/shared/SectionHeader";

export function SolutionsSection() {
  return (
    <section id="solutions" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          eyebrow="Solutions"
          title="Solutions Built Around How Africa Communicates"
          description="Whether you’re sending transaction alerts, verifying users, running mobile engagement campaigns, or scaling communication infrastructure, Switch Integrated has the solutions to support you."
          centered
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {solutions.map((solution) => {
            const Icon = solution.icon;

            return (
              <article
                key={solution.title}
                className="group rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-cyan-50 text-cyan-700">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mt-8 text-2xl font-semibold">
                  {solution.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {solution.description}
                </p>

                <div className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-slate-950">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
