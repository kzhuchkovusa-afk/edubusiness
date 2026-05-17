import type { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/shared/Container';
import Section from '@/components/shared/Section';
import SectionHeading from '@/components/shared/SectionHeading';
import Button from '@/components/shared/Button';
import Badge from '@/components/shared/Badge';
import StatCounter from '@/components/shared/StatCounter';
import SolutionSection from '@/components/landing/SolutionSection';
import SocialProof from '@/components/landing/SocialProof';
import BenefitsSection from '@/components/landing/BenefitsSection';
import WhatYouGet from '@/components/landing/WhatYouGet';
import LandingFAQ from '@/components/landing/LandingFAQ';
import CTASection from '@/components/landing/CTASection';
import {
  AlertTriangle,
  ArrowRight,
  BookOpenCheck,
  Coins,
  FileX,
  Quote,
  Repeat,
  Sparkles,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const ZOOM_HREF = '/contact';
const DEMO_HREF = '/contact?demo=true';

export const metadata: Metadata = {
  title: 'Upgrade Your Coding Program · Teacher-Proof STEM Curriculum · GoCoding',
  description:
    'Your coding program depends on one teacher. Replace the homemade with 15 professional programs, ages 4–13. $40/month. Free demo lesson.',
  alternates: { canonical: '/for-coding-centers' },
  openGraph: {
    title: 'Upgrade Your Coding Program · GoCoding',
    description:
      'Teacher-proof STEM curriculum for afterschool centers. $40/month.',
    type: 'website',
    url: '/for-coding-centers',
  },
};

const heroStats = [
  { value: 500, suffix: '+', label: 'Children learning now' },
  { value: 80, suffix: '%', label: 'Level-up rate' },
  { value: 40, prefix: '$', suffix: '/mo', label: 'Pays for itself with 1 student' },
  { value: 10, suffix: ' min', label: 'Teacher prep time' },
];

const choiceColumns = [
  {
    tag: 'Today',
    tone: 'neutral' as const,
    heading: 'Your coding program',
    lines: [
      '"My teacher built it from Scratch tutorials."',
      '"There’s no documentation."',
      '"If Marcus leaves... I don’t know."',
    ],
    footer: 'Revenue at risk: $50K/year',
  },
  {
    tag: 'When they leave',
    tone: 'danger' as const,
    heading: 'Teacher gives notice',
    lines: [
      'Program freezes.',
      'Parents start asking questions.',
      '3 families cancel. Then 5 more.',
    ],
    footer: '$30K–$60K lost. Permanently.',
  },
  {
    tag: 'With GoCoding',
    tone: 'accent' as const,
    heading: 'Teacher leaves Friday.',
    lines: [
      'New teacher opens lesson plan Monday.',
      '10-minute prep. Picks up at lesson 18.',
    ],
    footer: 'Revenue: protected. Parents: unaware.',
  },
];

const problemParagraphs = [
  'Your coding program started the way most do. A parent asked "Do you offer coding?" — and you said yes before you had a plan. You found someone — a CS student, a tech-savvy teacher, maybe you taught it yourself. You cobbled together Scratch projects from YouTube and Code.org. It worked. Kids signed up. Revenue came in.',
  'Now that program brings in $3,000–$8,000 a month. It’s one of your most profitable offerings. Parents love it.',
  'But here’s the thing you don’t say out loud: it all depends on one person.',
  'Your math program has 8 levels, standardized tests, and parent reports. If a math teacher leaves on Friday, a new one starts Monday. Nothing breaks.',
  'Your coding program has... a laptop. And one person who knows what’s on it.',
  '74% of afterschool providers report difficulty hiring and retaining staff. For coding teachers, it’s worse — every CS grad with teaching skills can make 3x more in tech. Your coding teacher isn’t staying forever. The question isn’t IF they leave. It’s WHEN.',
  'And when they do, you’ll be standing in front of a parent — the one who pays $200/month for coding classes — saying: "We’re restructuring our STEM program." She’ll nod politely. And call Code Ninjas.',
];
const problemEmphasis = new Set([2, 4]);

const solutionPoints = [
  {
    icon: 'BookOpen',
    title: 'Full curriculum',
    description: 'Scratch → Python → Robotics (ages 4–13). One coherent path.',
  },
  {
    icon: 'ClipboardList',
    title: 'Scripted minute-by-minute',
    description: 'Every lesson is scripted. Teacher opens the plan, teaches, done.',
  },
  {
    icon: 'Timer',
    title: '10-minute prep',
    description: 'No CS background required. Worksheets and projects included.',
  },
  {
    icon: 'Repeat',
    title: 'Teacher-proof',
    description:
      'If a teacher leaves, a new one picks up where they left off. The system stays.',
  },
];

const compareHeaders = [
  'Your DIY Program',
  'Code Ninjas Franchise',
  'Per-Student Platform (Tynker, CodeMonkey)',
  'GoCoding License',
];
const compareRows = [
  {
    label: 'Cost',
    cells: ['$0 + teacher salary', '$120K–$350K + 8% royalty', '$25–$50/student/year', '$40/month flat'],
  },
  {
    label: 'Teacher dependency',
    cells: ['100% — one person', 'Low (their system)', 'Low (platform-based)', 'Zero — any teacher'],
  },
  {
    label: 'Parent-facing roadmap',
    cells: ['None', 'Yes (8 levels)', 'Basic', 'Yes (8+ levels, 3 tracks)'],
  },
  {
    label: 'When teacher leaves',
    cells: ['Program collapses', 'System stays', 'Platform stays', 'Lesson plans stay — new teacher in 1 day'],
  },
  {
    label: 'Teacher prep',
    cells: ['Hours', '30 min', 'N/A (self-paced)', '10 minutes'],
  },
  {
    label: 'Your control',
    cells: ['Yours (but fragile)', 'Franchise dictates', 'Platform dictates', '100% yours'],
  },
  {
    label: 'Time to launch',
    cells: ['Months to build', '3–6 months', '1 week', '2 weeks'],
  },
];

type Track = {
  id: string;
  name: string;
  tone: 'primary' | 'warning' | 'accent';
  steps: { age: string; name: string; sub: string }[];
};
const tracks: Track[] = [
  {
    id: 'coding',
    name: 'Coding Track',
    tone: 'primary',
    steps: [
      { age: 'Ages 4–6', name: 'Scratch Jr', sub: 'First Steps' },
      { age: 'Ages 6–8', name: 'Scratch', sub: 'Creative Coding' },
      { age: 'Ages 7–8', name: 'Minecraft', sub: 'Coding & AI' },
      { age: 'Ages 9–10', name: 'Delightrex 3D', sub: 'Game Design' },
      { age: 'Ages 11+', name: 'Roblox Studio', sub: 'Game Dev' },
      { age: 'Ages 12+', name: 'Python', sub: 'Real Code' },
      { age: 'Ages 12+', name: 'Unity', sub: 'Pro Engine' },
    ],
  },
  {
    id: 'robotics',
    name: 'Robotics Track',
    tone: 'warning',
    steps: [
      { age: 'Ages 4–5', name: 'Qobo', sub: 'First Robotics' },
      { age: 'Age 6', name: 'Smart Robotics', sub: 'For Kids' },
      { age: 'Ages 7–8', name: 'Mechanical Lab', sub: 'Build & Move' },
      { age: 'Ages 9–10', name: 'Essential Skills', sub: 'Core Robotics' },
      { age: 'Ages 11+', name: 'Robotics Prime', sub: 'Advanced Build' },
      { age: 'Ages 12+', name: 'Physics + Eng', sub: 'Applied Robotics' },
      { age: 'Ages 12+', name: 'Arduino', sub: 'Real Hardware' },
    ],
  },
  {
    id: 'creativity',
    name: 'Creativity Track',
    tone: 'accent',
    steps: [
      { age: 'Ages 4–6', name: 'Digital Art', sub: 'First Creations' },
      { age: 'Ages 7–8', name: 'Drawing Pro', sub: 'Digital Drawing' },
      { age: 'Ages 11+', name: 'Procreate', sub: 'Illustration' },
    ],
  },
];
const trackLabelTone: Record<Track['tone'], string> = {
  primary: 'bg-primary text-white',
  warning: 'bg-warning text-white',
  accent: 'bg-accent text-white',
};
const trackCardTone: Record<Track['tone'], string> = {
  primary: 'border-primary/20 bg-primary/[0.04]',
  warning: 'border-warning/25 bg-warning/[0.06]',
  accent: 'border-accent/25 bg-accent/[0.05]',
};

const includedLeft = {
  title: 'STEM Curriculum',
  subtitle: 'Main package',
  items: [
    'Full coding or robotics curriculum (your choice)',
    'Age groups: 4–6, 7–9, 10–13',
    '36+ lessons covering the full academic year',
    'Minute-by-minute lesson plans',
    'Student worksheets, homework, projects',
    'Testing and progress tracking system',
    'Level-up system with parent-facing roadmap',
    'Holiday-themed lessons (Halloween, Christmas, etc.)',
    'Ready-made parent feedback templates',
  ],
};
const includedRight = {
  title: 'Business-in-a-Box',
  subtitle: 'Free bonuses',
  items: [
    'Marketing templates to fill your first STEM group',
    'Consultation script: "How to show parents your new roadmap"',
    'Retention & upsell playbook',
    'Operations checklist: scheduling, teacher onboarding, tracking',
    'Pricing strategy guide: how to charge $150–$250/month for STEM',
  ],
};

const proofPoints = [
  {
    icon: 'Users',
    title: '500+ students',
    text: 'Active in the GoCoding network across US & UAE right now.',
  },
  {
    icon: 'Globe2',
    title: '20+ countries',
    text: 'Built on CODDY International experience: 150+ locations, 8,600+ students.',
  },
  {
    icon: 'TrendingUp',
    title: '80% level-up rate',
    text: 'Students advance to the next level — that’s 3–5 years of retention.',
  },
  {
    icon: 'GraduationCap',
    title: 'No CS required',
    text: 'Teachers without coding backgrounds successfully run lessons from day one.',
  },
];

const benefitColumns = [
  {
    title: 'Your coding program becomes bulletproof',
    icon: 'ShieldCheck',
    points: [
      'No more single point of failure — the curriculum stays when people leave',
      'New teacher takes over in 1 day, not 1 month',
      'Professional-grade lesson plans match the quality of your math program',
    ],
  },
  {
    title: 'Parents see a real program',
    icon: 'CheckCircle2',
    points: [
      '8-level roadmap: show it on consultations. Parents frame level-up certificates.',
      'Project-based: kids demo "the game I built" → parents see value → they renew',
      'Compete with Code Ninjas on product — at 0.01% of franchise cost',
    ],
  },
  {
    title: 'Revenue that doesn’t depend on one person',
    icon: 'TrendingUp',
    points: [
      'STEM runs 12 months — no summer cliff, no exam-season dependency',
      'Additional $3–$8K/month on the same resources',
      '$40/month cost vs $40K–$100K/year coding revenue = insane ROI',
    ],
  },
];

const faqs = [
  {
    q: '"$40/month? What’s the catch?"',
    a: 'No catch. $40/month per program. Unlimited students. No per-student fees, no royalties, no hidden costs. Month-to-month. We make money when you stay — so our incentive is to make your program succeed.',
  },
  {
    q: '"Can a non-technical teacher really deliver this?"',
    a: 'Yes. Every lesson is scripted minute-by-minute. Teacher prep is 10 minutes. Our partner centers run the curriculum with elementary teachers, college students, and parents. If they can follow a lesson plan, they can teach coding.',
  },
  {
    q: '"We already have a coding program. Why switch?"',
    a: 'You’re not switching — you’re upgrading. Your teacher can still teach. But now they have professional lesson plans, levels, assessments, and parent reports. Think of it like giving your best player better equipment.',
  },
  {
    q: '"What if my current teacher doesn’t want to follow a script?"',
    a: 'Good teachers appreciate good tools. The script is a floor, not a ceiling — they can add their personality. But the structure means quality doesn’t depend on their mood. And when they eventually leave (74% of afterschool staff turnover says they will), the next teacher is ready in 1 day.',
  },
  {
    q: '"How is this different from Tynker or Code.org?"',
    a: 'Tynker/Code.org = kids on screens clicking through levels. GoCoding = a teacher teaching a class with projects, discussions, and real instruction. Kids build projects they can demo to parents. That’s what justifies your $150–$250/month tuition — not screen time.',
  },
];

const guaranteeCards = [
  {
    icon: FileX,
    title: 'No contracts',
    text: 'Month-to-month. Cancel anytime. No penalties, no minimums, no explanations needed.',
  },
  {
    icon: BookOpenCheck,
    title: 'Free demo lesson',
    text: 'Before you pay anything, we send you one full lesson. Have your teacher run it. If it doesn’t work — you owe nothing.',
  },
  {
    icon: Coins,
    title: 'Pays for itself with one student',
    text: 'If one child pays $150–$250/month, your $40 license pays for itself on day one.',
  },
  {
    icon: Repeat,
    title: 'Teacher-proof guarantee',
    text: 'If your teacher leaves, a new one can start in 1 day. The lesson plans don’t walk out the door.',
  },
];

const costOfNothing = [
  { label: 'Average coding revenue', value: '$3,000–$8,000/mo' },
  { label: 'Families lost to teacher turnover', value: '10–20/year' },
  { label: 'Average family LTV', value: '$3,600–$9,000' },
  { label: 'Annual revenue at risk', value: '$36,000–$72,000+' },
  { label: 'Cost to replace one teacher', value: '~$25,000' },
];
const costOfGoCoding = [
  { label: 'License', value: '$40/mo ($480/yr)' },
  { label: 'Break-even', value: '1 student' },
  { label: 'ROI with 20 students', value: '75x–125x' },
  { label: 'Annual risk protected', value: '$36K–$72K' },
];

const threePaths = [
  {
    badge: 'Path 1',
    title: 'Do Nothing',
    body: 'Keep your DIY program. Hope your teacher doesn’t leave. When they do, scramble to find another CS student. Tell parents "we’re restructuring." Watch 3–5 families leave. Rebuild from scratch. Again.',
    tone: 'neutral' as const,
  },
  {
    badge: 'Path 2',
    title: 'Build Your Own',
    body: 'Spend 3 months building curriculum. Write 36 lesson plans per program. Design parent reports. Create a level system. Test. Fix. Cost: 200+ hours. $5K–$15K opportunity cost. No guarantee.',
    tone: 'warning' as const,
  },
  {
    badge: 'Path 3',
    title: 'GoCoding License',
    body: 'Professional 15-program system, this month. 10-min teacher prep. Parent-facing roadmap. Progress reports. Marketing kit. $40/month. Free demo. No contract.',
    tone: 'accent' as const,
  },
];

export default function CodingCentersPage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="relative overflow-hidden border-b border-border bg-bg">
        <div className="absolute inset-0 hero-grid opacity-70" aria-hidden />
        <Container className="relative pt-16 pb-16 sm:pt-20 md:pt-24">
          <div className="reveal max-w-3xl">
            <Badge tone="danger">
              <Sparkles className="h-3.5 w-3.5" />
              For Centers That Already Teach Coding
            </Badge>
            <h1 className="mt-5 text-4xl font-extrabold sm:text-5xl md:text-[52px] md:leading-[1.1]">
              What Happens to Your Coding Program When Your Teacher Gives Notice?
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-text-muted sm:text-xl">
              Replace your homemade coding program with a 15-program
              professional system. $40/month. Same teacher, 10-min prep. New
              teacher? Ready in 1 day.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href={ZOOM_HREF} variant="primary" size="lg">
                Book a 15-Minute Zoom <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href={DEMO_HREF} variant="outline" size="lg">
                Get a Free Demo Lesson
              </Button>
            </div>
          </div>

          <div className="reveal mt-14 grid grid-cols-2 gap-4 rounded-2xl border border-border bg-white/80 p-4 backdrop-blur sm:p-6 md:grid-cols-4">
            {heroStats.map((s) => (
              <div key={s.label} className="px-2 py-1">
                <div className="font-heading text-2xl font-bold text-primary sm:text-3xl">
                  <StatCounter value={s.value} prefix={s.prefix} suffix={s.suffix} />
                </div>
                <div className="mt-1 text-sm text-text-muted">{s.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 2. The Choice */}
      <Section tone="surface">
        <div className="reveal max-w-3xl">
          <SectionHeading
            eyebrow="The choice"
            title="The one question you can't answer"
          />
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {choiceColumns.map((col, i) => (
            <div
              key={col.tag}
              className={cn(
                'reveal flex flex-col rounded-2xl border p-6 shadow-card',
                col.tone === 'neutral' && 'border-border bg-white/[0.04]',
                col.tone === 'danger' && 'border-danger/30 bg-danger/[0.05]',
                col.tone === 'accent' && 'border-accent/40 bg-accent/[0.06]',
              )}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span
                className={cn(
                  'inline-block w-fit rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider',
                  col.tone === 'neutral' && 'bg-white/8 text-text-muted',
                  col.tone === 'danger' && 'bg-danger/15 text-danger',
                  col.tone === 'accent' && 'bg-accent/15 text-accent',
                )}
              >
                {col.tag}
              </span>
              <h3 className="mt-4 text-lg font-bold">{col.heading}</h3>
              <ul className="mt-3 space-y-2 text-[15px] text-text/85">
                {col.lines.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              <p
                className={cn(
                  'mt-auto pt-5 font-semibold',
                  col.tone === 'neutral' && 'text-text-muted',
                  col.tone === 'danger' && 'text-danger',
                  col.tone === 'accent' && 'text-accent',
                )}
              >
                {col.footer}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* 3. Problem */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div className="reveal">
            <SectionHeading
              eyebrow="The problem"
              title="Here's what's really happening."
            />
            <div className="mt-7 space-y-4 text-lg leading-relaxed text-text/85">
              {problemParagraphs.map((p, i) => (
                <p
                  key={i}
                  className={problemEmphasis.has(i) ? 'font-semibold text-text' : ''}
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
          <aside className="reveal">
            <div className="rounded-3xl border border-danger/30 bg-danger/5 p-6 shadow-card">
              <div className="mb-4 flex items-center gap-2 text-danger">
                <AlertTriangle className="h-5 w-5" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  The hiring reality
                </span>
              </div>
              <p className="text-xl font-bold leading-snug">
                74% of afterschool providers report difficulty hiring and
                retaining staff.
              </p>
              <p className="mt-3 text-sm font-semibold text-text-muted">
                — Afterschool Alliance
              </p>
            </div>
          </aside>
        </div>
      </Section>

      {/* 4. Solution */}
      <SolutionSection
        title="A system, not a person."
        intro="You don't need another CS student. You need what your math program already has: a system that works regardless of who teaches it. GoCoding is a licensed STEM curriculum — coding, robotics, and digital art — designed for independent afterschool centers. Not a franchise. Not a platform. A curriculum license."
        points={solutionPoints}
        closer={'Next time a parent asks about your coding program — you show them a professional 8-level roadmap. Not a vague "we do Scratch."'}
      />

      {/* 5. Comparison */}
      <Section tone="surface">
        <div className="reveal max-w-3xl">
          <SectionHeading
            eyebrow="Why GoCoding"
            title="Why not just keep doing what you're doing?"
          />
        </div>
        <div className="reveal mt-10 overflow-x-auto rounded-2xl border border-border bg-surface shadow-card">
          <table className="w-full min-w-[820px] border-collapse text-left text-sm">
            <thead>
              <tr>
                <th className="sticky left-0 z-10 bg-surface px-4 py-3" />
                {compareHeaders.map((h, i) => (
                  <th
                    key={h}
                    className={cn(
                      'px-4 py-3 text-center align-bottom font-bold',
                      i === compareHeaders.length - 1
                        ? 'bg-primary text-white'
                        : 'text-text-muted',
                    )}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {compareRows.map((row, ri) => (
                <tr key={row.label} className={ri % 2 ? 'bg-ink' : 'bg-surface'}>
                  <th
                    scope="row"
                    className={cn(
                      'sticky left-0 z-10 px-4 py-3 text-left font-semibold',
                      ri % 2 ? 'bg-ink' : 'bg-surface',
                    )}
                  >
                    {row.label}
                  </th>
                  {row.cells.map((cell, ci) => {
                    const go = ci === row.cells.length - 1;
                    return (
                      <td
                        key={ci}
                        className={cn(
                          'px-4 py-3 text-center',
                          go ? 'bg-primary/[0.06] font-semibold text-text' : 'text-text-muted',
                        )}
                      >
                        {cell}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* 6. Program Pathway */}
      <Section tone="muted">
        <div className="reveal max-w-3xl">
          <SectionHeading
            eyebrow="Programs"
            title="From age 4 to 13. A 9-year roadmap parents can see."
          />
        </div>
        <div className="reveal mt-10 space-y-6">
          {tracks.map((track) => (
            <div key={track.id}>
              <span
                className={cn(
                  'inline-block rounded-lg px-3 py-1 text-xs font-bold uppercase tracking-wider',
                  trackLabelTone[track.tone],
                )}
              >
                {track.name}
              </span>
              <div className="mt-3 flex gap-3 overflow-x-auto pb-2">
                {track.steps.map((step, i) => (
                  <div key={`${step.name}-${i}`} className="flex items-center gap-3">
                    <div
                      className={cn(
                        'flex w-[160px] shrink-0 flex-col rounded-2xl border bg-surface p-4',
                        trackCardTone[track.tone],
                      )}
                    >
                      <span className="text-xs font-semibold text-text-muted">
                        {step.age}
                      </span>
                      <span className="mt-1 text-sm font-bold leading-tight text-text">
                        {step.name}
                      </span>
                      <span className="mt-0.5 text-xs text-text-muted">
                        {step.sub}
                      </span>
                    </div>
                    {i < track.steps.length - 1 && (
                      <ArrowRight className="h-4 w-4 shrink-0 text-text-muted/40" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="reveal mt-6 rounded-2xl bg-text px-6 py-5 text-white sm:px-8">
          <p className="text-[15px] leading-relaxed sm:text-base">
            Each program: 36+ lessons, homework, tests, parent reports.
            $40/month per program. Start with Scratch — add more as you grow.
          </p>
        </div>
        <div className="reveal mt-6">
          <Link
            href="/programs"
            className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
          >
            See All Programs <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      {/* 7. What's Included */}
      <WhatYouGet
        title="Everything you need. Nothing you don't."
        left={includedLeft}
        right={includedRight}
      />

      {/* 8. Social Proof */}
      <SocialProof
        title="Proven in real classrooms. Not in theory."
        points={proofPoints}
        callout="78% of US parents say STEM is an important factor when choosing an afterschool program. — Afterschool Alliance, America After 3PM"
      />

      {/* 9. Benefits */}
      <BenefitsSection
        title="What changes in your business"
        columns={benefitColumns}
      />

      {/* 10. FAQ */}
      <Section>
        <div className="reveal max-w-3xl">
          <SectionHeading eyebrow="FAQ" title="Common questions" />
        </div>
        <LandingFAQ faqs={faqs} />
      </Section>

      {/* 11. Guarantees */}
      <Section tone="surface">
        <div className="reveal max-w-3xl">
          <SectionHeading eyebrow="Risk reversal" title="Zero risk. Seriously." />
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {guaranteeCards.map((c, i) => (
            <div
              key={c.title}
              className="reveal flex flex-col rounded-2xl border border-accent/30 bg-surface p-6 shadow-card"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-white">
                <c.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-bold">{c.title}</h3>
              <p className="mt-1.5 text-sm text-text-muted">{c.text}</p>
            </div>
          ))}
        </div>
        <div className="reveal mt-10 rounded-2xl border-l-4 border-warning bg-warning/10 p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <Quote className="h-7 w-7 shrink-0 text-warning" />
            <p className="text-lg italic leading-relaxed text-text sm:text-xl">
              Canceling costs more than keeping it. Because next time your
              teacher leaves, you&rsquo;ll be scrambling again.
            </p>
          </div>
        </div>
      </Section>

      {/* 12. Pricing + ROI */}
      <Section>
        <div className="reveal max-w-3xl">
          <SectionHeading eyebrow="The math" title="$40/month. Here's the math." />
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="reveal rounded-3xl border border-danger/20 bg-danger/[0.04] p-7 shadow-card">
            <h3 className="text-xl font-bold">The cost of doing nothing</h3>
            <ul className="mt-6 space-y-3">
              {costOfNothing.map((l) => (
                <li
                  key={l.label}
                  className="flex flex-col items-start justify-between gap-1 rounded-xl bg-surface p-4 sm:flex-row sm:items-center"
                >
                  <span className="text-[15px] text-text-muted">{l.label}</span>
                  <span className="font-mono text-lg font-bold text-danger">
                    {l.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal rounded-3xl border border-accent/30 bg-accent/[0.05] p-7 shadow-card">
            <h3 className="text-xl font-bold">The cost of GoCoding</h3>
            <ul className="mt-6 space-y-3">
              {costOfGoCoding.map((l) => (
                <li
                  key={l.label}
                  className="flex flex-col items-start justify-between gap-1 rounded-xl bg-surface p-4 sm:flex-row sm:items-center"
                >
                  <span className="text-[15px] text-text-muted">{l.label}</span>
                  <span className="font-mono text-lg font-bold text-accent">
                    {l.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="reveal mt-10 rounded-2xl bg-text px-6 py-6 text-white sm:px-8">
          <p className="text-lg leading-relaxed sm:text-xl">
            $40/month is less than one hour of an instructor&rsquo;s pay. But
            it&rsquo;s the difference between &ldquo;program collapses&rdquo; and
            &ldquo;new teacher starts Monday.&rdquo;
          </p>
        </div>
      </Section>

      {/* 13. Three Paths */}
      <Section tone="surface">
        <div className="reveal max-w-3xl">
          <SectionHeading eyebrow="Your decision" title="Three paths from here." />
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {threePaths.map((path) => {
            const recommended = path.tone === 'accent';
            return (
              <div
                key={path.title}
                className={cn(
                  'reveal flex flex-col rounded-2xl border p-6',
                  path.tone === 'neutral' && 'border-border bg-white/[0.04]',
                  path.tone === 'warning' && 'border-warning/40 bg-warning/[0.08]',
                  recommended && 'border-2 border-accent bg-accent/[0.07] shadow-card',
                )}
              >
                <div className="flex items-center gap-2">
                  <span
                    className={cn(
                      'text-xs font-bold uppercase tracking-wider',
                      path.tone === 'neutral' && 'text-text-muted',
                      path.tone === 'warning' && 'text-warning',
                      recommended && 'text-accent',
                    )}
                  >
                    {path.badge}
                  </span>
                  {recommended && (
                    <Badge tone="accent">Recommended</Badge>
                  )}
                </div>
                <h3
                  className={cn(
                    'mt-1 text-lg font-bold',
                    path.tone === 'neutral' && 'text-text-muted',
                  )}
                >
                  {path.title}
                </h3>
                <p
                  className={cn(
                    'mt-2 text-[15px]',
                    path.tone === 'neutral' ? 'text-text-muted' : 'text-text/85',
                  )}
                >
                  {path.body}
                </p>
                {recommended && (
                  <div className="mt-auto flex flex-col gap-2 pt-5">
                    <Button href={ZOOM_HREF} variant="accent" className="w-full">
                      Book a 15-Minute Zoom <ArrowRight className="h-4 w-4" />
                    </Button>
                    <Button href={DEMO_HREF} variant="outline" className="w-full">
                      Get a Free Demo Lesson
                    </Button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Section>

      {/* 14. Final CTA */}
      <CTASection
        title="Stop depending on one person."
        primary={{
          title: 'Book a 15-minute Zoom',
          text: 'I’ll show you one lesson from the curriculum and the roadmap you can show parents next week.',
          button: 'Book a 15-Minute Zoom',
          url: ZOOM_HREF,
        }}
        secondary={{
          title: 'Get a free demo lesson',
          text: 'I’ll send a free demo lesson. Your teacher can run it this week. No commitment.',
          button: 'Get a Free Demo Lesson',
          url: DEMO_HREF,
        }}
        footer="$40/month. No contract. Pays for itself with one student. And your coding program will never depend on one person again."
      />
    </>
  );
}
