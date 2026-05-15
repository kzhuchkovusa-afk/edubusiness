import type { Metadata } from 'next';
import Section from '@/components/shared/Section';
import SectionHeading from '@/components/shared/SectionHeading';
import ProgramCard from '@/components/programs/ProgramCard';
import LevelRoadmap from '@/components/programs/LevelRoadmap';
import CTABanner from '@/components/shared/CTABanner';
import { programsList } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Programs',
  description:
    'GoCoding licensable programs: Scratch, Python, and Robotics. Ages 4–13. 36+ lessons per program. $40/month.',
  alternates: { canonical: '/programs' },
};

export default function ProgramsPage() {
  return (
    <>
      <Section tone="surface" className="pt-20 pb-12 sm:pt-24 md:pt-28">
        <SectionHeading
          eyebrow="Programs"
          title="One license. Every age group. A clear path for parents."
          description="All GoCoding programs share the same scripted-lesson, 10-min-prep format. Pick one, run it next month — or run them all on the same roadmap."
          align="center"
          className="mx-auto"
        />
      </Section>

      <Section className="py-12 sm:py-14">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programsList.programs.map((p) => (
            <ProgramCard key={p.slug} {...p} />
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <div className="reveal max-w-3xl">
          <SectionHeading
            eyebrow="The roadmap parents see"
            title="An 8-level path from age 4 to 13"
            description="The same level chart you show parents on consultation. Every level has a final project. Every project gives parents a reason to renew."
          />
        </div>
        <div className="reveal mt-10">
          <LevelRoadmap levels={programsList.roadmap} />
        </div>
      </Section>

      <CTABanner
        title="Want all three programs?"
        description="Add Scratch, Python, and Robotics for $120/month total. Still less than one no-show."
      />
    </>
  );
}
