import Link from 'next/link';
import Container from '@/components/shared/Container';
import Logo from './Logo';
import { Github, Linkedin, Twitter } from 'lucide-react';

const cols = [
  {
    heading: 'Programs',
    links: [
      { href: '/programs', label: 'All Programs' },
      { href: '/programs/scratch', label: 'Scratch' },
      { href: '/programs/python', label: 'Python' },
      { href: '/programs/robotics', label: 'Robotics' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { href: '/about', label: 'About' },
      { href: '/pricing', label: 'Pricing' },
      { href: '/contact', label: 'Contact' },
    ],
  },
  {
    heading: 'For Centers',
    links: [
      { href: '/for-tutoring-centers', label: 'Tutoring Centers' },
      { href: '/', label: 'Language Schools (soon)' },
      { href: '/', label: 'Math Centers (soon)' },
      { href: '/', label: 'Blog (soon)' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-border bg-white">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_repeat(3,1fr)]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-text-muted">
              Licensed STEM Curriculum for Afterschool Centers.
              Affordable. Simple. Fast results.
            </p>
            <div className="mt-5 flex gap-3 text-text-muted">
              <a aria-label="LinkedIn" href="#" className="hover:text-text">
                <Linkedin className="h-5 w-5" />
              </a>
              <a aria-label="Twitter" href="#" className="hover:text-text">
                <Twitter className="h-5 w-5" />
              </a>
              <a aria-label="GitHub" href="#" className="hover:text-text">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          {cols.map((col) => (
            <div key={col.heading}>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text-muted">
                {col.heading}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[15px] text-text/85 hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-sm text-text-muted sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} GoCoding. All rights reserved.</p>
          <p>Built for independent education businesses.</p>
        </div>
      </Container>
    </footer>
  );
}
