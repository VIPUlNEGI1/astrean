'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';

import Reveal from '@/components/motion/Reveal';

export type SystematicApproachStep = {
  number: string;
  title: string;
  description: string;
};

type SystematicApproachFlowProps = {
  steps: SystematicApproachStep[];
};

function prefersReducedMotion() {
  if (typeof window === 'undefined') return true;
  return window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false;
}

type Indicator = { left: number; width: number };

function getDeliverables(step: SystematicApproachStep): string[] {
  // Keep this intentionally “human”: practical outputs rather than buzzwords.
  switch (step.number) {
    case '01':
      return [
        'Alignment on goals, constraints, and success metrics',
        'A shortlist of opportunities grounded in your workflow',
        'A clear 30/60/90-day plan with owners',
      ];
    case '02':
      return [
        'Capability gap map (people, process, tooling)',
        'Operating model for how work gets done',
        'Hiring/upskilling plan that fits your org',
      ];
    case '03':
      return [
        'Target architecture + integration approach',
        'Data readiness checklist and next actions',
        'Security/privacy considerations upfront',
      ];
    case '04':
      return [
        'Prioritized use-case backlog (value × effort)',
        'Definition of “done” for each initiative',
        'Pilot candidates with measurable outcomes',
      ];
    case '05':
      return [
        'Governance & decision-making cadence',
        'Risk, compliance, and review checkpoints',
        'A delivery plan your teams can execute',
      ];
    case '06':
      return [
        'Working increments shipped regularly',
        'MLOps / deployment approach that’s maintainable',
        'Templates + playbooks to scale delivery',
      ];
    case '07':
      return [
        'Instrumentation and data-quality guardrails',
        'A feedback loop from users to iteration',
        'Dashboards that tie work to business impact',
      ];
    case '08':
      return [
        'Continuous improvement rhythm (measure → learn → ship)',
        'Post-launch reviews and iteration backlog',
        'A roadmap that stays current as reality changes',
      ];
    default:
      return ['Clear deliverables', 'Shared ownership', 'Measured outcomes'];
  }
}

