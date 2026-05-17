import type { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/shared/Container';
import Button from '@/components/shared/Button';
import HomeDemoForm from '@/components/home/HomeDemoForm';
import ProgramsTabs from '@/components/home/ProgramsTabs';
import BusinessCalculator from '@/components/home/BusinessCalculator';
import { ArrowRight, Check, Play } from 'lucide-react';

const CTA_ANCHOR = '#cta-form';

export const metadata: Metadata = {
  title: 'STEM Curriculum for Afterschool Centers — $40/month',
  description:
    'Ready-made coding, robotics & digital art lessons your teachers can run tomorrow. $40/month per program. 10-minute prep, no coding background, 95% student retention. Free demo lesson.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Add Coding to Your Center — Without Hiring a Coding Teacher',
    description:
      '15+ ready-made STEM programs. Your teachers. 10 minutes of prep. $40/month. Free demo lesson.',
    type: 'website',
    url: '/',
  },
};

const bento = [
  { icon: '💰', label: 'New revenue', value: '$3–5K/mo', span: true, tone: 'grad' },
  { icon: '📊', label: 'Monthly retention', value: '95%', tone: 'plain' },
  { icon: '🚀', label: 'To launch', value: '2 weeks', tone: 'green' },
  { icon: '📚', label: 'Programs', value: '15+', tone: 'plain' },
  { icon: '⏱️', label: 'Teacher prep', value: '10 min', tone: 'orange' },
  { icon: '💵', label: 'Per program', value: '$40/mo', span: true, tone: 'grad' },
];

const benefits = [
  {
    emoji: '💰',
    accent: 'from-brand to-cyan',
    bg: 'bg-brand/15',
    title: 'New Revenue, Zero Setup',
    text: 'Add $3–5K/month using rooms and staff you already have. One student covers the $40 license — everything else is profit.',
    link: { label: 'See the math →', href: '#calculator' },
  },
  {
    emoji: '🧲',
    accent: 'from-grass to-cyan',
    bg: 'bg-grass/15',
    title: 'Students Who Stay for Years',
    text: '95% monthly retention. 2.5-year average student lifetime. Not a summer camp — a long-term revenue engine.',
    link: { label: 'See the proof →', href: '#proof' },
  },
  {
    emoji: '⚡',
    accent: 'from-flame to-rose',
    bg: 'bg-flame/15',
    title: 'Live in 2 Weeks',
    text: 'Full-year curriculum ready from day one. Your teacher opens the plan and goes. 10-minute prep, no coding background.',
    link: { label: 'Try a free lesson →', href: CTA_ANCHOR },
  },
];

const steps = [
  {
    title: 'Try a Free Lesson',
    text: 'We send you one complete lesson. Your teacher runs it this week — 10-minute prep, no coding background. You see exactly what students experience.',
  },
  {
    title: 'Subscribe for $40/month',
    text: 'Pick any program: Coding, Robotics, or Digital Art. A full academic year of weekly 1.5-hour lessons. Plans, homework, reports — all included.',
  },
  {
    title: 'Fill Your First Group',
    text: 'Every program includes a scripted trial lesson that converts. Kids build a project in 45 minutes. Parents see it and sign up on the spot.',
  },
];

const stats = [
  { value: '500+', label: 'Students learning now', cls: 'text-gradient' },
  { value: '95%', label: 'Monthly retention', cls: 'text-gradient-green' },
  { value: '2.5 yr', label: 'Average student lifetime', cls: 'text-gradient-warm' },
  { value: '15+', label: 'Programs across 3 tracks', cls: 'text-gradient' },
];

const pricingFeatures = [
  '36+ minute-by-minute lesson plans',
  'Homework & student projects',
  'Progress tracking & assessments',
  'Parent feedback templates',
  'Scripted trial lesson (your enrollment tool)',
  'Marketing templates to fill your first group',
  'Holiday & themed bonus lessons',
  'Annual updates + support',
];

