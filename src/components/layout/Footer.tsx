import Link from 'next/link';
import Container from '@/components/shared/Container';
import Logo from './Logo';
import { ArrowUpRight, Github, Linkedin, Twitter } from 'lucide-react';

const cols = [
  {
    heading: 'Explore',
    links: [
      { href: '/programs', label: 'All Programs' },
      { href: '/pricing', label: 'Pricing' },
      { href: '/for-tutoring-centers', label: 'For Tutoring Centers' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { href: '/about', label: 'About' },
      { href: '/contact', label: 'Contact' },
      { href: '/contact?demo=true', label: 'Get a Free Demo Lesson' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-border bg-white">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr_1fr]">
          <div>
            <Logo withTagline />
            <p className="mt-4 max-w-xs text-sm text-text-muted">
              Licensed STEM curriculum for independent afterschool and tutoring
              centers.
            </p>
            <a
              href="https://gocoding.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
            >
              Part of the GoCoding network — gocoding.tech
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
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
