'use client';

import { ArrowRight, BookOpen, Briefcase, Rocket, Target, Users } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import SectionHeader from '@/components/sections/SectionHeader';
import Reveal from '@/components/motion/Reveal';
import Link from 'next/link';

const heroData = {
  title: 'We’re Here to Build What’s Next',
  description:
    'Astrenox is a new kind of partner for the intelligence era. We blend the strategic depth of a top-tier consultancy with the rapid execution of a Silicon Valley product shop.',
  stats: [],
};

export default function CompanyPage() {
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
            <Reveal y={20}>
              <div className="space-y-5 sm:space-y-6 text-center lg:text-left">
                <SectionHeader
                  title="Our Mission"
                  description="Traditional consultancies sell slides that gather dust. Product shops build tools without understanding the business context. Astrenox was built to close this gap."
                />
                <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                  We believe that rigorous thinking must be paired with production-grade execution. Our mission is to help your business reach its potential and end up on the right side of history, post-AI. We sit in the code with you, ensuring that every strategic bet results in a shipped outcome.
                </p>
              </div>
            </Reveal>
            <Reveal y={20} delayMs={200}>
              <div className="surface p-6 sm:p-8 gradient-border border-purple-500/20 bg-purple-500/5">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-[12px] sm:rounded-[14px] bg-purple-500/10 border border-purple-500/20 mb-5 sm:mb-6">
                  <Rocket className="h-5 w-5 sm:h-6 sm:w-6 text-purple-400" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">High-Velocity Innovation</h3>
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed mb-5 sm:mb-6">
                  We operate at the speed of the models we deploy. Our team is structured for rapid prototyping and seamless scaling, allowing us to turn "what if" into "what's next" in weeks, not months.
                </p>
                <div className="h-px w-full bg-white/10 mb-5 sm:mb-6" />
                <div className="flex items-center justify-center sm:justify-start gap-3 sm:gap-4 text-[10px] sm:text-sm font-bold text-purple-400">
                  <span className="flex items-center gap-1.5 sm:gap-2 uppercase tracking-wider"><Target className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> Strategy</span>
                  <span className="flex items-center text-white/20"><ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" /></span>
                  <span className="flex items-center gap-1.5 sm:gap-2 uppercase tracking-wider"><Users className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> Execution</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-24 bg-black/30">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <SectionHeader
            title="Explore Our Company"
            description="Learn more about our insights and opportunities."
            animateTitleLines
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 mt-10 sm:mt-16 max-w-4xl mx-auto">
            <Reveal y={20}>
              <Link href="/company#insights" className="block surface p-6 sm:p-8 border border-white/5 hover:border-purple-500/30 transition-all group h-full">
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-[12px] sm:rounded-[14px] bg-white/5 border border-white/10 flex items-center justify-center mb-5 sm:mb-6 group-hover:bg-purple-500/10 transition-colors shrink-0">
                  <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 text-purple-400" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 leading-tight">Blogs & Insights</h3>
                <p className="text-xs sm:text-sm text-white/60 mb-5 sm:mb-6 leading-relaxed">Deep dives into AI strategy, engineering patterns, and the future of work.</p>
                <span className="text-[11px] sm:text-sm text-purple-400 font-bold flex items-center gap-1.5 sm:gap-2 uppercase tracking-wider">Read more <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" /></span>
              </Link>
            </Reveal>
            <Reveal y={20} delayMs={100}>
              <Link href="/about-us#careers" className="block surface p-6 sm:p-8 border border-white/5 hover:border-purple-500/30 transition-all group h-full">
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-[12px] sm:rounded-[14px] bg-white/5 border border-white/10 flex items-center justify-center mb-5 sm:mb-6 group-hover:bg-purple-500/10 transition-colors shrink-0">
                  <Briefcase className="h-5 w-5 sm:h-6 sm:w-6 text-purple-400" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 leading-tight">Careers</h3>
                <p className="text-xs sm:text-sm text-white/60 mb-5 sm:mb-6 leading-relaxed">Join a team of senior builders shipping meaningful AI systems at high velocity.</p>
                <span className="text-[11px] sm:text-sm text-purple-400 font-bold flex items-center gap-1.5 sm:gap-2 uppercase tracking-wider">Join us <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" /></span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-32 overflow-hidden border-t border-white/5">
        <div className="relative z-10 max-w-4xl mx-auto px-3.5 sm:px-4 text-center">
          <h2 className="text-2xl xs:text-3xl md:text-6xl font-display mb-6 sm:mb-8 leading-tight">Let’s Build the Future Together.</h2>
          <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-[12px] sm:rounded-[14px] bg-white text-slate-950 px-8 sm:px-10 py-3.5 sm:py-5 text-sm sm:text-base font-bold hover:bg-white/90 transition-all shadow-2xl">
            Contact Us
            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

