import {
  BarChart3,
  ClipboardCheck,
  ClipboardList,
  Gift,
  Megaphone,
  MessageSquare,
  PencilRuler,
  RefreshCw,
  Target,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Item = { icon: LucideIcon; title: string; text: string };

const items: Item[] = [
  {
    icon: ClipboardList,
    title: '36+ Lesson Plans',
    text: 'Minute-by-minute scripts. Your teacher opens it, reads it, teaches it. 10-minute prep.',
  },
  {
    icon: PencilRuler,
    title: 'Homework & Projects',
    text: 'Every lesson has a take-home assignment. Kids build real projects they are proud of.',
  },
  {
    icon: ClipboardCheck,
    title: 'Tests & Assessments',
    text: 'Regular checkpoints so you and parents know kids are actually learning.',
  },
  {
    icon: BarChart3,
    title: 'Parent Progress Reports',
    text: 'Printable reports in English. Parents see exactly what their child learned.',
  },
  {
    icon: Target,
    title: 'Scripted Trial Lesson',
    text: 'A free demo lesson ready to run — your test drive before committing.',
  },
  {
    icon: Gift,
    title: 'Holiday & Special Lessons',
    text: 'Halloween, Christmas, end-of-year showcase. Keep it fresh and fun.',
  },
  {
    icon: Megaphone,
    title: 'Marketing Templates',
    text: 'Social posts, flyer templates, parent email scripts. Promote your program today.',
  },
  {
    icon: MessageSquare,
    title: 'Parent Consultation Script',
    text: 'How to explain the program to parents and answer their questions. Word for word.',
  },
  {
    icon: RefreshCw,
    title: 'Annual Updates + Support',
    text: 'Curriculum updated every year. Questions? We are here to help.',
  },
];

export default function WhatsIncluded() {
  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <div
            key={it.title}
            className="reveal rounded-2xl border border-border bg-surface p-5 shadow-card"
          >
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
              <it.icon className="h-5 w-5" />
            </div>
            <div className="mt-3 font-bold">{it.title}</div>
            <p className="mt-1 text-sm text-text-muted">{it.text}</p>
          </div>
        ))}
      </div>
      <div className="reveal mt-6 rounded-2xl border border-border bg-white p-6 shadow-card">
        <p className="text-[15px] text-text/90">
          <span className="font-semibold">Compare:</span> Code.org is a free
          self-paced tool — no lesson plans, no parent reports, no marketing. A
          franchise costs $100K+ upfront plus royalties. GoCoding gives you
          everything above for{' '}
          <span className="font-semibold text-text">$40/month, flat.</span>
        </p>
      </div>
    </div>
  );
}
