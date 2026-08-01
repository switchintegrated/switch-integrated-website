import {
  ArrowRight,
  BadgeCheck,
  MessageSquareText,
  Network,
  Smartphone,
} from "lucide-react";
import Link from "next/link";

import { solutions as fallbackSolutions } from "@/src/data/site";
import { SectionHeader } from "@/src/components/shared/SectionHeader";

type CmsSolution = {
  title?: string;
  shortDescription?: string;
  longDescription?: string;
  slug?: string;
  order?: number;
};

const iconMap = {
  Messaging: MessageSquareText,
  USSD: Smartphone,
  Infrastructure: Network,
  Partnerships: BadgeCheck,
};

function getSolutionIcon(title: string) {
  if (title.toLowerCase().includes("messaging")) return iconMap.Messaging;
  if (title.toLowerCase().includes("ussd")) return iconMap.USSD;
  if (title.toLowerCase().includes("infrastructure"))
    return iconMap.Infrastructure;
  return iconMap.Partnerships;
}

export function SolutionsSection({
  services,
}: {
  services?: CmsSolution[] | null;
}) {
  const visibleSolutions =
    services && services.length > 0
      ? services.map((service) => ({
          title: service.title || "Untitled Solution",
          description:
            service.shortDescription ||
            service.longDescription ||
            "A Switch Integrated solution designed to support business communication and customer engagement.",
          slug: service.slug,
        }))
      : fallbackSolutions.map((solution) => ({
          title: solution.title,
          description: solution.description,
          slug: undefined,
        }));

  return (
    <section className="relative overflow-hidden bg-[#f4fcfc] px-6 py-16 lg:px-8 lg:py-24">
      <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 rounded-full bg-brand-secondary/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-brand-primary/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow="Our Solutions"
            title="Communication tools designed for growth."
            description="Switch brings together messaging, mobile engagement, digital communication infrastructure, and partnership-led solutions for modern African businesses."
          />

          <Link
            href="/solutions"
            className="group hidden w-fit items-center gap-2 rounded-full border border-brand-secondary/30 bg-white px-6 py-4 text-sm font-bold text-brand-primary shadow-sm transition hover:-translate-y-0.5 hover:border-brand-secondary hover:bg-brand-primary hover:text-white lg:inline-flex"
          >
            View all solutions
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-14 xl:grid-cols-4">
          {visibleSolutions.map((solution, index) => {
            const Icon = getSolutionIcon(solution.title);

            return (
              <article
                key={solution.slug || solution.title}
                className="group relative overflow-hidden rounded-[2rem] border border-brand-secondary/15 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-primary/10"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary opacity-0 transition group-hover:opacity-100" />

                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-secondary/10 transition group-hover:scale-125" />

                <div className="relative">
                  <div className="flex items-center justify-between gap-4">
                    <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-primary text-brand-secondary shadow-lg shadow-brand-primary/15 transition group-hover:bg-brand-secondary group-hover:text-brand-primary">
                      <Icon className="h-6 w-6" />
                    </div>

                    <span className="rounded-full bg-brand-soft px-3 py-1 text-xs font-extrabold text-brand-primary">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-7 font-heading text-xl font-extrabold tracking-[-0.03em] text-brand-dark">
                    {solution.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {solution.description}
                  </p>

                  <div className="mt-7 flex items-center gap-2 text-sm font-extrabold text-brand-primary">
                    <span>Explore solution</span>
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <Link
          href="/solutions"
          className="group mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-brand-secondary/30 bg-white px-6 py-4 text-sm font-bold text-brand-primary shadow-sm transition hover:-translate-y-0.5 hover:border-brand-secondary hover:bg-brand-primary hover:text-white lg:hidden"
        >
          View all solutions
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
