import { cn } from '@/lib/utils';
import { ArrowRight, Star } from 'lucide-react';

type Tone = 'primary' | 'warning' | 'accent';
type Step = { age: string; name: string; sub?: string; slug: string };
type Track = { id: string; name: string; tone: Tone; steps: Step[] };

const tracks: Track[] = [
  {
    id: 'coding',
    name: 'Coding Track',
    tone: 'primary',
    steps: [
      { age: 'Ages 5–6', name: 'First Steps in Coding', sub: 'ScratchJr & Tynker', slug: 'first-steps-coding' },
      { age: 'Ages 7–8', name: 'Coding & AI in Minecraft', slug: 'minecraft-coding-ai' },
      { age: 'Ages 9–10', name: 'Create 3D Worlds in Delightrex', slug: 'delightrex-3d-worlds' },
      { age: 'Ages 11+', name: 'Build & Code in Roblox', slug: 'roblox-build-code' },
      { age: 'Ages 12+', name: 'Python / Unity / 3D Modeling', slug: 'python-coding' },
    ],
  },
  {
    id: 'robotics',
    name: 'Robotics Track',
    tone: 'warning',
    steps: [
      { age: 'Ages 4–5', name: 'First Robotics with Qobo', slug: 'first-robotics-qobo' },
      { age: 'Age 6', name: 'Smart Robotics for Kids', slug: 'smart-robotics-kids' },
      { age: 'Ages 7–8', name: 'Mechanical Robotics Lab', slug: 'mechanical-robotics-lab' },
      { age: 'Ages 9–10', name: 'Essential Robotics Skills', slug: 'essential-robotics-skills' },
      { age: 'Ages 11+', name: 'Robotics Prime', slug: 'robotics-prime' },
      { age: 'Ages 12+', name: 'Physics / Arduino Robotics', slug: 'physics-in-robotics' },
    ],
  },
  {
    id: 'creativity',
    name: 'Creativity Track',
    tone: 'accent',
    steps: [
      { age: 'Ages 4–6', name: 'Digital Art for Kids', slug: 'digital-art-for-kids' },
      { age: 'Ages 7–8', name: 'Digital Drawing Pro', slug: 'digital-drawing-pro' },
      { age: 'Ages 11+', name: 'Digital Illustration with Procreate', slug: 'digital-illustration-procreate' },
    ],
  },
];

const labelTone: Record<Tone, string> = {
  primary: 'bg-primary text-white',
  warning: 'bg-warning text-white',
  accent: 'bg-accent text-white',
};
const baseCard: Record<Tone, string> = {
  primary: 'border-primary/20 bg-primary/[0.04]',
  warning: 'border-warning/25 bg-warning/[0.06]',
  accent: 'border-accent/25 bg-accent/[0.05]',
};
const onCard: Record<Tone, string> = {
  primary: 'border-primary bg-primary text-white ring-2 ring-primary/30',
  warning: 'border-warning bg-warning text-white ring-2 ring-warning/30',
  accent: 'border-accent bg-accent text-white ring-2 ring-accent/30',
};

export default function ProgramPathway({
  highlight = [],
}: {
  highlight?: string[];
}) {
  return (
    <div>
      <div className="space-y-6">
        {tracks.map((track) => (
          <div key={track.id}>
            <span
              className={cn(
                'inline-block rounded-lg px-3 py-1 text-xs font-bold uppercase tracking-wider',
                labelTone[track.tone],
              )}
            >
              {track.name}
            </span>
            <div className="mt-3 flex gap-3 overflow-x-auto pb-2">
              {track.steps.map((step, i) => {
                const on = highlight.includes(step.slug);
                return (
                  <div key={step.slug} className="flex items-center gap-3">
                    <div
                      className={cn(
                        'flex w-[170px] shrink-0 flex-col rounded-2xl border p-4',
                        on ? onCard[track.tone] : `bg-surface ${baseCard[track.tone]}`,
                      )}
                    >
                      <span
                        className={cn(
                          'text-xs font-semibold',
                          on ? 'text-white/80' : 'text-text-muted',
                        )}
                      >
                        {step.age}
                      </span>
                      <span
                        className={cn(
                          'mt-1 text-sm font-bold leading-tight',
                          on ? 'text-white' : 'text-text',
                        )}
                      >
                        {step.name}
                      </span>
                      {step.sub && (
                        <span
                          className={cn(
                            'mt-0.5 text-xs',
                            on ? 'text-white/80' : 'text-text-muted',
                          )}
                        >
                          {step.sub}
                        </span>
                      )}
                      {on && (
                        <span className="mt-2 inline-flex w-fit items-center gap-1 rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide">
                          <Star className="h-3 w-3" /> Popular here
                        </span>
                      )}
                    </div>
                    {i < track.steps.length - 1 && (
                      <ArrowRight className="h-4 w-4 shrink-0 text-text-muted/40" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-2xl bg-gradient-to-br from-brand to-cyan px-6 py-5 text-white sm:px-8">
        <p className="text-[15px] leading-relaxed sm:text-base">
          Each program is a full academic year: 36+ lessons, homework, tests,
          and parent reports. $40/month per program. Start with one — add more
          as your school grows.
        </p>
      </div>
    </div>
  );
}
