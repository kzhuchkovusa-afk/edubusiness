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
  primary: 'bg-primary/[0.07]',
  warning: 'bg-warning/10',
  accent: 'bg-accent/[0.08]',
};

const tabTone: Record<Tone, string> = {
  primary: 'bg-primary text-white',
  warning: 'bg-warning text-white',
  accent: 'bg-accent text-white',
};

const { ageBands, tracks, science } = matrix as {
  ageBands: string[];
  tracks: { name: string; tone: Tone; programs: string[] }[];
  science: { name: string; programs: { name: string; ages: string }[] };
};

function Cell({ program, tone }: { program: string; tone: Tone }) {
  if (!program) {
    return (
      <div className="flex min-h-[76px] items-center justify-center rounded-xl border border-dashed border-border bg-bg text-text-muted/50">
        —
      </div>
    );
  }
  const parts = program.split(';').map((p) => p.trim());
  return (
    <div
      className={cn(
        'flex min-h-[76px] flex-col items-center justify-center gap-0.5 rounded-xl px-2 py-2 text-center text-text',
        cellTone[tone],
      )}
    >
      {parts.map((p, i) => (
        <span key={i} className="text-xs font-semibold leading-tight sm:text-[13px]">
          {p}
        </span>
      ))}
    </div>
  );
}

function ScienceBlock() {
  return (
    <div className="mt-6 rounded-2xl border border-border bg-bg p-5 sm:p-6">
      <div className="mb-3 inline-block rounded-lg bg-text px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
        {science.name}
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {science.programs.map((p) => (
          <div key={p.name} className="rounded-xl border border-border bg-white p-4">
            <div className="font-bold">{p.name}</div>
            <div className="mt-0.5 text-sm text-text-muted">{p.ages}</div>
          </div>
        ))}
      </div>
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
                i === activeTab ? tabTone[track.tone] : 'bg-black/5 text-text-muted',
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

      <ScienceBlock />
    </div>
  );
}
