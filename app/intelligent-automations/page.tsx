'use client';

import {
  Settings,
  TrendingUp,
  FileText,
  Search,
  FileCheck,
  Shield,
  ArrowUp,
  Cog,
  Puzzle,
  Rocket,
  LineChart,
} from 'lucide-react';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import SectionHeader from '@/components/sections/SectionHeader';
import CTASection from '@/components/sections/CTASection';
import ServiceCard from '@/components/ui/ServiceCard';
import AssessmentCard from '@/components/ui/AssessmentCard';

const heroData = {
  title: 'Intelligent Automations',
  description:
    "Deliver real-world solutions to accelerate your business and ensure you're fully leveraging the power of AI. Our hub is built for intelligent automation and our solutions provide value from day one.",
  stats: [],
};

const automations = [
  {
    number: '01',
    icon: Settings,
    title: 'Process Automation',
    description:
      'Automate repetitive tasks and workflows across your business operations.',
    features: [
      'Customer Support',
      'Data Entry',
      'Reporting',
      'Invoice Processing',
    ],
  },
  {
    number: '02',
    icon: TrendingUp,
    title: 'Predictive Analytics',
    description:
      'Leverage historical data to forecast future trends and make informed decisions.',
    features: [
      'Sales Forecasting',
      'Demand Planning',
      'Risk Assessment',
      'Fraud Detection',
    ],
  },
  {
    number: '03',
    icon: FileText,
    title: 'Content Generation',
    description:
      'Generate high-quality content for various purposes, from marketing copy to reports.',
    features: [
      'Blog Posts',
      'Product Descriptions',
      'Email Campaigns',
      'Social Media Updates',
    ],
  },
  {
    number: '04',
    icon: Search,
    title: 'Knowledge Search',
    description:
      'Quickly find relevant information within your vast documents and databases.',
    features: [
      'Internal Knowledge Bases',
      'Customer FAQs',
      'Legal Documents',
      'Research Papers',
    ],
  },
  {
    number: '05',
    icon: FileCheck,
    title: 'Document & Report Automation',
    description:
      'Automate the creation, extraction, and processing of documents and reports.',
    features: [
      'Contract Generation',
      'Invoice Processing',
      'Financial Reports',
      'Compliance Audits',
    ],
  },
];

const enterpriseFeatures = [
  {
    number: '01',
    icon: TrendingUp,
    title: 'Measurable Impact',
    description:
      'Track and analyze the performance of your automations to demonstrate clear ROI.',
    features: [
      'Cost Savings',
      'Efficiency Gains',
      'Productivity Boost',
      'Improved Accuracy',
    ],
  },
  {
    number: '02',
    icon: Shield,
    title: 'Security & Business',
    description:
      'Ensure your data and automations are protected with industry-leading security measures.',
    features: [
      'Data Encryption',
      'Access Controls',
      'Compliance Certifications',
      'Threat Detection',
    ],
  },
  {
    number: '03',
    icon: ArrowUp,
    title: 'Enterprise-Grade Scalability',
    description:
      'Scale your automations to meet the growing demands of your business.',
    features: [
      'High Availability',
      'Load Balancing',
      'Elastic Infrastructure',
      'Global Deployment',
    ],
  },
];

const processSteps = [
  {
    number: '01',
    icon: Search,
    title: 'Discovery & Prioritization',
    description:
      'Identify your high-impact automation opportunities and prioritize them based on business value.',
  },
  {
    number: '02',
    icon: Cog,
    title: 'Design & Orchestration',
    description:
      'Develop a detailed design and architecture for your automation, leveraging proven patterns and best practices.',
  },
  {
    number: '03',
    icon: Puzzle,
    title: 'Integration & Delivery',
    description:
      'Seamlessly integrate your automations into existing systems and workflows.',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Deployment & Enablement',
    description:
      'Deploy your automations to production and provide training and support to your team.',
  },
  {
    number: '05',
    icon: LineChart,
    title: 'Monitoring & Optimization',
    description:
      'Continuously monitor the performance of your automations and optimize them for maximum impact.',
  },
];

export default function IntelligentAutomationsPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white antialiased">
      <Header />

      <Hero
        title={heroData.title}
        description={heroData.description}
        stats={heroData.stats}
      />

      {/* Production-Ready Automations Section */}
      <section className="relative py-24 bg-[#020617]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Production-Ready AI"
            titleGradient="Automations"
            description="Our platform provides a comprehensive suite of services designed to help you build, deploy, and manage AI automations with ease."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {automations.map((automation) => (
              <div
                key={automation.number}
                className="border border-white/10 bg-black/30 rounded-lg p-6 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                    <automation.icon className="w-5 h-5 text-purple-400" />
                  </div>
                  <span className="text-2xl font-bold text-white/30">
                    {automation.number}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">
                  {automation.title}
                </h3>
                <p className="text-white/60 text-sm mb-4">
                  {automation.description}
                </p>
                <ul className="space-y-2">
                  {automation.features.map((feature, index) => (
                    <li
                      key={index}
                      className="text-white/70 text-sm flex items-center gap-2"
                    >
                      <span className="text-purple-400">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Features Section */}
      <section className="relative py-24 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Enterprise-Grade AI"
            titleGradient="Automations"
            description="Our platform is built to meet the rigorous demands of enterprise environments, providing reliability, security, and scalability."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {enterpriseFeatures.map((feature) => (
              <div
                key={feature.number}
                className="border border-white/10 bg-black/30 rounded-lg p-6 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-purple-400" />
                  </div>
                  <span className="text-2xl font-bold text-white/30">
                    {feature.number}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">
                  {feature.title}
                </h3>
                <p className="text-white/60 text-sm mb-4">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.features.map((item, index) => (
                    <li
                      key={index}
                      className="text-white/70 text-sm flex items-center gap-2"
                    >
                      <span className="text-purple-400">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-24 bg-[#020617]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex justify-center">
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80">
              Our Process
            </span>
          </div>
          <SectionHeader
            title="Five-Step Process to AI Automation"
            titleGradient="Success"
            description="We guide you through a structured methodology to ensure successful implementation and adoption of your AI automations."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {processSteps.map((step) => (
              <AssessmentCard
                key={step.number}
                number={step.number}
                icon={step.icon}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Automate Your Business Processes?"
        description="Request a demo to see how our intelligent automations can transform your operations."
        buttonText="Request a Demo"
      />

      <Footer />
    </main>
  );
}

