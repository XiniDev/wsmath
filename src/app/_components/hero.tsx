import Image from "next/image";

export function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm">
      {/* subtle grid + spotlight */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.06)_1px,transparent_1px)] bg-[size:22px_22px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        <div className="absolute -top-32 left-1/2 h-[48rem] w-[48rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-indigo-500/20 via-violet-500/20 to-sky-400/20 blur-3xl [mask-image:radial-gradient(ellipse_at_center,black,transparent_55%)]" />
      </div>

      <div className="relative flex flex-col gap-10 px-8 py-16 sm:px-12 md:px-16 md:py-24 lg:flex-row lg:items-center lg:justify-between">
        {/* text */}
        <div>
          <h1 className="text-5xl font-extrabold leading-none tracking-tight md:text-7xl">
            <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-sky-600 bg-clip-text text-transparent">
              Winson Siu
            </span>
          </h1>
          <p className="mt-4 text-lg text-neutral-700 md:text-2xl">
            Professional Online Math Tutor
          </p>
          <p className="mt-2 text-sm text-neutral-600 md:text-base">
            專業 IBDP & A-Level 數學科考試專家
          </p>

          {/* WhatsApp button */}
          <div className="mt-6">
            <button
              type="button"
              aria-label="Chat on WhatsApp"
              className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-sky-600 px-5 py-3 text-sm font-medium text-white shadow-md transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-violet-400/40 active:scale-[0.99]"
            >
              <span className="relative h-10 w-10 overflow-hidden rounded-full bg-white ring-1 ring-neutral-200">
                <Image
                  src="/whatsapp.svg"
                  alt="Whatsapp logo"
                  aria-hidden="true"
                  fill
                  className="object-cover scale-[1.01]"
                  priority
                />
              </span>
              Chat on WhatsApp
            </button>
          </div>
        </div>

        {/* big icon with gradient ring + glow */}
        <div className="relative shrink-0">
          <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-tr from-indigo-500/20 via-violet-500/25 to-sky-400/20 blur-2xl" />
          <div className="rounded-2xl bg-gradient-to-r from-indigo-500 via-violet-500 to-sky-500 p-[2px] shadow-xl">
            <div className="rounded-[14px] bg-white p-4">
              <Image
                src="/icon.svg"
                alt="WSMath logo"
                width={200}
                height={200}
                priority
                className="h-24 w-24 md:h-40 md:w-40"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
