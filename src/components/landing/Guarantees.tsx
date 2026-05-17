import { BadgeCheck, FileX, RefreshCw, Trophy } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Item = { icon: LucideIcon; title: string; text: string };

const items: Item[] = [
  {
    icon: BadgeCheck,
    title: 'Free demo lesson',
    text: 'Run a real class with real students before you spend a dollar. If it does not work — you have lost nothing.',
  },
  {
    icon: FileX,
    title: 'No contract',
    text: 'Month to month. Cancel anytime. No penalties, no calls, no guilt.',
  },
  {
    icon: Trophy,
    title: 'Price-match guarantee',
    text: 'Find a licensed STEM curriculum with this scope of materials for less than $40/month — and we will beat it.',
  },
  {
    icon: RefreshCw,
    title: 'Teacher-proof promise',
    text: 'If your teacher cannot deliver the lesson after our 10-minute prep guide, we will walk them through it on a free Zoom call.',
  },
];

export default function Guarantees() {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      {items.map((it) => (
        <div
          key={it.title}
          className="reveal rounded-2xl border border-accent/30 bg-surface p-6 shadow-card"
        >
          <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-white">
            <it.icon className="h-5 w-5" />
          </div>
          <h3 className="mt-4 text-base font-bold">{it.title}</h3>
          <p className="mt-1.5 text-sm text-text-muted">{it.text}</p>
        </div>
      ))}
    </div>
  );
}
