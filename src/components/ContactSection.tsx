// Section contact — sobre, efficace
export default function ContactSection() {
  const wa   = process.env.NEXT_PUBLIC_WHATSAPP ?? "212600000000";
  const tel  = process.env.NEXT_PUBLIC_PHONE ?? "+212 6 00 00 00 00";
  const liv  = process.env.NEXT_PUBLIC_LIVRAISON ?? "Maroc entier — 24/48h";
  const ig   = process.env.NEXT_PUBLIC_INSTAGRAM;
  const fb   = process.env.NEXT_PUBLIC_FACEBOOK;
  const msg  = encodeURIComponent("Bonjour, je veux commander un produit Bosch.");

  return (
    <section id="contact" className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Gauche — infos */}
          <div>
            <p className="text-orange-500 font-semibold text-sm mb-2">Contactez-nous</p>
            <h2 className="text-3xl font-black text-gray-900 tracking-tight mb-4">
              Une question ?<br />On répond vite.
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8 max-w-sm">
              Disponibles 7j/7 pour toute question sur un produit, un devis groupé, ou une commande urgente.
            </p>

            <div className="space-y-3">
              <a
                href={`tel:${tel.replace(/\s/g, "")}`}
                className="group flex items-center gap-4 rounded-xl border border-gray-100 p-4 hover:border-orange-200 hover:bg-orange-50/50 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-50 group-hover:bg-orange-100 flex items-center justify-center text-orange-500 shrink-0 transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[11px] text-gray-400 font-medium mb-0.5 uppercase tracking-wide">Téléphone</div>
                  <div className="font-bold text-gray-900">{tel}</div>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-xl border border-gray-100 p-4">
                <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500 shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[11px] text-gray-400 font-medium mb-0.5 uppercase tracking-wide">Livraison</div>
                  <div className="font-bold text-gray-900">{liv}</div>
                </div>
              </div>

              {(ig || fb) && (
                <div className="flex gap-2 pt-1">
                  {ig && (
                    <a href={ig} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-pink-500 border border-gray-200 hover:border-pink-200 px-4 py-2.5 rounded-xl transition-all">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                      Instagram
                    </a>
                  )}
                  {fb && (
                    <a href={fb} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-blue-600 border border-gray-200 hover:border-blue-200 px-4 py-2.5 rounded-xl transition-all">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                      Facebook
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Droite — CTA WhatsApp */}
          <div className="bg-[#25D366] rounded-3xl p-8 sm:p-10">
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.13.558 4.13 1.533 5.863L.063 23.5l5.773-1.514A11.935 11.935 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.99 0-3.85-.54-5.45-1.48l-.39-.23-4.028 1.057 1.074-3.92-.25-.4A9.953 9.953 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
            </div>
            <h3 className="text-white font-black text-2xl mb-3 leading-tight">
              Commandez en<br />1 seul message
            </h3>
            <p className="text-white/80 text-[15px] leading-relaxed mb-8">
              Envoyez le nom du produit sur WhatsApp. On confirme la dispo, le prix et la date de livraison en quelques minutes.
            </p>
            <a
              href={`https://wa.me/${wa}?text=${msg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-green-600 font-black px-8 py-4 rounded-2xl transition-all hover:shadow-lg text-[15px]"
            >
              Ouvrir WhatsApp
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <p className="text-white/60 text-xs mt-5">Réponse en moins d'1h · 7 jours sur 7</p>
          </div>
        </div>
      </div>
    </section>
  );
}
