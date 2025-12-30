'use client';

import {
  Lightbulb,
  UserCog,
  Network,
  FileText,
  Shield,
  Rocket,
  Database,
  RefreshCw,
  Search,
  Route,
  ChessKing,
  X,
  AlertCircle,
} from 'lucide-react';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import SectionHeader from '@/components/sections/SectionHeader';
import CTASection from '@/components/sections/CTASection';
import EcosystemSection from '@/components/sections/EcosystemSection';
import ServiceCard from '@/components/ui/ServiceCard';
import AssessmentCard from '@/components/ui/AssessmentCard';
import ProblemCard from '@/components/ui/ProblemCard';

const heroData = {
  title: 'Creating Engineering Disruption with AI-First Digital Transformation',
  description:
    'You are a leader in a complex organization, navigating the challenges of digital transformation and AI adoption. You need a partner who understands your unique context, can provide strategic guidance, and deliver tangible results.',
  stats: [
    { value: '$1M+', label: 'Increased Revenue' },
    { value: '80%', label: 'Efficiency Gains' },
    { value: '3x', label: 'Faster Time to Market' },
  ],
};

const services = [
  {
    number: '01',
    icon: Lightbulb,
    title: 'Vision and Strategy',
    description:
      'Define your AI vision, identify opportunities, and create a roadmap aligned with business goals.',
  },
  {
    number: '02',
    icon: UserCog,
    title: 'Capability Readiness',
    description:
      'Assess current capabilities, identify skill gaps, and build internal teams with AI expertise.',
  },
  {
    number: '03',
    icon: Network,
    title: 'Architecture and Systems',
    description:
      'Design scalable AI architecture, data infrastructure, and integration with existing systems.',
  },
  {
    number: '04',
    icon: FileText,
    title: 'Use Case Portfolio',
    description:
      'Identify high-impact AI use cases, prioritize initiatives, and develop solutions that drive value.',
  },
  {
    number: '05',
    icon: Shield,
    title: 'Governance and Execution',
    description:
      'Establish governance frameworks, ethical guidelines, and risk management practices.',
  },
  {
    number: '06',
    icon: Rocket,
    title: 'Scalable Execution',
    description:
      'Implement agile development, MLOps practices, and continuous deployment pipelines.',
  },
  {
    number: '07',
    icon: Database,
    title: 'Data and Intelligence Activation',
    description:
      'Enable data collection, processing, quality assurance, and insights generation.',
  },
  {
    number: '08',
    icon: RefreshCw,
    title: 'Feedback and Adaptation Loops',
    description:
      'Monitor performance, iterate on solutions, and drive continuous improvement.',
  },
];

const assessmentSteps = [
  {
    number: '1',
    icon: Search,
    title: 'Discovery',
    description:
      'Understand your business goals, current tech stack, and data landscape through comprehensive analysis.',
  },
  {
    number: '2',
    icon: Route,
    title: 'Roadmap',
    description:
      'Develop a customized AI roadmap, outlining initiatives, timelines, and resource requirements.',
  },
  {
    number: '3',
    icon: ChessKing,
    title: 'Strategy',
    description:
      'Define the overall AI strategy, governance framework, and success metrics for your organization.',
  },
];

const problems = [
  {
    icon: X,
    title: 'Strategy Without Execution',
    description:
      'Providing high-level strategies without practical implementation plans or hands-on support.',
  },
  {
    icon: AlertCircle,
    title: 'Generic Solutions',
    description:
      "Offering one-size-fits-all solutions that don't address your unique business challenges.",
  },
  {
    icon: X,
    title: 'No Ownership',
    description:
      'Lacking accountability for results and failing to integrate with client teams effectively.',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020617] text-white antialiased">
      <Header />

      <Hero
        title={heroData.title}
        description={heroData.description}
        stats={heroData.stats}
      />

      {/* Systematic Approach Section */}
      <section className="relative py-24 bg-[#020617]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Systematic Approach to"
            titleGradient="AI Transformation"
            description="Our comprehensive framework ensures a holistic and sustainable AI transformation, addressing all critical aspects from strategy to execution and continuous improvement."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* Assessment Process Section */}
      <section className="relative py-24 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Assessment Process"
            description="Our structured assessment process helps us understand your current state, identify opportunities, and tailor our approach to your specific needs."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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

      {/* CTA Section */}
      <CTASection
        title="Ready to Transform Your Business?"
        description="Let's discuss how AI-First Digital Transformation can unlock new possibilities for your organization."
        buttonText="Schedule your free assessment"
      />

      {/* Why Traditional Consultancies Fall Short */}
      <section className="relative py-24 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Why Traditional Consultancies"
            titleGradient="Fall Short"
            description="Many traditional consultancies offer generic advice without deep technical expertise or a commitment to execution, leading to stalled initiatives and wasted investments."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-8">
            {problems.map((problem, index) => (
              <ProblemCard
                key={index}
                icon={problem.icon}
                title={problem.title}
                description={problem.description}
              />
            ))}
          </div>

          <div className="max-w-2xl mx-auto text-center border border-white/10 bg-purple-500/10 rounded-lg p-6">
            <p className="text-white/90">
              We bridge the gap between strategy and execution, ensuring
              tangible outcomes and sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <EcosystemSection />

      <Footer />
    </main>
  );
}
