import type { Metadata } from 'next';
import Container from '@/components/shared/Container';
import Section from '@/components/shared/Section';
import SectionHeading from '@/components/shared/SectionHeading';
import Button from '@/components/shared/Button';
import Badge from '@/components/shared/Badge';
import StatCounter from '@/components/shared/StatCounter';
import ProgramPathway from '@/components/landing/ProgramPathway';
import WhatsIncluded from '@/components/landing/WhatsIncluded';
import LandingFAQ from '@/components/landing/LandingFAQ';
import BenefitsSection from '@/components/landing/BenefitsSection';
import AfterschoolDemoForm from '@/components/landing/AfterschoolDemoForm';
import {
  ArrowRight,
  Check,
  Coins,
  FileX,
  GraduationCap,
  Minus,
  Quote,
  Repeat,
  Sparkles,
  Target,
  TrendingUp,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

const DEMO_ANCHOR = '#demo-form';

export const metadata: Metadata = {
  title:
    'STEM Curriculum for Afterschool Centers | Coding, Robotics, Digital Art | $40/mo | GoCoding',
  description:
    'Add 15+ STEM programs to your afterschool center this week. Teacher-proof lesson plans, 10-min prep, ages 4-12+. $40/month per program. No contract. Free demo lesson.',
  alternates: { canonical: '/for-afterschool-centers' },
  openGraph: {
    title:
      'Add Coding to Your Afterschool Center — Without Hiring a Coding Teacher',
    description:
      '15 STEM programs. Your teachers. 10 minutes of prep. $40/month. No contract. Free demo lesson.',
    type: 'website',
    url: '/for-afterschool-centers',
  },
};

type Stat = { value?: number; suffix?: string; text?: string; label: string };
const heroStats: Stat[] = [
  { value: 500, suffix: '+', label: 'Students' },
  { value: 95, suffix: '%', label: 'Monthly retention' },
  { value: 15, suffix: '+', label: 'Programs' },
  { text: '4–12+', label: 'Ages covered' },
];

const problemParagraphs = [
  'Last Tuesday, a mom asked if you have coding. It was the third time this month. You smiled and said your usual line: "We’re looking into it." She nodded politely — the kind of nod that means she’s already Googling Code Ninjas on her phone.',
  'You’ve tried to fix this. Maybe you hired a CS student — and they lasted four months before leaving for a real tech job. Maybe you downloaded Scratch tutorials from YouTube and asked your best teacher to "figure it out." Maybe you called an enrichment vendor and learned they’d charge $20 per student per session — and control the schedule, the quality, and the parent communication.',
  'Here’s what the data confirms: 69% of afterschool providers report staffing as their #1 challenge. Qualified coding teachers earn $65,000+ in tech — they’re not taking your $18/hour part-time role. And when the one you found leaves, the program dies with them.',
  'Meanwhile, the franchise down the street keeps growing. Not because they’re better at education. Because they solved the curriculum problem — and you haven’t. Yet.',
];

const solutionCards: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Repeat,
    title: 'Teacher-Proof',
    text: 'Minute-by-minute lesson plans. Your art teacher can deliver a coding class. Your math tutor can run a robotics session. If a teacher quits, the next one starts Monday.',
  },
  {
    icon: TrendingUp,
    title: 'Full Pathway',
    text: 'ScratchJr at age 5, Minecraft Coding at 7, Roblox at 11, Python at 12+. Kids never outgrow your program. Families stay for years, not months.',
  },
  {
    icon: Coins,
    title: 'Your Brand, Your Revenue',
    text: '$40/month per program — flat. Not per student. You charge families $50–75/month. You keep the margin. No per-student fee. No vendor taking your revenue.',
  },
];

const compareHeaders = [
  'GoCoding',
  'Enrichment Vendor',
  'Brite',
  'Code Ninjas Franchise',
];
const compareRows: { label: string; cells: string[] }[] = [
  { label: 'Cost', cells: ['$40/mo per program (flat)', '$15–25/student/session', '$19.99/student/mo', '$175K–298K + royalties'] },
  { label: 'Who teaches', cells: ['Your teachers', 'Their instructor', 'Your teachers', 'Their staff'] },
  { label: 'Prep time', cells: ['10 minutes', 'N/A', 'Varies', 'N/A'] },
  { label: 'Revenue you keep', cells: ['100% of tuition', '0–30%', 'Tuition minus SaaS fee', 'Tuition minus royalties'] },
  { label: 'Programs', cells: ['15+ (coding, robotics, art)', '1–3', '50+ (coding focused)', 'Coding only'] },
  { label: 'Age range', cells: ['4–12+', 'Varies', '5–18', '7–14'] },
  { label: 'Contract', cells: ['None — cancel anytime', 'Usually semester', 'Monthly', '10-year franchise'] },
  { label: 'Parent reports', cells: ['yes', 'Varies', 'yes', 'yes'] },
  { label: 'Marketing templates', cells: ['yes', 'no', 'no', 'yes'] },
  { label: 'Trial lesson script', cells: ['yes', 'no', 'no', 'no'] },
];

