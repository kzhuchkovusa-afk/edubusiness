'use client';

import { useState } from 'react';
import Button from '@/components/shared/Button';
import { Send } from 'lucide-react';

// Netlify Forms: this name must match the form in public/__forms.html so
// Netlify's build-time bot registers the form. Lead notifications are routed
// by form name in the Netlify dashboard (Forms -> Notifications).
const FORM_NAME = 'call-booking';

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

export default function ContactForm() {
  const [state, setState] = useState<'idle' | 'submitting' | 'submitted' | 'error'>(
    'idle',
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setState('submitting');

    const data: Record<string, string> = { 'form-name': FORM_NAME };
    new FormData(form).forEach((value, key) => {
      data[key] = String(value);
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
      <div className="rounded-2xl border border-accent/30 bg-accent/5 p-6 text-center">
        <p className="text-lg font-semibold">Your spot is reserved.</p>
        <p className="mt-2 text-[15px] text-text-muted">
          We'll call you within one business day to schedule the Zoom and send
          over your free summer program.
        </p>
      </div>
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
          Leave this field empty: <input name="bot-field" tabIndex={-1} />
        </label>
      </p>

      <Field label="Your name" name="name" autoComplete="name" required />
      <Field
        label="Center name"
        name="center"
        autoComplete="organization"
        required
      />
      <Field
        label="Phone number"
        name="phone"
        type="tel"
        autoComplete="tel"
        required
      />
      <Field label="Email" name="email" type="email" autoComplete="email" required />

      <div className="pt-2">
        <Button type="submit" size="lg" className="w-full sm:w-auto">
          {state === 'submitting' ? 'Sending…' : 'Reserve my call + free program'}{' '}
          <Send className="h-4 w-4" />
        </Button>
        {state === 'error' && (
          <p className="mt-3 text-sm text-danger">
            Something went wrong. Please try again, or email us directly.
          </p>
        )}
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = 'text',
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-text">
        {label}
        {required && <span className="text-danger"> *</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="mt-1 block w-full rounded-xl border border-border bg-white px-4 py-3 text-[15px] outline-none focus:border-primary focus:ring-2 focus:ring-primary/15"
      />
    </label>
  );
}
