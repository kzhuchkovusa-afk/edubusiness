import Section from '@/components/shared/Section';
import SectionHeading from '@/components/shared/SectionHeading';
import Icon from '@/components/shared/Icon';
import Badge from '@/components/shared/Badge';

type Item = { icon: string; title: string; text: string; value: string };

type Props = {
  title: string;
  items: Item[];
  total: string;
};

export default function BonusesSection({ title, items, total }: Props) {
  return (
    <Section tone="muted">
      <div className="reveal max-w-3xl">
        <SectionHeading eyebrow="Bonuses" title={title} />
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {items.map((it, i) => (
          <div
            key={it.title}
            className="reveal flex gap-4 rounded-2xl border border-border bg-white p-6 shadow-card"
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-warning/15 text-warning">
              <Icon name={it.icon} className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-bold">{it.title}</h3>
                <Badge tone="accent" className="shrink-0">
                  {it.value}
                </Badge>
              </div>
              <p className="mt-2 text-[15px] text-text-muted">{it.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="reveal mt-10 text-center">
        <p className="inline-block rounded-2xl bg-text px-6 py-4 text-lg font-bold text-white">
          {total}
        </p>
      </div>
    </Section>
  );
}
