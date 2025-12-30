'use client';

import {
  ShoppingBag,
  Building2,
  Cpu,
  GraduationCap,
  Heart,
  Truck,
  Zap,
  Cog,
} from 'lucide-react';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import SectionHeader from '@/components/sections/SectionHeader';
import CTASection from '@/components/sections/CTASection';
import ServiceCard from '@/components/ui/ServiceCard';

const heroData = {
  title: 'Industry focused Targeted outcomes',
  description:
    'We know your business, enabling us to add value with proven industrial solutions to targeted sector challenges.',
  stats: [],
};

const industries = [
  {
    number: '01',
    icon: ShoppingBag,
    title: 'Consumer',
    description:
      'We assist businesses in delivering engaging customer experiences, optimizing operations and staying ahead of evolving market trends to reach larger audiences.',
  },
  {
    number: '02',
    icon: Building2,
    title: 'Financial services • FinTech',
    description:
      'We assist financial institutions in enhancing security, improving customer interactions and streamlining processes to foster trust and accessibility.',
  },
  {
    number: '03',
    icon: Cpu,
    title: 'Technology • Media • Telecom',
    description:
      'We work with technology driven businesses to enhance efficiency, improve collaboration and accelerate growth in a competitive digital landscape.',
  },
  {
    number: '04',
    icon: GraduationCap,
    title: 'Education',
    description:
      'We work with educational institutions and EdTech providers to make learning more accessible, engaging and efficient for students, educators administrators alike.',
  },
  {
    number: '05',
    icon: Heart,
    title: 'Healthcare',
    description:
      'We support healthcare providers in improving patient care, optimizing administrative processes and maintaining compliance with industry standards.',
  },
  {
    number: '06',
    icon: Truck,
    title: 'Transportation',
    description:
      'We help transportation and logistics companies improve operational efficiency, enhance coordination and optimize movement across global supply chains.',
  },
  {
    number: '07',
    icon: Zap,
    title: 'Energy',
    description:
      'We help energy organizations improve operational efficiency, manage resources effectively and meet evolving industry and environmental standards.',
  },
  {
    number: '08',
    icon: Cog,
    title: 'Manufacturing',
    description:
      'We partner with manufacturers to optimize production workflows, enhance supply-chain coordination and improve overall efficiency to meet growing demand.',
  },
];

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white antialiased">
      <Header />

      <Hero
        title={heroData.title}
        description={heroData.description}
        stats={heroData.stats}
      />

      {/* Industries Section */}
      <section className="relative py-24 bg-[#020617]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry) => (
              <ServiceCard
                key={industry.number}
                number={industry.number}
                icon={industry.icon}
                title={industry.title}
                description={industry.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="We specialize in your industry."
        description="Challenge us to deliver targeted solutions that address your business needs."
        buttonText="Let's talk →"
      />

      <Footer />
    </main>
  );
}

