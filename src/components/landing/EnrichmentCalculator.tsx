'use client';

import { useState } from 'react';

const MONTHS = 9; // Saturday-school academic year
const LICENSE = 40;

const money = (n: number) => '$' + Math.round(n).toLocaleString('en-US');

export default function EnrichmentCalculator() {
  const [students, setStudents] = useState(30);
  const [fee, setFee] = useState(50);
  const [programs, setPrograms] = useState(3);

  const monthlyRevenue = students * fee;
  const monthlyCost = programs * LICENSE;
  const yearRevenue = monthlyRevenue * MONTHS;
  const yearCost = monthlyCost * MONTHS;
  const yearNet = yearRevenue - yearCost;
  const roi = monthlyCost > 0 ? monthlyRevenue / monthlyCost : 0;

  return (
    <div className="rounded-3xl border border-border bg-white p-6 shadow-card sm:p-8">
      <h3 className="text-xl font-bold sm:text-2xl">
        Enrichment Revenue Calculator
      </h3>
      <p className="mt-1 text-[15px] text-text-muted">
        Enter your numbers. The return updates as you type.
      </p>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          <Field
            label="Students in the enrichment block"
            value={students}
            onChange={setStudents}
          />
          <Field
            label="Monthly enrichment fee per student"
            prefix="$"
            value={fee}
            onChange={setFee}
          />
          <Field
            label="GoCoding programs licensed"
            hint="$40/mo each"
            value={programs}
            onChange={setPrograms}
          />
        </div>

        <div className="flex flex-col rounded-2xl bg-bg p-5 sm:p-6">
          <Row label="Tuition revenue / year" sub={`9 school months`} value={money(yearRevenue)} />
          <Row
            label="GoCoding license / year"
            sub={`${programs} × $40 × 9`}
            value={'−' + money(yearCost)}
            muted
          />
          <div className="my-3 border-t border-border" />
          <Row label="Net for your school / year" value={money(yearNet)} />
          <div className="mt-auto flex items-center justify-between gap-3 rounded-xl bg-accent/[0.08] px-4 py-4">
            <span className="text-sm font-bold uppercase tracking-wider text-text">
              Return on the license
            </span>
            <span className="font-mono text-3xl font-extrabold text-accent sm:text-4xl">
              {roi.toFixed(roi >= 10 ? 0 : 1)}×
            </span>
          </div>
        </div>
      </div>
      <p className="mt-4 text-xs text-text-muted">
        A planning estimate over a 9-month Saturday-school year. Your actual
        numbers will vary.
      </p>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  prefix,
  hint,
}: {
  label: string;
  value: number;
  onChange: (n: number) => void;
  prefix?: string;
  hint?: string;
}) {
  return (
    <label className="block">
      <span className="flex items-center justify-between gap-3 text-sm font-semibold text-text">
        <span>{label}</span>
        {hint && <span className="font-normal text-text-muted">{hint}</span>}
      </span>
      <div className="mt-1 flex items-center rounded-xl border border-border bg-white focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/15">
        {prefix && <span className="pl-3 text-text-muted">{prefix}</span>}
        <input
          type="number"
          inputMode="numeric"
          min={0}
          value={value}
          onChange={(e) => onChange(Math.max(0, Number(e.target.value) || 0))}
          className="w-full bg-transparent px-3 py-2.5 text-[15px] outline-none"
        />
      </div>
    </label>
  );
}

function Row({
  label,
  sub,
  value,
  muted,
}: {
  label: string;
  sub?: string;
  value: string;
  muted?: boolean;
}) {
  return (
    <div className="flex items-start justify-between gap-3 py-1">
      <div>
        <div
          className={
            muted ? 'text-[15px] text-text-muted' : 'text-[15px] font-semibold text-text'
          }
        >
          {label}
        </div>
        {sub && <div className="text-xs text-text-muted">{sub}</div>}
      </div>
      <div
        className={`shrink-0 font-mono font-semibold ${
          muted ? 'text-sm text-text-muted' : 'text-base text-text'
        }`}
      >
        {value}
      </div>
    </div>
  );
}
