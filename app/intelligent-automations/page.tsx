'use client';

import {
  TrendingUp,
  Search,
  FileCheck,
  Shield,
  Cog,
  Rocket,
  LineChart,
  Bot,
  UserCog,
  Workflow,
  ArrowRight,
} from 'lucide-react';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import SectionHeader from '@/components/sections/SectionHeader';
import CTASection from '@/components/sections/CTASection';
import ServiceCard from '@/components/ui/ServiceCard';
import AssessmentCard from '@/components/ui/AssessmentCard';
import Reveal from '@/components/motion/Reveal';
import Link from 'next/link';

const heroData = {
  title: 'Intelligent Automations',
  description:
    'Deliver real-world solutions to accelerate your business and ensure you’re fully leveraging the power of AI. Astrenox builds production-ready AI automations that plug directly into your existing tools, data, and teams to drive value from day one.',
  stats: [],
};

const buildItems = [
  {
    title: 'AI Chatbots',
    description: 'Support, onboarding, leads, or advisory. Deploy on your site, Slack, or via WhatsApp/SMS.',
    icon: Bot,
  },
  {
    title: 'AI Assistants / Co-pilots',
    description: 'Internal assistants trained on your knowledge base to enforce SOPs across sales, ops, and compliance.',
    icon: UserCog,
  },
  {
    title: 'Autonomous Agents',
    description: 'Task decomposition and execution using search, APIs, and databases to handle complex multi-step goals.',
    icon: Rocket,
  },
  {
    title: 'Workflow Automations',
    description: 'Content generation, outbound sequencing, call summaries, and automated analytics pipelines.',
    icon: Workflow,
  },
  {
    title: 'Knowledge Search',
    description: 'Permission-aware retrieval with live sync across all your enterprise data sources.',
    icon: Search,
  },
  {
    title: 'Document Automations',
    description: 'Automate RFP responses, proposals, reports, and analysis accelerators with precision.',
    icon: FileCheck,
  },
];

const howWeBuild = [
  { title: 'Proven Patterns', desc: 'Start from our library of battle-tested templates and accelerators.' },
  { title: 'Connect Data', desc: 'Sync with 30+ sources: Drive, Notion, Salesforce, HubSpot, and more.' },
  { title: 'Compose Visually', desc: 'Build complex logic via our visual orchestrator or robust SDK.' },
  { title: 'Best Models', desc: 'Access OpenAI, Anthropic, Google, Llama, and Mistral via a single API.' },
  { title: 'Deploy Everywhere', desc: 'Embed on web, share links, or integrate with Slack and messaging.' },
];

