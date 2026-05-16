import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

export const NAV_LINKS = [
  { href: '/programs', label: 'Programs' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
];

export const SEGMENT_LINKS = [
  { href: '/for-tutoring-centers', label: 'For Tutoring Centers' },
  { href: '/for-coding-centers', label: 'For Coding Centers' },
  { href: '/for-afterschool-centers', label: 'For Afterschool Centers' },
  { href: '/for-language-schools', label: 'For Language Schools' },
];

const linkClass =
  'text-[15px] font-medium text-text/80 transition-colors hover:text-text';

export default function Navigation() {
  return (
    <nav aria-label="Primary" className="flex items-center gap-7">
      {NAV_LINKS.map((link) => (
        <Link key={link.href} href={link.href} className={linkClass}>
          {link.label}
        </Link>
      ))}

      {/* Segment pages grouped into a compact dropdown */}
      <div className="group relative">
        <button
          type="button"
          aria-haspopup="true"
          className="inline-flex items-center gap-1 text-[15px] font-medium text-text/80 transition-colors hover:text-text group-hover:text-text group-focus-within:text-text"
        >
          For Your Business
          <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180 group-focus-within:rotate-180" />
        </button>
        <div className="invisible absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-3 opacity-0 transition-opacity duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
          <div className="rounded-xl border border-border bg-white p-2 shadow-card">
            {SEGMENT_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-lg px-3 py-2 text-[15px] font-medium text-text/80 transition-colors hover:bg-black/5 hover:text-text"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
