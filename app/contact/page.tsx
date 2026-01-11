'use client';

import { Mail, MessageSquare, Phone, MapPin, Send, CheckCircle, ArrowRight, Linkedin, Twitter, Youtube, Github, Briefcase } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SectionHeader from '@/components/sections/SectionHeader';
import Reveal from '@/components/motion/Reveal';
import SwipeSlider from '@/components/ui/SwipeSlider';
import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

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
                'radial-gradient(1000px 600px at 0% 0%, rgba(34, 211, 238, 0.25), transparent 70%), radial-gradient(1000px 600px at 100% 0%, rgba(167, 139, 250, 0.2), transparent 70%), radial-gradient(800px 600px at 50% 100%, rgba(52, 211, 153, 0.1), transparent 70%)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-transparent to-[#020617]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <Reveal y={20}>
            <SectionHeader
              badge="Contact Us"
              title="Let's build the future"
              titleGradient="together"
              description="Whether you're exploring a new initiative, need expert advice, or want to partner with us, we're here to help you navigate the AI frontier."
            />
          </Reveal>

          <div className="mt-10 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Contact Details Column - (4/12 width) */}
            <div className="lg:col-span-5 space-y-8 sm:space-y-10 order-2 lg:order-1">
              <Reveal y={20} delayMs={100}>
                <div className="space-y-6 sm:space-y-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Direct Channels</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-6">
                    {[
                      { 
                        title: 'General Inquiries', 
                        value: 'hello@astrenox.com', 
                        icon: Mail, 
                        color: 'text-cyan-400',
                        bg: 'bg-cyan-500/10',
                        border: 'border-cyan-500/20'
                      },
                      { 
                        title: 'Partnerships', 
                        value: 'partners@astrenox.com', 
                        icon: MessageSquare, 
                        color: 'text-purple-400',
                        bg: 'bg-purple-500/10',
                        border: 'border-purple-500/20'
                      },
                      { 
                        title: 'Office Location', 
                        value: 'Ghaziabad, Uttar Pradesh, India', 
                        icon: MapPin, 
                        color: 'text-emerald-400',
                        bg: 'bg-emerald-500/10',
                        border: 'border-emerald-500/20'
                      },
                    ].map((item, i) => (
                      <div key={i} className="group surface p-5 rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-300">
                        <div className="flex items-center gap-4">
                          <div className={`h-10 w-10 sm:h-12 sm:w-12 rounded-xl ${item.bg} border ${item.border} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                            <item.icon className={`h-5 w-5 sm:h-6 sm:w-6 ${item.color}`} />
                          </div>
                          <div>
                            <p className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-white/40 mb-1">{item.title}</p>
                            <p className="text-sm sm:text-base text-white font-medium break-all">{item.value}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal y={20} delayMs={200}>
                <div className="space-y-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Connect with us</h3>
                  <div className="flex flex-wrap gap-4">
                    {[
                      { icon: Linkedin, href: '#', label: 'LinkedIn' },
                      { icon: Twitter, href: '#', label: 'X (Twitter)' },
                      { icon: Youtube, href: '#', label: 'YouTube' },
                      { icon: Github, href: '#', label: 'GitHub' },
                    ].map((social, i) => (
                      <Link 
                        key={i} 
                        href={social.href} 
                        aria-label={social.label}
                        className="h-12 w-12 sm:h-14 sm:w-14 rounded-2xl border border-white/5 bg-white/5 flex items-center justify-center hover:bg-white/10 hover:border-white/20 hover:text-white transition-all text-white/50 group"
                      >
                        <social.icon className="h-5 w-5 sm:h-6 sm:w-6 group-hover:scale-110 transition-transform" />
                      </Link>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Contact Form Column - (7/12 width) */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <Reveal y={20} delayMs={300}>
                <div className="relative group">
                  {/* Glow effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition duration-1000" />
                  
                  <div className="relative surface p-5 sm:p-8 rounded-3xl border border-white/10 bg-[#0b1220]/80 backdrop-blur-xl">
                    {formStatus === 'success' ? (
                      <div className="text-center py-10 sm:py-16 animate-in fade-in zoom-in duration-500">
                        <div className="h-16 w-16 rounded-full bg-emerald-500/20 border border-emerald-500/20 flex items-center justify-center mx-auto mb-6">
                          <CheckCircle className="h-8 w-8 text-emerald-400" />
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-bold mb-3 tracking-tight">Message Received!</h3>
                        <p className="text-white/60 text-sm sm:text-base max-w-sm mx-auto leading-relaxed">
                          Thank you for reaching out. Our team will review your inquiry and get back to you within 24 hours.
                        </p>
                        <button 
                          onClick={() => setFormStatus('idle')} 
                          className="mt-8 px-6 py-2.5 rounded-full border border-white/10 bg-white/5 text-sm font-bold hover:bg-white/10 transition-all"
                        >
                          Send another message
                        </button>
                      </div>
                    ) : (
                      <form className="space-y-5 sm:space-y-6" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                          <div className="space-y-1.5">
                            <label className="text-[10px] sm:text-[11px] font-bold tracking-[0.15em] uppercase text-white/40 ml-1">Full Name</label>
                            <input 
                              required 
                              type="text" 
                              className="form-control h-10 sm:h-11 bg-white/5 border-white/10 focus:border-cyan-500/50 focus:ring-4 focus:ring-cyan-500/10 transition-all text-sm" 
                              placeholder="e.g. John Doe" 
                            />
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-[10px] sm:text-[11px] font-bold tracking-[0.15em] uppercase text-white/40 ml-1">Work Email</label>
                            <input 
                              required 
                              type="email" 
                              className="form-control h-10 sm:h-11 bg-white/5 border-white/10 focus:border-purple-500/50 focus:ring-4 focus:ring-purple-500/10 transition-all text-sm" 
                              placeholder="john@company.com" 
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                          <div className="space-y-1.5">
                            <label className="text-[10px] sm:text-[11px] font-bold tracking-[0.15em] uppercase text-white/40 ml-1">Company</label>
                            <input 
                              type="text" 
                              className="form-control h-10 sm:h-11 bg-white/5 border-white/10 focus:border-white/20 transition-all text-sm" 
                              placeholder="Your Organization" 
                            />
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-[10px] sm:text-[11px] font-bold tracking-[0.15em] uppercase text-white/40 ml-1">Inquiry Type</label>
                            <div className="relative">
                              <select className="form-control h-10 sm:h-11 bg-white/5 border-white/10 appearance-none pr-10 focus:border-white/20 transition-all text-sm">
                                <option>Start a New Project</option>
                                <option>Explore a Partnership</option>
                                <option>General Inquiry</option>
                                <option>Press/Media</option>
                              </select>
                              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                                <ArrowRight className="h-4 w-4 rotate-90" />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-[10px] sm:text-[11px] font-bold tracking-[0.15em] uppercase text-white/40 ml-1">Your Message</label>
                          <textarea 
                            required 
                            rows={3} 
                            className="form-control bg-white/5 border-white/10 min-h-[90px] focus:border-white/20 transition-all py-3 text-sm" 
                            placeholder="Tell us about your goals and how we can help..." 
                          />
                        </div>

                        <button 
                          type="submit" 
                          className="w-full group inline-flex items-center justify-center gap-3 rounded-2xl bg-white text-slate-950 px-8 py-3.5 sm:py-4 text-sm font-bold hover:bg-white/90 active:scale-[0.98] transition-all shadow-xl shadow-cyan-500/10"
                        >
                          Send Message
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

