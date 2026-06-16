import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import { product } from "@/data/product";

const photos = [
  { src: product.images.hero,   alt: "Perceuse Bosch GSR 170-LI 36V" },
  { src: product.images.kit,    alt: "Kit complet 100 pièces" },
  { src: product.images.case,   alt: "Coffret L-Boxx Bosch" },
  { src: product.images.detail, alt: "Mandrin auto-serrant 13mm" },
  { src: product.images.angle2, alt: "Perceuse brushless en coffret" },
  { src: product.images.angle3, alt: "Vue kit complet" },
];

export default function Gallery() {
  return (
    <section id="galerie" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <ScrollReveal className="text-center mb-14">
          <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">Galerie</p>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tighter">
            Chaque détail compte.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((p, i) => (
            <ScrollReveal key={i} delay={(i % 4) as 0 | 1 | 2 | 3}
              className={i === 0 ? "col-span-2 md:col-span-1 md:row-span-2" : ""}
            >
              <div className={`relative overflow-hidden rounded-2xl bg-white shadow-sm group ${
                i === 0 ? "h-64 md:h-full md:min-h-[440px]" : "h-52"
              }`}>
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  className="object-cover group-hover:scale-[1.06] transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
