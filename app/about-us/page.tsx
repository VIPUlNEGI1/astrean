'use client';

import {
  Target,
  Handshake,
  GraduationCap,
  Brain,
  Scale,
  TrendingUp,
  Lock,
  Cloud,
  FileText,
  Shield,
  Users,
  Award,
} from 'lucide-react';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import SectionHeader from '@/components/sections/SectionHeader';
import CTASection from '@/components/sections/CTASection';
import ServiceCard from '@/components/ui/ServiceCard';

const heroData = {
  title: 'About Astrenox',
  description:
    'Building the future through AI innovation and digital transformation.',
  stats: [],
};

const missionPillars = [
  {
    number: '01',
    icon: Target,
    title: 'Innovation',
    description: 'Fostering ideas that transform into impactful solutions.',
  },
  {
    number: '02',
    icon: Shield,
    title: 'Integrity',
    description: 'Upholding ethical standards in all our operations.',
  },
  {
    number: '03',
    icon: Handshake,
    title: 'Partnership',
    description: 'Building strong relationships for mutual growth.',
  },
];

const coreValues = [
  {
    number: '01',
    icon: Users,
    title: 'Client-First Approach',
    description:
      'We prioritize our clients needs, delivering solutions that exceed expectations.',
  },
  {
    number: '02',
    icon: Handshake,
    title: 'Trust & Transparency',
    description:
      'Building lasting relationships through honesty and open communication.',
  },
  {
    number: '03',
    icon: GraduationCap,
    title: 'Continuous Learning',
    description:
      'Fostering a culture of growth and development for our team.',
  },
  {
    number: '04',
    icon: Brain,
    title: 'Excellence in AI',
    description:
      'Striving for the highest quality in AI solutions and services.',
  },
  {
    number: '05',
    icon: Scale,
    title: 'Ethical AI',
    description:
      'Ensuring fairness, accountability, and transparency in all AI applications.',
  },
  {
    number: '06',
    icon: TrendingUp,
    title: 'Commitment to Impact',
    description:
      'Dedicated to creating meaningful and positive change.',
  },
];

const certifications = [
  {
    number: '01',
    icon: Lock,
    title: 'ISO 27001 Ready',
    description:
      'Adhering to international standards for information security management.',
  },
  {
    number: '02',
    icon: Cloud,
    title: 'AWS & Azure Partner Tier',
    description:
      'Certified partners with leading cloud providers for robust solutions.',
  },
  {
    number: '03',
    icon: FileText,
    title: 'GDPR & CCPA Compliant',
    description:
      'Ensuring data privacy and protection in line with global regulations.',
  },
  {
    number: '04',
    icon: Brain,
    title: 'Responsible AI Framework',
    description:
      'Implementing ethical guidelines for the development and deployment of AI.',
  },
  {
    number: '05',
    icon: Shield,
    title: 'Registered & Trusted by National Employment',
    description:
      'Recognized for our commitment to fair employment practices and employee welfare.',
  },
];

const teamStats = [
  { value: '50+', label: 'AI Engineers & Data Scientists' },
  { value: '15+', label: 'Years of Combined Experience' },
  { value: '100+', label: 'Projects Delivered' },
  { value: '25+', label: 'Global Reach' },
];

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white antialiased">
      <Header />

      <Hero
        title={heroData.title}
        description={heroData.description}
        stats={heroData.stats}
      />

      {/* Mission Section */}
      <section className="relative py-24 bg-[#020617]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our Mission"
            description="To democratize future-ready advanced technology towards a better tomorrow and to empower individuals to achieve their full potential with the power of innovation and AI."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {missionPillars.map((pillar) => (
              <ServiceCard
                key={pillar.number}
                number={pillar.number}
                icon={pillar.icon}
                title={pillar.title}
                description={pillar.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="relative py-24 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Core Values"
            description="Our guiding principles that define our culture."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value) => (
              <ServiceCard
                key={value.number}
                number={value.number}
                icon={value.icon}
                title={value.title}
                description={value.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="relative py-24 bg-[#020617]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex justify-center">
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 uppercase tracking-wider">
              Trust & Compliance
            </span>
          </div>
          <SectionHeader
            title="Certifications & Standards"
            description="We maintain the highest standards of quality, security, and compliance to ensure your trust and confidence."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <ServiceCard
                key={cert.number}
                number={cert.number}
                icon={cert.icon}
                title={cert.title}
                description={cert.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-24 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our Team"
            description="Meet our expert team of AI engineers, data scientists, and developers dedicated to innovation."
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {teamStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-black mb-2 text-white">
                  {stat.value}
                </div>
                <div className="text-white/70 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Stay on the right side of history."
        description="Ready to build something extraordinary? Let's collaborate and create the future together."
        buttonText="Get Started →"
      />

      <Footer />
    </main>
  );
}

