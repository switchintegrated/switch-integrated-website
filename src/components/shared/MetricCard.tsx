import type { LucideIcon } from "lucide-react";

type MetricCardProps = {
  icon: LucideIcon;
  label: string;
  value: string;
};

export function MetricCard({ icon: Icon, label, value }: MetricCardProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
      <Icon className="h-5 w-5 text-cyan-300" />
      <p className="mt-4 text-sm text-slate-400">{label}</p>
      <p className="mt-1 text-2xl font-bold text-white">{value}</p>
    </div>
  );
}
