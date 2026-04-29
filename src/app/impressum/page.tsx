import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Impressum — Liva Cafe",
  description:
    "Impressum und Anbieterkennzeichnung gemäß § 5 DDG für Liva Cafe in Landau in der Pfalz.",
  robots: { index: true, follow: false },
};

export default function ImpressumPage() {
  return (
    <>
      <section className="pt-40 pb-16 md:pt-48 md:pb-20 bg-[var(--color-cream-paper)]">
        <div className="max-w-[1100px] mx-auto px-6 sm:px-10 lg:px-16">
          <Reveal>
            <span className="eyebrow text-[var(--color-matcha-deep)]/80">
              Rechtliches  ·  § 5 DDG
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-display text-[clamp(2.8rem,7vw,6rem)] leading-[0.92] tracking-[-0.03em] mt-5 max-w-[14ch]">
              Impressum.
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-7 max-w-[55ch] text-[var(--color-ink-soft)] text-lg leading-relaxed">
              Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG) und § 18 Abs. 2
              Medienstaatsvertrag (MStV).
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-[var(--color-cream-paper)] pb-32">
        <div className="max-w-[1100px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="rounded-[2.5rem] p-1.5 bg-[var(--color-matcha-deep)]/10 border border-[var(--color-hairline)]">
            <div className="rad-core bg-[var(--color-cream-light)] inset-hi diffuse p-7 sm:p-12 lg:p-16">
              <div className="prose-block space-y-12">
                <Block title="Anbieter">
                  <p>
                    Liva Cafe<br />
                    Inhaber:in: [Vor- und Nachname eintragen]<br />
                    Westbahnstraße 31<br />
                    76829 Landau in der Pfalz<br />
                    Deutschland
                  </p>
                </Block>

                <Block title="Kontakt">
                  <p>
                    Telefon:{" "}
                    <a
                      href="tel:+4963412672250"
                      className="underline decoration-[var(--color-matcha-deep)]/30 underline-offset-4 hover:text-[var(--color-matcha-darker)]"
                    >
                      +49 6341 2672250
                    </a>
                    <br />
                    E-Mail:{" "}
                    <a
                      href="mailto:kontakt@liva-cafe.de"
                      className="underline decoration-[var(--color-matcha-deep)]/30 underline-offset-4 hover:text-[var(--color-matcha-darker)]"
                    >
                      kontakt@liva-cafe.de
                    </a>
                  </p>
                </Block>

                <Block title="Umsatzsteuer-ID">
                  <p>
                    Umsatzsteuer-Identifikationsnummer gemäß § 27a
                    Umsatzsteuergesetz: [USt-IdNr. eintragen oder Hinweis auf
                    Kleinunternehmerregelung]
                  </p>
                </Block>

                <Block title="Aufsichtsbehörde">
                  <p>
                    Stadtverwaltung Landau in der Pfalz<br />
                    Marktstraße 50, 76829 Landau in der Pfalz
                  </p>
                </Block>

                <Block title="Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV">
                  <p>
                    [Vor- und Nachname]<br />
                    Westbahnstraße 31<br />
                    76829 Landau in der Pfalz
                  </p>
                </Block>

                <Block title="EU-Streitschlichtung">
                  <p>
                    Die Europäische Kommission stellt eine Plattform zur
                    Online-Streitbeilegung (OS) bereit:{" "}
                    <a
                      href="https://ec.europa.eu/consumers/odr/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="underline decoration-[var(--color-matcha-deep)]/30 underline-offset-4 hover:text-[var(--color-matcha-darker)]"
                    >
                      https://ec.europa.eu/consumers/odr/
                    </a>
                    . Unsere E-Mail-Adresse findest du oben im Impressum.
                  </p>
                </Block>

                <Block title="Verbraucherstreitbeilegung">
                  <p>
                    Wir sind nicht bereit oder verpflichtet, an
                    Streitbeilegungsverfahren vor einer
                    Verbraucherschlichtungsstelle teilzunehmen.
                  </p>
                </Block>

                <Block title="Haftung für Inhalte">
                  <p>
                    Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene
                    Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                    verantwortlich. Nach §§ 8 bis 10 DDG sind wir als
                    Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                    gespeicherte fremde Informationen zu überwachen oder nach
                    Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                    hinweisen. Verpflichtungen zur Entfernung oder Sperrung der
                    Nutzung von Informationen nach den allgemeinen Gesetzen
                    bleiben hiervon unberührt.
                  </p>
                </Block>

                <Block title="Haftung für Links">
                  <p>
                    Unser Angebot enthält Links zu externen Websites Dritter,
                    auf deren Inhalte wir keinen Einfluss haben. Deshalb können
                    wir für diese fremden Inhalte auch keine Gewähr übernehmen.
                    Für die Inhalte der verlinkten Seiten ist stets der
                    jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                  </p>
                </Block>

                <Block title="Urheberrecht">
                  <p>
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke
                    auf diesen Seiten unterliegen dem deutschen Urheberrecht.
                    Beiträge Dritter sind als solche gekennzeichnet. Eine
                    Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                    Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen
                    der schriftlichen Zustimmung des jeweiligen Autors bzw.
                    Erstellers.
                  </p>
                </Block>

                <Block title="Technische Umsetzung">
                  <p>
                    Konzept, Design und Entwicklung dieser Website:{" "}
                    <a
                      href="mailto:hey@apointa.org"
                      className="underline decoration-[var(--color-matcha-deep)]/30 underline-offset-4 hover:text-[var(--color-matcha-darker)]"
                    >
                      Luca Christ — hey@apointa.org
                    </a>
                  </p>
                </Block>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="eyebrow text-[var(--color-matcha-deep)]/85 mb-4">
        {title}
      </div>
      <div className="text-[15.5px] text-[var(--color-ink)] leading-[1.75] max-w-[68ch]">
        {children}
      </div>
    </section>
  );
}
