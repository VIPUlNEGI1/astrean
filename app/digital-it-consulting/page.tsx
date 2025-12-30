'use client';

import {
  Flame,
  Link2,
  HelpCircle,
  Lock,
  Compass,
  Layers,
  Brain,
  Code,
  RefreshCw,
  Infinity,
  Database,
  Target,
  TrendingDown,
  TrendingUp,
  Shield,
  Rocket,
  Cog,
} from 'lucide-react';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import SectionHeader from '@/components/sections/SectionHeader';
import CTASection from '@/components/sections/CTASection';
import ServiceCard from '@/components/ui/ServiceCard';
import ProblemCard from '@/components/ui/ProblemCard';

const heroData = {
  title: 'Digital & IT Consulting',
  description:
    'Strategic IT & Engineering, Data Engineering, we combine cutting-edge AI-based solutions with human-centered design to unleash your digital transformation.',
  stats: [],
};

const dilemmas = [
  {
    icon: Flame,
    title: 'Technical Debt',
    description:
      'Accumulated technical debt hinders innovation and agility, making it difficult to respond to market changes.',
  },
  {
    icon: Link2,
    title: 'Legacy Systems',
    description:
      'Outdated systems are costly to maintain and difficult to integrate with modern solutions.',
  },
  {
    icon: HelpCircle,
    title: 'Talent Gaps',
    description:
      'Finding and retaining skilled professionals for digital initiatives is increasingly challenging.',
  },
  {
    icon: Lock,
    title: 'Security Risks',
    description:
      'Increasing cyber threats and compliance challenges in a digital landscape require robust security measures.',
  },
];

const blueprintFeatures = [
  {
    number: '01',
    icon: Target,
    title: 'Strategic Roadmap',
    description:
      'Define your digital vision and create a strategic roadmap aligned with business objectives.',
  },
  {
    number: '02',
    icon: Layers,
    title: 'Technology Stack Design',
    description:
      'Select and design the optimal technology stack for your specific needs and goals.',
  },
  {
    number: '03',
    icon: Brain,
    title: 'AI-First Architecture',
    description:
      'Design architectures that leverage AI capabilities from the ground up.',
  },
];

const buildFeatures = [
  {
    number: '01',
    icon: Code,
    title: 'Custom Software Development',
    description:
      'Build scalable and secure applications tailored to your business requirements.',
  },
  {
    number: '02',
    icon: RefreshCw,
    title: 'Application Modernization',
    description:
      'Transform outdated systems into modern, efficient, and maintainable solutions.',
  },
  {
    number: '03',
    icon: Infinity,
    title: 'DevOps & CI/CD',
    description:
      'Implement continuous integration and deployment pipelines for faster delivery.',
  },
  {
    number: '04',
    icon: Database,
    title: 'Data & AI Engineering',
    description:
      'Build robust data pipelines and AI infrastructure for intelligent insights.',
  },
];

const services = [
  {
    number: '01',
    icon: Compass,
    title: 'Strategy & Roadmapping',
    description:
      'Define your digital vision and create a strategic roadmap for transformation.',
  },
  {
    number: '02',
    icon: Code,
    title: 'Custom Application Development',
    description:
      'Build scalable and secure applications using modern technologies and best practices.',
  },
  {
    number: '03',
    icon: RefreshCw,
    title: 'Legacy System Modernization',
    description:
      'Transform outdated systems into modern, efficient, and maintainable solutions.',
  },
  {
    number: '04',
    icon: Database,
    title: 'Cloud Services & Infrastructure Modernization',
    description:
      'Migrate to cloud platforms and optimize infrastructure for scalability and cost-efficiency.',
  },
  {
    number: '05',
    icon: Brain,
    title: 'AI Development & Integration',
    description:
      'Develop and integrate AI solutions to enhance business capabilities and decision-making.',
  },
];

const results = [
  {
    number: '01',
    icon: TrendingDown,
    title: 'Lower TCO',
    description:
      'Reduce total cost of ownership through optimized operations and efficient resource utilization.',
  },
  {
    number: '02',
    icon: TrendingUp,
    title: 'Higher Release Frequency',
    description:
      'Accelerate time-to-market with agile development practices and automated pipelines.',
  },
  {
    number: '03',
    icon: Shield,
    title: 'Stronger Security',
    description:
      'Enhance security posture and compliance with industry-leading practices and frameworks.',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Faster Innovation',
    description:
      'Foster a culture of continuous innovation with modern tools and methodologies.',
  },
];

export default function DigitalITConsultingPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white antialiased">
      <Header />

      <Hero
        title={heroData.title}
        description={heroData.description}
        stats={heroData.stats}
      />

      {/* Dilemma Section */}
      <section className="relative py-24 bg-[#020617]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="The Digital Transformation"
            titleGradient="Dilemma"
            description="Many organizations struggle with the complexities of digital transformation, facing challenges that hinder their ability to innovate and compete."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dilemmas.map((dilemma, index) => (
              <ProblemCard
                key={index}
                icon={dilemma.icon}
                title={dilemma.title}
                description={dilemma.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Strategy & Build Section */}
      <section className="relative py-24 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Strategy & Build"
            titleGradient="AI-First Blueprint + Elite Engineering"
            description="We combine strategic consulting with hands-on engineering to deliver innovative, scalable, and future-proof digital solutions."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Compass className="w-6 h-6 text-purple-400" />
                <h3 className="text-2xl font-bold text-white">The Blueprint</h3>
              </div>
              <p className="text-white/70 mb-6">
                Our blueprint defines the strategic roadmap, technology stack, and
                architectural design for your digital transformation.
              </p>
              <div className="space-y-4">
                {blueprintFeatures.map((feature) => (
                  <div
                    key={feature.number}
                    className="flex items-start gap-4 border border-white/10 bg-black/30 rounded-lg p-4"
                  >
                    <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-4 h-4 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-white/60 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <Cog className="w-6 h-6 text-purple-400" />
                <h3 className="text-2xl font-bold text-white">The Build</h3>
              </div>
              <p className="text-white/70 mb-6">
                Our build phase involves agile development, robust testing, and
                seamless deployment of your digital solutions.
              </p>
              <div className="space-y-4">
                {buildFeatures.map((feature) => (
                  <div
                    key={feature.number}
                    className="flex items-start gap-4 border border-white/10 bg-black/30 rounded-lg p-4"
                  >
                    <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-4 h-4 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-white/60 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-24 bg-[#020617]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Comprehensive Digital Transformation"
            titleGradient="Services"
            description="We offer a full range of services from strategy to implementation and ongoing support."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* Results Section */}
      <section className="relative py-24 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Practitioner-Led,"
            titleGradient="Production-Grade Results"
            description="We focus on delivering tangible business outcomes and measurable improvements."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {results.map((result) => (
              <ServiceCard
                key={result.number}
                number={result.number}
                icon={result.icon}
                title={result.title}
                description={result.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Transform Your Technology Stack?"
        description="Let's discuss how we can help you unlock your full potential with AI-first digital transformation."
        buttonText="Transform Your Technology Stack Now"
      />

      <Footer />
    </main>
  );
}

