// ─────────────────────────────────────────────────────────────────────────────
// SINGLE PRODUCT — changer ce fichier pour chaque page produit
// ─────────────────────────────────────────────────────────────────────────────

export const product = {
  nom:          "Perceuse Bosch Professional GSR 170-LI",
  nomAr:        "مثقاب بوش برو 36 فولت",
  prix:         "850 DH",
  prixNote:     "Livraison incluse · الشحن مجاني",
  badge:        "Bestseller",
  description:  "Perceuse-visseuse sans fil 36V · Moteur Brushless · 2 batteries 3.0Ah · Coffret 100 pièces.",
  descriptionAr:"مثقاب بدون أسلاك 36 فولت، محرك بروشليس، بطاريتان 3.0Ah، حقيبة 100 قطعة.",
  lienYoucan:   "https://VOTRE-BOUTIQUE.youcan.shop/products/perceuse-gsr170",

  images: {
    hero:   "/product/hero.jpg",
    kit:    "/product/kit.jpg",
    case:   "/product/case.jpg",
    detail: "/product/detail.jpg",
    angle2: "/product/angle2.jpg",
    angle3: "/product/angle3.jpg",
  },

  specs: [
    { label: "Tension",      labelAr: "الجهد",         value: "36V Li-Ion" },
    { label: "Moteur",       labelAr: "المحرك",         value: "Brushless" },
    { label: "Couple max",   labelAr: "أقصى عزم",       value: "65 Nm" },
    { label: "Positions",    labelAr: "مواضع العزم",     value: "17+1 couple" },
    { label: "Mandrin",      labelAr: "قبضة الحفر",      value: "13 mm auto-serrant" },
    { label: "Batteries",    labelAr: "البطاريات",       value: "2 × 3.0Ah" },
    { label: "Chargeur",     labelAr: "الشاحن",          value: "Rapide 1h" },
    { label: "Poids",        labelAr: "الوزن",           value: "1.9 kg" },
  ],

  kit: [
    "Perceuse-visseuse GSR 170-LI 36V",
    "2 batteries Li-Ion 36V 3.0Ah",
    "Chargeur rapide",
    "50+ embouts de vissage",
    "Set forets métal / bois / béton",
    "Douilles impact",
    "Rallonge flexible",
    "Mètre ruban 3M",
    "Coffret L-Boxx Bosch",
  ],

  faq: [
    {
      q:  "Est-ce un produit Bosch 100% original ?",
      qAr:"هل المنتج أصلي 100% من بوش؟",
      a:  "Oui, tous nos produits sont 100% originaux avec certificat Bosch. Nous sommes distributeur officiel au Maroc.",
      aAr:"نعم، جميع منتجاتنا أصلية 100% مع شهادة بوش. نحن موزع رسمي معتمد في المغرب.",
    },
    {
      q:  "Quel est le délai de livraison ?",
      qAr:"ما هو وقت التوصيل؟",
      a:  "24h pour Casablanca, Rabat, Marrakech, Fès, Tanger. 48h pour toutes les autres villes du Maroc.",
      aAr:"24 ساعة للدار البيضاء والرباط ومراكش وفاس وطنجة. 48 ساعة لباقي مدن المغرب.",
    },
    {
      q:  "Comment se passe le paiement ?",
      qAr:"كيف يتم الدفع؟",
      a:  "Paiement à la livraison uniquement (cash). Aucun acompte, aucune carte bancaire requise.",
      aAr:"الدفع عند الاستلام فقط (نقداً). لا دفعة مقدمة، لا بطاقة بنكية مطلوبة.",
    },
    {
      q:  "Et si le produit a un problème ?",
      qAr:"ماذا لو كان هناك مشكلة في المنتج؟",
      a:  "Retour accepté sous 7 jours. Garantie Bosch 1 an. Notre SAV répond sur WhatsApp en moins d'une heure.",
      aAr:"إمكانية الإرجاع خلال 7 أيام. ضمان بوش لمدة سنة. فريق الدعم يرد على واتساب في أقل من ساعة.",
    },
  ],
};
