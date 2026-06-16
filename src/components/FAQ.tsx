"use client";
import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { product } from "@/data/product";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <ScrollReveal className="text-center mb-14">
          <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tighter">
            Questions fréquentes
          </h2>
          <p className="text-gray-400 mt-3 text-base" dir="rtl">الأسئلة الشائعة</p>
        </ScrollReveal>

        <div className="space-y-3">
          {product.faq.map((item, i) => (
            <ScrollReveal key={i} delay={(i % 4) as 0 | 1 | 2 | 3}>
              <div className="border border-gray-100 rounded-2xl overflow-hidden hover:border-orange-100 transition-colors">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                >
                  <div>
                    <p className="font-bold text-gray-900 text-base">{item.q}</p>
                    <p className="text-gray-400 text-xs mt-0.5" dir="rtl">{item.qAr}</p>
                  </div>
                  <span className={`shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-colors ${
                    open === i ? "border-orange-500 bg-orange-500 text-white" : "border-gray-200 text-gray-400"
                  }`}>
                    <svg className={`w-4 h-4 transition-transform ${open === i ? "rotate-45" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"/>
                    </svg>
                  </span>
                </button>

                <div className={`transition-all duration-300 ease-in-out ${open === i ? "max-h-60 opacity-100" : "max-h-0 opacity-0"} overflow-hidden`}>
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
                    <p className="text-gray-400 text-xs mt-3 leading-relaxed" dir="rtl">{item.aAr}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