const proofStats = [
  { stat: '500+', label: 'Students currently learning' },
  { stat: '95%', label: 'Monthly retention rate' },
  { stat: '2.5 yr', label: 'Average student lifetime' },
  { stat: '150+', label: 'Locations worldwide (CODDY)' },
];

const benefitColumns = [
  {
    title: 'For Your Center',
    icon: 'TrendingUp',
    points: [
      'New revenue stream: $500–2,000/mo from STEM classes',
      'Competitive moat against franchises opening nearby',
      'STEM is the #1 requested afterschool subject — 73% of programs already offer it',
    ],
  },
  {
    title: 'For Your Teachers',
    icon: 'GraduationCap',
    points: [
      'No fear: minute-by-minute scripts eliminate intimidation',
      'No burnout: 10-min prep instead of hours of curriculum research',
      'A new skill on their resume: "I teach coding"',
    ],
  },
  {
    title: 'For Families',
    icon: 'CheckCircle2',
    points: [
      'Progress reports showing exactly what their child learned',
      'Full pathway from age 4 to 12+ — no dead ends',
      'Recognized curriculum based on international methodology (20+ countries)',
    ],
  },
];

const faqs = [
  {
    q: 'Can my regular afterschool teachers really teach coding?',
    a: 'Yes. Our lesson plans are scripted minute-by-minute — like a detailed recipe. Your teacher doesn’t need to know how to code; they need to follow a plan and manage a classroom. Art teachers, math tutors, and PE coaches deliver coding classes successfully. 10 minutes of prep is genuinely all it takes.',
  },
  {
    q: 'What if a tech-savvy parent questions the curriculum?',
    a: 'Our curriculum is based on CODDY International — used in 150+ locations across 20+ countries with 8,600+ students. It includes real programming languages (Scratch, Python, Lua, C#, Arduino) and follows industry-standard progression. Share the program pathway with any parent — it speaks for itself.',
  },
  {
    q: 'I tried coding before and it failed. Why would this be different?',
    a: 'Most coding programs fail for one of three reasons: the teacher leaves, kids get bored, or the curriculum runs out. GoCoding solves all three. Teacher-proof plans mean no single point of failure. 15+ programs across 3 tracks mean kids never run out of material. And level-up progression keeps them engaged semester after semester. That’s why retention is 95%.',
  },
  {
    q: '$40/month seems too cheap. What’s the catch?',
    a: 'No catch. No per-student fee. No setup cost. No hidden charges. We keep it affordable because the model scales — we license curriculum, not send instructors. Your 10 students pay the same as another center’s 50. The more kids you enroll, the better your margins get.',
  },
  {
    q: 'Is there a contract or long-term commitment?',
    a: 'No. Month to month. Cancel anytime. We believe if the curriculum works, you’ll stay — 95% monthly retention tells us most centers do.',
  },
];

const guaranteeCards: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Target,
    title: 'Free Demo Lesson',
    text: 'Try before you buy. We send you a complete demo lesson — scripted, ready to run. Give it to any teacher. Watch from the back. If the kids aren’t engaged, walk away.',
  },
  {
    icon: FileX,
    title: 'No Contract, Cancel Anytime',
    text: 'Month-to-month subscription. No setup fees. No cancellation penalties. Stay because it works, not because you’re locked in.',
  },
  {
    icon: Coins,
    title: 'ROI from Day One',
    text: '10 kids × $50/month = $500 revenue. Your cost: $40. That’s a 92% margin before you even fill the class.',
  },
  {
    icon: GraduationCap,
    title: 'Teacher-Proof Promise',
    text: 'If your teacher struggles to deliver a lesson after reading the plan, contact us. We’ll walk them through it personally. No extra charge.',
  },
];

const threePaths = [
  {
    badge: 'Path 1',
    title: 'Do Nothing',
    body: 'Keep saying "we’re working on it." Keep losing families to Code Ninjas. Keep watching your enrollment plateau while competitors grow. In 12 months, nothing changes except the number of families who gave up waiting.',
    tone: 'neutral' as const,
  },
  {
    badge: 'Path 2',
    title: 'Do It Yourself',
    body: 'Spend 3 months building a coding curriculum from YouTube. Hire a CS student for $20/hour who’ll leave in 6 months. Invest $3,000–6,000 and your sanity. Hope it works.',
    tone: 'warning' as const,
  },
  {
    badge: 'Path 3',
    title: 'Add GoCoding This Week',
    body: '15 STEM programs. Your teachers. 10 minutes of prep. $40/month. First demo lesson free. No contract. If it doesn’t work, cancel. If it does — you just became the STEM afterschool center your families have been asking for.',
    tone: 'accent' as const,
  },
];

