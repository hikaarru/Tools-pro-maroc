import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tools Pro Maroc — Outillage Bosch Professionnel",
  description:
    "Boutique spécialisée en outillage industriel Bosch au Maroc. Perceuses, clés à choc, batteries et accessoires professionnels. Livraison rapide partout au Maroc.",
  keywords: ["bosch", "outillage", "maroc", "perceuse", "clé à choc", "professionnel"],
  openGraph: {
    title: "Tools Pro Maroc — Outillage Bosch Professionnel",
    description: "Outillage industriel Bosch au Maroc — qualité garantie, livraison rapide.",
    locale: "fr_MA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className="h-full">
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
