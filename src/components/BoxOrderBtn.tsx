"use client";
import { product } from "@/data/product";

export default function BoxOrderBtn() {
  const open = () => {
    window.dispatchEvent(new CustomEvent("open-order", {
      detail: { ...product, image: product.images.hero },
    }));
  };

  return (
    <button
      onClick={open}
      className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-black px-8 py-4 rounded-2xl text-base transition-all hover:shadow-xl hover:shadow-orange-500/25 hover:-translate-y-0.5"
    >
      Commander — {product.prix}
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
      </svg>
    </button>
  );
}
