'use client';

import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import {
  CurveSwipeHero,
  SectionHeader,
  CTASection,
  SocialProofSection,
  TestimonialsSection,
  BentoGallerySection,
  FAQSection,
  MethodologySection,
  FoundationalMethodologiesDashboard,
} from '@/components/sections';
import Reveal from '@/components/motion/Reveal';
import Link from 'next/link';
import DynamicMorphOverlay from '@/components/motion/DynamicMorphOverlay';

const heroData = {
  title: 'Creating Engineering Disruption with AI-First Digital Transformation',
  description:
    'We diagnose bottlenecks, design the right AI, and scale execution from quick wins to enterprise rollouts combining strategy and hands-on engineering to deliver measurable outcomes.',
  stats: [
    { value: '25%', label: 'Decrease in person hours' },
    { value: '20%', label: 'Faster time to launch' },
    { value: 'Step-Change', label: 'ROI Unlocked' },
  ],
};

export default function Home() {
  const choiceRef = useRef<HTMLElement | null>(null);

  return (
    <main className="min-h-screen text-white antialiased">
      <Header />

      <CurveSwipeHero
        title={heroData.title}
        description={heroData.description}
        stats={heroData.stats}
      />

      <Reveal>
        <div className="py-12">
          <SocialProofSection />
        </div>
      </Reveal>

      {/* Foundational Methodologies */}
      <MethodologySection />

      {/* Foundational Methodologies (dashboard view) */}
      <FoundationalMethodologiesDashboard />

      {/* Choice / Positioning */}
      <section
        ref={choiceRef}
        className="relative py-16 md:py-32 overflow-hidden"
      >
        <DynamicMorphOverlay
          targetRef={choiceRef}
          gradient1={['#a855f7', '#0ea5e9']}
          gradient2={['#22c55e', '#a855f7']}
          opacity1={0.35}
          opacity2={0.45}
        />

        <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8 text-center">
          <Reveal y={20}>
            <h2 className="font-display text-2xl xs:text-3xl md:text-6xl mb-6 sm:mb-8 leading-tight sm:leading-[1.1]">
              You have a choice. <span className="text-gradient">Disrupt yourself.</span> Or be disrupted.
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/70 leading-relaxed mb-8 sm:mb-12">
              The cost of intelligence is falling to zero. Those who wait for "perfect" will be outpaced by those who build for "flow." Astrenox is here to ensure you end up on the right side of history.
            </p>
            <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-[12px] sm:rounded-[14px] border border-white/20 bg-white/5 px-5 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-bold hover:bg-white/10 transition-colors">
              Get started
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Testimonials / Results */}
      <section className="relative py-16 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="mb-10 sm:mb-16">
          <SectionHeader
              badge="Success Stories"
              title="Real stories,"
              titleGradient="real results"
              description="See how Astrenox is helping leaders transform their engineering and operations with AI-first thinking."
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            <Reveal y={20}>
              <div className="surface p-5 sm:p-8 border border-emerald-500/20 bg-emerald-500/5">
                <div className="text-3xl sm:text-4xl font-display text-emerald-400 mb-2">25%</div>
                <div className="text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-emerald-400/60 mb-4 sm:mb-6">Decrease in per-project person hours</div>
                <p className="text-xs sm:text-sm text-white/80 italic">"The speed of delivery shifted almost overnight. We aren't just shipping more. We're shipping better."</p>
              </div>
            </Reveal>
            <Reveal y={20} delayMs={100}>
              <div className="surface p-5 sm:p-8 border border-cyan-500/20 bg-cyan-500/5">
                <div className="text-3xl sm:text-4xl font-display text-cyan-400 mb-2">20%</div>
                <div className="text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-cyan-400/60 mb-4 sm:mb-6">Decrease in time to launch</div>
                <p className="text-xs sm:text-sm text-white/80 italic">"Astrenox didn't just give us a roadmap. They sat in the code with us until the vision was live."</p>
              </div>
            </Reveal>
          </div>

          <div className="mt-12 sm:mt-16 overflow-hidden">
            <div className="whitespace-nowrap flex gap-8 sm:gap-12 animate-[marquee_30s_linear_infinite] text-lg sm:text-2xl font-display text-white/20">
              {Array.from({ length: 10 }).map((_, i) => (
                <span key={i}>Built by builders, trusted by leaders • </span>
              ))}
            </div>
          </div>
        </div>
      </section>

       

      <div className="py-12 text-center">
        <Link href="/contact" className="text-purple-400 hover:text-purple-300 font-semibold flex items-center justify-center gap-2">
          Talk to our AI experts
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      
      {/* Final CTA */}
      <section className="relative py-16 md:py-32 overflow-hidden border-t border-white/5">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-purple-500/8 via-transparent to-cyan-500/8" />
        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-purple-500/10 blur-[120px]" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="relative z-10 max-w-6xl mx-auto px-3 sm:px-4">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] sm:text-[11px] font-semibold tracking-[0.2em] sm:tracking-[0.26em] uppercase text-white/60">
              Future-Proof
            </div>
            <h2 className="mt-4 text-2xl xs:text-3xl md:text-6xl font-display leading-tight">
              Stay on the right side of history.
            </h2>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-white/65 max-w-3xl mx-auto">
              Ready to build what&apos;s next? Tell us where you are constrained and we&apos;ll design AI-first solutions that ship and scale.
            </p>
          </div>

          <div className="mt-8 sm:mt-10 flex flex-col xs:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              href="/contact"
              className="btn-primary w-full xs:w-auto px-5 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base"
            >
              Get Started
              <ArrowRight className="h-4.5 w-4.5 sm:h-5 sm:w-5 btn-icon" />
            </Link>
            <Link
              href="/contact"
              className="btn-secondary w-full xs:w-auto px-5 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base"
            >
              Talk to us
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-center">
            {[
              { label: 'Delivery Velocity', value: 'Weeks to launch' },
              { label: 'Ownership Model', value: 'We ship with you' },
              { label: 'Proof over slides', value: 'Production or it didn’t happen' },
            ].map((item) => (
              <div key={item.label} className="surface p-4 border border-white/10">
                <p className="text-[10px] sm:text-xs font-semibold tracking-[0.15em] sm:tracking-[0.22em] uppercase text-white/45">{item.label}</p>
                <p className="mt-1.5 text-xs sm:text-sm text-white/70">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Reveal>
      <FAQSection />
      </Reveal>
      <Footer />
    </main>
  );
}
