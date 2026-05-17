'use client';

import { useState } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import catalog from '@/content/programs/catalog.json';

type Program = {
  slug: string;
  name: string;
  ages: string;
  level: string;
  description: string;
};
type Track = { id: string; name: string; tone: string; programs: Program[] };

const tracks = catalog.tracks as Track[];

const emojiBySlug: Record<string, string> = {
  'first-steps-coding': '🧩',
  'minecraft-coding-ai': '⛏️',
  'delightrex-3d-worlds': '🏗️',
  'roblox-build-code': '🎮',
  'python-coding': '🐍',
  'unity-3d-game-studio': '🎯',
  '3d-modeling': '🧊',
  'first-robotics-qobo': '🤖',
  'smart-robotics-kids': '🔧',
  'mechanical-robotics-lab': '⚙️',
  'essential-robotics-skills': '🛠️',
  'robotics-prime': '🦾',
  'physics-in-robotics': '🧲',
  'arduino-robotics-circuits': '💡',
  'digital-art-for-kids': '🎨',
  'digital-drawing-pro': '✏️',
  'digital-illustration-procreate': '🖌️',
};

const TABS = [
  { id: 'all', label: 'All' },
  { id: 'coding', label: 'Coding' },
  { id: 'robotics', label: 'Robotics' },
  { id: 'creativity', label: 'Creativity' },
];

export default function ProgramsTabs() {
  const [tab, setTab] = useState('all');

  const programs: Program[] =
    tab === 'all'
      ? tracks.flatMap((t) => t.programs)
      : (tracks.find((t) => t.id === tab)?.programs ?? []);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-3">
        {TABS.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setTab(t.id)}
            className={cn(
              'rounded-full border px-6 py-2 text-sm font-semibold transition-colors',
              tab === t.id
                ? 'border-transparent bg-gradient-to-br from-brand to-cyan text-white'
                : 'border-white/12 text-ink-muted hover:border-brand hover:text-brand-light',
            )}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {programs.map((p) => (
          <div
            key={p.slug}
            className="group flex flex-col rounded-2xl border border-white/6 bg-ink-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-card-dark"
          >
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-white/[0.06] text-2xl">
              {emojiBySlug[p.slug] ?? '🚀'}
            </div>
            <div className="mt-4 text-xs font-bold uppercase tracking-wider text-cyan">
              {p.ages}
            </div>
            <h3 className="mt-1 font-heading text-base font-bold text-white">
              {p.name}
            </h3>
            <p className="mt-1.5 flex-1 text-sm text-ink-muted">{p.description}</p>
            <div className="mt-4 grid h-9 w-9 place-items-center rounded-full bg-brand/15 text-brand-light transition-colors group-hover:bg-gradient-to-br group-hover:from-brand group-hover:to-cyan group-hover:text-white">
              →
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/programs"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-brand to-cyan px-7 py-3.5 text-[15px] font-bold text-white transition-all hover:-translate-y-0.5 hover:shadow-glow"
        >
          See All Programs →
        </Link>
      </div>
    </div>
  );
}
