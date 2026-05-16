import type { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/shared/Container';
import Button from '@/components/shared/Button';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'STEM for Heritage Language Schools',
  description:
    'Licensed coding, robotics & digital art for Chinese, Russian, and Korean weekend schools. $40/month per program. Pick your community and see a page built for you.',
  alternates: { canonical: '/for-language-schools' },
};

const communities = [
  {
    href: '/for-chinese-schools',
    mark: '中',
    tone: 'bg-danger',
    title: 'Chinese schools',
    desc: 'Saturday schools in the Huaxia & CSAUS networks. Add a coding enrichment block.',
  },
  {
    href: '/for-russian-schools',
    mark: 'Рус',
    tone: 'bg-primary',
    title: 'Russian schools',
    desc: 'Afterschool centers losing kids at 10+. Keep them with one program they love.',
  },
  {
    href: '/for-korean-schools',
    mark: '한',
    tone: 'bg-accent',
    title: 'Korean schools',
    desc: 'NAKS Saturday schools. Join a low-risk STEM pilot built for community schools.',
  },
];

export default function LanguageSchoolsHub() {
  return (
    <section className="bg-bg">
      <Container className="py-16 sm:py-20 md:py-24">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            For heritage language schools
          </span>
          <h1 className="mt-5 text-4xl font-extrabold sm:text-5xl">
            STEM that fits your weekend school.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-text-muted">
            Licensed coding, robotics &amp; digital art that slots into a
            Saturday schedule. Pick your community — we built a page for it.
          </p>
        </div>

        <div className="reveal mt-10 grid gap-5 md:grid-cols-3">
          {communities.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="group flex flex-col rounded-2xl border border-border bg-surface p-6 shadow-card transition-shadow hover:shadow-card-hover"
            >
              <div
                className={`grid h-12 w-12 place-items-center rounded-xl ${c.tone} font-heading text-lg font-bold text-white`}
              >
                {c.mark}
              </div>
              <h2 className="mt-4 text-lg font-bold">{c.title}</h2>
              <p className="mt-1 text-[15px] text-text-muted">{c.desc}</p>
              <span className="mt-auto pt-5 text-sm font-semibold text-primary group-hover:underline">
                View this page <ArrowRight className="ml-1 inline h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>

        <div className="reveal mt-8 flex flex-col items-center gap-3 rounded-2xl border border-border bg-surface p-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-[15px] text-text/90">
            <span className="font-semibold">
              Run a Spanish, Vietnamese, Arabic, or other language school?
            </span>{' '}
            We will tailor a demo for you.
          </p>
          <Button href="/contact?demo=true" className="shrink-0">
            Get a Free Demo Lesson <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <p className="reveal mt-8 flex items-center justify-center gap-2 text-center text-sm text-text-muted">
          <ShieldCheck className="h-4 w-4 text-primary" />
          Built on CODDY International: 150+ locations · 20+ countries · 8,600+
          students
        </p>
      </Container>
    </section>
  );
}
