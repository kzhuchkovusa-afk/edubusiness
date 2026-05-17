'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const FORM_NAME = 'homepage-demo';

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`)
    .join('&');
}

export default function HomeDemoForm({
  variant = 'card',
}: {
  variant?: 'card' | 'inline';
}) {
  const [state, setState] = useState<'idle' | 'submitting' | 'submitted' | 'error'>(
    'idle',
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setState('submitting');
    const data: Record<string, string> = { 'form-name': FORM_NAME };
    new FormData(form).forEach((v, k) => {
      data[k] = String(v);
    });
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode(data),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setState('submitted');
      form.reset();
    } catch {
      setState('error');
    }
  }

  if (state === 'submitted') {
    return (
      <div
        className={
          variant === 'inline'
            ? 'rounded-2xl bg-white/15 px-5 py-4 text-center font-semibold text-white'
            : 'rounded-2xl border border-grass/30 bg-grass/10 p-6 text-center'
        }
      >
        <p className="font-bold text-white">Thank you — check your inbox.</p>
        <p className="mt-1 text-sm text-ink-muted">
          We will send your free demo lesson within 24 hours.
        </p>
      </div>
    );
  }

  const inputClass =
    'w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-[15px] text-white outline-none transition-colors placeholder:text-ink-muted focus:border-brand';

  if (variant === 'inline') {
    return (
      <form
        name={FORM_NAME}
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        className="flex w-full flex-col gap-3 sm:flex-row"
      >
        <input type="hidden" name="form-name" value={FORM_NAME} />
        <p className="hidden" aria-hidden>
          <label>
            Skip: <input name="bot-field" tabIndex={-1} />
          </label>
        </p>
        <input
          name="email"
          type="email"
          required
          placeholder="Your email address"
          className="min-w-0 flex-1 rounded-full border-2 border-white/30 bg-white/10 px-5 py-3.5 text-[15px] text-white outline-none placeholder:text-white/60 focus:border-white"
        />
        <button
          type="submit"
          className="shrink-0 rounded-full bg-white px-6 py-3.5 text-[15px] font-bold text-brand transition-transform hover:-translate-y-0.5"
        >
          {state === 'submitting' ? 'Sending…' : 'Send Me the Lesson →'}
        </button>
        {state === 'error' && (
          <p className="text-sm text-white">Something went wrong — try again.</p>
        )}
      </form>
    );
  }

  return (
    <form
      name={FORM_NAME}
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <input type="hidden" name="form-name" value={FORM_NAME} />
      <p className="hidden" aria-hidden>
        <label>
          Skip: <input name="bot-field" tabIndex={-1} />
        </label>
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        <input name="name" type="text" required placeholder="Your name" className={inputClass} />
        <input name="email" type="email" required placeholder="Your email" className={inputClass} />
      </div>
      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-br from-brand to-cyan py-4 text-base font-bold text-white transition-all hover:-translate-y-0.5 hover:shadow-glow"
      >
        {state === 'submitting' ? 'Sending…' : 'Send Me the Free Lesson'}
        <ArrowRight className="h-4 w-4" />
      </button>
      {state === 'error' ? (
        <p className="text-center text-sm text-flame">
          Something went wrong — please try again.
        </p>
      ) : (
        <p className="text-center text-xs text-ink-muted">
          No credit card. No commitment. We reply within 24 hours.
        </p>
      )}
    </form>
  );
}
