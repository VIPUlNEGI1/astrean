'use client';

import React from 'react';

type Tile = {
  title: string;
  description: string;
  span: string;
  gradient: string;
};

const BENTO_TILES: Tile[] = [
  {
    title: 'Discovery',
    description: 'Map workflows and bottlenecks worth automating first.',
    span: 'col-span-12 md:col-span-7 md:row-span-2',
    gradient:
      'radial-gradient(800px 420px at 20% 10%, rgba(34,211,238,0.22), transparent 60%), radial-gradient(800px 420px at 70% 0%, rgba(167,139,250,0.20), transparent 62%), linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))',
  },
  {
    title: 'Architecture',
    description: 'Design for scale, privacy, and reliable integrations.',
    span: 'col-span-12 md:col-span-5 md:row-span-1',
    gradient:
      'radial-gradient(650px 360px at 20% 0%, rgba(167,139,250,0.22), transparent 60%), radial-gradient(650px 360px at 80% 10%, rgba(52,211,153,0.14), transparent 60%), linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))',
  },
  {
    title: 'Prototypes',
    description: 'Rapid proof-of-value with measurable outcomes.',
    span: 'col-span-12 md:col-span-5 md:row-span-1',
    gradient:
      'radial-gradient(650px 360px at 70% 0%, rgba(34,211,238,0.18), transparent 60%), radial-gradient(650px 360px at 10% 30%, rgba(251,113,133,0.12), transparent 60%), linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))',
  },
  {
    title: 'Data',
    description: 'Quality, lineage, and governance baked in.',
    span: 'col-span-12 md:col-span-4 md:row-span-2',
    gradient:
      'radial-gradient(700px 420px at 40% 0%, rgba(52,211,153,0.18), transparent 60%), radial-gradient(650px 360px at 70% 30%, rgba(34,211,238,0.14), transparent 60%), linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))',
  },
  {
    title: 'MLOps',
    description: 'Deploy, monitor, and iterate with confidence.',
    span: 'col-span-12 md:col-span-4 md:row-span-1',
    gradient:
      'radial-gradient(650px 360px at 20% 0%, rgba(34,211,238,0.16), transparent 60%), radial-gradient(650px 360px at 80% 0%, rgba(167,139,250,0.14), transparent 60%), linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))',
  },
  {
    title: 'Delivery',
    description: 'From roadmap to production—end to end.',
    span: 'col-span-12 md:col-span-4 md:row-span-1',
    gradient:
      'radial-gradient(650px 360px at 40% 0%, rgba(167,139,250,0.16), transparent 60%), radial-gradient(650px 360px at 70% 30%, rgba(52,211,153,0.12), transparent 60%), linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))',
  },
];

const BentoGallerySection = () => {
  const tiles = BENTO_TILES;

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.16]" />
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(900px 520px at 10% 0%, rgba(34,211,238,0.14), transparent 60%), radial-gradient(900px 520px at 90% 10%, rgba(167,139,250,0.16), transparent 60%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        <div className="mb-10 md:mb-12">
          <p
            data-bento-heading
            className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] sm:tracking-[0.32em] uppercase text-white/60"
          >
            Gallery
          </p>
          <h2
            data-bento-heading
            className="mt-3 font-display text-balance text-2xl xs:text-3xl md:text-6xl font-normal tracking-[-0.02em] text-white"
          >
            Scrubbed Bento{' '}
            <span className="text-gradient">Gallery</span>
          </h2>
          <p
            data-bento-heading
            className="mt-4 max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed text-white/70"
          >
            Scroll to scrub through the layout — tiles snap into clarity, then
            gently drift for depth.
          </p>
        </div>

        <div
          className="gradient-border"
          style={{ contain: 'layout paint' }}
        >
          <div className="surface p-3 sm:p-4 md:p-6">
            <div className="grid grid-cols-12 gap-3.5 sm:gap-4 md:gap-5">
              {tiles.map((t, idx) => (
                <article
                  key={idx}
                  data-bento-tile
                  className={[
                    'relative overflow-hidden rounded-[14px] sm:rounded-[var(--radius-lg)] border border-white/10 bg-white/[0.03] shine',
                    'p-4 sm:p-5 md:p-6',
                    'min-h-[120px] sm:min-h-[140px] md:min-h-[180px]',
                    'transition-colors',
                    t.span,
                  ].join(' ')}
                >
                  <div
                    className="pointer-events-none absolute inset-0 opacity-100"
                    aria-hidden="true"
                    style={{ background: t.gradient }}
                  />
                  <div className="relative z-10">
                    <div className="mb-3 flex items-center gap-3">
                      <span
                        data-bento-badge
                        className="inline-flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-[10px] sm:rounded-[12px] border border-white/10 bg-white/5 text-[10px] sm:text-xs font-semibold text-white/75"
                      >
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <span className="h-px flex-1 bg-white/10" />
                    </div>
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold tracking-tight text-white">
                      {t.title}
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-white/65">
                      {t.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGallerySection;


