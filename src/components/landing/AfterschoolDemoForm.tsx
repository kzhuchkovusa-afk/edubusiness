'use client';

import { useState } from 'react';
import Button from '@/components/shared/Button';
import { Send } from 'lucide-react';

const FORM_NAME = 'afterschool-demo';

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`)
    .join('&');
}

export default function AfterschoolDemoForm() {
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
      <div className="rounded-2xl border border-accent/30 bg-accent/5 p-6 text-center">
        <p className="text-lg font-semibold">Thank you — your demo is on the way.</p>
        <p className="mt-2 text-[15px] text-text-muted">
          We will email you a complete scripted demo lesson within one business
          day. Run it with any teacher.
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

      <Field label="Your name" name="name" required />
      <Field label="Email" name="email" type="email" required />
      <Field label="Center name" name="center" required />
      <Field label="City / State" name="location" required />
      <Field label="How many students?" name="students" />

      <div className="pt-2">
        <Button type="submit" size="lg" className="w-full sm:w-auto">
          {state === 'submitting' ? 'Sending…' : 'Get Your Free Demo Lesson'}{' '}
          <Send className="h-4 w-4" />
        </Button>
        {state === 'error' && (
          <p className="mt-3 text-sm text-danger">
            Something went wrong. Please try again.
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
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
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
        className="mt-1 block w-full rounded-xl border border-border bg-surface px-4 py-3 text-[15px] outline-none focus:border-primary focus:ring-2 focus:ring-primary/15"
      />
    </label>
  );
}
