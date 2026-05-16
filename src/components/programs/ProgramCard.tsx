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
      className="scroll-mt-36 rounded-2xl border border-border bg-surface p-6 shadow-card sm:p-7"
    >
      <div className="flex flex-wrap items-center gap-2">
        <Badge tone={tone}>{level}</Badge>
        <Badge tone="neutral">{ages}</Badge>
        <Badge tone="neutral">1 academic year</Badge>
      </div>
      <h3 className="mt-4 text-xl font-bold">{name}</h3>
      <p className="mt-2 text-[15px] text-text-muted">{description}</p>
      <div className="mt-4 flex items-start gap-2 rounded-xl bg-bg p-3 text-sm">
        <Wrench className="mt-0.5 h-4 w-4 shrink-0 text-text-muted" />
        <span>
          <span className="font-semibold">Equipment:</span> {equipment}
        </span>
      </div>
      <div className="mt-5">
        <Button href="/contact?demo=true" variant="outline" size="sm">
          Get a demo lesson for this program <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
