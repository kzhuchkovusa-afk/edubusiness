import { ArrowDown } from 'lucide-react';

const steps = [
  {
    ru: '«Не хочу.»',
    en: 'Masha (11) says she doesn’t want to come anymore. Her parents pull her out.',
    lost: '1 student',
  },
  {
    ru: 'Забирают и младшего.',
    en: 'It’s one Saturday trip for the family — so Kolya (7) leaves with her.',
    lost: '2 students',
  },
  {
    ru: 'Мамина подруга не записывает дочь.',
    en: 'Mom mentions it to a friend. The friend quietly decides not to enroll her daughter.',
    lost: '3 students',
  },
  {
    ru: 'Пустое кресло.',
    en: 'One empty chair becomes a pattern other parents notice.',
    lost: '3–4 students',
  },
];

export default function LossCascade() {
  return (
    <div className="rounded-3xl border border-border bg-white p-6 shadow-card sm:p-8">
      <div className="space-y-2">
        {steps.map((s, i) => (
          <div key={i}>
            <div className="flex gap-4 rounded-2xl border border-border bg-bg p-5">
              <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-danger font-heading text-sm font-bold text-white">
                {i + 1}
              </div>
              <div className="flex-1">
                <div className="font-heading text-base font-bold italic text-text">
                  {s.ru}
                </div>
                <div className="mt-1 text-[15px] text-text-muted">{s.en}</div>
              </div>
              <div className="self-center whitespace-nowrap rounded-lg bg-danger/10 px-2.5 py-1 text-xs font-bold text-danger">
                −{s.lost}
              </div>
            </div>
            {i < steps.length - 1 && (
              <div className="flex justify-center py-1 text-danger/50">
                <ArrowDown className="h-4 w-4" />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-5 rounded-2xl bg-danger p-6 text-center text-white">
        <div className="text-sm font-semibold uppercase tracking-wider text-white/80">
          One «не хочу» — and over Kolya’s remaining years
        </div>
        <div className="mt-1 font-heading text-4xl font-extrabold sm:text-5xl">
          $15,000–$25,000
        </div>
        <div className="mt-1 text-sm text-white/85">
          in lost tuition. From a single child who got bored.
        </div>
      </div>
    </div>
  );
}
