import Section from '@/components/shared/Section';
import SectionHeading from '@/components/shared/SectionHeading';
import { cn } from '@/lib/utils';
import { Check, X } from 'lucide-react';

type Props = {
  title: string;
  headers: string[];
  rows: { label: string; values: string[] }[];
};

export default function ComparisonTable({ title, headers, rows }: Props) {
  return (
    <Section tone="surface">
      <div className="reveal max-w-3xl">
        <SectionHeading eyebrow="Why GoCoding" title={title} />
      </div>

      {/* Desktop table */}
      <div className="reveal mt-10 hidden overflow-hidden rounded-2xl border border-border bg-white shadow-card md:block">
        <table className="w-full table-fixed">
          <thead>
            <tr className="bg-[#F3F5F8] text-left text-sm uppercase tracking-wider text-text-muted">
              <th className="w-1/4 px-6 py-4"> </th>
              {headers.map((h, i) => (
                <th
                  key={h}
                  className={cn(
                    'w-1/4 px-6 py-4 font-semibold',
                    i === headers.length - 1 && 'bg-primary text-white',
                  )}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <tr key={row.label} className={ri % 2 ? 'bg-[#FAFAFA]' : 'bg-white'}>
                <td className="px-6 py-4 font-semibold">{row.label}</td>
                {row.values.map((v, i) => {
                  const isWinner = i === row.values.length - 1;
                  return (
                    <td
                      key={i}
                      className={cn(
                        'px-6 py-4 text-[15px]',
                        isWinner ? 'bg-primary/5 font-semibold text-text' : 'text-text-muted',
                      )}
                    >
                      <span className="inline-flex items-center gap-2">
                        {isWinner ? (
                          <Check className="h-4 w-4 text-accent" />
                        ) : (
                          <X className="h-4 w-4 text-text-muted/60" />
                        )}
                        {v}
                      </span>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile stacked cards */}
      <div className="reveal mt-8 grid gap-4 md:hidden">
        {headers.map((h, i) => (
          <div
            key={h}
            className={cn(
              'rounded-2xl border bg-white p-5 shadow-card',
              i === headers.length - 1 ? 'border-primary' : 'border-border',
            )}
          >
            <div
              className={cn(
                'mb-3 inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider',
                i === headers.length - 1 ? 'bg-primary text-white' : 'bg-black/5 text-text-muted',
              )}
            >
              {h}
            </div>
            <ul className="space-y-2">
              {rows.map((row) => (
                <li key={row.label} className="flex flex-col gap-0.5">
                  <span className="text-xs uppercase tracking-wider text-text-muted">
                    {row.label}
                  </span>
                  <span
                    className={cn(
                      'text-[15px]',
                      i === headers.length - 1 ? 'font-semibold' : '',
                    )}
                  >
                    {row.values[i]}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
