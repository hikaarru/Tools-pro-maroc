import ScrollReveal from "./ScrollReveal";
import { product } from "@/data/product";

export default function Specs() {
  return (
    <section id="specs" className="py-24 bg-[#0d1117]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">Fiche technique</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tighter leading-tight">
            Conçu pour les pros.
          </h2>
          <p className="text-white/40 mt-4 text-base" dir="rtl">المواصفات التقنية</p>
        </ScrollReveal>

        {/* Specs grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/8 rounded-3xl overflow-hidden">
          {product.specs.map((s, i) => (
            <ScrollReveal key={i} delay={(i % 4) as 0 | 1 | 2 | 3} className="bg-[#0d1117] p-7">
              <p className="text-white/35 text-xs font-semibold uppercase tracking-widest mb-1">{s.label}</p>
              <p className="text-white font-black text-2xl leading-tight mb-1">{s.value}</p>
              <p className="text-white/25 text-xs" dir="rtl">{s.labelAr}</p>
            </ScrollReveal>
          ))}
        </div>

        {/* Cert badges */}
        <ScrollReveal delay={2} className="mt-16 flex flex-wrap gap-4 justify-center">
          {[
            { label: "Bosch Original", sub: "100% authentique" },
            { label: "Brushless Motor", sub: "Durée de vie 2× plus longue" },
            { label: "IP 54", sub: "Résistant à la poussière & eau" },
            { label: "Garantie 1 an", sub: "SAV Bosch Maroc" },
          ].map((b) => (
            <div key={b.label} className="border border-white/10 rounded-2xl px-5 py-3 text-center">
              <p className="text-white font-bold text-sm">{b.label}</p>
              <p className="text-white/35 text-xs mt-0.5">{b.sub}</p>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
