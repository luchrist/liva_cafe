import Link from "next/link";
import { ArrowUpRight, InstagramLogo, MapPin, Phone } from "@phosphor-icons/react/dist/ssr";

const hours = [
  ["Montag", "08:30 — 18:00"],
  ["Dienstag", "08:30 — 18:00"],
  ["Mittwoch", "Ruhetag"],
  ["Donnerstag", "08:30 — 18:00"],
  ["Freitag", "08:30 — 18:00"],
  ["Samstag", "08:30 — 18:00"],
  ["Sonntag", "10:00 — 18:00"],
];

export function Footer() {
  return (
    <footer className="relative bg-[var(--color-matcha-darker)] text-[var(--color-cream-light)] overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(60% 40% at 20% 0%, rgba(244,238,213,0.18), transparent 60%)",
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 pt-24 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10">
          <div className="lg:col-span-5">
            <span className="eyebrow text-[var(--color-cream-light)]/60">
              Liva Cafe  ·  est. Landau
            </span>
            <h3 className="font-display mt-5 text-[clamp(2.5rem,4.6vw,4.5rem)] leading-[0.95] tracking-[-0.02em]">
              Vorbei&shy;kommen,<br /> bleiben dürfen.
            </h3>
            <p className="mt-7 max-w-[42ch] text-[var(--color-cream-light)]/70 leading-relaxed">
              Wir reservieren keine Tische auf 60 Minuten. Wer sitzt, der sitzt.
              Bring Zeit mit, oder lass dir welche schenken.
            </p>

            <Link
              href="/reservieren"
              className="mt-9 btn-pill bg-[var(--color-cream-light)] text-[var(--color-matcha-darker)] hover:bg-white"
            >
              Tisch sichern
              <span className="btn-pill__icon bg-[var(--color-matcha-deep)]/15">
                <ArrowUpRight size={15} className="text-[var(--color-matcha-darker)]" />
              </span>
            </Link>
          </div>

          <div className="lg:col-span-3">
            <div className="eyebrow text-[var(--color-cream-light)]/55 mb-5">Besuch</div>
            <a
              href="https://maps.google.com/?q=Westbahnstra%C3%9Fe+31+76829+Landau+in+der+Pfalz"
              target="_blank"
              rel="noreferrer noopener"
              className="group flex items-start gap-3 hover:text-[var(--color-cream-light)]"
            >
              <MapPin size={18} className="mt-1 shrink-0 text-[var(--color-cream-light)]/70" />
              <span className="leading-relaxed">
                Westbahnstraße 31<br />
                76829 Landau in der Pfalz
                <span className="block mt-1 text-[var(--color-cream-light)]/55 text-[13px]">
                  Auf Google Maps öffnen
                </span>
              </span>
            </a>
            <a
              href="tel:+4963412672250"
              className="mt-6 flex items-start gap-3 hover:text-[var(--color-cream-light)]"
            >
              <Phone size={18} className="mt-1 shrink-0 text-[var(--color-cream-light)]/70" />
              <span>+49 6341 2672250</span>
            </a>
            <a
              href="https://www.instagram.com/livasmatcha/"
              target="_blank"
              rel="noreferrer noopener"
              className="mt-6 flex items-start gap-3 hover:text-[var(--color-cream-light)]"
            >
              <InstagramLogo size={18} className="mt-1 shrink-0 text-[var(--color-cream-light)]/70" />
              <span>@livasmatcha</span>
            </a>
          </div>

          <div className="lg:col-span-4">
            <div className="eyebrow text-[var(--color-cream-light)]/55 mb-5">Öffnungszeiten</div>
            <ul className="divide-y divide-[var(--color-cream-light)]/12">
              {hours.map(([day, time]) => (
                <li
                  key={day}
                  className="flex items-baseline justify-between py-2.5 text-[15px]"
                >
                  <span className="text-[var(--color-cream-light)]/85">{day}</span>
                  <span className="font-mono text-[13px] text-[var(--color-cream-light)]/65">
                    {time}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-[var(--color-cream-light)]/12 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-[12px] text-[var(--color-cream-light)]/55">
          <span>© {new Date().getFullYear()} Liva Cafe · Landau in der Pfalz</span>
          <div className="flex items-center gap-6">
            <Link href="/impressum" className="hover:text-[var(--color-cream-light)]">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-[var(--color-cream-light)]">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
