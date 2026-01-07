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
  Plane,
  HardHat,
  Landmark,
  Stethoscope,
  ShoppingCart,
  Car,
  Film,
  Globe,
  Radio,
  ArrowRight,
} from 'lucide-react';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import SectionHeader from '@/components/sections/SectionHeader';
import CTASection from '@/components/sections/CTASection';
import ServiceCard from '@/components/ui/ServiceCard';
import SwipeSlider from '@/components/ui/SwipeSlider';
import Reveal from '@/components/motion/Reveal';
import Link from 'next/link';

const heroData = {
  title: 'Industry, Transformed',
  description:
    'Deep tech + domain insight to solve real constraints. We apply AI-first thinking to the world’s most critical sectors.',
  stats: [],
};

const industries = [
  {
    number: '01',
    icon: Building2,
    title: 'Financial Services & Fintech',
    description: 'Fraud detection, algorithmic trading, and personalized wealth management at scale.',
  },
  {
    number: '02',
    icon: Stethoscope,
    title: 'Healthcare & Life Sciences',
    description: 'Accelerating drug discovery and automating clinical documentation workflows.',
  },
  {
    number: '03',
    icon: ShoppingCart,
    title: 'Retail & E-commerce',
    description: 'Predictive inventory, hyper-personalized marketing, and agentic customer support.',
  },
  {
    number: '04',
    icon: Car,
    title: 'Manufacturing & Automotive',
    description: 'Supply chain optimization and predictive maintenance for the modern factory.',
  },
  {
    number: '05',
    icon: Film,
    title: 'Media & Entertainment',
    description: 'Content generation pipelines and intelligent recommendation engines.',
  },
  {
    number: '06',
    icon: Globe,
    title: 'Travel & Hospitality',
    description: 'Dynamic pricing models and automated guest experience management.',
  },
  {
    number: '07',
    icon: Zap,
    title: 'Energy & Utilities',
    description: 'Grid demand forecasting and intelligent resource allocation.',
  },
  {
    number: '08',
    icon: Radio,
    title: 'Telecommunications',
    description: 'Network optimization and automated churn reduction strategies.',
  },
  {
    number: '09',
    icon: Plane,
    title: 'Aerospace and Defence',
    description: 'Advanced AI for mission planning and secure communications.',
  },
  {
    number: '10',
    icon: HardHat,
    title: 'Construction',
    description: 'Project management optimization and safety protocol automation.',
  },
  {
    number: '11',
    icon: Landmark,
    title: 'Public and Govt Sector',
    description: 'Streamlining administrative processes and enhancing public services.',
  },
];

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white antialiased overflow-hidden">
      <Header />

      <Hero
        title={heroData.title}
        description={heroData.description}
        stats={heroData.stats}
      />

      <section className="relative py-12 bg-[#020617]">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6 px-1">
            <h3 className="text-[10px] sm:text-sm font-semibold tracking-[0.2em] sm:tracking-[0.24em] uppercase text-white/45">Swipe Industries</h3>
            <span className="text-[10px] sm:text-xs text-white/40">Drag ↔</span>
          </div>
          <SwipeSlider
            items={industries.map((i) => ({
              title: i.title,
              description: i.description,
              icon: i.icon,
            }))}
            accent="purple"
          />
        </div>
      </section>

      {/* Industries Section */}
      <section className="relative py-16 sm:py-24 bg-[#020617]">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {industries.map((industry, index) => (
              <Reveal key={industry.number} y={20} delayMs={index * 50}>
                <div className="surface p-6 sm:p-8 border border-white/5 hover:border-purple-500/30 transition-colors h-full group">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-[12px] sm:rounded-[14px] bg-white/5 border border-white/10 flex items-center justify-center mb-5 sm:mb-6 group-hover:bg-purple-500/10 transition-colors shrink-0">
                    <industry.icon className="h-5 w-5 sm:h-6 sm:w-6 text-purple-400" />
                  </div>
                  <h3 className="text-base sm:text-xl font-bold text-white mb-2 leading-tight">{industry.title}</h3>
                  <p className="text-xs sm:text-sm text-white/60 leading-relaxed">{industry.description}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 sm:mt-16 text-center">
            <Reveal y={20}>
              <div className="inline-block p-px sm:p-1 rounded-[16px] gradient-border w-full sm:w-auto">
                <div className="surface px-5 sm:px-8 py-6 rounded-[15px]">
                  <p className="text-xs sm:text-sm text-white/70 mb-4 leading-relaxed">Don't see your industry? We specialize in solving complex constraints across all sectors.</p>
                  <Link href="/contact" className="inline-flex items-center gap-2 text-xs sm:text-sm text-purple-400 hover:text-purple-300 font-bold transition-colors">
                    Speak with an industry expert
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
