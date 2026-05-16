import type { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/shared/Container';
import Section from '@/components/shared/Section';
import SectionHeading from '@/components/shared/SectionHeading';
import Button from '@/components/shared/Button';
import { ArrowRight, Coins, Sparkles, TrendingUp } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const DEMO_HREF = '/contact?demo=true';

export const metadata: Metadata = {
  title: {
    absolute:
      'About GoCoding — Affordable STEM Curriculum for Independent Afterschool Centers',
  },
  description:
    "Built by afterschool center operators, not consultants. 15+ STEM programs, $40/month, 95% student retention. Curriculum + business model + community. There's no scenario where you don't succeed.",
  alternates: { canonical: '/about' },
};

type Value = {
  name: string;
  icon: LucideIcon;
  tone: 'primary' | 'accent' | 'warning';
  paragraphs: string[];
};

const values: Value[] = [
  {
    name: 'Affordable',
    icon: Coins,
    tone: 'primary',
    paragraphs: [
      "Affordable doesn't mean cheap. It means fair.",
      'A single mom running a tutoring center in Queens shouldn’t need $350,000 to offer coding. A retired teacher starting an afterschool program in a church basement shouldn’t need venture capital to compete with Code Ninjas.',
      "$40/month is a number where the answer is always 'yes.' Where the risk is zero. Where one student — just one — covers the entire cost on day one.",
      "We didn't price this at $40 because we couldn't charge more. We priced it at $40 because we want every independent center in America to say yes without thinking twice.",
    ],
  },
  {
    name: 'Simple',
    icon: Sparkles,
    tone: 'accent',
    paragraphs: [
      'If your teacher needs a CS degree to use our curriculum — we failed. If prep takes longer than 10 minutes — we failed. If a center owner needs a 3-hour onboarding call to get started — we failed.',
      'Every lesson plan is scripted minute by minute. Open it. Read it. Teach it. Done.',
      "Every program includes a scripted trial lesson — your teacher runs it, kids build a project in 45 minutes, parents see results, they sign up. That's your entire marketing plan.",
      "We obsess over simplicity because we know who our customers are: busy people running real businesses with real constraints. You don't have time for complicated. Neither do we.",
    ],
  },
  {
    name: 'Results',
    icon: TrendingUp,
    tone: 'warning',
    paragraphs: [
      "Pretty lesson plans mean nothing if kids don't stay.",
      "95% of our students stay month after month. The average student lifetime is 2.5 years. These aren't goals — they're measurements from 500+ students across the US and UAE right now.",
      'Results mean your center makes money. Results mean parents see their kids grow. Results mean your teacher feels like a professional, not an improviser.',
      "We don't sell content. We sell outcomes.",
    ],
  },
];

const pillars = [
  {
    tone: 'primary' as const,
    title: 'The curriculum',
    body: ['15+ battle-tested programs across Coding, Robotics, and Digital Art. Ages 4 to 12+. Each covers a full academic year — 1 class per week, 1.5 hours. Lesson plans, homework, assessments, parent reports, scripted trial lessons. Everything your teacher needs to walk in and teach with confidence.'],
    points: [],
  },
  {
    tone: 'accent' as const,
    title: 'The business model',
    body: [
      "We don't just hand you a PDF and say 'good luck.' You get the exact playbook we use in our own centers:",
    ],
    points: [
      'How to price STEM classes ($150–$250/month is the sweet spot)',
      'How to fill your first group with zero ad spend (the trial lesson method)',
      'How to retain families for 2.5+ years (progress tracking + level system)',
      'How to upsell to the next program (kids naturally want to level up)',
      'How to onboard a new teacher in one day (if your current one leaves)',
    ],
    footer:
      'This isn’t theory. This is the exact model running in our network right now.',
  },
  {
    tone: 'warning' as const,
    title: 'The community',
    body: [
      'When you subscribe, you join a growing network of independent center owners who are building STEM programs just like you:',
    ],
    points: [
      'Access to a community of like-minded afterschool entrepreneurs',
      "Share what's working, ask questions, learn from each other",
      'See how other centers launch, price, and grow their STEM offerings',
      "You're not figuring this out alone — you have people who get it",
    ],
    footer:
      'The franchises have their systems. Now you have yours. Except ours costs $40/month and you keep 100% of your revenue.',
  },
];

const whatIfs = [
  {
    q: 'What if nobody signs up?',
    a: "You test with a free trial lesson on your existing families. If they don't bite — you cancel. Cost: $0.",
  },
  {
    q: "What if my teacher can't handle it?",
    a: 'Lessons are scripted minute by minute. 10-minute prep. If a first-year college student can teach it, your teacher can too.',
  },
  {
    q: "What if kids don't like it?",
    a: "95% monthly retention across 500+ students. Kids don't just like it — they become obsessed.",
  },
  {
    q: "What if I can't afford it?",
    a: "$40/month. One student covers it. If you can't find one family interested in coding — in 2026 — you might be in the wrong business.",
  },
  {
    q: 'What if I cancel?',
    a: "Then you cancel. No penalty. No phone call. No guilt trip. We'll still be here if you come back.",
  },
];

const story = [
  'GoCoding was born inside CODDY International — one of the largest independent coding school networks in the world.',
  '150+ locations across 20+ countries. 8,600+ students. Real classrooms. Real teachers. Real kids building real things.',
  "After years of running our own centers, we realized something: the curriculum wasn't the hard part. The hard part was everything else — finding teachers, convincing parents, filling groups, retaining students, surviving summer.",
  'So we packaged everything — the curriculum, the business model, the marketing playbook, the operations system — into one license that any independent center can use.',
  "We didn't build this in a lab. We built this in a classroom. And we still run our own centers every day.",
];

const stats = [
  { value: '500+', label: 'students now' },
  { value: '150+', label: 'partner locations' },
  { value: '20+', label: 'countries' },
  { value: '8,600+', label: 'lifetime students' },
];

const pillarTone = {
  primary: 'border-primary',
  accent: 'border-accent',
  warning: 'border-warning',
};
const valueIconTone = {
  primary: 'bg-primary text-white',
  accent: 'bg-accent text-white',
  warning: 'bg-warning text-white',
};

export default function AboutPage() {
  return (
    <>
      {/* Section 1 — Hero */}
      <section className="relative overflow-hidden border-b border-border bg-bg">
        <div className="absolute inset-0 hero-grid opacity-70" aria-hidden />
        <Container className="relative pt-16 pb-16 sm:pt-20 md:pt-24">
          <div className="reveal max-w-3xl">
            <h1 className="text-4xl font-extrabold sm:text-5xl md:text-[52px] md:leading-[1.1]">
              We believe every independent center deserves to compete with any
              franchise. For $40/month.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-text-muted sm:text-xl">
              Not <s className="text-text-muted/70">$350,000</s>. Not{' '}
              <s className="text-text-muted/70">$120,000</s>. Not even{' '}
              <s className="text-text-muted/70">$1,000</s>.{' '}
              <span className="font-extrabold text-accent">$40.</span>{' '}
              {"That's the hill we're willing to die on."}
            </p>
          </div>
        </Container>
      </section>

      {/* Section 2 — Three values */}
      <Section tone="surface">
        <div className="reveal max-w-3xl">
          <SectionHeading
            eyebrow="Who we are"
            title="Three principles. Everything we build follows them."
          />
        </div>
        <div className="mt-10 space-y-6">
          {values.map((v) => (
            <div
              key={v.name}
              className="reveal grid gap-6 rounded-3xl border border-border bg-bg p-7 shadow-card sm:p-9 md:grid-cols-[auto_1fr]"
            >
              <div>
                <div
                  className={`grid h-14 w-14 place-items-center rounded-2xl ${valueIconTone[v.tone]}`}
                >
                  <v.icon className="h-7 w-7" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-extrabold sm:text-3xl">{v.name}</h3>
                <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-text sm:text-base">
                  {v.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Section 3 — More than curriculum */}
      <Section>
        <div className="reveal max-w-3xl">
          <SectionHeading
            eyebrow="The full picture"
            title="You're not buying lesson plans. You're joining a system built to win."
            description="Curriculum is the foundation. But we learned the hard way that a great program without a business model is just a hobby. So we built both."
          />
        </div>
        <div className="mt-10 space-y-5">
          {pillars.map((p) => (
            <div
              key={p.title}
              className={`reveal rounded-r-2xl border-l-4 bg-surface p-6 shadow-card sm:p-7 ${pillarTone[p.tone]}`}
            >
              <h3 className="text-xl font-bold">{p.title}</h3>
              {p.body.map((b, i) => (
                <p key={i} className="mt-2 text-[15px] text-text/90">
                  {b}
                </p>
              ))}
              {p.points.length > 0 && (
                <ul className="mt-3 space-y-2">
                  {p.points.map((pt) => (
                    <li
                      key={pt}
                      className="flex gap-2 text-[15px] text-text/90"
                    >
                      <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-text-muted" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              )}
              {p.footer && (
                <p className="mt-3 text-[15px] font-semibold text-text">
                  {p.footer}
                </p>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* Section 4 — Impossible to fail */}
      <Section tone="muted">
        <div className="reveal max-w-3xl">
          <SectionHeading
            eyebrow="No-lose promise"
            title="There's no scenario where this doesn't work."
            description="We've thought about it. A lot. And we can't find one."
          />
        </div>
        <div className="mt-10 space-y-4">
          {whatIfs.map((w, i) => (
            <div
              key={w.q}
              className="reveal rounded-2xl border border-border bg-white p-6 shadow-card"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="text-[15px] font-semibold text-text-muted">
                “{w.q}”
              </div>
              <div className="mt-2 text-[15px] font-semibold text-text sm:text-base">
                {w.a}
              </div>
            </div>
          ))}
        </div>
        <div className="reveal mt-8 rounded-2xl bg-text px-6 py-5 text-white sm:px-8">
          <p className="text-lg font-semibold leading-relaxed sm:text-xl">
            The only way to lose is to not try. And trying costs you 10 minutes.
          </p>
        </div>
      </Section>

      {/* Section 5 — The story */}
      <Section tone="surface">
        <div className="reveal max-w-3xl">
          <SectionHeading
            eyebrow="Our story"
            title="Built by people who run afterschool centers. Not by consultants."
          />
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-text/85">
            {story.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </Section>

      {/* Section 6 — Stats */}
      <Section>
        <div className="reveal grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-border bg-surface p-6 text-center shadow-card"
            >
              <div className="font-heading text-4xl font-extrabold text-primary sm:text-5xl">
                {s.value}
              </div>
              <div className="mt-2 text-sm text-text-muted">{s.label}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Section 7 — Mission */}
      <section className="bg-primary py-20 sm:py-24">
        <Container>
          <p className="reveal mx-auto max-w-3xl text-center font-serif text-2xl font-medium leading-snug text-white sm:text-3xl md:text-4xl">
            Make quality STEM education accessible to every afterschool center —
            so independent owners compete on product, not budget.
          </p>
        </Container>
      </section>

      {/* Section 8 — CTA */}
      <section className="bg-bg py-16 sm:py-20 md:py-24">
        <Container>
          <div className="reveal mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              See it for yourself.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-text-muted">
              We could keep talking. Or you could try one lesson this week and
              let your students decide. Free. No commitment. 10 minutes of your
              teacher’s time.
            </p>
            <div className="mt-7 flex justify-center">
              <Button href={DEMO_HREF} size="lg">
                Get a Free Demo Lesson <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <p className="mt-6 text-sm text-text-muted">
              Want to talk first?{' '}
              <Link
                href="/contact"
                className="font-semibold text-primary hover:underline"
              >
                Book a 15-minute Zoom
              </Link>
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
