'use client';

import { Sparkles, Shield, Zap, ArrowRight, Database, Cpu } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import SectionHeader from '@/components/sections/SectionHeader';
import CTASection from '@/components/sections/CTASection';
import ServiceCard from '@/components/ui/ServiceCard';
import Reveal from '@/components/motion/Reveal';

const heroData = {
  title: 'Solvoris',
  description:
    'The enterprise-grade AI orchestration platform designed to unify your data, intelligence, and workflows into a single, cohesive ecosystem.',
  stats: [
    { value: '99.9%', label: 'Uptime' },
    { value: '250ms', label: 'Latency' },
    { value: '50+', label: 'Integrations' },
  ],
};

const features = [
  {
    number: '01',
    icon: Database,
    title: 'Data Orchestration',
    description:
      'Seamlessly connect and unify data from across your organization, ensuring a single source of truth for your AI models.',
  },
  {
    number: '02',
    icon: Cpu,
    title: 'Intelligence Layer',
    description:
      'Deploy and manage advanced AI models with ease, leveraging our high-performance inference engine for real-time results.',
  },
  {
    number: '03',
    icon: Zap,
    title: 'Workflow Automation',
    description:
      'Automate complex business processes with agentic workflows that can think, reason, and act across your systems.',
  },
];

export default function SolvorisPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white antialiased overflow-hidden">
      <Header />

      <Hero
        title={heroData.title}
        description={heroData.description}
        stats={heroData.stats}
      />

      {/* Features Section */}
      <section className="relative py-16 sm:py-24 bg-[#020617]">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <SectionHeader
            title="Intelligent"
            titleGradient="Orchestration"
            description="Solvoris provides the foundational layer for enterprise AI, enabling you to build, deploy, and scale intelligent solutions with confidence."
            animateTitleLines
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <Reveal key={feature.number} y={20} delayMs={index * 100}>
                <ServiceCard
                  number={feature.number}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="relative py-16 sm:py-24 bg-black/30">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-2">
            <Reveal y={20}>
              <div className="text-center lg:text-left">
                <h2 className="font-display text-2xl xs:text-3xl md:text-5xl font-normal tracking-tight text-white mb-5 sm:mb-6 leading-tight">
                  Enterprise-Grade <span className="text-gradient">Security</span>
                </h2>
                <p className="text-sm sm:text-lg text-white/70 leading-relaxed mb-6 sm:mb-8">
                  Security and compliance are at the core of Solvoris. We provide the tools and frameworks needed to ensure your AI initiatives meet the highest standards of data protection and governance.
                </p>
                <div className="space-y-3.5 sm:space-y-4 text-left max-w-md mx-auto lg:mx-0">
                  {[
                    'End-to-end encryption for all data',
                    'Role-based access controls (RBAC)',
                    'Comprehensive audit logging',
                    'GDPR and SOC2 compliance ready',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Shield className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-purple-400 shrink-0" />
                      <span className="text-xs sm:text-base text-white/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal y={20} delayMs={200}>
              <div className="gradient-border mt-8 lg:mt-0">
                <div className="surface p-5 sm:p-8 overflow-x-auto custom-scrollbar">
                  <pre className="text-[10px] sm:text-sm font-mono text-purple-300 leading-relaxed">
                    <code>{`{
  "platform": "Solvoris",
  "security": {
    "encryption": "AES-256",
    "auth": "OAuth2 + OIDC",
    "governance": "Auto-enforced"
  },
  "status": "Healthy",
  "nodes": 12,
  "regions": ["us-east-1", "eu-central-1"]
}`}</code>
                  </pre>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <Reveal>
        <CTASection
          title="Ready to Unleash Solvoris?"
          description="Schedule a technical deep dive and see how Solvoris can transform your AI infrastructure."
          buttonText="Request Technical Demo"
          href="/contact"
        />
      </Reveal>

      <Footer />
    </main>
  );
}

