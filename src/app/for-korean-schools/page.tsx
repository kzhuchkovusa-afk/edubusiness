import type { Metadata } from 'next';
import Container from '@/components/shared/Container';
import Section from '@/components/shared/Section';
import SectionHeading from '@/components/shared/SectionHeading';
import Button from '@/components/shared/Button';
import Badge from '@/components/shared/Badge';
import PilotForm from '@/components/landing/PilotForm';
import ProgramPathway from '@/components/landing/ProgramPathway';
import WhatsIncluded from '@/components/landing/WhatsIncluded';
import LandingFAQ from '@/components/landing/LandingFAQ';
import Guarantees from '@/components/landing/Guarantees';
import { ArrowRight, Check, Heart, Quote, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Korean School STEM Pilot Program',
  description:
    'A low-risk STEM pilot for NAKS-affiliated Korean Saturday schools. One program, free for 30 days. Coding that makes Korean school the place kids want to be.',
  alternates: { canonical: '/for-korean-schools' },
};

const pilotSteps = [
  'Apply below — we are selecting 5 Korean schools for this pilot.',
  'We send one complete lesson and set you up. Free for 30 days.',
  'Your teacher runs it on a Saturday. 10-minute prep, no CS background.',
  'After 30 days you decide. Continue at $40/month, or stop — no obligation.',
];

const productPoints = [
  'One program to start — "Coding and AI in Minecraft" (ages 7–8) or "Build & Code in Roblox" (11+).',
  'Just one. We will not hand you 15 options to sort through.',
  'Scripted lesson plans, homework, assessments, parent updates — all included.',
  'After the pilot: $40/month for the program. Month to month, no contract.',
];

const faqs = [
  {
    q: 'Will coding take away from Korean language time?',
    a: 'Not at all. The coding class runs as a separate enrichment block — after or alongside Korean. Think of it as an elective, not a replacement. Korean stays at the center.',
  },
  {
    q: 'Our teachers are volunteers with no time for extra prep.',
    a: '10 minutes — that is the prep time. The lesson plan tells your teacher exactly what to say and do, minute by minute. No CS background, no extra training.',
  },
  {
    q: 'Is $40/month realistic for our budget?',
    a: 'If coding keeps even 3 families who were about to leave, that is $900–$1,800/year in saved tuition. The program costs $480/year. It is retention insurance — and it pays for itself.',
  },
  {
    q: 'I don’t want kids staring at screens for 90 minutes.',
    a: 'Neither do we. Lessons alternate between instruction, hands-on coding, pair work, and presentations. Robotics is fully physical — building with real kits. Screen time is active, not passive.',
  },
  {
    q: 'Are other Korean schools doing this?',
    a: 'Heritage schools across communities are adding STEM enrichment. We are building this pilot specifically for Korean schools, and we would love yours to be one of the first case studies.',
  },
];

export default function KoreanSchoolsPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-accent/[0.06]">
        <Container className="pt-16 pb-16 sm:pt-20 md:pt-24">
          <div className="reveal max-w-3xl">
            <Badge tone="accent">
              <Sparkles className="h-3.5 w-3.5" />
              For NAKS Korean Saturday schools
            </Badge>
            <h1 className="mt-5 text-4xl font-extrabold sm:text-5xl md:text-[52px] md:leading-[1.1]">
              Mrs. Kim&rsquo;s daughter left for Code Ninjas. She didn&rsquo;t
              have to.
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-text-muted sm:text-xl">
              When a STEM class pulls a child away from Korean school, it is not
              about coding — it is about a Saturday slot. We help your school
              offer both, so families never have to choose.
            </p>
            <div className="mt-7">
              <Button href="#pilot-application" variant="accent" size="lg">
                Apply for the Korean School Pilot Program{' '}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* The pain */}
      <Section tone="surface">
        <div className="reveal mx-auto max-w-3xl">
          <div className="rounded-3xl border border-border bg-bg p-7 shadow-card sm:p-9">
            <Quote className="h-8 w-8 text-text-muted/40" />
            <p className="mt-3 text-xl leading-relaxed text-text sm:text-2xl">
              Mrs. Kim told me her daughter is quitting Korean school for Code
              Ninjas. I felt like I failed — not because of coding, but because
              she chose them over us.
            </p>
          </div>
          <p className="mt-6 text-lg leading-relaxed text-text/85">
            You did not fail. Your school simply did not have a Saturday answer
            to STEM yet. That is fixable — and it does not require choosing
            between Korean heritage and the modern skills parents want.
          </p>
        </div>
      </Section>

      {/* Pilot framing */}
      <Section tone="muted">
        <div className="reveal max-w-3xl">
          <SectionHeading
            eyebrow="An invitation, not a sale"
            title="Join the Korean School STEM Pilot — 5 schools, free for 30 days"
            description="We are looking for five NAKS-affiliated schools to pilot a STEM enrichment block. Your school could be one of them. Test it with your own students before anything else."
          />
        </div>
        <div className="reveal mt-8 grid max-w-3xl gap-3">
          {pilotSteps.map((s, i) => (
            <div
              key={s}
              className="flex gap-4 rounded-2xl border border-border bg-surface p-5 shadow-card"
            >
              <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-accent font-heading text-sm font-bold text-white">
                {i + 1}
              </div>
              <span className="self-center text-[15px] text-text/90">{s}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Product — start small */}
      <Section>
        <div className="reveal max-w-3xl">
          <SectionHeading
            eyebrow="Start small"
            title="One program. Chosen for your students. That's it."
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

      {/* What's Included */}
      <Section>
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

      {/* Coding supports Korean education */}
      <Section tone="surface">
        <div className="reveal mx-auto max-w-3xl rounded-3xl border border-accent/30 bg-accent/[0.06] p-8 shadow-card sm:p-10">
          <Heart className="h-8 w-8 text-accent" />
          <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
            Coding makes Korean school the place kids want to be
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-text/85">
            When students learn to code at your school, they associate your
            school with something exciting and modern. Saturday stops being the
            thing they have to do — it becomes the thing they look forward to.
          </p>
          <p className="mt-3 text-lg leading-relaxed text-text/85">
            Korean language and culture stay at the heart of it. STEM just gives
            families one more reason to keep coming back — to you.
          </p>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <div className="reveal max-w-3xl">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions we hear from Korean school principals"
          />
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

      {/* Endorsement placeholder */}
      <Section>
        <div className="reveal mx-auto max-w-3xl rounded-2xl border border-dashed border-border bg-bg p-6 text-center">
          <div className="text-xs font-semibold uppercase tracking-wider text-text-muted">
            Endorsement
          </div>
          <p className="mt-2 text-[15px] text-text-muted">
            Recommended by your NAKS regional chapter — endorsement coming soon.
          </p>
        </div>
      </Section>

      {/* Pilot application form */}
      <section
        id="pilot-application"
        className="scroll-mt-24 bg-bg py-16 sm:py-20 md:py-24"
      >
        <Container>
          <div className="reveal mx-auto max-w-2xl">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold sm:text-4xl">
                Apply for the pilot
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-text-muted">
                Tell us about your school. We review every application
                personally and reply within one business day.
              </p>
            </div>
            <div className="mt-8 rounded-3xl border border-border bg-surface p-7 shadow-card sm:p-9">
              <PilotForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
