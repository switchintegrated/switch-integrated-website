import { ArrowRight, BadgeCheck, Zap } from "lucide-react";
import { audiences, heroMetrics } from "@/src/data/site";
import { MetricCard } from "@/src/components/shared/MetricCard";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-x-0 top-0 h-[560px] bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.14),transparent_36%),radial-gradient(circle_at_top_left,rgba(20,184,166,0.12),transparent_28%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 pb-20 pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-28 lg:pt-24">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-800">
            <BadgeCheck className="h-4 w-4" />
            Where Businesses Connect, Engage, and Grow.
          </div>

          <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-slate-950 md:text-6xl lg:text-7xl">
            We Help African Businesses Communicate Better, Reach Further, and
            Grow Faster.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Switch Integrated delivers digital solutions and customer engagement
            technology, from enterprise messaging to mobile infrastructure,
            designed specifically for the way Africa does business.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#solutions"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-7 py-4 text-sm font-bold text-white transition hover:bg-slate-800"
            >
              Explore Solutions
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-4 text-sm font-bold text-slate-950 transition hover:border-slate-950"
            >
              Start a Conversation
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            {audiences.map((audience) => (
              <span
                key={audience}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm"
              >
                {audience}
              </span>
            ))}
          </div>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative">
      <div className="absolute -inset-8 rounded-[3rem] bg-cyan-200/40 blur-3xl" />

      <div className="relative rounded-[2.25rem] border border-slate-200 bg-white p-5 shadow-2xl">
        <div className="rounded-[1.8rem] bg-slate-950 p-6 text-white">
          <div className="flex items-center justify-between border-b border-white/10 pb-5">
            <div>
              <p className="text-sm text-slate-400">
                Digital Communication Layer
              </p>
              <h2 className="mt-1 text-xl font-semibold">
                Connect. Verify. Engage. Grow.
              </h2>
            </div>
            <div className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-300">
              Active
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {heroMetrics.map((metric) => (
              <MetricCard
                key={metric.label}
                icon={metric.icon}
                label={metric.label}
                value={metric.value}
              />
            ))}
          </div>

          <div className="mt-6 rounded-3xl bg-white/10 p-5">
            <div className="mb-5 flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-cyan-300 text-slate-950">
                <Zap className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold">Communication Flow</p>
                <p className="text-sm text-slate-400">
                  Business → Switch → Customers
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 text-center text-xs">
              <div className="rounded-2xl bg-white/10 p-3 text-slate-300">
                Business
              </div>
              <div className="rounded-2xl bg-cyan-300 p-3 font-bold text-slate-950">
                Switch
              </div>
              <div className="rounded-2xl bg-white/10 p-3 text-slate-300">
                Customers
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
