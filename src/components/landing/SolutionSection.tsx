import Section from '@/components/shared/Section';
import SectionHeading from '@/components/shared/SectionHeading';
import Icon from '@/components/shared/Icon';

type Point = { icon: string; title: string; description: string };

type Props = {
  title: string;
  intro: string;
  points: Point[];
  closer: string;
};

export default function SolutionSection({ title, intro, points, closer }: Props) {
  return (
    <Section>
      <div className="reveal max-w-3xl">
        <SectionHeading eyebrow="The solution" title={title} description={intro} />
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {points.map((p, i) => (
          <div
            key={p.title}
            className="reveal group rounded-2xl border border-border bg-surface p-6 shadow-card transition-shadow hover:shadow-card-hover"
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
              <Icon name={p.icon} />
            </div>
            <h3 className="mt-4 text-lg font-bold">{p.title}</h3>
            <p className="mt-2 text-[15px] text-text-muted">{p.description}</p>
          </div>
        ))}
      </div>

      <div className="reveal mt-10 rounded-2xl bg-text px-6 py-5 text-white sm:px-8">
        <p className="text-lg leading-relaxed sm:text-xl">{closer}</p>
      </div>
    </Section>
  );
}
