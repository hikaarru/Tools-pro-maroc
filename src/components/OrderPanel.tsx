"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { Product } from "@/data/products";

const VILLES = [
  "Casablanca", "Rabat", "Marrakech", "Fès", "Tanger", "Agadir",
  "Meknès", "Oujda", "Kénitra", "Tétouan", "Salé", "El Jadida",
  "Béni Mellal", "Nador", "Settat", "Laâyoune", "Autre ville",
];

const WA = process.env.NEXT_PUBLIC_WHATSAPP ?? "212600000000";

function Field({
  label, labelAr, children,
}: { label: string; labelAr: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="flex items-center justify-between text-sm font-semibold text-gray-700 mb-1.5">
        <span>{label}</span>
        <span className="font-normal text-gray-400 text-xs" dir="rtl">{labelAr}</span>
      </label>
      {children}
    </div>
  );
}

const inputCls =
  "w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-300 text-sm focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all";

export default function OrderPanel() {
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState<Product | null>(null);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({ nom: "", tel: "", ville: "", adresse: "" });
  const firstRef = useRef<HTMLInputElement>(null);

  /* Listen for open-order events from ProductCard */
  useEffect(() => {
    const handler = (e: Event) => {
      const p = (e as CustomEvent<Product>).detail;
      setProduct(p);
      setDone(false);
      setForm({ nom: "", tel: "", ville: "", adresse: "" });
      setOpen(true);
    };
    window.addEventListener("open-order", handler);
    return () => window.removeEventListener("open-order", handler);
  }, []);

  /* Focus first field when opens */
  useEffect(() => {
    if (open) setTimeout(() => firstRef.current?.focus(), 350);
  }, [open]);

  /* Lock body scroll when open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const close = () => setOpen(false);

  const set = (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
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

      {/* Panel — slides down from under the navbar */}
      <div
        className="fixed inset-x-0 top-16 z-[90] transition-transform duration-500"
        style={{
          transform: open ? "translateY(0)" : "translateY(-110%)",
          transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        <div className="bg-white shadow-[0_20px_60px_rgba(0,0,0,0.18)] max-h-[calc(100vh-4rem)] overflow-y-auto">
          {/* Orange accent line */}
          <div className="h-1 bg-orange-500" />

          <div className="max-w-4xl mx-auto px-5 sm:px-8 py-7">
            {!done ? (
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">

                {/* ── Product recap (left) ───────────────────── */}
                {product && (
                  <div className="md:col-span-2 flex gap-4 items-start">
                    <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-gray-50 shrink-0">
                      <Image
                        src={product.image}
                        alt={product.nom}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>
                    <div>
                      <p className="text-xs text-orange-500 font-semibold mb-1">Commande en cours</p>
                      <h3 className="font-black text-gray-900 text-base leading-snug">{product.nom}</h3>
                      <p className="font-black text-2xl text-gray-900 mt-2">{product.prix}</p>
                      <span className="inline-block mt-1.5 text-xs text-green-600 font-semibold bg-green-50 px-2 py-0.5 rounded-lg">
                        En stock · متوفر
                      </span>
                    </div>
                  </div>
                )}

                {/* ── Form (right) ───────────────────────────── */}
                <form
                  onSubmit={handleSubmit}
                  className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                  {/* Nom */}
                  <Field label="Nom complet" labelAr="الاسم الكامل">
                    <input
                      ref={firstRef}
                      type="text"
                      required
                      placeholder="Mohammed Alami"
                      value={form.nom}
                      onChange={set("nom")}
                      className={inputCls}
                    />
                  </Field>

                  {/* Téléphone */}
                  <Field label="Téléphone" labelAr="رقم الهاتف">
                    <input
                      type="tel"
                      required
                      placeholder="06 00 00 00 00"
                      value={form.tel}
                      onChange={set("tel")}
                      className={inputCls}
                    />
                  </Field>

                  {/* Ville */}
                  <Field label="Ville" labelAr="المدينة">
                    <div className="relative">
                      <select
                        required
                        value={form.ville}
                        onChange={set("ville")}
                        className={`${inputCls} appearance-none pr-9`}
                      >
                        <option value="">Choisir…</option>
                        {VILLES.map(v => <option key={v} value={v}>{v}</option>)}
                      </select>
                      <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                      </svg>
                    </div>
                  </Field>

                  {/* Adresse */}
                  <Field label="Adresse complète" labelAr="العنوان الكامل">
                    <input
                      type="text"
                      required
                      placeholder="Rue, N°, Quartier…"
                      value={form.adresse}
                      onChange={set("adresse")}
                      className={inputCls}
                    />
                  </Field>

                  {/* Actions */}
                  <div className="sm:col-span-2 flex flex-col sm:flex-row gap-3 pt-1">
                    <button
                      type="submit"
                      className="flex-1 bg-[#25D366] hover:bg-[#1fbd5c] text-white font-black py-3.5 rounded-xl flex items-center justify-center gap-2 transition-colors text-sm"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.13.558 4.13 1.533 5.863L.063 23.5l5.773-1.514A11.935 11.935 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.99 0-3.85-.54-5.45-1.48l-.39-.23-4.028 1.057 1.074-3.92-.25-.4A9.953 9.953 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                      </svg>
                      Confirmer sur WhatsApp · تأكيد
                    </button>
                    <button
                      type="button"
                      onClick={close}
                      className="sm:w-auto px-6 py-3.5 rounded-xl border border-gray-200 text-gray-500 hover:bg-gray-50 text-sm font-medium transition-colors"
                    >
                      Annuler
                    </button>
                  </div>

                  <p className="sm:col-span-2 text-xs text-gray-300 text-center">
                    Paiement à la livraison · الدفع عند الاستلام
                  </p>
                </form>
              </div>
            ) : (
              /* Success */
              <div className="flex flex-col sm:flex-row items-center gap-6 py-2">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                  <svg className="w-7 h-7 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="font-black text-gray-900 text-xl">Commande envoyée !</h3>
                  <p className="text-gray-400 text-sm mt-1">
                    WhatsApp est ouvert · فريقنا يؤكد خلال ساعة
                  </p>
                </div>
                <button
                  onClick={close}
                  className="sm:ml-auto px-6 py-2.5 rounded-xl border border-gray-200 text-gray-500 hover:bg-gray-50 text-sm font-medium transition-colors"
                >
                  Fermer
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
