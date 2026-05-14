import type { Metadata } from 'next';
import Section from '@/components/shared/Section';
import SectionHeading from '@/components/shared/SectionHeading';
import StatCounter from '@/components/shared/StatCounter';
import CTABanner from '@/components/shared/CTABanner';
import { companyContent } from '@/lib/content';

export const metadata: Metadata = {
  title: 'About',
  description:
    'GoCoding is built on CODDY International experience: 150+ locations, 20+ countries, 8,600+ students. Our mission is to make quality STEM accessible to every afterschool center.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <>
      <Section tone="surface" className="pt-20 pb-12 sm:pt-24">
        <div className="reveal max-w-3xl">
          <SectionHeading
            eyebrow="About"
            title="STEM that's actually affordable for independent centers."
            description="GoCoding is a curriculum license — not a franchise. We make quality STEM education accessible to every afterschool center, without the $350K price tag."
          />
        </div>
      </Section>

      <Section>
        <div className="reveal max-w-3xl space-y-5 text-lg leading-relaxed text-text/85">
          {companyContent.story.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <div className="reveal max-w-3xl">
          <SectionHeading
            eyebrow="By the numbers"
            title="A network proven across 20+ countries"
          />
        </div>
        <div className="reveal mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {companyContent.stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-border bg-white p-6 text-center shadow-card"
            >
              <div className="font-heading text-3xl font-extrabold text-primary sm:text-4xl">
                <StatCounter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-sm text-text-muted">{s.label}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="reveal mx-auto max-w-3xl rounded-3xl border border-border bg-white p-10 text-center shadow-card">
          <div className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            Our mission
          </div>
          <p className="text-xl leading-relaxed text-text sm:text-2xl">
            Make quality STEM education accessible to every afterschool center —
            so independent owners can compete with the big franchises on product,
            not budget.
          </p>
        </div>
      </Section>

      <CTABanner />
    </>
  );
}
