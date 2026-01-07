'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ChevronDown } from 'lucide-react';
import SectionHeader from '@/components/sections/SectionHeader';

export type FAQItem = {
  question: string;
  answer: string;
};

const DEFAULT_FAQS: FAQItem[] = [
  {
    question: 'What kinds of companies do you work with?',
    answer:
      'We partner with teams across mid-market and enterprise organizations that are serious about AI-first transformation—especially those needing strategy and hands-on execution.',
  },
  {
    question: 'How do you identify the right AI use cases?',
    answer:
      'We start with your business goals and constraints, then prioritize use cases by impact, feasibility, data readiness, and time-to-value to build a practical roadmap.',
  },
  {
    question: 'Do you build, or only advise?',
    answer:
      'We do both. We align on the strategy and then help deliver production-ready solutions with strong engineering practices (MLOps, data pipelines, evaluation, and governance).',
  },
  {
    question: 'How long does an engagement typically take?',
    answer:
      'It depends on scope. A focused assessment can take a few weeks, while end-to-end delivery and scaling typically spans multiple phases across 8–16+ weeks.',
  },
  {
    question: 'Can you work with our internal teams?',
    answer:
      'Yes—our default mode is collaborative. We integrate with your engineering and business stakeholders, transfer knowledge, and set up repeatable processes.',
  },
  {
    question: 'How do you handle security and compliance?',
    answer:
      'We design with security and governance in mind from day one: access controls, data handling, auditability, model risk management, and alignment with your compliance requirements.',
  },
];

interface FAQSectionProps {
  faqs?: FAQItem[];
}

const MotionDetails = motion.details;

const listVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

function FAQItemCard({ item }: { item: FAQItem }) {
  return (
    <MotionDetails
      key={item.question}
      variants={itemVariants}
      whileHover={{ scale: 1.005, y: -1 }}
      whileTap={{ scale: 0.995 }}
      className="group relative overflow-hidden rounded-[14px] sm:rounded-[18px] border border-white/6 bg-white/[0.03] px-3.5 sm:px-6 py-3.5 sm:py-5 transition-colors duration-200 hover:bg-white/[0.05]"
    >
      {/* Summary must be the first child of <details> to render properly */}
      <summary className="relative z-10 flex cursor-pointer list-none items-center justify-between gap-3 text-left outline-none">
        <span className="text-sm sm:text-base md:text-lg font-semibold tracking-[-0.01em] text-white/90 transition-colors group-hover:text-white leading-tight">
          {item.question}
        </span>
        <motion.span
          className="flex h-7 w-7 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-white/[0.04] text-white/75 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] transition-all duration-300 group-hover:bg-white/[0.07] group-hover:text-white/90 group-open:bg-white/[0.08] group-open:text-white shrink-0"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 shrink-0 transition-transform duration-300 ease-out group-open:rotate-180" />
        </motion.span>
      </summary>

      <motion.div
        initial={{ opacity: 0, y: 6, scale: 0.99 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out group-open:grid-rows-[1fr]"
      >
        <div className="overflow-hidden">
          <div className="relative pt-3 text-xs sm:text-sm md:text-base leading-relaxed text-white/70 transition-all duration-300 ease-out group-open:translate-y-0 group-open:opacity-100 opacity-0 translate-y-1">
            {item.answer}
          </div>
        </div>
      </motion.div>
    </MotionDetails>
  );
}

export default function FAQSection({ faqs = DEFAULT_FAQS }: FAQSectionProps) {
  const animatedBgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!animatedBgRef.current) return;
      gsap.to(animatedBgRef.current, {
        backgroundPosition: '120% 50%',
        duration: 14,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="faq" className="relative py-20 md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.14]" />
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(900px 520px at 50% 0%, rgba(34,211,238,0.14), transparent 60%), radial-gradient(900px 520px at 50% 100%, rgba(167,139,250,0.14), transparent 60%)',
        }}
      />
      <div
        ref={animatedBgRef}
        className="pointer-events-none absolute inset-0 opacity-50 mix-blend-screen"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(120% 90% at 0% 40%, rgba(56,189,248,0.18), transparent 50%), radial-gradient(120% 90% at 100% 60%, rgba(167,139,250,0.18), transparent 50%)',
          backgroundSize: '220% 220%',
          filter: 'blur(42px)',
        }}
      />
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-30 mix-blend-screen rotate-2"
        aria-hidden="true"
        style={{
          background:
            'repeating-linear-gradient(120deg, rgba(34,211,238,0.08) 0px, rgba(34,211,238,0.08) 2px, transparent 2px, transparent 12px)',
          backgroundSize: '180% 180%',
        }}
        initial={{ backgroundPosition: '0% 50%' }}
        animate={{ backgroundPosition: ['0% 50%', '200% 50%'] }}
        transition={{ duration: 18, ease: 'linear', repeat: Infinity }}
      />

      <div className="relative max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <SectionHeader
          badge="FAQ"
          title="Frequently asked"
          titleGradient="questions"
          description="Everything you need to know about how we work, what to expect, and how we deliver outcomes."
        />

        <div className="max-w-5xl mx-auto mt-8 sm:mt-12">
          <div className="surface rounded-[18px] sm:rounded-[22px] p-2 sm:p-4">
            <motion.div
              variants={listVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-2"
            >
              {faqs.map((faq) => (
                <FAQItemCard key={faq.question} item={faq} />
              ))}
            </motion.div>
          </div>

          <p className="mt-5 text-center text-sm text-white/55">
            Still have questions? Email us at{' '}
            <a
              className="text-white/80 underline underline-offset-4 hover:text-white"
              href="mailto:Prajwal@astrentech.com"
            >
              Prajwal@astrentech.com
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}


