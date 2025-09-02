import Image from "next/image";

export function WhatsAppCta() {
  return (
    <section className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm">
      <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl">
          <h2 className="text-2xl font-semibold tracking-tight">Start your IBDP Math coaching</h2>
          <p className="mt-2 text-neutral-600">
            Premium 1-to-1 Zoom lessons with iPad + Apple&nbsp;Pencil + GoodNotes. Outcome-driven plans.
          </p>
          <ul className="mt-4 grid gap-2 text-sm text-neutral-700">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-sky-600" />
              50%+ Level&nbsp;7 track record
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-sky-600" />
              17,000+ hours • 200+ students
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-sky-600" />
              AAHL / AASL / AIHL / AISL
            </li>
          </ul>

          <div className="mt-6">
            <button
              type="button"
              aria-label="Chat on WhatsApp"
              className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-sky-600 px-5 py-3 text-sm font-medium text-white shadow-md transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-violet-400/40 active:scale-[0.99]"
            >
              <span className="relative h-10 w-10 overflow-hidden rounded-full bg-white ring-1 ring-neutral-200">
                <Image src="/whatsapp.svg" alt="" aria-hidden fill className="object-cover scale-[1.12]" />
              </span>
              Chat on WhatsApp
            </button>
          </div>

          <p className="mt-2 text-xs text-neutral-500">
            Fast replies. Share course (AAHL/AISL/etc.) and target score to get started.
          </p>
        </div>

        <div className="relative shrink-0">
          <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-tr from-indigo-500/20 via-violet-500/25 to-sky-400/20 blur-2xl" />
          <div className="rounded-2xl bg-gradient-to-r from-indigo-500 via-violet-500 to-sky-500 p-[2px] shadow-xl">
            <div className="rounded-[14px] bg-white p-5">
              <Image src="/icon.svg" alt="WSMath logo" width={160} height={160} className="h-20 w-20 md:h-32 md:w-32" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
