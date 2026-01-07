'use client';

import { Star } from 'lucide-react';

const testimonials = [
  {
    quote:
      'We went from “ideas in slides” to production workflows in weeks. The team built with rigor and shipped with velocity.',
    name: 'Procurement Lead',
    role: 'Mid-market SaaS',
  },
  {
    quote:
      'Strong engineering, clear communication, and a real focus on outcomes. Our cycle time dropped immediately.',
    name: 'VP Engineering',
    role: 'Fintech',
  },
  {
    quote:
      'They helped us align stakeholders, define the roadmap, and deliver AI systems that are measurable and safe.',
    name: 'Head of Ops',
    role: 'Enterprise Services',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] sm:tracking-[0.32em] uppercase text-white/60">
            Customer stories
          </p>
          <h2 className="mt-4 text-2xl xs:text-3xl md:text-5xl font-semibold tracking-tight text-white leading-tight">
            Outcomes teams can feel
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed text-white/70">
            We don’t sell a vague promise. We build systems that move the needle:
            speed, quality, and measurable impact.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.quote} className="surface surface-hover shine p-5 sm:p-7">
              <div className="flex items-center gap-1 text-white/70">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-white/10" />
                ))}
              </div>
              <blockquote className="mt-4 text-xs sm:text-sm leading-relaxed text-white/75">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 border-t border-white/10 pt-4">
                <div className="text-xs sm:text-sm font-semibold text-white">{t.name}</div>
                <div className="text-xs sm:text-sm text-white/60">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}


