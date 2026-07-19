"use client";

import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  CheckCircle2,
  MessageSquareText,
  Network,
  Play,
  ShieldCheck,
  Smartphone,
  Sparkles,
} from "lucide-react";

const trustPoints = [
  "Reach customers",
  "Verify identity",
  "Trigger journeys",
  "Scale communication",
];

const serviceQueue = [
  {
    title: "SMS",
    subtitle: "Messaging",
    icon: MessageSquareText,
    className: "animate-[queueCardOne_12s_ease-in-out_infinite]",
  },
  {
    title: "USSD",
    subtitle: "Mobile journeys",
    icon: Smartphone,
    className: "animate-[queueCardTwo_12s_ease-in-out_infinite]",
  },
  {
    title: "OTP",
    subtitle: "Verification",
    icon: ShieldCheck,
    className: "animate-[queueCardThree_12s_ease-in-out_infinite]",
  },
  {
    title: "API",
    subtitle: "System layer",
    icon: Network,
    className: "animate-[queueCardFour_12s_ease-in-out_infinite]",
  },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-brand-dark text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_22%,rgba(30,188,187,0.26),transparent_26%),radial-gradient(circle_at_18%_88%,rgba(30,188,187,0.20),transparent_34%),linear-gradient(135deg,#001f31_0%,#003852_58%,#006b78_100%)]" />

      <div className="absolute inset-0 opacity-[0.09] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:76px_76px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-14 md:py-16 lg:min-h-[calc(100vh-92px)] lg:grid-cols-[minmax(0,1fr)_minmax(380px,500px)] lg:px-8">
        <div className="relative z-20 max-w-3xl animate-[heroCopyIn_900ms_ease-out_both]">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white/90 shadow-2xl backdrop-blur">
            <BadgeCheck className="h-4 w-4 text-brand-secondary" />
            Where Businesses Connect, Engage, and Grow.
          </div>

          <h1 className="max-w-3xl text-[clamp(2.75rem,4.8vw,5rem)] font-heading font-extrabold leading-[1.02] tracking-[-0.045em] text-white">
            Connect every customer interaction in one intelligent layer.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
            Switch Integrated helps African businesses reach, verify, and engage
            customers through messaging, OTP, USSD, APIs, and digital
            communication infrastructure.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/solutions"
              className="inline-flex items-center justify-center gap-3 rounded-md bg-white px-7 py-4 text-base font-bold text-brand-dark shadow-xl transition hover:-translate-y-0.5 hover:bg-brand-soft"
            >
              <Play className="h-4 w-4 fill-brand-dark" />
              See it in action
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 bg-white/10 px-7 py-4 text-base font-bold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/15"
            >
              Start a Conversation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 grid max-w-xl gap-3 sm:grid-cols-2">
            {trustPoints.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-sm font-bold text-white/90 backdrop-blur"
              >
                <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-secondary" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <HeroTransitionStage />
      </div>
    </section>
  );
}

function HeroTransitionStage() {
  return (
    <div className="relative z-10 mx-auto w-full max-w-[500px] animate-[heroSceneIn_900ms_ease-out_250ms_both] lg:justify-self-end">
      <div className="relative h-[420px] overflow-hidden rounded-[2.5rem] border border-white/[0.04] bg-transparent md:h-[500px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_44%,rgba(30,188,187,0.16),transparent_34%)]" />
        <div className="absolute inset-y-0 -left-1/2 w-1/2 bg-gradient-to-r from-transparent via-brand-secondary/12 to-transparent animate-[stageSweep_5s_ease-in-out_infinite]" />

        <div className="absolute left-6 top-8 z-30">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-secondary">
            Service Queue
          </p>
          <p className="mt-1 text-xs text-white/55">
            One channel routes at a time
          </p>
        </div>

        <div className="absolute right-8 top-8 z-50 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 shadow-xl shadow-black/10 backdrop-blur-md animate-[stageChipFloat_5s_ease-in-out_infinite]">
          <div className="flex items-center gap-2">
            <BarChart3 className="h-4 w-4 text-brand-secondary" />
            <p className="text-xs font-bold text-white">24/7 delivery</p>
          </div>
        </div>

        <div className="absolute left-6 right-24 top-[45%] z-10 h-px overflow-hidden bg-white/12">
          <div className="h-full w-1/4 bg-brand-secondary shadow-[0_0_24px_rgba(30,188,187,0.95)] animate-[queueSignal_3s_ease-in-out_infinite]" />
        </div>

        <div className="absolute left-7 top-[45%] z-20 h-3 w-3 -translate-y-1/2 rounded-full bg-brand-secondary shadow-[0_0_20px_rgba(30,188,187,0.95)] animate-[queueDot_3s_ease-in-out_infinite]" />

        <div className="absolute left-6 top-[37%] z-40 h-[90px] w-[185px] md:w-[205px]">
          {serviceQueue.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className={`absolute left-0 top-0 w-full rounded-2xl border border-white/10 bg-[#002b40]/55 p-4 shadow-xl shadow-black/15 backdrop-blur-md ${service.className}`}
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-secondary text-brand-primary">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-base font-bold text-white">
                      {service.title}
                    </p>
                    <p className="text-xs text-white/60">{service.subtitle}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="absolute right-10 top-[35%] z-30 grid h-24 w-24 place-items-center rounded-full border border-brand-secondary/20 bg-[#002b40]/35 shadow-xl shadow-black/10 backdrop-blur-md animate-[stageMainFloat_5s_ease-in-out_infinite]">
          <div className="absolute inset-[-12px] rounded-full border border-dashed border-brand-secondary/35 animate-[spin_18s_linear_infinite]" />
          <div className="absolute inset-[-24px] rounded-full border border-brand-secondary/15 animate-[pulseRing_2.6s_ease-in-out_infinite]" />

          <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-secondary text-brand-primary animate-[heroPulse_2s_ease-in-out_infinite]">
            <Sparkles className="h-5 w-5" />
          </div>

          <div className="absolute -bottom-10 left-1/2 w-36 -translate-x-1/2 text-center">
            <p className="text-xs font-bold text-white">Switch Engine</p>
            <p className="text-[10px] text-white/55">Route + deliver</p>
          </div>
        </div>

        <div className="absolute bottom-5 left-6 right-6 z-50 rounded-3xl border border-white/10 bg-[#002b40]/30 p-4 shadow-xl shadow-black/10 backdrop-blur-md">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-sm font-bold text-white">Live delivery flow</p>
              <p className="text-xs text-white/60">
                Service card → Switch → Customer
              </p>
            </div>

            <span className="rounded-full bg-emerald-300 px-3 py-1 text-xs font-bold text-emerald-950">
              Active
            </span>
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-white/10 p-3">
            <div className="absolute left-5 right-5 top-1/2 h-px -translate-y-1/2 bg-white/12" />
            <div className="absolute left-5 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-brand-secondary shadow-[0_0_18px_rgba(30,188,187,0.95)] animate-[stageDot_2.2s_ease-in-out_infinite]" />
            <div className="absolute left-5 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,0.95)] animate-[stageDotTwo_2.2s_ease-in-out_infinite]" />

            <div className="relative grid grid-cols-3 gap-2 text-center">
              {["Request", "Route", "Deliver"].map((item) => (
                <div
                  key={item}
                  className="rounded-xl bg-white/10 py-2 text-[10px] font-bold text-white"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
