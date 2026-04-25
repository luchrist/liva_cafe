import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { ReservationForm } from "@/components/reservation-form";
import { Clock, MapPin, Phone } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Reservieren — Liva Cafe",
  description:
    "Tisch reservieren bei Liva Cafe in Landau in der Pfalz. Frühstück bis 15:30, Mittwoch Ruhetag.",
};

export default function ReservePage() {
  return (
    <>
      <section className="pt-40 pb-20 md:pt-48 md:pb-24 bg-[var(--color-cream-paper)]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-end">
            <div className="lg:col-span-7">
              <Reveal>
                <span className="eyebrow text-[var(--color-matcha-deep)]/80">
                  Reservierung  ·  Westbahnstraße 31
                </span>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.92] tracking-[-0.03em] mt-5 max-w-[15ch]">
                  Wir halten dir
                  <span className="italic font-light"> einen Tisch</span> frei.
                </h1>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-7 max-w-[55ch] text-[var(--color-ink-soft)] text-lg leading-relaxed">
                  Wochenenden gehen früh raus — vor allem für das Liva-Brett.
                  Sag uns Bescheid, wir bestätigen telefonisch oder per Mail
                  innerhalb von zwei Stunden.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={0.2}>
                <div className="rounded-[2rem] p-1.5 bg-[var(--color-matcha-deep)]/10 border border-[var(--color-hairline)]">
                  <div className="rad-core bg-[var(--color-cream)] inset-hi p-7 space-y-5">
                    <Info
                      icon={<Clock size={18} className="text-[var(--color-matcha-deep)]" />}
                      title="Öffnungszeiten"
                    >
                      Mo, Di, Do, Fr, Sa  ·  08:30 — 18:00<br />
                      So  ·  10:00 — 18:00<br />
                      <span className="text-[var(--color-ink-quiet)]">Mi  ·  Ruhetag</span>
                    </Info>
                    <div className="h-px bg-[var(--color-hairline)]" />
                    <Info
                      icon={<MapPin size={18} className="text-[var(--color-matcha-deep)]" />}
                      title="Adresse"
                    >
                      Westbahnstraße 31<br />
                      76829 Landau in der Pfalz
                    </Info>
                    <div className="h-px bg-[var(--color-hairline)]" />
                    <Info
                      icon={<Phone size={18} className="text-[var(--color-matcha-deep)]" />}
                      title="Telefon"
                    >
                      <a
                        href="tel:+4963412672250"
                        className="hover:text-[var(--color-matcha-darker)]"
                      >
                        +49 6341 2672250
                      </a>
                    </Info>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-cream-paper)] pb-32">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="rounded-[2.5rem] p-1.5 bg-[var(--color-matcha-deep)]/10 border border-[var(--color-hairline)]">
            <div className="rad-core bg-[var(--color-cream-light)] inset-hi diffuse p-7 sm:p-12 lg:p-16">
              <Reveal>
                <ReservationForm />
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Info({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3.5">
      <div className="h-9 w-9 rounded-full bg-[var(--color-matcha)]/12 flex items-center justify-center shrink-0 mt-0.5">
        {icon}
      </div>
      <div>
        <div className="eyebrow text-[var(--color-matcha-deep)]/85">{title}</div>
        <div className="mt-1.5 text-[14.5px] text-[var(--color-ink)] leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}
