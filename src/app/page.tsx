import type { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/shared/Container';
import Section from '@/components/shared/Section';
import SectionHeading from '@/components/shared/SectionHeading';
import Button from '@/components/shared/Button';
import StatCounter from '@/components/shared/StatCounter';
import ProgramCard from '@/components/programs/ProgramCard';
import CTABanner from '@/components/shared/CTABanner';
import { programsList } from '@/lib/content';
import { ArrowRight, GraduationCap, Languages, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Licensed STEM Curriculum for Afterschool Centers',
  description:
    'GoCoding licenses ready-made coding & robotics curriculum to independent afterschool and tutoring centers in the US. $40/month. No franchise fee. No CS degree needed.',
  alternates: { canonical: '/' },
};

const audiences = [
  {
    title: 'I run a tutoring center',
    description: 'SHSAT, SAT, math, reading. Add STEM and stop losing families.',
    href: '/for-tutoring-centers',
    icon: GraduationCap,
    available: true,
  },
  {
    title: 'I run a language school',
    description: 'Russian, Chinese, Spanish. Coming soon.',
    href: '/',
    icon: Languages,
    available: false,
  },
  {
    title: 'Another type of center',
    description: 'Art, daycare, afterschool clubs. Coming soon.',
    href: '/',
    icon: Sparkles,
    available: false,
  },
];

const homeStats = [
  { value: 500, suffix: '+', label: 'Students learning now' },
  { value: 80, suffix: '%', label: 'Level-up rate' },
  { value: 40, prefix: '$', suffix: '/mo', label: 'No setup, no royalty' },
  { value: 10, suffix: ' min', label: 'Teacher prep per lesson' },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-bg">
        <div className="absolute inset-0 hero-grid opacity-70" aria-hidden />
        <Container className="relative pt-20 pb-16 text-center sm:pt-24 md:pt-28 md:pb-20">
          <div className="reveal mx-auto max-w-3xl">
            <span className="mb-5 inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              <Sparkles className="h-3.5 w-3.5" /> Curriculum license, not a franchise
            </span>
            <h1 className="text-4xl font-extrabold sm:text-5xl md:text-[56px] md:leading-[1.07]">
              Licensed STEM Curriculum for Afterschool Centers. $40/month.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-text-muted sm:text-xl">
              Ready-made coding & robotics (ages 4–13) your teachers can run with 10-minute prep.
              No CS degree required. No royalty. No 350K franchise fee.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Button href="/contact" size="lg">
                Book a 15-Minute Zoom <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/contact?demo=true" variant="outline" size="lg">
                Get a Free Demo Lesson
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <Section className="py-12 sm:py-14">
        <div className="reveal max-w-3xl">
          <SectionHeading eyebrow="Who it's for" title="Pick the page that matches your center." />
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {audiences.map((a) => {
            const Card = (
              <div
                className={`group h-full rounded-2xl border bg-surface p-6 shadow-card transition-shadow ${
                  a.available
                    ? 'border-border hover:shadow-card-hover'
                    : 'border-dashed border-border opacity-75'
                }`}
              >
                <div
                  className={`grid h-11 w-11 place-items-center rounded-xl ${
                    a.available ? 'bg-primary text-white' : 'bg-black/5 text-text-muted'
                  }`}
                >
                  <a.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-bold">{a.title}</h3>
                <p className="mt-1 text-[15px] text-text-muted">{a.description}</p>
                <div
                  className={`mt-5 text-sm font-semibold ${
                    a.available ? 'text-primary group-hover:underline' : 'text-text-muted'
                  }`}
                >
                  {a.available ? (
                    <>
                      View page <ArrowRight className="ml-1 inline h-4 w-4" />
                    </>
                  ) : (
                    'Coming soon'
                  )}
                </div>
              </div>
            );
            return a.available ? (
              <Link key={a.title} href={a.href} className="reveal block">
                {Card}
              </Link>
            ) : (
              <div key={a.title} className="reveal">
                {Card}
              </div>
            );
          })}
        </div>
      </Section>

      <Section tone="muted">
        <div className="reveal max-w-3xl">
          <SectionHeading
            eyebrow="Programs"
            title="One license. Every age group."
            description="Scratch → Python → Robotics. Ages 4–13. Pick one, run it next month — or run them all."
          />
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {programsList.programs.map((p) => (
            <ProgramCard key={p.slug} {...p} />
          ))}
        </div>
        <div className="reveal mt-8">
          <Button href="/programs" variant="outline">
            See all programs <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </Section>

      <Section>
        <div className="reveal grid grid-cols-2 gap-4 rounded-3xl border border-border bg-white p-6 shadow-card sm:p-8 md:grid-cols-4">
          {homeStats.map((s) => (
            <div key={s.label} className="px-2">
              <div className="font-heading text-3xl font-extrabold text-primary sm:text-4xl">
                <StatCounter value={s.value} prefix={s.prefix} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-sm text-text-muted">{s.label}</div>
            </div>
          ))}
        </div>
      </Section>

      <CTABanner />
    </>
  );
}
