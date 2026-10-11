
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const testimonials = [
  {
    quote:
      "Arco Living transformed our space with beautiful details that feel both functional and timeless. The entire experience was exceptional.",
    name: "Sophie L.",
    role: "Interior Design Client",
  },
  {
    quote:
      "Every corner feels intentional, warm, and completely personal. They understood our vision and brought it to life beautifully.",
    name: "Daniel R.",
    role: "Residential Client",
  },
  {
    quote:
      "The attention to materials, lighting, and detail made all the difference. Our home finally feels like us.",
    name: "Ananya M.",
    role: "Homeowner",
  },
  {
    quote:
      "A thoughtful process from start to finish. The result is elegant, practical, and a pleasure to live in every day.",
    name: "Meera S.",
    role: "Interior Design Client",
  },
];

export default function ProjectsClosingSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
  const interval = setInterval(() => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  }, 8500);

  return () => clearInterval(interval);
}, []);

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section className="bg-[#F0E9E3] px-4 py-16 md:px-10 md:py-24 lg:px-16">

      {/* INSPIRATION + TESTIMONIAL */}
      <div className="grid grid-cols-1 overflow-hidden lg:grid-cols-2">

        {/* LEFT: BLACK INSPIRATION PANEL */}
        <div className="grid grid-cols-1 bg-[#111111] text-white sm:grid-cols-2">

          {/* TEXT */}
          <div className="flex flex-col justify-center p-7 md:p-10 lg:p-12">
            <p className="mb-5 font-[family-name:var(--font-dm-sans)] text-[10px] tracking-[0.2em] text-white/60">
              INSPO
            </p>

            <h2 className="mb-5 font-[family-name:var(--font-manrope)] text-3xl font-medium leading-tight tracking-[-0.04em] md:text-4xl">
              Design
              <br />
              inspiration
            </h2>

            <p className="mb-7 max-w-xs font-[family-name:var(--font-dm-sans)] text-sm leading-relaxed text-white/70">
              Explore ideas and trends to create a home that reflects your
              style and the way you live.
            </p>

            <a
              href="/magazine"
              className="inline-flex w-fit items-center gap-3 font-[family-name:var(--font-dm-sans)] text-[10px] tracking-[0.12em] text-white transition-opacity hover:opacity-60"
            >
              VISIT OUR MAGAZINE
              <span aria-hidden="true" className="text-base">↗</span>
            </a>
          </div>

          {/* IMAGE */}
          <div className="relative min-h-[260px] sm:min-h-full">
            <Image
              src="/images/inspiration1.png"
              alt="Warm, thoughtfully designed living space"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* RIGHT: TESTIMONIAL */}
        <div className="flex min-h-[380px] flex-col justify-between bg-[#E8DED2] px-7 py-10 md:min-h-[420px] md:px-12 md:py-14 lg:min-h-[440px] lg:px-16">

          <span
            aria-hidden="true"
            className="mb-3 font-serif text-5xl leading-none text-[#A99A88]"
          >
            “
          </span>

          <div aria-live="polite" aria-atomic="true">
            <p
  key={activeIndex}
  className="min-h-[120px] max-w-xl animate-testimonial-fade font-[family-name:var(--font-manrope)] text-xl leading-relaxed tracking-[-0.02em] text-[#302A25] md:min-h-[100px] md:text-2xl"
>
  {activeTestimonial.quote}
</p>

            <div className="mb-5 mt-7 h-px w-8 bg-[#A99A88]" />

            <p className="font-[family-name:var(--font-dm-sans)] text-xs font-semibold uppercase tracking-[0.12em] text-[#302A25]">
              {activeTestimonial.name}
            </p>

            <p className="mt-1 font-[family-name:var(--font-dm-sans)] text-xs text-[#74685E]">
              {activeTestimonial.role}
            </p>
          </div>

          {/* TESTIMONIAL INDICATORS */}
          <div className="mt-8 flex items-center gap-3 lg:justify-end">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.name}
                type="button"
                aria-label={`Show testimonial ${index + 1}`}
                aria-pressed={activeIndex === index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "w-2 bg-[#302A25]"
                    : "w-2 bg-[#BFB2A5] hover:bg-[#807366]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* NEWSLETTER STRIP */}
      <div className="grid grid-cols-1 items-center gap-7 border-t border-[#D9CEC4] px-4 py-9 md:grid-cols-[1fr_1.2fr] md:px-10 lg:px-16">

        {/* NEWSLETTER INTRO */}
        <div className="flex items-center gap-5">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#111111] text-white">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <rect x="3" y="5" width="18" height="14" rx="1" />
              <path d="m4 7 8 6 8-6" />
            </svg>
          </div>

          <div>
            <h3 className="mb-1 font-[family-name:var(--font-dm-sans)] text-xs font-semibold uppercase tracking-[0.1em] text-[#302A25]">
              Be the first to know
            </h3>

            <p className="max-w-sm font-[family-name:var(--font-dm-sans)] text-xs leading-relaxed text-[#74685E]">
              Discover new collections, thoughtful spaces, and design
              inspiration delivered to your inbox.
            </p>
          </div>
        </div>

        {/* EMAIL FORM */}
        <form
          action="#"
          onSubmit={(event) => event.preventDefault()}
          className="flex w-full flex-col gap-3 sm:flex-row"
        >
          <label htmlFor="projects-email" className="sr-only">
            Your email address
          </label>

          <input
            id="projects-email"
            type="email"
            placeholder="Enter your email"
            required
            className="min-w-0 flex-1 border border-[#CFC2B6] bg-transparent px-4 py-3 font-[family-name:var(--font-dm-sans)] text-sm text-[#302A25] outline-none placeholder:text-[#96897D] focus:border-[#302A25]"
          />

          <button
            type="submit"
            className="bg-[#111111] px-7 py-3 font-[family-name:var(--font-dm-sans)] text-xs uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#39332E]"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
