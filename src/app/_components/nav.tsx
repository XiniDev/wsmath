"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#testimonials", label: "Testimonials" }, // was #projects
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const ids = ["about", "testimonials"] as const; // updated for scrollspy
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onHashChange = () => setOpen(false);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const linkClass = (href: string) =>
    `transition ${active === href ? "text-neutral-900 font-medium" : "text-neutral-600"} hover:text-neutral-900`;

  return (
    <div className="sticky top-0 z-40 w-full border-b border-neutral-200/70 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <nav className="container mx-auto max-w-5xl px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2" aria-label="WSMath Home">
            <Image src="/icon.svg" alt="" width={24} height={24} className="h-6 w-6" />
            <span className="font-semibold tracking-tight">
              <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-sky-600 bg-clip-text text-transparent">
                WSMath
              </span>
            </span>
          </Link>

          {/* Desktop */}
          <div className="hidden items-center gap-6 md:flex">
            {LINKS.map(({ href, label }) => (
              <a key={href} href={href} className={linkClass(href)}>
                {label}
              </a>
            ))}
            {/* Keep a WhatsApp CTA in nav */}
            <button
              type="button"
              aria-label="Chat on WhatsApp"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-sky-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-violet-400/40"
            >
              <span className="relative h-6 w-6 overflow-hidden rounded-full bg-white ring-1 ring-neutral-200">
                <Image src="/whatsapp.svg" alt="" fill className="object-cover scale-[1.12]" />
              </span>
              WhatsApp
            </button>
          </div>

          {/* Mobile open */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-neutral-200 bg-white text-neutral-700 shadow-sm md:hidden"
            aria-label="Open menu"
            aria-controls="mobile-menu"
            aria-expanded={open}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-50 md:hidden transition-opacity ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div className="absolute inset-0 bg-black/25" onClick={() => setOpen(false)} />
        <div className="absolute inset-x-0 top-0 rounded-b-2xl border-b border-neutral-200 bg-white p-4 shadow-lg">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
              <Image src="/icon.svg" alt="" width={20} height={20} className="h-5 w-5" />
              <span className="font-semibold">WSMath</span>
            </Link>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-neutral-200 bg-white text-neutral-700"
              aria-label="Close menu"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <div className="mt-4 grid gap-2">
            {LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-base text-neutral-700 hover:bg-neutral-50"
              >
                {label}
              </a>
            ))}
            <button
              type="button"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-sky-600 px-4 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-violet-400/40"
            >
              <span className="relative h-6 w-6 overflow-hidden rounded-full bg-white ring-1 ring-neutral-200">
                <Image src="/whatsapp.svg" alt="" fill className="object-cover scale-[1.12]" />
              </span>
              WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
