import { cn } from '@/lib/utils';

export default function Card({
  children,
  className,
  hover = false,
}: {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-border bg-surface p-6 shadow-card',
        hover && 'transition-shadow duration-300 hover:shadow-card-hover',
        className,
      )}
    >
      {children}
    </div>
  );
}
