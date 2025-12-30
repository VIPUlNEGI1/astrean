'use client';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  titleGradient?: string;
  description: string;
}

export default function SectionHeader({
  badge,
  title,
  titleGradient,
  description,
}: SectionHeaderProps) {
  return (
    <div className="max-w-3xl mx-auto text-center mb-16">
      {badge && (
        <div className="mb-6 flex justify-center">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80">
            {badge}
          </span>
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
        {title}
        {titleGradient && (
          <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
            {' '}
            {titleGradient}
          </span>
        )}
      </h2>
      <p className="text-white/70 text-lg">{description}</p>
    </div>
  );
}

