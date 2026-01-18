'use client';

import {
  Target,
  Handshake,
  GraduationCap,
  Brain,
  Scale,
  TrendingUp,
  Lock,
  Cloud,
  FileText,
  Shield,
  Users,
  Award,
  Linkedin,
  Twitter,
  Github,
  ArrowRight,
  Briefcase,
  MapPin,
} from 'lucide-react';

import { useRef } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import SectionHeader from '@/components/sections/SectionHeader';
import CTASection from '@/components/sections/CTASection';
import ServiceCard from '@/components/ui/ServiceCard';
import Reveal from '@/components/motion/Reveal';
import Link from 'next/link';
import SocialProofSection from '@/components/sections/SocialProofSection';
import DynamicMorphOverlay from '@/components/motion/DynamicMorphOverlay';

const heroData = {
  title: 'Our mission is to help your business reach its potential & end up on the right side of history, post-AI.',
  description:
    'Astrenox was founded on the belief that the AI supercycle is the most significant technological shift of our lifetime. We help organizations bridge the gap between strategic vision and production-grade execution.',
  stats: [],
};

const beliefs = [
  {
    number: '01',
    title: 'AI is a technological supercycle',
    description: 'This isn’t a trend. It’s a fundamental shift in how value is created and captured across every industry.',
  },
  {
    number: '02',
    title: 'AI-absent to AI-first',
    description: 'Survival requires a transition from being AI-absent to AI-integrated, and eventually AI-first in every operation.',
  },
  {
    number: '03',
    title: 'Embrace AI or be outpaced',
    description: 'The competitive advantage of the next decade belongs to those who can operationalize intelligence at scale.',
  },
  {
    number: '04',
    title: 'In-house capability gap',
    description: 'Most companies lack the senior engineering talent required to integrate AI seamlessly. We are that capability.',
  },
];

const leadership = [
  {
    name: 'Prajwal',
    role: 'Managing Partner',
    bio: 'Senior architect with a focus on enterprise AI systems and agentic workflows.',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Vipul Negi',
    role: 'Technical Lead',
    bio: 'Specialist in high-velocity engineering and modern stack transformation.',
    linkedin: '#',
    github: '#',
  },
];

const openRoles = [
  {
    title: 'Senior AI Engineer',
    team: 'Engineering',
    location: 'Remote / Ghaziabad',
    comp: '$80k - $120k',
  },
  {
    title: 'Solutions Architect',
    team: 'Consulting',
    location: 'Remote',
    comp: '$90k - $140k',
  },
  {
    title: 'Product Manager (AI)',
    team: 'Product',
    location: 'Ghaziabad',
    comp: '$70k - $110k',
  },
];

