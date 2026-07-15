import { ArrowRight, Globe2, Mail, Phone, Sparkles } from "lucide-react";
import { ContactItem } from "@/src/components/shared/ContactItem";

export function ContactCTA() {
  return (
    <section id="contact" className="bg-white px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-slate-950 shadow-2xl">
        <div className="grid gap-10 p-8 text-white md:p-14 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-cyan-100">
              <Sparkles className="h-4 w-4" />
              Let’s Build Together
            </div>

            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Ready to build better customer engagement?
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Every great partnership starts with a conversation. Reach out and
              let’s see what we can build together.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="mailto:info@switchipl.com"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-7 py-4 text-sm font-bold text-slate-950 transition hover:bg-cyan-200"
              >
                Start the Conversation
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="tel:+2349139580126"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Call Switch Integrated
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] bg-white/10 p-6">
            <ContactItem icon={Mail} title="Email" value="info@switchipl.com" />
            <ContactItem icon={Phone} title="Phone" value="+234-913-958-0126" />
            <ContactItem
              icon={Globe2}
              title="Office"
              value="42, Ashiek Jarma Street, Jabi, Abuja."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
