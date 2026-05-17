import { cn } from '@/lib/utils';
import Container from './Container';

type Props = {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  tone?: 'default' | 'surface' | 'muted';
};

const tones = {
  default: 'bg-bg',
  surface: 'bg-surface',
  muted: 'bg-white/[0.04]',
};

export default function Section({
  children,
  className,
  containerClassName,
  id,
  tone = 'default',
}: Props) {
  return (
    <section
      id={id}
      className={cn('py-16 sm:py-20 md:py-24 lg:py-28', tones[tone], className)}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
