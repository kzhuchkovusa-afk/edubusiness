import Link from 'next/link';

export const NAV_LINKS = [
  { href: '/programs', label: 'Programs' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
  { href: '/for-tutoring-centers', label: 'For Tutoring Centers' },
];

export default function Navigation({ onLinkClick }: { onLinkClick?: () => void }) {
  return (
    <nav aria-label="Primary" className="flex items-center gap-7">
      {NAV_LINKS.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={onLinkClick}
          className="text-[15px] font-medium text-text/80 transition-colors hover:text-text"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
