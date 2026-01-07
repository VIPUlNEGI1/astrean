'use client';

import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ServiceCard({
  number,
  icon: Icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className="group relative surface surface-hover shine p-4.5 sm:p-6">
      <div
        className="pointer-events-none absolute inset-0 rounded-[var(--radius-lg)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(700px 240px at 30% 0%, rgba(34,211,238,0.18), transparent 60%), radial-gradient(700px 240px at 70% 0%, rgba(167,139,250,0.16), transparent 60%)',
        }}
      />
      <div className="relative z-10 flex flex-col xs:flex-row items-start gap-4">
        <div className="mt-0.5 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-[12px] sm:rounded-[14px] border border-white/10 bg-white/5 shrink-0">
          <Icon className="h-4.5 w-4.5 sm:h-5 sm:w-5 text-white/80" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="mb-2 flex items-center gap-3">
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] sm:tracking-[0.35em] text-white/45">
              {number}
            </span>
            <span className="h-px flex-1 bg-white/10" />
          </div>
          <h3 className="text-sm sm:text-base md:text-lg font-semibold tracking-tight text-white">
            {title}
          </h3>
          <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm leading-relaxed text-white/65">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

