import Link from 'next/link';
import Container from '@/components/shared/Container';
import Button from '@/components/shared/Button';
import Navigation from './Navigation';
import MobileMenu from './MobileMenu';
import Logo from './Logo';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link href="/" aria-label="GoCoding home" className="flex items-center gap-2">
          <Logo />
        </Link>

        <div className="hidden md:block">
          <Navigation />
        </div>

        <div className="hidden md:block">
          <Button href="/contact?demo=true" variant="primary" size="sm">
            Get a Free Demo Lesson
          </Button>
        </div>

        <MobileMenu />
      </Container>
    </header>
  );
}
