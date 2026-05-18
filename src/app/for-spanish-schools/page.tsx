import type { Metadata } from 'next';
import Container from '@/components/shared/Container';
import Section from '@/components/shared/Section';
import SectionHeading from '@/components/shared/SectionHeading';
import Button from '@/components/shared/Button';
import Badge from '@/components/shared/Badge';
import StatCounter from '@/components/shared/StatCounter';
import SolutionSection from '@/components/landing/SolutionSection';
import ProgramPathway from '@/components/landing/ProgramPathway';
import WhatsIncluded from '@/components/landing/WhatsIncluded';
import LandingFAQ from '@/components/landing/LandingFAQ';
import Guarantees from '@/components/landing/Guarantees';
import SpanishDemoForm from '@/components/landing/SpanishDemoForm';
import { ArrowRight, Check, Minus, Sparkles, TrendingDown, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';

const DEMO_ANCHOR = '#demo-form';

export const metadata: Metadata = {
  title: 'STEM Curriculum for Spanish Schools | Coding & Robotics for Spanish Afterschool',
  description:
    'Add coding, robotics, and digital art to your Spanish afterschool program for $40/month. Scripted lessons, parent reports, marketing materials. Free demo lesson.',
  alternates: { canonical: '/for-spanish-schools' },
  openGraph: {
    title: 'Your Best Families Leave at 3rd Grade. Here’s the Fix.',
    description:
      'Add STEM to your Spanish school for $40/month. Keep families 4 extra years.',
    type: 'website',
    url: '/for-spanish-schools',
  },
};

type Stat = { value?: number; prefix?: string; suffix?: string; text?: string; label: string };
const heroStats: Stat[] = [
  { value: 500, suffix: '+', label: 'Students learning now' },
  { value: 95, suffix: '%', label: 'Monthly retention' },
  { text: '2.5 yr', label: 'Avg student lifetime' },
  { value: 15, suffix: '+', label: 'Programs, ages 4–12+' },
  { value: 150, suffix: '+', label: 'Locations worldwide' },
];

const problemParagraphs = [
  'You built something beautiful. A Spanish immersion program where kids sing, paint, play, and learn — all in español. Parents love it. Kids love it.',
  'Until 3rd grade.',
  'That’s when the dual-language elementary school opens its doors. Free. Full-day. Government-funded. Your best families — the ones who care most about bilingualism — leave for free public school.',
  'The casual families? They discover Duolingo. "Why pay $400/month when there’s an app?"',
  'And the families in between? They look around and see 4 other Spanish programs within 10 miles. Same classes. Same age range. Same everything. They pick whichever is closest — or cheapest — because they can’t tell the difference.',
  'By the end of the year, you’ve lost 12 families. That’s $57,600 in annual tuition. Gone.',
  'Not because you did anything wrong. Because you only offered one thing — and the world offered it for free.',
];
const problemEmphasis = new Set([1, 5]);

const solutionPoints = [
  {
    icon: 'Repeat',
    title: 'Teacher-Proof Curriculum',
    description:
      'Scripted minute-by-minute. Your Spanish teachers deliver it. No CS degree needed. If a teacher leaves, the next one starts Monday.',
  },
  {
    icon: 'GraduationCap',
    title: 'From Age 4 to 12+',
    description:
      '15+ programs across coding, robotics, and digital art. Kids never outgrow your school.',
  },
  {
    icon: 'ListChecks',
    title: 'Everything Included',
    description:
      'Lesson plans, homework, tests, parent reports, trial lesson, marketing templates. One price. No surprises.',
  },
];

const compareHeaders = [
  'GoCoding',
  'Brite',
  'Code.org (free)',
  'Freelance Teacher',
  'Code Ninjas Franchise',
];
const compareRows: { label: string; cells: string[] }[] = [
  { label: 'Price', cells: ['$40/mo flat', '$20/student/mo', 'Free', '$50/hr', '$120K–350K'] },
  {
    label: 'Cost at 50 students',
    cells: ['$40/mo', '$1,000/mo', '$0', '$800/mo', '$300+/mo + royalties'],
  },
  {
    label: 'Scripted lessons',
    cells: ['Minute-by-minute', 'Template-based', 'Self-paced', 'Improvised', 'Franchise scripts'],
  },
  { label: 'Parent reports', cells: ['English', 'yes', 'no', 'no', 'yes'] },
  { label: 'Marketing materials', cells: ['yes', 'no', 'no', 'no', 'Branded'] },
  { label: 'Free trial lesson', cells: ['yes', 'no', 'no', 'no', 'no'] },
  {
    label: 'Teacher quits?',
    cells: [
      'Next one starts Monday',
      'Re-train',
      'N/A',
      'Start from zero',
      'Re-hire + train',
    ],
  },
  {
    label: 'Contract',
    cells: ['None — cancel anytime', 'Annual', '—', 'Informal', 'Multi-year'],
  },
];

const faqs = [
  {
    q: 'My teachers speak Spanish, not code. Can they really teach this?',
    a: 'Yes. Every lesson is scripted minute by minute — what to say, what to show, when to let kids work. A Spanish teacher who has never seen code can deliver a great class after 10 minutes of prep. That is the whole point.',
  },
  {
    q: 'I tried hiring a coding teacher before. He quit and parents were furious.',
    a: 'That is exactly why this exists. The curriculum belongs to your school, not the teacher. When someone leaves, the next person reads the lesson plan and teaches on day one.',
  },
  {
    q: 'Won’t coding feel out of place in a Spanish immersion environment?',
    a: 'Seven Spanish programs in the US already combine language + STEM. Parents love it — "my child codes IN our Spanish school" is the most powerful thing you can say. STEM doesn’t replace immersion. It amplifies it.',
  },
  {
    q: 'Public dual-language schools are free. How do I compete?',
    a: 'You can’t compete on Spanish — they offer it free, all day. But they don’t offer structured coding and robotics in a small-group setting after school. That’s your edge.',
  },
  {
    q: 'My parents chose me because I’m anti-screen. Coding is all screens.',
    a: 'Our Robotics track is 100% hands-on — building with physical kits, no screens. Digital Art uses tablets creatively. Coding lessons alternate between instruction, pair work, and presentations. And parents who worry about screen time at home love structured, educational coding at school.',
  },
];

const threePaths = [
  {
    badge: 'Path 1',
    title: 'Do Nothing',
    body: 'Keep teaching Spanish only. Watch families leave at 3rd grade. Hope that public schools stop being free and Duolingo stops being convenient.',
    tone: 'neutral' as const,
  },
  {
    badge: 'Path 2',
    title: 'Do It Yourself',
    body: 'Hire a coding teacher at $50/hour. Pray they don’t quit. Build lesson plans from scratch. Create parent reports. Maybe it works. Maybe it’s the same story as last time.',
    tone: 'warning' as const,
  },
  {
    badge: 'Path 3',
    title: 'Get a Free Demo Lesson',
    body: 'A complete, scripted coding class — free. Hand it to your teacher. Run it this week. See the kids’ faces. Then decide. $40/month if you continue. Cancel anytime if you don’t.',
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

export default function SpanishSchoolsPage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="relative overflow-hidden border-b border-border bg-bg">
        <div className="absolute inset-0 hero-grid opacity-70" aria-hidden />
        <Container className="relative pt-16 pb-16 sm:pt-20 md:pt-24">
          <div className="reveal max-w-3xl">
            <Badge tone="warning">
              <Sparkles className="h-3.5 w-3.5" />
              For Spanish afterschool &amp; immersion programs
            </Badge>
            <h1 className="mt-5 text-4xl font-extrabold sm:text-5xl md:text-[52px] md:leading-[1.1]">
              Your Best Families Leave at 3rd Grade. They Don&rsquo;t Have To.
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-text-muted sm:text-xl">
              Add coding, robotics, and digital art to your Spanish program —
              for $40/month. Keep families 4 extra years. Free demo lesson
              included.
            </p>
            <div className="mt-7">
              <Button href={DEMO_ANCHOR} size="lg">
                Get Your Free Demo Lesson <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="reveal mt-14 grid grid-cols-2 gap-4 rounded-2xl border border-white/8 bg-ink-card p-4 sm:grid-cols-3 md:grid-cols-5 sm:p-6">
            {heroStats.map((s) => (
              <div key={s.label} className="px-2 py-1">
                <div className="font-heading text-2xl font-bold text-primary sm:text-3xl">
                  {s.text ? (
                    s.text
                  ) : (
                    <StatCounter
                      value={s.value ?? 0}
                      prefix={s.prefix}
                      suffix={s.suffix}
                    />
                  )}
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
            title="You only offered one thing — and the world offered it for free."
          />
          <div className="mt-7 space-y-4 text-lg leading-relaxed text-text/85">
            {problemParagraphs.map((p, i) => (
              <p
                key={i}
                className={problemEmphasis.has(i) ? 'font-bold text-text' : ''}
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </Section>

      {/* 3. Killer element — the 3rd-Grade Bridge ROI */}
      <Section>
        <div className="reveal max-w-3xl">
          <SectionHeading
            eyebrow="The 3rd-Grade Bridge"
            title="The math that changes everything"
          />
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <div className="reveal rounded-3xl border border-danger/30 bg-danger/[0.05] p-7 shadow-card">
            <div className="flex items-center gap-2 text-danger">
              <TrendingDown className="h-5 w-5" />
              <span className="text-xs font-bold uppercase tracking-wider">
                Without STEM
              </span>
            </div>
            <ul className="mt-4 space-y-2 text-[15px] text-text/85">
              <li>Family enrolls at age 4</li>
              <li>Stays 4 years (PreK through 2nd grade)</li>
              <li>Leaves at 3rd grade for public dual-language school</li>
            </ul>
            <div className="mt-5 border-t border-danger/20 pt-4">
              <div className="text-sm text-text-muted">
                Lifetime value — $400/mo × 10 mo × 4 yrs
              </div>
              <div className="font-mono text-3xl font-extrabold text-danger">
                $16,000
              </div>
            </div>
          </div>

          <div className="reveal rounded-3xl border border-accent/40 bg-accent/[0.06] p-7 shadow-card">
            <div className="flex items-center gap-2 text-accent">
              <TrendingUp className="h-5 w-5" />
              <span className="text-xs font-bold uppercase tracking-wider">
                With STEM
              </span>
            </div>
            <ul className="mt-4 space-y-2 text-[15px] text-text/85">
              <li>Family enrolls at age 4</li>
              <li>At 3rd grade, child starts Minecraft Coding → Roblox → Python</li>
              <li>Stays through 6th grade (8 years total)</li>
            </ul>
            <div className="mt-5 border-t border-accent/20 pt-4">
              <div className="text-sm text-text-muted">
                Lifetime value — $400/mo × 10 mo × 8 yrs
              </div>
              <div className="font-mono text-3xl font-extrabold text-accent">
                $32,000
              </div>
            </div>
          </div>
        </div>
        <div className="reveal mt-6 rounded-2xl bg-gradient-to-br from-brand to-cyan px-6 py-5 text-white sm:px-8">
          <p className="text-lg font-bold sm:text-xl">
            The difference: $16,000 per family.
          </p>
          <p className="mt-2 text-[15px] leading-relaxed text-white/85">
            Your GoCoding investment: $80/month for 2 programs = $960/year. One
            retained family pays for 16 years of curriculum.
          </p>
        </div>
      </Section>

      {/* 4. Solution */}
      <SolutionSection
        title="GoCoding: Your Spanish School's STEM Department — for $40/Month"
        intro="GoCoding gives your Spanish school something no public school, no app, and no competitor offers: a complete STEM program — coding, robotics, digital art — that your existing teachers can deliver with 10 minutes of prep. Kids build games in Roblox, code characters in Minecraft, design digital art, and program real robots — all inside your school, on your schedule, under your brand."
        points={solutionPoints}
        closer={'You stop being "another Spanish program." You become "the Spanish + STEM school." There is no second one within 10 miles.'}
      />

      {/* 5. Program Pathway */}
      <Section tone="surface">
        <div className="reveal max-w-3xl">
          <SectionHeading
            eyebrow="The pathway"
            title="From age 4 to 12+. They never outgrow your school."
            description="15 programs across three tracks. Every year a new level — so there's always a reason to stay."
          />
        </div>
        <div className="reveal mt-10">
          <ProgramPathway highlight={['minecraft-coding-ai', 'roblox-build-code']} />
        </div>
      </Section>

      {/* 6. What's Included */}
      <Section tone="muted">
        <div className="reveal max-w-3xl">
          <SectionHeading
            eyebrow="What you get"
            title="Everything your teacher needs. Nothing else to buy."
            description="Each $40/month program includes a full academic year of materials — ready to teach."
          />
        </div>
        <div className="mt-10">
          <WhatsIncluded />
        </div>
      </Section>

      {/* 7. Competitive comparison */}
      <Section>
        <div className="reveal max-w-3xl">
          <SectionHeading eyebrow="Side by side" title="How GoCoding compares" />
        </div>
        <div className="reveal mt-10 overflow-x-auto rounded-2xl border border-border bg-surface shadow-card">
          <table className="w-full min-w-[920px] border-collapse text-left text-sm">
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

      {/* 8. Social proof */}
      <Section tone="surface">
        <div className="reveal max-w-3xl">
          <SectionHeading
            eyebrow="Social proof"
            title="Trusted by 500+ students worldwide"
          />
        </div>
        <div className="reveal mt-8 grid gap-4 sm:grid-cols-3">
          {[
            { stat: '500+', label: 'students learning through GoCoding right now' },
            { stat: '95%', label: 'monthly retention — kids stay' },
            { stat: '2.5 yr', label: 'average student lifetime' },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-border bg-surface p-6 shadow-card"
            >
              <div className="font-heading text-4xl font-extrabold text-primary">
                {s.stat}
              </div>
              <div className="mt-2 text-sm text-text-muted">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="reveal mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6">
            <p className="text-[15px] text-text/90">
              Built on CODDY International: 150+ locations, 20+ countries, 8,600+
              students.
            </p>
          </div>
          <div className="rounded-2xl border border-accent/30 bg-accent/[0.06] p-6">
            <p className="text-[15px] text-text/90">
              7+ Spanish programs in the US already add STEM to differentiate —
              the trend is real.
            </p>
          </div>
        </div>
        <div className="reveal mt-4 rounded-2xl border border-dashed border-border bg-bg p-6 text-center text-sm text-text-muted">
          Testimonial coming soon — space reserved for our first Spanish school
          client.
        </div>
      </Section>

      {/* 9. FAQ */}
      <Section>
        <div className="reveal max-w-3xl">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions we hear from Spanish school owners"
          />
        </div>
        <LandingFAQ faqs={faqs} />
      </Section>

      {/* 10. Guarantees */}
      <Section tone="muted">
        <div className="reveal max-w-3xl">
          <SectionHeading eyebrow="Risk reversal" title="Zero risk. Seriously." />
        </div>
        <div className="mt-10">
          <Guarantees />
        </div>
      </Section>

      {/* 11. Pricing + ROI */}
      <Section>
        <div className="reveal max-w-3xl">
          <SectionHeading
            eyebrow="Pricing"
            title="$40/month per program. That's it."
          />
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="reveal rounded-3xl border border-border bg-surface p-7 shadow-card">
            <ul className="space-y-3">
              {[
                ['1 program', '$40/month'],
                ['2 programs', '$80/month'],
                ['3 programs', '$120/month'],
              ].map(([k, v]) => (
                <li
                  key={k}
                  className="flex items-center justify-between gap-3 rounded-xl bg-bg p-4"
                >
                  <span className="text-[15px] text-text/90">{k}</span>
                  <span className="font-mono text-lg font-bold text-primary">{v}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-text-muted">
              No per-student fees. No setup fees. No hidden costs.
            </p>
          </div>
          <div className="reveal flex flex-col justify-center rounded-3xl border border-accent/30 bg-accent/[0.06] p-7 shadow-card">
            <div className="text-xs font-bold uppercase tracking-wider text-accent">
              The ROI
            </div>
            <p className="mt-2 text-[15px] text-text/90">
              One family that stays past 3rd grade ={' '}
              <span className="font-semibold text-text">$4,800</span> in retained
              tuition over the next year. Annual GoCoding cost for 2 programs ={' '}
              <span className="font-semibold text-text">$960</span>.
            </p>
            <p className="mt-3 font-heading text-2xl font-extrabold text-accent">
              ROI: 5× from one family.
            </p>
            <p className="mt-3 text-[15px] text-text/90">
              Charge parents $100–$150/month for STEM classes. 10 students =
              $1,000–$1,500/month in new revenue.
            </p>
          </div>
        </div>
      </Section>

      {/* 12. Three Paths */}
      <Section tone="surface">
        <div className="reveal max-w-3xl">
          <SectionHeading eyebrow="Your decision" title="You have three paths." />
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
                      Get Your Free Demo Lesson <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Section>

      {/* 13. CTA form */}
      <section id="demo-form" className="scroll-mt-24 bg-bg py-16 sm:py-20 md:py-24">
        <Container>
          <div className="reveal mx-auto max-w-2xl">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold sm:text-4xl">
                Get your free demo lesson
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-text-muted">
                Tell us about your school. We&rsquo;ll send a complete scripted
                lesson your teacher can run this week.
              </p>
            </div>
            <div className="mt-8 rounded-3xl border border-border bg-surface p-7 shadow-card sm:p-9">
              <SpanishDemoForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
