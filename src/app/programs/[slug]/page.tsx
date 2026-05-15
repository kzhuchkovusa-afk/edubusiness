import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Section from '@/components/shared/Section';
import SectionHeading from '@/components/shared/SectionHeading';
import Badge from '@/components/shared/Badge';
import Button from '@/components/shared/Button';
import CTABanner from '@/components/shared/CTABanner';
import { ArrowRight, Check, Clock } from 'lucide-react';
import { getProgram, getProgramSlugs, programs } from '@/lib/content';

export function generateStaticParams() {
  return getProgramSlugs().map((slug) => ({ slug }));
}

type Params = { params: { slug: string } };

export function generateMetadata({ params }: Params): Metadata {
  const p = getProgram(params.slug);
  if (!p) return {};
  return {
    title: `${p.name} — ${p.ageRange}`,
    description: p.overview[0],
    alternates: { canonical: `/programs/${p.slug}` },
  };
}

const levelTone: Record<string, 'primary' | 'accent' | 'warning'> = {
  Beginner: 'primary',
  Intermediate: 'accent',
  Advanced: 'warning',
};

export default function ProgramPage({ params }: Params) {
  const p = getProgram(params.slug);
  if (!p) notFound();
  const next = (programs as Record<string, { slug: string; name: string }>)[p.nextStep];

  return (
    <>
      <Section tone="surface" className="pt-20 pb-12 sm:pt-24">
        <div className="reveal max-w-3xl">
          <div className="mb-4 flex flex-wrap gap-2">
            <Badge tone={levelTone[p.level]}>{p.level}</Badge>
            <Badge tone="neutral">{p.ageRange}</Badge>
            <Badge tone="neutral">{p.lessons} lessons</Badge>
          </div>
          <h1 className="text-4xl font-extrabold sm:text-5xl">{p.name}</h1>
          <div className="mt-6 space-y-4 text-lg text-text/85">
            {p.overview.map((o, i) => (
              <p key={i}>{o}</p>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button href="/contact" size="lg">
              Add this program to your center — $40/mo <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/contact?demo=true" variant="outline" size="lg">
              Get a Free Demo Lesson
            </Button>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Curriculum" title="Module-by-module breakdown" />
        <div className="reveal mt-10 grid gap-4 md:grid-cols-2">
          {p.modules.map((m) => (
            <div
              key={m.title}
              className="rounded-2xl border border-border bg-white p-5 shadow-card"
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-base font-bold">{m.title}</h3>
                <span className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                  {m.lessons} lessons
                </span>
              </div>
              <p className="mt-2 text-[15px] text-text-muted">{m.summary}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="Sample lesson" title={p.sampleLesson.title} />
        <div className="reveal mt-8 rounded-3xl border border-border bg-white p-6 shadow-card sm:p-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
            <Clock className="h-4 w-4" />
            {p.sampleLesson.duration}
          </div>
          <ol className="space-y-3">
            {p.sampleLesson.steps.map((step, i) => (
              <li
                key={i}
                className="flex flex-col gap-1 rounded-xl border border-border bg-bg p-4 sm:flex-row sm:items-center sm:gap-5"
              >
                <span className="w-24 shrink-0 font-mono text-sm font-semibold text-primary">
                  {step.time}
                </span>
                <span className="text-[15px]">{step.activity}</span>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="reveal">
            <SectionHeading eyebrow="For teachers" title="What's included in every lesson" />
            <ul className="mt-6 space-y-3">
              {p.teacherIncluded.map((item) => (
                <li key={item} className="flex gap-3 text-[15px]">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal">
            <SectionHeading eyebrow="Projects" title="What kids will build" />
            <ul className="mt-6 space-y-3">
              {p.projects.map((item) => (
                <li key={item} className="flex gap-3 text-[15px]">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section tone="surface">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="reveal rounded-2xl border border-border bg-bg p-6 shadow-card">
            <div className="text-xs font-semibold uppercase tracking-wider text-text-muted">
              Prerequisites
            </div>
            <p className="mt-2 text-[15px]">{p.prerequisites}</p>
          </div>
          {next && (
            <Link
              href={`/programs/${next.slug}`}
              className="reveal group flex items-center justify-between rounded-2xl border border-primary/30 bg-primary/5 p-6 shadow-card transition-shadow hover:shadow-card-hover"
            >
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-primary">
                  What comes next
                </div>
                <p className="mt-2 text-lg font-semibold">{next.name}</p>
              </div>
              <ArrowRight className="h-5 w-5 text-primary transition-transform group-hover:translate-x-1" />
            </Link>
          )}
        </div>
      </Section>

      <CTABanner />
    </>
  );
}
