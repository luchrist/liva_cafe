import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Datenschutz — Liva Cafe",
  description:
    "Datenschutzerklärung des Liva Cafe in Landau in der Pfalz: welche Daten wir verarbeiten und welche Rechte du hast.",
  robots: { index: true, follow: false },
};

export default function DatenschutzPage() {
  return (
    <>
      <section className="pt-40 pb-16 md:pt-48 md:pb-20 bg-[var(--color-cream-paper)]">
        <div className="max-w-[1100px] mx-auto px-6 sm:px-10 lg:px-16">
          <Reveal>
            <span className="eyebrow text-[var(--color-matcha-deep)]/80">
              Rechtliches  ·  DSGVO
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-display text-[clamp(2.8rem,7vw,6rem)] leading-[0.92] tracking-[-0.03em] mt-5 max-w-[14ch]">
              Daten&shy;schutz.
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-7 max-w-[55ch] text-[var(--color-ink-soft)] text-lg leading-relaxed">
              Wir nehmen den Schutz deiner personenbezogenen Daten ernst.
              Nachfolgend informieren wir dich darüber, welche Daten beim
              Besuch dieser Website oder einer Tischreservierung verarbeitet
              werden.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-[var(--color-cream-paper)] pb-32">
        <div className="max-w-[1100px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="rounded-[2.5rem] p-1.5 bg-[var(--color-matcha-deep)]/10 border border-[var(--color-hairline)]">
            <div className="rad-core bg-[var(--color-cream-light)] inset-hi diffuse p-7 sm:p-12 lg:p-16">
              <div className="space-y-12">
                <Block title="Verantwortliche Stelle">
                  <p>
                    Verantwortlich für die Datenverarbeitung auf dieser Website
                    im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
                  </p>
                  <p className="mt-3">
                    Liva Cafe<br />
                    Inhaber:in: [Vor- und Nachname eintragen]<br />
                    Westbahnstraße 31<br />
                    76829 Landau in der Pfalz<br />
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

                <Block title="Zugriffsdaten / Server-Logfiles">
                  <p>
                    Beim Aufruf dieser Website werden durch unseren
                    Hosting-Anbieter automatisch Informationen erfasst, die
                    dein Browser übermittelt. Diese sogenannten Server-Logfiles
                    umfassen:
                  </p>
                  <ul className="mt-3 list-disc pl-5 space-y-1.5">
                    <li>Browsertyp und Browserversion</li>
                    <li>verwendetes Betriebssystem</li>
                    <li>Referrer-URL</li>
                    <li>Hostname des zugreifenden Rechners</li>
                    <li>Uhrzeit der Serveranfrage</li>
                    <li>gekürzte IP-Adresse</li>
                  </ul>
                  <p className="mt-3">
                    Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1
                    lit. f DSGVO (berechtigtes Interesse an der technisch
                    fehlerfreien Darstellung und Sicherheit der Website). Diese
                    Daten werden nicht mit anderen Datenquellen
                    zusammengeführt.
                  </p>
                </Block>

                <Block title="Tischreservierung">
                  <p>
                    Wenn du über das Reservierungsformular einen Tisch
                    anfragst, verarbeiten wir die von dir angegebenen Daten
                    (Name, Telefonnummer oder E-Mail-Adresse, Datum, Uhrzeit,
                    Personenzahl, optionale Anmerkungen) ausschließlich zur
                    Bearbeitung deiner Reservierung. Rechtsgrundlage ist Art. 6
                    Abs. 1 lit. b DSGVO (Durchführung vorvertraglicher
                    Maßnahmen). Die Daten werden nach Erledigung der
                    Reservierung gelöscht, sofern keine gesetzlichen
                    Aufbewahrungsfristen entgegenstehen.
                  </p>
                </Block>

                <Block title="Kontaktaufnahme">
                  <p>
                    Bei Kontaktaufnahme per E-Mail oder Telefon werden deine
                    Angaben zum Zweck der Bearbeitung deiner Anfrage und für
                    den Fall von Anschlussfragen verarbeitet (Art. 6 Abs. 1
                    lit. b bzw. lit. f DSGVO).
                  </p>
                </Block>

                <Block title="Hosting">
                  <p>
                    Diese Website wird bei Vercel Inc., 340 S Lemon Ave #4133,
                    Walnut, CA 91789, USA gehostet. Beim Aufruf werden
                    technisch notwendige Daten (siehe Server-Logfiles) durch
                    den Anbieter verarbeitet. Mit Vercel besteht ein
                    Auftragsverarbeitungsvertrag nach Art. 28 DSGVO; die
                    Datenübertragung in die USA erfolgt auf Grundlage des
                    EU-US Data Privacy Frameworks.
                  </p>
                </Block>

                <Block title="Eingebundene Dienste Dritter">
                  <p>
                    Beim Klick auf bestimmte Links (z. B. Google Maps,
                    Instagram) wirst du auf die jeweiligen Seiten der Anbieter
                    weitergeleitet. Wir haben keinen Einfluss darauf, welche
                    Daten dort verarbeitet werden. Es gelten die
                    Datenschutzhinweise des jeweiligen Anbieters.
                  </p>
                </Block>

                <Block title="Cookies">
                  <p>
                    Diese Website setzt keine Cookies zu Marketing- oder
                    Analysezwecken. Es werden ausschließlich technisch
                    notwendige Daten verarbeitet, die für den Betrieb der
                    Seite erforderlich sind.
                  </p>
                </Block>

                <Block title="Deine Rechte">
                  <p>Du hast jederzeit das Recht auf:</p>
                  <ul className="mt-3 list-disc pl-5 space-y-1.5">
                    <li>Auskunft über die zu deiner Person gespeicherten Daten (Art. 15 DSGVO)</li>
                    <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
                    <li>Löschung (Art. 17 DSGVO)</li>
                    <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                    <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
                    <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
                    <li>
                      Beschwerde bei einer Aufsichtsbehörde, z. B. dem
                      Landesbeauftragten für den Datenschutz und die
                      Informationsfreiheit Rheinland-Pfalz
                    </li>
                  </ul>
                  <p className="mt-3">
                    Zur Ausübung deiner Rechte genügt eine formlose Nachricht
                    an{" "}
                    <a
                      href="mailto:kontakt@liva-cafe.de"
                      className="underline decoration-[var(--color-matcha-deep)]/30 underline-offset-4 hover:text-[var(--color-matcha-darker)]"
                    >
                      kontakt@liva-cafe.de
                    </a>
                    .
                  </p>
                </Block>

                <Block title="Stand">
                  <p>
                    Diese Datenschutzerklärung wurde zuletzt am 29. April 2026
                    aktualisiert.
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
