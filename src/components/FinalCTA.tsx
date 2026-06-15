import ScrollReveal from "./ScrollReveal";

const WA = process.env.NEXT_PUBLIC_WHATSAPP ?? "212600000000";
const TEL = process.env.NEXT_PUBLIC_PHONE ?? "+212 6 00 00 00 00";

export default function FinalCTA() {
  const msg = encodeURIComponent("Bonjour, je veux passer une commande.");

  return (
    <section id="contact" className="py-28 bg-white">
      <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
        <ScrollReveal>
          <p className="text-orange-500 font-semibold text-sm mb-3">Prêt à commander ?</p>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tighter leading-tight mb-5">
            Votre outillage Bosch<br />vous attend.
          </h2>
          <p className="text-gray-400 text-lg mb-12">
            Envoyez un message — on confirme stock, prix et livraison<br className="hidden sm:inline" />
            en moins d'une heure.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={1} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* WhatsApp CTA with pulse rings */}
          <div className="relative inline-flex">
            <span className="ring-1 absolute inset-0 rounded-2xl bg-[#25D366] pointer-events-none" />
            <span className="ring-2 absolute inset-0 rounded-2xl bg-[#25D366] pointer-events-none" />
            <a
              href={`https://wa.me/${WA}?text=${msg}`}
              target="_blank" rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1fbd5c] text-white font-black px-10 py-5 rounded-2xl text-xl transition-colors"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.13.558 4.13 1.533 5.863L.063 23.5l5.773-1.514A11.935 11.935 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.99 0-3.85-.54-5.45-1.48l-.39-.23-4.028 1.057 1.074-3.92-.25-.4A9.953 9.953 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              Commander sur WhatsApp
            </a>
          </div>

          <a
            href={`tel:${TEL.replace(/\s/g,"")}`}
            className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 hover:border-gray-300 text-gray-700 font-bold px-8 py-5 rounded-2xl text-base transition-all hover:bg-gray-50"
          >
            <svg className="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            {TEL}
          </a>
        </ScrollReveal>

        <ScrollReveal delay={2} className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-400">
          <span>✓ Paiement à la livraison</span>
          <span>✓ Livraison 24 / 48h</span>
          <span>✓ Garantie constructeur</span>
          <span>✓ SAV 7j/7</span>
        </ScrollReveal>
      </div>
    </section>
  );
}
