"use client";

import AnimatedSection from "@/components/AnimatedSection";
import ChatDemo from "@/components/ChatDemo";
import ContactForm from "@/components/ContactForm";
import HeroMockup from "@/components/HeroMockup";
import Navbar from "@/components/Navbar";
import {
  ArrowRight,
  Bot,
  CalendarCheck,
  Check,
  CheckCircle2,
  Clock3,
  FileText,
  Globe2,
  HelpCircle,
  MapPin,
  MessageSquareText,
  PhoneCall,
  Search,
  ShieldCheck,
  Sparkles,
  Smartphone,
  Store,
  TrendingUp,
  UsersRound,
  WalletCards,
  Wrench,
} from "lucide-react";
import { motion } from "framer-motion";

const problemCards = [
  {
    title: "Missed after-hours visitors",
    description:
      "People visit your website at night, during lunch breaks, or on weekends. If nobody responds, many of them move on.",
    icon: Clock3,
  },
  {
    title: "No clear lead capture",
    description:
      "A phone number and basic contact form are not enough when customers want quick answers before they commit.",
    icon: PhoneCall,
  },
  {
    title: "Outdated website experience",
    description:
      "An old website can make a good business look behind. Modern customers expect fast, clear, mobile-friendly experiences.",
    icon: Globe2,
  },
];

const solutionFeatures = [
  { title: "AI assistant answers common questions", icon: Bot },
  { title: "Captures name, phone, email, and service need", icon: UsersRound },
  { title: "Helps request appointments", icon: CalendarCheck },
  { title: "Works beautifully on mobile", icon: Smartphone },
  { title: "Builds trust with modern design", icon: ShieldCheck },
  { title: "Supports basic SEO visibility", icon: Search },
];

const aiCapabilities = [
  {
    title: "Service questions",
    description: "Answers what services the business offers and helps visitors find the right next step.",
    icon: HelpCircle,
  },
  {
    title: "Pricing guidance",
    description: "Explains starting prices, package ranges, or tells the visitor when a quote is needed.",
    icon: WalletCards,
  },
  {
    title: "Appointment requests",
    description: "Collects preferred day, time, service type, and contact information for follow-up.",
    icon: CalendarCheck,
  },
  {
    title: "Location and hours",
    description: "Shares service areas, business hours, emergency availability, and basic directions.",
    icon: MapPin,
  },
  {
    title: "Lead qualification",
    description: "Asks simple questions to understand what the customer needs before your team calls.",
    icon: UsersRound,
  },
  {
    title: "Policy information",
    description: "Explains common policies like deposits, cancellations, consultations, or service limits.",
    icon: FileText,
  },
];

const benefits = [
  "More leads from existing traffic",
  "Better first impression",
  "Faster customer response",
  "Less missed opportunity",
  "More trust and professionalism",
  "A website that supports your sales process",
];

const industries = [
  "Home Care Agencies",
  "Cleaning Companies",
  "Barbershops & Salons",
  "Restaurants & Food Trucks",
  "Contractors",
  "Med Spas",
  "Mobile Mechanics",
  "Professional Services",
];

const starterIncludes = [
  "Modern 1-page website",
  "Mobile-friendly design",
  "Contact form",
  "Basic SEO setup",
  "AI chatbot setup",
  "Lead capture",
  "Appointment request flow",
  "Domain/deployment guidance",
];

const careIncludes = [
  "Website updates",
  "Chatbot updates",
  "Basic security checks",
  "Monthly performance review",
  "Small content changes",
  "Hosting/deployment support",
];

const processSteps = [
  "Free website review",
  "We design your AI-powered website",
  "We set up lead capture and chatbot flow",
  "You launch and start capturing leads",
];

