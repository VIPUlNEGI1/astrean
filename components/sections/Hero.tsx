'use client';

interface Stat {
  value: string;
  label: string;
}

interface HeroProps {
  title: string;
  description: string;
  stats: Stat[];
}

export default function Hero({ title, description, stats }: HeroProps) {
  return (
    <section className="relative isolate overflow-hidden pt-20 pb-16 md:pt-28 md:pb-24">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black"></div>

      {/* Radial Glow Effects */}
      <div
        className="pointer-events-none absolute inset-0 z-[2]"
        style={{
          background: `
            radial-gradient(600px 600px at 60% 10%, rgba(79, 70, 229, 0.20) 0%, rgba(0, 0, 0, 0) 60%),
            radial-gradient(400px 400px at 20% 30%, rgba(14, 165, 233, 0.20) 0%, rgba(0, 0, 0, 0) 55%)
          `,
          mixBlendMode: 'screen',
          filter: 'blur(2px)',
        }}
      ></div>

      <div className="relative z-[3] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black leading-[0.95] tracking-tight text-white">
            {title}
          </h1>
          <p className="mt-6 text-base md:text-lg text-white/80 max-w-2xl mx-auto">
            {description}
          </p>

          {/* Stats */}
          <section aria-label="Key impact metrics" className="py-8 mt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl md:text-6xl font-black mb-2 text-white">
                    {stat.value}
                  </div>
                  <div className="text-white/70 text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

