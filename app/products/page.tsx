'use client';

import { Search, Brain, Lightbulb, Cpu, Database, Shield, ArrowRight, Zap, Target } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import SectionHeader from '@/components/sections/SectionHeader';
import Reveal from '@/components/motion/Reveal';
import Link from 'next/link';

const heroData = {
  title: 'AI Products That Transform Business',
  description:
    'Our flagship products combine cutting-edge AI technology with enterprise-grade reliability to deliver measurable business impact across your organization.',
  stats: [],
};

export default function ProductsPage() {
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
            title="Our Flagship"
            titleGradient="Platforms"
            description="Built for scale, security, and measurable outcomes."
            animateTitleLines
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mt-10 sm:mt-16 max-w-5xl mx-auto">
            <Reveal y={20}>
              <div className="surface p-6 sm:p-10 border border-white/5 hover:border-purple-500/30 transition-all group relative overflow-hidden h-full flex flex-col">
                <div className="absolute top-0 right-0 p-6 sm:p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                  <Database className="h-24 w-24 sm:h-32 sm:w-32 text-white" />
                </div>
                <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-[14px] sm:rounded-[18px] bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6 sm:mb-8 shrink-0">
                  <Zap className="h-6 w-6 sm:h-7 sm:w-7 text-purple-400" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-display text-white mb-3 sm:mb-4 leading-tight">Solvoris</h3>
                <p className="text-xs sm:text-sm md:text-base text-white/60 leading-relaxed mb-6 sm:mb-8 flex-1">The enterprise AI orchestration layer. Unify your data, models, and workflows into a single, governable ecosystem.</p>
                <Link href="/products/solvoris" className="inline-flex items-center gap-2 text-xs sm:text-base text-purple-400 font-bold group-hover:gap-3 transition-all uppercase tracking-wider">
                  Explore Solvoris
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>

            <Reveal y={20} delayMs={100}>
              <div className="surface p-6 sm:p-10 border border-white/5 hover:border-cyan-500/30 transition-all group relative overflow-hidden h-full flex flex-col">
                <div className="absolute top-0 right-0 p-6 sm:p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                  <Brain className="h-24 w-24 sm:h-32 sm:w-32 text-white" />
                </div>
                <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-[14px] sm:rounded-[18px] bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6 sm:mb-8 shrink-0">
                  <Target className="h-6 w-6 sm:h-7 sm:w-7 text-cyan-400" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-display text-white mb-3 sm:mb-4 leading-tight">Orzo</h3>
                <p className="text-xs sm:text-sm md:text-base text-white/60 leading-relaxed mb-6 sm:mb-8 flex-1">The AI Business Copilot. Amplify your team’s productivity with instant search, proactive insights, and agentic workflows.</p>
                <Link href="/anx-intelligence" className="inline-flex items-center gap-2 text-xs sm:text-base text-cyan-400 font-bold group-hover:gap-3 transition-all uppercase tracking-wider">
                  Explore Orzo
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-32 overflow-hidden border-t border-white/5">
        <div className="relative z-10 max-w-4xl mx-auto px-3.5 sm:px-4 text-center">
          <h2 className="text-2xl xs:text-3xl md:text-6xl font-display mb-6 sm:mb-8 leading-tight">Stay on the right side of history.</h2>
          <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-[12px] sm:rounded-[14px] bg-white text-slate-950 px-8 sm:px-10 py-3.5 sm:py-5 text-sm sm:text-base font-bold hover:bg-white/90 transition-all shadow-2xl">
            Get Started
            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
