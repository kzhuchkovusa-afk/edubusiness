import type { Metadata } from 'next';
import Section from '@/components/shared/Section';
import SectionHeading from '@/components/shared/SectionHeading';
import Badge from '@/components/shared/Badge';
import ContactForm from '@/components/contact/ContactForm';
import { Check, Gift } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Book a Call',
  description:
    'Book a 15-minute call and get a complete program free for the summer — our most in-demand course. Just your contacts. No payment, no contract.',
  alternates: { canonical: '/contact' },
};

const offerPoints = [
  'One complete program — 36+ lessons, yours free for the whole summer',
  'Our most in-demand course — the one that keeps rooms full and kids coming back',
  'Profit from the very first month, plus our highest student retention rate',
  'Kids build real projects, parents see the value, teachers love the ready-made plans',
];

export default function ContactPage() {
  return (
    <>
      <Section tone="surface" className="pt-20 pb-12 sm:pt-24">
        <div className="reveal max-w-3xl">
          <SectionHeading
            eyebrow="Book a call"
            title="Book a 15-minute call — and get a full program free for the summer."
            description="Tell us where to reach you. We'll call within one business day, walk you through the curriculum, and hand you a complete program — free for the entire summer."
          />
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="reveal rounded-3xl border border-accent/30 bg-accent/[0.06] p-8 shadow-card sm:p-10">
            <Badge tone="accent">
              <Gift className="h-3.5 w-3.5" /> Free this summer
            </Badge>
            <h3 className="mt-4 text-2xl font-bold sm:text-3xl">
              What you get just for booking a call
            </h3>
            <p className="mt-3 text-text-muted">
              A genuinely good trade: your contacts and 15 minutes of your time —
              in exchange for a curriculum that brings in money, retention, and a
              steady stream of happy reviews from kids, parents, and teachers.
            </p>
            <ul className="mt-6 space-y-3">
              {offerPoints.map((p) => (
                <li key={p} className="flex gap-3 text-[15px] text-text/90">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent/15 text-accent">
                    <Check className="h-3 w-3" />
                  </span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 rounded-xl bg-surface p-4 text-sm text-text-muted">
              All we need: your contact details and a short call. No payment, no
              contract, no obligation.
            </p>
          </div>

          <div className="reveal rounded-3xl border border-border bg-surface p-8 shadow-card sm:p-10">
            <h3 className="text-2xl font-bold">Reserve your spot</h3>
            <p className="mt-2 text-text-muted">
              We'll call you within one business day to schedule the Zoom and
              send over your free summer program.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
