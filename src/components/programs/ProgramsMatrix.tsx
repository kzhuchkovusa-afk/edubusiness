'use client';

import { useState } from 'react';
import type { LucideIcon } from 'lucide-react';
import { Bot, Code2, Palette } from 'lucide-react';
import { cn } from '@/lib/utils';
import catalog from '@/content/programs/catalog.json';

type Tone = 'primary' | 'warning' | 'accent';
type Program = {
  slug: string;
  name: string;
  ages: string;
  level: string;
  matrixRows: number[];
};
type Track = { id: string; name: string; tone: Tone; programs: Program[] };

const { ageBands, comingSoon, tracks } = catalog as unknown as {
  ageBands: string[];
  comingSoon: { trackId: string; row: number }[];
  tracks: Track[];
};

const icons: Record<string, LucideIcon> = {
  coding: Code2,
  robotics: Bot,
  creativity: Palette,
};

const headerTone: Record<Tone, string> = {
  primary: 'bg-primary text-white',
  warning: 'bg-warning text-white',
  accent: 'bg-accent text-white',
};

const cellTone: Record<Tone, string> = {
  primary: 'bg-primary/[0.06]',
  warning: 'bg-warning/[0.09]',
  accent: 'bg-accent/[0.08]',
};

const hoverBorder: Record<Tone, string> = {
  primary: 'hover:border-primary',
  warning: 'hover:border-warning',
  accent: 'hover:border-accent',
};

const tabTone: Record<Tone, string> = {
  primary: 'bg-primary text-white',
  warning: 'bg-warning text-white',
  accent: 'bg-accent text-white',
};

function programsAt(track: Track, row: number) {
  return track.programs.filter((p) => p.matrixRows.includes(row));
}

function isSoon(trackId: string, row: number) {
  return comingSoon.some((c) => c.trackId === trackId && c.row === row);
}

function ProgramTile({ program, tone }: { program: Program; tone: Tone }) {
  return (
    <a
      href={`#prog-${program.slug}`}
      className={cn(
        'block rounded-xl border border-border bg-white px-3 py-2.5 text-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card-hover',
        hoverBorder[tone],
      )}
    >
      <span className="block text-[13px] font-bold leading-tight text-text">
        {program.name}
      </span>
      <span className="mt-0.5 block text-xs text-text-muted">{program.ages}</span>
    </a>
  );
}

function Cell({ track, row }: { track: Track; row: number }) {
  const progs = programsAt(track, row);
  return (
    <div className={cn('flex flex-col gap-2 rounded-xl p-2', cellTone[track.tone])}>
      {progs.length > 0 ? (
        progs.map((p) => <ProgramTile key={p.slug} program={p} tone={track.tone} />)
      ) : isSoon(track.id, row) ? (
        <div className="flex min-h-[60px] items-center justify-center rounded-xl border border-dashed border-border bg-white/60 px-2 text-center text-xs font-medium text-text-muted">
          New course — coming soon
        </div>
      ) : (
        <div className="flex min-h-[60px] items-center justify-center text-text-muted/40">
          —
        </div>
      )}
    </div>
  );
}

export default function ProgramsMatrix() {
  const [tab, setTab] = useState(0);

  return (
    <div>
      {/* Desktop */}
      <div className="hidden md:block">
        <div className="grid grid-cols-[72px_repeat(3,1fr)] gap-3">
          <div />
          {tracks.map((track) => {
            const TrackIcon = icons[track.id];
            return (
              <a
                key={track.id}
                href={`#${track.id}-track`}
                className={cn(
                  'flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-bold uppercase tracking-wider transition-opacity hover:opacity-90',
                  headerTone[track.tone],
                )}
              >
                <TrackIcon className="h-4 w-4" />
                {track.name}
              </a>
            );
          })}

          {ageBands.map((age, row) => (
            <div key={age} className="contents">
              <div className="flex items-center justify-center text-sm font-bold text-text-muted">
                {age}
              </div>
              {tracks.map((track) => (
                <Cell key={track.id + age} track={track} row={row} />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: tabbed by track */}
      <div className="md:hidden">
        <div className="flex gap-2">
          {tracks.map((track, i) => {
            const TrackIcon = icons[track.id];
            return (
              <button
                key={track.id}
                type="button"
                onClick={() => setTab(i)}
                className={cn(
                  'flex flex-1 items-center justify-center gap-1.5 rounded-lg py-2 text-sm font-bold transition-colors',
                  i === tab ? tabTone[track.tone] : 'bg-black/5 text-text-muted',
                )}
              >
                <TrackIcon className="h-4 w-4" />
                {track.name}
              </button>
            );
          })}
        </div>
        <div className="mt-4 space-y-2">
          {ageBands.map((age, row) => (
            <div key={age} className="flex items-stretch gap-3">
              <div className="flex w-12 shrink-0 items-center justify-center text-sm font-bold text-text-muted">
                {age}
              </div>
              <div className="flex-1">
                <Cell track={tracks[tab]} row={row} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
