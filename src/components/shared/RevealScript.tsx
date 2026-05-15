'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function RevealScript() {
  // Re-run on every route change: the root layout (and this component) does
  // not remount during client-side navigation, so without a pathname
  // dependency newly navigated pages keep their `.reveal` elements hidden.
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const nodes = document.querySelectorAll<HTMLElement>(
      '.reveal:not(.is-visible)',
    );
    if (nodes.length === 0) return;

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (prefersReduced || !('IntersectionObserver' in window)) {
      nodes.forEach((n) => n.classList.add('is-visible'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );

    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
