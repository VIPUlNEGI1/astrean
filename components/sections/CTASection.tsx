'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  onButtonClick?: () => void;
  href?: string;
}

export default function CTASection({
  title,
  description,
  buttonText,
  onButtonClick,
  href = '/contact',
}: CTASectionProps) {
  return (
    <section id="contact" className="relative py-16 md:py-24 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.18]" />
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(900px 500px at 50% 0%, rgba(34,211,238,0.18), transparent 60%), radial-gradient(900px 500px at 50% 100%, rgba(167,139,250,0.18), transparent 60%)',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-3.5 sm:px-6 lg:px-8">
        <div className="gradient-border">
          <div className="surface px-5 sm:px-12 py-10 sm:py-14 text-center">
            <h2 className="font-display text-balance text-2xl xs:text-3xl md:text-6xl font-normal tracking-[-0.02em] text-white leading-tight">
              {title}
            </h2>
            <p className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed text-white/70 max-w-2xl mx-auto">
              {description}
            </p>

            <div className="mt-8 flex flex-col xs:flex-row items-center justify-center gap-3 sm:gap-4">
              {onButtonClick ? (
                <button
                  onClick={onButtonClick}
                  className="btn-primary w-full xs:w-auto px-6 py-3.5 sm:py-4 text-sm sm:text-base"
                >
                  {buttonText}
                  <ArrowRight className="h-4 w-4 btn-icon" />
                </button>
              ) : (
                <Link
                  href={href}
                  className="btn-primary w-full xs:w-auto px-6 py-3.5 sm:py-4 text-sm sm:text-base"
                >
                  {buttonText}
                  <ArrowRight className="h-4 w-4 btn-icon" />
                </Link>
              )}

              <Link
                href="mailto:Prajwal@astrentech.com"
                className="btn-secondary w-full xs:w-auto px-6 py-3.5 sm:py-4 text-sm sm:text-base"
              >
                Email us
              </Link>
            </div>

            <p className="mt-4 text-xs text-white/50">
              Typical response time: under 24 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

