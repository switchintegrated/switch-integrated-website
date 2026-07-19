"use client";

import {
  Building2,
  CheckCircle2,
  Landmark,
  MessageSquareText,
  Network,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Store,
} from "lucide-react";

const businessCards = [
  {
    title: "CRM",
    subtitle: "Customer request",
    icon: Building2,
    className: "animate-[businessFlowOne_8s_ease-in-out_infinite]",
  },
  {
    title: "Banking",
    subtitle: "Verification request",
    icon: Landmark,
    className: "animate-[businessFlowTwo_8s_ease-in-out_infinite]",
  },
  {
    title: "Retail",
    subtitle: "Campaign trigger",
    icon: Store,
    className: "animate-[businessFlowThree_8s_ease-in-out_infinite]",
  },
];

const customerChannels = [
  {
    title: "SMS",
    subtitle: "Delivered",
    icon: MessageSquareText,
    className: "animate-[customerChannelOne_8s_ease-in-out_infinite]",
  },
  {
    title: "OTP",
    subtitle: "Verified",
    icon: ShieldCheck,
    className: "animate-[customerChannelTwo_8s_ease-in-out_infinite]",
  },
  {
    title: "USSD",
    subtitle: "Completed",
    icon: Smartphone,
    className: "animate-[customerChannelThree_8s_ease-in-out_infinite]",
  },
  {
    title: "API",
    subtitle: "Synced",
    icon: Network,
    className: "animate-[customerChannelFour_8s_ease-in-out_infinite]",
  },
];

export function CommunicationOrbit() {
  return (
    <div className="relative mx-auto min-h-[720px] w-full max-w-[700px] overflow-hidden rounded-[2.5rem] border border-brand-secondary/15 bg-white p-5 pt-8 shadow-2xl shadow-brand-primary/10 md:min-h-[610px] md:p-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_52%_46%,rgba(30,188,187,0.18),transparent_34%),radial-gradient(circle_at_82%_12%,rgba(0,56,82,0.10),transparent_28%)]" />
      <div className="absolute inset-0 opacity-[0.28] bg-[linear-gradient(to_right,rgba(0,56,82,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,56,82,0.06)_1px,transparent_1px)] bg-[size:52px_52px]" />

      <div className="relative z-20 grid gap-3 sm:grid-cols-3 sm:items-center">
        <div className="inline-flex items-center justify-center gap-2 rounded-2xl border border-brand-secondary/15 bg-white px-3 py-3 text-xs font-bold text-brand-dark shadow-sm">
          <Building2 className="h-4 w-4 text-brand-primary" />
          Businesses
        </div>

        <div className="inline-flex items-center justify-center rounded-full bg-brand-soft px-4 py-3 text-center text-[0.68rem] font-black uppercase tracking-[0.16em] text-brand-primary">
          Switch Layer
        </div>

        <div className="inline-flex items-center justify-center gap-2 rounded-2xl border border-brand-secondary/15 bg-white px-3 py-3 text-xs font-bold text-brand-dark shadow-sm">
          <CheckCircle2 className="h-4 w-4 text-brand-primary" />
          Customers
        </div>
      </div>

      <div className="relative z-10 mt-14 grid gap-6 md:grid-cols-[0.9fr_150px_1fr] md:items-center">
        <div className="relative z-20 space-y-4">
          {businessCards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className={`relative z-20 rounded-[1.35rem] border border-brand-secondary/15 bg-white p-3.5 shadow-lg shadow-brand-primary/5 ${card.className}`}
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-brand-primary text-brand-secondary">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div className="min-w-0">
                    <p className="font-heading text-sm font-extrabold leading-tight text-brand-dark">
                      {card.title}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      {card.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="relative z-10 mx-auto grid h-[190px] w-full max-w-[230px] place-items-center md:h-[285px] md:max-w-none">
          <div className="absolute left-[-125px] right-[-135px] top-1/2 hidden h-px -translate-y-1/2 bg-brand-primary/10 md:block" />

          <div className="absolute left-[-125px] top-1/2 hidden h-px w-[125px] -translate-y-1/2 overflow-hidden md:block">
            <div className="h-full w-1/2 bg-brand-secondary shadow-[0_0_18px_rgba(30,188,187,0.9)] animate-[businessPacketLine_2.8s_ease-in-out_infinite]" />
          </div>

          <div className="absolute right-[-135px] top-1/2 hidden h-px w-[135px] -translate-y-1/2 overflow-hidden md:block">
            <div className="h-full w-1/2 bg-brand-secondary shadow-[0_0_18px_rgba(30,188,187,0.9)] animate-[customerPacketLine_2.8s_ease-in-out_infinite]" />
          </div>

          <div className="absolute left-[-118px] top-1/2 hidden h-3 w-3 -translate-y-1/2 rounded-full bg-brand-secondary shadow-[0_0_20px_rgba(30,188,187,0.95)] animate-[businessPacketDot_2.8s_ease-in-out_infinite] md:block" />

          <div className="absolute right-[4px] top-1/2 hidden h-3 w-3 -translate-y-1/2 rounded-full bg-brand-secondary shadow-[0_0_20px_rgba(30,188,187,0.95)] animate-[customerPacketDot_2.8s_ease-in-out_infinite] md:block" />

          <div className="relative grid h-32 w-32 place-items-center rounded-full bg-brand-primary text-center text-white shadow-2xl shadow-brand-primary/20 animate-[switchEngineFloat_4s_ease-in-out_infinite] md:h-36 md:w-36">
            <div className="absolute inset-[-11px] rounded-full border border-dashed border-brand-secondary/80 animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-[-24px] rounded-full border border-brand-secondary/25 animate-[engineRingPulse_3s_ease-in-out_infinite]" />
            <div className="absolute inset-[-38px] rounded-full border border-brand-secondary/15 animate-[engineRingPulse_3s_ease-in-out_infinite_500ms]" />

            <div>
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-brand-secondary text-brand-primary animate-[engineIconPulse_2s_ease-in-out_infinite]">
                <Sparkles className="h-6 w-6" />
              </div>
              <p className="mt-3 font-heading text-sm font-extrabold">Switch</p>
              <p className="text-xs text-white/55">Layer</p>
            </div>
          </div>
        </div>

        <div className="relative z-20 grid gap-3">
          {customerChannels.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className={`relative z-20 w-full rounded-[1.35rem] border border-brand-secondary/15 bg-white p-3.5 shadow-lg shadow-brand-primary/5 ${card.className}`}
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-brand-soft text-brand-primary">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="font-heading text-lg font-extrabold leading-tight text-brand-dark">
                      {card.title}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      {card.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="relative z-20 mt-8 rounded-[1.75rem] border border-brand-secondary/15 bg-brand-soft p-5">
        <div className="flex items-start gap-4">
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white text-brand-primary shadow-sm">
            <CheckCircle2 className="h-6 w-6" />
          </div>

          <div>
            <p className="font-heading text-sm font-extrabold text-brand-dark md:text-base">
              Business systems connected to customer channels
            </p>
            <p className="mt-1 text-sm leading-6 text-slate-600">
              Switch acts as the communication layer between the business and
              the customer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
