'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import matrix from '@/content/home/program-matrix.json';

type Tone = 'primary' | 'warning' | 'accent';

const headerTone: Record<Tone, string> = {
  primary: 'bg-primary text-white',
  warning: 'bg-warning text-white',
  accent: 'bg-accent text-white',
};

const cellTone: Record<Tone, string> = {
  primary: 'bg-primary/[0.07] text-text',
  warning: 'bg-warning/10 text-text',
  accent: 'bg-accent/[0.08] text-text',
};

const tabTone: Record<Tone, string> = {
  primary: 'bg-primary text-white',
  warning: 'bg-warning text-white',
  accent: 'bg-accent text-white',
};

const { ageBands, tracks } = matrix as {
  ageBands: string[];
  tracks: { name: string; tone: Tone; programs: string[] }[];
};

function Cell({ program, tone }: { program: string; tone: Tone }) {
  if (!program) {
    return (
      <div className="flex min-h-[56px] items-center justify-center rounded-xl border border-dashed border-border bg-bg text-text-muted/50">
        —
      </div>
    );
  }
  return (
    <div
      className={cn(
        'flex min-h-[56px] items-center justify-center rounded-xl px-3 text-center text-sm font-semibold',
        cellTone[tone],
      )}
    >
      {program}
    </div>
  );
}

export default function ProgramRoadmap() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      {/* Desktop / tablet: full matrix */}
      <div className="hidden md:block">
        <div className="grid grid-cols-[64px_repeat(3,1fr)] gap-3">
          <div />
          {tracks.map((track) => (
            <div
              key={track.name}
              className={cn(
                'rounded-xl py-2.5 text-center text-sm font-bold uppercase tracking-wider',
                headerTone[track.tone],
              )}
            >
              {track.name}
            </div>
          ))}

          {ageBands.map((age, row) => (
            <div key={age} className="contents">
              <div className="flex items-center justify-center text-sm font-bold text-text-muted">
                {age}
              </div>
              {tracks.map((track) => (
                <Cell
                  key={track.name + age}
                  program={track.programs[row]}
                  tone={track.tone}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: tabs by track */}
      <div className="md:hidden">
        <div className="flex gap-2">
          {tracks.map((track, i) => (
            <button
              key={track.name}
              type="button"
              onClick={() => setActiveTab(i)}
              className={cn(
                'flex-1 rounded-lg py-2 text-sm font-bold transition-colors',
                i === activeTab
                  ? tabTone[track.tone]
                  : 'bg-black/5 text-text-muted',
              )}
            >
              {track.name}
            </button>
          ))}
        </div>
        <div className="mt-4 space-y-2">
          {ageBands.map((age, row) => (
            <div key={age} className="flex items-center gap-3">
              <div className="w-12 shrink-0 text-sm font-bold text-text-muted">
                {age}
              </div>
              <div className="flex-1">
                <Cell
                  program={tracks[activeTab].programs[row]}
                  tone={tracks[activeTab].tone}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
