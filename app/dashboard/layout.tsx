'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import {
  BarChart3,
  Inbox,
  Users,
  Settings,
  Search,
  ArrowRight,
  Menu,
  X,
} from 'lucide-react';

type SidebarItem = {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
};

function Sidebar({
  items,
  onNavigate,
}: {
  items: SidebarItem[];
  onNavigate?: () => void;
}) {
  return (
    <div className="surface p-5">
      <div className="flex items-center justify-between gap-3">
        <Link
          href="/"
          onClick={onNavigate}
          className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-[14px] border border-white/10 bg-white/5">
            <BarChart3 className="h-4 w-4 text-white/75" />
          </span>
          <span className="text-sm font-semibold tracking-tight">Astrenox</span>
        </Link>
        <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-semibold tracking-[0.22em] text-white/70 uppercase">
          Beta
        </span>
      </div>

      <nav className="mt-6 space-y-1">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.label}
              href={item.href}
              onClick={onNavigate}
              className="group flex items-center gap-3 rounded-[14px] px-3 py-2 text-sm font-semibold text-white/75 hover:text-white hover:bg-white/[0.05] transition-colors"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-[14px] border border-white/10 bg-white/[0.04] group-hover:bg-white/[0.06] transition-colors">
                <Icon className="h-4 w-4 text-white/70" />
              </span>
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-8 gradient-border">
        <div className="surface p-4">
          <p className="text-[11px] font-semibold tracking-[0.28em] uppercase text-white/60">
            Next step
          </p>
          <p className="mt-2 text-sm font-semibold text-white">
            Book a demo and get a tailored rollout plan.
          </p>
          <Link
            href="/contact"
            onClick={onNavigate}
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-[14px] bg-white text-slate-950 px-4 py-2 text-sm font-semibold shadow-lg shadow-black/30 transition hover:bg-white/90"
          >
            Book demo
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const sidebarNav = useMemo<SidebarItem[]>(
    () => [
      { label: 'Overview', href: '/dashboard', icon: BarChart3 },
      { label: 'Inbox', href: '/dashboard#inbox', icon: Inbox },
      { label: 'Leads', href: '/dashboard#leads', icon: Users },
      { label: 'Settings', href: '/dashboard#settings', icon: Settings },
    ],
    []
  );

  // Webflow-like scroll depth: expose scroll position as CSS variable
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        document.documentElement.style.setProperty(
          '--scroll-y',
          String(window.scrollY || 0)
        );
      });
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div className="min-h-screen text-white">
      {/* App background (calmer than marketing) */}
      <div
        className="pointer-events-none fixed inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(1100px 700px at 10% 0%, rgba(34,211,238,0.10), transparent 60%), radial-gradient(1000px 700px at 90% 0%, rgba(167,139,250,0.12), transparent 62%), radial-gradient(900px 800px at 50% 110%, rgba(52,211,153,0.08), transparent 60%), #050815',
        }}
      />

      {/* Parallax accents */}
      <div className="pointer-events-none fixed inset-0 opacity-70" aria-hidden>
        <div
          className="parallax absolute -top-20 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full blur-3xl"
          style={{
            ['--parallax-mult' as any]: '-0.05px',
            background:
              'radial-gradient(circle at 30% 30%, rgba(34,211,238,0.22), transparent 60%)',
          }}
        />
        <div
          className="parallax absolute top-[18%] -right-28 h-[520px] w-[520px] rounded-full blur-3xl"
          style={{
            ['--parallax-mult' as any]: '-0.03px',
            background:
              'radial-gradient(circle at 30% 30%, rgba(167,139,250,0.20), transparent 60%)',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
          {/* Sidebar (desktop) */}
          <aside className="hidden lg:block">
            <div className="sticky top-6">
              <Sidebar items={sidebarNav} />
            </div>
          </aside>

          {/* Main */}
          <div className="min-w-0">
            {/* Topbar */}
            <header className="surface px-4 py-3 md:px-5 md:py-4 sticky top-6 z-10">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="lg:hidden">
                    <button
                      type="button"
                      onClick={() => setMobileNavOpen(true)}
                      className="flex h-10 w-10 items-center justify-center rounded-[14px] border border-white/10 bg-white/5 hover:bg-white/[0.07] transition"
                      aria-label="Open navigation"
                    >
                      <Menu className="h-5 w-5 text-white/80" />
                    </button>
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-[0.28em] uppercase text-white/60">
                      Dashboard
                    </p>
                    <h1 className="mt-1 text-base md:text-lg font-semibold tracking-tight text-white">
                      Overview
                    </h1>
                  </div>
                </div>

                <div className="hidden md:flex flex-1 max-w-md items-center gap-2 rounded-[14px] border border-white/10 bg-white/[0.03] px-3 py-2">
                  <Search className="h-4 w-4 text-white/55" />
                  <input
                    className="w-full bg-transparent text-sm text-white/80 placeholder:text-white/45 focus:outline-none"
                    placeholder="Search messages, leads, workflows…"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-[14px] border border-white/12 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-white/85 hover:bg-white/[0.06] hover:border-white/20 transition"
                  >
                    Request access
                  </Link>
                  <div className="h-10 w-10 rounded-[14px] border border-white/10 bg-white/5" />
                </div>
              </div>

              {/* Mobile search */}
              <div className="mt-3 md:hidden">
                <div className="flex items-center gap-2 rounded-[14px] border border-white/10 bg-white/[0.03] px-3 py-2">
                  <Search className="h-4 w-4 text-white/55" />
                  <input
                    className="w-full bg-transparent text-sm text-white/80 placeholder:text-white/45 focus:outline-none"
                    placeholder="Search…"
                  />
                </div>
              </div>
            </header>

            <main className="mt-6 animate-in fade-in slide-in-from-bottom-2 duration-700">{children}</main>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileNavOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/55 backdrop-blur-sm"
            onClick={() => setMobileNavOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute inset-y-0 left-0 w-[86%] max-w-[360px] p-3">
            <div className="mb-3 flex items-center justify-between">
              <Link
                href="/"
                onClick={() => setMobileNavOpen(false)}
                className="inline-flex items-center gap-2 text-white/85 hover:text-white transition"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-[14px] border border-white/10 bg-white/5">
                  <BarChart3 className="h-4 w-4 text-white/75" />
                </span>
                <span className="text-sm font-semibold tracking-tight">
                  Back to site
                </span>
              </Link>
              <button
                type="button"
                onClick={() => setMobileNavOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-[14px] border border-white/10 bg-white/5 hover:bg-white/[0.07] transition"
                aria-label="Close navigation"
              >
                <X className="h-5 w-5 text-white/80" />
              </button>
            </div>
            <Sidebar items={sidebarNav} onNavigate={() => setMobileNavOpen(false)} />
          </div>
        </div>
      )}
    </div>
  );
}


