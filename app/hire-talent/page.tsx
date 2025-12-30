'use client';

import {
  CheckCircle,
  Users,
  Cpu,
  Code,
  Smartphone,
  TestTube,
  Briefcase,
  UserCog,
  Network,
  Shield,
  Search,
  Route,
  FileText,
  Rocket,
  Brain,
} from 'lucide-react';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import SectionHeader from '@/components/sections/SectionHeader';
import CTASection from '@/components/sections/CTASection';
import ServiceCard from '@/components/ui/ServiceCard';
import AssessmentCard from '@/components/ui/AssessmentCard';

const heroData = {
  title: 'Hire elite AI & engineering talent, on-demand',
  description:
    'We provide world-class AI and engineering talent on-demand, on our payroll, with plug-and-play convenience from day one.',
  stats: [],
};

const benefits = [
  {
    number: '01',
    icon: Users,
    title: 'World-class AI & Engineering',
    description:
      'Access a talent pool of top 1% professionals, vetted for both technical and soft skills.',
  },
  {
    number: '02',
    icon: CheckCircle,
    title: 'Flexible Engagements',
    description:
      'Adaptable for single experts or dedicated teams, short-term or long-term projects.',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Rapid Onboarding',
    description:
      'Streamlined process ensures quick integration and immediate productivity.',
  },
  {
    number: '04',
    icon: CheckCircle,
    title: 'Transparent Pricing',
    description:
      'Clear, upfront pricing with no hidden fees or surprises.',
  },
  {
    number: '05',
    icon: Users,
    title: 'Dedicated Support',
    description:
      'Ensuring a smooth and successful engagement from start to finish.',
  },
  {
    number: '06',
    icon: Shield,
    title: 'Legal & Compliance',
    description:
      'All legal, payroll, and compliance aspects are handled for you.',
  },
];

const talentCategories = [
  {
    number: '01',
    icon: Brain,
    title: 'AI & ML',
    description:
      'ML Engineer, Data Scientist, AI Researcher, Computer Vision, NLP Engineer, Reinforcement Learning, MLOps Engineer, AI Product Manager',
  },
  {
    number: '02',
    icon: Cpu,
    title: 'Core',
    description:
      'Backend Engineer, DevOps Engineer, Cloud Engineer, Data Engineer, Database Admin',
  },
  {
    number: '03',
    icon: Code,
    title: 'Frontend',
    description:
      'Frontend Engineer, Fullstack Engineer, UI/UX Designer',
  },
  {
    number: '04',
    icon: Smartphone,
    title: 'Mobile',
    description:
      'iOS Developer, Android Developer, Mobile UI/UX',
  },
  {
    number: '05',
    icon: TestTube,
    title: 'QA & Testing',
    description:
      'QA Engineer, Test Automation Engineer, SDET',
  },
  {
    number: '06',
    icon: Briefcase,
    title: 'Product',
    description:
      'Product Manager, Product Owner, Business Analyst',
  },
  {
    number: '07',
    icon: UserCog,
    title: 'Leadership',
    description:
      'CTO / VP Engineering, Engineering Manager, Tech Lead',
  },
  {
    number: '08',
    icon: Network,
    title: 'Blockchain & Web3',
    description:
      'Blockchain Developer, Smart Contract Dev, Web3 Engineer, Blockchain Architect',
  },
];

const processSteps = [
  {
    number: '01',
    icon: FileText,
    title: 'Intake and role design',
    description:
      'We work with you to define your needs and craft detailed role descriptions.',
  },
  {
    number: '02',
    icon: Search,
    title: 'Shortlist and interviews',
    description:
      'Receive a curated shortlist in 72 hours and conduct interviews with top candidates.',
  },
  {
    number: '03',
    icon: Route,
    title: 'Trial sprint',
    description:
      'Run a 2-4 week trial sprint to assess candidate fit and performance.',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Onboard & scale',
    description:
      'We handle payroll, benefits, compliance, and scale your talent as needed.',
  },
];

export default function HireTalentPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white antialiased">
      <Header />

      <Hero
        title={heroData.title}
        description={heroData.description}
        stats={heroData.stats}
      />

      {/* Benefits Section */}
      <section className="relative py-24 bg-[#020617]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Speed, quality, and accountability —"
            titleGradient="in one motion"
            description="Everything you need to build exceptional products, delivered seamlessly."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <ServiceCard
                key={benefit.number}
                number={benefit.number}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Talent Categories Section */}
      <section className="relative py-24 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex justify-center">
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80">
              AI Talent. On-Demand.
            </span>
          </div>
          <SectionHeader
            title="Builders for every layer"
            titleGradient="of your stack"
            description="Find talent for every layer of your stack—from a skilled AI to product leader. If it involves a computer, we'll find you a top-tier expert."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {talentCategories.map((category) => (
              <ServiceCard
                key={category.number}
                number={category.number}
                icon={category.icon}
                title={category.title}
                description={category.description}
              />
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
            title="From request to 'in the code'"
            titleGradient="in four steps"
            description="Our streamlined process ensures that you get the right talent, quickly and efficiently, without the usual hiring headaches."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
        title="Ready to Build Your Dream Team?"
        description="Start a project or book a free demo to see how we can help you scale your engineering capabilities."
        buttonText="Start a project"
      />

      <Footer />
    </main>
  );
}

