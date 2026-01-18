'use client';

import React, { useEffect, useId, useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { interpolate } from 'flubber';

type CurveSwipeProps = {
  top: React.ReactNode;
  bottom: React.ReactNode;
  /** Scroll distance (in viewport heights) used for the swipe animation */
  swipeDistanceVh?: number;
  /** Extra pinned "hold" time (in viewport heights) after the swipe completes */
  holdDistanceVh?: number;
  /** Solid fill behind the gradient stroke (should match the top panel background) */
  curtainFill?: string;
  className?: string;
};

// Inspired by GSAP "curve swipe" demos (MorphSVG). We use flubber for interpolation.
// Coordinates are in a 0..100 viewBox for easy scaling.
const PATH_BOTTOM_FLAT = 'M 0 100 V 100 Q 50 100 100 100 V 100 z';
const PATH_BULGE = 'M 0 100 V 50 Q 50 0 100 50 V 100 z';
const PATH_TOP_FLAT = 'M 0 100 V 0 Q 50 0 100 0 V 100 z';

export default function CurveSwipe({
  top,
  bottom,
  swipeDistanceVh = 120,
  holdDistanceVh = 40,
  curtainFill = 'rgb(2 6 23)',
  className,
}: CurveSwipeProps) {
  const [reduceMotion, setReduceMotion] = useState(false);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const pinRef = useRef<HTMLDivElement | null>(null);
  const topPanelRef = useRef<HTMLDivElement | null>(null);
  const curvePathRef = useRef<SVGPathElement | null>(null);
  const gradId = useId();

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = () => setReduceMotion(media.matches);
    handler();
    media.addEventListener('change', handler);
    return () => media.removeEventListener('change', handler);
  }, []);

 useLayoutEffect(() => {
  if (!wrapRef.current || !pinRef.current || !topPanelRef.current) return;
  if (reduceMotion) return;

  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({ ignoreMobileResize: true });

  const ctx = gsap.context(() => {
    const wrap = wrapRef.current!;
    const pin = pinRef.current!;
    const topPanel = topPanelRef.current!;
    const curvePath = curvePathRef.current;

    gsap.set(topPanel, { yPercent: 0, force3D: true });

    const interpUp = interpolate(PATH_BOTTOM_FLAT, PATH_BULGE, { maxSegmentLength: 18 });
    const interpOut = interpolate(PATH_BULGE, PATH_TOP_FLAT, { maxSegmentLength: 18 });

    const STEPS = 250; // smoother curve
    const curveCache: string[] = Array.from({ length: STEPS + 1 }, (_, i) => {
      const t = i / STEPS;
      if (t <= 0.5) return interpUp(t * 2);
      return interpOut((t - 0.5) * 2);
    });

    const setY = gsap.quickSetter(topPanel, 'yPercent');
    const setD =
      curvePath && (gsap.quickSetter(curvePath, 'attr:d') as any)
        ? (gsap.quickSetter(curvePath, 'attr:d') as (v: string) => void)
        : (v: string) => curvePath?.setAttribute('d', v);

    setD(curveCache[0]);

    const total = Math.max(1, swipeDistanceVh + holdDistanceVh);
    const swipePortion = Math.min(1, Math.max(0.05, swipeDistanceVh / total));

    ScrollTrigger.create({
      trigger: wrap,
      start: 'top top',
      end: () => `+=${(total / 100) * window.innerHeight}`,
      pin,
      scrub: 0.5, // faster, smoother
      anticipatePin: 0.5,
      invalidateOnRefresh: true,
      fastScrollEnd: true,
      onUpdate: (self) => {
        const raw = self.progress / swipePortion;
        const swipeT = gsap.utils.clamp(0, 1, raw);

        // Slide top panel
        setY(-100 * swipeT);

        // Smooth easing for curve
        const easeFunc = gsap.parseEase('power1.inOut');
        const curveT = easeFunc(swipeT);

        const idx = Math.round(curveT * STEPS);
        setD(curveCache[idx]);
      },
    });
  }, wrapRef);

  return () => ctx.revert();
}, [swipeDistanceVh, holdDistanceVh, reduceMotion]);

  // Reduced motion: no pinning/overlay — just render normally.
  if (reduceMotion) {
    return (
      <div className={className}>
        {top}
        {bottom}
      </div>
    );
  }

  return (
    <div ref={wrapRef} className={className}>
      <div ref={pinRef} className="relative h-[100svh] overflow-hidden">
        <div className="absolute inset-0">{bottom}</div>

        <div
          ref={topPanelRef}
          className="absolute inset-0 z-10 will-change-transform backface-hidden"
          style={{ WebkitPerspective: 1000, perspective: 1000 }}
        >
          {top}

          {/* Curved "curtain" */}
          <svg
            className="pointer-events-none absolute bottom-[-1px] left-0 h-[40svh] w-full translate-y-[60%]"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient
                id={gradId}
                x1="0"
                y1="0"
                x2="99"
                y2="99"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.2" stopColor="rgba(255, 136, 9, 0)" />
                <stop offset="0.7" stopColor="rgba(247, 189, 248, 0)" />
              </linearGradient>
            </defs>

            
            <path
              ref={curvePathRef}
              d={PATH_BOTTOM_FLAT}
              fill={curtainFill}
              stroke={`url(#${gradId})`}
              strokeWidth="3px"
              strokeLinecap="round"
              strokeLinejoin="round"
              vectorEffect="non-scaling-stroke"
              opacity="0.95"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}


