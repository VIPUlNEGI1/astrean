import { ArrowUpRight, Clock, Sparkles, Zap } from 'lucide-react';
import Reveal from '@/components/motion/Reveal';
import Link from 'next/link';

function StatCard({
  label,
  value,
  delta,
  icon: Icon,
  delayMs,
  tone = 'neutral',
}: {
  label: string;
  value: string;
  delta: string;
  icon: React.ComponentType<{ className?: string }>;
  delayMs: number;
  tone?: 'neutral' | 'good';
}) {
  const toneClass =
    tone === 'good'
      ? 'border-emerald-400/25 bg-emerald-300/10 text-emerald-100'
      : 'border-white/10 bg-white/[0.03] text-white/70';

  return (
    <div
      className="relative surface surface-hover shine p-6 motion-safe:animate-[rise-in_650ms_cubic-bezier(0.22,1,0.36,1)_both]"
      style={{ animationDelay: `${delayMs}ms` }}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px opacity-80"
        aria-hidden="true"
        style={{
          background:
            'linear-gradient(90deg, rgba(34,211,238,0.0), rgba(34,211,238,0.35), rgba(167,139,250,0.30), rgba(52,211,153,0.25), rgba(34,211,238,0.0))',
        }}
      />
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold tracking-[0.28em] uppercase text-white/55">
            {label}
          </p>
          <div className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight text-white">
            {value}
          </div>
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-[14px] border border-white/10 bg-white/[0.04]">
          <Icon className="h-5 w-5 text-white/75" />
        </div>
      </div>
      <div className="mt-4 flex items-center gap-2 text-sm text-white/65">
        <span
          className={`inline-flex items-center gap-1 rounded-full border px-2 py-1 text-xs font-semibold ${toneClass}`}
        >
          <ArrowUpRight className="h-3.5 w-3.5" />
          {delta}
        </span>
        <span>vs last 30 days</span>
      </div>
    </div>
  );
}

const messages = [
  { name: 'Jason B.', time: '5:14 AM', text: 'Sounds good — send your calendar link?' },
  { name: 'Katy J.', time: '3:24 AM', text: 'Okay, what does onboarding look like?' },
  { name: 'Buddy R.', time: '5:24 AM', text: 'Smart catch. Can you share pricing?' },
  { name: 'Tommy K.', time: '8:24 PM', text: 'That message was great. Let’s chat.' },
  { name: 'Kaleb S.', time: '1:24 PM', text: 'This is relevant — loop me in with the team.' },
];

const leads = [
  { company: 'Tacnode', stage: 'Replied', owner: 'A. Singh', score: '92', updated: '2h ago' },
  { company: 'Brevity', stage: 'Booked', owner: 'P. Mehta', score: '88', updated: '6h ago' },
  { company: 'Aminochain', stage: 'In sequence', owner: 'R. Patel', score: '81', updated: '1d ago' },
  { company: 'Wayside', stage: 'Qualified', owner: 'K. Sharma', score: '86', updated: '1d ago' },
  { company: 'Credal', stage: 'Replied', owner: 'S. Rao', score: '84', updated: '2d ago' },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Stats */}
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Reveal delayMs={40}>
          <StatCard
            label="Replies"
            value="148"
            delta="+18%"
            icon={Sparkles}
            delayMs={0}
            tone="good"
          />
        </Reveal>
        <Reveal delayMs={80}>
          <StatCard
            label="Meetings booked"
            value="23"
            delta="+12%"
            icon={Zap}
            delayMs={0}
            tone="good"
          />
        </Reveal>
        <Reveal delayMs={120} className="sm:col-span-2 lg:col-span-1">
          <StatCard
            label="Time saved"
            value="61h"
            delta="+21%"
            icon={Clock}
            delayMs={0}
            tone="good"
          />
        </Reveal>
      </section>

      <div className="grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
        {/* Leads table */}
        <Reveal as="section" id="leads" className="surface p-6" delayMs={90}>
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold tracking-[0.28em] uppercase text-white/55">
                Pipeline
              </p>
              <h2 className="mt-2 text-lg font-semibold tracking-tight text-white">
                High-intent leads
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-white/65">
                A clean, Valley-style overview: who’s engaged, who’s booked, and
                what needs a reply.
              </p>
            </div>
            <button className="inline-flex items-center justify-center rounded-[14px] border border-white/12 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-white/85 hover:bg-white/[0.06] hover:border-white/20 transition">
              Export
            </button>
          </div>

          <div className="mt-6 overflow-x-auto rounded-[16px] border border-white/10 custom-scrollbar">
            <table className="min-w-[600px] xs:min-w-[720px] w-full text-sm">
              <thead className="bg-white/[0.03] text-white/65">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Company</th>
                  <th className="px-4 py-3 text-left font-semibold">Stage</th>
                  <th className="px-4 py-3 text-left font-semibold">Owner</th>
                  <th className="px-4 py-3 text-left font-semibold">Score</th>
                  <th className="px-4 py-3 text-left font-semibold">Updated</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {leads.map((row) => (
                  <tr key={row.company} className="hover:bg-white/[0.03] transition-colors">
                    <td className="px-4 py-3 font-semibold text-white/90">
                      {row.company}
                    </td>
                    <td className="px-4 py-3 text-white/75">
                      <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs font-semibold">
                        {row.stage}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-white/70">{row.owner}</td>
                    <td className="px-4 py-3 text-white/80">{row.score}</td>
                    <td className="px-4 py-3 text-white/60">{row.updated}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        {/* Inbox */}
        <Reveal as="section" id="inbox" className="surface p-6" delayMs={140}>
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold tracking-[0.28em] uppercase text-white/55">
                Inbox
              </p>
              <h2 className="mt-2 text-lg font-semibold tracking-tight text-white">
                Recent replies
              </h2>
            </div>
            <button className="inline-flex items-center justify-center rounded-[14px] bg-white text-slate-950 px-4 py-2 text-sm font-semibold shadow-lg shadow-black/25 transition hover:bg-white/90">
              Open inbox
            </button>
          </div>

          <div className="mt-6 space-y-2">
            {messages.map((m) => (
              <div
                key={`${m.name}-${m.time}`}
                className="rounded-[16px] border border-white/10 bg-white/[0.03] px-4 py-3 hover:bg-white/[0.05] transition-colors"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="min-w-0 flex items-center gap-3">
                    <div className="relative h-9 w-9 shrink-0 rounded-full border border-white/10 bg-white/5">
                      <div className="absolute inset-0 grid place-items-center text-xs font-semibold text-white/80">
                        {m.name
                          .split(' ')
                          .map((p) => p[0])
                          .slice(0, 2)
                          .join('')}
                      </div>
                      <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-emerald-300 ring-2 ring-slate-950/60" />
                    </div>
                    <div className="min-w-0">
                      <div className="truncate text-sm font-semibold text-white/90">
                        {m.name}
                      </div>
                      <div className="mt-1 truncate text-sm text-white/65">
                        {m.text}
                      </div>
                    </div>
                  </div>
                  <div className="shrink-0 text-xs text-white/50">{m.time}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 gradient-border">
            <div className="surface p-4">
              <p className="text-sm font-semibold text-white">
                Want this dashboard connected to your real data?
              </p>
              <p className="mt-2 text-sm text-white/65">
                Hook it into your CRM + outreach tooling, and ship automated
                reporting in days.
              </p>
              <Link 
                href="/contact"
                className="mt-4 inline-flex w-full items-center justify-center rounded-[14px] border border-white/12 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-white/85 hover:bg-white/[0.06] hover:border-white/20 transition"
              >
                Talk to us
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}


