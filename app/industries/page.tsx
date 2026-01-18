'use client';

import {
  ShoppingBag,
  Building2,
  Cpu,
  GraduationCap,
  Heart,
  Truck,
  Zap,
  Cog,
  Plane,
  HardHat,
  Landmark,
  Stethoscope,
  ShoppingCart,
  Car,
  Film,
  Globe,
  Radio,
  ArrowRight,
  Shield,
  Search,
  Workflow,
  Rocket,
  Activity,
  Layers,
  Code,
} from 'lucide-react';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import SectionHeader from '@/components/sections/SectionHeader';
import Reveal from '@/components/motion/Reveal';
import Link from 'next/link';

const heroData = {
  title: 'Industry, Transformed',
  description:
    'Deep tech + domain insight to solve real constraints. We apply AI-first thinking to the world’s most critical sectors, turning complex challenges into competitive advantages.',
  stats: [
    { value: '11+', label: 'Sectors Covered' },
    { value: '30%', label: 'Avg. Efficiency Gain' },
    { value: 'Zero', label: 'Technical Debt' },
  ],
};

const transformationStages = [
  {
    step: '01',
    title: 'Domain Discovery',
    desc: 'We map the specific constraints, regulatory requirements, and high-leverage bottlenecks unique to your sector.',
    icon: Search,
  },
  {
    step: '02',
    title: 'Strategic Blueprint',
    desc: 'Designing a vendor-agnostic AI architecture that integrates with your existing legacy infrastructure.',
    icon: Layers,
  },
  {
    step: '03',
    title: 'Elite Engineering',
    desc: 'Our builders deploy custom agentic solutions and fine-tuned models into your production environment.',
    icon: Code,
  },
  {
    step: '04',
    title: 'Operational Scaling',
    desc: 'We ensure full adoption through hands-on training and continuous optimization of the intelligence layer.',
    icon: Activity,
  },
];

