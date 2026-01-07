'use client';

import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

interface Stat {
  value: string;
  label: string;
}

interface HeroProps {
  title: string;
  description: string;
  stats: Stat[];
  titleClassName?: string;
}

export default function Hero({ title, description, stats, titleClassName }: HeroProps) {
  const showStats = stats?.length > 0;
  return (
    <section className="relative isolate overflow-hidden min-h-[100svh] flex flex-col justify-center pt-20 pb-12 md:pt-28 md:pb-20">
      {/* Backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.15]" />
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(900px 520px at 12% 12%, rgba(34, 211, 238, 0.8), transparent 60%), radial-gradient(950px 600px at 88% 0%, rgba(167, 139, 250, 0.6), transparent 62%), radial-gradient(800px 520px at 55% 95%, rgba(52,211,153,0.15), transparent 55%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-25 mix-blend-screen"
        aria-hidden="true"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, rgba(255,255,255,0.08) 0, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 160px)',
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/70" />
      <div
        className="pointer-events-none absolute left-1/2 top-[-220px] h-[520px] w-[520px] -translate-x-1/2 rounded-full blur-3xl opacity-70 float-slow"
        aria-hidden="true"
        style={{
          background:
            'conic-gradient(from 180deg, rgba(34,211,238,0.55), rgba(167,139,250,0.55), rgba(52,211,153,0.45), rgba(34,211,238,0.55))',
        }}
      />

      <div className="relative z-[2] mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        {showStats ? (
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
            {/* Copy */}
            <div className="text-center lg:text-left">
            <div className="mb-5 flex justify-center lg:justify-start">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[9px] sm:text-[11px] font-semibold tracking-[0.2em] sm:tracking-[0.28em] text-white/80 uppercase">
                <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-white/70" />
                AI-first delivery, enterprise-grade
              </span>
            </div>

            <h1
              className={`font-display text-balance text-2xl xs:text-3xl md:text-5xl font-semibold tracking-tight text-white motion-safe:animate-[rise-in_700ms_cubic-bezier(0.22,1,0.36,1)_both] ${titleClassName ?? ''}`}
              style={{ animationDelay: '40ms' }}
            >
              {title}
            </h1>

            <p
              className="mt-5 sm:mt-7 text-sm sm:text-base md:text-lg leading-relaxed text-white/72 max-w-xl mx-auto lg:mx-0 motion-safe:animate-[rise-in_700ms_cubic-bezier(0.22,1,0.36,1)_both]"
              style={{ animationDelay: '120ms' }}
            >
              {description}
            </p>

            <div
              className="mt-8 flex flex-col xs:flex-row items-center justify-center lg:justify-start gap-3 motion-safe:animate-[rise-in_700ms_cubic-bezier(0.22,1,0.36,1)_both]"
              style={{ animationDelay: '180ms' }}
            >
              <Link
                href="/contact"
                className="btn-primary w-full xs:w-auto"
              >
                Request a consult
                <ArrowRight className="h-4 w-4 btn-icon" />
              </Link>
              <Link
                href="/#services"
                className="btn-secondary w-full xs:w-auto"
              >
                Explore services
              </Link>
            </div>

            <section
              aria-label="Key impact metrics"
              className="mt-10 sm:mt-12 motion-safe:animate-[rise-in_700ms_cubic-bezier(0.22,1,0.36,1)_both]"
              style={{ animationDelay: '240ms' }}
            >
              <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="surface p-4 sm:p-5 text-center sm:text-left"
                  >
                    <div className="font-display text-2xl sm:text-3xl md:text-4xl font-normal tracking-[-0.01em] text-white">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-xs sm:text-sm text-white/65">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

            {/* Preview */}
            <div className="relative motion-safe:animate-[rise-in_700ms_cubic-bezier(0.22,1,0.36,1)_both]" style={{ animationDelay: '160ms' }}>
              <div className="gradient-border">
                <div className="surface p-4 sm:p-7 md:p-8">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[9px] sm:text-[11px] font-semibold tracking-[0.2em] sm:tracking-[0.28em] text-white/60 uppercase">
                        Request access
                      </p>
                      <h3 className="mt-2 text-base sm:text-lg font-semibold tracking-tight text-white">
                        Ship AI that holds up in production
                      </h3>
                    </div>
                    <div className="hidden sm:flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-[12px] md:rounded-[14px] border border-white/10 bg-white/5">
                      <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-white/80" />
                    </div>
                  </div>

                  <div className="mt-5 sm:mt-6 grid gap-2.5 sm:gap-3">
                    {[
                      {
                        k: 'Discovery & roadmap',
                        v: 'Priorities, timelines, and success metrics',
                      },
                      {
                        k: 'AI engineering',
                        v: 'Evaluation, safety, and scalable architecture',
                      },
                      {
                        k: 'Automation & ops',
                        v: 'Orchestration that saves real hours',
                      },
                    ].map((row) => (
                      <div
                        key={row.k}
                        className="rounded-[12px] sm:rounded-[16px] border border-white/10 bg-white/[0.03] p-3 sm:p-4"
                      >
                        <div className="text-xs sm:text-sm font-semibold text-white">
                          {row.k}
                        </div>
                        <div className="mt-1 text-xs sm:text-sm text-white/65">
                          {row.v}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 sm:mt-6 flex flex-col xs:flex-row items-stretch sm:items-center gap-3">
                    <div className="flex-1 rounded-[12px] sm:rounded-[14px] border border-white/10 bg-white/[0.03] px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-white/70">
                      Business email
                    </div>
                    <Link
                      href="/contact"
                      className="btn-primary"
                    >
                      Request access
                      <ArrowRight className="h-4 w-4 btn-icon" />
                    </Link>
                  </div>

                  <p className="mt-3 text-[10px] sm:text-xs text-white/50 text-center xs:text-left">
                    No spam. A crisp plan and a clear next step.
                  </p>
                </div>
              </div>
              <div
                className="pointer-events-none absolute -inset-10 -z-10 blur-3xl opacity-30"
                aria-hidden="true"
                style={{
                  background:
                    'radial-gradient(520px 520px at 40% 40%, rgba(34,211,238,0.18), transparent 60%), radial-gradient(520px 520px at 70% 60%, rgba(167,139,250,0.18), transparent 60%)',
                }}
              />
            </div>
          </div>
        ) : (
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[9px] sm:text-[11px] font-semibold tracking-[0.2em] sm:tracking-[0.28em] text-white/80 uppercase">
                <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-white/70" />
                AI-first strategy & engineering
              </span>
            </div>

            <h1
              className={`font-display text-balance text-2xl xs:text-3xl md:text-5xl font-semibold tracking-tight text-white motion-safe:animate-[rise-in_750ms_cubic-bezier(0.22,1,0.36,1)_both] ${titleClassName ?? ''}`}
              style={{ animationDelay: '40ms' }}
            >
              {title}
            </h1>

            <p
              className="mt-6 sm:mt-7 text-sm sm:text-base md:text-lg leading-relaxed text-white/72 max-w-2xl mx-auto motion-safe:animate-[rise-in_750ms_cubic-bezier(0.22,1,0.36,1)_both]"
              style={{ animationDelay: '140ms' }}
            >
              {description}
            </p>

            <div
              className="mt-8 sm:mt-10 flex flex-col xs:flex-row items-center justify-center gap-3 motion-safe:animate-[rise-in_750ms_cubic-bezier(0.22,1,0.36,1)_both]"
              style={{ animationDelay: '220ms' }}
            >
              <Link
                href="/contact"
                className="btn-primary w-full xs:w-auto"
              >
                Request Demo
                <ArrowRight className="h-4 w-4 btn-icon" />
              </Link>
              <Link
                href="/#services"
                className="btn-secondary w-full xs:w-auto"
              >
                Explore services
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

