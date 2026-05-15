import Container from './Container';
import Button from './Button';
import { ArrowRight } from 'lucide-react';

type Props = {
  title?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryText?: string;
  secondaryHref?: string;
};

export default function CTABanner({
  title = 'Ready to stop losing families?',
  description = '$40/month. No contract. Pays for itself with one student.',
  ctaText = 'Book a 15-Minute Zoom',
  ctaHref = '/contact',
  secondaryText = 'Get a Free Demo Lesson',
  secondaryHref = '/contact?demo=true',
}: Props) {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary-dark p-10 text-white shadow-card sm:p-14">
          <div className="absolute inset-0 opacity-20 hero-grid" aria-hidden />
          <div className="relative grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
            <div>
              <h3 className="text-2xl font-bold sm:text-3xl md:text-4xl">{title}</h3>
              <p className="mt-3 text-white/85 text-lg">{description}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col md:items-end">
              <Button href={ctaHref} variant="accent" size="lg" className="w-full sm:w-auto">
                {ctaText} <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                href={secondaryHref}
                variant="ghost"
                size="lg"
                className="w-full bg-white/10 text-white hover:bg-white/20 sm:w-auto"
              >
                {secondaryText}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
