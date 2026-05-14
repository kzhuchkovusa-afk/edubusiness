import Section from '@/components/shared/Section';
import SectionHeading from '@/components/shared/SectionHeading';
import Badge from '@/components/shared/Badge';
import { Check } from 'lucide-react';

type Side = { title: string; subtitle: string; items: string[] };

type Props = {
  title: string;
  left: Side;
  right: Side;
};

export default function WhatYouGet({ title, left, right }: Props) {
  return (
    <Section>
      <div className="reveal max-w-3xl">
        <SectionHeading eyebrow="What you get" title={title} />
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <Panel side={left} tone="primary" />
        <Panel side={right} tone="accent" />
      </div>
    </Section>
  );
}

function Panel({
  side,
  tone,
}: {
  side: Side;
  tone: 'primary' | 'accent';
}) {
  const toneStyles = {
    primary: 'border-primary/30 bg-primary/[0.04]',
    accent: 'border-accent/30 bg-accent/[0.06]',
  };
  const dotStyles = {
    primary: 'bg-primary/10 text-primary',
    accent: 'bg-accent/15 text-accent',
  };

  return (
    <div className={`reveal rounded-3xl border p-7 shadow-card ${toneStyles[tone]}`}>
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-xl font-bold sm:text-2xl">{side.title}</h3>
        <Badge tone={tone}>{side.subtitle}</Badge>
      </div>
      <ul className="mt-6 space-y-3">
        {side.items.map((item) => (
          <li key={item} className="flex gap-3 text-[15px] text-text/85">
            <span className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${dotStyles[tone]}`}>
              <Check className="h-3 w-3" />
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
