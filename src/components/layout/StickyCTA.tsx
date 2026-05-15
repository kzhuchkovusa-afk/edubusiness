'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 720);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={`pointer-events-none fixed inset-x-3 bottom-3 z-30 transition-all duration-300 sm:inset-x-auto sm:right-4 sm:left-auto sm:bottom-4 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      }`}
    >
      <div className="pointer-events-auto flex flex-wrap items-center gap-3 rounded-2xl border border-border bg-white p-3 shadow-card sm:flex-nowrap">
        <div className="text-sm text-text/85 pl-1">
          <span className="font-semibold">$40/mo</span> — Licensed STEM Curriculum
        </div>
        <div className="flex gap-2">
          <Link
            href="/contact"
            className="inline-flex items-center gap-1 rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-white hover:bg-primary-dark"
          >
            Book Zoom <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <Link
            href="/contact?demo=true"
            className="inline-flex items-center gap-1 rounded-lg border border-border bg-white px-3 py-2 text-sm font-semibold text-text hover:border-primary hover:text-primary"
          >
            Get Demo
          </Link>
        </div>
      </div>
    </div>
  );
}
