import Section from '@/components/shared/Section';
import SectionHeading from '@/components/shared/SectionHeading';
import Icon from '@/components/shared/Icon';
import { Check } from 'lucide-react';

type Column = { title: string; icon: string; points: string[] };

type Props = {
  title: string;
  columns: Column[];
};

export default function BenefitsSection({ title, columns }: Props) {
  return (
    <Section tone="muted">
      <div className="reveal max-w-3xl">
        <SectionHeading eyebrow="What changes" title={title} />
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {columns.map((c, i) => (
          <div
            key={c.title}
            className="reveal rounded-2xl border border-border bg-surface p-7 shadow-card"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary text-white">
              <Icon name={c.icon} className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-xl font-bold">{c.title}</h3>
            <ul className="mt-5 space-y-3">
              {c.points.map((p) => (
                <li key={p} className="flex gap-3 text-[15px] text-text/85">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-accent" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
