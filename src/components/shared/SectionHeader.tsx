type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  centered?: boolean;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionHeaderProps) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-700">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-lg leading-8 text-slate-600">{description}</p>
    </div>
  );
}
