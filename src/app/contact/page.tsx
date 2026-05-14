import type { Metadata } from 'next';
import Section from '@/components/shared/Section';
import SectionHeading from '@/components/shared/SectionHeading';
import ContactForm from '@/components/contact/ContactForm';
import { Calendar, Mail, Linkedin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Book a 15-minute Zoom or request a free demo lesson. We respond within one business day.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <>
      <Section tone="surface" className="pt-20 pb-12 sm:pt-24">
        <div className="reveal max-w-3xl">
          <SectionHeading
            eyebrow="Contact"
            title="Book a 15-minute Zoom. Or just send us a note."
            description="We'll show you one lesson from the curriculum and the roadmap you can show parents next week."
          />
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          <div className="reveal rounded-3xl border border-border bg-white p-2 shadow-card sm:p-3">
            <div className="rounded-2xl bg-bg p-8 sm:p-10">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary text-white">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-2xl font-bold">Book a 15-minute Zoom</h3>
              <p className="mt-2 text-text-muted">
                Pick a time that works. We'll walk you through the program and roadmap.
              </p>

              <div className="mt-6 rounded-2xl border border-dashed border-border bg-white p-6 text-center text-sm text-text-muted">
                Calendly embed will appear here.
                <br />
                <span className="text-xs">
                  Replace with: <code className="rounded bg-black/5 px-1.5 py-0.5">
                    &lt;div class="calendly-inline-widget" data-url="https://calendly.com/your-handle/15min"&gt;&lt;/div&gt;
                  </code>
                </span>
              </div>

              <div className="mt-6 grid gap-3 text-sm">
                <a
                  href="mailto:hello@gocoding.example.com"
                  className="inline-flex items-center gap-2 text-text hover:text-primary"
                >
                  <Mail className="h-4 w-4" /> hello@gocoding.example.com
                </a>
                <a href="#" className="inline-flex items-center gap-2 text-text hover:text-primary">
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="reveal rounded-3xl border border-border bg-surface p-8 shadow-card sm:p-10">
            <h3 className="text-2xl font-bold">Send a message</h3>
            <p className="mt-2 text-text-muted">
              Tell us about your center and we'll respond within one business day.
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
