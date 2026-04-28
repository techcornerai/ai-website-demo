"use client";

import { motion } from "framer-motion";
import {
  Bot,
  CalendarCheck,
  CheckCircle2,
  Clock3,
  Mail,
  Phone,
  Send,
  Sparkles,
  UserRound,
  UserRoundCheck,
} from "lucide-react";

const messages = [
  {
    sender: "Customer",
    text: "Hi, do you offer appointments this week?",
    type: "customer",
  },
  {
    sender: "AI Assistant",
    text: "Yes. I can help you request an appointment. What service are you interested in?",
    type: "ai",
  },
  {
    sender: "Customer",
    text: "I need a consultation for home care services.",
    type: "customer",
  },
  {
    sender: "AI Assistant",
    text: "Great. Please share your name, phone number, and preferred day. A team member will follow up with you.",
    type: "ai",
  },
];

const leadDetails = [
  {
    label: "Name",
    value: "Maria Johnson",
    icon: UserRoundCheck,
  },
  {
    label: "Service",
    value: "Home Care Consultation",
    icon: CalendarCheck,
  },
  {
    label: "Preferred Day",
    value: "Thursday",
    icon: Clock3,
  },
  {
    label: "Email",
    value: "maria@example.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "(555) 234-8891",
    icon: Phone,
  },
];

export default function ChatDemo() {
  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
      <div className="glass-card glow-border overflow-hidden rounded-3xl">
        <div className="border-b border-white/10 bg-white/[0.04] p-5 sm:p-6">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-300 ring-1 ring-cyan-300/30">
                <Bot size={24} aria-hidden="true" />
              </div>

              <div>
                <div className="mb-1 inline-flex items-center gap-2 rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-cyan-300 ring-1 ring-cyan-300/20">
                  <Sparkles size={13} aria-hidden="true" />
                  Live Website Assistant
                </div>

                <h3 className="text-xl font-black text-white">
                  Customer conversation preview
                </h3>
              </div>
            </div>

            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-300 ring-1 ring-emerald-300/20">
              <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.9)]" />
              Online now
            </div>
          </div>
        </div>

        <div className="p-5 sm:p-6">
          <div className="space-y-4">
            {messages.map((message, index) => {
              const isAi = message.type === "ai";

              return (
                <motion.div
                  key={`${message.sender}-${index}`}
                  className={`flex gap-3 ${isAi ? "justify-end" : "justify-start"}`}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.12 }}
                >
                  {!isAi && (
                    <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-slate-300">
                      <UserRound size={18} aria-hidden="true" />
                    </div>
                  )}

                  <div
                    className={`max-w-[82%] rounded-3xl px-4 py-3 text-sm leading-6 ${
                      isAi
                        ? "rounded-tr-sm bg-cyan-400 font-semibold text-slate-950"
                        : "rounded-tl-sm bg-white/10 text-slate-200"
                    }`}
                  >
                    <p>{message.text}</p>
                  </div>

                  {isAi && (
                    <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan-400/15 text-cyan-300">
                      <Bot size={18} aria-hidden="true" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          <div className="mt-6 rounded-3xl border border-emerald-300/20 bg-emerald-400/10 p-4">
            <div className="flex items-start gap-3">
              <CheckCircle2
                className="mt-1 shrink-0 text-emerald-300"
                size={22}
                aria-hidden="true"
              />

              <div>
                <p className="font-black text-white">Lead captured automatically</p>
                <p className="mt-1 text-sm leading-6 text-slate-300">
                  The customer received an instant response, and the business
                  received the information needed to follow up.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-5 flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3">
            <span className="flex-1 text-sm text-slate-500">
              Ask about services, pricing, or appointments...
            </span>

            <button
              type="button"
              className="rounded-xl bg-cyan-400 p-2 text-slate-950 transition hover:bg-cyan-300"
              aria-label="Send demo message"
            >
              <Send size={17} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      <motion.div
        className="glass-card rounded-3xl border border-emerald-300/20 p-5 sm:p-6"
        initial={{ opacity: 0, x: 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, ease: "easeOut" }}
      >
        <div className="mb-6 rounded-3xl border border-emerald-300/20 bg-emerald-400/10 p-5">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400/15 text-emerald-300 ring-1 ring-emerald-300/20">
            <CheckCircle2 size={26} aria-hidden="true" />
          </div>

          <p className="text-sm uppercase tracking-[0.25em] text-emerald-300">
            New Lead Captured
          </p>

          <h3 className="mt-2 text-3xl font-black tracking-tight text-white">
            Ready for follow-up
          </h3>

          <p className="mt-3 text-sm leading-7 text-slate-300">
            Instead of losing the visitor, the website collected clear lead
            details and created a next step for the business.
          </p>
        </div>

        <div className="space-y-3">
          {leadDetails.map((detail) => (
            <LeadRow
              key={detail.label}
              label={detail.label}
              value={detail.value}
              icon={detail.icon}
            />
          ))}

          <div className="flex items-center justify-between gap-4 rounded-2xl border border-emerald-300/20 bg-emerald-400/10 px-4 py-3">
            <span className="text-sm text-slate-300">Status</span>
            <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-emerald-300">
              Ready
            </span>
          </div>
        </div>

        <div className="mt-6 rounded-3xl border border-white/10 bg-white/[0.04] p-5">
          <h4 className="text-lg font-black text-white">
            What the business owner gets
          </h4>

          <div className="mt-4 space-y-3">
            <OutcomePoint text="A real name and contact information" />
            <OutcomePoint text="The service the visitor is interested in" />
            <OutcomePoint text="A reason to follow up quickly" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function LeadRow({
  label,
  value,
  icon: Icon,
}: {
  label: string;
  value: string;
  icon: React.ElementType;
}) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400/15 text-cyan-300">
          <Icon size={17} aria-hidden="true" />
        </div>

        <span className="text-sm text-slate-400">{label}</span>
      </div>

      <span className="text-right text-sm font-bold text-white">{value}</span>
    </div>
  );
}

function OutcomePoint({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3 text-sm leading-6 text-slate-300">
      <CheckCircle2
        size={18}
        className="mt-0.5 shrink-0 text-cyan-300"
        aria-hidden="true"
      />
      <span>{text}</span>
    </div>
  );
}