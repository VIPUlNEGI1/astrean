'use client';

import React, { useId } from 'react';

type CurveSwipeProps = {
  top: React.ReactNode;
  bottom: React.ReactNode;
  swipeDistanceVh?: number;
  holdDistanceVh?: number;
  curtainFill?: string;
  className?: string;
};

const PATH_BOTTOM_FLAT = 'M 0 100 V 100 Q 50 100 100 100 V 100 z';

export default function CurveSwipe({
  top,
  bottom,
  curtainFill = 'rgb(2 6 23)',
  className,
}: CurveSwipeProps) {
const gradId = 'curve-gradient';

  return (
    <div className={className}>
      {/* Top Section */}
      <div className="relative h-[100svh] overflow-hidden">
        <div
          className="absolute inset-0 z-10 backface-hidden"
          style={{ WebkitPerspective: 1000, perspective: 1000 }}
        >
          {top}

          {/* Static Curved Curtain */}
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

      {/* Bottom Section */}
      <div>{bottom}</div>
    </div>
  );
}