import Container from '@/components/shared/Container';
import { Bot, Code2, LayoutGrid, Palette } from 'lucide-react';

const links = [
  { href: '#program-matrix', label: 'All programs', icon: LayoutGrid },
  { href: '#coding-track', label: 'Coding', icon: Code2 },
  { href: '#robotics-track', label: 'Robotics', icon: Bot },
  { href: '#creativity-track', label: 'Creativity', icon: Palette },
];

export default function TrackNav() {
  return (
    <div className="sticky top-16 z-30 border-b border-white/8 bg-ink/90 backdrop-blur">
      <Container>
        <nav
          aria-label="Program tracks"
          className="flex gap-2 overflow-x-auto py-3"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-white/10 bg-ink-card px-3.5 py-1.5 text-sm font-semibold text-ink-muted transition-colors hover:border-cyan/50 hover:text-cyan"
            >
              <l.icon className="h-4 w-4" />
              {l.label}
            </a>
          ))}
        </nav>
      </Container>
    </div>
  );
}
