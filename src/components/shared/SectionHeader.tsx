type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  centered?: boolean;
  light?: boolean;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  centered = false,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p
        className={
          light
            ? "text-sm font-extrabold uppercase tracking-[0.25em] text-brand-secondary"
            : "text-sm font-extrabold uppercase tracking-[0.25em] text-brand-secondary"
        }
      >
        {eyebrow}
      </p>

      <h2
        className={
          light
            ? "mt-4 font-heading text-4xl font-extrabold tracking-[-0.04em] text-white md:text-5xl"
            : "mt-4 font-heading text-4xl font-extrabold tracking-[-0.04em] text-brand-dark md:text-5xl"
        }
      >
        {title}
      </h2>

      <p
        className={
          light
            ? "mt-5 text-lg leading-8 text-white/70"
            : "mt-5 text-lg leading-8 text-slate-600"
        }
      >
        {description}
      </p>
    </div>
  );
}
