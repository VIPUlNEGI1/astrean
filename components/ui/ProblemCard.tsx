'use client';

import { LucideIcon } from 'lucide-react';

interface ProblemCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ProblemCard({
  icon: Icon,
  title,
  description,
}: ProblemCardProps) {
  return (
    <div className="group relative surface surface-hover shine p-5 sm:p-8">
      <div
        className="pointer-events-none absolute inset-0 rounded-[var(--radius-lg)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(700px 260px at 50% 0%, rgba(251,113,133,0.16), transparent 60%)',
        }}
      />
      <div className="relative z-10 flex flex-col items-center xs:items-start text-center xs:text-left">
        <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-[12px] sm:rounded-[16px] border border-white/10 bg-white/5 shrink-0">
          <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-rose-300" />
        </div>
        <h3 className="mt-4 sm:mt-6 text-base sm:text-lg font-semibold tracking-tight text-white">
          {title}
        </h3>
        <p className="mt-2 text-xs sm:text-sm leading-relaxed text-white/65">
          {description}
        </p>
      </div>
    </div>
  );
}

