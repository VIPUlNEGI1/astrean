'use client';

import { Mail, MessageSquare, Phone, MapPin, Send, CheckCircle, Target, Users, Zap, ArrowRight } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SectionHeader from '@/components/sections/SectionHeader';
import Reveal from '@/components/motion/Reveal';
import SwipeSlider from '@/components/ui/SwipeSlider';
import { useState } from 'react';

export default function GetStartedPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [source, setSource] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('success');
  };

  return (
    <main className="min-h-screen bg-[#020617] text-white antialiased overflow-hidden">
      <Header />

      <section className="relative min-h-[100svh] flex flex-col justify-center pt-28 pb-20 overflow-hidden">
        {/* Backdrop ... same as before ... */}
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.15]" />
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(900px 520px at 12% 12%, rgba(34, 211, 238, 0.8), transparent 60%), radial-gradient(950px 600px at 88% 0%, rgba(167, 139, 250, 0.6), transparent 62%), radial-gradient(800px 520px at 55% 95%, rgba(52,211,153,0.15), transparent 55%)',
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-25 mix-blend-screen"
          aria-hidden="true"
          style={{
            backgroundImage:
              'repeating-linear-gradient(90deg, rgba(255,255,255,0.08) 0, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 160px)',
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/70" />

        <div className="relative z-10 max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Get Started"
            title="Ready to Astrenox"
            titleGradient="your business?"
            description="From AI engineering squads to end-to-end AI transformation, we’ll help you win the next decade."
            animateTitleLines
          />

          <div className="mt-8">
            <SwipeSlider
              accent="cyan"
              items={[
                { title: 'Org-wide AI strategies', description: 'Align leadership, architecture, and ROI targets for AI-first operations.', icon: Target },
                { title: 'Elite AI Talent', description: 'Plug in senior AI engineers, data experts, and product leaders fast.', icon: Users },
                { title: 'Bespoke Partnerships', description: 'Outcome-based engagements tuned to your constraints and timelines.', icon: Zap },
              ]}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-10 sm:mt-16">
            {[
              { title: 'Org-wide AI strategies', icon: Target, desc: 'Aligning leadership and technology for long-term AI success.' },
              { title: 'Elite AI Talent', icon: Users, desc: 'Access the top 1% of AI and engineering professionals on-demand.' },
              { title: 'Bespoke Partnerships', icon: Zap, desc: 'Tailored solutions based on your specific goals and bottlenecks.' },
            ].map((card, index) => (
              <Reveal key={card.title} y={20} delayMs={index * 100}>
                <div className="surface p-6 sm:p-8 border border-white/10 h-full text-center group hover:border-purple-500/30 transition-all flex flex-col items-center justify-center">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 transition-transform shrink-0">
                    <card.icon className="h-5 w-5 sm:h-6 sm:w-6 text-purple-400" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 leading-tight">{card.title}</h3>
                  <p className="text-xs sm:text-sm text-white/60 leading-relaxed">{card.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="max-w-4xl mx-auto mt-16 sm:mt-24">
            <Reveal y={20}>
              <div className="surface p-6 sm:p-12 gradient-border">
                {formStatus === 'success' ? (
                  <div className="text-center py-10 sm:py-12 animate-in fade-in zoom-in duration-500">
                    <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mx-auto mb-6 sm:mb-8">
                      <CheckCircle className="h-8 w-8 sm:h-10 sm:w-10 text-emerald-400" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-display mb-3 sm:mb-4">Thank you!</h3>
                    <p className="text-sm sm:text-lg text-white/60">Our team will reach out within 1–2 business days.</p>
                    <button onClick={() => setFormStatus('idle')} className="mt-6 sm:mt-8 text-sm sm:text-base text-purple-400 font-bold hover:underline">Send another message</button>
                  </div>
                ) : (
                  <form className="space-y-6 sm:space-y-8" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <label className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-white/40 ml-1">First Name*</label>
                        <input required type="text" className="form-control text-sm" placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-white/40 ml-1">Last Name*</label>
                        <input required type="text" className="form-control text-sm" placeholder="Doe" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-white/40 ml-1">Work Email*</label>
                        <input required type="email" className="form-control text-sm" placeholder="john@company.com" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-white/40 ml-1">Interests</label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-2">
                        {['AI Transformation', 'AI Engineering', 'Both'].map((service) => (
                          <label key={service} className="relative flex items-center justify-center p-3.5 sm:p-4 rounded-[12px] sm:rounded-[14px] border border-white/10 bg-white/5 cursor-pointer hover:bg-white/10 transition-all has-[:checked]:border-purple-500/50 has-[:checked]:bg-purple-500/10 group">
                            <input type="radio" name="service" className="sr-only" />
                            <span className="text-xs sm:text-sm font-semibold text-white/70 group-has-[:checked]:text-white transition-colors">{service}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-white/40 ml-1">Description*</label>
                      <textarea required rows={3} className="form-control form-control--textarea text-sm" placeholder="What goals or bottlenecks are you facing?" />
                    </div>

                    <div className="space-y-4">
                      <label className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-white/40 ml-1">Source</label>
                      <select 
                        className="form-control form-control--contrast appearance-none text-sm"
                        onChange={(e) => setSource(e.target.value)}
                        defaultValue=""
                      >
                        <option value="" disabled>Select an option</option>
                        {['Search', 'X', 'LinkedIn', 'YouTube', 'Referral', 'Other'].map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                      
                      {source === 'Other' && (
                        <Reveal y={10}>
                          <input type="text" className="form-control text-sm" placeholder="Please specify..." />
                        </Reveal>
                      )}
                    </div>

                    <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-[12px] bg-white text-slate-950 px-5 sm:px-6 py-3 sm:py-3.5 text-sm sm:text-base font-semibold hover:bg-white/90 transition-all shadow-2xl">
                      Get Started Now
                      <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

