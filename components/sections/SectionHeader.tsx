'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  titleGradient?: string;
  description: string;
  /**
   * Enables a GSAP ScrollTrigger "responsive line split" reveal for the title
   * (similar feel to GSAP's responsive line-splits demo, without SplitText).
   */
  animateTitleLines?: boolean;
}

function prefersReducedMotion() {
  if (typeof window === 'undefined') return true;
  return window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false;
}

function splitElementIntoResponsiveLines(el: HTMLElement) {
  const originalHTML = el.innerHTML;

  // Convert all text nodes into word+space spans so we can measure & regroup by line.
  const SHOW_TEXT = typeof NodeFilter !== 'undefined' ? NodeFilter.SHOW_TEXT : 4;
  const FILTER_ACCEPT = typeof NodeFilter !== 'undefined' ? NodeFilter.FILTER_ACCEPT : 1;
  const FILTER_REJECT = typeof NodeFilter !== 'undefined' ? NodeFilter.FILTER_REJECT : 2;

  const walker = document.createTreeWalker(el, SHOW_TEXT, {
    acceptNode(node) {
      const txt = node.nodeValue ?? '';
      // Ignore empty/whitespace-only nodes; we'll preserve spacing via word+space tokens.
      return txt.trim().length ? FILTER_ACCEPT : FILTER_REJECT;
    },
  });

  const textNodes: Text[] = [];
  while (walker.nextNode()) textNodes.push(walker.currentNode as Text);

  for (const node of textNodes) {
    const text = node.nodeValue ?? '';
    const parent = node.parentElement;
    if (!parent) continue;

    const inGradient = parent.closest('.text-gradient') != null;

    // Capture "word + following spaces" chunks to preserve layout when spans are moved.
    const chunks = text.match(/\S+\s*/g) ?? [];
    const frag = document.createDocumentFragment();

    for (const chunk of chunks) {
      const span = document.createElement('span');
      span.setAttribute('data-word', 'true');
      span.style.display = 'inline-block';
      span.textContent = chunk;
      if (inGradient) span.classList.add('text-gradient');
      frag.appendChild(span);
    }

    parent.replaceChild(frag, node);
  }

  const wordEls = Array.from(el.querySelectorAll<HTMLElement>('[data-word="true"]'));
  if (!wordEls.length) return { originalHTML, lineInners: [] as HTMLElement[] };

  // Group words into lines based on their rendered offsetTop.
  const lines: HTMLElement[][] = [];
  let current: HTMLElement[] = [];
  let lastTop = wordEls[0]!.offsetTop;

  for (const w of wordEls) {
    const top = w.offsetTop;
    if (current.length === 0) {
      current.push(w);
      lastTop = top;
      continue;
    }
    if (Math.abs(top - lastTop) > 1) {
      lines.push(current);
      current = [w];
      lastTop = top;
    } else {
      current.push(w);
    }
  }
  if (current.length) lines.push(current);

  // Rebuild DOM: each line becomes an overflow-hidden block containing an animatable inner span.
  const lineInners: HTMLElement[] = [];
  const frag = document.createDocumentFragment();
  for (const lineWords of lines) {
    const line = document.createElement('span');
    line.setAttribute('data-line', 'true');
    line.style.display = 'block';
    line.style.overflow = 'hidden';

    const inner = document.createElement('span');
    inner.setAttribute('data-line-inner', 'true');
    inner.style.display = 'inline-block';
    inner.style.willChange = 'transform, opacity';

    for (const w of lineWords) inner.appendChild(w);

    line.appendChild(inner);
    frag.appendChild(line);
    lineInners.push(inner);
  }

  el.innerHTML = '';
  el.appendChild(frag);

  return { originalHTML, lineInners };
}

export default function SectionHeader({
  badge,
  title,
  titleGradient,
  description,
  animateTitleLines = false,
}: SectionHeaderProps) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const badgeRef = useRef<HTMLSpanElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  useLayoutEffect(() => {
    if (!animateTitleLines) return;
    if (prefersReducedMotion()) return;
    if (!wrapRef.current || !titleRef.current) return;

    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.config({ ignoreMobileResize: true });

    const titleEl = titleRef.current;
    const badgeEl = badgeRef.current;
    const originalTitleHTML = titleEl.innerHTML;
    const originalBadgeHTML = badgeEl?.innerHTML ?? '';

    const build = () => {
      // Always rebuild from the original React-rendered markup.
      titleEl.innerHTML = originalTitleHTML;
      if (badgeEl) badgeEl.innerHTML = originalBadgeHTML;

      const animateEl = (el: HTMLElement, triggerEl: HTMLElement) => {
        splitElementIntoResponsiveLines(el);
        const inners = Array.from(
          el.querySelectorAll<HTMLElement>('[data-line-inner="true"]')
        );
        if (!inners.length) return;

        gsap.set(inners, { yPercent: 120, opacity: 0, force3D: true });
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
        tl.to(inners, {
          yPercent: 0,
          opacity: 1,
          stagger: 0.085,
          duration: 0.9,
        });

        ScrollTrigger.create({
          trigger: triggerEl,
          start: 'top 85%',
          invalidateOnRefresh: true,
          onEnter: () => tl.restart(true),
          onEnterBack: () => tl.restart(true),
          onLeaveBack: () => tl.pause(0),
        });
      };

      // Animate both “CAPABILITIES” badge and the title as requested.
      if (badgeEl) animateEl(badgeEl, titleEl);
      animateEl(titleEl, titleEl);
    };

    let ctx = gsap.context(build, wrapRef);

    const rebuild = () => {
      ctx.revert();
      // Ensure clean baseline before re-creating triggers/animations.
      titleEl.innerHTML = originalTitleHTML;
      if (badgeEl) badgeEl.innerHTML = originalBadgeHTML;
      ctx = gsap.context(build, wrapRef);
      ScrollTrigger.refresh();
    };

    let ro: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined') {
      ro = new ResizeObserver(rebuild);
      ro.observe(wrapRef.current);
    } else {
      window.addEventListener('resize', rebuild, { passive: true });
    }

    return () => {
      if (ro) ro.disconnect();
      else window.removeEventListener('resize', rebuild);
      ctx.revert();
      titleEl.innerHTML = originalTitleHTML;
      if (badgeEl) badgeEl.innerHTML = originalBadgeHTML;
    };
  }, [animateTitleLines, title, titleGradient]);

  return (
    <div
      ref={wrapRef}
      className="max-w-3xl mx-auto text-center mb-10 sm:mb-14 md:mb-16"
    >
      {badge && (
        <div className="mb-4 sm:mb-5 flex justify-center">
          <span
            ref={badgeRef}
            className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2.5 sm:px-3 py-1 text-[9px] sm:text-[11px] font-semibold tracking-[0.2em] sm:tracking-[0.28em] text-white/80 uppercase"
          >
            {badge}
          </span>
        </div>
      )}
      <h2
        ref={titleRef}
        className="font-display text-balance text-xl xs:text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tight text-white leading-tight"
      >
        {title}
        {titleGradient && (
          <span className="text-gradient">
            {' '}
            {titleGradient}
          </span>
        )}
      </h2>
      <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg leading-relaxed text-white/70">
        {description}
      </p>
    </div>
  );
}

