import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

export const metadata: Metadata = {
  title: "Liva Cafe — Frühstück & Matcha in Landau",
  description:
    "Türkisch-orientalisches Frühstück, sorgfältig zubereitete Matcha-Spezialitäten und ein Ort zum bleiben. Westbahnstraße 31, Landau in der Pfalz.",
  metadataBase: new URL("https://liva-cafe.de"),
  openGraph: {
    title: "Liva Cafe — Frühstück & Matcha",
    description:
      "Sage. Slow. Spürbar. Frühstück und Matcha in Landau in der Pfalz.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} antialiased`}
    >
      <body className="min-h-[100dvh] bg-[var(--color-cream-paper)] text-[var(--color-ink)] flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
