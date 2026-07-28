import { CommunicationOrbit } from "./CommunicationOrbit";

type EcosystemContent = {
  ecosystemEyebrow?: string;
  ecosystemTitle?: string;
  ecosystemDescription?: string;
  ecosystemItems?: string[];
};

const fallbackContent = {
  ecosystemEyebrow: "Built for Africa",
  ecosystemTitle: "One communication layer connecting businesses to customers.",
  ecosystemDescription:
    "Africa’s digital economy is mobile-first, fast-moving, and deeply relationship-driven. Switch Integrated sits between businesses and their customers, helping teams connect, verify, engage, and scale through the channels people already use.",
  ecosystemItems: [
    "Business messaging",
    "Customer verification",
    "Mobile engagement",
    "Infrastructure support",
  ],
};

export function EcosystemSection({
  content,
}: {
  content?: EcosystemContent | null;
}) {
  const ecosystem = {
    ...fallbackContent,
    ...content,
    ecosystemItems:
      content?.ecosystemItems && content.ecosystemItems.length > 0
        ? content.ecosystemItems
        : fallbackContent.ecosystemItems,
  };

  return (
    <section className="bg-[#eef8fa] py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-brand-primary">
            {ecosystem.ecosystemEyebrow}
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            {ecosystem.ecosystemTitle}
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            {ecosystem.ecosystemDescription}
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {ecosystem.ecosystemItems.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-brand-secondary/15 bg-white/70 px-4 py-3 text-sm font-bold text-slate-700"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <CommunicationOrbit />
      </div>
    </section>
  );
}
