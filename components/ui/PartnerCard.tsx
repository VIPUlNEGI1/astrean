'use client';

import { ReactNode } from 'react';

interface PartnerCardProps {
  logo: ReactNode;
  name: string;
  description: string;
  logoBgColor?: string;
}

export default function PartnerCard({
  logo,
  name,
  description,
  logoBgColor = 'bg-green-500/20',
}: PartnerCardProps) {
  return (
    <div className="group relative surface surface-hover shine p-5 sm:p-7 text-center">
      <div className="pointer-events-none absolute inset-0 rounded-[var(--radius-lg)] bg-gradient-to-b from-white/[0.06] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div
        className={`relative mx-auto mb-3 sm:mb-4 flex h-10 w-10 sm:h-14 sm:w-14 items-center justify-center rounded-full border border-white/10 ${logoBgColor}`}
      >
        <div className="scale-75 sm:scale-100">{logo}</div>
      </div>
      <h3 className="relative text-sm sm:text-base font-semibold tracking-tight text-white">
        {name}
      </h3>
      <p className="relative mt-1.5 sm:mt-2 text-xs sm:text-sm leading-relaxed text-white/65 line-clamp-2 sm:line-clamp-none">
        {description}
      </p>
    </div>
  );
}

