import Section from '@/components/shared/Section';
import SectionHeading from '@/components/shared/SectionHeading';
import Icon from '@/components/shared/Icon';
import { Quote } from 'lucide-react';

type Point = { icon: string; title: string; text: string };
type Testimonial = { quote: string; name: string; role: string };

type Props = {
  title: string;
  points: Point[];
  callout: string;
  testimonials: Testimonial[];
};

export default function SocialProof({ title, points, callout, testimonials }: Props) {
  return (
    <Section>
      <div className="reveal max-w-3xl">
        <SectionHeading eyebrow="Social proof" title={title} />
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {points.map((p, i) => (
          <div
            key={p.title}
            className="reveal rounded-2xl border border-border bg-surface p-5 shadow-card"
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-accent/10 text-accent">
              <Icon name={p.icon} />
            </div>
            <div className="mt-4 text-lg font-bold">{p.title}</div>
            <p className="mt-1 text-sm text-text-muted">{p.text}</p>
          </div>
        ))}
      </div>

      <div className="reveal mt-10 overflow-hidden rounded-2xl border border-primary/30 bg-primary/5 p-6 shadow-card sm:p-8">
        <div className="flex items-start gap-4">
          <Quote className="h-8 w-8 shrink-0 text-primary" />
          <p className="text-lg leading-relaxed text-text sm:text-xl">{callout}</p>
        </div>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="reveal rounded-2xl border border-dashed border-border bg-white p-6 text-center"
          >
            <Quote className="mx-auto h-6 w-6 text-text-muted/40" />
            <p className="mt-3 italic text-text-muted">"{t.quote}"</p>
            <div className="mt-4 text-sm font-semibold">{t.name}</div>
            <div className="text-xs text-text-muted">{t.role}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
