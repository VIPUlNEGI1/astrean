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
    <div className="relative group border border-white/10 bg-black/30 rounded-lg p-6 hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(79,70,229,0.3)]">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
            <Icon className="w-5 h-5 text-purple-400" />
          </div>
          <span className="text-2xl font-bold text-white/30">{number}</span>
        </div>
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-white/60 text-sm">{description}</p>
      </div>
    </div>
  );
}

