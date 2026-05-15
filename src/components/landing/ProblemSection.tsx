import Section from '@/components/shared/Section';
import SectionHeading from '@/components/shared/SectionHeading';
import { AlertTriangle, MapPin } from 'lucide-react';

type Props = {
  title: string;
  story: string[];
  threat: {
    title: string;
    competitors: { name: string; stat: string }[];
  };
};

export default function ProblemSection({ title, story, threat }: Props) {
  return (
    <Section tone="surface">
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div className="reveal">
          <SectionHeading eyebrow="The problem" title={title} />
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-text/85">
            {story.map((p, i) => (
              <p key={i} className={i === 1 || i === 2 ? 'font-semibold text-text' : ''}>
                {p}
              </p>
            ))}
          </div>
        </div>

        <aside className="reveal">
          <div className="rounded-3xl border border-danger/30 bg-danger/5 p-6 shadow-card">
            <div className="mb-4 flex items-center gap-2 text-danger">
              <AlertTriangle className="h-5 w-5" />
              <span className="text-xs font-bold uppercase tracking-wider">Competitor threat</span>
            </div>
            <h3 className="text-xl font-bold leading-snug">{threat.title}</h3>
            <ul className="mt-5 space-y-3">
              {threat.competitors.map((c) => (
                <li
                  key={c.name}
                  className="flex items-center justify-between gap-3 rounded-xl bg-white p-3"
                >
                  <span className="flex items-center gap-2 font-semibold">
                    <MapPin className="h-4 w-4 text-danger" />
                    {c.name}
                  </span>
                  <span className="text-sm font-semibold text-text-muted">{c.stat}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </Section>
  );
}
