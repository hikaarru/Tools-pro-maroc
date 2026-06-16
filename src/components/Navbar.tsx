"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const WA = process.env.NEXT_PUBLIC_WHATSAPP ?? "212600000000";

export default function Navbar() {
  const [solid, setSolid] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const fn = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setSolid(scrolled > 60);
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 h-16 flex items-center transition-all duration-300 ${solid ? "bg-white/95 backdrop-blur shadow-[0_1px_0_#e5e7eb]" : "bg-transparent"}`}>
      {/* Scroll progress */}
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-orange-500 transition-[width] duration-75 ease-out"
        style={{ width: `${progress}%` }}
      />

      <div className="w-full max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between gap-4">
        {/* Logo group */}
        <div className="flex items-center gap-3">
          <a href="/" className={`font-black text-xl tracking-tight leading-none transition-colors ${solid ? "text-gray-900" : "text-white"}`}>
            Tools <span className="text-orange-500">Pro</span>
            <span className={`block text-[10px] font-semibold tracking-widest mt-0 ${solid ? "text-gray-400" : "text-white/40"}`} dir="rtl">
              تولز برو المغرب
            </span>
          </a>
          {/* Bosch badge */}
          <div className={`hidden sm:flex items-center gap-1.5 border rounded-lg px-2 py-1 transition-colors ${solid ? "border-gray-200" : "border-white/15"}`}>
            <Image src="/bosch.svg" alt="Bosch" width={44} height={14} className="h-[14px] w-auto" />
            <span className={`text-[10px] font-semibold ${solid ? "text-gray-500" : "text-white/50"}`}>Officiel</span>
          </div>
        </div>

        {/* Nav links */}
        <nav className={`hidden sm:flex items-center gap-6 text-sm font-medium transition-colors ${solid ? "text-gray-500" : "text-white/60"}`}>
          <a href="#kit" className="hover:text-orange-500 transition-colors">Contenu</a>
          <a href="#specs" className="hover:text-orange-500 transition-colors">Specs</a>
          <a href="#faq" className="hover:text-orange-500 transition-colors">FAQ</a>
          <a href="#contact" className="hover:text-orange-500 transition-colors">Contact</a>
        </nav>

        {/* CTA */}
        <a
          href={`https://wa.me/${WA}?text=${encodeURIComponent("Bonjour, je veux commander.")}`}
          target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1fbd5c] text-white text-sm font-bold px-4 py-2.5 rounded-xl transition-colors"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.13.558 4.13 1.533 5.863L.063 23.5l5.773-1.514A11.935 11.935 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.99 0-3.85-.54-5.45-1.48l-.39-.23-4.028 1.057 1.074-3.92-.25-.4A9.953 9.953 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
          </svg>
          <span className="hidden sm:inline">Commander</span>
        </a>
      </div>
    </header>
  );
}
