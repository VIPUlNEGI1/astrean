'use client';

import { Package, Users, Infinity } from 'lucide-react';
import PartnerCard from '../ui/PartnerCard';

const ecosystemFeatures = [
  {
    icon: Package,
    title: 'Robust Partner Network',
    description:
      'Leveraging a curated network of AI vendors and experts to deliver comprehensive solutions.',
  },
  {
    icon: Users,
    title: 'Community Engagements',
    description:
      'Actively participating in AI research and development communities to stay at the forefront.',
  },
  {
    icon: Infinity,
    title: 'Open-Source Contributions',
    description:
      'Contributing to and utilizing open-source AI frameworks and tools for innovation.',
  },
];

const partners = [
  {
    logo: <div className="text-2xl font-bold text-green-400">O</div>,
    name: 'OpenAI',
    description: 'Leading the way in generative AI and measuring value.',
    logoBgColor: 'bg-green-500/20',
  },
  {
    logo: <div className="text-2xl font-bold text-orange-400">A</div>,
    name: 'Anthropic',
    description: 'Innovations in the ethical and safe deployment of AI.',
    logoBgColor: 'bg-orange-500/20',
  },
  {
    logo: <div className="text-2xl font-bold text-blue-400">G</div>,
    name: 'Google',
    description: 'Pioneering advancements in AI research and cloud services.',
    logoBgColor: 'bg-blue-500/20',
  },
  {
    logo: <Infinity className="w-8 h-8 text-blue-400" />,
    name: 'Meta',
    description: 'Driving innovation in AI models and open-source initiatives.',
    logoBgColor: 'bg-blue-500/20',
  },
];

export default function EcosystemSection() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.18]" />
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 items-start mb-12 sm:mb-16">
          <div>
            <p className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] sm:tracking-[0.32em] uppercase text-white/60">
              Ecosystem
            </p>
            <h2 className="mt-4 text-2xl xs:text-3xl md:text-5xl font-semibold tracking-tight text-white leading-tight">
              We Orchestrate the Ecosystem
            </h2>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-white/70 leading-relaxed mb-8 max-w-xl">
              Our deep partnerships with leading AI providers, community and
              research organizations, and open-source initiatives allow us to
              build bespoke solutions that leverage the best of the AI landscape.
            </p>

            <div className="space-y-5 sm:space-y-6 mb-8">
              {ecosystemFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start gap-3.5 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-[12px] sm:rounded-[16px] border border-white/10 bg-white/5 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white/80" />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base md:text-lg font-semibold tracking-tight mb-0.5 text-white">
                        {feature.title}
                      </h3>
                      <p className="text-white/65 text-xs sm:text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <button className="w-full sm:w-auto inline-flex items-center justify-center rounded-[12px] sm:rounded-[14px] bg-white text-slate-950 px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold shadow-lg shadow-black/30 transition hover:bg-white/90">
              Explore our partnerships
            </button>
          </div>

          <div className="mt-8 lg:mt-0">
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 sm:gap-6">
              {partners.map((partner, index) => (
                <PartnerCard
                  key={index}
                  logo={partner.logo}
                  name={partner.name}
                  description={partner.description}
                  logoBgColor={partner.logoBgColor}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

