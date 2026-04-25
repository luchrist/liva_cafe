// Curated from the Liva Cafe Landau Google / Tripadvisor presence.
// Items reflect what guests consistently mention; prices are placeholders
// in the typical Landau-Pfalz range and easy to swap once the house list is
// confirmed.

export type MenuItem = {
  name: string;
  description?: string;
  price?: string;
  badge?: "Hausspezialität" | "Vegetarisch" | "Vegan" | "Limitiert";
};

export type MenuSection = {
  id: string;
  title: string;
  intro: string;
  serving: string;
  items: MenuItem[];
};

export const menu: MenuSection[] = [
  {
    id: "fruehstueck",
    title: "Frühstück",
    intro:
      "Bis 15:30 Uhr. Geboren aus der türkisch-orientalischen Tradition, gedeckt für lange Vormittage.",
    serving: "Mo–Sa ab 08:30  ·  So ab 10:00",
    items: [
      {
        name: "Liva Frühstücksbrett",
        description:
          "Acht hausgemachte Aufstriche, zwei Käse, Oliven, Tomaten, gegrilltes Gemüse, Sucuk, Rührei, Honig & frisches Fladenbrot. Für zwei.",
        price: "32,00",
        badge: "Hausspezialität",
      },
      {
        name: "Anatolisches Frühstück",
        description:
          "Schafskäse, Kaşar, Honig mit Kaymak, Walnüsse, Auberginen­creme, Oliven, weiches Ei, Simit.",
        price: "18,50",
      },
      {
        name: "Şakşuka (Eier in Tomatensugo)",
        description:
          "Pochierte Eier in Spitzpaprika-Tomatensugo, Petersilie, Sauerteigbrot.",
        price: "13,50",
        badge: "Vegetarisch",
      },
      {
        name: "Avocado auf Sauerteig",
        description:
          "Stulle mit zerdrückter Avocado, Granatapfel, Kreuzkümmel-Öl, Wachtelei.",
        price: "12,80",
        badge: "Vegetarisch",
      },
      {
        name: "Menemen",
        description:
          "Verlaufene Eier mit Tomate, Paprika und Schafskäse, frisch gehackte Petersilie.",
        price: "11,80",
        badge: "Vegetarisch",
      },
      {
        name: "Süßes Brett",
        description:
          "Gefüllte Datteln, Walnussbrot mit Tahin & Pekmez, Skyr mit Honig & Pistazie.",
        price: "13,80",
        badge: "Vegetarisch",
      },
    ],
  },
  {
    id: "matcha",
    title: "Matcha",
    intro:
      "Ceremonial Grade aus Uji, von Hand verschwiegen mit dem Chasen. Hot, iced oder als Spring Edition mit Erdbeere & Yuzu.",
    serving: "Ganztägig",
    items: [
      {
        name: "Iced Matcha — Spring Edition",
        description:
          "Erdbeer-Püree, Yuzu, kalte Hafermilch, frischer Ceremonial Matcha. Zur Saison.",
        price: "6,80",
        badge: "Limitiert",
      },
      {
        name: "Matcha Latte (heiß)",
        description: "Vollmilch, Hafer oder laktosefrei. Schaum aus dem Chasen, kein Mixer.",
        price: "5,40",
      },
      {
        name: "Iced Matcha Classic",
        description: "Klassisch, kalt, mit Hafer- oder Vollmilch über Eis.",
        price: "5,80",
      },
      {
        name: "Matcha Tonic",
        description: "Ceremonial Matcha auf Fever-Tree Mediterranean Tonic, Limette.",
        price: "6,40",
      },
      {
        name: "Usucha — pur",
        description: "Reiner dünnflüssiger Matcha, japanisch zubereitet, im Chawan serviert.",
        price: "4,80",
        badge: "Hausspezialität",
      },
    ],
  },
  {
    id: "kaffee",
    title: "Kaffee & Türkische Kultur",
    intro:
      "Gerösteter Single Origin und die langsame Tradition des türkischen Kaffees, im Cezve über Sand zubereitet.",
    serving: "Ganztägig",
    items: [
      { name: "Espresso", price: "2,80" },
      { name: "Doppio", price: "3,80" },
      { name: "Flat White", price: "4,40" },
      { name: "Cappuccino", price: "3,80" },
      {
        name: "Türk Kahvesi",
        description: "Im Sand gekocht, mit lokum & einem Glas Wasser serviert.",
        price: "4,20",
        badge: "Hausspezialität",
      },
      {
        name: "Salep",
        description: "Heißes Orchideen­getränk mit Zimt — saisonal.",
        price: "4,80",
        badge: "Limitiert",
      },
      { name: "Çay (Tulpenglas)", price: "2,80" },
    ],
  },
  {
    id: "feines",
    title: "Feines & Kuchen",
    intro:
      "Hausgemacht, in kleinen Mengen — was aufgegessen ist, ist aufgegessen.",
    serving: "Ab 10:00, solange Vorrat reicht",
    items: [
      {
        name: "Pistazien-Baklava",
        description: "Aleppo-Pistazien, dünnster Yufka, geklärte Butter, leichter Sirup.",
        price: "4,20",
      },
      {
        name: "Künefe",
        description: "Geschmolzener Käse zwischen Engelshaar, lauwarm, mit Pistazienstaub.",
        price: "8,40",
        badge: "Hausspezialität",
      },
      {
        name: "Karottenkuchen mit Tahin-Frosting",
        description: "Hausrezept, weniger süß, mit gerösteten Walnüssen.",
        price: "5,20",
        badge: "Vegetarisch",
      },
      {
        name: "Olivenöl-Zitronen-Kuchen",
        description: "Saftig, mit Mascarpone & Zitronenglasur.",
        price: "5,20",
        badge: "Vegetarisch",
      },
      {
        name: "Gefüllte Datteln Snickers-Style",
        description: "Erdnussbutter, Schokolade, Meersalz — drei Stück.",
        price: "5,80",
        badge: "Vegan",
      },
    ],
  },
  {
    id: "mittag",
    title: "Mittag & Suppen",
    intro:
      "Ab 12:00. Eine warme Sache, eine grüne Sache, ein hausgemachtes Brot.",
    serving: "Mo–Sa  ·  12:00–15:30",
    items: [
      {
        name: "Mercimek Çorbası",
        description: "Klassische Linsensuppe mit Zitrone, Minzbutter und Brot.",
        price: "7,80",
        badge: "Vegetarisch",
      },
      {
        name: "Ezogelin",
        description: "Linsen, Bulgur, Tomate, getrocknete Minze.",
        price: "8,20",
        badge: "Vegetarisch",
      },
      {
        name: "Granatapfel-Salat",
        description: "Bittere Blätter, Feta, Walnuss, Granatapfelmelasse, Sumach.",
        price: "12,80",
        badge: "Vegetarisch",
      },
      {
        name: "Gözleme des Tages",
        description: "Hauchdünner Yufkateig, gefüllt mit Spinat & Schafskäse oder Kartoffel.",
        price: "11,80",
      },
    ],
  },
];
