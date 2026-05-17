'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function StickyCTA() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [atFinalCta, setAtFinalCta] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 720);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setAtFinalCta(false);
    const el = document.getElementById('final-cta');
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setAtFinalCta(entry.isIntersecting),
      { threshold: 0 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [pathname]);

  const visible = scrolled && !atFinalCta;

  return (
    <div
      aria-hidden={!visible}
      className={`pointer-events-none fixed inset-x-3 bottom-3 z-30 transition-all duration-300 sm:inset-x-auto sm:right-4 sm:left-auto sm:bottom-4 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      }`}
    >
      <div className="pointer-events-auto flex flex-wrap items-center gap-3 rounded-2xl border border-white/10 bg-ink-card p-3 shadow-card-dark sm:flex-nowrap">
        <div className="pl-1 text-sm text-ink-text">
          Licensed STEM — <span className="font-bold text-white">$40/mo</span>
        </div>
        <Link
          href="/contact?demo=true"
          className="inline-flex items-center gap-1 rounded-full bg-gradient-to-br from-brand to-cyan px-4 py-2 text-sm font-bold text-white"
        >
          Get Free Demo <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}
