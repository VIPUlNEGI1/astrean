'use client';

import {
  Flame,
  Link2,
  HelpCircle,
  Lock,
  Compass,
  Layers,
  Brain,
  Code,
  RefreshCw,
  Infinity,
  Database,
  Target,
  TrendingDown,
  TrendingUp,
  Shield,
  Rocket,
  Cog,
  Server,
  Cpu,
  ArrowRight,
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
  title: 'Digital & IT Consulting and Custom Software & Application Modernization',
  description:
    'Strategy & Build — AI-first blueprint + elite engineering. We transform legacy systems into modern, AI-ready platforms that drive business agility.',
  stats: [],
};

export default function DigitalITConsultingPage() {
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
            title="The Digital Transformation"
            titleGradient="Dilemma"
            description="Accumulated technical debt and legacy systems hinder innovation. High TCO, siloed data, and stalled AI pilots are the symptoms of an infrastructure not built for the intelligence era."
            animateTitleLines
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-10 sm:mt-12">
            {[
              { icon: Flame, title: 'Technical Debt', desc: 'Outdated codebases that slow down every new feature.' },
              { icon: Link2, title: 'Siloed Data', desc: 'Valuable insights locked in fragmented systems.' },
              { icon: HelpCircle, title: 'Stalled Pilots', desc: 'AI initiatives that never make it to production.' },
              { icon: Lock, title: 'Security Risks', desc: 'Increasing vulnerabilities in aging infrastructure.' },
            ].map((item, index) => (
              <Reveal key={index} y={20} delayMs={index * 100}>
                <ProblemCard
                  icon={item.icon}
                  title={item.title}
                  description={item.desc}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-24 bg-black/30">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our Solution"
            titleGradient="The Blueprint + The Build"
            description="We bridge the gap between strategic vision and technical reality."
            animateTitleLines
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mt-10 sm:mt-16">
            <Reveal y={20}>
              <div className="surface p-6 sm:p-8 gradient-border h-full">
                <div className="flex items-center gap-3 mb-5 sm:mb-6">
                  <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-lg bg-purple-500/20 flex items-center justify-center shrink-0">
                    <Compass className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">The Blueprint</h3>
                </div>
                <p className="text-xs sm:text-sm text-white/70 mb-6 sm:mb-8 leading-relaxed">
                  An AI-first strategy that defines your target architecture and data/process design through a phased, measurable roadmap.
                </p>
                <ul className="space-y-3 sm:space-y-4">
                  {[
                    'Enterprise Architecture Design',
                    'Data Strategy & Governance',
                    'AI Readiness Assessment',
                    'Cloud Migration Strategy',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2.5 sm:gap-3 text-xs sm:text-sm text-white/60">
                      <div className="h-1 sm:h-1.5 w-1.5 sm:w-1.5 rounded-full bg-purple-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal y={20} delayMs={200}>
              <div className="surface p-6 sm:p-8 gradient-border h-full">
                <div className="flex items-center gap-3 mb-5 sm:mb-6">
                  <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-lg bg-cyan-500/20 flex items-center justify-center shrink-0">
                    <Cog className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">The Build</h3>
                </div>
                <p className="text-xs sm:text-sm text-white/70 mb-6 sm:mb-8 leading-relaxed">
                  Hands-on engineering to modernize legacy systems into microservices and APIs with a focus on security, reliability, and velocity.
                </p>
                <ul className="space-y-3 sm:space-y-4">
                  {[
                    'Custom Application Development',
                    'Legacy System Refactoring',
                    'Cloud-Native Transformation',
                    'API & Integration Hubs',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2.5 sm:gap-3 text-xs sm:text-sm text-white/60">
                      <div className="h-1 sm:h-1.5 w-1.5 sm:w-1.5 rounded-full bg-cyan-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-24 bg-[#020617]">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <SectionHeader
            title="Core Capabilities"
            description="Elite engineering for the modern enterprise."
            animateTitleLines
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-10 sm:mt-12">
            {[
              { title: 'IT Strategy & Roadmapping', icon: Compass, desc: 'Aligning tech spend with business outcomes.' },
              { title: 'Custom App Development', icon: Code, desc: 'Building scalable, secure, and intuitive platforms.' },
              { title: 'Legacy Modernization', icon: RefreshCw, desc: 'Unlocking agility from aging systems.' },
              { title: 'Cloud-Native Architecture', icon: Server, desc: 'Serverless and microservices at scale.' },
              { title: 'API & Integration', icon: Database, desc: 'Connecting your ecosystem for seamless flow.' },
            ].map((service, index) => (
              <Reveal key={service.title} y={20} delayMs={index * 100}>
                <div className="surface p-6 sm:p-8 border border-white/5 hover:border-purple-500/30 transition-colors h-full group">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-[12px] sm:rounded-[14px] bg-white/5 border border-white/10 flex items-center justify-center mb-5 sm:mb-6 group-hover:bg-purple-500/10 transition-colors shrink-0">
                    <service.icon className="h-5 w-5 sm:h-6 sm:w-6 text-purple-400" />
                  </div>
                  <h3 className="text-base sm:text-xl font-bold text-white mb-2 leading-tight">{service.title}</h3>
                  <p className="text-xs sm:text-sm text-white/60 leading-relaxed">{service.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-24 bg-black/30">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <SectionHeader
            title="The Astrenox Advantage"
            description="Practitioner-led results that move the needle."
            animateTitleLines
          />

          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-10 sm:mt-12">
            {[
              { title: 'Lower TCO', icon: TrendingDown, desc: 'Optimize operations and resource utility.' },
              { title: 'Higher Velocity', icon: TrendingUp, desc: 'Accelerate your release frequency.' },
              { title: 'Stronger Security', icon: Shield, desc: 'Zero-trust architecture by default.' },
              { title: 'Faster Innovation', icon: Rocket, desc: 'A foundation built for what’s next.' },
            ].map((result, index) => (
              <Reveal key={result.title} y={20} delayMs={index * 100}>
                <div className="surface p-5 sm:p-6 h-full border border-white/10 text-center flex flex-col items-center justify-center">
                  <result.icon className="h-7 w-7 sm:h-8 sm:w-8 text-purple-400 mb-3 sm:mb-4 shrink-0" />
                  <h4 className="text-sm sm:text-base font-bold text-white mb-1.5 sm:mb-2 leading-tight">{result.title}</h4>
                  <p className="text-[10px] sm:text-xs text-white/40 leading-relaxed">{result.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-32 overflow-hidden border-t border-white/5">
        <div className="relative z-10 max-w-4xl mx-auto px-3.5 sm:px-4 text-center">
          <h2 className="text-2xl xs:text-3xl md:text-6xl font-display mb-6 sm:mb-8 leading-tight">Let’s Build Your Future</h2>
          <p className="text-sm sm:text-base md:text-lg text-white/60 mb-8 sm:mb-12 italic leading-relaxed">Start with a focused scoping session. We’ll align the plan and ship the work.</p>
          <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-[12px] sm:rounded-[14px] bg-white text-slate-950 px-5 sm:px-8 py-3.5 sm:py-5 text-sm sm:text-base font-bold hover:bg-white/90 transition-all shadow-2xl">
            Request Scoping Session
            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </Link>
 Broadway        </div>
      </section>

      <Footer />
    </main>
  );
}

