'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SectionHeader from '@/components/sections/SectionHeader';
import Reveal from '@/components/motion/Reveal';

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white antialiased">
      <Header />
      
      <div className="relative min-h-[100svh] flex flex-col justify-center pt-24 pb-16 overflow-hidden">
        {/* Backdrop */}
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.1]" />
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(900px 520px at 12% 12%, rgba(34, 211, 238, 0.4), transparent 60%), radial-gradient(950px 600px at 88% 0%, rgba(167, 139, 250, 0.3), transparent 62%)',
          }}
        />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal y={20}>
            <SectionHeader
              badge="Legal"
              title="Terms &"
              titleGradient="Conditions"
              description="Last updated: January 6, 2026"
            />
          </Reveal>

          <div className="mt-12 space-y-10 text-white/70 leading-relaxed">
            <Reveal y={20} delayMs={100}>
              <section className="space-y-4">
                <h2 className="text-xl font-bold text-white">1. Agreement to Terms</h2>
                <p>
                  By accessing or using Astrenox's website and services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our services.
                </p>
              </section>
            </Reveal>

            <Reveal y={20} delayMs={150}>
              <section className="space-y-4">
                <h2 className="text-xl font-bold text-white">2. Services</h2>
                <p>
                  Astrenox provides AI consulting, digital transformation, and engineering services. We reserve the right to modify or discontinue any service without prior notice.
                </p>
              </section>
            </Reveal>

            <Reveal y={20} delayMs={200}>
              <section className="space-y-4">
                <h2 className="text-xl font-bold text-white">3. Intellectual Property</h2>
                <p>
                  All content, logos, and technology provided on this website are the intellectual property of Astrenox or its licensors. You may not use our intellectual property without express written permission.
                </p>
              </section>
            </Reveal>

            <Reveal y={20} delayMs={250}>
              <section className="space-y-4">
                <h2 className="text-xl font-bold text-white">4. User Responsibilities</h2>
                <p>
                  Users agree to provide accurate information and use the website in compliance with all applicable laws and regulations. Any unauthorized use of the site may lead to termination of access.
                </p>
              </section>
            </Reveal>

            <Reveal y={20} delayMs={300}>
              <section className="space-y-4">
                <h2 className="text-xl font-bold text-white">5. Limitation of Liability</h2>
                <p>
                  Astrenox shall not be liable for any indirect, incidental, or consequential damages arising out of the use of our services or website.
                </p>
              </section>
            </Reveal>

            <Reveal y={20} delayMs={350}>
              <section className="space-y-4">
                <h2 className="text-xl font-bold text-white">6. Changes to Terms</h2>
                <p>
                  We reserve the right to update these terms at any time. Your continued use of the site after changes are posted constitutes acceptance of the new terms.
                </p>
              </section>
            </Reveal>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

