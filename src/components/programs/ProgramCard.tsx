import Link from 'next/link';
import Badge from '@/components/shared/Badge';
import { ArrowRight } from 'lucide-react';

type Props = {
  slug: string;
  name: string;
  ageRange: string;
  level: string;
  lessons: number;
  tagline: string;
};

const levelTone: Record<string, 'primary' | 'accent' | 'warning'> = {
  Beginner: 'primary',
  Intermediate: 'accent',
  Advanced: 'warning',
};

export default function ProgramCard({
  slug,
  name,
  ageRange,
  level,
  lessons,
  tagline,
}: Props) {
  return (
    <Link
      href={`/programs/${slug}`}
      className="reveal group flex h-full flex-col rounded-2xl border border-border bg-surface p-6 shadow-card transition-shadow hover:shadow-card-hover"
    >
      <div className="flex items-center justify-between gap-3">
        <Badge tone={levelTone[level] ?? 'primary'}>{level}</Badge>
        <span className="text-xs font-semibold uppercase tracking-wider text-text-muted">
          {lessons} lessons
        </span>
      </div>
      <h3 className="mt-5 text-xl font-bold">{name}</h3>
      <div className="mt-1 text-sm text-text-muted">{ageRange}</div>
      <p className="mt-4 text-[15px] text-text/80">{tagline}</p>
      <div className="mt-auto pt-6 text-sm font-semibold text-primary group-hover:underline">
        Learn more <ArrowRight className="ml-1 inline h-4 w-4" />
      </div>
    </Link>
  );
}
