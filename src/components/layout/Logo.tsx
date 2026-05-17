export default function Logo({ withTagline = false }: { withTagline?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <span
        aria-hidden
        className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand to-cyan font-heading text-lg font-bold text-white"
      >
        G
      </span>
      <span className="flex flex-col leading-tight">
        <span className="font-heading text-lg font-bold tracking-tight text-white">
          Go<span className="text-cyan">Coding</span>
          {withTagline && (
            <span className="hidden font-sans text-sm font-medium text-ink-muted lg:inline">
              {' '}
              — STEM for your business
            </span>
          )}
        </span>
        {withTagline && (
          <span className="text-[11px] font-semibold uppercase tracking-wide text-brand-light">
            Affordable · Simple · Results
          </span>
        )}
      </span>
    </span>
  );
}
