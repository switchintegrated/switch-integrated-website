import Image from "next/image";
import { CheckCircle2, ShieldCheck, Sparkles, TrendingUp } from "lucide-react";

import { reasons as fallbackReasons } from "@/src/data/site";
import { SectionHeader } from "@/src/components/shared/SectionHeader";
import { Reveal } from "@/src/components/shared/Reveal";

type WhySwitchContent = {
  heroEyebrow?: string;
  heroHeadline?: string;
  heroSubheadline?: string;
  reasons?: {
    title?: string;
    description?: string;
  }[];
};

const iconList = [ShieldCheck, TrendingUp, Sparkles, CheckCircle2];

const fallbackContent: Required<Omit<WhySwitchContent, "reasons">> & {
  reasons: {
    title: string;
    description: string;
  }[];
} = {
  heroEyebrow: "Why Switch",
  heroHeadline: "A partner built for trust, scale, and business growth.",
  heroSubheadline:
    "Switch Integrated combines reliable communication infrastructure with strategic support, helping businesses connect with customers more clearly and confidently.",
  reasons: fallbackReasons,
};

export function WhySwitchSection({
  content,
}: {
  content?: WhySwitchContent | null;
}) {
  const whySwitch = {
    ...fallbackContent,
    ...content,
    reasons:
      content?.reasons && content.reasons.length > 0
        ? content.reasons
        : fallbackContent.reasons,
  };

  return (
    <section className="relative overflow-hidden bg-white px-6 pt-10 pb-16 lg:px-8 lg:pt-14 lg:pb-24">
      <div className="absolute left-[-10%] top-[10%] h-96 w-96 rounded-full bg-brand-secondary/10 blur-3xl" />
      <div className="absolute right-[-12%] bottom-[-10%] h-96 w-96 rounded-full bg-brand-primary/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <SectionHeader
              eyebrow={whySwitch.heroEyebrow}
              title={whySwitch.heroHeadline}
              description={whySwitch.heroSubheadline}
            />

            <div className="mt-8 overflow-hidden rounded-[2rem] bg-brand-primary p-6 text-white shadow-2xl shadow-brand-primary/20">
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

            <div className="mt-5 hidden overflow-hidden rounded-[2rem] border border-brand-secondary/15 bg-brand-soft/80 p-6 shadow-sm lg:block">
              <div className="relative min-h-44">
                <Image
                  src="/brand/switch-icon-teal.svg"
                  alt=""
                  width={180}
                  height={180}
                  className="absolute -right-6 -top-8 h-40 w-40 opacity-20"
                />

                <div className="relative">
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-brand-secondary">
                    Switch advantage
                  </p>

                  <p className="mt-4 max-w-xs font-heading text-2xl font-extrabold tracking-[-0.04em] text-brand-dark">
                    Trust, scale, clarity, and partnership.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {whySwitch.reasons.map((reason, index) => {
              const Icon = iconList[index % iconList.length];
              const isLast = index === whySwitch.reasons.length - 1;

              return (
                <Reveal
                  key={reason.title}
                  delay={index * 130}
                  className={isLast ? "sm:col-span-2" : "h-full"}
                >
                  <article
                    className={`group relative h-full overflow-hidden rounded-[2rem] border border-brand-secondary/15 bg-[#f8ffff] p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-2xl hover:shadow-brand-primary/10 ${
                      isLast ? "lg:min-h-0" : "lg:min-h-[330px]"
                    }`}
                  >
                    <div className="absolute -right-14 -top-14 h-36 w-36 rounded-full bg-brand-secondary/10 transition duration-300 group-hover:scale-125" />

                    <div
                      className={`relative flex h-full flex-col ${
                        isLast ? "lg:grid lg:grid-cols-[0.45fr_1fr] lg:gap-8" : ""
                      }`}
                    >
                      <div>
                        <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-primary text-brand-secondary shadow-lg shadow-brand-primary/15 transition group-hover:bg-brand-secondary group-hover:text-brand-primary">
                          <Icon className="h-6 w-6" />
                        </div>

                        <h3 className="mt-7 font-heading text-xl font-extrabold tracking-[-0.03em] text-brand-dark">
                          {reason.title}
                        </h3>
                      </div>

                      <div className="flex flex-1 flex-col">
                        <p className="mt-4 text-sm leading-7 text-slate-600 lg:text-[0.95rem]">
                          {reason.description}
                        </p>

                        <div className="mt-auto pt-7">
                          <div className="h-px w-full bg-gradient-to-r from-brand-secondary/60 to-transparent" />

                          <p className="mt-5 text-xs font-extrabold uppercase tracking-[0.18em] text-brand-secondary">
                            Switch advantage
                          </p>
                        </div>
                      </div>
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
