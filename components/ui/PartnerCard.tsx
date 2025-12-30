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
    <div className="relative group border border-white/10 bg-black/30 rounded-lg p-8 hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(79,70,229,0.2)]">
      <div
        className={`w-16 h-16 rounded-full ${logoBgColor} flex items-center justify-center mb-4 mx-auto`}
      >
        {logo}
      </div>
      <h3 className="text-xl font-bold text-center mb-2 text-white">{name}</h3>
      <p className="text-white/60 text-sm text-center">{description}</p>
    </div>
  );
}

