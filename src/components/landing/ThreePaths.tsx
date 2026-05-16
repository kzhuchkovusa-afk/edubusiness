import Button from '@/components/shared/Button';
import { ArrowRight } from 'lucide-react';

const DEMO_HREF = '/contact?demo=true';

export default function ThreePaths() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      <div className="rounded-2xl border border-border bg-[#F3F5F8] p-6">
        <div className="text-xs font-bold uppercase tracking-wider text-text-muted">
          Path 1
        </div>
        <h3 className="mt-1 text-lg font-bold text-text-muted">Do nothing</h3>
        <p className="mt-2 text-[15px] text-text-muted">
          Keep running language-only classes. Watch the 10+ group shrink each
          September. Hope kids stop wanting coding. They will not.
        </p>
      </div>

      <div className="rounded-2xl border border-warning/40 bg-warning/[0.08] p-6">
        <div className="text-xs font-bold uppercase tracking-wider text-warning">
          Path 2
        </div>
        <h3 className="mt-1 text-lg font-bold">Build it yourself</h3>
        <p className="mt-2 text-[15px] text-text/85">
          Research curriculum. Hire a CS teacher at $50/hour. Write lesson plans
          and parent reports from scratch. Maybe it works in 6 months. Maybe
          not. Definitely expensive.
        </p>
      </div>

      <div className="flex flex-col rounded-2xl border-2 border-accent bg-accent/[0.07] p-6 shadow-card">
        <div className="text-xs font-bold uppercase tracking-wider text-accent">
          Path 3 — start here
        </div>
        <h3 className="mt-1 text-lg font-bold">Start with a free demo lesson</h3>
        <p className="mt-2 text-[15px] text-text/85">
          Get a complete, scripted coding class — free. Hand it to your teacher.
          Run it this Saturday. See the kids&rsquo; faces. Then decide. $40/month
          if you continue, cancel anytime if you do not.
        </p>
        <div className="mt-auto pt-5">
          <Button href={DEMO_HREF} variant="accent" className="w-full sm:w-auto">
            Get a Free Demo Lesson <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
