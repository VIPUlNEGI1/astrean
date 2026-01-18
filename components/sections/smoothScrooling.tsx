'use client';

import { ReactNode, useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: isMobile ? 0.6 : 0.8, // responsive, not floaty
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      syncTouch: false, // 👈 replaces smoothTouch
      wheelMultiplier: 1,
      touchMultiplier: 1,
    });

    lenis.on('scroll', ScrollTrigger.update);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    ScrollTrigger.refresh();

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
