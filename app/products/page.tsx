'use client';

import { Search, Brain, Lightbulb, Cpu, Database, Shield } from 'lucide-react';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import SectionHeader from '@/components/sections/SectionHeader';
import CTASection from '@/components/sections/CTASection';
import ServiceCard from '@/components/ui/ServiceCard';

const heroData = {
  title: 'AI Products That Transform Business',
  description:
    'Our flagship products combine cutting-edge AI technology with enterprise-grade reliability to deliver measurable business impact across your organization.',
  stats: [],
};

const anxFeatures = [
  {
    number: '01',
    icon: Search,
    title: 'Instant Search',
    description:
      'Search across GDrive, Slack, Salesforce, Jira, and 30+ other data sources instantly.',
  },
  {
    number: '02',
    icon: Brain,
    title: 'Intelligent Copilot',
    description:
      'Ask → Decide → Do. Multi-step task execution with intelligent reasoning and action.',
  },
  {
    number: '03',
    icon: Lightbulb,
    title: 'Proactive Insights',
    description:
      'Anticipate your needs and transform noise into an actionable signal automatically.',
  },
];

const engineFeatures = [
  {
    number: '01',
    icon: Cpu,
    title: 'AI Processing Engine',
    description:
      'High-performance AI processing with support for multiple models and real-time inference.',
  },
  {
    number: '02',
    icon: Database,
    title: 'Data Orchestration',
    description:
      'Seamless integration with 30+ data sources and real-time data processing capabilities.',
  },
  {
    number: '03',
    icon: Shield,
    title: 'Enterprise Features',
    description:
      'Security, compliance, monitoring, and governance built-in from the ground up.',
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white antialiased">
      <Header />

      <Hero
        title={heroData.title}
        description={heroData.description}
        stats={heroData.stats}
      />

      {/* ANX Intelligence Section */}
      <section className="relative py-24 bg-[#020617]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex justify-center">
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80">
              ANX Intelligence
            </span>
          </div>
          <SectionHeader
            title="The Business Copilot"
            description="Built for executives, product owners, and operations leaders, ANX Intelligence unifies search, insights, and business process automation into agentic workflows that act across your entire system ecosystem."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {anxFeatures.map((feature) => (
              <ServiceCard
                key={feature.number}
                number={feature.number}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Engine v Section */}
      <section className="relative py-24 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="The AI Platform"
            titleGradient="That Powers Everything"
            description="Engine v is our foundational AI platform that powers all our solutions. It provides the infrastructure, orchestration, and intelligence layer that makes advanced AI capabilities accessible to your entire organization."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {engineFeatures.map((feature) => (
              <ServiceCard
                key={feature.number}
                number={feature.number}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Stay on the right side of"
        description="Ready to build what's next? Tell us where you are constrained and let's create AI-first solutions that drive measurable outcomes."
        buttonText="Get Started →"
      />

      <Footer />
    </main>
  );
}

