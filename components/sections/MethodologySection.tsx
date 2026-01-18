'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { CheckCircle2, Zap, Compass, Activity, Layers, Target, Users, Cpu, LineChart, RefreshCw, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Reveal from '@/components/motion/Reveal';

const strategicApproach = {
  think: [
    {
      title: 'Direction',
      description: 'Align vision, outcomes, scope, and success KPIs.',
      icon: Compass,
    },
    {
      title: 'Readiness',
      description: 'Assess people, processes, and tech, surface gaps and a priority plan.',
      icon: Activity,
    },
    {
      title: 'Foundation',
      description: 'Map target architecture, data models, and integrations with clear standards.',
      icon: Layers,
    },
  ],
  align: [
    {
      title: 'Focus',
      description: 'Build a value-scored use-case portfolio, balance quick wins with compounding bets tied to metrics.',
      icon: Target,
    },
    {
      title: 'Coordination',
      description: 'Stand up governance, roles, decision rights, and an execution cadence across teams.',
      icon: Users,
    },
  ],
  execute: [
    {
      title: 'Engine',
      description: 'Operational playbooks for pilot-to-scale delivery, change management, and releases.',
      icon: Cpu,
    },
    {
      title: 'Insight',
      description: 'Live dashboards and AI-powered recommendations to drive decisions at every level.',
      icon: LineChart,
    },
    {
      title: 'Refinement',
      description: 'Tight feedback loops and retros to iterate the roadmap and improve continuously.',
      icon: RefreshCw,
    },
  ],
};

const animatedPhrases = [
  'the bottleneck.',
  'the constraint.',
  'high leverage point.',
];

const FlowVisualizer = () => {
  return (
    <div className="relative h-[300px] xs:h-[350px] sm:h-[400px] w-full bg-slate-950/50 rounded-[18px] sm:rounded-[24px] border border-white/5 overflow-hidden group">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px]" />
      
      {/* Flow Lines */}
      <svg className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id="flow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="rgba(168, 85, 247, 0.4)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        
        {/* Animated Paths */}
        {[20, 40, 60, 80].map((y, i) => (
          <motion.path
            key={i}
            d={`M -100 ${y * 4} Q 200 ${y * 4 + 20} 400 ${y * 4} T 800 ${y * 4}`}
            stroke="url(#flow-gradient)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, pathOffset: 0 }}
            animate={{ 
              pathLength: [0.2, 0.5, 0.2],
              pathOffset: [0, 1] 
            }}
            transition={{ 
              duration: 4 + i, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          />
        ))}
      </svg>

      {/* Nodes */}
      <div className="relative h-full w-full flex items-center justify-around px-4 xs:px-8 sm:px-12 z-10">
        <div className="flex flex-col items-center gap-2.5 sm:gap-4">
          <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
            <Database className="h-4 w-4 sm:h-5 sm:w-5 text-white/40" />
          </div>
          <span className="text-[9px] uppercase tracking-widest text-white/40">Input</span>
        </div>

        <div className="relative">
          {/* Bottleneck Highlight */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -inset-6 sm:-inset-8 bg-purple-500/20 rounded-full blur-xl sm:blur-2xl"
          />
          <div className="h-14 w-14 sm:h-20 sm:w-20 rounded-[16px] sm:rounded-[20px] bg-purple-500/10 border-2 border-purple-500/50 flex items-center justify-center relative z-20">
            <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-purple-400" />
            <div className="absolute -top-10 sm:-top-12 left-1/2 -translate-x-1/2 whitespace-nowrap">
              <span className="bg-purple-500 text-white text-[8px] sm:text-[10px] font-bold px-2.5 sm:px-3 py-1 rounded-full uppercase tracking-tighter">
                The Bottleneck
              </span>
            </div>
          </div>
          <span className="absolute -bottom-7 sm:-bottom-8 left-1/2 -translate-x-1/2 text-[9px] uppercase tracking-widest text-purple-400 font-bold whitespace-nowrap">
            Focus Point
          </span>
        </div>

        <div className="flex flex-col items-center gap-2.5 sm:gap-4">
          <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
            <Rocket className="h-4 w-4 sm:h-5 sm:w-5 text-white/40" />
          </div>
          <span className="text-[9px] uppercase tracking-widest text-white/40">Scale</span>
        </div>
      </div>

      {/* Overlay Text */}
      <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 sm:p-6 rounded-[12px] sm:rounded-[16px] bg-black/40 backdrop-blur-md border border-white/5">
        <p className="text-xs sm:text-sm text-white/80 leading-relaxed text-center sm:text-left">
          "Maximizing leverage at the <span className="text-purple-400 font-bold">constraint</span> is how we unlock ROI."
        </p>
      </div>
    </div>
  );
};

const Database = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
    <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
    <path d="M3 12A9 3 0 0 0 21 12"></path>
  </svg>
);

const Rocket = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
    <path d="M9 12H4s.5-1 1-4c2 0 3 .5 3 1.5"></path>
    <path d="M15 15v5s-1-.5-4-1c0-2 .5-3 1.5-3"></path>
    <line x1="11.5" y1="11.5" x2="11.5" y2="11.5"></line>
  </svg>
);

