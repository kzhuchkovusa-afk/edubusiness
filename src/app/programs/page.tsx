import type { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/shared/Container';
import Section from '@/components/shared/Section';
import SectionHeading from '@/components/shared/SectionHeading';
import Button from '@/components/shared/Button';
import Badge from '@/components/shared/Badge';
import ProgramsMatrix from '@/components/programs/ProgramsMatrix';
import ProgramCard from '@/components/programs/ProgramCard';
import TrackNav from '@/components/programs/TrackNav';
import catalog from '@/content/programs/catalog.json';
import {
  ArrowRight,
  BarChart3,
  Bot,
  CalendarDays,
  Clock,
  Code2,
  GraduationCap,
  Info,
  Megaphone,
  MessageSquare,
  Palette,
  RefreshCw,
  ShieldCheck,
  Target,
  TrendingUp,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const DEMO_HREF = '/contact?demo=true';

export const metadata: Metadata = {
  title:
    '15+ STEM Programs for Afterschool Centers — Coding, Robotics & Digital Art',
  description:
    'Licensed STEM curriculum: 15+ programs across Coding, Robotics, and Digital Art. Ages 4–12+. $40/month per program. Full-year lessons, 10-min teacher prep, 95% student retention.',
  alternates: { canonical: '/programs' },
};

type Tone = 'primary' | 'warning' | 'accent';
type Program = {
  slug: string;
  name: string;
  ages: string;
  level: string;
  description: string;
  equipment: string;
};
type Track = {
  id: string;
  name: string;
  tone: Tone;
  headline: string;
  subtitle: string;
  programs: Program[];
};

const tracks = catalog.tracks as Track[];
const trackIcons: Record<string, LucideIcon> = {
  coding: Code2,
  robotics: Bot,
  creativity: Palette,
};
const trackGrad: Record<Tone, string> = {
  primary: 'from-brand to-cyan',
  warning: 'from-flame to-rose',
  accent: 'from-grass to-cyan',
};
const trackBorder: Record<Tone, string> = {
  primary: 'border-brand/30',
  warning: 'border-flame/30',
  accent: 'border-grass/30',
};
const trackText: Record<Tone, string> = {
  primary: 'text-brand-light',
  warning: 'text-flame',
  accent: 'text-grass',
};
const trackAges: Record<string, string> = {
  coding: 'Ages 5–12+',
  robotics: 'Ages 4–12+',
  creativity: 'Ages 4–11+',
};

const features = [
  {
    icon: CalendarDays,
    title: 'Full-year curriculum',
    sub: '36+ structured lessons',
  },
  { icon: Clock, title: '10-min teacher prep', sub: 'No coding background needed' },
  { icon: BarChart3, title: 'Progress tracking', sub: 'Assessments built in' },
  {
    icon: MessageSquare,
    title: 'Parent report templates',
    sub: 'Ready-to-send feedback',
  },
  {
    icon: Target,
    title: 'Scripted trial lesson',
    sub: 'Designed to convert parents',
  },
  {
    icon: RefreshCw,
    title: 'Annual updates',
    sub: 'Content stays current + support',
  },
];

const featureColor = [
  'bg-brand/15 text-brand-light',
  'bg-cyan/15 text-cyan',
  'bg-grass/15 text-grass',
  'bg-flame/15 text-flame',
  'bg-rose/15 text-rose',
  'bg-brand/15 text-brand-light',
];

const whyCards = [
  {
    icon: ShieldCheck,
    title: 'Battle-tested',
    text: "Every program is refined across 500+ students in the GoCoding network (US & UAE) and built on CODDY International's experience in 150+ locations across 20+ countries. These aren't drafts — they're proven.",
  },
  {
    icon: TrendingUp,
    title: '95% monthly retention',
    text: "Students don't just finish a semester — they stay for an average of 2.5 years. Built-in progress tracking and level progression give parents a reason to renew every single month.",
  },
  {
    icon: GraduationCap,
    title: 'Any teacher can run it',
    text: 'No CS degree. No coding bootcamp. Your existing staff opens the lesson plan, preps in 10 minutes, and teaches. The curriculum does the heavy lifting — your teacher brings the energy.',
  },
  {
    icon: Megaphone,
    title: 'Your enrollment tool is built in',
    text: 'Every program includes a scripted trial lesson designed to convert. Invite families to a free demo class. Kids build a project in 45 minutes. Parents see results. They sign up — no ads needed.',
  },
];

const whyGrad = [
  'from-brand to-cyan',
  'from-grass to-cyan',
  'from-flame to-rose',
  'from-cyan to-brand',
];

export default function ProgramsPage() {
  return (
    <>
      {/* Section 1 — Hero */}
      <section className="relative overflow-hidden">
        <div
          className="blob bg-brand"
          style={{ width: 520, height: 520, top: -200, right: -160 }}
        />
        <div
          className="blob bg-cyan"
          style={{ width: 360, height: 360, bottom: -140, left: -120 }}
        />
        <div className="plus-decor" style={{ top: '20%', left: '7%' }} />
        <div className="plus-decor" style={{ top: '72%', right: '9%' }} />
        <Container className="relative z-10 pt-16 pb-16 sm:pt-20 md:pt-24 md:pb-20">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="reveal">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/15 px-4 py-2 text-[13px] font-semibold text-brand-light">
                <span className="h-2 w-2 animate-pulse rounded-full bg-grass" />
                15+ programs · 3 tracks · Ages 4–12+
              </span>
              <h1 className="mt-6 font-heading text-[34px] font-bold leading-[1.1] text-white sm:text-5xl md:text-[52px]">
                One subscription. A full year of lessons.{' '}
                <span className="text-gradient">Pick any program.</span>
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-muted">
                Each program covers an entire academic year — 1 class per week,
                1.5 hours. Lesson plans, homework, assessments, parent reports.
                Your teacher preps in 10 minutes. $40/month per program. Cancel
                anytime.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href={DEMO_HREF} variant="gradient" size="lg">
                  Get a Free Demo Lesson <ArrowRight className="h-4 w-4" />
                </Button>
                <Button href="#program-matrix" variant="darkline" size="lg">
                  See the roadmap
                </Button>
              </div>
            </div>

            {/* Right: track quick-cards */}
            <div className="reveal grid gap-4">
              {tracks.map((track) => {
                const TrackIcon = trackIcons[track.id];
                return (
                  <a
                    key={track.id}
                    href={`#${track.id}-track`}
                    className={`group flex items-center gap-4 rounded-2xl border ${trackBorder[track.tone]} bg-ink-card p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-dark`}
                  >
                    <div
                      className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${trackGrad[track.tone]} text-white`}
                    >
                      <TrackIcon className="h-7 w-7" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-heading text-lg font-bold text-white">
                        {track.name}
                      </div>
                      <div className="text-sm text-ink-muted">
                        {track.programs.length} programs · {trackAges[track.id]}
                      </div>
                    </div>
                    <ArrowRight
                      className={`ml-auto h-5 w-5 shrink-0 ${trackText[track.tone]} transition-transform group-hover:translate-x-1`}
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <TrackNav />

      {/* Section 2 — Every program includes */}
      <Section tone="surface">
        <div className="reveal max-w-3xl">
          <SectionHeading
            eyebrow="The same in every program"
            title="Every program includes everything to teach it"
          />
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="reveal flex items-start gap-3.5 rounded-2xl border border-white/6 bg-bg p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30"
            >
              <div
                className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${featureColor[i]}`}
              >
                <f.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="font-bold leading-tight text-white">
                  {f.title}
                </div>
                <div className="mt-0.5 text-sm text-ink-muted">{f.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Section 3 — Program roadmap matrix */}
      <Section id="program-matrix" className="scroll-mt-32">
        <div className="reveal max-w-3xl">
          <SectionHeading
            eyebrow="Program roadmap"
            title="This is the roadmap you show parents."
            description="Every step has a project they can see. Pick a cell to jump to the program."
          />
        </div>
        <div className="reveal mt-10">
          <ProgramsMatrix />
        </div>
        <div className="reveal mt-8 overflow-hidden rounded-2xl bg-gradient-to-br from-brand to-cyan px-6 py-6 text-white sm:px-8">
          <p className="text-lg leading-relaxed">
            Each program = 1 academic year. Students naturally progress to the
            next level. {"That's"} why 95% stay month after month — and the
            average student lifetime is 2.5 years.
          </p>
        </div>
      </Section>

      {/* Sections 4–6 — Track detail */}
      {tracks.map((track, ti) => {
        const TrackIcon = trackIcons[track.id];
        return (
          <Section
            key={track.id}
            id={`${track.id}-track`}
            tone={ti % 2 === 0 ? 'surface' : 'default'}
            className="scroll-mt-32"
          >
            <div className="reveal flex items-start gap-5">
              <div
                className={`hidden h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${trackGrad[track.tone]} text-white sm:grid`}
              >
                <TrackIcon className="h-8 w-8" />
              </div>
              <div className="max-w-3xl">
                <Badge tone={track.tone}>
                  <TrackIcon className="h-3.5 w-3.5" />
                  {track.name} · {track.programs.length} programs
                </Badge>
                <h2 className="mt-3 font-heading text-3xl font-bold text-white sm:text-4xl">
                  {track.headline}
                </h2>
                <p className="mt-3 text-lg text-ink-muted">{track.subtitle}</p>
              </div>
            </div>

            {track.id === 'robotics' && (
              <div className="reveal mt-8 rounded-2xl border border-flame/30 bg-flame/[0.08] p-5 sm:p-6">
                <div className="flex items-start gap-3">
                  <Info className="mt-0.5 h-5 w-5 shrink-0 text-flame" />
                  <p className="text-[15px] text-ink-text/85">
                    <span className="font-semibold text-white">
                      Equipment note:
                    </span>{' '}
                    Robotics programs require third-party kits purchased
                    separately ($70–$350 depending on the course). You choose
                    the supplier. The $40/month license covers curriculum,
                    lesson plans, and all teaching materials. Coding and
                    Creativity programs need only a laptop or tablet.
                  </p>
                </div>
              </div>
            )}

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {track.programs.map((p) => (
                <div key={p.slug} className="reveal h-full">
                  <ProgramCard
                    slug={p.slug}
                    name={p.name}
                    ages={p.ages}
                    level={p.level}
                    description={p.description}
                    equipment={p.equipment}
                    tone={track.tone}
                  />
                </div>
              ))}
            </div>
          </Section>
        );
      })}

      {/* Section 7 — Why these programs work */}
      <Section tone="muted">
        <div className="reveal max-w-3xl">
          <SectionHeading
            eyebrow="Why it works"
            title="Why centers choose these programs"
          />
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {whyCards.map((c, i) => (
            <div
              key={c.title}
              className="reveal relative overflow-hidden rounded-2xl border border-white/6 bg-surface p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-card-dark"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div
                className={`absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${whyGrad[i]}`}
              />
              <div
                className={`grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${whyGrad[i]} text-white`}
              >
                <c.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-heading text-lg font-bold text-white">
                {c.title}
              </h3>
              <p className="mt-2 text-[15px] text-ink-muted">{c.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Section 8 — Price + CTA */}
      <section className="py-16 sm:py-20 md:py-24">
        <Container>
          <div className="reveal relative mx-auto max-w-2xl overflow-hidden rounded-3xl bg-gradient-to-br from-brand to-cyan p-10 text-center text-white shadow-glow sm:p-14">
            <div
              className="absolute -right-12 -top-20 h-64 w-64 rounded-full bg-white/10"
              aria-hidden
            />
            <div
              className="absolute -bottom-16 -left-10 h-48 w-48 rounded-full bg-white/[0.07]"
              aria-hidden
            />
            <div className="relative z-10">
              <h2 className="font-heading text-3xl font-extrabold sm:text-4xl">
                $40/month per program. Try one free.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-white/85">
                One program = one full academic year of weekly 1.5-hour lessons.
                All materials included. Annual updates. Ongoing support. No
                contract — cancel anytime.
              </p>
              <p className="mx-auto mt-5 max-w-md rounded-xl bg-white/10 px-4 py-3 text-sm text-white/90">
                1 program = $40/mo. 3 programs = $120/mo. Still less than one
                hour of a private CS tutor.
              </p>
              <div className="mt-7 flex flex-col items-center gap-3">
                <Button href={DEMO_HREF} variant="white" size="lg">
                  Get a Free Demo Lesson <ArrowRight className="h-4 w-4" />
                </Button>
                <span className="text-sm text-white/70">
                  Pick any program. We send you one complete lesson. Your
                  teacher tries it this week. Free, no commitment.
                </span>
              </div>
              <p className="mt-8 text-sm text-white/70">
                Questions?{' '}
                <Link
                  href="/contact"
                  className="font-semibold text-white underline"
                >
                  Book a 15-minute Zoom
                </Link>
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
