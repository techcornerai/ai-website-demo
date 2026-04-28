"use client";

import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Loader2,
  Lock,
  Mail,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

type FormState = {
  name: string;
  businessName: string;
  email: string;
  phone: string;
  website: string;
  message: string;
};

const initialFormState: FormState = {
  name: "",
  businessName: "",
  email: "",
  phone: "",
  website: "",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  function updateField(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSubmitting(true);
    setStatusMessage("");
    setIsSuccess(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Something went wrong.");
      }

      setIsSuccess(true);
      setStatusMessage(result.message || "Your request was sent successfully.");
      setFormData(initialFormState);
    } catch (error) {
      setIsSuccess(false);
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="glass-card glow-border rounded-3xl p-5 sm:p-6">
      <div className="mb-6 rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-5">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-slate-950/70 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-cyan-300 ring-1 ring-cyan-300/20">
          <Sparkles size={14} aria-hidden="true" />
          Free Website Review
        </div>

        <h3 className="text-2xl font-black tracking-tight text-white">
          Get 3 practical ways to improve your website.
        </h3>

        <p className="mt-3 text-sm leading-7 text-slate-300">
          Send your current website and business details. We’ll look for missed
          lead opportunities, weak calls-to-action, and places where an AI
          assistant could help customers take action faster.
        </p>

        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          <MiniTrustItem icon={ShieldCheck} text="No pressure" />
          <MiniTrustItem icon={Lock} text="Private review" />
          <MiniTrustItem icon={CheckCircle2} text="Actionable tips" />
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid gap-5 sm:grid-cols-2">
          <FormField
            label="Name"
            id="name"
            name="name"
            value={formData.name}
            placeholder="Your name"
            onChange={updateField}
            required
          />

          <FormField
            label="Business name"
            id="businessName"
            name="businessName"
            value={formData.businessName}
            placeholder="Your business"
            onChange={updateField}
            required
          />

          <FormField
            label="Email"
            id="email"
            name="email"
            type="email"
            value={formData.email}
            placeholder="you@example.com"
            onChange={updateField}
            required
          />

          <FormField
            label="Phone"
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            placeholder="(555) 123-4567"
            onChange={updateField}
            required
          />
        </div>

        <div className="mt-5">
          <FormField
            label="Website URL"
            id="website"
            name="website"
            type="url"
            value={formData.website}
            placeholder="https://yourwebsite.com"
            onChange={updateField}
          />
        </div>

        <div className="mt-5">
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-semibold text-white"
          >
            Message
          </label>

          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={updateField}
            required
            placeholder="Tell us what kind of business you have and what you want your website to do better."
            className="w-full resize-none rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white placeholder:text-slate-500 transition focus:border-cyan-300"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-4 text-sm font-black text-slate-950 shadow-xl shadow-cyan-500/20 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? (
            <>
              <Loader2 size={18} className="animate-spin" aria-hidden="true" />
              Sending Request...
            </>
          ) : (
            <>
              Request My Free Review
              <ArrowRight size={18} aria-hidden="true" />
            </>
          )}
        </button>

        {statusMessage && (
          <p
            className={`mt-4 rounded-2xl border px-4 py-3 text-center text-sm font-medium ${
              isSuccess
                ? "border-emerald-300/30 bg-emerald-400/10 text-emerald-300"
                : "border-red-300/30 bg-red-400/10 text-red-300"
            }`}
          >
            {statusMessage}
          </p>
        )}

        <div className="mt-5 grid gap-3 border-t border-white/10 pt-5 sm:grid-cols-2">
          <ContactDetail
            icon={Mail}
            label="Email"
            value="info@techcorner.ai"
          />
          <ContactDetail
            icon={Phone}
            label="Response"
            value="Review request received by The Techcorner AI"
          />
        </div>

        <p className="mt-5 text-center text-xs leading-5 text-slate-500">
          Your message is sent directly to info@techcorner.ai using a secure
          server-side email route. No email password is exposed in the browser.
        </p>
      </form>
    </div>
  );
}

function FormField({
  label,
  id,
  name,
  placeholder,
  value,
  onChange,
  type = "text",
  required = false,
}: {
  label: string;
  id: string;
  name: keyof FormState;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-white">
        {label}
      </label>

      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white placeholder:text-slate-500 transition focus:border-cyan-300"
      />
    </div>
  );
}

function MiniTrustItem({
  icon: Icon,
  text,
}: {
  icon: React.ElementType;
  text: string;
}) {
  return (
    <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-slate-950/50 px-3 py-3 text-xs font-bold text-slate-200">
      <Icon size={16} className="shrink-0 text-cyan-300" aria-hidden="true" />
      {text}
    </div>
  );
}

function ContactDetail({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
      <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-cyan-300">
        <Icon size={15} aria-hidden="true" />
        {label}
      </div>

      <p className="text-sm leading-6 text-slate-300">{value}</p>
    </div>
  );
}