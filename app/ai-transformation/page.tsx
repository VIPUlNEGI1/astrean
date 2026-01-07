'use client';

import {
  Search,
  FileText,
  Puzzle,
  GraduationCap,
  MessageSquare,
  Users,
  Plug,
  CheckCircle,
  ArrowRight,
  RefreshCw,
  Code,
} from 'lucide-react';

import { useRef } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import SectionHeader from '@/components/sections/SectionHeader';
import CTASection from '@/components/sections/CTASection';
import ServiceCard from '@/components/ui/ServiceCard';
import AssessmentCard from '@/components/ui/AssessmentCard';
import Reveal from '@/components/motion/Reveal';
import Link from 'next/link';
import DynamicMorphOverlay from '@/components/motion/DynamicMorphOverlay';

const heroData = {
  title: 'AI Transformation',
  description:
    'The cost of intelligence is falling toward zero. To survive the next decade, organizations must move from AI-absent to AI-native. Astrenox provides the strategic oversight and technical execution to navigate this shift without the overhead of traditional consultancies.',
  stats: [],
};

export default function AITransformationPage() {
  const closingCtaRef = useRef<HTMLElement | null>(null);

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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-start">
            <Reveal y={20}>
              <div className="text-center lg:text-left">
                <SectionHeader
                  title="Strategy"
                  description="Transformation starts with transparency. We conduct 30/60/90-day holistic and function-specific audits to map your current state against the possible. The output is a comprehensive AI-Adoption Report and a technical appendix that acts as your implementation bible."
                  animateTitleLines
                />
                <div className="mt-6 sm:mt-8">
                  <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-[12px] sm:rounded-[14px] bg-white text-slate-950 px-5 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-bold hover:bg-white/90 transition-colors shadow-xl">
                    Request an Assessment
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Reveal>
            <Reveal y={20} delayMs={200}>
              <div className="surface p-5 sm:p-8 gradient-border h-full">
                <h3 className="text-lg sm:text-xl font-bold mb-5 sm:mb-6">Our Execution Framework</h3>
                <div className="space-y-6 sm:space-y-8">
                  <div className="space-y-3 sm:space-y-4">
                    <h4 className="text-purple-400 font-bold flex items-center gap-2 text-sm sm:text-base">
                      <Puzzle className="h-4.5 w-4.5 sm:h-5 sm:w-5" /> Product Transformation
                    </h4>
                    <p className="text-xs sm:text-sm text-white/70 leading-relaxed">We deploy unicorn PMs and engineers to build AI-first products. Our outcome-based engagements ensure we accelerate your roadmap, not just add tickets to it.</p>
                    <Link href="/ai-engineering" className="text-[11px] sm:text-xs text-purple-400 hover:underline">Just interested in our AI Engineering services? Learn more.</Link>
                  </div>
                  <div className="space-y-3 sm:space-y-4">
                    <h4 className="text-cyan-400 font-bold flex items-center gap-2 text-sm sm:text-base">
                      <RefreshCw className="h-4.5 w-4.5 sm:h-5 sm:w-5" /> Process Transformation
                    </h4>
                    <p className="text-xs sm:text-sm text-white/70 leading-relaxed">Through surveys and stakeholder interviews, we identify high-friction internal processes and implement intelligent automation with full change management support.</p>
                  </div>
                  <div className="space-y-3 sm:space-y-4">
                    <h4 className="text-emerald-400 font-bold flex items-center gap-2 text-sm sm:text-base">
                      <Users className="h-4.5 w-4.5 sm:h-5 sm:w-5" /> People Transformation
                    </h4>
                    <p className="text-xs sm:text-sm text-white/70 leading-relaxed">AI adoption is a cultural shift. We provide bespoke curricula and hands-on workshops to upskill your workforce, ensuring your team is ready to lead in an AI-first world.</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-24 bg-black/30">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <SectionHeader
            title="Why You Need Us"
            description="Traditional consultancies sell slides. We ship systems."
            animateTitleLines
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mt-10 sm:mt-12">
            {[
              'Mission-critical oversight for your AI roadmap.',
              'Bridging the ownership gap between strategy and dev.',
              'Deep technical chops that slide-deck shops lack.',
              'Ensuring cultural buy-in across all business units.',
              'Avoiding the common pitfalls of stalled AI pilots.',
              'Practitioner-led results that scale beyond prototypes.',
            ].map((bullet, i) => (
              <Reveal key={i} y={20} delayMs={i * 50}>
                <div className="flex gap-3.5 sm:gap-4 items-start surface p-4 sm:p-6 h-full">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-purple-400 shrink-0" />
                  <p className="text-xs sm:text-sm md:text-base text-white/80">{bullet}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-24 bg-[#020617]">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl xs:text-3xl md:text-5xl font-display mb-4 leading-tight">What we do</h2>
            <p className="text-sm sm:text-base md:text-xl text-white/60 font-medium">We are your Chief AI Officer.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              { title: 'Process Survey', icon: Search, desc: 'Deep-dive analysis of operational friction points.' },
              { title: 'Executive Survey', icon: FileText, desc: 'Aligning leadership on AI priorities and vision.' },
              { title: 'Expert Interviews', icon: MessageSquare, desc: 'Gathering ground-truth insights from domain experts.' },
              { title: 'Custom Training', icon: GraduationCap, desc: 'Curricula designed for your specific stack and culture.' },
              { title: 'AI Tooling', icon: Plug, desc: 'Selecting and configuring the right tools for your team.' },
              { title: 'AI Engineering', icon: Code, desc: 'Building the models and systems that power your future.' },
            ].map((item, i) => (
              <Reveal key={i} y={20} delayMs={i * 100}>
                <div className="surface p-6 sm:p-8 border border-white/5 hover:border-purple-500/30 transition-colors group h-full">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-[12px] sm:rounded-[14px] bg-white/5 border border-white/10 flex items-center justify-center mb-5 sm:mb-6 group-hover:bg-purple-500/10 transition-colors shrink-0">
                    <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-purple-400" />
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-white/60 leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 sm:mt-16 text-center">
            <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-[12px] sm:rounded-[14px] bg-white text-slate-950 px-8 sm:px-10 py-3.5 sm:py-5 text-sm sm:text-base font-bold hover:bg-white/90 transition-all shadow-2xl">
              Start your transformation
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
          </div>
        </div>
      </section>

      <section
        ref={closingCtaRef}
        className="relative py-16 md:py-32 overflow-hidden border-t border-white/5"
      >
        <DynamicMorphOverlay
          targetRef={closingCtaRef}
          gradient1={['#8b5cf6', '#06b6d4']}
          gradient2={['#22c55e', '#8b5cf6']}
          opacity1={0.34}
          opacity2={0.44}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-3.5 sm:px-4 text-center">
          <h2 className="text-2xl xs:text-3xl md:text-6xl font-display mb-6 sm:mb-8 leading-tight sm:leading-normal px-2">Stay on the right side of history.</h2>
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

