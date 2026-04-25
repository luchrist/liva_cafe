"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Quotes,
  Star,
} from "@phosphor-icons/react";
import { fiveStarReviews } from "@/data/reviews";

export function ReviewsCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const total = fiveStarReviews.length;
  const review = fiveStarReviews[index];

  const goTo = (next: number) => {
    setDirection(next > index ? 1 : -1);
    setIndex((next + total) % total);
  };

  useEffect(() => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % total);
    }, 7000);
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [index, total]);

  return (
    <section
      id="stimmen"
      className="bg-[var(--color-cream)] py-28 md:py-36 relative overflow-hidden"
    >
      {/* Soft sage glow */}
      <div
        aria-hidden
        className="absolute -top-40 -right-32 h-[420px] w-[420px] rounded-full bg-[var(--color-matcha)]/15 blur-[120px]"
      />
      <div
        aria-hidden
        className="absolute -bottom-32 -left-24 h-[380px] w-[380px] rounded-full bg-[var(--color-matcha-soft)]/30 blur-[120px]"
      />

      <div className="relative max-w-[1200px] mx-auto px-6 sm:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <span className="eyebrow text-[var(--color-matcha-deep)]/80">
              Google Bewertungen  ·  5 Sterne
            </span>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4.25rem)] leading-[0.95] tracking-[-0.02em] mt-4 max-w-[14ch]">
              Was Gäste am Brett sagen.
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span className="font-mono text-xs tracking-widest text-[var(--color-ink-quiet)]">
              {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
            <button
              aria-label="Vorherige Bewertung"
              onClick={() => goTo(index - 1)}
              className="h-11 w-11 rounded-full border border-[var(--color-hairline)] bg-[var(--color-cream-paper)] flex items-center justify-center text-[var(--color-ink)] hover:bg-white transition-colors active:scale-95"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              aria-label="Nächste Bewertung"
              onClick={() => goTo(index + 1)}
              className="h-11 w-11 rounded-full bg-[var(--color-matcha-deep)] text-[var(--color-cream-light)] flex items-center justify-center hover:bg-[var(--color-matcha-darker)] transition-colors active:scale-95"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        <div className="relative">
          <div
            className="rounded-[2.5rem] p-1.5 bg-[var(--color-matcha-deep)]/8 border border-[var(--color-hairline)]"
          >
            <div className="rad-core bg-[var(--color-cream-paper)] inset-hi diffuse">
              <div className="relative px-7 py-12 sm:px-12 sm:py-14 lg:px-16 lg:py-16 min-h-[440px] sm:min-h-[400px] flex flex-col">
                <Quotes
                  weight="fill"
                  className="absolute top-7 right-7 text-[var(--color-matcha)]/20 h-12 w-12 sm:h-16 sm:w-16"
                />
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={review.name}
                    custom={direction}
                    initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -16, filter: "blur(6px)" }}
                    transition={{ duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
                    className="flex-1 flex flex-col"
                  >
                    <div className="flex items-center gap-1.5 text-[var(--color-matcha-deep)]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} weight="fill" size={16} />
                      ))}
                    </div>
                    <blockquote className="mt-7 font-display text-[clamp(1.4rem,2.5vw,2.1rem)] leading-[1.2] tracking-[-0.01em] text-[var(--color-ink)] max-w-[34ch]">
                      &ldquo;{review.quote}&rdquo;
                    </blockquote>

                    <div className="mt-auto pt-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-full bg-[var(--color-matcha-deep)] text-[var(--color-cream-light)] flex items-center justify-center font-medium tracking-wide text-sm">
                          {review.initials}
                        </div>
                        <div>
                          <div className="text-[15px] text-[var(--color-ink)] font-medium">
                            {review.name}
                          </div>
                          <div className="text-[12.5px] text-[var(--color-ink-quiet)]">
                            {review.date}
                            {review.visit ? `  ·  ${review.visit}` : ""}
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1.5">
                        {review.highlights.map((h) => (
                          <span
                            key={h}
                            className="text-[11.5px] tracking-tight text-[var(--color-matcha-deep)] bg-[var(--color-matcha)]/10 px-3 py-1.5 rounded-full"
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2">
            {fiveStarReviews.map((_, i) => (
              <button
                key={i}
                aria-label={`Zu Bewertung ${i + 1}`}
                onClick={() => goTo(i)}
                className="h-1.5 rounded-full transition-all duration-500"
                style={{
                  width: i === index ? 32 : 14,
                  background:
                    i === index
                      ? "var(--color-matcha-deep)"
                      : "rgba(86, 104, 75, 0.22)",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
