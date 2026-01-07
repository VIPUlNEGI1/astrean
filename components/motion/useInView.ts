'use client';

import { useEffect, useRef, useState } from 'react';

type UseInViewOptions = {
  rootMargin?: string;
  threshold?: number | number[];
  once?: boolean;
};

export function useInView<T extends HTMLElement>({
  rootMargin = '0px 0px -10% 0px',
  threshold = 0.12,
  once = true,
}: UseInViewOptions = {}) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { root: null, rootMargin, threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin, threshold, once]);

  return { ref, inView } as const;
}


