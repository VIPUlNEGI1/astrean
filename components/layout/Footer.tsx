'use client';

import Link from 'next/link';
import { Linkedin, Twitter, Github, ArrowUp, Youtube, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'AI Transformation', href: '/ai-transformation' },
  { label: 'AI Engineering', href: '/ai-engineering' },
  { label: 'Intelligent Automations', href: '/intelligent-automations' },
  { label: 'Digital Services', href: '/consulting-modernization' },
  { label: 'Hire Talent', href: '/hire-talent' },
  { label: 'MVP Studio', href: '/mvp-studio' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Industries', href: '/industries' },
  { label: 'ANX Intelligence', href: '/anx-intelligence' },
];

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/astrenox',
    icon: Linkedin,
  },
  {
    name: 'X',
    href: 'https://twitter.com',
    icon: Twitter,
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com',
    icon: Youtube,
  },
  {
    name: 'GitHub',
    href: 'https://github.com',
    icon: Github,
  },
];

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#03050b] border-t border-white/10 overflow-hidden">
      {/* Background Gradient */}
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.08),_transparent_55%)]"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Global Final CTA Block */}
        <div className="py-16 md:py-24 border-b border-white/10">
          <div className="grid lg:grid-cols-2 gap-10 items-center text-center lg:text-left">
            <div>
              <h3 className="text-2xl xs:text-3xl md:text-4xl font-display mb-4 leading-tight">Ready to build what’s next?</h3>
              <p className="text-sm sm:text-base md:text-lg text-white/60">Tell us where you are constrained and we’ll show you how to unlock flow with AI.</p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-end gap-3 sm:gap-4">
              <Link href="/contact" className="btn-primary w-full sm:w-auto">
                Get Started
                <ArrowRight className="h-4 w-4 btn-icon" />
              </Link>
             
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12 sm:py-16 border-b border-white/10">
          <div className="grid gap-10 lg:grid-cols-4 sm:grid-cols-2">
            {/* Company Info */}
            <div className="space-y-6 lg:col-span-1 sm:col-span-2">
              <Link
                href="/"
                className="text-xl sm:text-2xl font-semibold tracking-tight text-white inline-block"
              >
                <span className="holo-fade neon-glow">Astrenox</span>
              </Link>
              <p className="text-xs sm:text-sm leading-relaxed text-white/70 max-w-md">
                AI-first strategy and engineering partners helping teams
                modernize operations, build AI-native products, and deliver
                measurable outcomes at velocity.
              </p>
              {/* Social Media Links */}
              <div className="flex items-center gap-3 pt-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-[10px] sm:rounded-xl border border-white/10 bg-white/5 text-white/60 flex items-center justify-center transition hover:border-white/30 hover:text-white"
                      aria-label={social.name}
                    >
                      <Icon className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-6">
                Solutions
              </h4>
              <ul className="space-y-3 text-sm text-white/70">
                {quickLinks.slice(1, 6).map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="transition hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-6">
                Company
              </h4>
              <ul className="space-y-3 text-sm text-white/70">
                {quickLinks.slice(6).map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="transition hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] sm:tracking-widest text-white/40 mb-5 sm:mb-6">
                Contact
              </h4>
              <ul className="space-y-4 text-xs sm:text-sm text-white/70">
                <li className="flex items-start gap-3">
                  <Mail className="h-4.5 w-4.5 sm:h-5 sm:w-5 text-purple-400 shrink-0 mt-0.5" />
                  <a href="mailto:hello@astrenox.com" className="hover:text-white transition-colors break-all leading-relaxed">hello@astrenox.com</a>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="h-4.5 w-4.5 sm:h-5 sm:w-5 text-purple-400 shrink-0 mt-0.5" />
                  <a href="tel:+918384016763" className="hover:text-white transition-colors leading-relaxed">+91 8384016763</a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="h-4.5 w-4.5 sm:h-5 sm:w-5 text-purple-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">Ghaziabad, Uttar Pradesh, India</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between py-6 sm:py-8 text-[10px] sm:text-xs text-white/40 gap-4 sm:gap-6 text-center md:text-left">
          <p>© 2025 Astrenox. All rights reserved.</p>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 uppercase tracking-[0.15em] sm:tracking-widest">
            <Link href="/privacy" className="transition hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition hover:text-white">
              Terms of Service
            </Link>
          </div>
          {showBackToTop && (
            <button
              onClick={handleBackToTop}
              className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-all font-bold uppercase tracking-[0.15em] sm:tracking-widest"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Back to top</span>
            </button>
          )}
        </div>
      </div>
    </footer>
  );
}

