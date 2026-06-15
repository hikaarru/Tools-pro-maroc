import { products } from "@/data/products";
import ProductCard from "./ProductCard";
import ScrollReveal from "./ScrollReveal";

export default function ProductsSection() {
  return (
    <section id="produits" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <ScrollReveal direction="left" className="mb-14">
          <p className="text-orange-500 font-semibold text-sm mb-1">Catalogue · <span dir="rtl" className="font-normal text-orange-400">كتالوجنا</span></p>
          <h2 className="text-4xl font-black text-gray-900 tracking-tight">Nos produits</h2>
          <p className="text-gray-400 text-sm mt-1" dir="rtl">منتجاتنا</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((p, i) => (
            <ScrollReveal key={p.id} delay={(Math.min(i, 4) as 0|1|2|3|4)}>
              <ProductCard product={p} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
