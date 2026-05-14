import { cn } from '@/lib/utils';

type Level = { level: number; name: string; age: string; color: string };

const colorMap: Record<string, string> = {
  primary: 'bg-primary/10 text-primary border-primary/30',
  accent: 'bg-accent/10 text-accent border-accent/30',
  warning: 'bg-warning/15 text-warning border-warning/30',
};

export default function LevelRoadmap({ levels }: { levels: Level[] }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-border bg-white p-6 shadow-card sm:p-8">
      <div className="flex flex-wrap gap-3">
        {levels.map((l, i) => (
          <div key={l.level} className="flex items-center gap-3">
            <div
              className={cn(
                'flex flex-col rounded-2xl border px-4 py-3 min-w-[140px]',
                colorMap[l.color] ?? colorMap.primary,
              )}
            >
              <span className="text-xs font-bold uppercase tracking-wider opacity-70">
                Level {l.level}
              </span>
              <span className="mt-0.5 text-base font-bold text-text">{l.name}</span>
              <span className="mt-0.5 text-xs text-text-muted">Ages {l.age}</span>
            </div>
            {i < levels.length - 1 && (
              <span className="text-text-muted/60" aria-hidden>
                →
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
