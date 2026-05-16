import Container from '@/components/shared/Container';
import Button from '@/components/shared/Button';
import Badge from '@/components/shared/Badge';
import StatCounter from '@/components/shared/StatCounter';
import { ArrowRight, ArrowUpRight, Building2, Sparkles } from 'lucide-react';

type Stat = { value: number; suffix?: string; prefix?: string; label: string };

type Props = {
  eyebrow?: string;
  headline: string;
  subheadline: string;
  ctaPrimary: { text: string; url: string };
  ctaSecondary?: { text: string; url: string };
  stats?: Stat[];
};

export default function HeroSection({
  eyebrow,
  headline,
  subheadline,
  ctaPrimary,
  ctaSecondary,
  stats = [],
}: Props) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-bg">
      <div className="absolute inset-0 hero-grid opacity-70" aria-hidden />
      <Container className="relative pt-16 pb-20 sm:pt-20 sm:pb-24 md:pt-24 md:pb-28">
        <div className="grid items-center gap-12 md:grid-cols-[1.2fr_1fr]">
          <div className="reveal">
            {eyebrow && (
              <Badge tone="primary" className="mb-5">
                <Sparkles className="h-3.5 w-3.5" />
                {eyebrow}
              </Badge>
            )}
            <h1 className="text-4xl font-extrabold sm:text-5xl md:text-[56px] md:leading-[1.07]">
              {headline}
            </h1>
            <p className="mt-5 max-w-xl text-lg text-text-muted sm:text-xl">
              {subheadline}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href={ctaPrimary.url} variant="primary" size="lg">
                {ctaPrimary.text} <ArrowRight className="h-4 w-4" />
              </Button>
              {ctaSecondary && (
                <Button href={ctaSecondary.url} variant="outline" size="lg">
                  {ctaSecondary.text}
                </Button>
              )}
            </div>
          </div>

          <HeroIllustration />
        </div>

        {stats.length > 0 && (
          <div className="reveal mt-14 grid grid-cols-2 gap-4 rounded-2xl border border-border bg-white/80 p-4 backdrop-blur sm:p-6 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="px-2 py-1">
                <div className="font-heading text-2xl font-bold text-primary sm:text-3xl">
                  <StatCounter value={s.value} prefix={s.prefix} suffix={s.suffix} />
                </div>
                <div className="mt-1 text-sm text-text-muted">{s.label}</div>
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}

function HeroIllustration() {
  return (
    <div className="reveal relative mx-auto w-full max-w-md">
      <div className="relative rounded-3xl border border-border bg-white p-6 shadow-card">
        <div className="absolute -top-3 -left-3 rounded-xl bg-primary px-3 py-1 text-xs font-semibold text-white shadow-card">
          A parent's choice
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex min-h-[232px] flex-col justify-between gap-3 rounded-2xl bg-[#F3F5F8] p-4">
            <div className="flex items-center gap-2 text-text-muted">
              <Building2 className="h-4 w-4" />
              <span className="text-xs font-semibold uppercase tracking-wider">
                Your center
              </span>
            </div>
            <div>
              <div className="text-sm text-text-muted line-through">
                "Do you teach coding?"
              </div>
              <div className="mt-1 text-base font-semibold">"Not right now…"</div>
            </div>
            <div className="text-xs text-text-muted">She nods politely. Doesn't renew.</div>
          </div>

          <div className="flex min-h-[232px] flex-col justify-between gap-3 rounded-2xl bg-primary/10 p-4">
            <div className="flex items-center gap-2 text-primary">
              <Building2 className="h-4 w-4" />
              <span className="text-xs font-semibold uppercase tracking-wider">
                Code Ninjas
              </span>
            </div>
            <div>
              <div className="text-sm font-semibold text-primary">"BUILD YOUR OWN GAME"</div>
              <div className="mt-1 text-base font-semibold">She signs up.</div>
            </div>
            <div className="text-xs text-primary/80">+$3,600–$9,000 LTV. To them.</div>
          </div>
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between gap-3 rounded-2xl border border-border bg-white p-4 shadow-card">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-text-muted">
            With GoCoding
          </div>
          <div className="text-base font-semibold text-text">
            "Yes — here's our 8-level roadmap."
          </div>
        </div>
        <span className="grid h-9 w-9 place-items-center rounded-full bg-accent text-white">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </div>
  );
}
