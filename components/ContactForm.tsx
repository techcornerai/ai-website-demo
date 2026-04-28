"use client";

import { Loader2 } from "lucide-react";
import { useState } from "react";

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

  function updateField(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatusMessage("");
    setIsSuccess(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.message || "Something went wrong.");

      setIsSuccess(true);
      setStatusMessage(result.message || "Your request was sent successfully.");
      setFormData(initialFormState);
    } catch (error) {
      setIsSuccess(false);
      setStatusMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="glass-card rounded-3xl p-5 sm:p-6" onSubmit={handleSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Name" id="name" name="name" value={formData.name} placeholder="Your name" onChange={updateField} required />
        <FormField label="Business name" id="businessName" name="businessName" value={formData.businessName} placeholder="Your business" onChange={updateField} required />
        <FormField label="Email" id="email" name="email" type="email" value={formData.email} placeholder="you@example.com" onChange={updateField} required />
        <FormField label="Phone" id="phone" name="phone" type="tel" value={formData.phone} placeholder="(555) 123-4567" onChange={updateField} required />
      </div>

      <div className="mt-5">
        <FormField label="Website URL" id="website" name="website" type="url" value={formData.website} placeholder="https://yourwebsite.com" onChange={updateField} />
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="mb-2 block text-sm font-semibold text-white">Message</label>
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

      <button type="submit" disabled={isSubmitting} className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-4 text-sm font-black text-slate-950 shadow-xl shadow-cyan-500/20 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-70">
        {isSubmitting && <Loader2 size={18} className="animate-spin" aria-hidden="true" />}
        {isSubmitting ? "Sending Request..." : "Request My Free Review"}
      </button>

      {statusMessage && (
        <p className={`mt-4 rounded-2xl border px-4 py-3 text-center text-sm font-medium ${isSuccess ? "border-emerald-300/30 bg-emerald-400/10 text-emerald-300" : "border-red-300/30 bg-red-400/10 text-red-300"}`}>
          {statusMessage}
        </p>
      )}

      <p className="mt-4 text-center text-xs leading-5 text-slate-500">Your message will be sent directly to info@techcorner.ai.</p>
    </form>
  );
}

function FormField({ label, id, name, placeholder, value, onChange, type = "text", required = false }: { label: string; id: string; name: keyof FormState; placeholder: string; value: string; onChange: (event: React.ChangeEvent<HTMLInputElement>) => void; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-white">{label}</label>
      <input id={id} name={name} type={type} value={value} onChange={onChange} required={required} placeholder={placeholder} className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white placeholder:text-slate-500 transition focus:border-cyan-300" />
    </div>
  );
}
