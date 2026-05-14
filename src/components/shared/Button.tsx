import Link from 'next/link';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'outline' | 'ghost' | 'accent';
type Size = 'sm' | 'md' | 'lg';

type BaseProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsLink = BaseProps & { href: string; onClick?: never; type?: never };
type ButtonAsButton = BaseProps & {
  href?: undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset';
};

type Props = ButtonAsLink | ButtonAsButton;

const variants: Record<Variant, string> = {
  primary:
    'bg-primary text-white hover:bg-primary-dark shadow-card hover:shadow-card-hover',
  outline:
    'bg-white text-text border border-border hover:border-primary hover:text-primary',
  ghost: 'bg-transparent text-text hover:bg-black/5',
  accent: 'bg-accent text-white hover:brightness-95 shadow-card hover:shadow-card-hover',
};

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-3 text-[15px]',
  lg: 'px-7 py-4 text-base',
};

export default function Button(props: Props) {
  const { variant = 'primary', size = 'md', className, children } = props;
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
    variants[variant],
    sizes[size],
    className,
  );

  if ('href' in props && props.href) {
    const isExternal = /^https?:\/\//.test(props.href);
    if (isExternal) {
      return (
        <a href={props.href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={props.type ?? 'button'} onClick={props.onClick} className={classes}>
      {children}
    </button>
  );
}