export default function SystematicApproachFlow({
  steps,
}: SystematicApproachFlowProps) {
  const safeSteps = steps ?? [];
  const [activeIdx, setActiveIdx] = useState(0);
  const [indicator, setIndicator] = useState<Indicator>({ left: 0, width: 0 });
  const listRef = useRef<HTMLDivElement | null>(null);
  const btnRefs = useRef<Array<HTMLButtonElement | null>>([]);

  useEffect(() => {
    if (!safeSteps.length) return;
    // Reset if data changes.
    setActiveIdx(0);
  }, [safeSteps.length]);

  const reduced = useMemo(() => prefersReducedMotion(), []);

  const active = safeSteps[Math.min(Math.max(activeIdx, 0), safeSteps.length - 1)];
  const deliverables = useMemo(() => getDeliverables(active), [active]);

  // Vertical indicator for the left checklist (top + height).
  const updateIndicator = () => {
    const list = listRef.current;
    const btn = btnRefs.current[activeIdx];
    if (!list || !btn) return;
    const listRect = list.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();
    const top = btnRect.top - listRect.top + list.scrollTop;
    setIndicator({ left: top, width: btnRect.height });
  };

  useEffect(() => {
    updateIndicator();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIdx, safeSteps.length]);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    const onScroll = () => updateIndicator();
    list.addEventListener('scroll', onScroll, { passive: true });

    const ro = new ResizeObserver(() => updateIndicator());
    ro.observe(list);
    btnRefs.current.forEach((b) => b && ro.observe(b));

    return () => {
      list.removeEventListener('scroll', onScroll);
      ro.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [safeSteps.length, activeIdx]);

  if (!safeSteps.length) return null;

  return (
    <div className="gradient-border overflow-hidden">
      <div className="surface p-3.5 sm:p-7">
        {/* Editorial checklist: pick a step on the left, read the outputs on the right. */}
        <div className="rounded-[14px] sm:rounded-[var(--radius-lg)] border border-white/10 bg-white/[0.02]">
          <div className="px-3.5 pt-4 sm:px-6 sm:pt-5">
            <p className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] sm:tracking-[0.32em] uppercase text-white/60">
              A guided journey
            </p>
            <p className="mt-2 max-w-2xl text-xs sm:text-sm leading-relaxed text-white/65">
              A calm, practical checklist — designed for real teams, real
              constraints, and measurable outcomes.
            </p>
          </div>

          <div className="mt-4 border-t border-white/10">
            <div className="grid gap-6 px-3.5 py-4 sm:px-6 sm:py-6 md:grid-cols-[320px_1fr]">
              {/* Left: checklist */}
              <div className="relative">
                <div className="mb-2 flex items-center justify-between px-1">
                  <p className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] sm:tracking-[0.28em] uppercase text-white/55">
                    Phases
                  </p>
                  <p className="text-[10px] sm:text-xs text-white/45">
                    {Math.min(activeIdx + 1, safeSteps.length)}/{safeSteps.length}
                  </p>
                </div>

                <div className="relative">
                  {/* Highlight */}
                  <div
                    aria-hidden="true"
                    className={[
                      'pointer-events-none absolute left-0 right-0 rounded-[12px] sm:rounded-[14px] border border-white/10 bg-white/[0.05]',
                      reduced ? '' : 'transition-[transform,height] duration-250 ease-out',
                    ].join(' ')}
                    style={{
                      height: `${indicator.width}px`,
                      transform: `translateY(${indicator.left}px)`,
                    }}
                  />

                  <div
                    ref={listRef}
                    className="relative max-h-[220px] sm:max-h-[260px] overflow-auto pr-1 custom-scrollbar"
                    aria-label="AI transformation phases"
                  >
                    <div className="space-y-1.5 sm:space-y-2">
                      {safeSteps.map((s, idx) => {
                        const isActive = idx === activeIdx;
                        return (
                          <button
                            key={`${s.number}-${s.title}`}
                            ref={(el) => {
                              btnRefs.current[idx] = el;
                            }}
                            onClick={() => setActiveIdx(idx)}
                            className={[
                              'relative w-full rounded-[12px] sm:rounded-[14px] px-3 sm:px-4 py-2.5 sm:py-3 text-left',
                              'transition-colors outline-none',
                              isActive ? 'text-white' : 'text-white/75 hover:text-white',
                              'focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/40',
                            ].join(' ')}
                          >
                            <div className="flex items-start gap-2.5 sm:gap-3">
                              <span className="mt-0.5 text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] sm:tracking-[0.35em] text-white/45 shrink-0">
                                {s.number}
                              </span>
                              <div className="min-w-0">
                                <p className="text-sm font-medium tracking-tight truncate sm:whitespace-normal">
                                  {s.title}
                                </p>
                                <p className="mt-0.5 line-clamp-1 sm:line-clamp-2 text-[11px] sm:text-xs leading-relaxed text-white/55">
                                  {s.description}
                                </p>
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: content */}
              <div className="min-w-0">
                <Reveal
                  key={`${active.number}-${active.title}`}
                  className="relative overflow-hidden rounded-[14px] sm:rounded-[var(--radius-lg)] border border-white/10 bg-white/[0.03] p-4 sm:p-6"
                  y={10}
                  blurPx={10}
                >
                  <div
                    className="pointer-events-none absolute inset-0 opacity-90"
                    aria-hidden="true"
                    style={{
                      background:
                        'radial-gradient(900px 520px at 10% 0%, rgba(255,255,255,0.08), transparent 60%), radial-gradient(900px 520px at 90% 10%, rgba(255,255,255,0.06), transparent 60%)',
                    }}
                  />

                  <div className="relative z-10">
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] sm:tracking-[0.35em] text-white/45">
                        {active.number}
                      </span>
                      <span className="h-px flex-1 bg-white/10" />
                    </div>

                    <h3 className="mt-3 text-base sm:text-lg md:text-xl font-semibold tracking-tight text-white">
                      {active.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-white/70">
                      {active.description}
                    </p>

                    <div className="mt-5 rounded-[12px] sm:rounded-[var(--radius-md)] border border-white/10 bg-white/[0.02] p-3.5 sm:p-4">
                      <p className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] sm:tracking-[0.28em] uppercase text-white/55">
                        What you get
                      </p>
                      <ul className="mt-3 grid gap-2 md:grid-cols-2">
                        {deliverables.slice(0, 4).map((d) => (
                          <li key={d} className="flex gap-2 text-[11px] sm:text-sm text-white/70">
                            <span className="mt-[6px] sm:mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-white/35" />
                            <span className="leading-relaxed">{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


