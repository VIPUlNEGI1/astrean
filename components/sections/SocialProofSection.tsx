'use client';

import {
  SiAnthropic,
  SiDatabricks,
  SiGoogle,
  SiMeta,
  SiOpenai,
  SiSnowflake,
} from 'react-icons/si';
import { FaAws, FaMicrosoft } from 'react-icons/fa6';

const logos = [
  { name: 'OpenAI', Icon: SiOpenai },
  { name: 'Anthropic', Icon: SiAnthropic },
  { name: 'Google', Icon: SiGoogle },
  { name: 'Meta', Icon: SiMeta },
  { name: 'AWS', Icon: FaAws },
  { name: 'Microsoft', Icon: FaMicrosoft },
  { name: 'Snowflake', Icon: SiSnowflake },
  { name: 'Databricks', Icon: SiDatabricks },
];

export default function SocialProofSection() {
  return (
    <section className="relative py-12 md:py-16 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.02] via-transparent to-white/[0.02]" />
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6">
          <div>
            <p className="text-[10px] sm:text-[11px] font-semibold tracking-[0.25em] sm:tracking-[0.32em] uppercase text-white/60">
              Trusted by teams building with AI
            </p>
            <p className="text-xs sm:text-sm text-white/45 mt-1">
              From model ops to production rollouts, we ship with leaders across cloud and AI.
            </p>
          </div>
          <div className="hidden md:block h-px flex-1 bg-gradient-to-r from-white/10 via-white/10 to-transparent" />
        </div>

        <div className="relative mt-8 rounded-[14px] sm:rounded-[18px] border border-white/10 bg-white/[0.03] px-2 sm:px-3 py-4 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-16 bg-gradient-to-r from-[#020617] to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-16 bg-gradient-to-l from-[#020617] to-transparent z-10" />

          <div className="flex flex-col gap-3">
            <div className="flex gap-2.5 sm:gap-3 whitespace-nowrap will-change-transform animate-[marquee_20s_linear_infinite]">
              {[...logos, ...logos].map((logo, idx) => {
                const Icon = logo.Icon;
                return (
                <div
                  key={`lane1-${logo.name}-${idx}`}
                    className="shrink-0 rounded-full border border-white/10 bg-white/[0.05] px-3.5 sm:px-4 py-1.5 sm:py-2 hover:border-white/25 transition-colors"
                  >
                    <div className="flex items-center gap-1.5 sm:gap-2 text-white/80">
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" aria-hidden />
                      <span className="text-xs sm:text-sm font-semibold">{logo.name}</span>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex gap-2.5 sm:gap-3 whitespace-nowrap will-change-transform animate-[marqueeReverse_24s_linear_infinite]">
              {[...logos.slice().reverse(), ...logos.slice().reverse()].map((logo, idx) => {
                const Icon = logo.Icon;
                return (
                <div
                  key={`lane2-${logo.name}-${idx}`}
                    className="shrink-0 rounded-full border border-white/10 bg-white/[0.05] px-3.5 sm:px-4 py-1.5 sm:py-2 hover:border-white/25 transition-colors"
                  >
                    <div className="flex items-center gap-1.5 sm:gap-2 text-white/80">
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" aria-hidden />
                      <span className="text-xs sm:text-sm font-semibold">{logo.name}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes marqueeReverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}


