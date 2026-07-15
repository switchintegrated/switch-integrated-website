import { Footer } from "@/src/components/layout/Footer";
import { Header } from "@/src/components/layout/Header";
import { ContactItem } from "@/src/components/shared/ContactItem";
import {
  ArrowRight,
  Building2,
  Globe2,
  Mail,
  MessageSquareText,
  Phone,
} from "lucide-react";

const serviceOptions = [
  "Messaging & Verification",
  "USSD & Mobile Engagement",
  "Digital Communication Infrastructure",
  "Strategic Partnerships & Custom Solutions",
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f7fbfc] text-slate-950">
      <Header />

      <section className="bg-white px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-700">
            Contact Us
          </p>
          <h1 className="mt-5 text-5xl font-semibold tracking-tight md:text-6xl">
            We’re ready when you are.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Every great partnership starts with a conversation. Whether you have
            a specific brief in mind or you’re still exploring what’s possible,
            our team is ready to listen, advise, and help you find the right
            path forward.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
              Reach Out
            </p>
            <h2 className="mt-5 text-3xl font-semibold">
              Let’s see what we can build together.
            </h2>
            <p className="mt-4 leading-7 text-slate-300">
              Use the form or contact Switch Integrated directly through any of
              the details below.
            </p>

            <div className="mt-8 rounded-[2rem] bg-white/10 p-6">
              <ContactItem
                icon={Mail}
                title="Email"
                value="info@switchipl.com"
              />
              <ContactItem
                icon={Phone}
                title="Phone"
                value="+234-913-958-0126"
              />
              <ContactItem
                icon={Building2}
                title="Office"
                value="42, Ashiek Jarma Street, Jabi, Abuja."
              />
              <ContactItem
                icon={Globe2}
                title="LinkedIn"
                value="linkedin.com/company/switch-integrated"
              />
            </div>
          </div>

          <form className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="block">
                <span className="text-sm font-semibold text-slate-700">
                  Full name
                </span>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Your name"
                  className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-cyan-600"
                />
              </label>

              <label className="block">
                <span className="text-sm font-semibold text-slate-700">
                  Company name
                </span>
                <input
                  type="text"
                  name="companyName"
                  placeholder="Your company"
                  className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-cyan-600"
                />
              </label>

              <label className="block">
                <span className="text-sm font-semibold text-slate-700">
                  Email address
                </span>
                <input
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-cyan-600"
                />
              </label>

              <label className="block">
                <span className="text-sm font-semibold text-slate-700">
                  Phone number
                </span>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+234..."
                  className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-cyan-600"
                />
              </label>

              <label className="block md:col-span-2">
                <span className="text-sm font-semibold text-slate-700">
                  Service interest
                </span>
                <select
                  name="serviceInterest"
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-cyan-600"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  {serviceOptions.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block md:col-span-2">
                <span className="text-sm font-semibold text-slate-700">
                  Message
                </span>
                <textarea
                  name="message"
                  placeholder="Tell us what you’d like to discuss..."
                  rows={6}
                  className="mt-2 w-full resize-none rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-cyan-600"
                />
              </label>
            </div>

            <button
              type="submit"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-950 px-7 py-4 text-sm font-bold text-white transition hover:bg-cyan-700"
            >
              Start the Conversation
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
