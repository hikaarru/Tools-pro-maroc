"use client";
import { useState } from "react";
import type { Product } from "@/data/products";

const VILLES = [
  "Casablanca", "Rabat", "Marrakech", "Fès", "Tanger", "Agadir",
  "Meknès", "Oujda", "Kénitra", "Tétouan", "Salé", "El Jadida",
  "Béni Mellal", "Nador", "Settat", "Laâyoune", "Autre ville",
];

const WA = process.env.NEXT_PUBLIC_WHATSAPP ?? "212600000000";

function WaIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.13.558 4.13 1.533 5.863L.063 23.5l5.773-1.514A11.935 11.935 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.99 0-3.85-.54-5.45-1.48l-.39-.23-4.028 1.057 1.074-3.92-.25-.4A9.953 9.953 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
    </svg>
  );
}

interface Props {
  product: Product;
  onClose: () => void;
}

export default function OrderModal({ product, onClose }: Props) {
  const [form, setForm] = useState({ nom: "", tel: "", ville: "" });
  const [done, setDone] = useState(false);

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text =
      `🛒 *Nouvelle commande — Tools Pro Maroc*\n\n` +
      `📦 Produit : ${product.nom}\n` +
      `💰 Prix : ${product.prix}\n\n` +
      `👤 Nom : ${form.nom}\n` +
      `📞 Téléphone : ${form.tel}\n` +
      `📍 Ville : ${form.ville}\n\n` +
      `🔗 Lien YouCan : ${product.lienYoucan}`;
    window.open(`https://wa.me/${WA}?text=${encodeURIComponent(text)}`, "_blank");
    setDone(true);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center px-4 pb-4 sm:pb-0">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Card */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">

        {/* Orange top bar */}
        <div className="h-1 bg-orange-500" />

        <div className="p-6 sm:p-8">
          {!done ? (
            <>
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="font-black text-gray-900 text-xl leading-tight">Commander</h3>
                  <p className="text-orange-500 text-sm font-medium mt-0.5">{product.nom}</p>
                </div>
                <button
                  onClick={onClose}
                  className="text-gray-300 hover:text-gray-500 transition-colors p-1"
                  aria-label="Fermer"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Nom */}
                <div>
                  <label className="flex items-center justify-between text-sm font-semibold text-gray-700 mb-1.5">
                    <span>Nom complet</span>
                    <span className="font-normal text-gray-400 text-xs" dir="rtl">الاسم الكامل</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Mohammed Alami"
                    value={form.nom}
                    onChange={set("nom")}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-300 text-sm focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all"
                  />
                </div>

                {/* Téléphone */}
                <div>
                  <label className="flex items-center justify-between text-sm font-semibold text-gray-700 mb-1.5">
                    <span>Téléphone</span>
                    <span className="font-normal text-gray-400 text-xs" dir="rtl">رقم الهاتف</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="06 00 00 00 00"
                    value={form.tel}
                    onChange={set("tel")}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-300 text-sm focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all"
                  />
                </div>

                {/* Ville */}
                <div>
                  <label className="flex items-center justify-between text-sm font-semibold text-gray-700 mb-1.5">
                    <span>Ville</span>
                    <span className="font-normal text-gray-400 text-xs" dir="rtl">المدينة</span>
                  </label>
                  <div className="relative">
                    <select
                      required
                      value={form.ville}
                      onChange={set("ville")}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 text-sm focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all appearance-none bg-white pr-10"
                    >
                      <option value="">Choisir une ville…</option>
                      {VILLES.map(v => <option key={v} value={v}>{v}</option>)}
                    </select>
                    <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                    </svg>
                  </div>
                </div>

                {/* Price recap */}
                <div className="bg-gray-50 rounded-xl px-4 py-3 flex items-center justify-between">
                  <span className="text-gray-400 text-sm">Total commande</span>
                  <span className="font-black text-2xl text-gray-900">{product.prix}</span>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-[#25D366] hover:bg-[#1fbd5c] text-white font-black py-4 rounded-xl flex items-center justify-center gap-2.5 transition-colors text-base"
                >
                  <WaIcon className="w-5 h-5" />
                  Confirmer sur WhatsApp
                </button>

                <p className="text-center text-xs text-gray-300">
                  Paiement à la livraison · الدفع عند الاستلام
                </p>
              </form>
            </>
          ) : (
            /* Success state */
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <h3 className="font-black text-gray-900 text-xl mb-2">Commande envoyée !</h3>
              <p className="text-gray-400 text-sm mb-1">WhatsApp est ouvert avec vos informations.</p>
              <p className="text-gray-400 text-sm mb-7" dir="rtl">تم إرسال طلبك عبر واتساب.</p>
              <p className="text-xs text-gray-300 mb-6">Notre équipe confirme sous 1h · فريقنا يؤكد خلال ساعة</p>
              <button
                onClick={onClose}
                className="text-sm font-medium text-gray-400 hover:text-gray-600 transition-colors"
              >
                Fermer
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
