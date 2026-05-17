import type { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/shared/Container';
import Section from '@/components/shared/Section';
import SectionHeading from '@/components/shared/SectionHeading';
import Button from '@/components/shared/Button';
import Badge from '@/components/shared/Badge';
import LossCascade from '@/components/landing/LossCascade';
import ProgramPathway from '@/components/landing/ProgramPathway';
import WhatsIncluded from '@/components/landing/WhatsIncluded';
import LandingFAQ from '@/components/landing/LandingFAQ';
import Guarantees from '@/components/landing/Guarantees';
import ThreePaths from '@/components/landing/ThreePaths';
import { ArrowRight, Check, ShieldCheck, Sparkles } from 'lucide-react';

const DEMO_HREF = '/contact?demo=true';
const CTA_LABEL = 'Получить бесплатный урок · Get a Free Demo Lesson';

export const metadata: Metadata = {
  title: 'STEM для русских школ — удержите учеников 10+',
  description:
    'When a 10-year-old loses interest, the whole family leaves. GoCoding Starter — one program, Build & Code in Roblox, $40/month — keeps older kids enrolled.',
  alternates: { canonical: '/for-russian-schools' },
};

const productPoints = [
  'Одна программа — «Build & Code in Roblox» для 11+. Начните с неё.',
  'Именно этот возраст уходит первым — и именно эту программу дети не хотят пропускать.',
  'Поурочные планы расписаны по минутам. Учителю не нужен IT-бэкграунд — 10 минут на подготовку.',
  '$40/месяц. Полный учебный год: планы, домашние задания, проекты, отчёты родителям.',
];

const proof = [
  { stat: '500+', label: 'учеников в сети GoCoding прямо сейчас' },
  { stat: '95%', label: 'остаются месяц за месяцем' },
  { stat: '2.5', label: 'года — средний срок, что ученик остаётся' },
];

const faqs = [
  {
    q: 'Мои учителя — филологи, не программисты. Справятся?',
    a: 'If your teacher can read a recipe, they can teach this class. Every minute is scripted: say this, show this, give kids 8 minutes to work. No CS background needed — literally.',
  },
  {
    q: 'А если дети заскучают через 3 месяца, как с шахматами?',
    a: 'Each program is 36+ unique lessons for a full year. Kids build games in Roblox, code characters, design levels. After 3 months they are just getting warmed up — they have not even started multiplayer projects yet.',
  },
  {
    q: '$40 в месяц — ещё одна статья расходов...',
    a: 'One student enrolled in coding at $100/month covers the license in the first week. And one family that does not leave is $2,000+/year in tuition saved. The program pays for itself before you blink.',
  },
  {
    q: 'Не потеряем ли мы идентичность русской школы?',
    a: 'A Russian school offering 20 subjects to 350 students is more Russian than ever. Coding does not replace language — it gives families a reason to stay for language.',
  },
  {
    q: 'Что если учитель уволится?',
    a: 'The curriculum belongs to your school, not the teacher. A new hire reads the lesson plan, preps for 10 minutes, and teaches on day one. That is the whole point of scripted lessons.',
  },
];

export default function RussianSchoolsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-bg">
        <div className="absolute inset-0 hero-grid opacity-70" aria-hidden />
        <Container className="relative pt-16 pb-16 sm:pt-20 md:pt-24">
          <div className="reveal max-w-3xl">
            <Badge tone="primary">
              <Sparkles className="h-3.5 w-3.5" />
              Для русских школ выходного дня
            </Badge>
            <h1 className="mt-5 text-3xl font-extrabold sm:text-4xl md:text-[44px] md:leading-[1.15]">
              Когда Маше 10, она говорит{' '}
              <span className="italic text-danger">«не хочу»</span>. Маша
              уходит. Коля уходит. Мама уходит.{' '}
              <span className="text-danger">$18,000 — потеряно.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-text-muted sm:text-xl">
              When a 10-year-old says she doesn’t want to come anymore, you
              rarely lose one student — you lose the whole family. One program
              your older kids actually love keeps them, and their siblings,
              enrolled.
            </p>
            <div className="mt-7">
              <Button href={DEMO_HREF} size="lg">
                {CTA_LABEL} <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Cascade */}
      <Section tone="surface">
        <div className="reveal max-w-3xl">
          <SectionHeading
            eyebrow="Каскад потери"
            title="One «не хочу» is never one student."
            description="Here is how a single bored 11-year-old quietly drains your enrollment."
          />
        </div>
        <div className="reveal mt-10">
          <LossCascade />
        </div>
      </Section>

      {/* Product */}
      <Section>
        <div className="reveal max-w-3xl">
          <SectionHeading
            eyebrow="GoCoding Starter"
            title="Start with one program. The one that keeps them."
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
          <ProgramPathway highlight={['roblox-build-code']} />
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

      {/* Converter — the demo */}
      <Section tone="muted">
        <div className="reveal mx-auto max-w-3xl rounded-3xl border border-border bg-surface p-8 text-center shadow-card sm:p-10">
          <h2 className="text-2xl font-bold sm:text-3xl">
            «Roblox за 60 минут» — бесплатный пробный урок
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] text-text-muted">
            Print the lesson plan, hand it to your teacher, run it this
            Saturday. The kids build a real game in one class.{' '}
            <span className="italic">Вы увидите их лица сами.</span> That is what
            sells this — not us.
          </p>
          <div className="mt-6 flex justify-center">
            <Button href={DEMO_HREF} variant="accent" size="lg">
              {CTA_LABEL} <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Section>

      {/* Proof */}
      <Section>
        <div className="reveal grid gap-5 md:grid-cols-3">
          {proof.map((p) => (
            <div
              key={p.label}
              className="reveal rounded-2xl border border-border bg-surface p-6 text-center shadow-card"
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
      <Section tone="muted">
        <div className="reveal max-w-3xl">
          <SectionHeading eyebrow="FAQ" title="Вопросы, которые вы зададите" />
        </div>
        <LandingFAQ faqs={faqs} />
      </Section>

      {/* Guarantees */}
      <Section>
        <div className="reveal max-w-3xl">
          <SectionHeading eyebrow="Risk reversal" title="Zero risk. Seriously." />
        </div>
        <div className="mt-10">
          <Guarantees />
        </div>
      </Section>

      {/* Three Paths */}
      <Section tone="muted">
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
              Не теряйте семью из-за одного «не хочу».
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/85">
              Try one Roblox lesson this week. $40/month, one program, cancel
              anytime. If the kids are not hooked — you have lost nothing.
            </p>
            <div className="mt-7 flex justify-center">
              <Button href={DEMO_HREF} variant="accent" size="lg">
                {CTA_LABEL} <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <p className="mt-6 text-sm text-white/70">
              Хотите сначала поговорить?{' '}
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
