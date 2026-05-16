'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from './Navigation';
import Button from '@/components/shared/Button';

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const overlay = (
    <div className="fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-white md:hidden">
      <div className="flex items-center justify-between border-b border-border px-5 py-4">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="font-heading text-xl font-bold"
        >
          GoCoding
        </Link>
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close menu"
          className="rounded-lg p-2 text-text hover:bg-black/5"
        >
          <X className="h-6 w-6" />
        </button>
      </div>
      <nav aria-label="Mobile" className="flex flex-col gap-1 p-5">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className="rounded-lg px-3 py-3 text-lg font-medium hover:bg-black/5"
          >
            {link.label}
          </Link>
        ))}
        <div className="mt-4">
          <Button href="/contact?demo=true" variant="primary" size="lg">
            Get a Free Demo Lesson
          </Button>
        </div>
      </nav>
    </div>
  );

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        className="rounded-lg p-2 text-text hover:bg-black/5"
      >
        <Menu className="h-6 w-6" />
      </button>

      {open && mounted && createPortal(overlay, document.body)}
    </div>
  );
}
