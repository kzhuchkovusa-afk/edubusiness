import type { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/shared/Container';
import Section from '@/components/shared/Section';
import SectionHeading from '@/components/shared/SectionHeading';
import Button from '@/components/shared/Button';
import Badge from '@/components/shared/Badge';
import EnrichmentCalculator from '@/components/landing/EnrichmentCalculator';
import ProgramPathway from '@/components/landing/ProgramPathway';
import WhatsIncluded from '@/components/landing/WhatsIncluded';
import LandingFAQ from '@/components/landing/LandingFAQ';
import Guarantees from '@/components/landing/Guarantees';
import ThreePaths from '@/components/landing/ThreePaths';
import {
  ArrowRight,
  CalendarDays,
  Check,
  Minus,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

const DEMO_HREF = '/contact?demo=true';

export const metadata: Metadata = {
  title: 'STEM Enrichment for Chinese Saturday Schools',
  description:
    'A coding, robotics & digital art enrichment block for Chinese weekend schools — Huaxia & CSAUS networks. $120/month for 3 programs. Keep families who would otherwise leave for coding.',
  alternates: { canonical: '/for-chinese-schools' },
};

const heroHeadline =
  "5 families left your Saturday school this year. They didn't leave Chinese — they left for coding.";

const problemParas = [
  'It is rarely about the Chinese program. A family finds a Code Ninjas or a robotics class — and it meets on Saturday morning, the same slot as your school.',
  'They cannot do both. So they choose. And STEM, in a parent’s mind, looks like the future.',
  'Five families at roughly $900/year each is $4,500 in lost tuition — every year. If your school had a coding block, they would have stayed for both.',
];

const productPoints = [
  'Three programs — Coding, Robotics, and Digital Art — for $120/month total',
  'Runs as a 1.5-hour enrichment block right after Chinese class — same building, same Saturday',
  'Scripted, minute-by-minute lesson plans — a volunteer parent (often an engineer already) just teaches',
  'Full academic year: lesson plans, homework, assessments, parent reports included',
];

const proof = [
  { stat: '500+', label: 'students in the GoCoding network across the US & UAE' },
  { stat: '95%', label: 'stay month after month — retention you can show your board' },
  { stat: '150+', label: 'partner locations; built on CODDY International in 20+ countries' },
];

const compareHeaders = ['GoCoding', 'Brite', 'Code.org (free)', 'Code Ninjas'];
const compareRows: { label: string; cells: string[] }[] = [
  { label: 'Price', cells: ['$40/mo per program', '$20/student/mo', 'Free', '$120K–350K franchise'] },
  { label: 'Cost at 50 students', cells: ['$40/mo', '$1,000/mo', '$0', '$300+/mo + royalties'] },
  { label: 'Scripted lesson plans', cells: ['Minute-by-minute', 'Template-based', 'no', 'Franchise scripts'] },
  { label: 'Parent reports', cells: ['yes', 'yes', 'no', 'yes'] },
  { label: 'Marketing materials', cells: ['yes', 'no', 'no', 'Franchise-branded'] },
  { label: 'Free trial lesson', cells: ['yes', 'no', 'no', 'no'] },
  { label: 'Teacher prep time', cells: ['10 minutes', 'Varies', 'N/A', 'Training required'] },
  { label: 'Contract', cells: ['None — cancel anytime', 'Annual', '—', 'Multi-year franchise'] },
];

const faqs = [
  {
    q: 'Can a volunteer parent teach this?',
    a: 'Yes. Every lesson is scripted minute by minute — what to say, what to show, when to let kids work. A parent who has never taught before can deliver a great class with 10 minutes of prep.',
  },
  {
    q: 'How does this fit into our Saturday schedule?',
    a: 'Each lesson is 1.5 hours. Most schools run it as an enrichment elective after Chinese class — same building, same Saturday. No extra drive for parents.',
  },
  {
    q: 'What equipment do we need?',
    a: 'Coding programs need laptops or tablets — most schools already have these. Robotics kits are separate ($70–$350) and optional; we recommend starting with coding.',
  },
  {
    q: 'Can we see a sample before committing?',
    a: 'That is exactly what the free demo lesson is — a complete, scripted class you run with real students. If it works, great. If not, you lost nothing.',
  },
  {
    q: 'Are the parent reports in English?',
    a: 'Yes. Every assessment generates a printable report in English showing what the child learned. Parents love it — some share it with grandparents.',
  },
];

function CompareCell({ value, go }: { value: string; go?: boolean }) {
  if (value === 'yes') return <Check className="mx-auto h-5 w-5 text-accent" />;
  if (value === 'no') return <Minus className="mx-auto h-5 w-5 text-text-muted/40" />;
  return (
    <span className={go ? 'font-semibold text-text' : 'text-text-muted'}>
      {value}
    </span>
  );
}

export default function ChineseSchoolsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-bg">
        <div className="absolute inset-0 hero-grid opacity-70" aria-hidden />
        <Container className="relative pt-16 pb-16 sm:pt-20 md:pt-24">
          <div className="reveal max-w-3xl">
            <Badge tone="danger">
              <Sparkles className="h-3.5 w-3.5" />
              For Chinese weekend schools
            </Badge>
            <h1 className="mt-5 text-4xl font-extrabold sm:text-5xl md:text-[52px] md:leading-[1.1]">
              {heroHeadline}
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-text-muted sm:text-xl">
              Add a coding, robotics &amp; digital art enrichment block that
              slots into your Saturday schedule — for $120/month. Built for
              Huaxia- and CSAUS-affiliated schools.
            </p>
            <div className="mt-7">
              <Button href={DEMO_HREF} size="lg">
                Get a Free Demo Lesson <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Problem */}
      <Section tone="surface">
        <div className="reveal max-w-3xl">
          <SectionHeading
            eyebrow="What's really happening"
            title="They didn't choose coding over Chinese. They chose the school that offered both."
          />
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-text/85">
            {problemParas.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </Section>

      {/* Calculator */}
      <Section>
        <div className="reveal max-w-3xl">
          <SectionHeading
            eyebrow="Run your own numbers"
            title="What an enrichment block is worth to your school"
            description="You enroll the students. You set the fee. The license is a fixed $40/month per program. Here is the math for your school."
          />
        </div>
        <div className="reveal mt-10">
          <EnrichmentCalculator />
        </div>
      </Section>

      {/* Program Pathway */}
      <Section tone="muted">
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

      {/* Enrichment Track product */}
      <Section>
        <div className="reveal max-w-3xl">
          <SectionHeading
            eyebrow="The GoCoding Enrichment Track"
            title="One enrichment block. Three programs. $120/month."
          />
        </div>
        <div className="reveal mt-8 grid max-w-3xl gap-4">
          {productPoints.map((p) => (
            <div
              key={p}
              className="flex gap-3 rounded-2xl border border-border bg-surface p-5 shadow-card"
            >
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <span className="text-[15px] text-text/90">{p}</span>
            </div>
          ))}
        </div>
        <div className="reveal mt-6 flex max-w-3xl items-start gap-3 rounded-2xl border border-primary/30 bg-primary/[0.05] p-5">
          <CalendarDays className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
          <p className="text-[15px] text-text/90">
            Parents already drive in on Saturday. The enrichment block keeps
            them in the building one extra hour — and gives them a reason to
            stay enrolled for years.
          </p>
        </div>
      </Section>

      {/* What's Included */}
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

      {/* Competitor Comparison */}
      <Section>
        <div className="reveal max-w-3xl">
          <SectionHeading eyebrow="Side by side" title="How GoCoding compares" />
        </div>
        <div className="reveal mt-10 overflow-x-auto rounded-2xl border border-border bg-surface shadow-card">
          <table className="w-full min-w-[720px] border-collapse text-left text-sm">
            <thead>
              <tr>
                <th className="sticky left-0 z-10 bg-surface px-4 py-3" />
                {compareHeaders.map((h, i) => (
                  <th
                    key={h}
                    className={`px-4 py-3 text-center font-bold ${
                      i === 0 ? 'bg-primary text-white' : 'text-text-muted'
                    }`}
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
                    className={`sticky left-0 z-10 px-4 py-3 text-left font-semibold ${
                      ri % 2 ? 'bg-ink' : 'bg-surface'
                    }`}
                  >
                    {row.label}
                  </th>
                  {row.cells.map((cell, ci) => (
                    <td
                      key={ci}
                      className={`px-4 py-3 text-center ${
                        ci === 0 ? 'bg-primary/[0.06]' : ''
                      }`}
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

      {/* Proof */}
      <Section tone="muted">
        <div className="reveal max-w-3xl">
          <SectionHeading
            eyebrow="Proven, not theoretical"
            title="Numbers your board will recognize"
          />
        </div>
        <div className="reveal mt-8 grid gap-5 md:grid-cols-3">
          {proof.map((p) => (
            <div
              key={p.label}
              className="rounded-2xl border border-border bg-surface p-6 shadow-card"
            >
              <div className="font-heading text-4xl font-extrabold text-primary">
                {p.stat}
              </div>
              <div className="mt-2 text-sm text-text-muted">{p.label}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <div className="reveal max-w-3xl">
          <SectionHeading eyebrow="FAQ" title="Questions your board will ask" />
        </div>
        <LandingFAQ faqs={faqs} />
      </Section>

      {/* Guarantees */}
      <Section tone="muted">
        <div className="reveal max-w-3xl">
          <SectionHeading eyebrow="Risk reversal" title="Zero risk. Seriously." />
        </div>
        <div className="mt-10">
          <Guarantees />
        </div>
      </Section>

      {/* Three Paths */}
      <Section>
        <div className="reveal max-w-3xl">
          <SectionHeading eyebrow="Your decision" title="You have three paths." />
        </div>
        <div className="reveal mt-10">
          <ThreePaths />
        </div>
      </Section>

      {/* Final CTA */}
      <section className="bg-bg py-16 sm:py-20 md:py-24">
        <Container>
          <div className="reveal mx-auto max-w-2xl rounded-3xl bg-primary p-10 text-center text-white shadow-card sm:p-14">
            <ShieldCheck className="mx-auto h-9 w-9" />
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              See one lesson before you decide anything.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/85">
              We send you one complete lesson and the revenue numbers for your
              school. Run it with one group this month. No setup fee, no
              contract — $120/month, cancel anytime.
            </p>
            <div className="mt-7 flex justify-center">
              <Button href={DEMO_HREF} variant="accent" size="lg">
                Get a Free Demo Lesson <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <p className="mt-6 text-sm text-white/70">
              Prefer to talk first?{' '}
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
