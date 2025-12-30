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
    <div className="relative group border border-white/10 bg-black/30 rounded-lg p-8 hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(79,70,229,0.2)]">
      <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-6">
        <Icon className="w-6 h-6 text-purple-400" />
      </div>
      <div className="text-3xl font-bold text-white/30 mb-4">{number}</div>
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-white/60">{description}</p>
    </div>
  );
}

