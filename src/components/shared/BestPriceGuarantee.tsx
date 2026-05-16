import Button from '@/components/shared/Button';
import { ArrowRight, Check, Trophy } from 'lucide-react';

const scope = [
  '36+ lesson plans (minute-by-minute scripts, not outlines)',
  'Homework and assessments for every lesson',
  'Parent feedback templates',
  'Scripted trial lesson',
  'Marketing and operations materials',
  'Full academic year coverage (1×/week, 1.5 hours)',
];

export default function BestPriceGuarantee() {
  return (
    <div className="reveal mx-auto max-w-3xl rounded-3xl border-2 border-warning/40 bg-warning/[0.07] p-8 text-center shadow-card sm:p-10">
      <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-warning text-white">
        <Trophy className="h-7 w-7" />
      </div>
      <div className="mt-4 text-xs font-bold uppercase tracking-widest text-warning">
        Best Price Guarantee
      </div>
      <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
        Found a comparable curriculum for less? We will beat it.
      </h2>
      <p className="mt-4 text-[15px] text-text-muted">
        We guarantee the best price on the market for licensed STEM curriculum
        with this scope of materials:
      </p>
      <ul className="mx-auto mt-5 grid max-w-xl gap-2 text-left sm:grid-cols-2">
        {scope.map((g) => (
          <li key={g} className="flex gap-2 text-sm text-text/90">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-warning" />
            <span>{g}</span>
          </li>
        ))}
      </ul>
      <p className="mt-5 text-[15px] text-text/90">
        Find one with comparable volume and depth at a lower price than
        $40/month — send us the link. We will match it and give you an
        additional discount. No fine print. No tricks. We mean it.
      </p>
      <div className="mt-6 flex justify-center">
        <Button href="/contact?demo=true" variant="accent" size="lg">
          Get a Free Demo Lesson <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
