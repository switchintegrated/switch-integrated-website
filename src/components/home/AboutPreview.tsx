import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

export function AboutPreview() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-24 lg:px-8">
      <div className="absolute left-[-10%] top-[8%] h-96 w-96 rounded-full bg-brand-secondary/10 blur-3xl" />
      <div className="absolute right-[-12%] bottom-[-10%] h-96 w-96 rounded-full bg-brand-primary/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.28em] text-brand-secondary">
            About Switch Integrated
          </p>

          <h2 className="mt-5 max-w-3xl font-heading text-4xl font-extrabold tracking-[-0.045em] text-brand-dark md:text-6xl">
            Built to help businesses communicate better and grow faster.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Switch Integrated delivers digital solutions and
            customer engagement technology for businesses that need reliable
            communication infrastructure, mobile engagement, verification, and
            strategic digital support.
          </p>

          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            {[
              "Enterprise messaging",
              "Customer verification",
              "Mobile engagement",
              "Digital infrastructure",
            ].map((item) => (
              <div
                key={item}
                className="group flex items-center gap-3 rounded-2xl border border-brand-secondary/15 bg-brand-soft/70 px-4 py-4 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-brand-primary/10"
              >
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white text-brand-primary shadow-sm transition group-hover:bg-brand-secondary">
                  <CheckCircle2 className="h-5 w-5" />
                </span>

                <span className="text-sm font-bold text-brand-dark">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <Link
            href="/about"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-brand-primary px-6 py-4 text-sm font-bold text-white shadow-lg shadow-brand-primary/20 transition hover:-translate-y-0.5 hover:bg-brand-dark"
          >
            Learn more about us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="relative">
          <div className="absolute -left-8 -top-8 h-36 w-36 rounded-full bg-brand-secondary/30 blur-3xl" />
          <div className="absolute -bottom-8 -right-8 h-44 w-44 rounded-full bg-brand-primary/20 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2.5rem] border border-brand-secondary/15 bg-brand-soft p-3 shadow-2xl shadow-brand-primary/15">
            <div className="relative overflow-hidden rounded-[2rem]">
              <Image
                src="/images/switch-home-about-crop.jpg"
                alt="African business professionals discussing digital communication strategy on a laptop"
                width={1803}
                height={1002}
                className="h-[430px] w-full object-cover transition duration-700 hover:scale-[1.03]"
                priority={false}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/45 via-transparent to-transparent" />

              <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/85 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-brand-primary shadow-lg backdrop-blur">
                <Sparkles className="h-4 w-4 text-brand-secondary" />
                Connect. Engage. Grow.
              </div>

              <div className="absolute inset-x-5 bottom-5 rounded-[1.75rem] border border-white/30 bg-white/90 p-5 shadow-xl backdrop-blur-xl">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-brand-secondary">
                  Human-first digital support
                </p>

                <p className="mt-2 font-heading text-xl font-extrabold tracking-[-0.03em] text-brand-dark">
                  Helping teams connect, verify, engage, and scale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
