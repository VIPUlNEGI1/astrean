'use client';

import {
  Lightbulb,
  Brain,
  Target,
  Users,
  AlertCircle,
  DollarSign,
  Clock,
  CheckCircle,
  ArrowRight,
  Database,
  Network,
  Code,
  Plug,
  Eye,
  RefreshCw,
  MessageSquare,
  Book,
} from 'lucide-react';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import SectionHeader from '@/components/sections/SectionHeader';
import CTASection from '@/components/sections/CTASection';
import ServiceCard from '@/components/ui/ServiceCard';
import ProblemCard from '@/components/ui/ProblemCard';

const heroData = {
  title: 'AI Engineering',
  description:
    'We provide end-to-end engineering services, with a focus on quality. Our AI engineering delivers production-ready solutions that are easy to maintain.',
  stats: [],
};

const philosophy = [
  {
    number: '01',
    icon: Target,
    title: 'Build for the Best',
    description:
      'We strive to build the most robust, scalable, and efficient AI systems that deliver exceptional performance.',
  },
  {
    number: '02',
    icon: Brain,
    title: 'Use AI Judiciously',
    description:
      'We leverage AI to solve complex problems, but always with a focus on ethical considerations and human oversight.',
  },
  {
    number: '03',
    icon: Target,
    title: 'Focus on Outcomes',
    description:
      'Our ultimate goal is to deliver tangible results that drive business value and impact.',
  },
];

const challenges = [
  {
    icon: Users,
    title: 'Scarcity of Talent',
    description:
      'Finding and retaining skilled AI engineers, data scientists, and MLOps specialists is a major hurdle.',
  },
  {
    icon: DollarSign,
    title: 'High Costs',
    description:
      'The investment required for salaries, infrastructure, and tools can be substantial, especially for startups.',
  },
  {
    icon: Clock,
    title: 'Rapidly Evolving Landscape',
    description:
      'The constant evolution of AI technologies, frameworks, and best practices makes it hard to keep up.',
  },
  {
    icon: Users,
    title: 'Scaling Out Teams',
    description:
      'Effectively scaling AI teams while maintaining quality and efficiency presents unique organizational challenges.',
  },
];

const services = [
  {
    number: '01',
    icon: Lightbulb,
    title: 'AI Strategy & Roadmap',
    description:
      'Develop a clear AI strategy and roadmap aligned with your business goals.',
  },
  {
    number: '02',
    icon: Database,
    title: 'Data Engineering & MLOps',
    description:
      'Build robust data pipelines and MLOps infrastructure for seamless AI deployment.',
  },
  {
    number: '03',
    icon: Brain,
    title: 'Custom Model Development',
    description:
      'Design, train, and optimize custom AI models tailored to your specific needs.',
  },
  {
    number: '04',
    icon: Plug,
    title: 'AI Integration & Deployment',
    description:
      'Integrate AI solutions into existing systems and deploy them efficiently.',
  },
  {
    number: '05',
    icon: Eye,
    title: 'AI Model Monitoring & Maintenance',
    description:
      'Ensure the ongoing performance, accuracy, and reliability of your AI models.',
  },
];

const workModel = [
  {
    number: '01',
    icon: Users,
    title: 'Dedicated Team',
    description:
      'We assign a dedicated team of AI engineers and data scientists to work closely with your internal team.',
  },
  {
    number: '02',
    icon: RefreshCw,
    title: 'Agile Approach',
    description:
      'We adopt agile methodologies to ensure flexibility, transparency, and continuous delivery.',
  },
  {
    number: '03',
    icon: CheckCircle,
    title: 'Project Management',
    description:
      'Our experienced project managers oversee the entire project lifecycle, ensuring timely delivery.',
  },
  {
    number: '04',
    icon: MessageSquare,
    title: 'Communication',
    description:
      'Regular communication and progress updates keep you informed every step of the way.',
  },
  {
    number: '05',
    icon: Book,
    title: 'Knowledge Transfer',
    description:
      'We ensure thorough knowledge transfer to empower your team for long-term success.',
  },
];

export default function AIEngineeringPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white antialiased">
      <Header />

      <Hero
        title={heroData.title}
        description={heroData.description}
        stats={heroData.stats}
      />

      {/* Engineering Philosophy Section */}
      <section className="relative py-24 bg-[#020617]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our Engineering Philosophy"
            description="We believe that great engineering is an art form, built on a foundation of principles."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {philosophy.map((item) => (
              <ServiceCard
                key={item.number}
                number={item.number}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="relative py-24 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="The Challenges of Building"
            titleGradient="AI Teams"
            description="Building an internal AI engineering capability requires expertise, and significant time and effort, particularly for non-AI-native companies."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {challenges.map((challenge, index) => (
              <ProblemCard
                key={index}
                icon={challenge.icon}
                title={challenge.title}
                description={challenge.description}
              />
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-white">
              The Astrenox Solution
            </h3>
            <p className="text-white/70 mb-6">
              We provide expert AI engineering talent on-demand, allowing you to
              scale your AI initiatives quickly and efficiently, without the
              overhead of building an internal team from scratch.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border border-white/10 bg-black/30 rounded-lg p-4">
                <ArrowRight className="w-6 h-6 text-purple-400 mb-2" />
                <p className="text-white">Access top-tier AI talent instantly.</p>
              </div>
              <div className="border border-white/10 bg-black/30 rounded-lg p-4">
                <ArrowRight className="w-6 h-6 text-purple-400 mb-2" />
                <p className="text-white">
                  Scale your AI projects up or down as needed.
                </p>
              </div>
              <div className="border border-white/10 bg-black/30 rounded-lg p-4">
                <CheckCircle className="w-6 h-6 text-purple-400 mb-2" />
                <p className="text-white">
                  Reduce overhead and accelerate time-to-market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-24 bg-[#020617]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Comprehensive AI Engineering"
            titleGradient="Services"
            description="We offer a full spectrum of AI engineering services, from strategy and design to deployment and maintenance."
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

      {/* How We Work Section */}
      <section className="relative py-24 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="How We Work With"
            titleGradient="Your Team"
            description="Our engagement model is designed to seamlessly integrate with your existing team and workflows."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workModel.map((item) => (
              <ServiceCard
                key={item.number}
                number={item.number}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Build Production-Ready AI Solutions?"
        description="Let's discuss how our AI engineering services can accelerate your AI initiatives."
        buttonText="Get Started Now"
      />

      <Footer />
    </main>
  );
}

