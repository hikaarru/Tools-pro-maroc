"use client";
import Image from "next/image";
import { useRef } from "react";
import type { Product } from "@/data/products";

const WA = process.env.NEXT_PUBLIC_WHATSAPP ?? "212600000000";

export default function ProductCard({ product }: { product: Product }) {
  const ref = useRef<HTMLDivElement>(null);
  const msg = encodeURIComponent(`Bonjour, je veux des infos sur : ${product.nom}`);

  const openOrder = () => {
    window.dispatchEvent(new CustomEvent("open-order", { detail: product }));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = ref.current;
    if (!card) return;
    const r = card.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width  - 0.5) * 14;
    const y = ((e.clientY - r.top)  / r.height - 0.5) * -14;
    card.style.transform = `perspective(900px) rotateX(${y}deg) rotateY(${x}deg) scale(1.02)`;
    card.style.transition = "transform 0.08s ease";
  };

  const handleLeave = () => {
    const card = ref.current;
    if (!card) return;
    card.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)";
    card.style.transition = "transform 0.55s cubic-bezier(0.16,1,0.3,1)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-orange-200 hover:shadow-[0_20px_60px_rgba(0,0,0,0.10)] transition-shadow duration-300"
      style={{ willChange: "transform" }}
    >
      {/* Photo */}
      <div className="group relative h-60 bg-gray-50 overflow-hidden">
        {product.badge && (
          <span className="absolute top-3 left-3 z-10 bg-orange-500 text-white text-[11px] font-black px-2.5 py-1 rounded-lg uppercase tracking-wide">
            {product.badge}
          </span>
        )}
        <Image
          src={product.image}
          alt={product.nom}
          fill
          className="object-cover group-hover:scale-[1.06] transition-transform duration-700 ease-out"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Infos */}
      <div className="p-5">
        <h3 className="font-bold text-gray-900 text-base leading-snug mb-1">{product.nom}</h3>
        <p className="text-gray-400 text-xs mb-4 leading-relaxed">{product.description}</p>

        <div className="flex items-center justify-between mb-4">
          <span className="font-black text-2xl text-gray-900">{product.prix}</span>
          <span className="text-xs text-green-600 font-semibold bg-green-50 px-2 py-1 rounded-lg">En stock</span>
        </div>

        <div className="flex gap-2">
          <button
            onClick={openOrder}
            className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-black py-3 rounded-xl text-sm transition-all hover:shadow-lg hover:shadow-orange-100"
          >
            Commander
          </button>
          <a
            href={`https://wa.me/${WA}?text=${msg}`}
            target="_blank"
            rel="noopener noreferrer"
            title="Question rapide via WhatsApp"
            className="w-11 flex items-center justify-center bg-[#25D366] hover:bg-[#1fbd5c] rounded-xl transition-colors"
          >
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.13.558 4.13 1.533 5.863L.063 23.5l5.773-1.514A11.935 11.935 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.99 0-3.85-.54-5.45-1.48l-.39-.23-4.028 1.057 1.074-3.92-.25-.4A9.953 9.953 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
