import { CircleCheck } from "lucide-react";
import { reasons } from "@/src/data/site";
import { SectionHeader } from "@/src/components/shared/SectionHeader";

export function WhySwitchSection() {
  return (
    <section id="why-switch" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          eyebrow="Why Switch Integrated"
          title="What it feels like to work with the right partner."
          description="Choosing a digital solutions partner is about more than capability. It’s about who shows up, how they work, and whether they’re genuinely invested in your success."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="rounded-[2rem] border border-slate-200 bg-[#f7fbfc] p-7"
            >
              <CircleCheck className="h-7 w-7 text-cyan-700" />
              <h3 className="mt-5 text-xl font-semibold">{reason.title}</h3>
              <p className="mt-4 leading-7 text-slate-600">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
