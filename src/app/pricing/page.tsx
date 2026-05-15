import type { Metadata } from 'next';
import Section from '@/components/shared/Section';
import SectionHeading from '@/components/shared/SectionHeading';
import Button from '@/components/shared/Button';
import CTABanner from '@/components/shared/CTABanner';
import { pricingContent } from '@/lib/content';
import { ArrowRight, Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    '$40/month per curriculum. Month-to-month. No setup fee. No royalty. Cancel anytime.',
  alternates: { canonical: '/pricing' },
};

export default function PricingPage() {
  return (
    <>
      <Section tone="surface" className="pt-20 pb-12 sm:pt-24">
        <div className="reveal max-w-3xl">
          <SectionHeading
            eyebrow="Pricing"
            title={pricingContent.headline}
            description={pricingContent.subheadline}
          />
        </div>
      </Section>

      <Section>
        <div className="reveal mx-auto max-w-2xl rounded-3xl border-2 border-primary bg-white p-8 shadow-card sm:p-10">
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="text-2xl font-bold">{pricingContent.plan.name}</h3>
            <div>
              <span className="font-mono text-5xl font-extrabold text-primary">
                {pricingContent.plan.price}
              </span>
              <span className="ml-1 text-sm text-text-muted">
                {pricingContent.plan.period}
              </span>
            </div>
          </div>
          <ul className="mt-8 space-y-3">
            {pricingContent.plan.highlights.map((h) => (
              <li key={h} className="flex gap-3 text-[15px]">
                <Check className="mt-1 h-4 w-4 shrink-0 text-accent" />
                {h}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact" size="lg">
              Book a 15-Minute Zoom <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/contact?demo=true" variant="outline" size="lg">
              Get a Free Demo Lesson
            </Button>
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <div className="reveal max-w-3xl">
          <SectionHeading eyebrow="FAQ" title="Common questions" />
        </div>
        <div className="reveal mt-10 grid gap-4 md:grid-cols-2">
          {pricingContent.faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-2xl border border-border bg-white p-5 shadow-card open:shadow-card-hover"
            >
              <summary className="cursor-pointer list-none">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-base font-semibold">{f.q}</span>
                  <span className="text-primary transition-transform group-open:rotate-45">+</span>
                </div>
              </summary>
              <p className="mt-3 text-[15px] text-text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>

      <CTABanner />
    </>
  );
}
