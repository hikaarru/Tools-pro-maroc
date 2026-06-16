"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
type OrderProduct = { nom: string; prix: string; image: string; description: string; lienYoucan: string; };

const WA = process.env.NEXT_PUBLIC_WHATSAPP ?? "212600000000";

const inputCls =
  "w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-300 text-sm focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all bg-white";

export default function OrderPanel() {
  const [open, setOpen]       = useState(false);
  const [product, setProduct] = useState<OrderProduct | null>(null);
  const [done, setDone]       = useState(false);
  const [form, setForm]       = useState({ nom: "", tel: "", ville: "", adresse: "" });
  const nomRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handler = (e: Event) => {
      const p = (e as CustomEvent<OrderProduct>).detail;
      setProduct(p);
      setDone(false);
      setForm({ nom: "", tel: "", ville: "", adresse: "" });
      setOpen(true);
      setTimeout(() => nomRef.current?.focus(), 400);
    };
    window.addEventListener("open-order", handler);
    return () => window.removeEventListener("open-order", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const close = () => setOpen(false);

  const set = (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm(f => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!product) return;
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
    <>
      {/* Backdrop */}
      <div
        onClick={close}
        className="fixed inset-0 z-[80] bg-black/50 backdrop-blur-sm transition-opacity duration-300"
        style={{ opacity: open ? 1 : 0, pointerEvents: open ? "auto" : "none" }}
      />

      {/* Bottom sheet */}
      <div
        className="fixed bottom-0 inset-x-0 z-[90] transition-transform duration-500 max-h-[90vh] flex flex-col"
        style={{
          transform: open ? "translateY(0)" : "translateY(100%)",
          transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        <div className="bg-white rounded-t-3xl shadow-[0_-20px_60px_rgba(0,0,0,0.15)] flex flex-col overflow-hidden">

          {/* Drag handle */}
          <div className="flex justify-center pt-3 pb-1 shrink-0">
            <div className="w-10 h-1 rounded-full bg-gray-200" />
          </div>

          {/* Scrollable content */}
          <div className="overflow-y-auto">
            <div className="max-w-2xl mx-auto w-full px-6 pb-8 pt-4">

              {!done ? (
                <>
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="font-black text-gray-900 text-xl">Passer commande</h3>
                      <p className="text-gray-400 text-xs mt-0.5" dir="rtl">تأكيد الطلب</p>
                    </div>
                    <button
                      onClick={close}
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 transition-colors mt-0.5"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                      </svg>
                    </button>
                  </div>

                  {/* Product recap */}
                  {product && (
                    <div className="flex gap-4 items-center bg-gray-50 rounded-2xl p-4 mb-6">
                      <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-white shrink-0 shadow-sm">
                        <Image src={product.image} alt={product.nom} fill className="object-cover" sizes="64px" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-gray-900 text-sm leading-snug truncate">{product.nom}</p>
                        <p className="text-gray-400 text-xs mt-0.5 truncate">{product.description}</p>
                      </div>
                      <div className="shrink-0 text-right">
                        <p className="font-black text-2xl text-gray-900">{product.prix}</p>
                        <p className="text-xs text-green-600 font-semibold">En stock</p>
                      </div>
                    </div>
                  )}

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Nom */}
                      <div>
                        <label className="flex justify-between text-sm font-semibold text-gray-700 mb-1.5">
                          <span>Nom complet</span>
                          <span className="font-normal text-gray-400 text-xs" dir="rtl">الاسم الكامل</span>
                        </label>
                        <input ref={nomRef} type="text" required placeholder="Mohammed Alami"
                          value={form.nom} onChange={set("nom")} className={inputCls} />
                      </div>

                      {/* Téléphone */}
                      <div>
                        <label className="flex justify-between text-sm font-semibold text-gray-700 mb-1.5">
                          <span>Téléphone</span>
                          <span className="font-normal text-gray-400 text-xs" dir="rtl">رقم الهاتف</span>
                        </label>
                        <input type="tel" required placeholder="06 00 00 00 00"
                          value={form.tel} onChange={set("tel")} className={inputCls} />
                      </div>

                      {/* Ville */}
                      <div>
                        <label className="flex justify-between text-sm font-semibold text-gray-700 mb-1.5">
                          <span>Ville</span>
                          <span className="font-normal text-gray-400 text-xs" dir="rtl">المدينة</span>
                        </label>
                        <input type="text" required placeholder="Casablanca, Rabat…"
                          value={form.ville} onChange={set("ville")} className={inputCls} />
                      </div>

                      {/* Adresse */}
                      <div>
                        <label className="flex justify-between text-sm font-semibold text-gray-700 mb-1.5">
                          <span>Adresse</span>
                          <span className="font-normal text-gray-400 text-xs" dir="rtl">العنوان</span>
                        </label>
                        <input type="text" required placeholder="Rue, N°, Quartier…"
                          value={form.adresse} onChange={set("adresse")} className={inputCls} />
                      </div>
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="w-full bg-[#25D366] hover:bg-[#1fbd5c] text-white font-black py-4 rounded-2xl flex items-center justify-center gap-2.5 transition-colors text-base mt-2"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.13.558 4.13 1.533 5.863L.063 23.5l5.773-1.514A11.935 11.935 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.99 0-3.85-.54-5.45-1.48l-.39-.23-4.028 1.057 1.074-3.92-.25-.4A9.953 9.953 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                      </svg>
                      Confirmer sur WhatsApp · تأكيد
                    </button>

                    <p className="text-center text-xs text-gray-300">
                      الدفع عند الاستلام · Paiement à la livraison
                    </p>
                  </form>
                </>
              ) : (
                /* Success */
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                    <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <h3 className="font-black text-gray-900 text-xl mb-2">Commande envoyée !</h3>
                  <p className="text-gray-400 text-sm mb-1">WhatsApp est ouvert avec vos informations.</p>
                  <p className="text-gray-400 text-sm mb-8" dir="rtl">تم إرسال طلبك. فريقنا يؤكد خلال ساعة.</p>
                  <button onClick={close}
                    className="px-8 py-3 rounded-xl border border-gray-200 text-gray-500 hover:bg-gray-50 text-sm font-medium transition-colors">
                    Fermer
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
