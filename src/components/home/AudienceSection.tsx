import {
  Building2,
  Landmark,
  Rocket,
  Smartphone,
  UsersRound,
  Zap,
} from "lucide-react";

import { audiences as fallbackAudiences } from "@/src/data/site";
import { Reveal } from "@/src/components/shared/Reveal";

type AudienceCard = {
  title?: string;
  description?: string;
};

type AudienceContent = {
  audienceEyebrow?: string;
  audienceTitle?: string;
  audienceDescription?: string;
  audienceCards?: (string | AudienceCard)[];
  audiences?: (string | AudienceCard)[];
};

const audienceIcons = [Building2, Landmark, Rocket, Smartphone];

const fallbackAudienceCards: AudienceCard[] = fallbackAudiences.map((audience) => ({
  title: audience,
  description: "Reliable communication built for growth",
}));

const fallbackContent = {
  audienceEyebrow: "Who We Serve",
  audienceTitle: "Built for teams that need communication to work at scale.",
  audienceDescription:
    "Switch Integrated supports organisations that depend on reliable customer reach, verification, and mobile-first engagement.",
  audienceCards: fallbackAudienceCards,
};

function normaliseAudienceCards(cards?: (string | AudienceCard)[]) {
  if (!cards || cards.length === 0) return fallbackContent.audienceCards;

  return cards.map((card) => {
    if (typeof card === "string") {
      return {
        title: card,
        description: "Reliable communication built for growth",
      };
    }

    return {
      title: card.title || "",
      description: card.description || "",
    };
  });
}

export function AudienceSection({
  content,
}: {
  content?: AudienceContent | null;
}) {
  const audienceCards = normaliseAudienceCards(
    content?.audienceCards || content?.audiences,
  );

  const audienceContent = {
    ...fallbackContent,
    ...content,
    audienceCards,
  };

  return (
    <section className="relative overflow-hidden bg-white px-6 py-24 lg:px-8">
      <div className="absolute left-0 top-0 h-full w-[48%] bg-gradient-to-br from-brand-soft via-white to-white" />
      <div className="absolute right-[-12%] top-[10%] h-96 w-96 rounded-full bg-brand-secondary/10 blur-3xl" />
      <div className="absolute left-[-10%] bottom-[-12%] h-96 w-96 rounded-full bg-brand-primary/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-brand-secondary">
              {audienceContent.audienceEyebrow}
            </p>

            <h2 className="mt-4 max-w-2xl font-heading text-4xl font-extrabold tracking-[-0.045em] text-brand-dark md:text-6xl">
              {audienceContent.audienceTitle}
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              {audienceContent.audienceDescription}
            </p>
          </div>

          <div className="relative hidden lg:block lg:min-h-[430px]">
            <div className="pointer-events-none absolute inset-x-0 top-0 hidden h-72 overflow-hidden rounded-[2.75rem] border border-brand-secondary/10 bg-gradient-to-br from-brand-soft/70 via-white to-brand-secondary/10 lg:block">
              <div className="absolute left-8 top-8 h-24 w-24 rounded-full bg-brand-secondary/15 blur-2xl" />
              <div className="absolute right-10 top-8 h-52 w-52 opacity-[0.08]">
                <div
                  className="h-full w-full bg-contain bg-center bg-no-repeat"
                  style={{ backgroundImage: "url('/brand/switch-icon-teal.svg')" }}
                />
              </div>
              <div className="absolute bottom-8 left-8 rounded-full border border-brand-secondary/15 bg-white/75 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-brand-primary shadow-sm">
                SMS
              </div>
              <div className="absolute bottom-20 left-28 rounded-full border border-brand-secondary/15 bg-white/75 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-brand-primary shadow-sm">
                OTP
              </div>
              <div className="absolute bottom-8 left-48 rounded-full border border-brand-secondary/15 bg-white/75 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-brand-primary shadow-sm">
                USSD
              </div>
            </div>

            <Reveal delay={120}>
              <div className="relative overflow-hidden rounded-[2rem] border border-brand-secondary/15 bg-[#f8ffff] p-6 shadow-xl shadow-brand-primary/5 lg:mt-44">
                <div className="absolute right-[-4rem] top-[-4rem] h-40 w-40 rounded-full bg-brand-secondary/15 blur-2xl" />

                <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center">
                  <div className="relative grid h-16 w-16 shrink-0 place-items-center rounded-3xl bg-brand-primary text-brand-secondary shadow-lg shadow-brand-primary/15">
                    <span className="absolute inset-0 animate-ping rounded-3xl bg-brand-secondary/20" />
                    <UsersRound className="relative h-7 w-7" />
                  </div>

                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.22em] text-brand-secondary">
                      Communication reach
                    </p>
                    <p className="mt-2 font-heading text-xl font-extrabold tracking-[-0.03em] text-brand-dark">
                      From customer onboarding to everyday engagement
                    </p>
                  </div>
                </div>

                <div className="relative mt-6 grid gap-3 sm:grid-cols-3">
                  {["Reach", "Verify", "Engage"].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-brand-secondary/10 bg-white px-4 py-3 text-center text-sm font-bold text-brand-primary"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-6 right-6 top-8 hidden h-px bg-gradient-to-r from-transparent via-brand-secondary/40 to-transparent lg:block" />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {audienceContent.audienceCards.map((audience, index) => {
              const Icon = audienceIcons[index % audienceIcons.length];

              return (
                <Reveal key={`${audience.title}-${index}`} delay={index * 120}>
                  <article className="group relative h-full overflow-hidden rounded-[2rem] border border-brand-secondary/15 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-primary/10 xl:p-6">
                    <div className="absolute -right-14 -top-14 h-36 w-36 rounded-full bg-brand-secondary/10 transition duration-300 group-hover:scale-125" />

                    <div className="relative">
                      <div className="flex items-center justify-between">
                        <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-soft text-brand-primary transition group-hover:bg-brand-primary group-hover:text-brand-secondary">
                          <Icon className="h-6 w-6" />
                        </div>

                        <span className="rounded-full bg-brand-soft px-3 py-1 text-xs font-black text-brand-primary">
                          0{index + 1}
                        </span>
                      </div>

                      <h3 className="mt-7 font-heading text-lg font-extrabold tracking-[-0.03em] text-brand-dark xl:text-xl">
                        {audience.title}
                      </h3>

                      <div className="mt-7 flex items-start gap-2 text-sm font-bold leading-6 text-brand-secondary">
                        <Zap className="mt-1 h-4 w-4 shrink-0" />
                        <span>{audience.description}</span>
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
