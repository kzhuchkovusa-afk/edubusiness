'use client';

import { useState } from 'react';
import Button from '@/components/shared/Button';
import { Send } from 'lucide-react';

const FORM_NAME = 'korean-pilot';

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`)
    .join('&');
}

export default function PilotForm() {
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
        <p className="text-lg font-semibold">Thank you — your application is in.</p>
        <p className="mt-2 text-[15px] text-text-muted">
          We review every Korean school personally and will be in touch within
          one business day.
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

      <Text label="School name" name="school" required />
      <div>
        <span className="text-sm font-semibold text-text">
          NAKS affiliation <span className="text-danger">*</span>
        </span>
        <div className="mt-1.5 flex gap-3">
          {['Yes', 'No'].map((opt) => (
            <label
              key={opt}
              className="flex flex-1 cursor-pointer items-center gap-2 rounded-xl border border-border bg-surface px-4 py-2.5 text-[15px] has-[:checked]:border-primary has-[:checked]:bg-primary/5"
            >
              <input
                type="radio"
                name="naks"
                value={opt}
                required
                className="accent-primary"
              />
              {opt}
            </label>
          ))}
        </div>
      </div>
      <Text label="Your name" name="name" required />
      <Text label="Email" name="email" type="email" required />
      <Text label="Number of students" name="students" type="number" required />
      <Text
        label="What would you add to your school if you could?"
        name="wish"
        textarea
      />

      <div className="pt-2">
        <Button type="submit" size="lg" className="w-full sm:w-auto">
          {state === 'submitting' ? 'Sending…' : 'Apply for the Pilot Program'}{' '}
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

function Text({
  label,
  name,
  type = 'text',
  required,
  textarea,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
}) {
  const base =
    'mt-1 block w-full rounded-xl border border-border bg-surface px-4 py-3 text-[15px] outline-none focus:border-primary focus:ring-2 focus:ring-primary/15';
  return (
    <label className="block">
      <span className="text-sm font-semibold text-text">
        {label}
        {required && <span className="text-danger"> *</span>}
      </span>
      {textarea ? (
        <textarea name={name} rows={3} className={base} />
      ) : (
        <input
          name={name}
          type={type}
          min={type === 'number' ? 0 : undefined}
          required={required}
          className={base}
        />
      )}
    </label>
  );
}