export default function IntelligentAutomationsPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white antialiased overflow-hidden">
      <Header />

      <Hero
        title={heroData.title}
        description={heroData.description}
        stats={heroData.stats}
      />

      <section className="relative py-16 sm:py-24 bg-[#020617]">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <SectionHeader
            title="What We Build"
            description="Custom AI solutions designed for enterprise-scale impact."
            animateTitleLines
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-10 sm:mt-12">
            {buildItems.map((item, index) => (
              <Reveal key={item.title} y={20} delayMs={index * 100}>
                <div className="surface p-6 sm:p-8 border border-white/5 hover:border-purple-500/30 transition-colors h-full group">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-[12px] sm:rounded-[14px] bg-white/5 border border-white/10 flex items-center justify-center mb-5 sm:mb-6 group-hover:bg-purple-500/10 transition-colors shrink-0">
                    <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-purple-400" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 leading-tight">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-white/60 leading-relaxed">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 sm:mt-16 text-center">
            <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-[12px] sm:rounded-[14px] bg-white text-slate-950 px-5 sm:px-10 py-3.5 sm:py-4 text-sm sm:text-base font-bold hover:bg-white/90 transition-colors shadow-2xl">
              Scope my first use case
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-24 bg-black/30 overflow-hidden">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <SectionHeader
            title="How We Build It"
            description="A streamlined path from data to deployed intelligence."
            animateTitleLines
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 mt-10 sm:mt-16">
            {howWeBuild.map((step, index) => (
              <Reveal key={step.title} y={20} delayMs={index * 100} className="h-full">
                <div className="relative p-5 sm:p-6 surface border border-white/10 h-full group">
                  <div className="text-3xl sm:text-4xl font-display text-white/10 absolute top-4 right-6 group-hover:text-purple-500/10 transition-colors">{index + 1}</div>
                  <h4 className="text-sm sm:text-base font-bold text-white mb-2 pr-8 leading-tight">{step.title}</h4>
                  <p className="text-[11px] sm:text-xs text-white/60 leading-relaxed">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 sm:mt-12 text-center">
            <Link href="/contact" className="text-purple-400 hover:text-purple-300 font-semibold flex items-center justify-center gap-2 text-sm sm:text-base">
              See our data connectors
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-24 bg-[#020617]">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <SectionHeader
            title="What You Get"
            description="Enterprise-grade reliability and measurable ROI."
            animateTitleLines
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mt-10 sm:mt-12">
            {[
              { title: 'Measurable Impact', desc: 'Track performance and ROI with built-in analytics dashboards.' },
              { title: 'Accuracy & Freshness', desc: 'Live-synced retrieval ensures your AI always has the latest facts.' },
              { title: 'Enterprise Integration', desc: 'Production-ready triggers, actions, and robust API endpoints.' },
            ].map((benefit, i) => (
              <Reveal key={i} y={20} delayMs={i * 100}>
                <div className="flex gap-4 items-start surface p-6 sm:p-8 border-l-4 border-l-purple-500 h-full">
                  <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-purple-400 shrink-0" />
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-white mb-1.5 sm:mb-2 leading-tight">{benefit.title}</h4>
                    <p className="text-xs sm:text-sm text-white/65 leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-24 bg-black/30">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our Engagement Model"
            description="Five steps to automation success."
            animateTitleLines
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 mt-10 sm:mt-12">
            {[
              { title: 'Discovery & Prioritization', icon: Search, desc: 'Identify high-impact use cases.' },
              { title: 'Design & Orchestration', icon: Cog, desc: 'Architecting the agentic logic.' },
              { title: 'Integration & Security', icon: Shield, desc: 'Connecting tools safely.' },
              { title: 'Deployment & Enablement', icon: Rocket, desc: 'Going live and training teams.' },
              { title: 'Monitor & Optimize', icon: LineChart, desc: 'Continuous improvement loops.' },
            ].map((step, index) => (
              <Reveal key={index} y={20} delayMs={index * 100}>
                <AssessmentCard
                  number={(index + 1).toString().padStart(2, '0')}
                  icon={step.icon}
                  title={step.title}
                  description={step.desc}
                />
              </Reveal>
            ))}
          </div>
          <div className="mt-12 sm:mt-16 text-center px-3.5">
            <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-[12px] sm:rounded-[14px] bg-white text-slate-950 px-5 sm:px-10 py-3.5 sm:py-4 font-bold hover:bg-white/90 transition-all shadow-xl text-sm sm:text-base">
              Start Discovery
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-32 overflow-hidden border-t border-white/5">
        <div className="relative z-10 max-w-4xl mx-auto px-3.5 sm:px-4 text-center">
          <h2 className="text-2xl xs:text-3xl md:text-6xl font-display mb-6 sm:mb-8 leading-tight">Ready to automate intelligently?</h2>
          <p className="text-sm sm:text-base md:text-lg text-white/60 mb-8 sm:mb-12 leading-relaxed">Let’s scope your first high-impact use case.</p>
          <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-[12px] sm:rounded-[14px] bg-white text-slate-950 px-5 sm:px-10 py-3.5 sm:py-5 text-sm sm:text-base font-bold hover:bg-white/90 transition-all shadow-2xl">
            Get Started
            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

