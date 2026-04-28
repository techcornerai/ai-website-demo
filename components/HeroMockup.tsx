"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Bell,
  Bot,
  CalendarCheck,
  CheckCircle2,
  Clock3,
  MessageCircle,
  MousePointerClick,
  TrendingUp,
  UserRoundCheck,
  Zap,
} from "lucide-react";

const weeklyData = [42, 58, 39, 71, 64, 88, 96, 73, 102, 84];

export default function HeroMockup() {
  return (
    <motion.div
      className="relative mx-auto w-full max-w-xl"
      initial={{ opacity: 0, scale: 0.96, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
    >
      <div className="absolute -left-10 -top-10 h-48 w-48 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute -bottom-10 -right-10 h-56 w-56 rounded-full bg-blue-600/25 blur-3xl" />
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/10 blur-3xl" />

      <div className="glass-card glow-border relative overflow-hidden rounded-3xl p-4 sm:p-5">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />

        <div className="mb-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-300 ring-1 ring-cyan-300/30">
              <Zap size={20} aria-hidden="true" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">AI Website Control Center</p>
              <p className="mt-1 font-semibold text-white">Local Service Business</p>
            </div>
          </div>
          <div className="hidden items-center gap-2 rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-300 ring-1 ring-emerald-300/20 sm:flex">
            <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.9)]" />
            Live
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <StatCard icon={<MessageCircle size={18} />} label="AI Chats" value="128" detail="+24 this week" />
          <StatCard icon={<UserRoundCheck size={18} />} label="New Leads" value="34" detail="Ready to call" />
          <StatCard icon={<CalendarCheck size={18} />} label="Requests" value="19" detail="Appointments" />
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-4">
            <div className="mb-4 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <div className="rounded-2xl bg-cyan-400/15 p-2 text-cyan-300">
                  <Bot size={20} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">AI Assistant</p>
                  <p className="text-xs text-slate-400">Capturing a customer lead</p>
                </div>
              </div>
              <div className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-bold text-cyan-300 ring-1 ring-cyan-300/20">24/7</div>
            </div>

            <div className="space-y-3">
              <ChatBubble align="left">Hi, do you have openings this week?</ChatBubble>
              <ChatBubble align="right">Yes. What service are you interested in?</ChatBubble>
              <ChatBubble align="left">I need a consultation.</ChatBubble>
              <div className="rounded-2xl border border-emerald-300/20 bg-emerald-400/10 px-4 py-3">
                <div className="flex items-center gap-2 text-sm font-bold text-emerald-300">
                  <CheckCircle2 size={17} aria-hidden="true" />
                  Lead details collected
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <motion.div className="rounded-3xl border border-cyan-300/25 bg-cyan-300/10 p-4" initial={{ opacity: 0, x: 22 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.65, delay: 0.45 }}>
              <div className="flex items-start gap-3">
                <div className="rounded-2xl bg-cyan-400/15 p-2 text-cyan-300">
                  <Bell size={19} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">New lead captured</p>
                  <p className="mt-1 text-xs leading-5 text-slate-300">Maria Johnson requested a home care consultation.</p>
                </div>
              </div>
            </motion.div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-4">
              <div className="mb-3 flex items-center gap-2 text-sm font-bold text-white">
                <CalendarCheck size={18} className="text-cyan-300" aria-hidden="true" />
                Appointment Request
              </div>
              <div className="space-y-2 text-sm text-slate-300">
                <DetailRow label="Service" value="Consultation" />
                <DetailRow label="Preferred Day" value="Thursday" />
                <DetailRow label="Status" value="Ready" positive />
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-4">
              <div className="mb-3 flex items-center gap-2 text-sm font-bold text-white">
                <Clock3 size={18} className="text-cyan-300" aria-hidden="true" />
                Response Time
              </div>
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-3xl font-black text-white">Instant</p>
                  <p className="mt-1 text-xs text-slate-400">Even after hours</p>
                </div>
                <div className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-300 ring-1 ring-emerald-300/20">Online</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-3xl border border-white/10 bg-white/[0.04] p-4">
          <div className="mb-4 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm font-bold text-white">
              <Activity size={18} className="text-cyan-300" aria-hidden="true" />
              Lead Activity
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-300">
              <TrendingUp size={15} aria-hidden="true" />
              +31%
            </div>
          </div>

          <div className="h-24 overflow-hidden rounded-2xl bg-slate-950/70 p-3">
            <div className="flex h-full items-end gap-2">
              {weeklyData.map((height, index) => (
                <motion.div
                  key={index}
                  className="flex-1 rounded-t-lg bg-gradient-to-t from-blue-600 to-cyan-300"
                  style={{ height: `${height}%` }}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${height}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.04 }}
                />
              ))}
            </div>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <MiniMetric icon={<MousePointerClick size={16} />} label="Visitors" value="812" />
            <MiniMetric icon={<MessageCircle size={16} />} label="Chats" value="128" />
            <MiniMetric icon={<UserRoundCheck size={16} />} label="Leads" value="34" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function StatCard({ icon, label, value, detail }: { icon: React.ReactNode; label: string; value: string; detail: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-4">
      <div className="mb-3 text-cyan-300">{icon}</div>
      <p className="text-2xl font-black text-white">{value}</p>
      <p className="mt-1 text-xs text-slate-400">{label}</p>
      <p className="mt-2 text-[11px] font-semibold text-cyan-300">{detail}</p>
    </div>
  );
}

function ChatBubble({ children, align }: { children: React.ReactNode; align: "left" | "right" }) {
  const isRight = align === "right";
  return (
    <div className={`max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-6 ${isRight ? "ml-auto rounded-tr-sm bg-cyan-400 font-semibold text-slate-950" : "rounded-tl-sm bg-white/10 text-slate-200"}`}>
      {children}
    </div>
  );
}

function DetailRow({ label, value, positive = false }: { label: string; value: string; positive?: boolean }) {
  return (
    <p className="flex justify-between gap-4">
      <span>{label}</span>
      <span className={`font-medium ${positive ? "text-emerald-300" : "text-white"}`}>{value}</span>
    </p>
  );
}

function MiniMetric({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-3">
      <div className="mb-2 text-cyan-300">{icon}</div>
      <p className="text-lg font-black text-white">{value}</p>
      <p className="text-[11px] text-slate-400">{label}</p>
    </div>
  );
}