export default function LandingPage() {
  return (
    <main id="top" className="min-h-screen overflow-hidden bg-grid text-white">
      <Navbar />

      <section className="relative px-5 pb-20 pt-32 sm:pt-36 lg:px-8 lg:pb-28">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
        </div>

        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_0.92fr] lg:items-center">
          <div>
            <motion.div
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-200"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              <Sparkles size={16} aria-hidden="true" />
              Your website should work even when you are sleeping.
            </motion.div>

            <motion.h1
              className="max-w-4xl text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08 }}
            >
              Turn Website Visitors Into{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-white bg-clip-text text-transparent">
                Real Customers
              </span>
            </motion.h1>

            <motion.p
              className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.16 }}
            >
              We build modern AI-powered websites that answer questions, capture leads, and help small businesses book more appointments.
            </motion.p>

            <motion.div
              className="mt-9 flex flex-col gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.24 }}
            >
              <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-7 py-4 text-sm font-black text-slate-950 shadow-xl shadow-cyan-500/20 transition hover:bg-cyan-300">
                Get a Free Website Review
                <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a href="#demo" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm font-bold text-white transition hover:border-cyan-300/40 hover:bg-white/10">
                See the AI Demo
              </a>
            </motion.div>

            <motion.div
              className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-3"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.32 }}
            >
              <TrustPoint text="Lead capture focused" />
              <TrustPoint text="Mobile-first design" />
              <TrustPoint text="AI assistant ready" />
            </motion.div>
          </div>

          <HeroMockup />
        </div>
      </section>

      <AnimatedSection id="problem" className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="The Problem"
            title="Most Small Business Websites Lose Leads"
            description="Many customers visit a website after hours. If they cannot get answers quickly, they leave. A basic website only displays information, but an AI-powered website can start the conversation and collect the lead."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {problemCards.map((card) => <InfoCard key={card.title} icon={card.icon} title={card.title} description={card.description} />)}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="solution" className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="The Solution"
            title="A Website That Works Like a 24/7 Assistant"
            description="The Techcorner AI builds websites that do more than look good. They guide the visitor, answer key questions, and create a clear path toward becoming a customer."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {solutionFeatures.map((feature) => <FeatureCard key={feature.title} icon={feature.icon} title={feature.title} />)}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="demo" className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="AI Demo"
            title="See How the AI Assistant Captures a Lead"
            description="This is the experience small businesses need: fast answers for the customer and organized lead details for the owner."
          />
          <div className="mt-12"><ChatDemo /></div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-stretch">
            <div className="rounded-3xl border border-red-300/20 bg-red-400/5 p-6 sm:p-8">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-red-300">Before</p>
              <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">A Basic Website That Only Displays Information</h2>
              <p className="mt-5 text-base leading-8 text-slate-300">
                Most small business websites are passive. They show services, phone numbers, and maybe a contact form, but they do not guide the visitor or create urgency.
              </p>
              <div className="mt-8 space-y-4">
                <BeforeAfterPoint negative text="Visitors leave when they cannot get quick answers" />
                <BeforeAfterPoint negative text="Contact forms feel cold and easy to ignore" />
                <BeforeAfterPoint negative text="After-hours traffic turns into missed opportunity" />
                <BeforeAfterPoint negative text="The website does not actively support sales" />
              </div>
            </div>

            <div className="glow-border rounded-3xl border border-cyan-300/30 bg-cyan-300/10 p-6 sm:p-8">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">After</p>
              <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">An AI-Powered Website That Starts the Conversation</h2>
              <p className="mt-5 text-base leading-8 text-slate-300">
                Your website becomes a smarter front door for your business. It welcomes visitors, answers questions, captures lead details, and helps move people toward booking.
              </p>
              <div className="mt-8 space-y-4">
                <BeforeAfterPoint text="AI assistant responds instantly" />
                <BeforeAfterPoint text="Lead details are collected clearly" />
                <BeforeAfterPoint text="Customers can request appointments faster" />
                <BeforeAfterPoint text="Your website works even when you are offline" />
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="AI Capabilities"
            title="What the AI Assistant Can Handle"
            description="This is not just a chat bubble sitting on the page. It can be designed around the exact questions your customers ask before they call, book, or request a quote."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {aiCapabilities.map((item) => <InfoCard key={item.title} icon={item.icon} title={item.title} description={item.description} />)}
          </div>
          <div className="mt-10 rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-6 sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">Built Around Your Business</p>
                <h3 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">The AI flow is customized to your services, not copied from a generic template.</h3>
              </div>
              <div className="space-y-4 text-sm leading-7 text-slate-300">
                <p>A barber shop does not need the same flow as a home care agency. A med spa does not need the same intake questions as a contractor.</p>
                <p>That is the real value: a website that looks modern, explains the business clearly, and helps convert visitors into follow-up opportunities.</p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Business Impact" title="What This Does for Your Business" description="A premium AI-powered website helps your business look sharper, respond faster, and turn more visitors into real opportunities." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit} className="glass-card rounded-3xl p-5 transition hover:-translate-y-1 hover:border-cyan-300/30">
                <CheckCircle2 className="mb-4 text-cyan-300" size={26} aria-hidden="true" />
                <h3 className="text-lg font-bold text-white">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="industries" className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Industries" title="Built for Local Service Businesses" description="This offer is designed for businesses that depend on trust, phone calls, appointments, and fast customer response." />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry) => (
              <div key={industry} className="group rounded-3xl border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-cyan-300/10">
                <Store className="mb-5 text-cyan-300 transition group-hover:scale-110" size={28} aria-hidden="true" />
                <h3 className="font-bold text-white">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="pricing" className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Pricing" title="Simple Packages to Get Started" description="Start with a premium AI-powered website, then keep it updated and optimized with monthly support." />
          <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <PricingCard title="Starter AI Website" price="$997" billing="one-time project" eyebrow="Best first step" description="Launch a modern AI-powered website that explains your business, captures leads, and helps visitors request appointments." items={starterIncludes} cta="Start with the AI Website" recommended />
            <PricingCard title="Maintenance + AI Care Plan" price="$149" billing="per month" eyebrow="Ongoing support" description="Keep the site fresh after launch with updates, chatbot improvements, basic checks, and monthly performance review." items={careIncludes} cta="Add Monthly Support" />
          </div>
          <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.04] p-5 text-center">
            <p className="text-sm leading-7 text-slate-300">Not ready to buy yet? Start with the free website review. We’ll show you where your current website is losing leads and what we would improve first.</p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Process" title="How It Works" description="Simple, clear, and built around helping small businesses launch without feeling overwhelmed." />
          <div className="mt-12 grid gap-5 md:grid-cols-4">
            {processSteps.map((step, index) => (
              <div key={step} className="glass-card relative rounded-3xl p-6">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400 text-lg font-black text-slate-950">{index + 1}</div>
                <h3 className="text-lg font-bold text-white">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="contact" className="px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">Free Website Review</p>
            <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">Ready to Make Your Website Work 24/7?</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">Send us your current website and we’ll show you 3 ways it could capture more leads.</p>
            <div className="mt-8 space-y-4">
              <ContactPoint icon={MessageSquareText} text="Review your current website experience" />
              <ContactPoint icon={TrendingUp} text="Find missed lead capture opportunities" />
              <ContactPoint icon={Wrench} text="Recommend a practical AI website upgrade" />
            </div>
          </div>
          <ContactForm />
        </div>
      </AnimatedSection>

      <footer className="border-t border-white/10 px-5 py-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-xl font-black text-white">The Techcorner AI</h2>
            <p className="mt-2 text-sm text-slate-400">Modern AI websites for small businesses.</p>
            <p className="mt-4 text-xs text-slate-500">Built and Designed by The Techcorner AI LLC</p>
          </div>
          <div className="flex flex-wrap gap-5 text-sm font-medium text-slate-300">
            <a href="#solution" className="hover:text-cyan-300">Services</a>
            <a href="#demo" className="hover:text-cyan-300">Demo</a>
            <a href="#pricing" className="hover:text-cyan-300">Pricing</a>
            <a href="#contact" className="hover:text-cyan-300">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function SectionHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">{eyebrow}</p>
      <h2 className="text-3xl font-black tracking-tight text-white sm:text-5xl">{title}</h2>
      <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">{description}</p>
    </div>
  );
}

function TrustPoint({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-slate-200">
      <Check size={17} className="text-cyan-300" aria-hidden="true" />
      {text}
    </div>
  );
}

function InfoCard({ icon: Icon, title, description }: { icon: React.ElementType; title: string; description: string }) {
  return (
    <div className="glass-card rounded-3xl p-6 transition hover:-translate-y-1 hover:border-cyan-300/30">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-300">
        <Icon size={24} aria-hidden="true" />
      </div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
    </div>
  );
}

function FeatureCard({ icon: Icon, title }: { icon: React.ElementType; title: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-cyan-300/10">
      <Icon className="mb-5 text-cyan-300" size={28} aria-hidden="true" />
      <h3 className="text-lg font-bold text-white">{title}</h3>
    </div>
  );
}

function PricingCard({ title, price, billing, eyebrow, description, items, cta, recommended = false }: { title: string; price: string; billing: string; eyebrow: string; description: string; items: string[]; cta: string; recommended?: boolean }) {
  return (
    <div className={`relative flex h-full flex-col rounded-3xl p-6 sm:p-8 ${recommended ? "glow-border border border-cyan-300/30 bg-cyan-300/10" : "glass-card"}`}>
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div className={`inline-flex rounded-full px-4 py-2 text-xs font-black uppercase tracking-[0.16em] ${recommended ? "bg-cyan-400 text-slate-950" : "border border-white/10 bg-white/[0.04] text-cyan-300"}`}>{eyebrow}</div>
        {recommended && <span className="rounded-full border border-emerald-300/20 bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-300">Recommended</span>}
      </div>
      <h3 className="text-2xl font-black text-white sm:text-3xl">{title}</h3>
      <div className="mt-5 flex items-end gap-3">
        <p className="text-5xl font-black tracking-tight text-white sm:text-6xl">{price}</p>
        <p className="pb-2 text-sm font-semibold text-slate-400">{billing}</p>
      </div>
      <p className="mt-5 text-sm leading-7 text-slate-300">{description}</p>
      <div className="my-7 h-px bg-white/10" />
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm text-slate-200">
            <CheckCircle2 size={19} className="mt-0.5 shrink-0 text-cyan-300" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
      <a href="#contact" className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-6 py-4 text-sm font-black transition ${recommended ? "bg-cyan-400 text-slate-950 shadow-xl shadow-cyan-500/20 hover:bg-cyan-300" : "border border-white/15 bg-white/5 text-white hover:border-cyan-300/40 hover:bg-white/10"}`}>{cta}</a>
      <p className="mt-4 text-center text-xs leading-5 text-slate-500">Starts with a free review before any project begins.</p>
    </div>
  );
}

function BeforeAfterPoint({ text, negative = false }: { text: string; negative?: boolean }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
      <div className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${negative ? "bg-red-400/10 text-red-300" : "bg-cyan-400/15 text-cyan-300"}`}>
        {negative ? <span className="text-sm font-black">×</span> : <Check size={15} aria-hidden="true" />}
      </div>
      <p className="text-sm leading-6 text-slate-200">{text}</p>
    </div>
  );
}

function ContactPoint({ icon: Icon, text }: { icon: React.ElementType; text: string }) {
  return (
    <div className="flex items-center gap-3 text-slate-200">
      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-300">
        <Icon size={20} aria-hidden="true" />
      </div>
      <span className="font-medium">{text}</span>
    </div>
  );
}
