"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export function FloatingCta() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 240);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-5 right-5 z-50 transition-opacity ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <button
        type="button"
        aria-label="Chat on WhatsApp"
        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-sky-600 px-4 py-3 text-sm font-medium text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-violet-400/40"
      >
        <span className="relative h-5 w-5 overflow-hidden rounded-full bg-white ring-1 ring-neutral-200">
          <Image src="/whatsapp.svg" alt="" aria-hidden fill className="object-contain" />
        </span>
        Chat on WhatsApp
      </button>
    </div>
  );
}
