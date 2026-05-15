import Section from '@/components/shared/Section';
import SectionHeading from '@/components/shared/SectionHeading';
import Icon from '@/components/shared/Icon';

type Point = { icon: string; text: string };

type Props = {
  title: string;
  points: Point[];
};

export default function UrgencySection({ title, points }: Props) {
  return (
    <Section>
      <div className="reveal max-w-3xl">
        <SectionHeading eyebrow="Urgency" title={title} />
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {points.map((p, i) => (
          <div
            key={p.text}
            className="reveal flex gap-4 rounded-2xl border border-border bg-surface p-6 shadow-card"
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-danger/10 text-danger">
              <Icon name={p.icon} />
            </div>
            <p className="text-[15px] leading-relaxed text-text/90">{p.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
