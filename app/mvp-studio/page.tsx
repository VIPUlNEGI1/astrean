'use client';

import {
  Rocket,
  Target,
  Code,
  Palette,
  Database,
  Plug,
  Cloud,
  CheckCircle,
  ArrowRight,
  Clock,
  DollarSign,
  Users,
  FileText,
  HelpCircle,
  BarChart,
  Eye,
  Zap,
} from 'lucide-react';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import SectionHeader from '@/components/sections/SectionHeader';
import CTASection from '@/components/sections/CTASection';
import ServiceCard from '@/components/ui/ServiceCard';
import AssessmentCard from '@/components/ui/AssessmentCard';
import Reveal from '@/components/motion/Reveal';
import SocialProofSection from '@/components/sections/SocialProofSection';
import Link from 'next/link';

const heroData = {
  title: 'Launch your MVP in 3 weeks',
  description:
    'From idea to live product. Strategy, build, and first users delivered without chaos or rework.',
  stats: [],
};

const valueBullets = [
  'Clear scope confirmed within 48 hours',
  'Design, build, and deploy with end-to-end observability',
  'Handover playbook and a ready next-sprint backlog',
];

const stats = [
  { value: '20+', label: 'Products shipped' },
  { value: '$10M+', label: 'Capital raised by clients' },
  { value: '5+', label: 'Acquisitions' },
  { value: '< 14d', label: 'Avg. time to first user' },
  { value: '60+', label: 'NPS for delivery' },
];

const ourWork = [
  {
    title: 'Ops Copilot',
    desc: 'From detailed specification to a live product in 13 days. Forty pilot users in the first week through target outreach and warm intros.',
  },
  {
    title: 'Fintech Dashboard',
    desc: 'Version zero shipped in two weeks. Two design partners converted to paying customers after a guided trial and value review.',
  },
  {
    title: 'Creator Tools',
    desc: 'Low-code MVP validated core assumptions. The team raised a seed round within ninety days using product signals and cohort retention.',
  },
];

