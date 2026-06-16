import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import { product } from "@/data/product";
import BoxOrderBtn from "./BoxOrderBtn";

export default function BoxContents() {
  return (
    <section id="kit" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">Contenu du coffret</p>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tighter leading-tight">
            Tout ce dont vous avez besoin,<br className="hidden sm:inline" />
            <span className="text-orange-500"> dès le premier jour.</span>
          </h2>
          <p className="text-gray-400 text-base mt-4 max-w-xl mx-auto" dir="rtl">
            {product.descriptionAr}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Kit image */}
          <ScrollReveal direction="left">
            <div className="relative h-[420px] rounded-3xl overflow-hidden bg-gray-50 shadow-[0_20px_60px_rgba(0,0,0,0.10)]">
              <Image
                src={product.images.kit}
                alt="Contenu du coffret"
                fill
                className="object-contain p-6"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </ScrollReveal>

          {/* Kit list */}
          <div>
            <ScrollReveal direction="right" className="mb-8">
              <div className="flex items-center gap-3">
                <span className="bg-orange-50 border border-orange-100 text-orange-600 font-black text-2xl px-4 py-2 rounded-2xl">
                  {product.kit.length} pièces
                </span>
                <span className="text-gray-400 text-sm">incluses dans le coffret L-Boxx</span>
              </div>
            </ScrollReveal>

            <ul className="space-y-3">
              {product.kit.map((item, i) => (
                <ScrollReveal key={i} delay={(i % 4) as 0 | 1 | 2 | 3}>
                  <li className="flex items-center gap-3 text-gray-700">
                    <span className="w-6 h-6 rounded-full bg-orange-500 text-white text-xs font-black flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    <span className="font-medium">{item}</span>
                  </li>
                </ScrollReveal>
              ))}
            </ul>

            <ScrollReveal delay={3} className="mt-10">
              <BoxOrderBtn />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
