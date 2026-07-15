import type { LucideIcon } from "lucide-react";

type ContactItemProps = {
  icon: LucideIcon;
  title: string;
  value: string;
};

export function ContactItem({ icon: Icon, title, value }: ContactItemProps) {
  return (
    <div className="border-b border-white/10 py-5 last:border-b-0">
      <div className="flex gap-4">
        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white/10 text-cyan-300">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <p className="text-sm text-slate-400">{title}</p>
          <p className="mt-1 font-medium text-white">{value}</p>
        </div>
      </div>
    </div>
  );
}
