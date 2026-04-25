"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValueEvent,
} from "framer-motion";
import { ArrowDown, ArrowUpRight } from "@phosphor-icons/react";
import Link from "next/link";

/**
 * Scroll-scrubbed hero.
 *
 * The clip in /public/hero/hero-scrub.mp4 is encoded with every-frame
 * keyframes so seeking to any timestamp is instant — that's what lets
 * the user "scrub" through the matcha + ice-cube + splash sequence by
 * scrolling. As they scroll the 280vh stage, video.currentTime is
 * driven proportionally via requestAnimationFrame.
 *
 * If the file ever fails to load, a CSS fallback (cup + cube + droplets)
 * scrubs with scroll instead.
 */
export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const rafRef = useRef<number | null>(null);
  const targetTimeRef = useRef(0);
  const [videoReady, setVideoReady] = useState(false);
  const [videoMissing, setVideoMissing] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  // Touch devices (iPad, phones) get a tighter spring: their momentum scroll
  // is already smooth, so the default settling tail just keeps firing video
  // seeks after the finger lifts — which on iPad's slower decoder reads as lag.
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(hover: none) and (pointer: coarse)");
    const update = () => setIsTouch(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: isTouch ? 260 : 110,
    damping: isTouch ? 44 : 26,
    mass: isTouch ? 0.15 : 0.35,
  });

  // Headline rises and slightly fades as you scroll into the splash
  const titleY = useTransform(smoothProgress, [0, 1], [0, -120]);
  const titleOpacity = useTransform(smoothProgress, [0, 0.55, 1], [1, 0.85, 0]);
  const subY = useTransform(smoothProgress, [0, 1], [0, -60]);
  const ctaOpacity = useTransform(smoothProgress, [0, 0.7, 1], [1, 0.6, 0]);

  // Fallback CSS animation: ice cube falls (only used if the video can't load)
  const cubeY = useTransform(smoothProgress, [0, 0.55, 1], ["-65vh", "0vh", "2vh"]);
  const cubeRotate = useTransform(smoothProgress, [0, 1], [-12, 18]);
  const cupTilt = useTransform(smoothProgress, [0.4, 0.7, 1], [0, -3, -1.5]);

  // Drive video.currentTime from scroll progress.
  // We accumulate the latest target time and apply it inside an rAF loop,
  // so seek requests don't pile up and we always paint at most one per frame.
  useMotionValueEvent(smoothProgress, "change", (v) => {
    const video = videoRef.current;
    if (!video || !videoReady || videoMissing) return;
    const duration = video.duration;
    if (!Number.isFinite(duration) || duration === 0) return;
    targetTimeRef.current = Math.max(0, Math.min(1, v)) * duration;
    if (rafRef.current === null) {
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        const node = videoRef.current;
        if (!node) return;
        const t = targetTimeRef.current;
        if (Math.abs(node.currentTime - t) > 0.005) {
          node.currentTime = t;
        }
      });
    }
  });

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onMeta = () => {
      setVideoReady(true);
      // Pin to the first frame so iOS Safari renders something before any seek.
      try {
        v.currentTime = 0;
      } catch {}
    };
    const onLoadedData = () => setVideoReady(true);
    const onErr = () => setVideoMissing(true);
    v.addEventListener("loadedmetadata", onMeta);
    v.addEventListener("loadeddata", onLoadedData);
    v.addEventListener("error", onErr);
    if (v.readyState >= 1) onMeta();
    // Cold-cache nudge: kick off the network fetch immediately on first mount,
    // even if the browser would otherwise wait for an interaction.
    try {
      v.load();
    } catch {}
    return () => {
      v.removeEventListener("loadedmetadata", onMeta);
      v.removeEventListener("loadeddata", onLoadedData);
      v.removeEventListener("error", onErr);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[180vh] sm:h-[210vh] lg:h-[280vh] bg-[var(--color-hero-bg)]"
      aria-label="Liva Cafe — die Eiswürfel-Sequenz"
    >
      {/* Sticky stage. Bg matches the video so any micro-gap or pre-paint
          frame still reads as one surface with the rest of the page. */}
      <div className="sticky top-0 h-[100dvh] overflow-hidden bg-[var(--color-hero-bg)]">
        {/* Full-bleed video — object-cover, centered. The crop is whatever
            the viewport aspect dictates; the per-frame bg drift sits inside
            the cropped area, so it's never visible against the page. */}
        <video
          ref={videoRef}
          src="/hero/hero-scrub.mp4"
          poster="/hero/hero-poster.jpg"
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          disableRemotePlayback
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover object-center"
          style={{ opacity: videoMissing ? 0 : 1 }}
        />

        {/* Readability scrims — tinted to the video's cream so they don't
            wash the cup grey. Top scrim guards the nav, bottom scrim
            guards the headline + CTAs. */}
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-40 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(46,58,40,0.55), rgba(46,58,40,0))",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-[58dvh] pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(33,42,28,0.78) 0%, rgba(33,42,28,0.55) 35%, rgba(33,42,28,0.18) 70%, rgba(33,42,28,0) 100%)",
          }}
        />

        {/* CSS fallback if the video ever fails to load */}
        {videoMissing && (
          <div className="absolute inset-0">
            <motion.div
              style={{ rotate: cupTilt }}
              className="absolute left-1/2 bottom-[18%] -translate-x-1/2"
            >
              <div className="relative w-[260px] h-[300px] sm:w-[320px] sm:h-[360px]">
                <div className="absolute -top-3 left-3 right-3 h-7 rounded-[50%] bg-[var(--color-matcha-soft)] opacity-90" />
                <div
                  className="absolute inset-0 rounded-b-[120px] rounded-t-[16px] bg-[var(--color-cream-light)] shadow-[inset_0_-30px_60px_rgba(56,68,48,0.18)]"
                  style={{
                    clipPath: "polygon(8% 0, 92% 0, 84% 100%, 16% 100%)",
                  }}
                />
                <div className="absolute left-[10%] right-[10%] top-[6%] h-12 rounded-[50%] bg-[var(--color-matcha)] shadow-[inset_0_4px_8px_rgba(0,0,0,0.18)]" />
              </div>
            </motion.div>
            <motion.div
              style={{ y: cubeY, rotate: cubeRotate }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
            >
              <div className="relative w-32 h-32 sm:w-40 sm:h-40">
                <div className="absolute inset-0 rounded-[18%] bg-gradient-to-br from-white/85 via-white/55 to-white/20 backdrop-blur-md border border-white/40 shadow-[0_30px_60px_-10px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.6)]" />
              </div>
            </motion.div>
          </div>
        )}

        {/* Foreground type — sits in the bottom scrim, always reads as cream */}
        <div className="relative z-20 h-full flex flex-col">
          <div className="flex-1 flex flex-col justify-end pb-[14vh] sm:pb-[12vh] px-6 sm:px-10 lg:px-16">
            <motion.div
              style={{ y: titleY, opacity: titleOpacity }}
              className="max-w-[1400px] mx-auto w-full"
            >
              <span
                className="hidden sm:inline-flex items-center gap-2.5 rounded-full border border-[var(--color-cream-light)]/25 bg-[rgba(33,42,28,0.45)] backdrop-blur-md pl-3 pr-4 py-1.5 text-[12.5px] tracking-[0.14em] uppercase font-medium text-[var(--color-cream-light)]"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-cream-light)]" />
                Westbahnstraße 31  ·  Landau i. d. Pfalz
              </span>
              <h1
                className="font-display sm:mt-6 text-[clamp(3rem,12vw,8.5rem)] leading-[0.92] tracking-[-0.03em] text-[var(--color-cream-light)]"
                style={{ textShadow: "0 2px 28px rgba(20,28,16,0.45)" }}
              >
                Sage. Slow.
                <br />
                <span className="italic font-light">Spürbar.</span>
              </h1>
            </motion.div>

            <motion.div
              style={{ y: subY, opacity: ctaOpacity }}
              className="max-w-[1400px] mx-auto w-full mt-9 hidden sm:flex sm:flex-row sm:items-end sm:justify-between gap-6"
            >
              <p
                className="max-w-[38ch] text-[var(--color-cream-light)]/90 text-base sm:text-lg leading-relaxed"
                style={{ textShadow: "0 1px 12px rgba(20,28,16,0.45)" }}
              >
                Türkisch&#8209;orientalisches Frühstück bis 15:30,
                ein Matcha, der nach Frühling schmeckt — und Zeit, die
                stehenbleiben darf.
              </p>
              <div className="flex items-center gap-3">
                <Link
                  href="/reservieren"
                  className="btn-pill bg-[var(--color-cream-light)] text-[var(--color-matcha-darker)] hover:bg-white"
                >
                  Tisch sichern
                  <span className="btn-pill__icon bg-[var(--color-matcha-deep)]/10">
                    <ArrowUpRight size={15} className="text-[var(--color-matcha-darker)]" />
                  </span>
                </Link>
                <Link
                  href="/speisekarte"
                  className="btn-pill border border-[var(--color-cream-light)]/45 text-[var(--color-cream-light)] hover:bg-[var(--color-cream-light)]/12"
                >
                  Zur Karte
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Scroll hint */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            style={{ opacity: ctaOpacity }}
            className="absolute bottom-7 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-[var(--color-cream-light)]/70"
          >
            <span className="eyebrow">scroll</span>
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown size={16} weight="regular" />
            </motion.span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
