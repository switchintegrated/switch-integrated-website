import { steps } from "@/src/data/site";
import { SectionHeader } from "@/src/components/shared/SectionHeader";

export function HowWeWorkSection() {
  return (
    <section id="process" className="bg-[#f7fbfc] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          eyebrow="How We Work"
          title="Getting started is simpler than you think."
          description="From first conversation to going live, the process is designed to be clear, collaborative, and practical."
          centered
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-4">
          {steps.map((step) => (
            <article
              key={step.number}
              className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm"
            >
              <div className="text-sm font-bold text-cyan-700">
                {step.number}
              </div>
              <h3 className="mt-5 text-xl font-semibold">{step.title}</h3>
              <p className="mt-4 leading-7 text-slate-600">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
