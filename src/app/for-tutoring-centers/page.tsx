import type { Metadata } from 'next';
import { landingPages } from '@/lib/content';
import HeroSection from '@/components/landing/HeroSection';
import ProblemSection from '@/components/landing/ProblemSection';
import SolutionSection from '@/components/landing/SolutionSection';
import ComparisonTable from '@/components/landing/ComparisonTable';
import SocialProof from '@/components/landing/SocialProof';
import BenefitsSection from '@/components/landing/BenefitsSection';
import WhatYouGet from '@/components/landing/WhatYouGet';
import GuaranteeSection from '@/components/landing/GuaranteeSection';
import PricingSection from '@/components/landing/PricingSection';
import BonusesSection from '@/components/landing/BonusesSection';
import UrgencySection from '@/components/landing/UrgencySection';
import CTASection from '@/components/landing/CTASection';

const content = landingPages['tutoring-centers'];

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
  alternates: { canonical: '/for-tutoring-centers' },
  openGraph: {
    title: content.meta.title,
    description: content.meta.description,
    type: 'website',
    url: '/for-tutoring-centers',
  },
};

export default function TutoringCentersPage() {
  return (
    <>
      <HeroSection
        eyebrow={content.hero.eyebrow}
        headline={content.hero.headline}
        subheadline={content.hero.subheadline}
        ctaPrimary={content.hero.cta_primary}
        ctaSecondary={content.hero.cta_secondary}
        stats={content.hero.stats}
      />
      <ProblemSection
        title={content.problem.title}
        story={content.problem.story}
        threat={content.problem.threat}
      />
      <SolutionSection
        title={content.solution.title}
        intro={content.solution.intro}
        points={content.solution.points}
        closer={content.solution.closer}
      />
      <ComparisonTable
        title={content.comparison.title}
        headers={content.comparison.headers}
        rows={content.comparison.rows}
      />
      <SocialProof
        title={content.proof.title}
        points={content.proof.points}
        callout={content.proof.callout}
      />
      <BenefitsSection title={content.benefits.title} columns={content.benefits.columns} />
      <WhatYouGet
        title={content.whatYouGet.title}
        left={content.whatYouGet.left}
        right={content.whatYouGet.right}
      />
      <GuaranteeSection
        title={content.guarantee.title}
        cards={content.guarantee.cards}
        pullquote={content.guarantee.pullquote}
      />
      <PricingSection
        title={content.pricing.title}
        left={content.pricing.left}
        right={content.pricing.right}
        callout={content.pricing.callout}
      />
      <BonusesSection
        title={content.bonuses.title}
        items={content.bonuses.items}
        total={content.bonuses.total}
      />
      <UrgencySection title={content.urgency.title} points={content.urgency.points} />
      <CTASection
        title={content.cta.title}
        primary={content.cta.primary}
        secondary={content.cta.secondary}
        footer={content.cta.footer}
      />
    </>
  );
}
