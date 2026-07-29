"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

type ContactFormProps = {
  serviceOptions: string[];
  buttonText: string;
  successMessage: string;
};

type FormStatus = "idle" | "loading" | "success" | "error";

export function ContactForm({
  serviceOptions,
  buttonText,
  successMessage,
}: ContactFormProps) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("loading");
    setFeedback("");

    const payload = {
      fullName: String(formData.get("fullName") || ""),
      companyName: String(formData.get("companyName") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      serviceInterest: String(formData.get("serviceInterest") || ""),
      message: String(formData.get("message") || ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        setStatus("error");
        setFeedback(result.message || "Please check the form and try again.");
        return;
      }

      setStatus("success");
      setFeedback(successMessage);
      form.reset();
    } catch {
      setStatus("error");
      setFeedback("Something went wrong. Please try again.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-brand-secondary/15 bg-white p-8 shadow-sm"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <label className="block">
          <span className="text-sm font-semibold text-slate-700">
            Full name
          </span>
          <input
            required
            type="text"
            name="fullName"
            placeholder="Your name"
            className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-secondary focus:ring-4 focus:ring-brand-secondary/10"
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
            className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-secondary focus:ring-4 focus:ring-brand-secondary/10"
          />
        </label>

        <label className="block">
          <span className="text-sm font-semibold text-slate-700">
            Email address
          </span>
          <input
            required
            type="email"
            name="email"
            placeholder="you@company.com"
            className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-secondary focus:ring-4 focus:ring-brand-secondary/10"
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
            className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-secondary focus:ring-4 focus:ring-brand-secondary/10"
          />
        </label>

        <label className="block md:col-span-2">
          <span className="text-sm font-semibold text-slate-700">
            Service interest
          </span>
          <select
            name="serviceInterest"
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-brand-secondary focus:ring-4 focus:ring-brand-secondary/10"
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
          <span className="text-sm font-semibold text-slate-700">Message</span>
          <textarea
            required
            name="message"
            placeholder="Tell us what you’d like to discuss..."
            rows={6}
            className="mt-2 w-full resize-none rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-secondary focus:ring-4 focus:ring-brand-secondary/10"
          />
        </label>
      </div>

      {feedback ? (
        <p
          className={`mt-6 rounded-2xl px-4 py-3 text-sm font-semibold ${
            status === "success"
              ? "bg-green-50 text-green-700"
              : "bg-red-50 text-red-700"
          }`}
        >
          {feedback}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-primary px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? "Sending..." : buttonText}
        <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
}
