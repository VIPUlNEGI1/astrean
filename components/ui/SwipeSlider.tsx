'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

type SwipeItem = {
  title: string;
  description: string;
  icon?: LucideIcon;
  tag?: string;
};

type SwipeSliderProps = {
  items: SwipeItem[];
  accent?: 'purple' | 'cyan' | 'emerald';
};

export default function SwipeSlider({ items, accent = 'purple' }: SwipeSliderProps) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [dragWidth, setDragWidth] = useState(0);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const resize = () => {
      setDragWidth(Math.max(0, el.scrollWidth - el.clientWidth));
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(el);
    return () => ro.disconnect();
  }, [items]);

  const accentColor =
    accent === 'cyan'
      ? 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10'
      : accent === 'emerald'
        ? 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10'
        : 'text-purple-400 border-purple-500/30 bg-purple-500/10';

  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#020617] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#020617] to-transparent z-10" />

      <motion.div
        ref={trackRef}
        className="flex gap-3.5 sm:gap-4 overflow-hidden px-3.5 sm:px-1"
        drag="x"
        dragConstraints={{ left: -dragWidth, right: 0 }}
        whileTap={{ cursor: 'grabbing' }}
      >
        {items.map((item, idx) => (
          <motion.div
            key={item.title + idx}
            className="min-w-[180px] xs:min-w-[260px] max-w-[280px] flex-shrink-0 surface border border-white/10 p-4 sm:p-5 rounded-[16px] sm:rounded-[18px] hover:border-white/25 transition-colors"
            whileHover={{ y: -6 }}
          >
            <div className="flex items-center gap-2.5 sm:gap-3">
              {item.icon ? (
                <div className={`h-9 w-9 sm:h-10 sm:w-10 rounded-[12px] sm:rounded-[14px] border ${accentColor} flex items-center justify-center shrink-0`}>
                  <item.icon className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
                </div>
              ) : (
                <div className={`h-9 w-9 sm:h-10 sm:w-10 rounded-[12px] sm:rounded-[14px] border ${accentColor} shrink-0`} />
              )}
              {item.tag && (
                <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.28em] text-white/45">
                  {item.tag}
                </span>
              )}
            </div>
            <h4 className="mt-3.5 sm:mt-4 text-base sm:text-lg font-bold text-white leading-tight">{item.title}</h4>
            <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-white/65 leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}


