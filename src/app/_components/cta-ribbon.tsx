import Image from "next/image";

export function CtaRibbon() {
  return (
    <section className="mt-10 overflow-hidden rounded-3xl border border-neutral-200 bg-white">
      <div className="relative isolate px-6 py-8 sm:px-10">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-indigo-600 via-violet-600 to-sky-600 opacity-[0.08]" />
        <h2 className="text-xl font-semibold tracking-tight text-neutral-900">
          Limited 1:1 slots — start boosting IBDP results now
        </h2>
        <p className="mt-2 text-sm text-neutral-600">
          Premium, outcomes-driven coaching for AAHL/AISL/AASL/AIHL.
        </p>
        <div className="mt-5">
          <button
            type="button"
            aria-label="Chat on WhatsApp"
            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-sky-600 px-5 py-3 text-sm font-medium text-white shadow-md transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-violet-400/40 active:scale-[0.99]"
          >
            <span className="relative h-6 w-6 overflow-hidden rounded-full bg-white ring-1 ring-neutral-200">
              <Image src="/whatsapp.svg" alt="" aria-hidden fill className="object-contain" />
            </span>
            Chat on WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}
