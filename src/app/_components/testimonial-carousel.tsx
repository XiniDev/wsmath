"use client";
import Image from "next/image";
import type { Testimonial } from "./testimonials";

export function TestimonialCarousel({
  items,
  speedSec = 28,
}: {
  items: Testimonial[];
  speedSec?: number;
}) {
  return (
    <section className="mt-8">
      <div className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white">
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent" />

        {/* track */}
        <div
          className="marquee flex"
          style={{ animation: `marquee ${speedSec}s linear infinite` }}
        >
          <ul className="flex shrink-0 gap-4 px-4 py-5">
            {items.map((t, i) => (
              <li key={`a-${i}`} className="w-[280px] md:w-[340px] flex-none">
                <Card t={t} />
              </li>
            ))}
          </ul>
          {/* duplicate for seamless loop */}
          <ul className="flex shrink-0 gap-4 px-4 py-5" aria-hidden="true">
            {items.map((t, i) => (
              <li key={`b-${i}`} className="w-[280px] md:w-[340px] flex-none">
                <Card t={t} />
              </li>
            ))}
          </ul>
        </div>

        <style jsx>{`
          @keyframes marquee {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
          /* pause on hover */
          .group:hover .marquee {
            animation-play-state: paused;
          }
        `}</style>
      </div>
    </section>
  );
}

function Card({ t }: { t: Testimonial }) {
  return (
    <div className="h-full rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
      <div className="flex items-start gap-3">
        <Avatar name={t.name} src={t.avatarSrc} />
        <div>
          <p className="font-medium leading-tight">{t.name}</p>
          {t.role && <p className="text-xs text-neutral-500">{t.role}</p>}
        </div>
      </div>
      <p className="mt-3 text-sm text-neutral-700">
        <span aria-hidden className="mr-1 text-neutral-400">“</span>
        {t.quote}
        <span aria-hidden className="ml-1 text-neutral-400">”</span>
      </p>
    </div>
  );
}

function Avatar({ name, src }: { name: string; src?: string }) {
  if (src) {
    return (
      <div className="relative h-10 w-10 overflow-hidden rounded-full ring-1 ring-neutral-200">
        <Image src={src} alt={`${name} avatar`} fill className="object-cover" sizes="40px" />
      </div>
    );
  }
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-indigo-600 via-violet-600 to-sky-600 text-xs font-semibold text-white ring-1 ring-neutral-200">
      {initials}
    </div>
  );
}
