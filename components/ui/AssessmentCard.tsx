'use client';

import { LucideIcon } from 'lucide-react';

interface AssessmentCardProps {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function AssessmentCard({
  number,
  icon: Icon,
  title,
  description,
}: AssessmentCardProps) {
  return (
    <div className="group relative surface surface-hover shine p-5 sm:p-8">
      <div className="relative z-10">
        <div className="flex items-center justify-between gap-4">
          <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-[12px] sm:rounded-[16px] border border-white/10 bg-white/5 shrink-0">
            <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-white/80" />
          </div>
          <div className="text-[10px] sm:text-sm font-semibold tracking-[0.25em] sm:tracking-[0.35em] text-white/45">
            {number}
          </div>
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

