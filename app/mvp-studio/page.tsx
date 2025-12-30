'use client';

import {
  Rocket,
  Target,
  Code,
  Palette,
  Database,
  Plug,
  Cloud,
  CheckCircle,
  ArrowRight,
  Clock,
  DollarSign,
  Users,
  FileText,
  HelpCircle,
} from 'lucide-react';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import SectionHeader from '@/components/sections/SectionHeader';
import CTASection from '@/components/sections/CTASection';
import ServiceCard from '@/components/ui/ServiceCard';
import AssessmentCard from '@/components/ui/AssessmentCard';

const heroData = {
  title: 'Launch your MVP in 3 weeks',
  description:
    'We help founders build and launch their MVP in 3 weeks, so they can focus on what matters.',
  stats: [
    { value: '20+', label: 'MVPs launched' },
    { value: '$10M+', label: 'Raised by our clients' },
    { value: '5+', label: 'Years of experience' },
  ],
};

const benefits = [
  {
    number: '01',
    icon: Rocket,
    title: 'Get to market faster',
    description:
      'Launch your product quickly and start validating your idea with real users.',
  },
  {
    number: '02',
    icon: Clock,
    title: 'Save time and money',
    description:
      'Avoid the overhead of building a full team and infrastructure from scratch.',
  },
  {
    number: '03',
    icon: Code,
    title: 'No code, low code, or custom build',
    description:
      'We work with the approach that best fits your needs and budget.',
  },
];

const processSteps = [
  {
    number: '1',
    icon: Target,
    title: 'Define the product vision',
    description:
      'We work with you to define your product vision, target audience, and key features. We create a detailed product roadmap and wireframes.',
  },
  {
    number: '2',
    icon: Code,
    title: 'Build your MVP',
    description:
      'Our team of experienced developers builds your MVP using modern technologies. We focus on delivering a high-quality product that is scalable and maintainable.',
  },
  {
    number: '3',
    icon: Rocket,
    title: 'Launch, learn, and iterate',
    description:
      'We help you launch your MVP, gather feedback from users, and iterate on the product based on data. We provide ongoing support and maintenance.',
  },
];

const includedFeatures = [
  {
    number: '01',
    icon: Target,
    title: 'Product strategy and roadmap',
    description: 'Strategic planning and roadmap development for your MVP.',
  },
  {
    number: '02',
    icon: Palette,
    title: 'UI/UX design and wireframing',
    description: 'Beautiful, user-friendly designs that convert.',
  },
  {
    number: '03',
    icon: Code,
    title: 'Frontend and backend development',
    description: 'Full-stack development using modern technologies.',
  },
  {
    number: '04',
    icon: Database,
    title: 'Database design and implementation',
    description: 'Scalable database architecture for your product.',
  },
  {
    number: '05',
    icon: Plug,
    title: 'API development and integration',
    description: 'RESTful APIs and third-party integrations.',
  },
  {
    number: '06',
    icon: Cloud,
    title: 'Deployment and hosting setup',
    description: 'Production-ready deployment and hosting configuration.',
  },
];

const addons = [
  'Custom integrations',
  'Advanced analytics',
  'User authentication',
  'Payment processing',
  'Third-party APIs',
  'Ongoing maintenance',
];

export default function MVPStudioPage() {
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

      {/* Process Section */}
      <section className="relative py-24 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Process — Define → Build → Launch"
            titleGradient="and Iterate"
            description="Our proven process ensures you get a high-quality MVP that's ready to launch."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

      {/* What's Included Section */}
      <section className="relative py-24 bg-[#020617]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="What's included"
            description="Everything you need to launch your MVP successfully."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {includedFeatures.map((feature) => (
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

      {/* Pricing Section */}
      <section className="relative py-24 bg-black/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Pricing"
            description="Transparent pricing based on the scope of your project."
          />

          <div className="border border-white/10 bg-black/30 rounded-lg p-8 mb-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-white mb-2">
                MVP In 3 weeks
              </div>
              <div className="text-2xl font-semibold text-purple-400 mb-4">
                starts from $1,500
              </div>
              <p className="text-white/70">
                Our pricing is transparent and based on the scope of your
                project. We offer flexible payment options and a clear breakdown
                of costs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">
                  What's Included
                </h3>
                <ul className="space-y-3">
                  {includedFeatures.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-white/70"
                    >
                      <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                      <span>{feature.title}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Available Add-ons
                </h3>
                <ul className="space-y-3">
                  {addons.map((addon, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-white/70"
                    >
                      <span className="w-5 h-5 rounded-full border border-white/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="w-2 h-2 rounded-full bg-white/30"></span>
                      </span>
                      <span>{addon}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section className="relative py-24 bg-[#020617]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            title="90 minutes to confirm fit"
            description="We offer a free 90-minute consultation to discuss your project, understand your needs, and determine if we're a good fit."
          />
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Launch Your MVP?"
        description="Book a free consultation to discuss your project and see how we can help you bring your idea to life."
        buttonText="Book a free consultation now"
      />

      <Footer />
    </main>
  );
}

