import { CheckCircle2, ShieldCheck, Sparkles, TrendingUp } from "lucide-react";

import { reasons } from "@/src/data/site";
import { SectionHeader } from "@/src/components/shared/SectionHeader";
import { Reveal } from "@/src/components/shared/Reveal";

const iconList = [ShieldCheck, TrendingUp, Sparkles, CheckCircle2];

export function WhySwitchSection() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-24 lg:px-8">
      <div className="absolute left-[-10%] top-[10%] h-96 w-96 rounded-full bg-brand-secondary/10 blur-3xl" />
      <div className="absolute right-[-12%] bottom-[-10%] h-96 w-96 rounded-full bg-brand-primary/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <SectionHeader
              eyebrow="Why Switch"
              title="A partner built for trust, scale, and business growth."
              description="Switch Integrated combines reliable communication infrastructure with strategic support, helping businesses connect with customers more clearly and confidently."
            />

            <div className="mt-10 overflow-hidden rounded-[2rem] bg-brand-primary p-6 text-white shadow-2xl shadow-brand-primary/20">
              <div className="absolute" />

              <p className="font-heading text-3xl font-extrabold tracking-[-0.04em]">
                Where businesses connect, engage, and grow.
              </p>

              <p className="mt-4 text-sm leading-7 text-white/70">
                From customer communication to verification and mobile
                engagement, Switch helps organizations build stronger digital
                relationships.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {["Reliable", "Scalable", "Secure", "Partner-led"].map(
                  (item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-bold text-white"
                    >
                      {item}
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {reasons.map((reason, index) => {
              const Icon = iconList[index % iconList.length];

              return (
                <Reveal key={reason.title} delay={index * 130}>
                  <article className="group relative overflow-hidden rounded-[2rem] border border-brand-secondary/15 bg-[#f8ffff] p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-2xl hover:shadow-brand-primary/10">
                    <div className="absolute -right-14 -top-14 h-36 w-36 rounded-full bg-brand-secondary/10 transition duration-300 group-hover:scale-125" />

                    <div className="relative">
                      <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-primary text-brand-secondary shadow-lg shadow-brand-primary/15 transition group-hover:bg-brand-secondary group-hover:text-brand-primary">
                        <Icon className="h-6 w-6" />
                      </div>

                      <h3 className="mt-7 font-heading text-xl font-extrabold tracking-[-0.03em] text-brand-dark">
                        {reason.title}
                      </h3>

                      <p className="mt-4 text-sm leading-7 text-slate-600">
                        {reason.description}
                      </p>

                      <div className="mt-7 h-px w-full bg-gradient-to-r from-brand-secondary/60 to-transparent" />

                      <p className="mt-5 text-xs font-extrabold uppercase tracking-[0.18em] text-brand-secondary">
                        Switch advantage
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