const faqs = [
  {
    q: 'What if my teacher has no coding experience?',
    a: 'That is the whole point. Every lesson is scripted minute by minute — what to say, what to show, when to let kids work. A teacher with zero coding background delivers a great class after 10 minutes of prep.',
  },
  {
    q: 'Can I try before I subscribe?',
    a: 'Yes. We send you one complete demo lesson — free, no credit card. Your teacher runs it with real students this week. If it does not work, you owe nothing.',
  },
  {
    q: 'How many students per group?',
    a: 'Most centers run groups of 5–10. The license is a flat $40/month per program regardless of how many students you enroll — no per-student fees.',
  },
  {
    q: 'What equipment do I need?',
    a: 'Coding and digital art programs need only a laptop or tablet per student — most centers already have these. Robotics programs use third-party kits ($70–$350) you buy from any supplier.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* ===== 1. Hero ===== */}
      <section className="relative overflow-hidden">
        <div className="blob bg-brand" style={{ width: 560, height: 560, top: -200, right: -180 }} />
        <div className="blob bg-cyan" style={{ width: 380, height: 380, bottom: -120, left: -120 }} />
        <div className="plus-decor" style={{ top: '22%', left: '8%' }} />
        <div className="plus-decor" style={{ top: '68%', right: '12%' }} />
        <Container className="relative z-10 pt-20 pb-16 sm:pt-24 md:pt-28 md:pb-20">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="reveal">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/15 px-4 py-2 text-[13px] font-semibold text-brand-light">
                <span className="h-2 w-2 animate-pulse rounded-full bg-grass" />
                Licensed STEM Curriculum · 500+ students learning now
              </span>
              <h1 className="mt-6 font-heading text-[34px] font-bold leading-[1.1] text-white sm:text-5xl md:text-[52px]">
                Add <span className="text-gradient">$3–5K/month</span> to your
                center. Ready-made STEM. $40/month.
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-muted">
                Licensed coding, robotics &amp; digital art curriculum for
                afterschool and tutoring centers. Your teacher preps in 10
                minutes. No coding background needed.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href={CTA_ANCHOR} variant="gradient" size="lg">
                  Get a Free Demo Lesson <ArrowRight className="h-4 w-4" />
                </Button>
                <Button href="#how-it-works" variant="darkline" size="lg">
                  <Play className="h-4 w-4" /> See How It Works
                </Button>
              </div>
              <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] text-ink-muted">
                <span><span className="font-bold text-grass">✓</span> No credit card</span>
                <span className="text-white/15">|</span>
                <span><span className="font-bold text-grass">✓</span> No call required</span>
                <span className="text-white/15">|</span>
                <span><span className="font-bold text-grass">✓</span> Cancel anytime</span>
              </div>
            </div>

            {/* Bento metric grid */}
            <div className="reveal grid grid-cols-2 gap-3">
              {bento.map((b) => (
                <div
                  key={b.label}
                  className={[
                    'flex flex-col justify-end rounded-2xl border p-5 transition-transform hover:-translate-y-1',
                    b.span ? 'col-span-2' : '',
                    b.tone === 'grad'
                      ? 'border-transparent bg-gradient-to-br from-brand to-cyan'
                      : b.tone === 'green'
                        ? 'border-grass/20 bg-grass/[0.12]'
                        : b.tone === 'orange'
                          ? 'border-flame/20 bg-flame/[0.12]'
                          : 'border-white/6 bg-ink-card',
                  ].join(' ')}
                >
                  <div className="text-2xl">{b.icon}</div>
                  <div
                    className={`mt-2 text-xs font-medium ${
                      b.tone === 'grad' ? 'text-white/70' : 'text-ink-muted'
                    }`}
                  >
                    {b.label}
                  </div>
                  <div className="font-heading text-2xl font-bold text-white">
                    {b.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ===== 2. CTA Form ===== */}
      <section id="cta-form" className="scroll-mt-20 py-16 sm:py-20">
        <Container>
          <div className="reveal relative mx-auto max-w-2xl overflow-hidden rounded-3xl border-2 border-brand/25 bg-ink-card p-8 shadow-card-dark sm:p-10">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand to-cyan" />
            <h2 className="font-heading text-2xl font-bold text-white sm:text-[28px]">
              Get a free lesson from any program — Coding, Robotics, or Digital
              Art.
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">
              We will send you a complete lesson with a minute-by-minute plan.
              Your teacher runs it this week — 10-minute prep, zero coding
              background needed.
            </p>
            <div className="mt-7">
              <HomeDemoForm />
            </div>
          </div>
        </Container>
      </section>

      {/* ===== 3. Benefits ===== */}
      <section className="py-16 sm:py-20 md:py-24">
        <Container>
          <div className="reveal mx-auto max-w-2xl text-center">
            <div className="text-xs font-bold uppercase tracking-[2px] text-cyan">
              The Payoff
            </div>
            <h2 className="mt-3 font-heading text-3xl font-bold text-white sm:text-[40px]">
              What this does for your center
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="reveal relative overflow-hidden rounded-2xl border border-white/6 bg-ink-card p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/30 hover:shadow-card-dark"
              >
                <div
                  className={`absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${b.accent}`}
                />
                <div
                  className={`grid h-14 w-14 place-items-center rounded-2xl text-2xl ${b.bg}`}
                >
                  {b.emoji}
                </div>
                <h3 className="mt-5 font-heading text-xl font-bold text-white">
                  {b.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">
                  {b.text}
                </p>
                <Link
                  href={b.link.href}
                  className="mt-4 inline-block text-sm font-semibold text-cyan hover:underline"
                >
                  {b.link.label}
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ===== 4. How It Works (light) ===== */}
      <section
        id="how-it-works"
        className="scroll-mt-20 bg-light-section py-16 text-text sm:py-20 md:py-24"
      >
        <Container>
          <div className="reveal mx-auto max-w-2xl text-center">
            <div className="text-xs font-bold uppercase tracking-[2px] text-brand">
              How It Works
            </div>
            <h2 className="mt-3 font-heading text-3xl font-bold text-text sm:text-[40px]">
              Three steps to your first STEM group
            </h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {steps.map((s, i) => (
              <div key={s.title} className="reveal text-center">
                <div
                  className={`mx-auto grid h-16 w-16 place-items-center rounded-full font-heading text-2xl font-bold text-white ${
                    ['bg-gradient-to-br from-brand to-cyan', 'bg-gradient-to-br from-grass to-cyan', 'bg-gradient-to-br from-flame to-rose'][i]
                  }`}
                >
                  {i + 1}
                </div>
                <h3 className="mt-5 font-heading text-xl font-bold text-text">
                  {s.title}
                </h3>
                <p className="mx-auto mt-3 max-w-xs text-[15px] leading-relaxed text-text-muted">
                  {s.text}
                </p>
              </div>
            ))}
          </div>
          <div className="reveal mt-12 text-center">
            <Button href={CTA_ANCHOR} variant="gradient" size="lg">
              Get a Free Demo Lesson <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Container>
      </section>

      {/* ===== 5. Programs ===== */}
      <section className="relative overflow-hidden py-16 sm:py-20 md:py-24">
        <div className="blob bg-brand" style={{ width: 360, height: 360, top: '8%', right: '-12%' }} />
        <div className="blob bg-cyan" style={{ width: 280, height: 280, bottom: '6%', left: '-8%' }} />
        <Container className="relative z-10">
          <div className="reveal mx-auto max-w-2xl text-center">
            <div className="text-xs font-bold uppercase tracking-[2px] text-cyan">
              The Programs
            </div>
            <h2 className="mt-3 font-heading text-3xl font-bold text-white sm:text-[40px]">
              15+ programs across three tracks. Ages 4 to 12+.
            </h2>
            <p className="mt-4 text-[15px] text-ink-muted">
              Coding, Robotics and Creativity — each program is a full academic
              year, battle-tested in real classrooms.
            </p>
          </div>
          <div className="reveal mt-10">
            <ProgramsTabs />
          </div>
        </Container>
      </section>

      {/* ===== 6. Mid-page CTA ===== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand to-cyan py-14">
        <div
          className="absolute -right-10 -top-24 h-72 w-72 rounded-full bg-white/10"
          aria-hidden
        />
        <Container className="relative z-10">
          <div className="flex flex-col items-center justify-between gap-7 lg:flex-row">
            <div className="text-center lg:text-left">
              <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
                Still reading? Let&rsquo;s make it simple.
              </h2>
              <p className="mt-2 text-white/85">
                Drop your email — we send the best-fit demo lesson for your
                center.
              </p>
            </div>
            <div className="w-full max-w-md">
              <HomeDemoForm variant="inline" />
            </div>
          </div>
        </Container>
      </section>

      {/* ===== 7. Stats (light) ===== */}
      <section id="proof" className="scroll-mt-20 bg-light-section py-16 text-text sm:py-20 md:py-24">
        <Container>
          <div className="reveal mx-auto max-w-2xl text-center">
            <div className="text-xs font-bold uppercase tracking-[2px] text-brand">
              Proof
            </div>
            <h2 className="mt-3 font-heading text-3xl font-bold text-text sm:text-[40px]">
              Proven across 500+ students right now
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="reveal rounded-2xl border border-black/5 bg-white p-7 text-center shadow-card"
              >
                <div className={`font-heading text-[44px] font-extrabold leading-none ${s.cls}`}>
                  {s.value}
                </div>
                <div className="mt-3 text-sm text-text-muted">{s.label}</div>
              </div>
            ))}
          </div>
          <p className="reveal mx-auto mt-8 max-w-2xl text-center text-text-muted">
            Built on the experience of CODDY International: 150+ locations in
            20+ countries. 8,600+ students trained.
          </p>
        </Container>
      </section>

      {/* ===== 8. Pricing ===== */}
      <section className="relative overflow-hidden py-16 sm:py-20 md:py-24">
        <div className="blob bg-grass" style={{ width: 400, height: 400, top: 0, right: '-12%' }} />
        <Container className="relative z-10">
          <div className="reveal mx-auto max-w-2xl text-center">
            <div className="text-xs font-bold uppercase tracking-[2px] text-cyan">
              Simple Pricing
            </div>
            <h2 className="mt-3 font-heading text-3xl font-bold text-white sm:text-[40px]">
              $40/month. Everything included.
            </h2>
          </div>
          <div className="reveal relative mx-auto mt-12 max-w-2xl overflow-hidden rounded-3xl border-2 border-brand/30 bg-ink-card p-8 text-center sm:p-12">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand to-cyan" />
            <div className="text-xs font-bold uppercase tracking-[2px] text-cyan">
              Per Program
            </div>
            <div className="mt-3 font-heading text-7xl font-extrabold text-white">
              $40
              <span className="align-top text-2xl font-medium text-ink-muted">
                /mo
              </span>
            </div>
            <p className="mt-2 text-ink-muted">
              One program = one full academic year of weekly lessons.
            </p>
            <ul className="mx-auto mt-8 grid gap-3 text-left sm:grid-cols-2">
              {pricingFeatures.map((f) => (
                <li key={f} className="flex gap-2.5 text-sm text-ink-text">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-grass" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button href={CTA_ANCHOR} variant="gradient" size="lg" className="w-full sm:w-auto">
                Get a Free Demo Lesson <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <p className="mt-6 rounded-2xl border border-flame/20 bg-flame/10 px-5 py-4 text-sm text-flame">
              💡 A Code Ninjas franchise costs $120K–$350K. This is $40/month —
              the same answer to &ldquo;Do you teach coding?&rdquo;
            </p>
          </div>
        </Container>
      </section>

      {/* ===== 9. Calculator ===== */}
      <section id="calculator" className="scroll-mt-20 bg-ink-card/30 py-16 sm:py-20 md:py-24">
        <Container>
          <div className="reveal mx-auto max-w-2xl text-center">
            <div className="text-xs font-bold uppercase tracking-[2px] text-cyan">
              Your Numbers
            </div>
            <h2 className="mt-3 font-heading text-3xl font-bold text-white sm:text-[40px]">
              See your profit — calculated live
            </h2>
            <p className="mt-4 text-[15px] text-ink-muted">
              Enter your numbers. The math updates as you type.
            </p>
          </div>
          <div className="reveal mt-10">
            <BusinessCalculator />
          </div>
        </Container>
      </section>

      {/* ===== 10. FAQ ===== */}
      <section className="py-16 sm:py-20 md:py-24">
        <Container>
          <div className="reveal mx-auto max-w-2xl text-center">
            <div className="text-xs font-bold uppercase tracking-[2px] text-cyan">
              FAQ
            </div>
            <h2 className="mt-3 font-heading text-3xl font-bold text-white sm:text-[40px]">
              Questions, answered
            </h2>
          </div>
          <div className="reveal mx-auto mt-10 max-w-2xl space-y-3">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl border border-white/6 bg-ink-card p-5"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3">
                  <span className="font-heading text-base font-bold text-white">
                    {f.q}
                  </span>
                  <span className="text-xl text-cyan transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      {/* ===== 11. Guarantee ===== */}
      <section className="pb-16 sm:pb-20 md:pb-24">
        <Container>
          <div className="reveal mx-auto max-w-3xl rounded-3xl border border-grass/20 bg-gradient-to-br from-grass/[0.08] to-cyan/[0.05] p-10 text-center sm:p-14">
            <div className="text-5xl">🛡️</div>
            <h2 className="mt-4 font-heading text-3xl font-bold text-white sm:text-4xl">
              Zero risk. Seriously.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-ink-muted">
              Try a full lesson before you pay anything. If it does not work for
              your center — you owe nothing. If it does — subscribe for
              $40/month and cancel anytime. No contract. No minimum. No catch.
            </p>
            <div className="mt-7">
              <Button href={CTA_ANCHOR} variant="gradient" size="lg">
                Get a Free Demo Lesson <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* ===== 12. Final CTA ===== */}
      <section
        id="final-cta"
        className="relative overflow-hidden bg-gradient-to-br from-brand to-cyan py-20 text-center"
      >
        <div
          className="absolute -right-16 -top-32 h-96 w-96 rounded-full bg-white/10"
          aria-hidden
        />
        <div
          className="absolute -bottom-24 -left-12 h-72 w-72 rounded-full bg-white/[0.07]"
          aria-hidden
        />
        <Container className="relative z-10">
          <h2 className="mx-auto max-w-2xl font-heading text-3xl font-bold text-white sm:text-[40px]">
            Try one lesson this week. Free.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/85">
            Your teacher runs it. If your students love it, subscribe for
            $40/month. If not, you spent 10 minutes.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4">
            <Button href={CTA_ANCHOR} variant="white" size="lg">
              Get a Free Demo Lesson <ArrowRight className="h-4 w-4" />
            </Button>
            <Link
              href="/contact"
              className="text-sm font-semibold text-white/80 underline hover:text-white"
            >
              Or book a 15-minute Zoom →
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
