import { cn } from '@/lib/utils';

type Tone = 'primary' | 'accent' | 'warning' | 'danger' | 'neutral';

const tones: Record<Tone, string> = {
  primary: 'bg-primary/10 text-primary',
  accent: 'bg-accent/10 text-accent',
  warning: 'bg-warning/15 text-warning',
  danger: 'bg-danger/10 text-danger',
  neutral: 'bg-white/10 text-text',
};

export default function Badge({
  children,
  tone = 'primary',
  className,
}: {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide',
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
