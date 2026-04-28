"use client";

import { motion } from "framer-motion";
import { Bot, CheckCircle2, Send, UserRound } from "lucide-react";

const messages = [
  { sender: "Customer", text: "Hi, do you offer appointments this week?", type: "customer" },
  { sender: "AI Assistant", text: "Yes. I can help you request an appointment. What service are you interested in?", type: "ai" },
  { sender: "Customer", text: "I need a consultation for home care services.", type: "customer" },
  { sender: "AI Assistant", text: "Great. Please share your name, phone number, and preferred day. A team member will follow up with you.", type: "ai" },
];

export default function ChatDemo() {
  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
      <div className="glass-card glow-border rounded-3xl p-4 sm:p-6">
        <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-cyan-400/15 p-3 text-cyan-300">
              <Bot size={24} aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-bold text-white">Website AI Assistant</h3>
              <p className="text-sm text-slate-400">Responding instantly</p>
            </div>
          </div>
          <div className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-300 ring-1 ring-emerald-300/20">Active</div>
        </div>

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
                transition={{ duration: 0.45, delay: index * 0.15 }}
              >
                {!isAi && (
                  <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-slate-300">
                    <UserRound size={18} aria-hidden="true" />
                  </div>
                )}
                <div className={`max-w-[82%] rounded-3xl px-4 py-3 text-sm leading-6 ${isAi ? "rounded-tr-sm bg-cyan-400 font-medium text-slate-950" : "rounded-tl-sm bg-white/10 text-slate-200"}`}>
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

        <div className="mt-5 flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3">
          <span className="flex-1 text-sm text-slate-500">Type a customer question...</span>
          <button type="button" className="rounded-xl bg-cyan-400 p-2 text-slate-950" aria-label="Send demo message">
            <Send size={17} aria-hidden="true" />
          </button>
        </div>
      </div>

      <motion.div className="glass-card rounded-3xl border border-emerald-300/20 p-6" initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, ease: "easeOut" }}>
        <div className="mb-5 flex items-center gap-3">
          <div className="rounded-2xl bg-emerald-400/15 p-3 text-emerald-300">
            <CheckCircle2 size={26} aria-hidden="true" />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-emerald-300">New Lead Captured</p>
            <h3 className="mt-1 text-2xl font-black text-white">Ready for follow-up</h3>
          </div>
        </div>

        <div className="space-y-3 rounded-3xl bg-slate-950/60 p-4">
          <LeadRow label="Name" value="Maria Johnson" />
          <LeadRow label="Service" value="Home Care Consultation" />
          <LeadRow label="Preferred Day" value="Thursday" />
          <LeadRow label="Status" value="Ready for follow-up" highlight />
        </div>

        <p className="mt-5 text-sm leading-6 text-slate-300">
          This is the difference between a basic website and a sales-focused AI website. The visitor gets help immediately, and the business gets a real lead to follow up with.
        </p>
      </motion.div>
    </div>
  );
}

function LeadRow({ label, value, highlight = false }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
      <span className="text-sm text-slate-400">{label}</span>
      <span className={`text-right text-sm font-bold ${highlight ? "text-emerald-300" : "text-white"}`}>{value}</span>
    </div>
  );
}