const industries = [
  {
    number: '01',
    icon: Building2,
    title: 'Financial Services & Fintech',
    description: 'Fraud detection, algorithmic trading, and personalized wealth management at scale.',
    focus: ['Risk Modeling', 'Compliance Automation', 'Predictive Analytics'],
    impact: '30% Faster processing',
  },
  {
    number: '02',
    icon: Stethoscope,
    title: 'Healthcare & Life Sciences',
    description: 'Accelerating drug discovery and automating clinical documentation workflows.',
    focus: ['RAG for Medical Data', 'Clinical Flow Ops', 'Patient Engagement Agents'],
    impact: '40% Cost reduction',
  },
  {
    number: '03',
    icon: ShoppingCart,
    title: 'Retail & E-commerce',
    description: 'Predictive inventory, hyper-personalized marketing, and agentic customer support.',
    focus: ['Supply Chain AI', 'Churn Prediction', 'Visual Search'],
    impact: '25% Higher conversion',
  },
  {
    number: '04',
    icon: Car,
    title: 'Manufacturing & Automotive',
    description: 'Supply chain optimization and predictive maintenance for the modern factory.',
    focus: ['OEE Optimization', 'Quality Inspection AI', 'Legacy IoT Bridge'],
    impact: '20% Lower downtime',
  },
  {
    number: '05',
    icon: Film,
    title: 'Media & Entertainment',
    description: 'Content generation pipelines and intelligent recommendation engines.',
    focus: ['Automated Editing', 'Metadata Extraction', 'Engagement Forecasting'],
    impact: '50% Faster editing',
  },
  {
    number: '06',
    icon: Globe,
    title: 'Travel & Hospitality',
    description: 'Dynamic pricing models and automated guest experience management.',
    focus: ['Revenue Management', 'Multilingual Support', 'Travel Concierge Agents'],
    impact: '15% RevPAR increase',
  },
  {
    number: '07',
    icon: Zap,
    title: 'Energy & Utilities',
    description: 'Grid demand forecasting and intelligent resource allocation.',
    focus: ['Smart Grid Analytics', 'Asset Longevity', 'Regulatory Reporting'],
    impact: '12% Energy savings',
  },
  {
    number: '08',
    icon: Radio,
    title: 'Telecommunications',
    description: 'Network optimization and automated churn reduction strategies.',
    focus: ['Network Auto-Scaling', 'Billing Ops AI', 'Customer Lifecycle Management'],
    impact: '22% Churn reduction',
  },
  {
    number: '09',
    icon: Plane,
    title: 'Aerospace and Defence',
    description: 'Advanced AI for mission planning and secure communications.',
    focus: ['Secure LLM Enclaves', 'Predictive Maintenance', 'Logistics Optimization'],
    impact: 'Zero security breaches',
  },
  {
    number: '10',
    icon: HardHat,
    title: 'Construction',
    description: 'Project management optimization and safety protocol automation.',
    focus: ['BIM Intelligence', 'Worker Safety Vision', 'Schedule Risk Analysis'],
    impact: '18% Margin uplift',
  },
  {
    number: '11',
    icon: Landmark,
    title: 'Public and Govt Sector',
    description: 'Streamlining administrative processes and enhancing public services.',
    focus: ['Citizen Support Portals', 'Data Privacy Guardrails', 'Workflow Democratization'],
    impact: '60% Efficiency boost',
  },
];

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white antialiased overflow-hidden">
      <Header />

      <Hero
        title={heroData.title}
        description={heroData.description}
        stats={heroData.stats}
      />

      {/* Process Section */}
      <section className="relative py-16 sm:py-24 bg-black/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our Transformation"
            titleGradient="Process"
            description="How we apply elite engineering to industry-specific constraints."
            animateTitleLines
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 sm:mt-16">
            {transformationStages.map((stage, i) => (
              <Reveal key={stage.step} y={20} delayMs={i * 100}>
                <div className="relative p-6 sm:p-8 surface border border-white/10 h-full group transition-all duration-500 hover:border-purple-500/20">
                  <div className="text-4xl font-display text-white/5 absolute top-4 right-6 group-hover:text-purple-500/10 transition-colors">
                    {stage.step}
                  </div>
                  <div className="h-10 w-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6">
                    <stage.icon className="h-5 w-5 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{stage.title}</h3>
                  <p className="text-xs sm:text-sm text-white/60 leading-relaxed">{stage.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Grid Section */}
      <section className="relative py-16 sm:py-24 bg-[#020617]">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <SectionHeader
            title="Vertical"
            titleGradient="Specializations"
            description="Deep expertise across the most complex global industries."
            animateTitleLines
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
            {industries.map((industry, index) => (
              <Reveal key={industry.number} y={20} delayMs={index * 50}>
                <div className="relative group overflow-hidden rounded-[20px] border border-white/5 bg-[#0b1220]/50 backdrop-blur-sm transition-all duration-500 hover:border-purple-500/30 hover:bg-purple-500/[0.02] flex flex-col h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative p-6 sm:p-8 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-8">
                      <div className="h-12 w-12 rounded-[14px] bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 group-hover:bg-purple-500/10 shrink-0">
                        <industry.icon className="h-6 w-6 text-purple-400" />
                      </div>
                      <div className="text-right">
                        <span className="block text-[10px] font-bold tracking-[0.2em] text-white/20 uppercase mb-1">Sector</span>
                        <span className="text-xl font-display text-white/10 group-hover:text-purple-500/20 transition-colors">{industry.number}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors leading-tight">
                      {industry.title}
                    </h3>
                    
                    <p className="text-sm text-white/60 leading-relaxed mb-8 flex-1">
                      {industry.description}
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-center gap-3 py-3 px-4 rounded-xl bg-white/[0.03] border border-white/5 group-hover:bg-purple-500/5 group-hover:border-purple-500/10 transition-all">
                        <Zap className="h-4 w-4 text-purple-400" />
                        <span className="text-xs font-bold text-white/80">{industry.impact}</span>
                      </div>

                      <div>
                        <p className="text-[10px] font-bold tracking-widest uppercase text-white/30 mb-3">Focus Domains</p>
                        <div className="flex flex-wrap gap-2">
                          {industry.focus.map((f) => (
                            <span key={f} className="text-[10px] px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-white/50 group-hover:text-white/70 group-hover:border-white/20 transition-colors">
                              {f}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-20 sm:mt-32">
            <Reveal y={20}>
              <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[#0b1220] p-8 sm:p-12 md:p-16 text-center">
                {/* Decorative background */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(168,85,247,0.1),_transparent_70%)] pointer-events-none" />
                <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-purple-500/5 blur-[80px]" />
                <div className="absolute -right-24 -bottom-24 h-64 w-64 rounded-full bg-cyan-500/5 blur-[80px]" />
                
                <div className="relative z-10 max-w-3xl mx-auto">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold tracking-widest uppercase text-white/40 mb-6">
                    Discovery Hub
                  </div>
                  <h3 className="text-2xl xs:text-3xl md:text-5xl font-display leading-tight mb-6">
                    Don&apos;t see your industry?
                  </h3>
                  <p className="text-sm sm:text-lg text-white/60 leading-relaxed mb-10">
                    We specialize in solving complex constraints across all high-stakes sectors. Our cross-domain approach allows us to port intelligence patterns from one industry to solve non-obvious challenges in another.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link href="/get-started?intent=industry" className="btn-primary w-full sm:w-auto px-8 py-4 text-sm font-bold shadow-2xl shadow-purple-500/20">
                      Consult an Industry Architect
                      <ArrowRight className="h-4 w-4 btn-icon" />
                    </Link>
                    <Link href="/contact" className="btn-secondary w-full sm:w-auto px-8 py-4 text-sm font-bold">
                      View Capability Hub
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
