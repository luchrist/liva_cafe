"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Calendar,
  CheckCircle,
  Clock,
  Users,
} from "@phosphor-icons/react";

const partySizes = ["1", "2", "3", "4", "5", "6", "7+"];
const occasions = [
  "Kein Anlass",
  "Geburtstag",
  "Brunch mit Freunden",
  "Date",
  "Geschäftlich",
];

export function ReservationForm() {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "10:00",
    party: "2",
    occasion: "Kein Anlass",
    note: "",
  });

  const handle =
    (key: keyof typeof data) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) => {
      setData((d) => ({ ...d, [key]: e.target.value }));
    };

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!data.name || !data.email || !data.date || !data.time) {
      setError("Bitte fülle Name, E-Mail, Datum und Uhrzeit aus.");
      return;
    }

    setSubmitting(true);
    // No backend yet — simulate submission so UX feels real and tactile.
    await new Promise((r) => setTimeout(r, 1100));
    setSubmitting(false);
    setDone(true);
  }

  if (done) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
        className="flex flex-col items-start"
      >
        <div className="h-12 w-12 rounded-full bg-[var(--color-matcha-deep)] text-[var(--color-cream-light)] flex items-center justify-center">
          <CheckCircle size={22} weight="regular" />
        </div>
        <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] mt-7 leading-[0.95] tracking-[-0.02em] max-w-[18ch]">
          Anfrage angekommen — wir melden uns kurz.
        </h2>
        <p className="mt-5 max-w-[55ch] text-[var(--color-ink-soft)] leading-relaxed">
          Wir bestätigen deine Reservierung in den nächsten zwei Stunden
          telefonisch oder per E-Mail. Bei dringenden Anfragen ruf uns gerne
          direkt an.
        </p>
        <a
          href="tel:+4963412672250"
          className="btn-pill mt-9 bg-[var(--color-matcha-deep)] text-[var(--color-cream-light)] hover:bg-[var(--color-matcha-darker)]"
        >
          +49 6341 2672250
          <span className="btn-pill__icon bg-[var(--color-cream-light)]/15">
            <ArrowUpRight size={15} className="text-[var(--color-cream-light)]" />
          </span>
        </a>
      </motion.div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-10">
      <div className="flex items-baseline justify-between flex-wrap gap-4">
        <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.75rem)] tracking-tight">
          Deine Reservierung
        </h2>
        <span className="font-mono text-[11px] tracking-widest text-[var(--color-ink-quiet)]">
          01 — anfrage
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Name" htmlFor="name">
          <input
            id="name"
            name="name"
            value={data.name}
            onChange={handle("name")}
            placeholder="Defne Yıldız"
            required
            className={inputCls}
          />
        </Field>

        <Field label="E-Mail" htmlFor="email">
          <input
            id="email"
            type="email"
            value={data.email}
            onChange={handle("email")}
            placeholder="defne@beispiel.de"
            required
            className={inputCls}
          />
        </Field>

        <Field label="Telefon (optional)" htmlFor="phone">
          <input
            id="phone"
            type="tel"
            value={data.phone}
            onChange={handle("phone")}
            placeholder="+49 …"
            className={inputCls}
          />
        </Field>

        <Field label="Anlass" htmlFor="occasion">
          <select
            id="occasion"
            value={data.occasion}
            onChange={handle("occasion")}
            className={selectCls}
          >
            {occasions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div>
        <div className="eyebrow text-[var(--color-matcha-deep)]/80 mb-5">
          Wann & wie viele
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <Field label="Datum" htmlFor="date" icon={<Calendar size={15} />}>
            <input
              id="date"
              type="date"
              value={data.date}
              onChange={handle("date")}
              required
              className={inputCls}
            />
          </Field>

          <Field label="Uhrzeit" htmlFor="time" icon={<Clock size={15} />}>
            <input
              id="time"
              type="time"
              value={data.time}
              onChange={handle("time")}
              min="08:30"
              max="17:30"
              required
              className={inputCls}
            />
          </Field>

          <Field label="Personen" htmlFor="party" icon={<Users size={15} />}>
            <div className="flex flex-wrap gap-1.5">
              {partySizes.map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setData((d) => ({ ...d, party: p }))}
                  className={`h-10 min-w-10 px-3 rounded-full text-[13px] tabular-nums transition-all border ${
                    data.party === p
                      ? "bg-[var(--color-matcha-deep)] text-[var(--color-cream-light)] border-[var(--color-matcha-deep)]"
                      : "bg-[var(--color-cream-paper)] text-[var(--color-ink)] border-[var(--color-hairline)] hover:bg-white"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </Field>
        </div>
      </div>

      <Field label="Sonstiges (Allergien, Wünsche)" htmlFor="note">
        <textarea
          id="note"
          rows={3}
          value={data.note}
          onChange={handle("note")}
          placeholder="Glutenfrei für eine Person, möglichst Fensterplatz …"
          className={`${inputCls} resize-none`}
        />
      </Field>

      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-[13px] text-[#a64238] bg-[#a64238]/8 border border-[#a64238]/15 rounded-2xl px-4 py-3"
          >
            {error}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 pt-2 border-t border-[var(--color-hairline)]">
        <p className="text-[13px] text-[var(--color-ink-quiet)] max-w-[44ch]">
          Mit dem Absenden stimmst du der Verarbeitung zur Reservierung zu.
          Bestätigung kommt per Mail oder Telefon.
        </p>
        <button
          type="submit"
          disabled={submitting}
          className="btn-pill bg-[var(--color-matcha-deep)] text-[var(--color-cream-light)] hover:bg-[var(--color-matcha-darker)] disabled:opacity-60"
        >
          {submitting ? "Wird gesendet …" : "Reservierung anfragen"}
          <span className="btn-pill__icon bg-[var(--color-cream-light)]/15">
            <ArrowUpRight size={15} className="text-[var(--color-cream-light)]" />
          </span>
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  icon,
  children,
}: {
  label: string;
  htmlFor: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="flex flex-col gap-2">
      <span className="flex items-center gap-1.5 eyebrow text-[var(--color-matcha-deep)]/80">
        {icon}
        {label}
      </span>
      {children}
    </label>
  );
}

const inputCls =
  "w-full bg-[var(--color-cream-paper)] border border-[var(--color-hairline)] rounded-2xl px-4 py-3 text-[15px] text-[var(--color-ink)] placeholder:text-[var(--color-ink-quiet)]/70 focus:outline-none focus:ring-2 focus:ring-[var(--color-matcha-deep)]/35 focus:border-[var(--color-matcha-deep)]/40 transition-all";

const selectCls = `${inputCls} appearance-none pr-10 bg-no-repeat bg-[length:14px_14px] bg-[right_1rem_center]`;