export default function AboutUsPage() {
  const closingCtaRef = useRef<HTMLElement | null>(null);

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
            description="Our core principles define how we think about the future of business and technology."
            animateTitleLines
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 mt-10 sm:mt-12">
            {beliefs.map((belief, index) => (
              <Reveal key={belief.number} y={20} delayMs={index * 100}>
                <div className="surface p-6 sm:p-8 border border-white/10 flex flex-col xs:flex-row gap-4 sm:gap-6 h-full">
                  <div className="text-3xl sm:text-4xl font-display text-white/10 shrink-0 leading-none">{belief.number}</div>
                  <div>
                    <h3 className="text-base sm:text-xl font-bold text-white mb-2 leading-tight">{belief.title}</h3>
                    <p className="text-xs sm:text-sm text-white/60 leading-relaxed">{belief.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="relative py-16 sm:py-24 bg-black/30">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our Leadership"
            description="Meet the builders behind Astrenox."
            animateTitleLines
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto mt-10 sm:mt-12">
            {leadership.map((member, index) => (
              <Reveal key={member.name} y={20} delayMs={index * 100}>
                <div className="surface p-6 sm:p-8 gradient-border h-full flex flex-col">
                  <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-5 sm:mb-6 text-xl sm:text-2xl font-display shrink-0 mx-auto sm:mx-0">
                    {member.name[0]}
                  </div>
                  <div className="text-center sm:text-left flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 leading-tight">{member.name}</h3>
                    <p className="text-xs sm:text-sm text-purple-400 font-medium mb-3 sm:mb-4 uppercase tracking-wider">{member.role}</p>
                    <p className="text-xs sm:text-sm text-white/60 mb-6 leading-relaxed">{member.bio}</p>
                  </div>
                  <div className="flex justify-center sm:justify-start gap-4 pt-4 border-t border-white/5">
                    {member.linkedin && <Link href={member.linkedin} className="text-white/40 hover:text-white transition-colors"><Linkedin className="h-4.5 w-4.5 sm:h-5 sm:w-5" /></Link>}
                    {member.twitter && <Link href={member.twitter} className="text-white/40 hover:text-white transition-colors"><Twitter className="h-4.5 w-4.5 sm:h-5 sm:w-5" /></Link>}
                    {member.github && <Link href={member.github} className="text-white/40 hover:text-white transition-colors"><Github className="h-4.5 w-4.5 sm:h-5 sm:w-5" /></Link>}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="py-10 sm:py-12 border-y border-white/5 bg-[#020617]">
        <p className="text-center text-[10px] sm:text-xs font-semibold tracking-[0.2em] sm:tracking-widest uppercase text-white/40 mb-6 sm:mb-8">Trusted by the best:</p>
        <SocialProofSection />
      </div>

      {/* Careers Section */}
      <section id="careers" className="relative py-16 sm:py-24 bg-[#020617]">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-start">
            <Reveal y={20}>
              <div className="lg:sticky lg:top-32 text-center lg:text-left">
                <h2 className="text-2xl xs:text-3xl md:text-5xl font-display mb-5 sm:mb-6 leading-tight">Come make history</h2>
                <p className="text-sm sm:text-base md:text-lg text-white/70 leading-relaxed mb-6 sm:mb-8">
                  We are looking for senior builders who are tired of corporate bloat and want to ship meaningful AI systems at high velocity. If you care about outcomes more than hours, we want to talk.
                </p>
                <div className="surface p-5 sm:p-6 border-l-4 border-l-purple-500 text-left">
                  <p className="text-xs sm:text-sm italic text-white/80 leading-relaxed">"Joining Astrenox means sitting in the code that will define the next decade of enterprise productivity."</p>
                </div>
              </div>
            </Reveal>
            <Reveal y={20} delayMs={200}>
              <div className="space-y-3.5 sm:space-y-4 mt-8 lg:mt-0">
                {openRoles.map((role) => (
                  <div key={role.title} className="surface p-5 sm:p-6 border border-white/5 hover:border-purple-500/30 transition-all group">
                    <div className="flex justify-between items-start gap-4">
                      <div className="min-w-0">
                        <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-purple-400 transition-colors truncate">{role.title}</h4>
                        <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-[10px] sm:text-xs font-medium text-white/40 uppercase tracking-wider">
                          <span className="flex items-center gap-1.5"><Briefcase className="h-3 w-3" /> {role.team}</span>
                          <span className="flex items-center gap-1.5"><MapPin className="h-3 w-3" /> {role.location}</span>
                        </div>
                      </div>
                      <Link href="/contact" className="shrink-0 h-9 w-9 sm:h-10 sm:w-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-slate-950 transition-all">
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                    <div className="mt-4 pt-4 border-t border-white/5 text-[11px] sm:text-sm font-bold text-purple-400/80 uppercase tracking-wider">
                      {role.comp}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section
        ref={closingCtaRef}
        className="relative py-16 md:py-32 overflow-hidden border-t border-white/5"
      >
        <DynamicMorphOverlay
          targetRef={closingCtaRef}
          gradient1={['#a855f7', '#0ea5e9']}
          gradient2={['#22c55e', '#a855f7']}
          opacity1={0.34}
          opacity2={0.44}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-3.5 sm:px-4 text-center">
          <h2 className="text-2xl xs:text-3xl md:text-6xl font-display mb-6 sm:mb-8 leading-tight px-2">Stay on the right side of history.</h2>
          <Link href="/get-started" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-[12px] sm:rounded-[14px] bg-white text-slate-950 px-5 sm:px-10 py-3.5 sm:py-5 text-sm sm:text-base font-bold hover:bg-white/90 transition-all shadow-2xl">
            Get Started
            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

