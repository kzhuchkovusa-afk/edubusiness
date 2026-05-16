import type { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/shared/Container';
import Section from '@/components/shared/Section';
import SectionHeading from '@/components/shared/SectionHeading';
import Button from '@/components/shared/Button';
import StatCounter from '@/components/shared/StatCounter';
import ProgramRoadmap from '@/components/home/ProgramRoadmap';
import {
  ArrowRight,
  Check,
  Clock,
  DollarSign,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react';

const DEMO_HREF = '/contact?demo=true';
const DEMO_LABEL = 'Get a Free Demo Lesson';

export const metadata: Metadata = {
  title: 'STEM Curriculum for Afterschool Centers — $40/month',
  description:
    'Ready-made coding, robotics & digital art lessons your teachers can run tomorrow. $40/month. 10-minute prep, no coding background, 95% student retention. Try a free demo lesson.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'STEM Curriculum for Afterschool Centers — $40/month',
    description:
      'Ready-made coding, robotics & digital art lessons your teachers can run tomorrow. $40/month. Try a free demo lesson.',
    type: 'website',
    url: '/',
  },
};

const resultCards = [
  {
    icon: DollarSign,
    title: 'New revenue stream',
    text: 'Add $3–5K/month from STEM classes — on the rooms and staff you already have.',
  },
  {
    icon: Users,
    title: 'Students who stay',
    text: '95% monthly retention. Average student lifetime: 2.5 years. Not a semester — years.',
  },
  {
    icon: Clock,
    title: 'Launch in 2 weeks',
    text: 'Full-year curriculum ready to teach. Your teacher opens the plan and goes. 10-minute prep.',
  },
];

const steps = [
  {
    title: 'Try a free lesson',
    body: 'We send you one complete lesson from any program. Your teacher runs it this week — 10-minute prep, no coding background.',
    result: 'You see exactly what your students will experience.',
  },
  {
    title: 'Subscribe for $40/month',
    body: 'Pick any program: Coding, Robotics, or Digital Art. A full academic year of weekly lessons (1.5 hours each). Lesson plans, homework, progress tracking, parent reports — all included.',
    result: 'You have everything to start teaching next week.',
  },
  {
    title: 'Fill your first group for free',
    body: 'Every program includes a scripted trial lesson designed to convert. Invite your existing families. Kids build a project in 45 minutes. Parents see it and sign up on the spot — no ads, no marketing budget.',
    result: 'Your current families become your first STEM clients.',
  },
];

const included = [
  'A full academic year of lessons (1x/week, 1.5 hrs)',
  'Minute-by-minute lesson plans',
  'Homework & student projects',
  'Progress tracking & assessments',
  'Parent feedback templates',
  'Scripted trial lesson (your enrollment tool)',
  'Holiday & themed bonus lessons',
  'Annual updates + support',
];

const bonuses = [
  'Marketing templates to fill your first group',
  'Parent consultation script',
  'Retention & upsell playbook',
  'Operations checklist',
];

const guaranteeLines = [
  'Try a full lesson before you pay anything.',
  'If it does not work for your center — you owe nothing.',
  'If it does — subscribe for $40/month and cancel anytime.',
];

export default function HomePage() {
  return (
    <>
      {/* Block 1 — Hero */}
      <section className="relative overflow-hidden border-b border-border bg-bg">
        <div className="absolute inset-0 hero-grid opacity-70" aria-hidden />
        <Container className="relative pt-16 pb-20 text-center sm:pt-20 md:pt-24 md:pb-24">
          <div className="reveal mx-auto max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              15+ programs · Ages 4–12+ · Coding, Robotics &amp; Digital Art
            </span>
            <h1 className="mt-5 text-[32px] font-extrabold leading-tight sm:text-5xl md:text-[56px] md:leading-[1.07]">
              Ready-made STEM lessons your teachers can run tomorrow. $40/month.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-text-muted sm:text-xl">
              Licensed curriculum for afterschool and tutoring centers. Your
              staff preps in 10 minutes. No coding background needed. 95% of
              students stay month after month.
            </p>
            <div className="mt-8 flex flex-col items-center gap-2">
              <Button href={DEMO_HREF} size="lg">
                {DEMO_LABEL} <ArrowRight className="h-4 w-4" />
              </Button>
              <span className="text-sm text-text-muted">
                Try one lesson. Free. No commitment.
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Block 2 — Result */}
      <Section tone="surface">
        <div className="reveal max-w-3xl">
          <SectionHeading eyebrow="The payoff" title="What this does for your center" />
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {resultCards.map((c, i) => (
            <div
              key={c.title}
              className="reveal rounded-2xl border border-border bg-bg p-6 shadow-card"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary text-white">
                <c.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-bold">{c.title}</h3>
              <p className="mt-2 text-[15px] text-text-muted">{c.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Block 3 — How it works */}
      <Section>
        <div className="reveal max-w-3xl">
          <SectionHeading
            eyebrow="How it works"
            title="Three steps to your first STEM group"
          />
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="reveal flex flex-col rounded-2xl border border-border bg-surface p-6 shadow-card"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="grid h-11 w-11 place-items-center rounded-full bg-primary font-heading text-lg font-bold text-white">
                {i + 1}
              </div>
              <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-[15px] text-text-muted">{s.body}</p>
              <div className="mt-auto flex gap-2 pt-5 text-[15px] font-semibold text-accent">
                <ArrowRight className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{s.result}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Block 4 — What you get */}
      <Section tone="muted">
        <div className="reveal max-w-3xl">
          <SectionHeading
            eyebrow="What you get"
            title="Everything you need. $40/month."
          />
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="reveal rounded-3xl border border-primary/30 bg-primary/[0.04] p-7 shadow-card">
            <h3 className="text-xl font-bold">In every program</h3>
            <ul className="mt-5 space-y-3">
              {included.map((item) => (
                <li key={item} className="flex gap-3 text-[15px] text-text/90">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal rounded-3xl border border-accent/30 bg-accent/[0.06] p-7 shadow-card">
            <h3 className="text-xl font-bold">Free bonuses</h3>
            <ul className="mt-5 space-y-3">
              {bonuses.map((item) => (
                <li key={item} className="flex gap-3 text-[15px] text-text/90">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Block 5 — Programs roadmap */}
      <Section tone="surface">
        <div className="reveal max-w-3xl">
          <SectionHeading
            eyebrow="The programs"
            title="15+ programs. Three tracks. Ages 4 to 12+."
            description="Each program is one full academic year — all battle-tested and proven in real classrooms."
          />
        </div>
        <div className="reveal mt-10">
          <ProgramRoadmap />
        </div>
        <div className="reveal mt-8">
          <Link
            href="/programs"
            className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
          >
            See all programs <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      {/* Block 6 — Social proof */}
      <Section>
        <div className="reveal max-w-3xl">
          <SectionHeading
            eyebrow="Proof"
            title="Proven across 500+ students right now"
          />
        </div>
        <div className="reveal mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          <StatCard>
            <StatValue>
              <StatCounter value={500} suffix="+" />
            </StatValue>
            <StatLabel>Students learning now</StatLabel>
          </StatCard>
          <StatCard>
            <StatValue>
              <StatCounter value={95} suffix="%" />
            </StatValue>
            <StatLabel>Monthly retention</StatLabel>
          </StatCard>
          <StatCard>
            <StatValue>2.5 yrs</StatValue>
            <StatLabel>Average student lifetime</StatLabel>
          </StatCard>
          <StatCard>
            <StatValue>
              <StatCounter value={15} suffix="+" />
            </StatValue>
            <StatLabel>Programs across 3 tracks</StatLabel>
          </StatCard>
        </div>
        <p className="reveal mx-auto mt-8 max-w-2xl text-center text-text-muted">
          Built on the experience of CODDY International: 150+ locations in 20+
          countries. 8,600+ students trained.
        </p>
      </Section>

      {/* Block 7 — Price */}
      <Section tone="muted">
        <div className="reveal mx-auto max-w-2xl rounded-3xl border border-border bg-white p-8 text-center shadow-card sm:p-10">
          <div className="text-sm font-semibold uppercase tracking-wider text-primary">
            Simple pricing
          </div>
          <div className="mt-3 flex items-baseline justify-center gap-1">
            <span className="font-mono text-6xl font-extrabold text-primary">
              $40
            </span>
            <span className="text-lg text-text-muted">/month per program</span>
          </div>
          <ul className="mx-auto mt-7 max-w-md space-y-2.5 text-left">
            {[
              'One program = one full academic year of weekly lessons',
              'No setup fee. No royalty. No contract. Cancel anytime.',
              'One student covers the cost. Everything after that is profit.',
            ].map((line) => (
              <li key={line} className="flex gap-3 text-[15px]">
                <Check className="mt-1 h-4 w-4 shrink-0 text-accent" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
          <p className="mt-7 rounded-xl bg-bg p-4 text-sm text-text-muted">
            {'Code Ninjas franchise: $120K–$350K. This: $40/month. Same answer to "Do you offer coding?"'}
          </p>
        </div>
      </Section>

      {/* Block 8 — Guarantee */}
      <Section tone="surface">
        <div className="reveal mx-auto max-w-2xl text-center">
          <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-accent text-white">
            <ShieldCheck className="h-7 w-7" />
          </div>
          <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
            Zero risk. Seriously.
          </h2>
          <div className="mt-5 space-y-1.5 text-lg text-text/85">
            {guaranteeLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <p className="mt-5 font-semibold">
            That is it. No contract. No minimum. No catch.
          </p>
        </div>
      </Section>

      {/* Block 9 — Final CTA */}
      <section id="final-cta" className="bg-bg py-16 sm:py-20 md:py-24">
        <Container>
          <div className="reveal mx-auto max-w-2xl rounded-3xl bg-primary p-10 text-center text-white shadow-card sm:p-14">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              Try one lesson this week. Free.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/85">
              We will send you a complete lesson from any program — Coding,
              Robotics, or Digital Art. Your teacher runs it. If your students
              love it, subscribe for $40/month. If not, you spent 10 minutes.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3">
              <Button href={DEMO_HREF} variant="accent" size="lg">
                {DEMO_LABEL} <ArrowRight className="h-4 w-4" />
              </Button>
              <span className="text-sm text-white/70">
                No credit card. No call required. Just reply and we send it.
              </span>
            </div>
            <p className="mt-8 text-sm text-white/70">
              Want to talk first?{' '}
              <Link href="/contact" className="font-semibold text-white underline">
                Book a 15-minute Zoom
              </Link>
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}

function StatCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-6 text-center shadow-card">
      {children}
    </div>
  );
}

function StatValue({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-heading text-3xl font-extrabold text-primary sm:text-4xl">
      {children}
    </div>
  );
}

function StatLabel({ children }: { children: React.ReactNode }) {
  return <div className="mt-2 text-sm text-text-muted">{children}</div>;
}
