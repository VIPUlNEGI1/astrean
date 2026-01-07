'use client';

import {
  CheckCircle,
  Users,
  Cpu,
  Code,
  Smartphone,
  TestTube,
  Briefcase,
  UserCog,
  Network,
  Shield,
  Search,
  Route,
  FileText,
  Rocket,
  Brain,
  Clock,
  Zap,
  Target,
  BarChart,
  ArrowRight,
  Database,
  Workflow,
  Globe,
  Lock,
  Flame,
  Cog,
  LineChart,
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
import { useState } from 'react';

const heroData = {
  title: 'Hire elite AI & engineering talent, on-demand',
  description:
    'Ship faster with pre-vetted builders, fractional leaders, and outcome-driven squads that plug into your roadmap from day one.',
  stats: [],
};

const roles = [
  { category: 'AI/ML & GenAI', examples: 'Applied AI Engineer, Prompt Engineer, RAG Specialist, MLOps, CV/NLP' },
  { category: 'Data', examples: 'Analytics Engineer, Data Engineer, BI Developer, Data Scientist' },
  { category: 'Product & Design', examples: 'Product Manager, Product Designer, UX Writer, Researcher' },
  { category: 'Full-Stack & Platform', examples: 'Frontend (React/Next), Backend (Node/Python/Go), API Engineer' },
  { category: 'Cloud & DevOps', examples: 'SRE, DevOps, Platform Engineer, Release/CI-CD' },
  { category: 'Automation', examples: 'Workflow/RPA Engineer, Integration Engineer, QA Automation' },
];

export default function HireTalentPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'success'>('idle');

  return (
    <main className="min-h-screen bg-[#020617] text-white antialiased">
      <Header />

      <Hero
        title={heroData.title}
        description={heroData.description}
        stats={heroData.stats}
      />

      {/* <section className="relative py-12    ">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/get-started?intent=talent" className="inline-flex items-center justify-center gap-2 rounded-[14px] bg-white text-slate-950 px-8 py-4 font-bold hover:bg-white/90 transition-all shadow-xl">
              Get a shortlist
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/get-started?intent=talent-call" className="inline-flex items-center justify-center gap-2 rounded-[14px] border border-white/20 bg-white/5 px-8 py-4 font-bold hover:bg-white/10 transition-colors">
              Talk to a solutions architect
            </Link>
          </div>
        </div>
      </section> */}

      <section className="relative py-16 sm:py-24 bg-[#020617]">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <SectionHeader
            title="Speed, quality, and accountability —"
            titleGradient="in one motion"
            description="Our talent engine is built for founders and teams who need senior builders, not just more bodies."
            animateTitleLines
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mt-10 sm:mt-12">
            {[
              { title: 'Shortlists in days', desc: 'We maintain an always-warm bench across AI, data, and product.' },
              { title: 'Vetted for outcomes', desc: 'Candidates are graded on real delivery patterns, not just LeetCode.' },
              { title: 'Pods or individuals', desc: 'Place a single specialist or spin up a managed squad with PM and QA.' },
              { title: 'Time-zone coverage', desc: 'India, EMEA, and US overlap windows for continuous progress.' },
              { title: 'Security-first', desc: 'NDAs, IP assignment, and audited workflows are standard.' },
              { title: 'Aligned incentives', desc: 'Outcome-based models tied to features, not just hours.' },
            ].map((item, i) => (
              <Reveal key={i} y={20} delayMs={i * 50}>
                <div className="flex gap-3.5 sm:gap-4 items-start surface p-5 sm:p-6 border border-white/5 h-full">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-purple-400 shrink-0" />
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-white/60 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="relative py-12">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6">
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-6">
            <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-[12px] sm:rounded-[14px] bg-white text-slate-950 px-5 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-bold hover:bg-white/90 transition-all shadow-xl">
              Get a shortlist
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-[12px] sm:rounded-[14px] border border-white/20 bg-white/5 px-5 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-bold hover:bg-white/10 transition-colors">
              Talk to an expert
            </Link>
          </div>
        </div>
      </section>
      <section className="relative py-16 sm:py-24 bg-black/30">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <SectionHeader
            title="Builders for every layer"
            titleGradient="of your stack"
            description="From fractional CTOs to forward-deployed squads."
            animateTitleLines
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-10 sm:mt-12">
            {roles.map((role, i) => (
              <Reveal key={i} y={20} delayMs={i * 100}>
                <div className="surface p-6 sm:p-8 border border-white/5 h-full hover:border-purple-500/30 transition-colors">
                  <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">{role.category}</h3>
                  <p className="text-xs sm:text-sm text-white/60 leading-relaxed">{role.examples}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-24 bg-[#020617]">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <SectionHeader
            title="How It Works"
            description="From request to “in the code” in four steps."
            animateTitleLines
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-10 sm:mt-16">
            {[
              { step: '01', title: 'Intake & Design', desc: 'Scope outcomes, skills, and budget in 24–48h.' },
              { step: '02', title: 'Shortlist', desc: 'Receive 3–5 pre-vetted fits with delivery notes.' },
              { step: '03', title: 'Trial Sprint', desc: 'Optional one-week pilot to validate velocity.' },
              { step: '04', title: 'Onboard & Scale', desc: 'Seamless ramp-up as your roadmap grows.' },
            ].map((item, i) => (
              <Reveal key={i} y={20} delayMs={i * 100}>
                <div className="relative p-6 sm:p-8 surface border border-white/10 h-full group">
                  <div className="text-4xl sm:text-5xl font-display text-white/[0.03] absolute top-4 right-6 group-hover:text-purple-500/10 transition-colors">{item.step}</div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 pr-10">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-white/60 leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 sm:mt-16 text-center px-3.5">
            <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-[12px] sm:rounded-[14px] bg-white text-slate-950 px-8 sm:px-10 py-3.5 sm:py-5 text-sm sm:text-base font-bold hover:bg-white/90 transition-all shadow-2xl">
              Request your shortlist
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-24 bg-black/30">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <SectionHeader title="Proof over promises" description="Our vetting process ensures only the top 1% join our bench." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mt-10 sm:mt-12">
            {[
              { title: 'Technical Screen', desc: 'Systems thinking and debugging under constraints.' },
              { title: 'Hands-on Build', desc: 'Repo-based challenges reflecting your domain.' },
              { title: 'Pair Programming', desc: 'Live sessions to test collaboration and framing.' },
              { title: 'Code Review', desc: 'Maintainability, observability, and performance.' },
              { title: 'Delivery Behaviors', desc: 'Estimation, ticket hygiene, and PR discipline.' },
              { title: 'References', desc: 'Verified track record of prior manager success.' },
            ].map((v, i) => (
              <Reveal key={i} y={10} delayMs={i * 50}>
                <div className="flex gap-3.5 sm:gap-4 surface p-5 sm:p-6 border border-white/5 h-full">
                  <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-purple-500 mt-2 shrink-0" />
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-white mb-1">{v.title}</h4>
                    <p className="text-[11px] sm:text-xs text-white/50 leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-24 bg-[#020617]">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16">
            <Reveal y={20}>
              <div>
                <h2 className="text-2xl xs:text-3xl md:text-4xl font-display mb-6 sm:mb-8 text-center lg:text-left leading-tight">Engagement Models</h2>
                <div className="space-y-3.5 sm:space-y-4">
                  {[
                    { title: 'Staff Augmentation', desc: '1–3 experts embedded into your team.' },
                    { title: 'Managed Squads', desc: 'Outcome-based pods with sprint commitments.' },
                    { title: 'Fractional Leadership', desc: 'Part-time CTO or Architect to shape direction.' },
                    { title: 'Build-Operate-Transfer (BOT)', desc: 'We build the team and transition it to you.' },
                  ].map((m, i) => (
                    <div key={i} className="surface p-5 sm:p-6 border border-white/5 group hover:border-purple-500/30 transition-colors">
                      <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-purple-400 transition-colors">{m.title}</h4>
                      <p className="mt-1 text-xs sm:text-sm text-white/60 leading-relaxed">{m.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal y={20} delayMs={200}>
              <div>
                <h2 className="text-2xl xs:text-3xl md:text-4xl font-display mb-6 sm:mb-8 text-center lg:text-left leading-tight">SLAs & Guarantees</h2>
                <div className="surface p-6 sm:p-8 border border-purple-500/20 bg-purple-500/5 space-y-6 sm:space-y-8">
                  <div>
                    <h4 className="text-[10px] sm:text-xs font-bold tracking-[0.2em] sm:tracking-widest uppercase text-purple-400 mb-3 sm:mb-4">Response SLA</h4>
                    <p className="text-sm sm:text-base text-white/80 leading-relaxed">Shortlist within 3–5 business days for common roles.</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] sm:text-xs font-bold tracking-[0.2em] sm:tracking-widest uppercase text-purple-400 mb-3 sm:mb-4">Continuity</h4>
                    <p className="text-sm sm:text-base text-white/80 leading-relaxed">Rapid replacement if availability or project needs change.</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] sm:text-xs font-bold tracking-[0.2em] sm:tracking-widest uppercase text-purple-400 mb-3 sm:mb-4">Quality Gates</h4>
                    <p className="text-sm sm:text-base text-white/80 leading-relaxed">Periodic code audits and velocity reviews for all squads.</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] sm:text-xs font-bold tracking-[0.2em] sm:tracking-widest uppercase text-purple-400 mb-3 sm:mb-4">IP & Security</h4>
                    <p className="text-sm sm:text-base text-white/80 leading-relaxed">Standard assignment agreements and environment isolation.</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-24 bg-black/30">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <SectionHeader title="Snapshots of Impact" description="What great talent unlocks." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mt-10 sm:mt-12">
            {[
              { title: 'Support Copilot', stats: '30% faster resolution', desc: 'Retrieval-augmented workflows for GenAI support.' },
              { title: 'Data Revamp', stats: 'Trusted by Finance', desc: 'Migrated to modern ELT + semantic layer.' },
              { title: 'Frontend Push', stats: 'Lighthouse 95+', desc: '20% higher conversion after two-week sprint.' },
            ].map((s, i) => (
              <Reveal key={i} y={20} delayMs={i * 100}>
                <div className="surface p-6 sm:p-8 border border-white/5 text-center h-full flex flex-col justify-center">
                  <div className="text-purple-400 font-bold mb-2 text-sm sm:text-base">{s.stats}</div>
                  <h4 className="text-base sm:text-lg font-bold text-white mb-2">{s.title}</h4>
                  <p className="text-xs sm:text-sm text-white/60 leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 sm:mt-12 text-center">
            <Link href="/ai-engineering" className="text-purple-400 hover:text-purple-300 font-bold flex items-center justify-center gap-2 text-sm sm:text-base">
              See how our squads deliver
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-24 bg-[#020617]">
        <div className="max-w-4xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <SectionHeader title="Pricing Signals" description="Clear, predictable, and scalable." />
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-10 sm:mt-12">
            {[
              { title: 'Individuals', price: 'Monthly Retainer', desc: 'Billed per role seniority.' },
              { title: 'Squads', price: 'Outcome-based', desc: 'Tied to features/story-points.' },
              { title: 'Fractional Leaders', price: 'Weekly Blocks', desc: 'Fixed weekly allocation.' },
            ].map((p, i) => (
              <Reveal key={i} y={20} delayMs={i * 100}>
                <div className="surface p-6 sm:p-8 border border-white/10 text-center group hover:border-purple-500/30 transition-all h-full flex flex-col justify-center">
                  <h4 className="font-bold text-white/60 uppercase tracking-widest text-[9px] sm:text-[10px] mb-3 sm:mb-4">{p.title}</h4>
                  <div className="text-lg sm:text-xl font-bold text-white mb-1.5 sm:mb-2">{p.price}</div>
                  <p className="text-[10px] sm:text-xs text-white/40 leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 sm:mt-12 text-center">
            <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-[12px] sm:rounded-[14px] bg-white text-slate-950 px-8 sm:px-10 py-3.5 sm:py-4 text-sm sm:text-base font-bold hover:bg-white/90 transition-all">
              Get a tailored quote
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-24 bg-black/30">
        <div className="max-w-4xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <SectionHeader title="FAQ" description="Common questions about hiring with Astrenox." />
          <div className="space-y-4 sm:space-y-6 mt-10 sm:mt-12">
            {[
              { q: 'How fast can we start?', a: 'Often within a week after intake. Complex roles may need longer.' },
              { q: 'Can you match our stack and rituals?', a: 'Yes—your tracker, your stand-ups. We add our quality gates.' },
              { q: 'Do you provide time-zone overlap?', a: 'We staff to your overlap requirement during intake.' },
              { q: 'What if the fit isn’t right?', a: 'We replace quickly and help stabilize the roadmap.' },
              { q: 'Can you help define the role?', a: 'Absolutely. Most requests start with outcomes, then skills.' },
              { q: 'Do you support security reviews?', a: 'Yes. Vendor assessments, onboarding artifacts, and access controls.' },
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

      <section className="relative py-16 sm:py-24 bg-[#020617]">
        <div className="max-w-3xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <Reveal y={20}>
            <div className="surface p-6 sm:p-12 gradient-border">
              <h3 className="text-xl sm:text-3xl font-display mb-6 sm:mb-8 text-center leading-tight">Tell us what you need — we’ll send a shortlist</h3>
              <form className="space-y-5 sm:space-y-6" onSubmit={(e) => { e.preventDefault(); setFormStatus('success'); }}>
                {formStatus === 'success' ? (
                  <div className="text-center py-10 sm:py-12">
                    <CheckCircle className="h-12 w-12 sm:h-16 sm:w-16 text-emerald-400 mx-auto mb-5 sm:mb-6" />
                    <h3 className="text-xl sm:text-2xl font-bold mb-2">Request Received</h3>
                    <p className="text-xs sm:text-sm text-white/60">We'll send your shortlist within 3-5 business days.</p>
                  </div>
                ) : (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                      <input required type="text" placeholder="Name*" className="form-control text-sm" />
                      <input required type="email" placeholder="Work Email*" className="form-control text-sm" />
                      <input type="text" placeholder="Company" className="form-control text-sm" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input required type="text" placeholder="Role(s) & seniority*" className="form-control md:col-span-2 text-sm" />
                    </div>
                    <textarea required rows={3} placeholder="Must-haves & project context*" className="form-control form-control--textarea text-sm" />
                    <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-[12px] bg-white text-slate-950 px-6 py-3 sm:py-3.5 text-sm sm:text-base font-semibold hover:bg-white/90 transition-all">
                      Submit & get a shortlist
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </>
                )}
              </form>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative py-16 md:py-32 overflow-hidden border-t border-white/5">
        <div className="relative z-10 max-w-4xl mx-auto px-3.5 sm:px-4 text-center">
          <h2 className="text-2xl xs:text-3xl md:text-6xl font-display mb-6 sm:mb-8 leading-tight">Ready to add horsepower to your roadmap?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-[12px] sm:rounded-[14px] bg-white text-slate-950 px-5 sm:px-10 py-3.5 sm:py-5 text-sm sm:text-base font-bold hover:bg-white/90 transition-all">
              Get a shortlist
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-[12px] sm:rounded-[14px] border border-white/20 bg-white/5 px-5 sm:px-10 py-3.5 sm:py-5 text-sm sm:text-base font-bold hover:bg-white/10 transition-colors">
              Talk to an expert
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
