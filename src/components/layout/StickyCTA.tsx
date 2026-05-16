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

  // Hide once the final CTA block is in view. The sentinel only exists on the
  // homepage; on other routes it is absent, so the bar simply never hides.
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
      <div className="pointer-events-auto flex flex-wrap items-center gap-3 rounded-2xl border border-border bg-white p-3 shadow-card sm:flex-nowrap">
        <div className="pl-1 text-sm text-text/85">
          <span className="font-semibold">$40/mo</span> — STEM Curriculum for
          Your Center
        </div>
        <Link
          href="/contact?demo=true"
          className="inline-flex items-center gap-1 rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-white hover:bg-primary-dark"
        >
          Get Free Demo Lesson <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}
