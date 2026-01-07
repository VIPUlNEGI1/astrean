'use client';

import { useEffect, useId, useMemo, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

type GradientStops = [string, string];

type DynamicMorphOverlayProps = {
  /** The section/container ref that controls scroll progress for the morph */
  targetRef: React.RefObject<HTMLElement | null>;
  /** Gradient stop pair for path 1 */
  gradient1: GradientStops;
  /** Gradient stop pair for path 2 */
  gradient2: GradientStops;
  /** Opacity for gradient fills */
  opacity1?: number;
  opacity2?: number;
  /** Tailwind/utility classes for sizing/positioning */
  className?: string;
  /** Scrub smoothness; lower = looser, higher = tighter to scroll */
  scrub?: number;
  /** Animation tuning */
  numPoints?: number;
  delayPointsMax?: number;
  delayPerPath?: number;
  duration?: number;
};

function prefersReducedMotion() {
  if (typeof window === 'undefined') return true;
  return window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false;
}

export default function DynamicMorphOverlay({
  targetRef,
  gradient1,
  gradient2,
  opacity1 = 0.38,
  opacity2 = 0.45,
  className = 'pointer-events-none absolute inset-0 h-full w-full mix-blend-screen opacity-70',
  scrub = 0.55,
  numPoints = 12,
  delayPointsMax = 0.16,
  delayPerPath = 0.1,
  duration = 1.1,
}: DynamicMorphOverlayProps) {
  const overlayPathsRef = useRef<Array<SVGPathElement | null>>([]);
  const grad1Id = useId();
  const grad2Id = useId();
  const reducedMotion = useMemo(() => prefersReducedMotion(), []);

  useEffect(() => {
    if (reducedMotion) return;
    if (!targetRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const overlayPaths = overlayPathsRef.current.filter(
        Boolean,
      ) as SVGPathElement[];
      if (!overlayPaths.length) return;

      const numPaths = overlayPaths.length;
      const allPoints: number[][] = [];
      const pointsDelay: number[] = [];

      const morphTl = gsap.timeline({
        paused: true,
        defaults: { ease: 'sine.inOut', duration },
        onUpdate: renderMorph,
      });

      function buildMorph() {
        morphTl.clear();
        allPoints.length = 0;

        for (let i = 0; i < numPaths; i++) {
          const points: number[] = [];
          allPoints.push(points);
          for (let j = 0; j < numPoints; j++) {
            points.push(100);
          }
        }

        for (let i = 0; i < numPoints; i++) {
          pointsDelay[i] = Math.random() * delayPointsMax;
        }

        for (let i = 0; i < numPaths; i++) {
          const points = allPoints[i];
          const pathDelay = delayPerPath * i;

          for (let j = 0; j < numPoints; j++) {
            const delay = pointsDelay[j];
            morphTl.to(
              points,
              {
                [j]: 0,
              },
              delay + pathDelay,
            );
          }
        }
      }

      function renderMorph() {
        const isOpened = morphTl.progress() > 0.01;

        for (let i = 0; i < numPaths; i++) {
          const path = overlayPaths[i];
          const points = allPoints[i];

          let d = '';
          d += `M 0 0 V ${points[0]} C`;

          for (let j = 0; j < numPoints - 1; j++) {
            const p = ((j + 1) / (numPoints - 1)) * 100;
            const cp = p - ((1 / (numPoints - 1)) * 100) / 2;
            d += ` ${cp} ${points[j]} ${cp} ${points[j + 1]} ${p} ${
              points[j + 1]
            }`;
          }

          d += isOpened ? ' V 100 H 0' : ' V 0 H 0';
          path.setAttribute('d', d);
        }
      }

      buildMorph();
      renderMorph();

      ScrollTrigger.create({
        trigger: targetRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub,
        onUpdate: (self) => morphTl.progress(self.progress),
        onRefresh: () => {
          buildMorph();
          morphTl.progress(
            ScrollTrigger.getById(`morph-${grad1Id}`)?.progress || 0,
          );
        },
        id: `morph-${grad1Id}`,
      });
    }, targetRef);

    return () => ctx.revert();
  }, [
    delayPerPath,
    delayPointsMax,
    duration,
    grad1Id,
    numPoints,
    reducedMotion,
    scrub,
    targetRef,
  ]);

  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={grad1Id} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={gradient1[0]} />
          <stop offset="100%" stopColor={gradient1[1]} />
        </linearGradient>
        <linearGradient id={grad2Id} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={gradient2[0]} />
          <stop offset="100%" stopColor={gradient2[1]} />
        </linearGradient>
      </defs>
      <path
        ref={(el) => {
          overlayPathsRef.current[0] = el;
        }}
        className="shape-overlays__path"
        fill={`url(#${grad2Id})`}
        opacity={opacity2}
      />
      <path
        ref={(el) => {
          overlayPathsRef.current[1] = el;
        }}
        className="shape-overlays__path"
        fill={`url(#${grad1Id})`}
        opacity={opacity1}
      />
    </svg>
  );
}


