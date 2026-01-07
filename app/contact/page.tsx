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
            badge="Contact Us"
            title="Get in Touch"
            description="Whether you’re exploring a new initiative, need expert advice, or want to partner with us, we’re here to help."
            animateTitleLines
          />

      <div className="mt-8">
        <SwipeSlider
          accent="emerald"
          items={[
            { title: 'General Inquiries', description: 'hello@astrenox.com — we respond within 24 hours.', icon: Mail },
            { title: 'Partnerships', description: 'Explore co-building and strategic initiatives with our team.', icon: MessageSquare },
            { title: 'Careers', description: 'See roles and talk to us about joining the Astrenox team.', icon: Briefcase },
          ]}
        />
      </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 max-w-6xl xl:max-w-7xl mx-auto mt-12 sm:mt-16">
            {/* Contact Form */}
            <Reveal y={20}>
              <div className="surface p-6 sm:p-10 gradient-border">
                {formStatus === 'success' ? (
                  <div className="text-center py-10 sm:py-12">
                    <CheckCircle className="h-12 w-12 sm:h-16 sm:w-16 text-emerald-400 mx-auto mb-5 sm:mb-6" />
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 leading-tight">Message Sent</h3>
                    <p className="text-xs sm:text-sm text-white/60">Thank you for reaching out. We'll be in touch soon.</p>
                    <button onClick={() => setFormStatus('idle')} className="mt-6 sm:mt-8 text-sm sm:text-base text-purple-400 font-bold hover:underline">Send another message</button>
                  </div>
                ) : (
                  <form className="space-y-5 sm:space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <label className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-white/40 ml-1">Full Name*</label>
                        <input required type="text" className="form-control text-sm" placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-white/40 ml-1">Work Email*</label>
                        <input required type="email" className="form-control text-sm" placeholder="john@company.com" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-white/40 ml-1">Company</label>
                        <input type="text" className="form-control text-sm" placeholder="Acme Inc" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-white/40 ml-1">Topic</label>
                      <select className="form-control form-control--contrast appearance-none text-sm">
                        <option>Start a New Project</option>
                        <option>Explore a Partnership</option>
                        <option>General Inquiry</option>
                        <option>Press/Media</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-white/40 ml-1">Message*</label>
                      <textarea required rows={3} className="form-control form-control--textarea text-sm" placeholder="Tell us more about your inquiry..." />
                    </div>
                    <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-[12px] bg-white text-slate-950 px-5 sm:px-6 py-3 sm:py-3.5 text-sm sm:text-base font-semibold hover:bg-white/90 transition-all">
                      Send Message
                      <Send className="h-4 w-4" />
                    </button>
                  </form>
                )}
              </div>
            </Reveal>

            {/* Details */}
            <Reveal y={20} delayMs={200}>
              <div className="lg:pl-8 xl:pl-12 space-y-10 sm:space-y-12">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center lg:text-left leading-tight">Contact Details</h3>
                  <div className="space-y-6 sm:space-y-8">
                    <div className="flex items-start gap-4 sm:gap-6">
                      <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-[12px] sm:rounded-[14px] bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                        <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-purple-400" />
                      </div>
                      <div>
                        <p className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-white/40 mb-1">General Inquiries</p>
                        <p className="text-base sm:text-lg text-white break-all">hello@astrenox.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 sm:gap-6">
                      <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-[12px] sm:rounded-[14px] bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                        <Briefcase className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-400" />
                      </div>
                      <div>
                        <p className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-white/40 mb-1">Careers</p>
                        <Link href="/about-us#careers" className="text-base sm:text-lg text-white hover:text-cyan-400 transition-colors inline-flex items-center gap-1.5">View Open Roles <ArrowRight className="h-4 w-4" /></Link>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 sm:gap-6">
                      <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-[12px] sm:rounded-[14px] bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                        <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-400" />
                      </div>
                      <div>
                        <p className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-white/40 mb-1">Office</p>
                        <p className="text-base sm:text-lg text-white leading-relaxed">Ghaziabad, Uttar Pradesh, India</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center lg:text-left">
                  <h3 className="text-lg sm:text-xl font-bold mb-5 sm:mb-6">Follow Us</h3>
                  <div className="flex justify-center lg:justify-start gap-3 sm:gap-4">
                    {[
                      { icon: Linkedin, href: '#' },
                      { icon: Twitter, href: '#' },
                      { icon: Youtube, href: '#' },
                      { icon: Github, href: '#' },
                    ].map((social, i) => (
                      <Link key={i} href={social.href} className="h-10 w-10 sm:h-12 sm:w-12 rounded-[12px] sm:rounded-[14px] border border-white/10 bg-white/5 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all text-white/60 hover:text-white shrink-0">
                        <social.icon className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
                      </Link>
                    ))}
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