export default function MethodologySection() {
  const [activeTab, setActiveTab] = useState<'think' | 'align' | 'execute'>('think');
  const headlineRef = useRef<HTMLSpanElement | null>(null);

  const tabs = [
    { id: 'think', label: 'Think', color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/20' },
    { id: 'align', label: 'Align', color: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/20' },
    { id: 'execute', label: 'Execute', color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20' },
  ] as const;

  const activeTabData = tabs.find(t => t.id === activeTab)!;

  useEffect(() => {
    if (!headlineRef.current) return
    const el = headlineRef.current
    el.textContent = animatedPhrases[0]
    const sequence = [...animatedPhrases.slice(1), animatedPhrases[0]]
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.6 })
    sequence.forEach((phrase) => {
      tl.to(el, { opacity: 0, y: -8, duration: 0.35, ease: 'power2.out', onComplete: () => { el.textContent = phrase } })
        .to(el, { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' })
        .to({}, { duration: 1.4 })
    })
    return () => {
      tl.kill()
    }
  }, [])

  return (
    <section className="relative py-16 md:py-32 overflow-hidden bg-[#020617]">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-20 items-center">
          
          {/* Part A: The Bottleneck */}
          <div className="space-y-8 sm:space-y-12">
            <Reveal y={20}>
              <div className="space-y-5 sm:space-y-6 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-xs font-bold tracking-widest uppercase text-white/40">
                  <Activity className="h-3 w-3" />
                  Methodology Part A
                </div>
                <h2 className="text-2xl xs:text-3xl md:text-5xl font-display leading-tight">
                  Find <span ref={headlineRef} className="text-gradient inline-block">the bottleneck.</span><br />
                  Focus the force.
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-white/60 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  We don't just add AI, we solve for flow. By analyzing your whole system—from latency to failure modes—we identify the constraints holding you back. Maximizing leverage at the constraint is how we unlock step-change ROI.
                </p>
              </div>
            </Reveal>

            <Reveal y={20} delayMs={200}>
              <FlowVisualizer />
            </Reveal>
          </div>

          {/* Part B: Strategic Approach */}
          <div className="space-y-6 sm:space-y-8">
            <Reveal y={20}>
              <div className="space-y-5 sm:space-y-6 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-xs font-bold tracking-widest uppercase text-white/40">
                  <Target className="h-3 w-3" />
                  Methodology Part B
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-display">Think → Align → Execute</h3>
              </div>
            </Reveal>

            <div className="surface p-1.5 sm:p-2 rounded-[20px] sm:rounded-[24px] border border-white/10 bg-white/[0.02]">
              <div className="mb-4 px-4 pt-4">
                <p className="text-sm text-white/60 leading-relaxed">
                  A practical, eight-anchor framework that turns strategy into shipped outcomes—sequenced for maximum leverage and measurable ROI.
                </p>
              </div>
              <div className="flex flex-col xs:flex-row gap-1.5 sm:gap-2 p-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 py-2 sm:py-3 rounded-[12px] sm:rounded-[16px] text-[10px] sm:text-xs md:text-sm font-bold tracking-wider sm:tracking-widest uppercase transition-all outline-none ${
                      activeTab === tab.id 
                        ? `${tab.bg} ${tab.color} shadow-lg` 
                        : 'text-white/40 hover:text-white/60 hover:bg-white/5'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="p-4 sm:p-6 md:p-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="grid gap-6 sm:gap-8"
                  >
                    {strategicApproach[activeTab].map((item, i) => (
                      <div key={item.title} className="flex gap-4 sm:gap-6 group">
                        <div className={`h-10 w-10 sm:h-12 sm:w-12 rounded-[12px] sm:rounded-[16px] flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 duration-300 ${activeTabData.bg} border ${activeTabData.border}`}>
                          <item.icon className={`h-5 w-5 sm:h-6 sm:w-6 ${activeTabData.color}`} />
                        </div>
                        <div className="space-y-0.5 sm:space-y-1">
                          <h4 className="text-sm sm:text-base md:text-lg font-bold text-white group-hover:text-purple-400 transition-colors duration-300">{item.title}</h4>
                          <p className="text-white/60 text-xs sm:text-sm leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>

                <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10 flex items-center justify-between">
                  <p className="text-[9px] sm:text-xs font-bold tracking-widest uppercase text-white/30">
                    Phase {tabs.findIndex(t => t.id === activeTab) + 1} of 3
                  </p>
                  <Link href="/ai-transformation" className="inline-flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-sm font-bold text-purple-400 hover:text-purple-300 transition-all group/link">
                    Full Framework
                    <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 btn-icon transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-1/2 h-full bg-purple-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/2 h-full bg-cyan-500/5 blur-[120px] pointer-events-none" />
    </section>
  );
}

