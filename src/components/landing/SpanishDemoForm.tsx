'use client';

import { useState } from 'react';
import Button from '@/components/shared/Button';
import { Send } from 'lucide-react';

const FORM_NAME = 'spanish-demo';

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`)
    .join('&');
}

const studentOptions = ['Under 30', '30–60', '60–100', '100+'];
const ageOptions = ['Ages 4–6', 'Ages 7–9', 'Ages 10–12', 'All ages'];

export default function SpanishDemoForm() {
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
          We will email you a complete scripted lesson and teacher prep guide
          within one business day.
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

      <Field label="School name" name="school" required />
      <Field label="Your name" name="name" required />
      <Field label="Email" name="email" type="email" required />
      <Select label="Number of students" name="students" options={studentOptions} />
      <Select
        label="Which age group needs the most help?"
        name="ageGroup"
        options={ageOptions}
      />

      <div className="pt-2">
        <Button type="submit" size="lg" className="w-full sm:w-auto">
          {state === 'submitting' ? 'Sending…' : 'Send Me the Demo Lesson'}{' '}
          <Send className="h-4 w-4" />
        </Button>
        {state === 'error' && (
          <p className="mt-3 text-sm text-danger">
            Something went wrong. Please try again.
          </p>
        )}
      </div>
      <p className="text-sm text-text-muted">
        We will email you a complete scripted lesson + teacher prep guide within
        24 hours. Run it with real students. See the result. Then decide.
      </p>
    </form>
  );
}

const fieldClass =
  'mt-1 block w-full rounded-xl border border-border bg-surface px-4 py-3 text-[15px] outline-none focus:border-primary focus:ring-2 focus:ring-primary/15';

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
      <input name={name} type={type} required={required} className={fieldClass} />
    </label>
  );
}

function Select({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-text">{label}</span>
      <select name={name} required defaultValue="" className={fieldClass}>
        <option value="" disabled>
          Select…
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}
