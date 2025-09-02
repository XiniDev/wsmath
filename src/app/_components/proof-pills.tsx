export function ProofPills() {
  const pills = [
    "50%+ IBDP Level 7 track record",
    "100% A* in A-Level Math & Further Math",
    "17,000+ teaching hours",
    "200+ one-to-one students",
  ];
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      {pills.map((t) => (
        <span
          key={t}
          className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-xs font-medium text-neutral-700 shadow-sm"
        >
          {t}
        </span>
      ))}
    </div>
  );
}
