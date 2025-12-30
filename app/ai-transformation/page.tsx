'use client';

import {
  Lightbulb,
  Database,
  Brain,
  Route,
  Eye,
  Handshake,
  Cpu,
  TrendingUp,
  Shield,
  Target,
  Rocket,
  Search,
  FileText,
  Puzzle,
  Network,
  BarChart,
  GraduationCap,
  MessageSquare,
  Users,
  Plug,
} from 'lucide-react';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import SectionHeader from '@/components/sections/SectionHeader';
import CTASection from '@/components/sections/CTASection';
import ServiceCard from '@/components/ui/ServiceCard';
import AssessmentCard from '@/components/ui/AssessmentCard';

const heroData = {
  title: 'AI Transformation',
  description:
    'We help organizations navigate the complex journey of AI adoption, from strategic assessment to measurable outcomes. Our holistic approach addresses strategy, technology, and people.',
  stats: [],
};

const assessmentSteps = [
  {
    number: '1',
    icon: Brain,
    title: 'Discovery & Planning',
    description:
      'Comprehensive analysis of your business objectives, current state, and AI opportunities.',
  },
  {
    number: '2',
    icon: Database,
    title: 'Data & Infrastructure Assessment',
    description:
      'Evaluate your data landscape, infrastructure readiness, and technical capabilities.',
  },
  {
    number: '3',
    icon: Lightbulb,
    title: 'AI Capability Assessment',
    description:
      'Assess your organization AI maturity, skills, and readiness for transformation.',
  },
  {
    number: '4',
    icon: Route,
    title: 'Roadmap & Implementation Plan',
    description:
      'Develop a tailored roadmap with prioritized initiatives and clear success metrics.',
  },
];

const transformationDimensions = [
  {
    number: '01',
    icon: Puzzle,
    title: 'Product Transformation',
    description:
      'Enhance your products with AI-powered features that deliver personalized experiences and predictive capabilities.',
    features: [
      'AI-powered features',
      'Personalized experiences',
      'Predictive analytics',
    ],
  },
  {
    number: '02',
    icon: Network,
    title: 'Process Transformation',
    description:
      'Automate and optimize your business processes to improve efficiency and reduce operational costs.',
    features: [
      'Automated workflows',
      'Optimized operations',
      'Enhanced efficiency',
    ],
  },
  {
    number: '03',
    icon: Users,
    title: 'People Transformation',
    description:
      'Empower your workforce with AI literacy, upskilling programs, and ethical AI adoption practices.',
    features: [
      'AI literacy & upskilling',
      'Change management',
      'Ethical AI adoption',
    ],
  },
];

const advantages = [
  {
    number: '01',
    icon: Eye,
    title: 'Vision-Driven Approach',
    description:
      'We start with your business vision and work backwards to design AI solutions that align with your strategic goals.',
  },
  {
    number: '02',
    icon: Handshake,
    title: 'Partnership Mindset',
    description:
      'We act as an extension of your team, building long-term relationships focused on your success.',
  },
  {
    number: '03',
    icon: Cpu,
    title: 'Technical Depth',
    description:
      'Our team combines deep technical expertise with business acumen to deliver practical, scalable solutions.',
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Measurable Impact',
    description:
      'We focus on delivering quantifiable business outcomes, not just technology implementations.',
  },
];

const services = [
  {
    number: '01',
    icon: Brain,
    title: 'AI Strategy & Roadmap',
    description:
      'Develop comprehensive AI strategies aligned with your business objectives.',
  },
  {
    number: '02',
    icon: Shield,
    title: 'AI Governance & Ethics',
    description:
      'Establish frameworks for responsible AI development and deployment.',
  },
  {
    number: '03',
    icon: Database,
    title: 'Data Strategy & Architecture',
    description:
      'Design and implement data strategies that enable AI success.',
  },
  {
    number: '04',
    icon: Puzzle,
    title: 'Custom AI Solutions',
    description:
      'Build tailored AI solutions that address your unique business challenges.',
  },
  {
    number: '05',
    icon: Network,
    title: 'AI Model Development',
    description:
      'Develop, train, and deploy custom AI models for your specific use cases.',
  },
  {
    number: '06',
    icon: Plug,
    title: 'AI Integration & Deployment',
    description:
      'Seamlessly integrate AI capabilities into your existing systems and workflows.',
  },
  {
    number: '07',
    icon: BarChart,
    title: 'Performance Monitoring & Optimization',
    description:
      'Continuously monitor and optimize AI model performance and business impact.',
  },
  {
    number: '08',
    icon: GraduationCap,
    title: 'AI Training Programs',
    description:
      'Upskill your team with comprehensive AI training and enablement programs.',
  },
  {
    number: '09',
    icon: MessageSquare,
    title: 'AI Consulting',
    description:
      'Get expert guidance on AI adoption, best practices, and strategic decisions.',
  },
  {
    number: '10',
    icon: Search,
    title: 'AI Research & Development',
    description:
      'Explore cutting-edge AI research and develop innovative solutions.',
  },
];

export default function AITransformationPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white antialiased">
      <Header />

      <Hero
        title={heroData.title}
        description={heroData.description}
        stats={heroData.stats}
      />

      {/* Assessment Section */}
      <section className="relative py-24 bg-[#020617]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Strategic AI Assessment &"
            titleGradient="Roadmap Development"
            description="A successful AI transformation starts with a clear understanding of where you are and where you want to go. Our assessment process provides the foundation for your AI journey."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {assessmentSteps.map((step) => (
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

      {/* Transformation Dimensions Section */}
      <section className="relative py-24 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="From Strategy to"
            titleGradient="Measurable Outcomes"
            description="We help you achieve measurable results across three key dimensions of transformation."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {transformationDimensions.map((dimension) => (
              <div
                key={dimension.number}
                className="border border-white/10 bg-black/30 rounded-lg p-6 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                    <dimension.icon className="w-5 h-5 text-purple-400" />
                  </div>
                  <span className="text-2xl font-bold text-white/30">
                    {dimension.number}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">
                  {dimension.title}
                </h3>
                <p className="text-white/60 text-sm mb-4">
                  {dimension.description}
                </p>
                <ul className="space-y-2">
                  {dimension.features.map((feature, index) => (
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

      {/* Advantages Section */}
      <section className="relative py-24 bg-[#020617]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="The Astrenox"
            titleGradient="Advantage"
            description="What sets us apart in the AI transformation landscape."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage) => (
              <ServiceCard
                key={advantage.number}
                number={advantage.number}
                icon={advantage.icon}
                title={advantage.title}
                description={advantage.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-24 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="We are your"
            titleGradient="Chief AI Officer"
            description="As your strategic AI partner, we provide comprehensive services across the entire AI lifecycle."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {services.map((service) => (
              <ServiceCard
                key={service.number}
                number={service.number}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Transform Your Business with AI?"
        description="Schedule your free consultation to discuss your AI transformation journey."
        buttonText="Schedule your free consultation"
      />

      <Footer />
    </main>
  );
}

