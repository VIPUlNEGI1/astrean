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

      <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-12 sm:pt-32 sm:pb-24">
        {/* Animated Background Elements */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-[0.08]" />
          <div
            className="absolute inset-0 opacity-40 sm:opacity-60"
            aria-hidden="true"
            style={{
              background:
                'radial-gradient(1000px 600px at 0% 0%, rgba(34, 211, 238, 0.2), transparent 70%), radial-gradient(1000px 600px at 100% 0%, rgba(167, 139, 250, 0.15), transparent 70%), radial-gradient(800px 600px at 50% 100%, rgba(52, 211, 153, 0.08), transparent 70%)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-transparent to-[#020617]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <Reveal y={20}>
            <SectionHeader
              badge="Get Started"
              title="Scale your business"
              titleGradient="with AI"
              description="From elite AI engineering squads to end-to-end transformation, we build the systems that help you win the next decade."
            />
          </Reveal>

          <div className="mt-10 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Value Proposition Column */}
            <div className="lg:col-span-5 space-y-8 sm:space-y-12 order-2 lg:order-1">
              <Reveal y={20} delayMs={100}>
                <div className="space-y-6 sm:space-y-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">The Astrenox Edge</h3>
                  
                  <div className="space-y-4 sm:space-y-6">
                    {[
                      { 
                        title: 'Org-wide AI strategies', 
                        desc: 'Align leadership, architecture, and ROI targets for AI-first operations.', 
                        icon: Target, 
                        color: 'text-purple-400',
                        bg: 'bg-purple-500/10',
                        border: 'border-purple-500/20'
                      },
                      { 
                        title: 'Elite AI Talent', 
                        desc: 'Plug in senior AI engineers, data experts, and product leaders fast.', 
                        icon: Users, 
                        color: 'text-cyan-400',
                        bg: 'bg-cyan-500/10',
                        border: 'border-cyan-500/20'
                      },
                      { 
                        title: 'Bespoke Partnerships', 
                        desc: 'Outcome-based engagements tuned to your constraints and timelines.', 
                        icon: Zap, 
                        color: 'text-emerald-400',
                        bg: 'bg-emerald-500/10',
                        border: 'border-emerald-500/20'
                      },
                    ].map((item, i) => (
                      <div key={i} className="group surface p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-300">
                        <div className="flex items-start gap-4">
                          <div className={`h-10 w-10 sm:h-12 sm:w-12 rounded-xl ${item.bg} border ${item.border} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                            <item.icon className={`h-5 w-5 sm:h-6 sm:w-6 ${item.color}`} />
                          </div>
                          <div>
                            <h4 className="text-base sm:text-lg font-bold text-white mb-1.5">{item.title}</h4>
                            <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal y={20} delayMs={200}>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-purple-500/5 border border-white/5">
                  <p className="text-sm text-white/50 italic leading-relaxed text-center">
                    "Astrenox isn't just a vendor; they're an extension of our engineering culture, bringing AI expertise that would take years to build in-house."
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Application Form Column */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <Reveal y={20} delayMs={300}>
                <div className="relative group">
                  {/* Glow effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition duration-1000" />
                  
                  <div className="relative surface p-5 sm:p-8 rounded-3xl border border-white/10 bg-[#0b1220]/80 backdrop-blur-xl">
                    {formStatus === 'success' ? (
                      <div className="text-center py-10 sm:py-16 animate-in fade-in zoom-in duration-500">
                        <div className="h-16 w-16 rounded-full bg-emerald-500/20 border border-emerald-500/20 flex items-center justify-center mx-auto mb-6">
                          <CheckCircle className="h-8 w-8 text-emerald-400" />
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-bold mb-3 tracking-tight">Application Sent!</h3>
                        <p className="text-white/60 text-sm sm:text-base max-w-sm mx-auto leading-relaxed">
                          We've received your request. An AI strategist will review your goals and reach out within 24 hours.
                        </p>
                        <button 
                          onClick={() => setFormStatus('idle')} 
                          className="mt-8 px-6 py-2.5 rounded-full border border-white/10 bg-white/5 text-sm font-bold hover:bg-white/10 transition-all"
                        >
                          Submit another request
                        </button>
                      </div>
                    ) : (
                      <form className="space-y-5 sm:space-y-6" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                          <div className="space-y-1.5">
                            <label className="text-[10px] sm:text-[11px] font-bold tracking-[0.15em] uppercase text-white/40 ml-1">First Name</label>
                            <input 
                              required 
                              type="text" 
                              className="form-control h-10 sm:h-11 bg-white/5 border-white/10 focus:border-purple-500/50 focus:ring-4 focus:ring-purple-500/10 transition-all text-sm" 
                              placeholder="John" 
                            />
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-[10px] sm:text-[11px] font-bold tracking-[0.15em] uppercase text-white/40 ml-1">Last Name</label>
                            <input 
                              required 
                              type="text" 
                              className="form-control h-10 sm:h-11 bg-white/5 border-white/10 focus:border-cyan-500/50 focus:ring-4 focus:ring-cyan-500/10 transition-all text-sm" 
                              placeholder="Doe" 
                            />
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-[10px] sm:text-[11px] font-bold tracking-[0.15em] uppercase text-white/40 ml-1">Work Email</label>
                          <input 
                            required 
                            type="email" 
                            className="form-control h-10 sm:h-11 bg-white/5 border-white/10 focus:border-white/20 transition-all text-sm" 
                            placeholder="john@company.com" 
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="text-[10px] sm:text-[11px] font-bold tracking-[0.15em] uppercase text-white/40 ml-1">What are you looking for?</label>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                            {['AI Transformation', 'AI Engineering', 'Both'].map((service) => (
                              <label key={service} className="relative flex items-center justify-center p-3 rounded-xl border border-white/5 bg-white/5 cursor-pointer hover:bg-white/10 transition-all has-[:checked]:border-white/30 has-[:checked]:bg-white/10 group">
                                <input type="radio" name="service" className="sr-only" />
                                <span className="text-[11px] sm:text-xs font-bold text-white/50 group-has-[:checked]:text-white transition-colors">{service}</span>
                              </label>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-[10px] sm:text-[11px] font-bold tracking-[0.15em] uppercase text-white/40 ml-1">Project Details</label>
                          <textarea 
                            required 
                            rows={3} 
                            className="form-control bg-white/5 border-white/10 min-h-[90px] focus:border-white/20 transition-all py-3 text-sm" 
                            placeholder="Briefly describe your goals or bottlenecks..." 
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-[10px] sm:text-[11px] font-bold tracking-[0.15em] uppercase text-white/40 ml-1">How did you hear about us?</label>
                          <div className="relative">
                            <select 
                              className="form-control h-10 sm:h-11 bg-white/5 border-white/10 appearance-none pr-10 focus:border-white/20 transition-all text-sm"
                              onChange={(e) => setSource(e.target.value)}
                              defaultValue=""
                            >
                              <option value="" disabled>Select an option</option>
                              {['Search', 'X', 'LinkedIn', 'YouTube', 'Referral', 'Other'].map((opt) => (
                                <option key={opt} value={opt}>{opt}</option>
                              ))}
                            </select>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                              <ArrowRight className="h-4 w-4 rotate-90" />
                            </div>
                          </div>
                          
                          {source === 'Other' && (
                            <Reveal y={10}>
                              <input type="text" className="form-control h-10 mt-2 bg-white/5 border-white/10 text-sm" placeholder="Please specify..." />
                            </Reveal>
                          )}
                        </div>

                        <button 
                          type="submit" 
                          className="w-full group inline-flex items-center justify-center gap-3 rounded-2xl bg-white text-slate-950 px-8 py-3.5 sm:py-4 text-sm font-bold hover:bg-white/90 active:scale-[0.98] transition-all shadow-xl shadow-purple-500/10"
                        >
                          Submit Application
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </form>
                    )}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

