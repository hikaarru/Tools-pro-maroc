import ScrollReveal from "./ScrollReveal";

const garanties = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    titre: "Qualité certifiée",
    texte: "Outillage Bosch 100 % original, vérifié avant expédition. Aucun produit reconditionné ou générique.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    titre: "Livraison 24 / 48h",
    texte: "Expédié le jour même avant 14h. Suivi de colis inclus. Livraison dans toutes les villes du Maroc.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    titre: "Prix direct importateur",
    texte: "Pas d'intermédiaire. Vous achetez au meilleur prix du marché marocain, garanti.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    titre: "SAV réactif",
    texte: "Réponse WhatsApp en moins d'une heure, 7j/7. Prise en charge immédiate en cas de problème.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">

          {/* Title col */}
          <div className="lg:col-span-2">
            <ScrollReveal direction="left">
              <p className="text-orange-500 font-semibold text-sm mb-2">Nos engagements</p>
              <h2 className="text-3xl font-black text-gray-900 tracking-tight leading-tight mb-4">
                Pourquoi commander chez nous ?
              </h2>
              <p className="text-gray-500 leading-relaxed text-[15px]">
                Chaque commande est préparée avec soin. Nous ne vendons que ce que nous utilisons nous-mêmes.
              </p>
            </ScrollReveal>
            {/* Draw line */}
            <ScrollReveal direction="width" className="mt-6">
              <div className="h-[3px] w-16 bg-orange-500 rounded-full" />
            </ScrollReveal>
          </div>

          {/* Features col */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {garanties.map((g, i) => (
              <ScrollReveal key={g.titre} delay={(Math.min(i, 4) as 0|1|2|3|4)}>
                <div className="flex gap-4 group">
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                    {g.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-[15px] mb-1">{g.titre}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{g.texte}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
