import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Clock } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/reveal";
import { menu } from "@/data/menu";

export const metadata: Metadata = {
  title: "Speisekarte — Liva Cafe",
  description:
    "Frühstück, Matcha, Kaffee und süße Spezialitäten von Liva Cafe in Landau in der Pfalz.",
};

export default function MenuPage() {
  return (
    <>
      {/* HEADER */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-28 bg-[var(--color-matcha-deep)] text-[var(--color-cream-light)] relative overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-32 -right-20 h-[420px] w-[420px] rounded-full bg-[var(--color-cream-light)]/10 blur-[120px]"
        />
        <div className="relative max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
          <Reveal>
            <span className="eyebrow text-[var(--color-cream-light)]/60">
              Karte  ·  täglich frisch
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-display text-[clamp(3rem,8.5vw,7.5rem)] leading-[0.92] tracking-[-0.03em] mt-5 max-w-[14ch]">
              Was bei
              <span className="italic font-light"> uns </span>
              steht.
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 items-end">
              <p className="max-w-[55ch] text-[var(--color-cream-light)]/75 text-lg leading-relaxed">
                Türkisch-orientalisches Frühstück, Matcha aus Uji, türkischer
                Kaffee im Sand und ein Karottenkuchen, der besser ist als der
                deiner Mutter.
              </p>
              <nav
                aria-label="Kategorien"
                className="flex flex-wrap gap-2 md:justify-end"
              >
                {menu.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="px-3.5 py-2 rounded-full border border-[var(--color-cream-light)]/20 text-[13px] text-[var(--color-cream-light)]/85 hover:bg-[var(--color-cream-light)]/12 transition-colors"
                  >
                    {s.title}
                  </a>
                ))}
              </nav>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTIONS */}
      <div className="bg-[var(--color-cream-paper)] py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 space-y-28 md:space-y-36">
          {menu.map((section, idx) => (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-32"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
                <Reveal className="lg:col-span-4 lg:sticky lg:top-32 self-start">
                  <div>
                    <div className="flex items-center gap-3 text-[var(--color-matcha-deep)]/85">
                      <span className="font-mono text-[11px] tracking-[0.22em]">
                        0{idx + 1}
                      </span>
                      <span className="h-px flex-1 bg-[var(--color-matcha-deep)]/20" />
                    </div>
                    <h2 className="font-display text-[clamp(2.4rem,4.6vw,4rem)] leading-[0.95] tracking-[-0.02em] mt-5">
                      {section.title}
                    </h2>
                    <p className="mt-6 text-[var(--color-ink-soft)] text-[15px] leading-relaxed max-w-[40ch]">
                      {section.intro}
                    </p>
                    <div className="mt-7 inline-flex items-center gap-2.5 text-[12.5px] text-[var(--color-matcha-deep)] bg-[var(--color-matcha)]/10 px-3.5 py-2 rounded-full">
                      <Clock size={14} weight="regular" />
                      {section.serving}
                    </div>
                  </div>
                </Reveal>

                <div className="lg:col-span-8">
                  <ul className="divide-y divide-[var(--color-hairline)]">
                    {section.items.map((item, i) => (
                      <Reveal key={item.name} delay={i * 0.04}>
                        <li className="grid grid-cols-12 gap-4 py-7">
                          <div className="col-span-12 sm:col-span-9">
                            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1.5">
                              <h3 className="font-display text-[1.4rem] sm:text-[1.55rem] tracking-tight text-[var(--color-ink)]">
                                {item.name}
                              </h3>
                              {item.badge && (
                                <span className="text-[10.5px] uppercase tracking-[0.2em] text-[var(--color-matcha-deep)]">
                                  {item.badge}
                                </span>
                              )}
                            </div>
                            {item.description && (
                              <p className="mt-2 text-[14.5px] text-[var(--color-ink-soft)] leading-relaxed max-w-[60ch]">
                                {item.description}
                              </p>
                            )}
                          </div>
                          <div className="col-span-12 sm:col-span-3 sm:text-right">
                            {item.price && (
                              <span className="font-mono text-[14px] text-[var(--color-ink)] tabular-nums">
                                {item.price}
                                <span className="text-[var(--color-ink-quiet)] ml-0.5">
                                  €
                                </span>
                              </span>
                            )}
                          </div>
                        </li>
                      </Reveal>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* FOOTER CTA */}
      <section className="bg-[var(--color-cream-paper)] pb-32">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="rounded-[2.5rem] p-1.5 bg-[var(--color-matcha-deep)]/10 border border-[var(--color-hairline)]">
            <div className="rad-core bg-[var(--color-cream)] inset-hi diffuse p-10 sm:p-14 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div>
                <span className="eyebrow text-[var(--color-matcha-deep)]/85">
                  Allergien & Wünsche
                </span>
                <p className="mt-4 max-w-[55ch] text-[var(--color-ink-soft)] leading-relaxed">
                  Vegan, glutenfrei, laktosefrei — sag uns Bescheid, wir
                  finden eine Lösung. Reservierung empfehlen wir am Wochenende.
                </p>
              </div>
              <Link
                href="/reservieren"
                className="btn-pill bg-[var(--color-matcha-deep)] text-[var(--color-cream-light)] hover:bg-[var(--color-matcha-darker)] shrink-0"
              >
                Tisch reservieren
                <span className="btn-pill__icon bg-[var(--color-cream-light)]/15">
                  <ArrowUpRight
                    size={15}
                    className="text-[var(--color-cream-light)]"
                  />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
