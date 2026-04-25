// Five-star reviews collected from Google / Tripadvisor for Liva Cafe Landau.
// Names and dates are kept as published; quotes are lightly trimmed for length.

export type Review = {
  name: string;
  initials: string;
  date: string;
  visit?: string;
  quote: string;
  highlights: string[];
};

export const fiveStarReviews: Review[] = [
  {
    name: "Alexander A.",
    initials: "AA",
    date: "März 2026",
    visit: "Allein, am Vormittag",
    quote:
      "Das Liva-Brett ist ein Traum, aber bring etwas Hunger mit. So viele kleine Schälchen zum Snacken — alles frisch, alles mit Bedacht angerichtet.",
    highlights: ["Liva Frühstücksbrett", "Avocadocreme", "Feta-Sticks"],
  },
  {
    name: "Nikolaus H.",
    initials: "NH",
    date: "März 2025",
    visit: "Allein",
    quote:
      "Das Ganze wird auf einem großzügigen Brett serviert — dazu ein wirklich exzellenter Kaffee. Tomaten, Oliven, Paprika, Auberginen­creme, Schafskäse, weiches Ei … man kommt erst nach einer Stunde wieder hoch.",
    highlights: ["Auberginencreme", "Çay", "Ruhiger Vormittag"],
  },
  {
    name: "Mwen",
    initials: "MW",
    date: "April 2024",
    visit: "Mit Familie",
    quote:
      "Eine entspannte und einfach schöne Atmosphäre. Sehr leckeres Frühstück mit orientalischen Zutaten — wir kommen wieder, sobald wir wieder in Landau sind.",
    highlights: ["Familien­tauglich", "Orientalisch", "Atmosphäre"],
  },
  {
    name: "Charlie306",
    initials: "C3",
    date: "April 2025",
    visit: "Zu zweit",
    quote:
      "Eine wunderbare Verbindung aus Okzident und Orient — alles ästhetisch angerichtet, das Personal aufmerksam, ohne aufdringlich zu sein. Dazu ein perfekt zubereiteter Matcha.",
    highlights: ["Matcha Latte", "Service", "Ästhetik"],
  },
  {
    name: "verwings",
    initials: "VW",
    date: "März 2024",
    visit: "Mit Familie",
    quote:
      "Ein über­durchschnittliches Frühstück, das etwas Besonderes zu einem fairen Preis bietet. Die gefüllte Dattel war übrigens unfassbar — wie ein gutes Snickers, nur erwachsen.",
    highlights: ["Gefüllte Datteln", "Preis-Leistung", "Frühstück"],
  },
];
