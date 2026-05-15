import Section from '@/components/shared/Section';
import Button from '@/components/shared/Button';
import { ArrowRight, Calendar, Mail } from 'lucide-react';

type Cta = { title: string; text: string; button: string; url: string };

type Props = {
  title: string;
  primary: Cta;
  secondary: Cta;
  footer: string;
};

export default function CTASection({ title, primary, secondary, footer }: Props) {
  return (
    <Section tone="surface" className="border-t border-border">
      <div className="reveal mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-extrabold sm:text-4xl md:text-5xl">{title}</h2>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        <div className="reveal flex flex-col rounded-3xl border border-primary bg-primary p-8 text-white shadow-card">
          <div className="grid h-12 w-12 place-items-center rounded-xl bg-white/15">
            <Calendar className="h-6 w-6" />
          </div>
          <h3 className="mt-5 text-2xl font-bold">{primary.title}</h3>
          <p className="mt-3 text-white/85">{primary.text}</p>
          <div className="mt-auto pt-6">
            <Button
              href={primary.url}
              variant="accent"
              size="lg"
              className="w-full sm:w-auto"
            >
              {primary.button} <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="reveal flex flex-col rounded-3xl border border-border bg-bg p-8 shadow-card">
          <div className="grid h-12 w-12 place-items-center rounded-xl bg-accent/15 text-accent">
            <Mail className="h-6 w-6" />
          </div>
          <h3 className="mt-5 text-2xl font-bold">{secondary.title}</h3>
          <p className="mt-3 text-text-muted">{secondary.text}</p>
          <div className="mt-auto pt-6">
            <Button
              href={secondary.url}
              variant="primary"
              size="lg"
              className="w-full sm:w-auto"
            >
              {secondary.button} <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <p className="reveal mx-auto mt-10 max-w-3xl text-center text-lg text-text-muted">
        {footer}
      </p>
    </Section>
  );
}
