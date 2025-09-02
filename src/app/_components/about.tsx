export function About() {
  return (
    <>
      <h2 className="text-xl font-semibold">About</h2>
      <p className="mt-3 text-neutral-700">
        I’m <span className="font-medium">Winson Siu</span> (WSMath) — a premium 1-to-1{" "}
        IBDP / A-Level / IGCSE math tutor. I specialise in{" "}
        <span className="font-medium">IBDP Math (AAHL / AASL / AIHL / AISL)</span> with a
        track record of fast, exam-focused improvement delivered entirely online.
      </p>

      {/* value props */}
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-neutral-200 bg-white p-5">
          <h3 className="text-sm font-semibold">What you get</h3>
          <ul className="mt-3 space-y-2 text-sm text-neutral-700">
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-sky-600" />
              Exam-technique playbooks and targeted drills for final-paper performance.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-sky-600" />
              Weekly study plans with measurable goals and accountability.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-sky-600" />
              Calculator mastery (e.g., Casio fx-CG50) and past-paper optimisation.
            </li>
          </ul>
        </div>

        <div className="rounded-xl border border-neutral-200 bg-white p-5">
          <h3 className="text-sm font-semibold">How I teach</h3>
          <ul className="mt-3 space-y-2 text-sm text-neutral-700">
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-sky-600" />
              Live Zoom lessons with iPad + Apple Pencil + GoodNotes for instant feedback.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-sky-600" />
              Clear, step-by-step worked solutions and post-lesson homework.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-sky-600" />
              English or Cantonese delivery; professional, results-first approach.
            </li>
          </ul>
        </div>
      </div>

      {/* quick stats / credibility */}
      <div className="mt-6 flex flex-wrap gap-3">
        {[
          "50%+ IBDP Level 7 track record",
          "17,000+ teaching hours",
          "200+ one-to-one students",
          "A-Level Math & FM: A* pathway",
        ].map((t) => (
          <span
            key={t}
            className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-xs font-medium text-neutral-700 shadow-sm"
          >
            {t}
          </span>
        ))}
      </div>

      {/* courses covered */}
      <div className="mt-6">
        <h3 className="text-sm font-semibold text-neutral-800">Courses covered</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {["IBDP AAHL", "IBDP AASL", "IBDP AIHL", "IBDP AISL", "A-Level Math", "A-Level Further Math", "IGCSE 0580 / 0607"].map(
            (c) => (
              <span
                key={c}
                className="rounded-md border border-neutral-200 bg-white px-2.5 py-1 text-xs text-neutral-700"
              >
                {c}
              </span>
            )
          )}
        </div>
      </div>
    </>
  );
}
