import Link from 'next/link';
import Container from '@/components/shared/Container';
import Button from '@/components/shared/Button';
import Navigation from './Navigation';
import MobileMenu from './MobileMenu';
import Logo from './Logo';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-ink/85 backdrop-blur supports-[backdrop-filter]:bg-ink/70">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link href="/" aria-label="GoCoding home" className="flex items-center">
          <Logo withTagline />
        </Link>

        <div className="hidden md:block">
          <Navigation />
        </div>

        <div className="hidden md:block">
          <Button href="/contact?demo=true" variant="gradient" size="sm">
            Get a Free Demo →
          </Button>
        </div>

        <MobileMenu />
      </Container>
    </header>
  );
}
