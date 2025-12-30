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
    <section className="relative py-24 bg-[#020617]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">
              We Orchestrate the Ecosystem
            </h2>
            <p className="text-purple-400 text-xl mb-6 font-semibold">
              Not Just Use It
            </p>
            <p className="text-white/70 text-lg mb-8">
              Our deep partnerships with leading AI providers, community and
              research organizations, and open-source initiatives allow us to
              build bespoke solutions that leverage the best of the AI landscape.
            </p>

            <div className="space-y-6 mb-8">
              {ecosystemFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-white">
                        {feature.title}
                      </h3>
                      <p className="text-white/60">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <button className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg shadow-purple-500/50">
              Explore our partnerships
            </button>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-6">
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

