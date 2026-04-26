import Link from "next/link";
import {
  ArrowUpRight,
  ImageIcon,
  Clock,
  Leaf,
  MapPin,
  Sparkle,
} from "@phosphor-icons/react/dist/ssr";
import { Hero } from "@/components/hero";
import { Reveal } from "@/components/reveal";
import { Ticker } from "@/components/ticker";
import { ReviewsCarousel } from "@/components/reviews-carousel";
import { menu } from "@/data/menu";

export default function Home() {
  const previewSections = menu.filter((s) =>
    ["fruehstueck", "matcha", "feines"].includes(s.id),
  );

  return (
    <>
      <Hero />

      {/* PHILOSOPHY — split editorial */}
      <section
        id="philosophie"
        className="bg-[var(--color-cream-paper)] py-28 md:py-40"
      >
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-end">
            <div className="lg:col-span-5">
              <Reveal>
                <span className="eyebrow text-[var(--color-matcha-deep)]/80">
                  Über Liva Cafe
                </span>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="font-display text-[clamp(2.6rem,5.5vw,5rem)] leading-[0.92] tracking-[-0.025em] mt-5 max-w-[14ch]">
                  Frühstück für
                  <span className="italic font-light"> lange </span>
                  Vormittage.
                </h2>
              </Reveal>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <Reveal delay={0.1}>
                <p className="text-[var(--color-ink-soft)] text-lg leading-relaxed max-w-[60ch]">
                  Wir kochen das, was unsere Familie früh am Morgen aufgetischt
                  hat — kleine Schälchen, viel Brot, das Beste aus dem Markt
                  nebenan. Dazu Matcha aus Uji, jeden Tag frisch geschöpft —
                  und niemand, der dich vom Tisch scheucht.
                </p>
              </Reveal>
              <Reveal delay={0.18}>
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <Tile
                    icon={<Leaf size={18} weight="regular" />}
                    label="Ceremonial Grade"
                    value="Uji, Japan"
                  />
                  <Tile
                    icon={<Clock size={18} weight="regular" />}
                    label="Frühstück bis"
                    value="15:30"
                  />
                  <Tile
                    icon={<Sparkle size={18} weight="regular" />}
                    label="Hausgemacht"
                    value="von 4:30 Uhr"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* KINETIC TICKER */}
      <Ticker
        words={[
          "matcha",
          "frühstück",
          "kahve",
          "künefe",
          "çay",
          "sage. slow. spürbar.",
        ]}
      />

      {/* BREAKFAST FEATURE — asymmetric bento */}
      <section className="bg-[var(--color-cream-paper)] py-28 md:py-36">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
              <div>
                <span className="eyebrow text-[var(--color-matcha-deep)]/80">
                  Das Liva-Brett
                </span>
                <h2 className="font-display text-[clamp(2.4rem,5vw,4.5rem)] mt-4 leading-[0.95] tracking-[-0.02em] max-w-[14ch]">
                  Acht Schälchen,<br /> ein Vormittag.
                </h2>
              </div>
              <p className="max-w-[42ch] text-[var(--color-ink-soft)] leading-relaxed">
                Unsere Signature-Tafel. Hausgemachte Aufstriche, zwei Käse,
                Oliven aus Ayvalık, Sucuk aus Şereflikoçhisar, Honig aus dem
                Pfälzerwald. Für zwei. Reserviere lieber vor.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-12 gap-4 md:gap-6">
            {/* Big card */}
            <Reveal className="col-span-12 lg:col-span-8 row-span-2">
              <div className="rounded-[2.5rem] p-1.5 bg-[var(--color-matcha-deep)]/10 border border-[var(--color-hairline)] h-full">
                <div className="rad-core h-full bg-[var(--color-matcha-deep)] inset-hi diffuse text-[var(--color-cream-light)] p-10 lg:p-14 flex flex-col min-h-[440px]">
                  <span className="eyebrow text-[var(--color-cream-light)]/60">
                    Hausspezialität
                  </span>
                  <h3 className="font-display text-[clamp(2rem,3.6vw,3.6rem)] leading-[1.02] tracking-[-0.02em] mt-5 max-w-[18ch]">
                    Brot, Käse, Sucuk, Eier, Honig, Granatapfel, Kaymak, Çay.
                  </h3>
                  <div className="mt-auto pt-10 flex flex-wrap items-end justify-between gap-6">
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Acılı Ezme",
                        "Bal Kaymak",
                        "Sucuklu Yumurta",
                        "Patlıcan",
                        "Kaşar",
                        "Beyaz Peynir",
                      ].map((n) => (
                        <span
                          key={n}
                          className="text-[12px] px-3 py-1.5 rounded-full bg-[var(--color-cream-light)]/12 border border-[var(--color-cream-light)]/15"
                        >
                          {n}
                        </span>
                      ))}
                    </div>
                    <div>
                      <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-[var(--color-cream-light)]/55">
                        ab
                      </div>
                      <div className="font-display text-5xl mt-1 leading-none">
                        32<span className="text-[var(--color-cream-light)]/55 text-3xl ml-1">€</span>
                      </div>
                      <div className="text-xs text-[var(--color-cream-light)]/55 mt-1">für zwei</div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.05} className="col-span-12 sm:col-span-6 lg:col-span-4">
              <BentoCard
                eyebrow="Saison"
                title="Iced Matcha — Spring Edition"
                copy="Erdbeere, Yuzu, Hafermilch, Ceremonial Matcha. Nur bis Juni."
                stat={{ label: "im Glas", value: "6,80 €" }}
                tone="cream"
              />
            </Reveal>

            <Reveal delay={0.1} className="col-span-12 sm:col-span-6 lg:col-span-4">
              <BentoCard
                eyebrow="Open daily"
                title="Türk Kahvesi"
                copy="Im Sand gekocht — mit lokum & einem Glas Wasser. Wie es sich gehört."
                stat={{ label: "tradition", value: "4,20 €" }}
                tone="sage"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* MENU PREVIEW */}
      <section className="bg-[var(--color-cream-paper)] py-24 md:py-36">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <span className="eyebrow text-[var(--color-matcha-deep)]/80">
                  Auszug aus der Karte
                </span>
                <h2 className="font-display text-[clamp(2.4rem,5vw,4.25rem)] mt-4 leading-[0.95] tracking-[-0.02em]">
                  Was du heute essen <span className="italic font-light">solltest.</span>
                </h2>
              </div>
              <Link
                href="/speisekarte"
                className="btn-pill bg-[var(--color-matcha-deep)] text-[var(--color-cream-light)] hover:bg-[var(--color-matcha-darker)] shrink-0"
              >
                Vollständige Karte
                <span className="btn-pill__icon bg-[var(--color-cream-light)]/12">
                  <ArrowUpRight size={15} className="text-[var(--color-cream-light)]" />
                </span>
              </Link>
            </div>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {previewSections.map((section, idx) => (
              <Reveal key={section.id} delay={0.06 * idx}>
                <div>
                  <div className="flex items-baseline justify-between border-b border-[var(--color-hairline)] pb-4">
                    <h3 className="font-display text-2xl tracking-tight">
                      {section.title}
                    </h3>
                    <span className="font-mono text-[11px] tracking-widest text-[var(--color-ink-quiet)]">
                      0{idx + 1}
                    </span>
                  </div>
                  <ul className="mt-5 divide-y divide-[var(--color-hairline)]">
                    {section.items.slice(0, 4).map((item) => (
                      <li
                        key={item.name}
                        className="py-4 flex items-start gap-4"
                      >
                        <div className="flex-1">
                          <div className="flex items-baseline gap-3">
                            <span className="text-[15px] text-[var(--color-ink)]">
                              {item.name}
                            </span>
                            {item.badge && (
                              <span className="text-[10px] uppercase tracking-[0.18em] text-[var(--color-matcha-deep)]">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          {item.description && (
                            <p className="mt-1 text-[13px] text-[var(--color-ink-quiet)] leading-relaxed max-w-[42ch]">
                              {item.description}
                            </p>
                          )}
                        </div>
                        {item.price && (
                          <span className="font-mono text-[13px] text-[var(--color-ink-soft)] tabular-nums shrink-0">
                            {item.price}€
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <ReviewsCarousel />

      {/* VISIT CTA */}
      <section className="relative bg-[var(--color-cream-paper)] py-28 md:py-36 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="rounded-[2.75rem] p-1.5 bg-[var(--color-matcha-deep)]/10 border border-[var(--color-hairline)]">
            <div
              className="rad-core relative overflow-hidden p-10 sm:p-14 lg:p-20 inset-hi diffuse"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-matcha-deep) 0%, var(--color-matcha-darker) 100%)",
              }}
            >
              <div
                aria-hidden
                className="absolute -top-20 -right-20 h-[360px] w-[360px] rounded-full bg-[var(--color-cream-light)]/10 blur-[100px]"
              />
              <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-end text-[var(--color-cream-light)]">
                <div className="lg:col-span-7">
                  <span className="eyebrow text-[var(--color-cream-light)]/55">
                    Vorbeikommen
                  </span>
                  <h2 className="font-display text-[clamp(2.4rem,5.6vw,5rem)] leading-[0.95] tracking-[-0.025em] mt-5 max-w-[16ch]">
                    Reservier dir ein Brett — wir halten den Tisch warm.
                  </h2>
                </div>
                <div className="lg:col-span-5 flex flex-col gap-6">
                  <div className="flex items-start gap-3 text-[var(--color-cream-light)]/80">
                    <MapPin size={20} className="mt-1 shrink-0" />
                    <div>
                      <div className="text-[var(--color-cream-light)]">
                        Westbahnstraße 31
                      </div>
                      <div>76829 Landau in der Pfalz</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="/reservieren"
                      className="btn-pill bg-[var(--color-cream-light)] text-[var(--color-matcha-darker)] hover:bg-white"
                    >
                      Tisch reservieren
                      <span className="btn-pill__icon bg-[var(--color-matcha-deep)]/15">
                        <ArrowUpRight size={15} className="text-[var(--color-matcha-darker)]" />
                      </span>
                    </Link>
                    <a
                      href="tel:+4963412672250"
                      className="btn-pill border border-[var(--color-cream-light)]/35 text-[var(--color-cream-light)] hover:bg-[var(--color-cream-light)]/10"
                    >
                      Anrufen
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EINBLICKE — gallery */}
      <section
        id="einblicke"
        className="bg-[var(--color-cream-paper)] py-28 md:py-36"
      >
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
              <div>
                <span className="eyebrow text-[var(--color-matcha-deep)]/80">
                  Einblicke
                </span>
                <h2 className="font-display text-[clamp(2.4rem,5vw,4.5rem)] mt-4 leading-[0.95] tracking-[-0.02em] max-w-[16ch]">
                  Ein Blick durch
                  <span className="italic font-light"> unser </span>
                  Fenster.
                </h2>
              </div>
              <p className="max-w-[42ch] text-[var(--color-ink-soft)] leading-relaxed">
                Vom Matcha am Morgen bis zum letzten Çay. Kleine Momente aus dem
                Liva — Tisch, Tafel, Hände, Licht.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-12 auto-rows-[120px] sm:auto-rows-[140px] md:auto-rows-[160px] gap-4 md:gap-6">
            <Reveal className="col-span-12 sm:col-span-8 row-span-3">
              <GalleryTile caption="Liva-Brett, frühmorgens" tone="sage" />
            </Reveal>
            <Reveal delay={0.05} className="col-span-6 sm:col-span-4 row-span-2">
              <GalleryTile caption="Matcha aus Uji" tone="deep" />
            </Reveal>
            <Reveal delay={0.1} className="col-span-6 sm:col-span-4 row-span-2">
              <GalleryTile caption="Westbahnstraße 31" tone="cream" />
            </Reveal>
            <Reveal delay={0.15} className="col-span-6 sm:col-span-4 row-span-2">
              <GalleryTile caption="Künefe, frisch aus dem Ofen" tone="sage" />
            </Reveal>
            <Reveal delay={0.2} className="col-span-6 sm:col-span-4 row-span-3">
              <GalleryTile caption="Türk Kahvesi im Sand" tone="deep" />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

function Tile({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-[1.5rem] p-1 bg-[var(--color-matcha-deep)]/8 border border-[var(--color-hairline)]">
      <div className="rounded-[calc(1.5rem-0.25rem)] bg-[var(--color-cream-light)] inset-hi p-5">
        <div className="flex items-center gap-2 text-[var(--color-matcha-deep)]/85">
          {icon}
          <span className="eyebrow">{label}</span>
        </div>
        <div className="font-display text-2xl tracking-tight mt-3 text-[var(--color-ink)]">
          {value}
        </div>
      </div>
    </div>
  );
}

function GalleryTile({
  caption,
  tone,
}: {
  caption: string;
  tone: "deep" | "sage" | "cream";
}) {
  const surface =
    tone === "deep"
      ? "bg-[var(--color-matcha-deep)] text-[var(--color-cream-light)]"
      : tone === "sage"
        ? "bg-[var(--color-matcha-soft)]/45 text-[var(--color-ink)]"
        : "bg-[var(--color-cream)] text-[var(--color-ink)]";

  const iconTone =
    tone === "deep"
      ? "text-[var(--color-cream-light)]/45"
      : "text-[var(--color-matcha-deep)]/45";

  const captionTone =
    tone === "deep"
      ? "text-[var(--color-cream-light)]/70"
      : "text-[var(--color-ink-soft)]";

  return (
    <div className="rounded-[2rem] p-1.5 bg-[var(--color-matcha-deep)]/10 border border-[var(--color-hairline)] h-full">
      <div
        className={`rad-core h-full w-full inset-hi diffuse relative overflow-hidden flex items-end p-6 ${surface}`}
      >
        <ImageIcon
          size={28}
          weight="thin"
          className={`absolute top-6 left-6 ${iconTone}`}
        />
        <span
          className={`font-mono text-[10.5px] tracking-[0.22em] uppercase ${captionTone}`}
        >
          {caption}
        </span>
      </div>
    </div>
  );
}

function BentoCard({
  eyebrow,
  title,
  copy,
  stat,
  tone,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  stat: { label: string; value: string };
  tone: "cream" | "sage";
}) {
  const isCream = tone === "cream";
  return (
    <div className="rounded-[2.25rem] p-1.5 bg-[var(--color-matcha-deep)]/10 border border-[var(--color-hairline)] h-full">
      <div
        className={`rad-core h-full p-8 inset-hi diffuse min-h-[440px] flex flex-col ${
          isCream
            ? "bg-[var(--color-cream)]"
            : "bg-[var(--color-matcha-soft)]/45"
        }`}
      >
        <span className="eyebrow text-[var(--color-matcha-deep)]/80">
          {eyebrow}
        </span>
        <h3 className="font-display text-[1.65rem] leading-[1.05] tracking-tight mt-4 max-w-[16ch] text-[var(--color-ink)]">
          {title}
        </h3>
        <p className="mt-4 text-[14.5px] text-[var(--color-ink-soft)] leading-relaxed max-w-[34ch]">
          {copy}
        </p>
        <div className="mt-auto pt-10 flex items-end justify-between">
          <div>
            <div className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-[var(--color-ink-quiet)]">
              {stat.label}
            </div>
            <div className="font-display text-3xl mt-1 text-[var(--color-ink)]">
              {stat.value}
            </div>
          </div>
          <Link
            href="/speisekarte"
            className="h-11 w-11 rounded-full bg-[var(--color-matcha-deep)] text-[var(--color-cream-light)] flex items-center justify-center hover:bg-[var(--color-matcha-darker)] transition-colors"
            aria-label="Zur Karte"
          >
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}
