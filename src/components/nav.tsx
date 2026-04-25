"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowUpRight, List, X } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "./logo";

const links = [
  { href: "/", label: "Start" },
  { href: "/speisekarte", label: "Speisekarte" },
  { href: "/reservieren", label: "Reservieren" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);

  // Close the mobile menu when the route actually changes (no effect needed).
  if (lastPath !== pathname) {
    setLastPath(pathname);
    if (open) setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 flex justify-center pt-5 px-4 pointer-events-none">
        <motion.div
          initial={false}
          animate={{
            width: scrolled ? "min(560px, 92vw)" : "min(720px, 96vw)",
            backgroundColor: scrolled
              ? "rgba(253, 250, 238, 0.78)"
              : "rgba(253, 250, 238, 0.45)",
          }}
          transition={{ type: "spring", stiffness: 140, damping: 22 }}
          className="pointer-events-auto rounded-full border border-[var(--color-hairline)] backdrop-blur-2xl shadow-[0_18px_40px_-22px_rgba(56,68,48,0.30)] inset-hi"
        >
          <div className="flex items-center justify-between gap-2 pl-3 pr-2 py-2">
            <Link
              href="/"
              aria-label="Liva Cafe — Startseite"
              className="flex items-center gap-2.5 pr-3"
            >
              <Logo className="h-9 w-9" />
              <span className="font-display text-[17px] tracking-tight text-[var(--color-ink)]">
                Liva Cafe
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              {links.map((l) => {
                const active = pathname === l.href;
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="relative px-3.5 py-2 text-[13.5px] tracking-tight text-[var(--color-ink-soft)] hover:text-[var(--color-ink)] transition-colors"
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-[var(--color-matcha)]/12"
                        transition={{ type: "spring", stiffness: 200, damping: 26 }}
                      />
                    )}
                    <span className="relative">{l.label}</span>
                  </Link>
                );
              })}
            </nav>

            <Link
              href="/reservieren"
              className="hidden md:inline-flex btn-pill bg-[var(--color-matcha-deep)] text-[var(--color-cream-light)] hover:bg-[var(--color-matcha-darker)]"
            >
              Tisch sichern
              <span className="btn-pill__icon bg-[var(--color-cream-light)]/15">
                <ArrowUpRight size={15} weight="regular" className="text-[var(--color-cream-light)]" />
              </span>
            </Link>

            <button
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? "Menü schließen" : "Menü öffnen"}
              aria-expanded={open}
              className="md:hidden h-10 w-10 rounded-full flex items-center justify-center text-[var(--color-ink)] hover:bg-[var(--color-matcha)]/10 transition-colors"
            >
              <AnimatePresence initial={false} mode="wait">
                {open ? (
                  <motion.span
                    key="x"
                    initial={{ rotate: -45, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 45, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <X size={20} weight="regular" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="m"
                    initial={{ rotate: 45, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -45, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <List size={20} weight="regular" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </motion.div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 z-30 md:hidden bg-[var(--color-matcha-darker)]/85 backdrop-blur-3xl"
          >
            <div className="h-full flex flex-col justify-end pb-12 px-6 pt-28">
              <nav className="flex flex-col gap-2">
                {links.map((l, i) => (
                  <motion.div
                    key={l.href}
                    initial={{ y: 24, opacity: 0, filter: "blur(6px)" }}
                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    transition={{
                      duration: 0.7,
                      delay: 0.08 * i,
                      ease: [0.32, 0.72, 0, 1],
                    }}
                  >
                    <Link
                      href={l.href}
                      className="flex items-baseline justify-between border-b border-[var(--color-cream-light)]/15 py-5 group"
                    >
                      <span className="font-display text-4xl text-[var(--color-cream-light)] tracking-tight">
                        {l.label}
                      </span>
                      <span className="text-[var(--color-cream-light)]/60 text-xs tracking-[0.3em] uppercase">
                        0{i + 1}
                      </span>
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.32, ease: [0.32, 0.72, 0, 1] }}
                  className="pt-10 text-[var(--color-cream-light)]/70 text-sm leading-relaxed"
                >
                  Westbahnstraße 31<br />
                  76829 Landau in der Pfalz<br />
                  <a href="tel:+4963412672250" className="underline underline-offset-4 mt-2 inline-block">
                    +49 6341 2672250
                  </a>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
