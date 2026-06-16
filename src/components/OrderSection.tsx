"use client";
import Image from "next/image";
import { useState, useRef } from "react";
import { product } from "@/data/product";

const WA = process.env.NEXT_PUBLIC_WHATSAPP ?? "212600000000";

const inputCls =
  "w-full border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all bg-white";

export default function OrderSection() {
  const [form, setForm]   = useState({ nom: "", tel: "", ville: "", adresse: "" });
  const [done, setDone]   = useState(false);
  const nomRef = useRef<HTMLInputElement>(null);

  const set = (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm(f => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text =
      `🛒 *Nouvelle commande — Tools Pro Maroc*\n\n` +
      `📦 Produit : ${product.nom}\n` +
      `💰 Prix : ${product.prix}\n\n` +
      `👤 Nom : ${form.nom}\n` +
      `📞 Téléphone : ${form.tel}\n` +
      `📍 Ville : ${form.ville}\n` +
      `🏠 Adresse : ${form.adresse}\n\n` +
      `🔗 Lien YouCan : ${product.lienYoucan}`;
    window.open(`https://wa.me/${WA}?text=${encodeURIComponent(text)}`, "_blank");
    setDone(true);
  };

  return (
    <section id="commander" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">

        {/* Section label */}
        <div className="text-center mb-10">
          <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-2">Commandez maintenant</p>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tighter">
            Recevez votre kit en 24h
          </h2>
          <p className="text-gray-400 text-sm mt-2" dir="rtl">استلام في 24 ساعة · الدفع عند الاستلام</p>
        </div>

        <div className="bg-white rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.08)] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5">

            {/* ── Product recap ─────────────────────── */}
            <div className="lg:col-span-2 bg-[#0d1117] p-8 flex flex-col justify-between gap-8">
              {/* Image */}
              <div className="relative h-52 lg:h-64 rounded-2xl overflow-hidden bg-white/5">
                <Image
                  src={product.images.hero}
                  alt={product.nom}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>

              {/* Info */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-orange-500 text-white text-[11px] font-black px-2.5 py-1 rounded-lg uppercase tracking-wide">
                    {product.badge}
                  </span>
                  <span className="flex items-center gap-1.5 text-white/50 text-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    En stock
                  </span>
                </div>
                <h3 className="text-white font-black text-lg leading-snug mb-2">{product.nom}</h3>
                <p className="text-white/40 text-xs leading-relaxed mb-5">{product.description}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-white font-black text-4xl">{product.prix}</span>
                </div>
                <p className="text-orange-400 text-xs mt-1">{product.prixNote}</p>
              </div>

              {/* Trust pills */}
              <div className="flex flex-col gap-2">
                {["Paiement à la livraison", "Garantie Bosch 1 an", "Retour 7 jours"].map(t => (
                  <div key={t} className="flex items-center gap-2 text-white/50 text-xs">
                    <svg className="w-3.5 h-3.5 text-green-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                    </svg>
                    {t}
                  </div>
                ))}
              </div>
            </div>

            {/* ── Form ──────────────────────────────── */}
            <div className="lg:col-span-3 p-8 flex flex-col justify-center">
              {!done ? (
                <>
                  <h3 className="font-black text-gray-900 text-xl mb-1">Vos informations de livraison</h3>
                  <p className="text-gray-400 text-sm mb-7" dir="rtl">معلومات التوصيل</p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="flex justify-between text-sm font-semibold text-gray-700 mb-1.5">
                          <span>Nom complet</span>
                          <span className="text-gray-400 font-normal text-xs" dir="rtl">الاسم</span>
                        </label>
                        <input
                          ref={nomRef}
                          type="text" required
                          placeholder="Mohammed Alami"
                          value={form.nom} onChange={set("nom")}
                          className={inputCls}
                        />
                      </div>
                      <div>
                        <label className="flex justify-between text-sm font-semibold text-gray-700 mb-1.5">
                          <span>Téléphone</span>
                          <span className="text-gray-400 font-normal text-xs" dir="rtl">الهاتف</span>
                        </label>
                        <input
                          type="tel" required
                          placeholder="06 00 00 00 00"
                          value={form.tel} onChange={set("tel")}
                          className={inputCls}
                        />
                      </div>
                      <div>
                        <label className="flex justify-between text-sm font-semibold text-gray-700 mb-1.5">
                          <span>Ville</span>
                          <span className="text-gray-400 font-normal text-xs" dir="rtl">المدينة</span>
                        </label>
                        <input
                          type="text" required
                          placeholder="Casablanca, Rabat…"
                          value={form.ville} onChange={set("ville")}
                          className={inputCls}
                        />
                      </div>
                      <div>
                        <label className="flex justify-between text-sm font-semibold text-gray-700 mb-1.5">
                          <span>Adresse</span>
                          <span className="text-gray-400 font-normal text-xs" dir="rtl">العنوان</span>
                        </label>
                        <input
                          type="text" required
                          placeholder="Rue, N°, Quartier…"
                          value={form.adresse} onChange={set("adresse")}
                          className={inputCls}
                        />
                      </div>
                    </div>

                    {/* Submit */}
                    <div className="relative mt-2">
                      <span className="ring-1 absolute inset-0 rounded-2xl bg-[#25D366] pointer-events-none" />
                      <span className="ring-2 absolute inset-0 rounded-2xl bg-[#25D366] pointer-events-none" />
                      <button
                        type="submit"
                        className="relative w-full bg-[#25D366] hover:bg-[#1fbd5c] text-white font-black py-4 rounded-2xl flex items-center justify-center gap-3 transition-colors text-base"
                      >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.13.558 4.13 1.533 5.863L.063 23.5l5.773-1.514A11.935 11.935 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.99 0-3.85-.54-5.45-1.48l-.39-.23-4.028 1.057 1.074-3.92-.25-.4A9.953 9.953 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                        </svg>
                        Confirmer ma commande · تأكيد الطلب
                      </button>
                    </div>
                    <p className="text-center text-xs text-gray-300">
                      الدفع عند الاستلام · Aucun paiement à l'avance
                    </p>
                  </form>
                </>
              ) : (
                <div className="text-center py-10">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                    <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <h3 className="font-black text-gray-900 text-2xl mb-2">Commande envoyée !</h3>
                  <p className="text-gray-400 text-sm mb-1">WhatsApp s'est ouvert avec vos infos.</p>
                  <p className="text-gray-400 text-sm mb-8" dir="rtl">تم إرسال طلبك. سيتصل بك فريقنا لتأكيد التوصيل.</p>
                  <button
                    onClick={() => { setDone(false); setForm({ nom: "", tel: "", ville: "", adresse: "" }); }}
                    className="px-8 py-3 rounded-xl border border-gray-200 text-gray-500 hover:bg-gray-50 text-sm font-medium transition-colors"
                  >
                    Nouvelle commande
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
