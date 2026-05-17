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
        </span>
        {withTagline && (
          <span className="text-[11px] font-semibold tracking-wide text-cyan">
            for Business
          </span>
        )}
      </span>
    </span>
  );
}
