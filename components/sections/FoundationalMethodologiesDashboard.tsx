'use client';

import { useMemo, useState } from 'react';

import Reveal from '@/components/motion/Reveal';

type Step = {
  id: string;
  title: string;
  summary: string;
  points: string[];
};

const steps: Step[] = [
  {
    id: '01',
    title: 'Vision and Strategy',
    summary: 'Outcomes-first compass and North Star metrics.',
    points: [
      'Team aligns executive sponsors around a common language for AI, shared principles, and clearly bounded transformation themes so that every initiative supports the same strategic narrative. Forward deployed engineers establish a concise set of north star metrics and supporting indicators that guide all investment decisions, inform trade offs, and create visible momentum across business units.',
      // 'Set North Star + indicators to steer every bet.',
    ],
  },
  {
    id: '02',
    title: 'Capability Readiness',
    summary: 'Clear-eyed maturity check and gap plan.',
    points: [
      'Team benchmark the organization against a proven maturity framework, highlight capability gaps, and surface operational, regulatory, and security risks that must be addressed early. We synthesize these insights into a focused readiness view that directs capital, leadership attention, and change efforts to the few levers that unlock disproportionate value.',
    ],
  },
  {
    id: '03',
    title: 'Architecture and Systems',
    summary: 'Foundation that keeps data and flow coherent.',
    points: [
      'Architect maps how core systems, platforms, and operational workflows connect across the value chain so that AI solutions can consume and act on data without creating fragmentation.Our team defines the enterprise data model and establishes clear standards for interoperability, security, governance, observability, and model lifecycle management, resulting in a reference architecture that guides every subsequent build',
       
    ],
  },
  {
    id: '04',
    title: 'Use Case Portfolio',
    summary: 'Balance quick wins with bold bets.',
    points: [
      'We curate a balanced mix of quick win initiatives that demonstrate confidence and deeper strategic bets that reshape how the organization sells, serves, operates, and decides.PM translates priority opportunities into concise business cases with explicit value drivers, ownership, and adoption pathways that the executive team can commit to',
      
    ],
  },
  {
    id: '05',
    title: 'Governance and Execution',
    summary: 'Decision rights, guardrails, and incentives.',
    points: [
      'We define decision rights, escalation routes, and compliance guardrails, and convene a cross functional leadership group spanning business, data, technology, security, and change. Our team establishes incentives and performance indicators across functions so that teams are rewarded for shared outcomes, not isolated experiments, ensuring coordinated execution at scale',
    ],
  },
  {
    id: '06',
    title: 'Scalable Execution',
    summary: 'One playbook from problem to production.',
    points: [
      'Deployed engineers standardize the journey from problem discovery through design, data preparation, experimentation, model development, evaluation, and deployment, with clear quality checkpoints at each stage. Team enables progressive rollout across sites, regions, or product lines and embed communication, training, and support into every release so that change is absorbed and usage becomes routine',
       
    ],
  },
  {
    id: '07',
    title: 'Data and Intelligence Activation',
    summary: 'Ship decision surfaces that people actually use.',
    points: [
      'PM deploys decision surfaces such as analyst ready views, operational dashboards, alerting mechanisms, copilots, and assistants that embed intelligence directly into the daily flow of work. Our team connects these insights with continuous improvement cycles so that operations, commercial teams, and leadership see measurable performance uplift month after month',
       
    ],
  },
  {
    id: '08',
    title: 'Feedback and Adaptation Loops',
    summary: 'Stay aligned to signals, not guesses.',
    points: [
      'Institutionalize structured feedback channels from frontline teams and owners back into product, data, and leadership groups, ensuring rapid course correction. Engineers run regular portfolio and strategy reviews to retire low value initiatives, scale proven patterns, and keep the AI roadmap tightly aligned with evolving market dynamics and organizational ambition',
       
    ],
  },
];

