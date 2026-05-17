'use client';

import { useState } from 'react';

const HOURS_PER_MONTH = 6;
const LICENSE = 40;

const money = (n: number) =>
  (n < 0 ? '−$' : '$') + Math.abs(Math.round(n)).toLocaleString('en-US');

export default function BusinessCalculator() {
  const [price, setPrice] = useState(150);
  const [students, setStudents] = useState(6);
  const [groups, setGroups] = useState(1);
  const [teacherRate, setTeacherRate] = useState(25);
  const [venueRate, setVenueRate] = useState(20);

  const revenue = price * students * groups;
  const teacher = teacherRate * HOURS_PER_MONTH * groups;
  const venue = venueRate * HOURS_PER_MONTH * groups;
  const profit = revenue - teacher - venue - LICENSE;
  const margin = revenue > 0 ? Math.round((profit / revenue) * 100) : 0;
  const annual = profit * 12;

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {/* Inputs */}
      <div className="rounded-2xl border border-white/6 bg-ink-card p-7 sm:p-8">
        <h3 className="font-heading text-xl font-bold text-white">Your inputs</h3>
        <div className="mt-6 space-y-4">
          <Field label="Monthly price per student" prefix="$" value={price} onChange={setPrice} />
          <Field label="Students per group" value={students} onChange={setStudents} />
          <Field label="Number of groups" value={groups} onChange={setGroups} />
          <Field label="Teacher rate (per hour)" prefix="$" value={teacherRate} onChange={setTeacherRate} />
          <Field label="Venue rent (per hour)" prefix="$" value={venueRate} onChange={setVenueRate} />
        </div>
      </div>

      {/* Results */}
      <div className="rounded-2xl border-2 border-brand/25 bg-ink-card p-7 sm:p-8">
        <h3 className="font-heading text-xl font-bold text-white">Your profit</h3>
        <div className="mt-6">
          <Row label="Monthly revenue" value={money(revenue)} tone="pos" />
          <Row label="Teacher cost" value={'−' + money(teacher)} tone="neg" />
          <Row label="Venue rent" value={'−' + money(venue)} tone="neg" />
          <Row label="GoCoding license" value={'−' + money(LICENSE)} tone="neg" />
        </div>
        <div className="mt-4 rounded-2xl bg-brand/10 px-5 py-5 text-center">
          <div className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
            Monthly profit
          </div>
          <div className="font-heading text-4xl font-extrabold text-gradient-green">
            {money(profit)}
          </div>
          <div className="mt-0.5 text-sm text-grass/80">{margin}% margin</div>
        </div>
        <p className="mt-4 text-center text-sm text-ink-muted">
          Per year: <span className="font-bold text-grass">{money(annual)}</span>
        </p>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  prefix,
}: {
  label: string;
  value: number;
  onChange: (n: number) => void;
  prefix?: string;
}) {
  return (
    <label className="block">
      <span className="text-[13px] font-medium text-ink-muted">{label}</span>
      <div className="mt-1.5 flex items-center rounded-xl border border-white/10 bg-white/[0.04] focus-within:border-brand">
        {prefix && <span className="pl-3.5 text-ink-muted">{prefix}</span>}
        <input
          type="number"
          inputMode="numeric"
          min={0}
          value={value}
          onChange={(e) => onChange(Math.max(0, Number(e.target.value) || 0))}
          className="w-full bg-transparent px-3.5 py-3 text-[15px] text-white outline-none"
        />
      </div>
    </label>
  );
}

function Row({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: 'pos' | 'neg';
}) {
  return (
    <div className="flex items-center justify-between border-b border-white/6 py-3.5 last:border-0">
      <span className="text-sm text-ink-muted">{label}</span>
      <span
        className={`font-heading text-lg font-bold ${
          tone === 'pos' ? 'text-grass' : 'text-flame'
        }`}
      >
        {value}
      </span>
    </div>
  );
}
