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
    <div className="relative group border border-red-500/20 bg-black/30 rounded-lg p-8 hover:border-red-500/40 transition-all duration-300">
      <div className="w-12 h-12 rounded-lg bg-red-500/20 flex items-center justify-center mb-6">
        <Icon className="w-6 h-6 text-red-400" />
      </div>
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-white/60">{description}</p>
    </div>
  );
}

