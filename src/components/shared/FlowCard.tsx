import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type FlowCardProps = {
  icon: LucideIcon;
  title: string;
  active?: boolean;
};

export function FlowCard({ icon: Icon, title, active = false }: FlowCardProps) {
  return (
    <div
      className={`flex items-center justify-between rounded-3xl border p-5 ${
        active
          ? "border-slate-950 bg-brand-primary text-white"
          : "border-slate-200 bg-slate-50 text-brand-dark"
      }`}
    >
      <div className="flex items-center gap-4">
        <div
          className={`grid h-12 w-12 place-items-center rounded-2xl ${
            active ? "bg-brand-secondary text-brand-dark" : "bg-white text-brand-primary"
          }`}
        >
          <Icon className="h-5 w-5" />
        </div>
        <p className="font-semibold">{title}</p>
      </div>

      <ArrowRight
        className={active ? "h-5 w-5 text-brand-secondary" : "h-5 w-5 text-slate-400"}
      />
    </div>
  );
}
