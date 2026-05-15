import Section from '@/components/shared/Section';
import SectionHeading from '@/components/shared/SectionHeading';
import Icon from '@/components/shared/Icon';
import { Quote } from 'lucide-react';

type Card = { icon: string; title: string; text: string };

type Props = {
  title: string;
  cards: Card[];
  pullquote: string;
};

export default function GuaranteeSection({ title, cards, pullquote }: Props) {
  return (
    <Section tone="surface">
      <div className="reveal max-w-3xl">
        <SectionHeading eyebrow="Guarantee" title={title} />
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {cards.map((c, i) => (
          <div
            key={c.title}
            className="reveal flex flex-col rounded-2xl border border-border bg-bg p-6 shadow-card"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-accent text-white">
              <Icon name={c.icon} className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-lg font-bold">{c.title}</h3>
            <p className="mt-2 text-[15px] text-text-muted">{c.text}</p>
          </div>
        ))}
      </div>

      <div className="reveal mt-12 rounded-2xl border-l-4 border-warning bg-warning/10 p-6 sm:p-8">
        <div className="flex items-start gap-4">
          <Quote className="h-7 w-7 shrink-0 text-warning" />
          <p className="text-lg italic leading-relaxed text-text sm:text-xl">{pullquote}</p>
        </div>
      </div>
    </Section>
  );
}
