import Section from '@/components/shared/Section';
import SectionHeading from '@/components/shared/SectionHeading';
import { cn } from '@/lib/utils';

type Tone = 'danger' | 'warning' | 'accent';
type Bar = { label: string; value: string; weight: number; tone: string };

type Props = {
  title: string;
  left: { title: string; lines: { label: string; value: string }[] };
  right: { title: string; bars: Bar[] };
  callout: string;
};

const toneClasses: Record<Tone, string> = {
  danger: 'bg-danger',
  warning: 'bg-warning',
  accent: 'bg-accent',
};

function toneOf(t: string): Tone {
  return (['danger', 'warning', 'accent'].includes(t) ? t : 'warning') as Tone;
}

export default function PricingSection({ title, left, right, callout }: Props) {
  return (
    <Section>
      <div className="reveal max-w-3xl">
        <SectionHeading eyebrow="The math" title={title} />
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <div className="reveal rounded-3xl border border-danger/20 bg-danger/[0.04] p-7 shadow-card">
          <h3 className="text-xl font-bold">{left.title}</h3>
          <ul className="mt-6 space-y-4">
            {left.lines.map((l) => (
              <li
                key={l.label}
                className="flex flex-col items-start justify-between gap-1 rounded-xl bg-surface p-4 sm:flex-row sm:items-center"
              >
                <span className="text-[15px] text-text-muted">{l.label}</span>
                <span className="font-mono text-lg font-bold text-danger">{l.value}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal rounded-3xl border border-accent/30 bg-accent/[0.05] p-7 shadow-card">
          <h3 className="text-xl font-bold">{right.title}</h3>
          <ul className="mt-6 space-y-5">
            {right.bars.map((b) => (
              <li key={b.label}>
                <div className="flex items-baseline justify-between gap-3">
                  <span
                    className={cn(
                      'text-[15px]',
                      toneOf(b.tone) === 'accent' ? 'font-bold text-text' : 'text-text/85',
                    )}
                  >
                    {b.label}
                  </span>
                  <span
                    className={cn(
                      'font-mono text-sm font-semibold',
                      toneOf(b.tone) === 'accent' ? 'text-accent' : 'text-text-muted',
                    )}
                  >
                    {b.value}
                  </span>
                </div>
                <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-surface">
                  <div
                    className={cn('h-full rounded-full', toneClasses[toneOf(b.tone)])}
                    style={{ width: `${Math.max(4, b.weight)}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="reveal mt-10 rounded-2xl bg-text px-6 py-6 text-white sm:px-8">
        <p className="text-lg leading-relaxed sm:text-xl">{callout}</p>
      </div>
    </Section>
  );
}
