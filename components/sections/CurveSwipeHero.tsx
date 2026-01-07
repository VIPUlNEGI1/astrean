'use client';

import Link from 'next/link';
import CurveSwipe from '@/components/motion/CurveSwipe';
import Hero from '@/components/sections/Hero';

type Stat = {
  value: string;
  label: string;
};

type CurveSwipeHeroProps = {
  title: string;
  description: string;
  stats: Stat[];
};

export default function CurveSwipeHero({
  title,
  description,
  stats,
}: CurveSwipeHeroProps) {
  return (
    <CurveSwipe
      swipeDistanceVh={110}
      holdDistanceVh={35}
      curtainFill="rgb(2 6 23)"
      top={
        <section className="relative flex min-h-[100svh] flex-col justify-center bg-[#04060c] pt-16 text-white overflow-hidden">
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden="true"
            style={{
              background:
                'radial-gradient(900px 520px at 12% 12%, rgba(34, 211, 238, 0.82), transparent 60%), radial-gradient(950px 600px at 88% 0%, rgba(167, 139, 250, 0.64), transparent 62%), radial-gradient(800px 520px at 55% 95%, rgba(52,211,153,0.12), transparent 55%)',
            }}
          />
          <div
            className="pointer-events-none absolute inset-0 opacity-25 mix-blend-screen"
            aria-hidden="true"
            style={{
              backgroundImage:
                'repeating-linear-gradient(90deg, rgba(255,255,255,0.08) 0, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 160px)',
              filter: 'blur(0.3px)',
            }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/70" />

          <div className="relative z-[2] mx-auto max-w-5xl px-3.5 sm:px-6 text-center space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2 sm:gap-3 rounded-full border border-white/10 bg-white/5 px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-sm font-semibold text-white/80">
              <span className="rounded-full bg-white/10 px-2.5 sm:px-3 py-1 text-[9px] sm:text-[11px] tracking-[0.2em] sm:tracking-[0.28em] uppercase shrink-0">
                News
              </span>
              <span className="text-white/75 truncate sm:whitespace-normal">Metal raises $5M from Base10</span>
            </div>

            <h1 className="font-display text-balance text-2xl xs:text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
              {title}
            </h1>

            <p className="mx-auto max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed text-white/75 px-1 sm:px-0">
              {description}
            </p>

            <div className="flex items-center justify-center">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-white px-6 sm:px-7 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-slate-900 shadow-xl transition hover:bg-white/90"
              >
                Book a Demo
              </Link>
            </div>
          </div>

          <div className="relative z-[2] mt-10 sm:mt-14 flex flex-col items-center gap-4 sm:gap-5 px-3.5 sm:px-6">
            <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] sm:tracking-[0.32em] text-white/60 text-center">
              Trusted by top Private Equity firms
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-8 text-[10px] sm:text-sm font-semibold uppercase tracking-[0.15em] sm:tracking-[0.22em] text-white/70">
              {['Clearlake', 'Berkshire Partners', 'Blue Wolf'].map((logo) => (
                <span
                  key={logo}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 sm:px-4 py-1.5 sm:py-2"
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </section>
      }
      bottom={
        <Hero
          title={title}
          description={description}
          stats={stats}
          titleClassName="font-display text-balance text-2xl xs:text-3xl md:text-5xl font-semibold tracking-tight text-white"
        />
      }
    />
  );
}


