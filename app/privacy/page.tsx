'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SectionHeader from '@/components/sections/SectionHeader';
import Reveal from '@/components/motion/Reveal';

export default function PrivacyPage() {
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
              title="Privacy"
              titleGradient="Policy"
              description="Last updated: January 6, 2026"
            />
          </Reveal>

          <div className="mt-12 space-y-10 text-white/70 leading-relaxed">
            <Reveal y={20} delayMs={100}>
              <section className="space-y-4">
                <h2 className="text-xl font-bold text-white">1. Data Collection</h2>
                <p>
                  We collect information that you provide directly to us, such as when you request a demo or contact us for services. This may include your name, email address, and company details.
                </p>
              </section>
            </Reveal>

            <Reveal y={20} delayMs={150}>
              <section className="space-y-4">
                <h2 className="text-xl font-bold text-white">2. Use of Information</h2>
                <p>
                  Your information is used to provide and improve our services, communicate with you, and ensure a personalized experience on our website.
                </p>
              </section>
            </Reveal>

            <Reveal y={20} delayMs={200}>
              <section className="space-y-4">
                <h2 className="text-xl font-bold text-white">3. Cookies</h2>
                <p>
                  We use essential cookies to maintain website functionality and analytical cookies to understand how our site is used. You can manage your cookie preferences through our banner.
                </p>
              </section>
            </Reveal>

            <Reveal y={20} delayMs={250}>
              <section className="space-y-4">
                <h2 className="text-xl font-bold text-white">4. Data Security</h2>
                <p>
                  We implement industry-standard security measures to protect your data. However, no method of transmission over the internet is 100% secure.
                </p>
              </section>
            </Reveal>

            <Reveal y={20} delayMs={300}>
              <section className="space-y-4">
                <h2 className="text-xl font-bold text-white">5. Third-Party Sharing</h2>
                <p>
                  We do not sell your personal data. We only share information with trusted partners necessary for service delivery, compliance, or legal requirements.
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

