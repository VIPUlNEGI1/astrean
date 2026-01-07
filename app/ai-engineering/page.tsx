'use client';

import {
  Brain,
  Target,
  Users,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Database,
  Code,
  RefreshCw,
  MessageSquare,
  Zap,
  Layers,
  Cpu,
} from 'lucide-react';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import SectionHeader from '@/components/sections/SectionHeader';
import CTASection from '@/components/sections/CTASection';
import ServiceCard from '@/components/ui/ServiceCard';
import ProblemCard from '@/components/ui/ProblemCard';
import Reveal from '@/components/motion/Reveal';
import Link from 'next/link';

const heroData = {
  title: 'AI Engineering',
  description:
    'We provide high-velocity engineering-as-a-service, without sacrificing quality. Astrenox engineers are builders first, specialized in deploying production-ready AI systems that scale.',
  stats: [],
};

const beliefs = [
  {
    title: 'Hire the best',
    description: 'We only hire the top 1% of engineering talent. No juniors, no bloat—just senior builders who understand the full stack.',
    icon: Users,
  },
  {
    title: 'Use AI (a lot)',
    description: 'We leverage AI to build AI. Our internal velocity is multiplied by the same tools we deploy for you.',
    icon: Zap,
  },
  {
    title: 'Charge on outcomes',
    description: 'We don’t bill for hours; we bill for milestones. If the code doesn’t work, we don’t win.',
    icon: Target,
  },
  {
    title: 'Pay on outcomes',
    description: 'Our engineers are incentivized by the success of your project, aligning our internal culture with your business goals.',
    icon: DollarSign,
  },
];

const capabilities = [
  {
    title: 'Application Development',
    description: 'Full-stack AI-first applications built with React, Next.js, and robust Python backends.',
    icon: Code,
  },
  {
    title: 'Fine-Tuning Models',
    description: 'Customizing LLMs on your proprietary data to achieve domain-specific excellence.',
    icon: Brain,
  },
  {
    title: 'Code Migration & Refactors',
    description: 'Modernizing legacy systems to be AI-ready and performance-optimized.',
    icon: RefreshCw,
  },
  {
    title: 'Data Engineering & Analysis',
    description: 'Building the pipelines and RAG architectures that fuel intelligent insights.',
    icon: Database,
  },
  {
    title: 'Custom Agentic Solutions',
    description: 'Deploying autonomous agents that can reason, plan, and execute multi-step workflows.',
    icon: Cpu,
  },
];

export default function AIEngineeringPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white antialiased overflow-hidden">
      <Header />

      <Hero
        title={heroData.title}
        description={heroData.description}
        stats={heroData.stats}
      />

      {/* Beliefs Section */}
      <section className="relative py-16 sm:py-24 bg-[#020617]">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <SectionHeader
            title="What We Believe"
            description="Our engineering culture is built on four core pillars that drive our velocity and quality."
            animateTitleLines
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {beliefs.map((belief, index) => (
              <Reveal key={belief.title} y={20} delayMs={index * 100} className="h-full">
                <div className="surface p-6 sm:p-8 gradient-border h-full flex flex-col">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-[12px] sm:rounded-[14px] bg-white/5 border border-white/10 flex items-center justify-center mb-5 sm:mb-6 shrink-0">
                    <belief.icon className="h-5 w-5 sm:h-6 sm:w-6 text-purple-400" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">{belief.title}</h3>
                  <p className="text-white/65 text-xs sm:text-sm leading-relaxed flex-1">{belief.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why You Need Us Section */}
      <section className="relative py-16 sm:py-24 bg-black/30">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <SectionHeader
            title="Why You Need Us"
            description="Building an elite AI engineering team is slow and expensive. We provide the shortcut."
            animateTitleLines
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 mt-10 sm:mt-12">
            {[
              { title: 'Hiring Risks', desc: 'Avoid the 6-month hiring cycle and the risk of a bad technical fit.' },
              { title: 'Cost Efficiency', desc: 'On-demand senior talent is cheaper than maintaining a bloated internal bench.' },
              { title: 'Velocity Advantage', desc: 'We ship in days what takes internal teams months to scope.' },
              { title: 'Unwinding Bad Habits', desc: 'We bring best-in-class MLOps and engineering standards to your stack.' },
            ].map((item, i) => (
              <Reveal key={i} y={20} delayMs={i * 100}>
                <div className="flex gap-4 sm:gap-6 items-start surface p-6 sm:p-8 h-full">
                  <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                    <CheckCircle className="h-4.5 w-4.5 sm:h-5 sm:w-5 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-white mb-1.5 sm:mb-2">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-white/65 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="relative py-16 sm:py-24 bg-[#020617]">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <SectionHeader
            title="What We Do"
            description="Comprehensive AI engineering capabilities to build what’s next."
            animateTitleLines
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {capabilities.map((cap, index) => (
              <Reveal key={cap.title} y={20} delayMs={index * 100}>
                <div className="surface p-6 sm:p-8 border border-white/5 hover:border-purple-500/30 transition-colors group h-full">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-[12px] sm:rounded-[14px] bg-white/5 border border-white/10 flex items-center justify-center mb-5 sm:mb-6 group-hover:bg-purple-500/10 transition-colors shrink-0">
                    <cap.icon className="h-5 w-5 sm:h-6 sm:w-6 text-purple-400" />
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2">{cap.title}</h3>
                  <p className="text-xs sm:text-sm text-white/60 leading-relaxed">{cap.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Model Section */}
      <section className="relative py-16 sm:py-24 bg-black/30">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <SectionHeader
            title="Why Work With Us"
            description="Our engagement model is designed for transparency, speed, and seamless integration."
            animateTitleLines
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { title: 'Dedicated Team', icon: Users, desc: 'A senior-only squad that learns your business and stack.' },
              { title: 'Sprint Cycles', icon: RefreshCw, desc: 'Weekly deployments and rapid feedback loops.' },
              { title: 'Project Management', icon: Layers, desc: 'Full transparency via Jira/Linear and regular syncs.' },
              { title: 'Slack & Code', icon: MessageSquare, desc: 'Direct access to engineers via Slack and GitHub.' },
            ].map((item, index) => (
              <Reveal key={item.title} y={20} delayMs={index * 100}>
                <div className="surface p-5 sm:p-6 h-full border border-white/10">
                  <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-purple-400 mb-3 sm:mb-4 shrink-0" />
                  <h4 className="text-sm sm:text-base font-bold text-white mb-1.5 sm:mb-2">{item.title}</h4>
                  <p className="text-xs sm:text-sm text-white/60 leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 sm:mt-16 text-center">
            <Link href="/intelligent-automations" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-purple-400 hover:text-purple-300 transition-colors font-semibold text-sm sm:text-base">
              See Intelligent Automations
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-32 overflow-hidden border-t border-white/5">
        <div className="relative z-10 max-w-4xl mx-auto px-3.5 sm:px-4 text-center">
          <h2 className="text-2xl xs:text-3xl md:text-6xl font-display mb-6 sm:mb-8 leading-tight px-2">Stay on the right side of history.</h2>
          <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-[12px] sm:rounded-[14px] bg-white text-slate-950 px-8 sm:px-10 py-3.5 sm:py-5 text-sm sm:text-base font-bold hover:bg-white/90 transition-all">
            Get Started
            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

