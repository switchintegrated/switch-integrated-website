import {
  ArrowRight,
  Compass,
  Handshake,
  Rocket,
  SearchCheck,
} from "lucide-react";

import { steps } from "@/src/data/site";
import { SectionHeader } from "@/src/components/shared/SectionHeader";
import { Reveal } from "@/src/components/shared/Reveal";

const stepIcons = [SearchCheck, Compass, Rocket, Handshake];

export function HowWeWorkSection() {
  return (
    <section className="relative overflow-hidden bg-[#f4fcfc] px-6 py-24 lg:px-8">
      <div className="absolute left-[-10%] top-[-10%] h-96 w-96 rounded-full bg-brand-secondary/10 blur-3xl" />
      <div className="absolute bottom-[-12%] right-[-10%] h-96 w-96 rounded-full bg-brand-primary/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="How We Work"
          title="Getting started is simpler than you think."
          description="From first conversation to going live, the process is designed to be clear, collaborative, and practical."
          centered
        />

        <div className="relative mt-16">
          <div className="absolute left-[8%] right-[8%] top-10 hidden h-px bg-gradient-to-r from-transparent via-brand-secondary/50 to-transparent lg:block" />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = stepIcons[index % stepIcons.length];

              return (
                <Reveal key={step.title} delay={index * 120}>
                  <article className="group relative h-full overflow-hidden rounded-[2rem] border border-brand-secondary/15 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-primary/10">
                    <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-brand-secondary/10 transition duration-300 group-hover:scale-125" />

                    <div className="relative">
                      <div className="flex items-center justify-between gap-4">
                        <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-primary text-brand-secondary shadow-lg shadow-brand-primary/15 transition group-hover:bg-brand-secondary group-hover:text-brand-primary">
                          <Icon className="h-6 w-6" />
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="font-heading text-sm font-extrabold text-brand-primary">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          {index < steps.length - 1 ? (
                            <ArrowRight className="hidden h-4 w-4 text-brand-secondary lg:block" />
                          ) : null}
                        </div>
                      </div>

                      <h3 className="mt-8 font-heading text-xl font-extrabold tracking-[-0.03em] text-brand-dark">
                        {step.title}
                      </h3>

                      <p className="mt-5 text-sm leading-7 text-slate-600">
                        {step.description}
                      </p>

                      <div className="mt-8 h-px w-full bg-gradient-to-r from-brand-secondary/60 to-transparent" />

                      <p className="mt-5 text-xs font-black uppercase tracking-[0.18em] text-brand-secondary">
                        Step {String(index + 1).padStart(2, "0")}
                      </p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
