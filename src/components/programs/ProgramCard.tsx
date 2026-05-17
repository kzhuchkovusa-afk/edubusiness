import Badge from '@/components/shared/Badge';
import Button from '@/components/shared/Button';
import { ArrowRight, Wrench } from 'lucide-react';

type Tone = 'primary' | 'warning' | 'accent';

type Props = {
  slug: string;
  name: string;
  ages: string;
  level: string;
  description: string;
  equipment: string;
  tone: Tone;
};

const toneGrad: Record<Tone, string> = {
  primary: 'from-brand to-cyan',
  warning: 'from-flame to-rose',
  accent: 'from-grass to-cyan',
};

export default function ProgramCard({
  slug,
  name,
  ages,
  level,
  description,
  equipment,
  tone,
}: Props) {
  return (
    <div
      id={`prog-${slug}`}
      className="relative flex h-full scroll-mt-36 flex-col overflow-hidden rounded-2xl border border-white/6 bg-surface p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-card-dark sm:p-7"
    >
      <div
        className={`absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${toneGrad[tone]}`}
      />
      <div className="flex flex-wrap items-center gap-2">
        <Badge tone={tone}>{level}</Badge>
        <Badge tone="neutral">{ages}</Badge>
        <Badge tone="neutral">1 academic year</Badge>
      </div>
      <h3 className="mt-4 font-heading text-xl font-bold text-white">{name}</h3>
      <p className="mt-2 text-[15px] text-ink-muted">{description}</p>
      <div className="mt-4 flex items-start gap-2 rounded-xl border border-white/6 bg-bg p-3 text-sm text-ink-text">
        <Wrench className="mt-0.5 h-4 w-4 shrink-0 text-ink-muted" />
        <span>
          <span className="font-semibold text-white">Equipment:</span>{' '}
          {equipment}
        </span>
      </div>
      <div className="mt-5 pt-1">
        <Button href="/contact?demo=true" variant="outline" size="sm">
          Get a demo lesson for this program <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