export default function MVPStudioPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white antialiased overflow-hidden">
      <Header />

      <Hero
        title={heroData.title}
        description={heroData.description}
        stats={heroData.stats}
      />

      <section className="relative py-10 sm:py-12 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
            {valueBullets.map((bullet, i) => (
              <Reveal key={i} y={10} delayMs={i * 100}>
                <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-white/70">
                  <CheckCircle className="h-4.5 w-4.5 sm:h-5 sm:w-5 text-purple-400 shrink-0" />
                  {bullet}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-12 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500">
        <p className="text-center text-[10px] sm:text-xs font-bold tracking-[0.2em] sm:tracking-widest uppercase text-white/30 mb-6 sm:mb-8">Trusted by teams shipping fast</p>
        <SocialProofSection />
      </section>

      <section className="relative py-16 sm:py-24 bg-[#020617]">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
            <Reveal y={20}>
              <div className="text-center lg:text-left">
                <SectionHeader
                  title="For founders who are"
                  titleGradient="ready to build"
                  description="You are not waiting for perfection. You are optimizing for learning speed. We turn a sharp problem statement into a testable MVP that is instrumented for signal from day one."
                />
                <p className="text-sm sm:text-base text-white/60 leading-relaxed mt-6">
                  You ship a focused product. You collect use data and user feedback. You iterate with confidence because your next decisions are evidence-based.
                </p>
              </div>
            </Reveal>
            <Reveal y={20} delayMs={200}>
              <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-8 lg:mt-0">
                {stats.map((stat, i) => (
                  <div key={i} className="surface p-5 sm:p-6 border border-white/5 h-full flex flex-col justify-center">
                    <div className="text-2xl sm:text-3xl font-display text-white mb-1">{stat.value}</div>
                    <div className="text-[9px] sm:text-[10px] font-bold tracking-widest uppercase text-white/40 leading-tight">{stat.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-24 bg-black/30">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our Work"
            description="A quick sample of outcomes our team has delivered."
            animateTitleLines
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mt-10 sm:mt-12">
            {ourWork.map((item, i) => (
              <Reveal key={i} y={20} delayMs={i * 100}>
                <div className="surface p-6 sm:p-8 border border-white/5 h-full">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 leading-tight">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-white/60 leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="relative py-16 sm:py-24 bg-[#020617]">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <SectionHeader
            title="Process — Define → Build → Launch and Iterate"
            description="Everything is designed to reduce uncertainty and accelerate validated progress."
            animateTitleLines
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mt-10 sm:mt-16">
            {[
              {
                step: 'Step 1',
                title: 'Define the vision',
                desc: 'We align on framing and jobs to be done. We separate must-haves from later iterations.',
                output: 'one-page spec, screen map, prioritized backlog',
                icon: Target,
              },
              {
                step: 'Step 2',
                title: 'Build your MVP',
                desc: 'We set up the design system, core flows, CI/CD, and observability. Authentication included.',
                output: 'deployed MVP, operational runbook',
                icon: Code,
              },
              {
                step: 'Step 3',
                title: 'Launch and learn',
                desc: 'Beta rollout, signal capture from funnels, and prioritizing the next sprint using real usage.',
                output: 'post-launch report, v0.1 backlog',
                icon: Rocket,
              },
            ].map((item, i) => (
              <Reveal key={i} y={20} delayMs={i * 100}>
                <div className="surface p-6 sm:p-8 border border-white/10 h-full relative overflow-hidden group">
                  <div className="text-5xl sm:text-6xl font-display text-white/[0.03] absolute -top-2 -right-2 group-hover:text-purple-500/10 transition-colors shrink-0">{i + 1}</div>
                  <item.icon className="h-7 w-7 sm:h-8 sm:w-8 text-purple-400 mb-5 sm:mb-6 shrink-0" />
                  <h4 className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-purple-400/60 mb-2">{item.step}</h4>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 leading-tight">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-white/60 mb-5 sm:mb-6 leading-relaxed">{item.desc}</p>
                  <div className="pt-5 sm:pt-6 border-t border-white/5 text-[10px] sm:text-xs text-white/40">
                    <span className="font-bold text-white/60 uppercase">Output:</span> {item.output}
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
            title="What’s included"
            description="Everything you need to launch successfully."
            animateTitleLines
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-10 sm:mt-12">
            {[
              'Product strategy, UX flows, and UI kit',
              'Full-stack implementation (API, DB, App)',
              'Auth, Payments, Email, and Analytics',
              'Telemetry (logs, metrics, error tracking)',
              'Cloud or Vercel deployment with handoff',
              'Two-week warranty for critical fixes',
            ].map((item, i) => (
              <Reveal key={i} y={10} delayMs={i * 50}>
                <div className="flex items-center gap-3.5 sm:gap-4 surface p-5 sm:p-6 border border-white/5 h-full">
                  <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0">
                    <CheckCircle className="h-4 w-4 sm:h-4.5 sm:w-4.5 text-emerald-400" />
                  </div>
                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="relative py-16 sm:py-24 bg-[#020617]">
        <div className="max-w-4xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <Reveal y={20}>
            <div className="surface p-6 sm:p-16 gradient-border text-center">
              <h2 className="text-2xl xs:text-3xl md:text-5xl font-display mb-3 sm:mb-4 leading-tight">MVP in 3 weeks</h2>
              <p className="text-xl sm:text-2xl text-purple-400 font-bold mb-6 sm:mb-8">starts from $1,500</p>
              <p className="text-xs sm:text-sm text-white/60 mb-8 sm:mb-12 leading-relaxed">Best for well-scoped products with up to three core flows. Includes strategy workshop, design system, build, deploy, and handoff.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left mb-8 sm:mb-12">
                <div className="space-y-4">
                  <h4 className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-white/40">Add-ons (Fixed Fees)</h4>
                  <ul className="space-y-2 text-[11px] sm:text-sm text-white/60">
                    <li>• Extra integrations</li>
                    <li>• Custom models or AI agents</li>
                    <li>• Complex data migrations</li>
                    <li>• SOC 2-ready foundation</li>
                  </ul>
                </div>
                <div className="flex items-center justify-center">
                  <Link href="/get-started?intent=mvp-pricing" className="w-full inline-flex items-center justify-center gap-2 rounded-[12px] sm:rounded-[14px] bg-white text-slate-950 px-5 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm font-bold hover:bg-white/90 transition-all shadow-xl">
                    Book a 15-minute scoping call
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative py-12 sm:py-24 bg-black/30">
        <div className="max-w-4xl mx-auto px-3.5 sm:px-6 lg:px-8 text-center">
          <Reveal y={20}>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 leading-tight">Fifteen minutes to confirm fit</h3>
            <p className="text-xs sm:text-sm text-white/60 mb-6 sm:mb-8 leading-relaxed">Bring your problem statement, your audience, and your success criteria. Leave with a clear timeline and a fixed price.</p>
            <p className="text-base sm:text-xl font-display text-white/80">prajwal@astrentech.com</p>
          </Reveal>
        </div>
      </section>

      <section className="relative py-16 sm:py-24 bg-[#020617]">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <SectionHeader
            title="Testimonials"
            description="Real feedback from founders who shipped with us."
            animateTitleLines
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mt-10 sm:mt-12">
            {[
              { quote: "Astrenox helped us turn a fuzzy concept into something users paid for within a month. The process was fast and structured.", author: "Founder, Ops Platform" },
              { quote: "We shipped on time and on budget. Instrumentation made the next steps obvious.", author: "Product Lead, Fintech" },
              { quote: "They are fast and precise. They push for clarity and make the right trade-offs for pre-seed teams.", author: "CTO, Creator Tools" },
            ].map((t, i) => (
              <Reveal key={i} y={20} delayMs={i * 100}>
                <div className="surface p-6 sm:p-8 border-l-4 border-l-purple-500 italic text-white/80 leading-relaxed h-full flex flex-col justify-center">
                  <p className="text-xs sm:text-sm leading-relaxed">"{t.quote}"</p>
                  <div className="mt-5 sm:mt-6 not-italic font-bold text-white/40 uppercase tracking-widest text-[9px] sm:text-[10px]">{t.author}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-24 bg-black/30">
        <div className="max-w-3xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <SectionHeader title="FAQ" description="Common questions about our MVP program." />
          <div className="space-y-4 sm:space-y-6 mt-10 sm:mt-12">
            {[
              { q: 'What do you need from us?', a: 'We need founder time for structured workshops, a single decision maker and access to existing assets and tools.' },
              { q: 'Will it scale?', a: 'Yes. We engineer MVPs to grow with clean modules, environment configuration, and CI from the first commit.' },
              { q: 'What happens after launch?', a: 'You can retain us for weekly sprints or we can hand over to your team with documentation and training.' },
              { q: 'Do you support AI features?', a: 'Yes. We deliver RAG and search, chat experiences, assistants, and lightweight agents. We choose the simplest path that proves value quickly.' },
            ].map((faq, i) => (
              <Reveal key={i} y={10} delayMs={i * 50}>
                <div className="surface p-5 sm:p-6 border border-white/5">
                  <h4 className="text-sm sm:text-base font-bold text-white mb-1.5 sm:mb-2 leading-tight">{faq.q}</h4>
                  <p className="text-xs sm:text-sm text-white/60 leading-relaxed">{faq.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-32 overflow-hidden border-t border-white/5">
        <div className="relative z-10 max-w-4xl mx-auto px-3.5 sm:px-4 text-center">
          <p className="text-sm sm:text-base md:text-lg text-white/70 leading-relaxed mb-8 sm:mb-12 max-w-2xl mx-auto">
            If your goal is to learn fast and convert those learnings into traction, our three-week program gives you a live product, the right analytics, and a plan for the next sprint.
          </p>
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

