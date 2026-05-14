'use client';

import { useState } from 'react';
import Button from '@/components/shared/Button';
import { Send } from 'lucide-react';

export default function ContactForm() {
  const [state, setState] = useState<'idle' | 'submitting' | 'submitted'>('idle');

  return (
    <form
      action="https://formspree.io/f/your-form-id"
      method="POST"
      onSubmit={(e) => {
        // Use real Formspree submission once configured; until then, prevent default.
        e.preventDefault();
        setState('submitting');
        setTimeout(() => setState('submitted'), 600);
      }}
      className="space-y-4"
    >
      <Field label="Your name" name="name" required />
      <Field label="Email" name="email" type="email" required />
      <Field label="Center name" name="center" required />
      <Field label="Message" name="message" as="textarea" rows={4} />

      <input type="hidden" name="_subject" value="GoCoding inquiry" />

      <div className="pt-2">
        <Button type="submit" size="lg" className="w-full sm:w-auto">
          {state === 'submitting' ? 'Sending…' : 'Send message'} <Send className="h-4 w-4" />
        </Button>
        {state === 'submitted' && (
          <p className="mt-3 text-sm text-accent">
            Thanks — we'll be in touch within one business day.
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
  as = 'input',
  rows,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  as?: 'input' | 'textarea';
  rows?: number;
}) {
  const base =
    'mt-1 block w-full rounded-xl border border-border bg-white px-4 py-3 text-[15px] outline-none focus:border-primary focus:ring-2 focus:ring-primary/15';
  return (
    <label className="block">
      <span className="text-sm font-semibold text-text">
        {label}
        {required && <span className="text-danger"> *</span>}
      </span>
      {as === 'textarea' ? (
        <textarea name={name} required={required} rows={rows} className={base} />
      ) : (
        <input name={name} type={type} required={required} className={base} />
      )}
    </label>
  );
}
