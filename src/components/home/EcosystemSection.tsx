import { ecosystemNodes, flowCards } from "@/src/data/site";
import { FlowCard } from "@/src/components/shared/FlowCard";

export function EcosystemSection() {
  return (
    <section className="bg-[#eef8fa] py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-700">
            Built for Africa
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Built for the way Africa communicates.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Africa’s digital economy is mobile-first, fast-moving, and deeply
            relationship-driven. Switch Integrated helps businesses build the
            communication layer they need to reach customers reliably, serve
            them better, and scale across markets.
          </p>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl">
          <div className="grid gap-4">
            {flowCards.map((card) => (
              <FlowCard
                key={card.title}
                icon={card.icon}
                title={card.title}
                active={card.active}
              />
            ))}
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-slate-600 sm:grid-cols-4">
            {ecosystemNodes.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-3 text-center font-medium"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