function CompareCell({ value, go }: { value: string; go?: boolean }) {
  if (value === 'yes') return <Check className="mx-auto h-5 w-5 text-accent" />;
  if (value === 'no') return <Minus className="mx-auto h-5 w-5 text-text-muted/40" />;
  return (
    <span className={go ? 'font-semibold text-text' : 'text-text-muted'}>{value}</span>
  );
}

export default function AfterschoolCentersPage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="relative overflow-hidden border-b border-border bg-bg">
        <div className="absolute inset-0 hero-grid opacity-70" aria-hidden />
        <Container className="relative pt-16 pb-16 sm:pt-20 md:pt-24">
          <div className="reveal max-w-3xl">
            <Badge tone="primary">
              <Sparkles className="h-3.5 w-3.5" />
              For multi-subject afterschool centers
            </Badge>
            <h1 className="mt-5 text-4xl font-extrabold sm:text-5xl md:text-[50px] md:leading-[1.1]">
              Add Coding, Robotics &amp; Digital Art to Your Center This Week —
              Without Hiring a Single New Teacher
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-text-muted sm:text-xl">
              15 STEM programs your afterschool teachers deliver with 10 minutes
              of prep. No coding experience needed. $40/month per program. No
              contract.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href={DEMO_ANCHOR} variant="primary" size="lg">
                Get a Free Demo Lesson <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/programs" variant="outline" size="lg">
                See the Full Program List
              </Button>
            </div>
          </div>

          <div className="reveal mt-14 grid grid-cols-2 gap-4 rounded-2xl border border-border bg-white/80 p-4 backdrop-blur sm:p-6 md:grid-cols-4">
            {heroStats.map((s) => (
              <div key={s.label} className="px-2 py-1">
                <div className="font-heading text-2xl font-bold text-primary sm:text-3xl">
                  {s.text ? s.text : <StatCounter value={s.value ?? 0} suffix={s.suffix} />}
                </div>
                <div className="mt-1 text-sm text-text-muted">{s.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 2. Problem */}
      <Section tone="surface">
        <div className="reveal max-w-3xl">
          <SectionHeading
            eyebrow="The problem"
            title={'Parents keep asking. You keep saying "We’re working on it."'}
          />
          <div className="mt-7 space-y-4 text-lg leading-relaxed text-text/85">
            {problemParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </Section>

      {/* 3. Solution */}
      <Section>
        <div className="reveal max-w-3xl">
          <SectionHeading
            eyebrow="The solution"
            title="A STEM program library your teachers deliver in-house"
            description="GoCoding gives you 15+ ready-to-teach STEM programs across coding, robotics, and digital art. Ages 4 to 12+. Each program includes 36+ lesson plans — scripted minute by minute — so any afterschool teacher delivers professional classes with just 10 minutes of prep."
          />
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {solutionCards.map((c, i) => (
            <div
              key={c.title}
              className="reveal rounded-2xl border border-border bg-surface p-6 shadow-card"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                <c.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-bold">{c.title}</h3>
              <p className="mt-2 text-[15px] text-text-muted">{c.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 4. Competitive comparison */}
      <Section tone="muted">
        <div className="reveal max-w-3xl">
          <SectionHeading
            eyebrow="Side by side"
            title="What $40/month gets you vs. every other option"
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
                      i === 0 ? 'bg-primary text-white' : 'text-text-muted',
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
                  {row.cells.map((cell, ci) => (
                    <td
                      key={ci}
                      className={cn(
                        'px-4 py-3 text-center',
                        ci === 0 && 'bg-primary/[0.06]',
                      )}
                    >
                      <CompareCell value={cell} go={ci === 0} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* 5. Program Pathway */}
      <Section>
        <div className="reveal max-w-3xl">
          <SectionHeading
            eyebrow="The pathway"
            title="15+ programs. Three tracks. Ages 4 to 12+."
            description="Kids never outgrow your program — every year there's a new level to move up to."
          />
        </div>
        <div className="reveal mt-10">
          <ProgramPathway
            highlight={['minecraft-coding-ai', 'smart-robotics-kids', 'digital-art-for-kids']}
          />
        </div>
      </Section>

      {/* 6. What's Included */}
      <Section tone="muted">
        <div className="reveal max-w-3xl">
          <SectionHeading
            eyebrow="What you get"
            title="Everything you need. Nothing you don't."
            description="Each $40/month program includes a full academic year of materials — ready to teach."
          />
        </div>
        <div className="mt-10">
          <WhatsIncluded />
        </div>
      </Section>

      {/* 7. Social proof */}
      <Section>
        <div className="reveal max-w-3xl">
          <SectionHeading
            eyebrow="Social proof"
            title="Proven across 500+ students worldwide"
          />
        </div>
        <div className="reveal mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {proofStats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-border bg-surface p-6 text-center shadow-card"
            >
              <div className="font-heading text-3xl font-extrabold text-primary sm:text-4xl">
                {s.stat}
              </div>
              <div className="mt-2 text-sm text-text-muted">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="reveal mt-6 rounded-2xl border border-primary/30 bg-primary/5 p-6 shadow-card sm:p-8">
          <div className="flex items-start gap-4">
            <Quote className="h-8 w-8 shrink-0 text-primary" />
            <p className="text-lg italic leading-relaxed text-text sm:text-xl">
              I was surprised how easy it was to start afterschool coding
              classes. I always wanted to teach kids but the idea of having to
              build curriculum would always overwhelm me.
            </p>
          </div>
        </div>
      </Section>

      {/* 8. Benefits */}
      <BenefitsSection
        title="Everyone wins — your center, your teachers, your families"
        columns={benefitColumns}
      />

      {/* 9. FAQ */}
      <Section>
        <div className="reveal max-w-3xl">
          <SectionHeading eyebrow="FAQ" title="Common questions" />
        </div>
        <LandingFAQ faqs={faqs} />
      </Section>

      {/* 10. Guarantees */}
      <Section tone="surface">
        <div className="reveal max-w-3xl">
          <SectionHeading
            eyebrow="Risk reversal"
            title="Zero risk. Full confidence."
          />
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
      </Section>

      {/* 11. Pricing + ROI */}
      <Section>
        <div className="reveal max-w-3xl">
          <SectionHeading
            eyebrow="The math"
            title="The math that makes this obvious"
          />
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="reveal rounded-3xl border border-danger/20 bg-danger/[0.04] p-7 shadow-card">
            <h3 className="text-xl font-bold">Without STEM</h3>
            <ul className="mt-5 space-y-3 text-[15px] text-text/85">
              <li>Monthly STEM revenue: $0</li>
              <li>Families asking about coding: still asking</li>
              <li>Competitive position: falling behind</li>
            </ul>
          </div>
          <div className="reveal rounded-3xl border border-accent/30 bg-accent/[0.05] p-7 shadow-card">
            <h3 className="text-xl font-bold">
              With GoCoding — 3 programs, $120/mo
            </h3>
            <ul className="mt-5 space-y-3 text-[15px] text-text/85">
              <li>Monthly STEM revenue: $1,500–4,500</li>
              <li>Families enrolled in STEM: 30–60 kids</li>
              <li>Annual STEM profit: $16,560–52,560</li>
              <li>Teacher hiring cost: $0</li>
              <li>Break-even: 1 student, first month</li>
            </ul>
          </div>
        </div>
        <div className="reveal mt-6 rounded-2xl bg-text px-6 py-5 text-white sm:px-8">
          <p className="text-[15px] leading-relaxed sm:text-base">
            $40/month per program. Start with 1 program or 15 — your choice.
            Most centers start with 3: Minecraft Coding + Smart Robotics +
            Digital Art = $120/month.
          </p>
        </div>
      </Section>

      {/* 12. Three Paths */}
      <Section tone="muted">
        <div className="reveal max-w-3xl">
          <SectionHeading
            eyebrow="Your decision"
            title="Three paths forward. One decision."
          />
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {threePaths.map((path) => {
            const recommended = path.tone === 'accent';
            return (
              <div
                key={path.title}
                className={cn(
                  'reveal flex flex-col rounded-2xl border p-6',
                  path.tone === 'neutral' && 'border-border bg-surface',
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
                  {recommended && <Badge tone="accent">Recommended</Badge>}
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
                  <div className="mt-auto pt-5">
                    <Button href={DEMO_ANCHOR} variant="accent" className="w-full">
                      Get a Free Demo Lesson <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Section>

      {/* 13. Final CTA */}
      <section id="demo-form" className="scroll-mt-24 bg-bg py-16 sm:py-20 md:py-24">
        <Container>
          <div className="reveal mx-auto max-w-2xl">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold sm:text-4xl">
                Your families are waiting. Your teachers are ready. Let&rsquo;s
                go.
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-text-muted">
                Get your free demo lesson — a complete, scripted class any
                teacher can run this week.
              </p>
            </div>
            <div className="mt-8 rounded-3xl border border-border bg-surface p-7 shadow-card sm:p-9">
              <AfterschoolDemoForm />
            </div>
            <p className="mt-6 text-center text-sm text-text-muted">
              Or{' '}
              <a href="/contact" className="font-semibold text-primary hover:underline">
                schedule a 15-minute walkthrough
              </a>{' '}
              with our team.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
