'use client';

import { useMemo, useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

type QA = { question: string; answer: string };

const PRESET_QA: QA[] = [
  {
    question: 'What does Astrenox do?',
    answer:
      'We help teams ship AI-first products and automations, from strategy and architecture to hands-on engineering and rollout.',
  },
  {
    question: 'How do we start?',
    answer:
      'Pick a focused scope: a 30/60/90 plan, an AI engineering sprint, or a shortlist of talent. We align outcomes, owners, and timelines.',
  },
  {
    question: 'Do you handle security and compliance?',
    answer:
      'Yes. We design with access controls, data handling, auditability, model risk management, and your compliance needs from day one.',
  },
  {
    question: 'Can you work with our team?',
    answer:
      'We embed with your engineers and stakeholders, co-own delivery, and leave playbooks so you can scale without us.',
  },
  {
    question: 'How fast can we launch?',
    answer:
      'Discovery-to-live can start in weeks for scoped pilots; broader programs are phased with clear milestones and quality gates.',
  },
];

export default function AssistBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [activeQA, setActiveQA] = useState<QA | null>(PRESET_QA[0]);

  const matches = useMemo(() => {
    const q = query.toLowerCase();
    if (!q) return PRESET_QA;
    return PRESET_QA.filter(
      (item) =>
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <div className="fixed right-3 sm:right-4 bottom-3 sm:bottom-4 z-50">
      {isOpen && (
        <div className="mb-3 w-[calc(100vw-24px)] xs:w-[320px] md:w-[360px] rounded-2xl border border-white/10 bg-[#0b1220]/95 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-bottom-4 duration-200">
          <div className="flex items-center justify-between px-3.5 sm:px-4 py-2.5 sm:py-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-white/10 border border-white/15 flex items-center justify-center">
                <MessageCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-white/80" />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-semibold text-white">Need a hand?</p>
                <p className="text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/40">
                  Quick answers
                </p>
              </div>
            </div>
            <button
              aria-label="Close assistant"
              onClick={() => setIsOpen(false)}
              className="h-7 w-7 sm:h-8 sm:w-8 rounded-full border border-white/10 text-white/70 hover:text-white hover:border-white/30 transition"
            >
              <X className="h-3.5 w-3.5 mx-auto" />
            </button>
          </div>

          <div className="px-3.5 sm:px-4 py-3 sm:py-4 space-y-3">
            <div className="relative">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search a question..."
                className="form-control pr-10 text-xs sm:text-sm bg-white/5 border-white/12"
              />
              <Send className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-white/40 absolute right-3 top-1/2 -translate-y-1/2" />
            </div>

            <div className="flex flex-wrap gap-2 max-h-[160px] overflow-auto custom-scrollbar">
              {matches.slice(0, 5).map((item) => (
                <button
                  key={item.question}
                  onClick={() => {
                    setActiveQA(item);
                    setQuery('');
                  }}
                  className="rounded-[10px] sm:rounded-[12px] border border-white/10 bg-white/5 px-2.5 sm:px-3 py-1.5 sm:py-2 text-left text-[11px] sm:text-[12px] text-white/80 hover:border-white/25 hover:bg-white/10 transition"
                >
                  {item.question}
                </button>
              ))}
            </div>

            {activeQA && (
              <div className="rounded-[12px] sm:rounded-[14px] border border-white/10 bg-white/5 p-3 text-xs sm:text-sm text-white/80 space-y-1">
                <p className="font-semibold text-white">{activeQA.question}</p>
                <p className="leading-relaxed text-white/75">{activeQA.answer}</p>
              </div>
            )}

            <p className="text-[10px] sm:text-[11px] text-white/40 leading-tight sm:leading-normal">
              Looking for something else? Drop a note on the contact page.
            </p>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        className="flex items-center gap-2 rounded-full border border-white/12 bg-white text-slate-900 px-3.5 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold shadow-lg hover:shadow-xl transition"
      >
        <MessageCircle className="h-4 w-4" />
        {isOpen ? 'Close' : 'Ask us'}
      </button>
    </div>
  );
}


