import ScrollReveal from "./ScrollReveal";

const avis = [
  {
    nom: "Hassan B.",
    role: "Gérant d'atelier auto",
    ville: "Casablanca",
    texte: "La clé à choc 108V a transformé mon atelier. Couple impressionnant, batterie tient la journée entière. Livré en 24h, emballage parfait. Je recommande à tous mes collègues mécaniciens.",
    initiale: "H",
  },
  {
    nom: "Youssef A.",
    role: "Artisan électricien",
    ville: "Rabat",
    texte: "Prix imbattable comparé aux autres vendeurs en ligne. La perceuse brushless est solide, j'en suis très content après 4 mois d'utilisation intensive.",
    initiale: "Y",
  },
  {
    nom: "Karim M.",
    role: "Chef de chantier",
    ville: "Marrakech",
    texte: "Commande WhatsApp confirmée en 10 minutes, reçue le lendemain. Service sérieux et professionnel. Produit 100% original.",
    initiale: "K",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[1,2,3,4,5].map((s) => (
        <svg key={s} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ))}
    </div>
  );
}

const [featured, ...rest] = avis;

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <ScrollReveal className="mb-14">
          <p className="text-orange-500 font-semibold text-sm mb-2">Avis clients</p>
          <h2 className="text-4xl font-black text-gray-900 tracking-tight">Ils nous font confiance</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Featured — slides from left */}
          <ScrollReveal direction="left" className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm flex flex-col justify-between h-full">
              <div>
                <div className="text-orange-200 text-8xl font-black leading-none mb-2 select-none">&ldquo;</div>
                <Stars />
                <p className="text-gray-700 text-lg leading-relaxed mt-4 mb-8">{featured.texte}</p>
              </div>
              <div className="flex items-center gap-3 pt-6 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-black text-sm shrink-0">
                  {featured.initiale}
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">{featured.nom}</div>
                  <div className="text-gray-400 text-xs">{featured.role} · {featured.ville}</div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Small cards — slide from right with stagger */}
          <div className="flex flex-col gap-5">
            {rest.map((a, i) => (
              <ScrollReveal key={a.nom} direction="right" delay={(i + 1 as 1|2)}>
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col flex-1">
                  <Stars />
                  <p className="text-gray-600 text-sm leading-relaxed mt-3 flex-1">&ldquo;{a.texte}&rdquo;</p>
                  <div className="flex items-center gap-3 pt-4 mt-4 border-t border-gray-100">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 font-bold text-xs shrink-0">
                      {a.initiale}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-xs">{a.nom}</div>
                      <div className="text-gray-400 text-[11px]">{a.ville}</div>
                    </div>
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
