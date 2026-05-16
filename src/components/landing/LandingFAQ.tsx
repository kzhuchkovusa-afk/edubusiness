type FAQ = { q: string; a: string };

export default function LandingFAQ({ faqs }: { faqs: FAQ[] }) {
  return (
    <div className="reveal mt-8 grid gap-4 md:grid-cols-2">
      {faqs.map((f) => (
        <details
          key={f.q}
          className="group rounded-2xl border border-border bg-surface p-5 shadow-card open:shadow-card-hover"
        >
          <summary className="cursor-pointer list-none">
            <div className="flex items-center justify-between gap-3">
              <span className="text-base font-semibold">{f.q}</span>
              <span className="text-primary transition-transform group-open:rotate-45">
                +
              </span>
            </div>
          </summary>
          <p className="mt-3 text-[15px] text-text-muted">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
