'use client';

import { Search, Brain, Lightbulb, Cpu, Database, Shield, Zap, ArrowRight, MessageSquare, Target } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import SectionHeader from '@/components/sections/SectionHeader';
import CTASection from '@/components/sections/CTASection';
import ServiceCard from '@/components/ui/ServiceCard';
import Reveal from '@/components/motion/Reveal';
import Link from 'next/link';

const heroData = {
  title: 'ANX Intelligence: The Business Copilot',
  description:
    'Built for executives, product owners, and operations leaders. Orzo unifies search, insights, and business process automation into agentic workflows acting across your entire systems ecosystem.',
  stats: [],
};

export default function ANXIntelligencePage() {
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
            <Reveal y={20}>
              <div className="space-y-5 sm:space-y-6 text-center lg:text-left">
                <SectionHeader
                  badge="The Chaos"
                  title="Knowledge is scattered."
                  titleGradient="Work is slow."
                  description="Facts are buried in Slack threads, Jira tickets, and Google Drive folders. Finding the right answer takes minutes. Acting on it takes hours."
                />
              </div>
            </Reveal>
            <Reveal y={20} delayMs={200}>
              <div className="surface p-6 sm:p-8 gradient-border border-emerald-500/20 bg-emerald-500/5 text-center lg:text-left">
                <SectionHeader
                  badge="The Answer"
                  title="Orzo: Instant Clarity"
                  description="One interface for instant enterprise search, summarized answers, and automated workflows. A secure KMS + IDP foundation that knows your business as well as you do."
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-24 bg-black/30">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <SectionHeader
            title="Core Capabilities"
            description="The intelligence layer your enterprise has been waiting for."
            animateTitleLines
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mt-10 sm:mt-16">
            {[
              {
                title: 'Instant Search',
                description: 'Crawl and index GDrive, Slack, Salesforce, Jira, and more for sub-second retrieval.',
                icon: Search,
              },
              {
                title: 'Intelligent Copilot',
                description: 'Ask → Decide → Do. Orzo handles multi-step tasks by coordinating across your toolstack.',
                icon: Brain,
              },
              {
                title: 'Proactive Insights',
                description: 'Orzo anticipates your needs, transforming organizational noise into actionable signals.',
                icon: Lightbulb,
              },
            ].map((item, index) => (
              <Reveal key={item.title} y={20} delayMs={index * 100}>
                <div className="surface p-6 sm:p-8 border border-white/5 h-full group hover:border-purple-500/30 transition-colors">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-[12px] sm:rounded-[14px] bg-white/5 border border-white/10 flex items-center justify-center mb-5 sm:mb-6 group-hover:bg-purple-500/10 transition-colors shrink-0">
                    <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-purple-400" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 leading-tight">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-white/60 leading-relaxed">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-24 bg-[#020617]">
        <div className="max-w-4xl mx-auto px-3.5 sm:px-6 lg:px-8 text-center">
          <Reveal y={20}>
            <h2 className="text-2xl xs:text-3xl md:text-5xl font-display mb-6 sm:mb-8 leading-tight">The Outcome</h2>
            <p className="text-lg xs:text-xl sm:text-2xl text-white/80 leading-relaxed mb-6 sm:mb-8 italic">
              "Faster decisions, fewer tickets, and thousands of hours reclaimed. Orzo is your team amplified by the collective intelligence of the enterprise."
            </p>
            <div className="h-0.5 w-16 sm:w-24 bg-purple-500 mx-auto" />
          </Reveal>
        </div>
      </section>

      <section className="relative py-16 md:py-32 overflow-hidden border-t border-white/5">
        <div className="relative z-10 max-w-4xl mx-auto px-3.5 sm:px-4 text-center">
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <Link href="/intelligent-automations" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-[12px] sm:rounded-[14px] border border-white/20 bg-white/5 px-5 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-bold hover:bg-white/10 transition-colors">
              See Intelligent Automations
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/get-started?intent=anx-intelligence" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-[12px] sm:rounded-[14px] bg-white text-slate-950 px-5 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-bold hover:bg-white/90 transition-all shadow-2xl">
              Talk to our AI Experts
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

