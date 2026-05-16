'use client';

import { useState } from 'react';

const HOURS_PER_MONTH = 6;
const LICENSE = 40;

const money = (n: number) =>
  (n < 0 ? '−$' : '$') + Math.abs(Math.round(n)).toLocaleString('en-US');

export default function BusinessCalculator() {
  const [price, setPrice] = useState(150);
  const [students, setStudents] = useState(6);
  const [teacherRate, setTeacherRate] = useState(25);
  const [venueRate, setVenueRate] = useState(20);
  const [other, setOther] = useState(0);

  const revenue = price * students;
  const teacher = teacherRate * HOURS_PER_MONTH;
  const venue = venueRate * HOURS_PER_MONTH;
  const expenses = teacher + venue + LICENSE + other;
  const profit = revenue - expenses;
  const margin = revenue > 0 ? Math.round((profit / revenue) * 100) : 0;

  return (
    <div className="rounded-3xl border border-border bg-white p-6 shadow-card sm:p-8">
      <h3 className="text-xl font-bold sm:text-2xl">See it for your own center</h3>
      <p className="mt-1 text-[15px] text-text-muted">
        Enter your real numbers — the profit updates as you type.
      </p>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        {/* Inputs */}
        <div className="space-y-4">
          <div className="text-xs font-bold uppercase tracking-wider text-text-muted">
            What you earn
          </div>
          <NumberField
            label="Monthly price per student"
            prefix="$"
            value={price}
            onChange={setPrice}
          />
          <NumberField
            label="Number of students"
            value={students}
            onChange={setStudents}
          />

          <div className="pt-1 text-xs font-bold uppercase tracking-wider text-text-muted">
            What you spend
          </div>
          <NumberField
            label="Teacher rate (per hour)"
            prefix="$"
            hint="× 6 h/month"
            value={teacherRate}
            onChange={setTeacherRate}
          />
          <NumberField
            label="Venue rent (per hour)"
            prefix="$"
            hint="× 6 h/month"
            value={venueRate}
            onChange={setVenueRate}
          />
          <NumberField
            label="Other costs (per month)"
            prefix="$"
            value={other}
            onChange={setOther}
          />
        </div>

        {/* Result */}
        <div className="flex flex-col rounded-2xl bg-bg p-5 sm:p-6">
          <Row
            label="Monthly revenue"
            sub={`${money(price)} × ${students} students`}
            value={money(revenue)}
          />
          <div className="my-3 border-t border-border" />
          <Row label="Teacher" sub={`${money(teacherRate)} × 6 h`} value={'−' + money(teacher)} muted />
          <Row label="Venue rent" sub={`${money(venueRate)} × 6 h`} value={'−' + money(venue)} muted />
          <Row label="GoCoding license" value={'−' + money(LICENSE)} muted />
          {other > 0 && <Row label="Other costs" value={'−' + money(other)} muted />}
          <Row label="Total expenses" value={'−' + money(expenses)} />
          <div className="my-3 border-t border-border" />
          <div className="mt-auto flex items-end justify-between gap-3 pt-2">
            <div>
              <div className="text-sm font-bold uppercase tracking-wider text-text-muted">
                Your monthly profit
              </div>
              <div className="text-xs text-text-muted">{margin}% margin</div>
            </div>
            <div
              className={`font-mono text-3xl font-extrabold sm:text-4xl ${
                profit >= 0 ? 'text-accent' : 'text-danger'
              }`}
            >
              {money(profit)}
            </div>
          </div>
        </div>
      </div>

      <p className="mt-4 text-xs text-text-muted">
        A rough estimate for one weekly group (6 teaching hours a month). Your
        actual numbers will vary.
      </p>
    </div>
  );
}

function NumberField({
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
