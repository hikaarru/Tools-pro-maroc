// ─────────────────────────────────────────────────────────────────
// PRODUITS — mettez vos vrais liens YouCan dans "lienYoucan"
// Format : https://votre-boutique.youcan.shop/products/slug-produit
// ─────────────────────────────────────────────────────────────────

export interface Product {
  id: string;
  nom: string;
  prix: string;
  description: string;
  image: string;
  lienYoucan: string;
  badge?: string;
}

export const products: Product[] = [
  {
    id: "cle-impact-108v",
    nom: "Clé à Choc Bosch 108V",
    prix: "1 200 DH",
    description: "Kit complet — malette L-Boxx, 2 batteries 4.0Ah, chargeur",
    image: "/products/cle-impact-108v.jpg",
    lienYoucan: "https://VOTRE-BOUTIQUE.youcan.shop/products/cle-impact-108v", // ← à remplacer
    badge: "Bestseller",
  },
  {
    id: "batteries-108v",
    nom: "Batteries Bosch Li-ion 108V 4.0Ah",
    prix: "450 DH",
    description: "Pack 2 batteries rechargeables, compatibles tous outils Bosch 108V",
    image: "/products/batteries-108v.jpg",
    lienYoucan: "https://VOTRE-BOUTIQUE.youcan.shop/products/batteries-108v", // ← à remplacer
  },
  {
    id: "douilles-impact",
    nom: "Douilles Impact 22mm",
    prix: "120 DH",
    description: "Set professionnel acier traité — douille 22mm + adaptateur 1/2\"",
    image: "/products/douilles-impact.jpg",
    lienYoucan: "https://VOTRE-BOUTIQUE.youcan.shop/products/douilles-impact", // ← à remplacer
  },
  {
    id: "perceuse-brushless-36v",
    nom: "Perceuse Brushless Bosch 36V",
    prix: "950 DH",
    description: "Kit 100 pièces — 2 batteries 2.0Ah, chargeur, coffret complet",
    image: "/products/perceuse-brushless-36v.jpg",
    lienYoucan: "https://VOTRE-BOUTIQUE.youcan.shop/products/perceuse-brushless-36v", // ← à remplacer
    badge: "Nouveau",
  },
  {
    id: "perceuse-gsr170",
    nom: "Perceuse Bosch Professional GSR 170-LI",
    prix: "850 DH",
    description: "36V · 2 batteries 3.0Ah · 17+1 positions de couple · coffret",
    image: "/products/perceuse-gsr170.jpg",
    lienYoucan: "https://VOTRE-BOUTIQUE.youcan.shop/products/perceuse-gsr170", // ← à remplacer
  },
];
