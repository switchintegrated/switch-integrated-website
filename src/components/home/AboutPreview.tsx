export function AboutPreview() {
  return (
    <section id="about" className="bg-[#f7fbfc] py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-700">
            Who We Are
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            A digital solutions partner for businesses building across Africa.
          </h2>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-lg leading-8 text-slate-600">
            At Switch Integrated, we understand that staying connected to your
            customers isn’t just a technical challenge, it’s a business-critical
            one.
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            We help businesses, enterprises, fintechs, and growing organisations
            across Africa communicate reliably, engage meaningfully, and scale
            confidently.
          </p>
        </div>
      </div>
    </section>
  );
}