export default function FoundationalMethodologiesDashboard() {
  const [activeId, setActiveId] = useState(steps[0]?.id ?? '01');
  const activeStep = useMemo(
    () => steps.find((s) => s.id === activeId) ?? steps[0],
    [activeId],
  );

  return (
    <section className="relative py-16 md:py-28 bg-gradient-to-b from-black/30 via-[#0a0f1f]/40 to-black/20 overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/10 to-transparent blur-3xl" />
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative">
        <Reveal y={16}>
          <div className="max-w-3xl space-y-3">
            <p className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] sm:tracking-[0.32em] uppercase text-white/60">
              Our Foundational Methodologies
            </p>
            <h2 className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight">
              Systematic Approach to AI Transformation
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-white/70 leading-relaxed">
              An 8-step path from strategy to scaled AI value—concise, repeatable, and measurable.
            </p>
          </div>
        </Reveal>

        {/* Interactive navigator + detail view */}
        <div className="mt-10 sm:mt-14 grid gap-6 sm:gap-8 lg:grid-cols-[320px_1fr] xl:grid-cols-[360px_1fr]">
          <div className="surface border border-white/10 bg-white/[0.03] rounded-[18px] p-3.5 sm:p-6">
            <div className="flex items-center justify-between mb-4 px-1">
              <p className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] sm:tracking-[0.28em] uppercase text-white/55">
                Phases
              </p>
              <span className="text-[10px] sm:text-xs text-white/45 font-medium">
                {activeStep?.id}/{steps.length}
              </span>
            </div>
            <div className="space-y-2 max-h-[350px] sm:max-h-[460px] overflow-auto pr-1 custom-scrollbar">
              {steps.map((step) => {
                const isActive = step.id === activeId;
                return (
                  <button
                    key={step.id}
                    onClick={() => setActiveId(step.id)}
                    className={[
                      'w-full text-left rounded-[12px] sm:rounded-[14px] px-3 sm:px-4 py-2.5 sm:py-3 border transition-all outline-none',
                      isActive
                        ? 'border-white/20 bg-white/[0.08] shadow-[0_8px_30px_-12px_rgba(59,130,246,0.4)]'
                        : 'border-white/8 bg-white/[0.03] hover:border-white/16 hover:bg-white/[0.05]',
                    ].join(' ')}
                  >
                    <div className="flex items-start gap-2.5 sm:gap-3">
                      <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] sm:tracking-[0.32em] text-white/45 mt-1 shrink-0">
                        {step.id}
                      </span>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-white truncate sm:whitespace-normal">{step.title}</p>
                        <p className="mt-0.5 text-[11px] sm:text-xs text-white/60 line-clamp-1 sm:line-clamp-2">{step.summary}</p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <Reveal y={16}>
            <div className="relative overflow-hidden rounded-[18px] sm:rounded-[20px] border border-white/12 bg-white/[0.04] p-4 sm:p-7 shadow-[0_18px_50px_-30px_rgba(0,0,0,0.8)]">
              <div
                className="pointer-events-none absolute inset-0 opacity-60 sm:opacity-70 mix-blend-screen"
                aria-hidden="true"
                style={{
                  background:
                    'radial-gradient(80% 70% at 20% 20%, rgba(168,85,247,0.16), transparent 55%), radial-gradient(90% 70% at 80% 20%, rgba(34,211,238,0.14), transparent 55%)',
                }}
              />

              <div className="relative z-10 space-y-4 sm:space-y-5">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[9px] sm:text-[11px] font-semibold tracking-[0.2em] sm:tracking-[0.32em] uppercase text-white/60">
                  {activeStep?.id?.padStart(2, '0')}
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:justify-between">
                  <h3 className="text-xl sm:text-2xl font-display leading-tight text-white">
                    {activeStep?.title}
                  </h3>
                  <span className="h-1 sm:h-1.5 w-16 sm:w-20 rounded-full bg-gradient-to-r from-purple-400 via-cyan-400 to-emerald-400 shrink-0" />
                </div>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed">{activeStep?.summary}</p>

                <div className="mt-4 grid gap-3">
                  {activeStep?.points.map((point, idx) => (
                    <div
                      key={idx}
                      className="flex gap-3 rounded-[12px] sm:rounded-[14px] p-0"
                    >
                        <p className="text-xs sm:text-sm text-white/80 leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

