import type { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/shared/Container';
import Section from '@/components/shared/Section';
import SectionHeading from '@/components/shared/SectionHeading';
import Button from '@/components/shared/Button';
import Badge from '@/components/shared/Badge';
import BestPriceGuarantee from '@/components/shared/BestPriceGuarantee';
import {
  ArrowRight,
  Check,
  Coffee,
  Minus,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react';

const DEMO_HREF = '/contact?demo=true';

export const metadata: Metadata = {
  title:
    'STEM Curriculum Pricing: $40/month — Licensed Lessons for Afterschool Centers',
  description:
    '$40/month for a full year of STEM lessons. 36+ lesson plans, homework, assessments, parent reports. 95% student retention. Best price guarantee. Try free.',
  alternates: { canonical: '/pricing' },
};

const curriculum = [
  '36+ structured lessons — full academic year, 1 class/week, 1.5 hours each',
  'Minute-by-minute lesson plans (not outlines — actual scripts)',
  'Student worksheets and homework for every lesson',
  'Project-based learning — kids build something real every module',
  'Progress tracking system with assessments',
  'Parent feedback report templates — ready to send',
  'Holiday and themed bonus lessons (Halloween, Christmas, New Year, etc.)',
  'Scripted trial lesson — your #1 enrollment tool',
  'Annual content updates — curriculum stays current',
  'Ongoing support',
];

const businessTools = [
  'Marketing launch kit — email templates, social posts, flyers',
  'Parent consultation script — how to sell STEM at your front desk',
  'Retention & upsell playbook — move kids level to level',
  'Pricing strategy guide — how to charge $150–$250/month',
  'Operations checklist — scheduling, teacher onboarding, tracking',
];

const scenarios = [
  {
    tag: 'The minimum',
    badge: '1 group of 5 kids',
    highlight: false,
    rows: [
      { label: 'You charge parents', value: '$150/mo per child' },
      { label: 'Monthly income — $150 × 5', value: '$750' },
      { label: 'GoCoding license', value: '−$40' },
    ],
    profit: '$710',
    stats: [
      { label: 'Annual profit', value: '$8,520' },
      { label: 'License / year', value: '$480' },
      { label: 'ROI', value: '1,675%' },
    ],
    takeaway:
      'Your license pays for itself with the first student on day one. Students 2–5 are pure profit.',
  },
  {
    tag: 'Typical center',
    badge: '2 groups of 8 kids',
    highlight: true,
    rows: [
      { label: 'You charge parents', value: '$175/mo per child' },
      { label: 'Monthly income — $175 × 16', value: '$2,800' },
      { label: 'GoCoding license', value: '−$40' },
    ],
    profit: '$2,760',
    stats: [
      { label: 'Annual profit', value: '$33,120' },
      { label: 'License / year', value: '$480' },
      { label: 'ROI', value: '6,800%' },
    ],
    takeaway: 'One program fills two time slots with zero additional rent.',
  },
  {
    tag: 'Growth mode',
    badge: '3 programs, 30 kids',
    highlight: false,
    rows: [
      { label: 'Average charge', value: '$175/mo per child' },
      { label: 'Monthly income — $175 × 30', value: '$5,250' },
      { label: 'GoCoding licenses — 3 × $40', value: '−$120' },
    ],
    profit: '$5,130',
    stats: [
      { label: 'Annual profit', value: '$61,560' },
      { label: 'Licenses / year', value: '$1,440' },
      { label: 'ROI', value: '4,175%' },
    ],
    takeaway:
      'Three programs. Same rooms. Same admin. $5K/month in new revenue.',
  },
];

const compareHeaders = [
  'GoCoding',
  'Brite',
  'Tynker Schools',
  'Code Ninjas',
  'Build it yourself',
];

const compareRows: { label: string; cells: string[] }[] = [
  {
    label: 'Annual cost (20 students)',
    cells: ['$480', '$4,798', '$2,500+', '$120K–$350K', '$5K–$15K + time'],
  },
  {
    label: 'Pricing model',
    cells: [
      '$40 flat/mo',
      '$19.99/student/mo',
      '$25/student/yr (100 min)',
      'Franchise fee + 8% royalty',
      'Your time',
    ],
  },
  {
    label: 'Lesson plans included',
    cells: ['Full scripts', 'Self-guided', 'Guided', 'Proprietary', 'You write them'],
  },
  {
    label: 'Homework & assessments',
    cells: ['yes', 'Partial', 'no', 'yes', 'You write them'],
  },
  {
    label: 'Parent report templates',
    cells: ['yes', 'Progress reports', 'no', 'yes', 'You write them'],
  },
  {
    label: 'Marketing materials',
    cells: ['yes', 'no', 'no', 'Franchise only', 'You create them'],
  },
  {
    label: 'Scripted trial lesson',
    cells: ['yes', 'no', 'no', 'Franchise only', 'You design it'],
  },
  {
    label: 'Teacher needs CS degree',
    cells: ['No', 'No', 'No', 'No', 'Probably'],
  },
  {
    label: 'Hardware required',
    cells: ['Laptop only*', 'No', 'No', 'Proprietary', 'Varies'],
  },
  {
    label: 'Contract / lock-in',
    cells: ['None', 'None', 'Annual', 'Multi-year', 'N/A'],
  },
  {
    label: 'Cancel anytime',
    cells: ['yes', 'yes', 'no', 'no', 'N/A'],
  },
  {
    label: 'Hours of content per year',
    cells: ['54+', 'Varies', 'Varies', 'Varies', 'However many you write'],
  },
  {
    label: 'Price per lesson plan',
    cells: ['$1.11', '~$11/student', '~$5/student', 'N/A', 'Your hourly rate'],
  },
];

const timeline = [
  {
    when: 'Today',
    text: 'We send you a free demo lesson.',
    cost: 'You pay: $0',
    good: true,
  },
  {
    when: 'This week',
    text: 'Your teacher runs it. 10-minute prep.',
    cost: 'You pay: $0',
    good: true,
  },
  {
    when: 'If kids love it',
    text: 'Subscribe for $40/month. The first student covers it on day one.',
    cost: 'You are already profitable.',
    good: true,
  },
  {
    when: 'If it does not work',
    text: 'Keep the demo lesson. We part as friends.',
    cost: 'You paid: $0. You lost: 10 minutes.',
    good: true,
  },
  {
    when: 'Anytime later',
    text: 'Cancel with one click. No penalty. No retention team calling you. No contract to break.',
    cost: 'Cost of canceling: $0.',
    good: true,
  },
];

const forYou = [
  'You run an independent tutoring or afterschool center',
  'Parents ask about coding/STEM and you do not have an answer',
  'You want to add revenue without adding rent',
  'You do not have a CS background (and neither does your teacher)',
  'You want something proven, not experimental',
  'You value your time — 10-minute prep, not 10-hour prep',
];

const notForYou = [
  'You want to build your own curriculum from scratch (respect — but that takes 100+ hours)',
  'You are a franchise that cannot add outside programs',
  'You want free and are okay with thin content (try Code.org — good but limited)',
];

const faqs = [
  {
    q: 'Is $40/month really the full price?',
    a: 'Yes. $40/month per program. No setup fee. No royalty. No hidden costs. No "premium tier" behind a paywall. Everything listed on this page is included.',
  },
  {
    q: 'How does this compare to hiring someone to write curriculum?',
    a: 'A freelance curriculum developer charges $50–$150/hour. Writing 36 lesson plans takes 100+ hours minimum — that is $5,000–$15,000 for ONE program. GoCoding gives you 15+ programs at $40/month each. All tested. All updated annually.',
  },
  {
    q: 'What if I have 50 students — is it still $40?',
    a: 'Yes. $40 flat per program, regardless of how many students use it. Whether you have 1 student or 100 — same price. Compare that to Brite at $19.99/student/month: 50 students = $999/month vs our $40.',
  },
  {
    q: 'Why is it so cheap? What is the catch?',
    a: 'No catch. We keep costs low because the curriculum is already created and proven across 500+ students; we have no franchise infrastructure, territory fees, or sales teams to support; and we believe independent centers should not need $350K to compete with Code Ninjas. Our margin comes from volume — thousands of centers, not high per-center fees.',
  },
  {
    q: 'What about robotics kits?',
    a: 'Robotics programs require third-party kits ($70–$350 depending on the course). You buy them from any supplier you choose — we are not locked to one brand. Coding and Creativity programs need only a laptop or tablet.',
  },
  {
    q: 'Can I switch programs?',
    a: 'Yes. Cancel one, start another. No switching fee. Takes effect next billing cycle.',
  },
  {
    q: 'What if my teacher quits mid-year?',
    a: 'The curriculum stays with your center. A new teacher opens the lesson plan, preps in 10 minutes, and picks up exactly where the previous one left off. That is the whole point — the system does not depend on one person.',
  },
  {
    q: 'Do you have a yearly plan with a discount?',
    a: 'Currently month-to-month only. We believe that if you need a contract to keep customers, your product is not good enough. 95% monthly retention tells us ours is.',
  },
  {
    q: 'What is the "best price guarantee" exactly?',
    a: 'If you find a licensed STEM curriculum for afterschool centers with comparable scope (36+ scripted lessons, homework, assessments, parent reports, trial lesson, marketing materials, full academic year) at a lower price than $40/month — send us the link. We will match it and give you an additional discount.',
  },
];

const scenarioNote =
  'These are not projections. At 95% monthly retention and a 2.5-year average student lifetime, this is what centers in our network actually see. And remember — your teacher preps in 10 minutes. This is not a second job. It is a revenue stream that runs on autopilot.';

const compareNote =
  'The closest direct competitor (Brite) charges $19.99 per student per month. With 20 students, that is $4,798/year vs GoCoding’s $480/year — 10× more expensive for a comparable product, without marketing materials, without a scripted trial lesson, and without parent report templates. Franchise alternatives start at $120,000+ and take 8% of your revenue forever. We are not the cheapest because we cut corners — we are the cheapest because we believe every independent center deserves proven STEM curriculum, not just the ones who can write a $350,000 check.';

function CompareCell({ value, go }: { value: string; go?: boolean }) {
  if (value === 'yes') {
    return <Check className="mx-auto h-5 w-5 text-accent" />;
  }
  if (value === 'no') {
    return <Minus className="mx-auto h-5 w-5 text-text-muted/40" />;
  }
  return (
    <span className={go ? 'font-semibold text-text' : 'text-text-muted'}>
      {value}
    </span>
  );
}

export default function PricingPage() {
  return (
    <>
      {/* Section 1 — Hero */}
      <section className="relative overflow-hidden border-b border-border bg-bg">
        <div className="absolute inset-0 hero-grid opacity-70" aria-hidden />
        <Container className="relative pt-16 pb-16 text-center sm:pt-20 md:pt-24">
          <div className="reveal mx-auto max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              One price. Everything included.
            </span>
            <div className="mt-6 font-heading text-[88px] font-extrabold leading-none text-primary sm:text-[104px]">
              $40
              <span className="align-top text-2xl font-bold text-text-muted sm:text-3xl">
                /month
              </span>
            </div>
            <p className="mx-auto mt-5 max-w-xl text-lg text-text-muted sm:text-xl">
              One full academic year of STEM lessons. Every week. Every plan.
              Every material. No setup fee. No royalty. No contract.
            </p>
            <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold shadow-card">
              <Coffee className="h-4 w-4 text-warning" />
              That is $1.11 per lesson plan. Less than a coffee.
            </p>
            <div className="mt-7 flex justify-center">
              <Button href={DEMO_HREF} size="lg">
                Get a Free Demo Lesson <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Section 2 — What $40 buys */}
      <Section tone="surface">
        <div className="reveal max-w-3xl">
          <SectionHeading
            eyebrow="What you get"
            title="Here is what is inside every $40/month"
          />
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="reveal rounded-3xl border border-primary/30 bg-primary/[0.04] p-7 shadow-card">
            <h3 className="text-xl font-bold">The curriculum</h3>
            <p className="mt-1 text-sm text-text-muted">
              What your teacher uses every day
            </p>
            <ul className="mt-5 space-y-3">
              {curriculum.map((item) => (
                <li key={item} className="flex gap-3 text-[15px] text-text/90">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal rounded-3xl border border-accent/30 bg-accent/[0.06] p-7 shadow-card">
            <h3 className="text-xl font-bold">The business tools</h3>
            <p className="mt-1 text-sm text-text-muted">
              How you fill groups and keep them
            </p>
            <ul className="mt-5 space-y-3">
              {businessTools.map((item) => (
                <li key={item} className="flex gap-3 text-[15px] text-text/90">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 rounded-xl bg-white p-4 text-sm text-text-muted">
              Total if purchased separately:{' '}
              <span className="font-semibold text-text">$1,500+</span> in
              business materials alone. You get it all for $40/month.
            </p>
          </div>
        </div>

        <div className="reveal mt-8 rounded-2xl border border-border bg-white p-6 shadow-card sm:p-8">
          <h3 className="text-lg font-bold">
            Let us count what $40 actually gets you
          </h3>
          <p className="mt-3 text-[15px] text-text-muted">
            36+ lesson plans × 1.5 hours = 54+ hours of structured teaching
            content, plus 36 homework assignments, 36 assessment checkpoints,
            parent reports for every lesson, a scripted trial lesson, marketing
            templates, and an operations playbook —{' '}
            <span className="font-semibold text-text">
              100+ ready-to-use documents.
            </span>
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {[
              { v: '$0.40', l: 'per document' },
              { v: '$1.11', l: 'per lesson plan' },
              { v: '$0.74', l: 'per hour of content' },
            ].map((x) => (
              <div
                key={x.l}
                className="rounded-xl bg-bg p-5 text-center"
              >
                <div className="font-heading text-3xl font-extrabold text-primary">
                  {x.v}
                </div>
                <div className="mt-1 text-sm text-text-muted">{x.l}</div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-text-muted">
            You pay more for a single worksheet on Teachers Pay Teachers.
          </p>
        </div>
      </Section>

      {/* Section 3 — Profit scenarios */}
      <Section>
        <div className="reveal max-w-3xl">
          <SectionHeading
            eyebrow="The ROI"
            title="How much will you actually make?"
          />
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {scenarios.map((s, i) => (
            <div
              key={s.tag}
              className={`reveal flex flex-col rounded-2xl border bg-surface p-6 shadow-card ${
                s.highlight ? 'border-primary ring-1 ring-primary/30' : 'border-border'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-sm font-bold uppercase tracking-wider text-text-muted">
                  {s.tag}
                </span>
                {s.highlight && <Badge tone="primary">Most common</Badge>}
              </div>
              <div className="mt-1 text-[15px] font-semibold">{s.badge}</div>

              <div className="mt-5 space-y-2 border-t border-border pt-5 text-[15px]">
                {s.rows.map((r) => (
                  <div
                    key={r.label}
                    className="flex items-center justify-between gap-3"
                  >
                    <span className="text-text-muted">{r.label}</span>
                    <span className="font-mono font-semibold">{r.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-xl bg-accent/[0.08] px-4 py-3 text-center">
                <div className="text-xs font-bold uppercase tracking-wider text-text-muted">
                  Monthly profit
                </div>
                <div className="font-mono text-3xl font-extrabold text-accent">
                  {s.profit}
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                {s.stats.map((st) => (
                  <div key={st.label} className="rounded-lg bg-bg p-2">
                    <div className="font-mono text-sm font-bold text-text">
                      {st.value}
                    </div>
                    <div className="mt-0.5 text-[11px] text-text-muted">
                      {st.label}
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-4 text-sm text-text-muted">{s.takeaway}</p>
            </div>
          ))}
        </div>
        <div className="reveal mt-8 rounded-2xl bg-text px-6 py-5 text-white sm:px-8">
          <p className="text-lg leading-relaxed">{scenarioNote}</p>
        </div>
      </Section>

      {/* Section 4 — Competitor comparison */}
      <Section tone="muted">
        <div className="reveal max-w-3xl">
          <SectionHeading
            eyebrow="The comparison"
            title="How $40/month compares to every alternative"
            description="We researched every STEM curriculum provider that sells to independent afterschool centers in the US. Here is what we found."
          />
        </div>

        <div className="reveal mt-10 overflow-x-auto rounded-2xl border border-border bg-white shadow-card">
          <table className="w-full min-w-[820px] border-collapse text-left text-sm">
            <thead>
              <tr>
                <th className="sticky left-0 z-10 bg-white px-4 py-3" />
                {compareHeaders.map((h, i) => (
                  <th
                    key={h}
                    className={`px-4 py-3 text-center font-bold ${
                      i === 0
                        ? 'bg-primary text-white'
                        : 'text-text-muted'
                    }`}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {compareRows.map((row, ri) => (
                <tr
                  key={row.label}
                  className={ri % 2 ? 'bg-[#FAFAFA]' : 'bg-white'}
                >
                  <th
                    scope="row"
                    className={`sticky left-0 z-10 px-4 py-3 text-left font-semibold ${
                      ri % 2 ? 'bg-[#FAFAFA]' : 'bg-white'
                    }`}
                  >
                    {row.label}
                  </th>
                  {row.cells.map((cell, ci) => (
                    <td
                      key={ci}
                      className={`px-4 py-3 text-center ${
                        ci === 0 ? 'bg-primary/[0.06]' : ''
                      } ${ri === 0 ? 'text-base font-bold' : ''}`}
                    >
                      <CompareCell value={cell} go={ci === 0} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="reveal mt-3 text-xs text-text-muted">
          *Robotics programs require third-party kits ($70–$350) purchased
          separately.
        </p>

        <div className="reveal mt-8 rounded-2xl border border-border bg-white p-6 shadow-card sm:p-8">
          <p className="text-[15px] leading-relaxed text-text/90">
            {compareNote}
          </p>
        </div>
        <p className="reveal mt-3 text-xs text-text-muted">
          Pricing data sourced from gobrite.io/plans (May 2026), Common Sense
          Education (Tynker school pricing), Code Ninjas FDD via
          franchisepayback.com (2025), and industry benchmarks. Prices may
          vary. We encourage you to verify.
        </p>
      </Section>

      {/* Section 5 — Best Price Guarantee */}
      <Section>
        <BestPriceGuarantee />
      </Section>

      {/* Section 6 — Objection destroyer */}
      <Section tone="surface">
        <div className="reveal max-w-3xl">
          <SectionHeading
            eyebrow="Zero risk"
            title="You risk nothing. Literally."
          />
        </div>
        <div className="mt-10 grid gap-3">
          {timeline.map((step, i) => (
            <div
              key={step.when}
              className="reveal flex gap-4 rounded-2xl border border-border bg-bg p-5"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-accent text-white">
                <Check className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-text-muted">
                  {step.when}
                </div>
                <div className="mt-0.5 text-[15px] font-semibold">
                  {step.text}
                </div>
                <div className="mt-1 text-sm font-semibold text-accent">
                  {step.cost}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="reveal mt-8 rounded-2xl bg-text px-6 py-5 text-white sm:px-8">
          <p className="text-lg leading-relaxed">
            The only cost of trying is 10 minutes of your teacher&rsquo;s time.
            The cost of NOT trying is every family that asks about coding and
            hears &ldquo;no.&rdquo;
          </p>
        </div>
      </Section>

      {/* Section 7 — Cost of inaction */}
      <Section>
        <div className="reveal max-w-3xl">
          <SectionHeading
            eyebrow="The real math"
            title={'What "I will think about it" actually costs you'}
          />
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <div className="reveal rounded-2xl border border-danger/30 bg-danger/[0.05] p-6 shadow-card">
            <h3 className="text-lg font-bold text-danger">
              Every month without STEM
            </h3>
            <ul className="mt-4 space-y-2 text-[15px] text-text/90">
              <li>1–2 families ask about coding and hear &ldquo;no&rdquo;</li>
              <li>Each family = $3,600–$9,000 in lifetime value</li>
              <li className="font-semibold">
                Monthly cost of inaction: $3,600–$18,000 in lost families
              </li>
            </ul>
          </div>
          <div className="reveal rounded-2xl border border-accent/30 bg-accent/[0.06] p-6 shadow-card">
            <h3 className="text-lg font-bold text-accent">
              Every month with GoCoding
            </h3>
            <ul className="mt-4 space-y-2 text-[15px] text-text/90">
              <li>You say &ldquo;yes&rdquo; to every parent who asks</li>
              <li>95% of students stay month after month</li>
              <li className="font-semibold">
                Monthly cost: $40. Potential: $750–$5,000+ in new revenue.
              </li>
            </ul>
          </div>
        </div>

        <div className="reveal mt-6 space-y-3">
          <div>
            <div className="mb-1 text-sm font-semibold text-danger">
              Cost of doing nothing: $3,600–$18,000/month in lost families
            </div>
            <div className="h-9 w-full rounded-lg bg-danger" />
          </div>
          <div>
            <div className="mb-1 text-sm font-semibold text-accent">
              Cost of GoCoding: $40/month
            </div>
            <div className="h-9 w-[3%] min-w-[44px] rounded-lg bg-accent" />
          </div>
        </div>

        <div className="reveal mt-8 rounded-2xl bg-text px-6 py-5 text-white sm:px-8">
          <p className="text-lg leading-relaxed">
            $40/month is not an expense. It is insurance against losing every
            family that walks through your door asking about STEM.
          </p>
        </div>
      </Section>

      {/* Section 8 — Who this is for */}
      <Section tone="muted">
        <div className="reveal max-w-3xl">
          <SectionHeading eyebrow="Honest fit" title="Who this is for" />
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <div className="reveal rounded-2xl border border-accent/30 bg-white p-6 shadow-card">
            <h3 className="text-lg font-bold">This is for you if…</h3>
            <ul className="mt-4 space-y-3">
              {forYou.map((item) => (
                <li key={item} className="flex gap-3 text-[15px] text-text/90">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal rounded-2xl border border-border bg-white p-6 shadow-card">
            <h3 className="text-lg font-bold">This is NOT for you if…</h3>
            <ul className="mt-4 space-y-3">
              {notForYou.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-[15px] text-text-muted"
                >
                  <X className="mt-1 h-4 w-4 shrink-0 text-danger" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Section 9 — FAQ */}
      <Section>
        <div className="reveal max-w-3xl">
          <SectionHeading eyebrow="FAQ" title="Straight answers" />
        </div>
        <div className="reveal mt-10 grid gap-4 md:grid-cols-2">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-2xl border border-border bg-surface p-5 shadow-card open:shadow-card-hover"
            >
              <summary className="cursor-pointer list-none">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-base font-semibold">{f.q}</span>
                  <span className="text-primary transition-transform group-open:rotate-45">
                    +
                  </span>
                </div>
              </summary>
              <p className="mt-3 text-[15px] text-text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>

      {/* Section 10 — Social proof bar */}
      <section className="border-y border-border bg-surface py-6">
        <Container>
          <div className="flex flex-col items-center gap-1 text-center text-sm text-text-muted">
            <p className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-primary" />
              Built on CODDY International: 150+ locations · 20+ countries ·
              8,600+ students
            </p>
            <p>
              Active GoCoding network: 500+ students · US &amp; UAE · 95%
              monthly retention
            </p>
          </div>
        </Container>
      </section>

      {/* Section 11 — Final CTA */}
      <section className="bg-bg py-16 sm:py-20 md:py-24">
        <Container>
          <div className="reveal mx-auto max-w-2xl rounded-3xl bg-primary p-10 text-center text-white shadow-card sm:p-14">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              $40/month. 54+ hours of content. $1.11 per lesson.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/85">
              Try one lesson free. Your teacher runs it this week. If it works,
              you are profitable from student #1. If it does not, you lost 10
              minutes.
            </p>
            <div className="mt-7 flex flex-col items-center gap-3">
              <Button href={DEMO_HREF} variant="accent" size="lg">
                Get a Free Demo Lesson <ArrowRight className="h-4 w-4" />
              </Button>
              <span className="text-sm text-white/70">
                No credit card. No call. No commitment. Just one lesson to see
                if this is right for your center.
              </span>
            </div>
            <p className="mt-8 text-sm text-white/70">
              Prefer to talk?{' '}
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
