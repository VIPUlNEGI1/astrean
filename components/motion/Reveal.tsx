'use client';

import { useMemo } from 'react';
import { useInView } from './useInView';

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
  delayMs?: number;
  durationMs?: number;
  y?: number;
  blurPx?: number;
  once?: boolean;
} & React.HTMLAttributes<HTMLElement>;

export default function Reveal({
  children,
  className,
  as = 'div',
  delayMs = 0,
  durationMs = 650,
  y = 14,
  blurPx = 10,
  once = true,
  style: styleProp,
  ...rest
}: RevealProps) {
  const { ref, inView } = useInView<HTMLElement>({ once });

  const style = useMemo(
    () =>
      ({
        ['--reveal-delay' as any]: `${delayMs}ms`,
        ['--reveal-duration' as any]: `${durationMs}ms`,
        ['--reveal-y' as any]: `${y}px`,
        ['--reveal-blur' as any]: `${blurPx}px`,
        ...(styleProp ?? {}),
      }) as React.CSSProperties,
    [delayMs, durationMs, y, blurPx, styleProp]
  );

  const Tag = as as any;
  return (
    <Tag
      ref={ref}
      style={style}
      data-reveal
      data-state={inView ? 'in' : 'out'}
      className={`reveal ${className ?? ''}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}


