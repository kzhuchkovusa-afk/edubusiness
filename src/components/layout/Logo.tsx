export default function Logo({ withTagline = false }: { withTagline?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <span
        aria-hidden
        className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary text-white"
      >
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
          <path
            d="M9 7L4 12L9 17"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 7L20 12L15 17"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="flex flex-col leading-tight">
        <span className="font-heading text-lg font-bold tracking-tight">
          GoCoding
          {withTagline && (
            <span className="hidden font-sans text-sm font-medium text-text-muted lg:inline">
              {' '}
              — STEM Programs for kids 4–13
            </span>
          )}
        </span>
        {withTagline && (
          <span className="text-[11px] font-semibold uppercase tracking-wide text-primary">
            Affordable · Simple · Results
          </span>
        )}
      </span>
    </span>
  );
}
