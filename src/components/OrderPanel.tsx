"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { Product } from "@/data/products";

const WA = process.env.NEXT_PUBLIC_WHATSAPP ?? "212600000000";

const inputCls =
  "w-full border border-gray-200 rounded-lg px-3 py-2 text-gray-900 placeholder-gray-300 text-sm focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all bg-white";

export default function OrderPanel() {
  const [product, setProduct] = useState<Product | null>(null);
  const [form, setForm] = useState({ nom: "", tel: "", ville: "", adresse: "" });
  const [done, setDone] = useState(false);
  const nomRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handler = (e: Event) => {
      const p = (e as CustomEvent<Product>).detail;
      setProduct(p);
      setDone(false);
      setForm({ nom: "", tel: "", ville: "", adresse: "" });
      setTimeout(() => nomRef.current?.focus(), 80);
    };
    window.addEventListener("open-order", handler);
    return () => window.removeEventListener("open-order", handler);
  }, []);

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

  const reset = () => { setProduct(null); setDone(false); };

  return (
    <div className="fixed top-16 inset-x-0 z-40 bg-white border-b border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
      {/* Thin orange top accent */}
      <div className="h-[2px] bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500" />

      <div className="max-w-6xl mx-auto px-4 sm:px-8">

        {/* ── No product selected ─────────────────────────── */}
        {!product && !done && (
          <div className="h-12 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse shrink-0" />
            <p className="text-gray-400 text-sm">
              Cliquez <span className="font-semibold text-gray-600">Commander</span> sur un produit ·{" "}
              <span dir="rtl" className="text-gray-400">انقر على "اطلب الآن"</span>
            </p>
          </div>
        )}

        {/* ── Success ─────────────────────────────────────── */}
        {done && (
          <div className="h-12 flex items-center gap-3">
            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center shrink-0">
              <svg className="w-3.5 h-3.5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
              </svg>
            </div>
            <p className="text-sm font-medium text-gray-700">
              Commande envoyée via WhatsApp · <span dir="rtl" className="text-gray-400 font-normal">تم إرسال الطلب</span>
            </p>
            <button onClick={reset} className="ml-auto text-xs text-gray-400 hover:text-orange-500 transition-colors font-medium">
              Nouvelle commande
            </button>
          </div>
        )}

        {/* ── Form ────────────────────────────────────────── */}
        {product && !done && (
          <form onSubmit={handleSubmit} className="py-2.5 flex flex-wrap lg:flex-nowrap items-center gap-2">

            {/* Product recap */}
            <div className="flex items-center gap-2 shrink-0 mr-1 hidden sm:flex">
              <div className="relative w-9 h-9 rounded-lg overflow-hidden bg-gray-100 shrink-0">
                <Image src={product.image} alt={product.nom} fill className="object-cover" sizes="36px" />
              </div>
              <div className="leading-none">
                <p className="text-[11px] font-bold text-gray-900 leading-tight max-w-[100px] truncate">{product.nom}</p>
                <p className="text-orange-500 font-black text-sm">{product.prix}</p>
              </div>
            </div>

            <div className="hidden sm:block h-6 w-px bg-gray-100 shrink-0 mx-1" />

            {/* Nom */}
            <div className="w-full sm:w-auto sm:flex-1 min-w-[130px]">
              <input
                ref={nomRef}
                type="text"
                required
                placeholder="Nom · الاسم"
                value={form.nom}
                onChange={set("nom")}
                className={inputCls}
              />
            </div>

            {/* Tel */}
            <div className="w-full sm:w-auto sm:flex-1 min-w-[130px]">
              <input
                type="tel"
                required
                placeholder="Téléphone · الهاتف"
                value={form.tel}
                onChange={set("tel")}
                className={inputCls}
              />
            </div>

            {/* Ville — free text */}
            <div className="w-full sm:w-auto sm:flex-1 min-w-[110px]">
              <input
                type="text"
                required
                placeholder="Ville · المدينة"
                value={form.ville}
                onChange={set("ville")}
                className={inputCls}
              />
            </div>

            {/* Adresse */}
            <div className="w-full sm:w-auto sm:flex-[2] min-w-[160px]">
              <input
                type="text"
                required
                placeholder="Adresse complète · العنوان"
                value={form.adresse}
                onChange={set("adresse")}
                className={inputCls}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="shrink-0 bg-[#25D366] hover:bg-[#1fbd5c] text-white font-black px-4 py-2 rounded-lg text-sm flex items-center gap-1.5 transition-colors whitespace-nowrap"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.13.558 4.13 1.533 5.863L.063 23.5l5.773-1.514A11.935 11.935 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.99 0-3.85-.54-5.45-1.48l-.39-.23-4.028 1.057 1.074-3.92-.25-.4A9.953 9.953 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              Confirmer
            </button>

            {/* Close */}
            <button
              type="button"
              onClick={reset}
              className="shrink-0 w-8 h-8 flex items-center justify-center text-gray-300 hover:text-gray-500 transition-colors rounded-lg hover:bg-gray-50"
              aria-label="Annuler"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
