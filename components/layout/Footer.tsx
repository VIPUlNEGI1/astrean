'use client';

import Link from 'next/link';
import { Linkedin, Twitter, Github, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'AI Transformation', href: '/ai-transformation' },
  { label: 'AI Engineering', href: '/ai-engineering' },
  { label: 'Intelligent Automations', href: '/intelligent-automations' },
  { label: 'Digital & IT Consulting', href: '/digital-it-consulting' },
  { label: 'Hire Talent', href: '/hire-talent' },
  { label: 'MVP Studio', href: '/mvp-studio' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Industries', href: '/industries' },
  { label: 'Products', href: '/products' },
];

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/astrenox',
    icon: Linkedin,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com',
    icon: Twitter,
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
    <footer className="relative bg-[#03050b] border-t border-white/10">
      {/* Background Gradient */}
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.12),_transparent_55%)]"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16 border-b border-white/10">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Company Info */}
            <div className="space-y-6">
              <Link
                href="/"
                className="text-2xl font-semibold tracking-tight text-white inline-block"
              >
                <span className="holo-fade neon-glow">Astrenox</span>
              </Link>
              <p className="text-sm leading-relaxed text-white/70">
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
                      className="w-10 h-10 rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-500 text-white flex items-center justify-center shadow-[0_12px_24px_rgba(34,211,238,0.25)] transition hover:opacity-95 hover:scale-105"
                      aria-label={social.name}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Quick Links
              </h4>
              <ul className="space-y-3 text-sm text-white/70">
                {quickLinks.map((link) => (
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
              <h4 className="text-lg font-semibold text-white mb-4">
                Contact
              </h4>
              <ul className="space-y-3 text-sm text-white/70">
                <li className="space-y-1">
                  <p className="uppercase tracking-[0.3em] text-white/50 text-xs">
                    Address
                  </p>
                  <a
                    href="https://maps.google.com/?q=Noida%20UP"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block transition hover:text-white"
                  >
                    Noida, UP
                  </a>
                </li>
                <li className="space-y-1">
                  <p className="uppercase tracking-[0.3em] text-white/50 text-xs">
                    Phone
                  </p>
                  <a
                    href="tel:+918384016763"
                    className="block transition hover:text-white"
                  >
                    +91 8384016763
                  </a>
                </li>
                <li className="space-y-1">
                  <p className="uppercase tracking-[0.3em] text-white/50 text-xs">
                    Email
                  </p>
                  <a
                    href="mailto:Prajwal@astrentech.com"
                    className="block transition hover:text-white"
                  >
                    Prajwal@astrentech.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between py-6 text-sm text-white/60 gap-4">
          <p>&copy; 2025 Astrenox. All rights reserved.</p>
          <div className="flex items-center gap-6 text-xs uppercase tracking-[0.25em]">
            <Link href="/privacy" className="transition hover:text-white">
              Privacy
            </Link>
            <Link href="/legal" className="transition hover:text-white">
              Legal
            </Link>
          </div>
          {showBackToTop && (
            <button
              onClick={handleBackToTop}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 text-white/70 transition hover:border-white/40 hover:text-white px-4 py-2"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
              <span>Back to top</span>
            </button>
          )}
        </div>
      </div>
    </footer>
  );
}

