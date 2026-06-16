import Image from "next/image";
import { product } from "@/data/product";

const WA = process.env.NEXT_PUBLIC_WHATSAPP ?? "212600000000";

export default function Hero() {
  const openOrder = `
    <script>
      document.addEventListener('DOMContentLoaded', function() {
        document.querySelectorAll('[data-order]').forEach(function(btn) {
          btn.addEventListener('click', function() {
            window.dispatchEvent(new CustomEvent('open-order', { detail: ${JSON.stringify({ nom: product.nom, prix: product.prix, image: product.images.hero, description: product.description, lienYoucan: product.lienYoucan, id: "hero" })} }));
          });
        });
      });
    </script>
  `;
  void openOrder;

  return (
    <section className="relative min-h-screen bg-[#0d1117] flex flex-col justify-center overflow-hidden">
      {/* Halo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[700px] rounded-full bg-orange-500/8 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 w-full pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* ── Text ─────────────────────────────────── */}
          <div>
            {/* Badge + Bosch */}
            <div className="hero-in flex flex-wrap items-center gap-3 mb-7" style={{ animationDelay: "0.05s" }}>
              <span className="inline-flex items-center gap-2 border border-white/10 text-white/60 text-xs px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                En stock · متوفر
              </span>
              {product.badge && (
                <span className="bg-orange-500 text-white text-[11px] font-black px-2.5 py-1 rounded-lg uppercase tracking-wide">
                  {product.badge}
                </span>
              )}
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-white leading-[1.05] tracking-tighter mb-3">
              <span className="line-clip"><span className="line-inner" style={{ animationDelay: "0.10s" }}>Perceuse</span></span>
              <span className="line-clip"><span className="line-inner text-orange-500" style={{ animationDelay: "0.22s" }}>Bosch Pro</span></span>
              <span className="line-clip"><span className="line-inner" style={{ animationDelay: "0.34s" }}>36V Kit.</span></span>
            </h1>

            {/* Arabic name */}
            <div className="hero-in mb-6" style={{ animationDelay: "0.42s" }}>
              <p className="text-white/25 text-sm font-semibold" dir="rtl">{product.nomAr}</p>
            </div>

            {/* Description */}
            <div className="hero-in mb-8" style={{ animationDelay: "0.48s" }}>
              <p className="text-white/55 text-base leading-relaxed max-w-sm">{product.description}</p>
            </div>

            {/* Price */}
            <div className="hero-in mb-8" style={{ animationDelay: "0.54s" }}>
              <div className="flex items-baseline gap-3">
                <span className="text-5xl font-black text-white">{product.prix}</span>
                <span className="text-white/40 text-sm">{product.prixNote}</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="hero-in flex flex-col sm:flex-row gap-3" style={{ animationDelay: "0.62s" }}>
              <HeroOrderBtn />
              <a
                href={`https://wa.me/${WA}?text=${encodeURIComponent("Bonjour, je veux commander : " + product.nom)}`}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-white/15 hover:border-white/30 text-white font-bold px-7 py-4 rounded-2xl text-base transition-all hover:bg-white/5"
              >
                <svg className="w-5 h-5 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.13.558 4.13 1.533 5.863L.063 23.5l5.773-1.514A11.935 11.935 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.99 0-3.85-.54-5.45-1.48l-.39-.23-4.028 1.057 1.074-3.92-.25-.4A9.953 9.953 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                </svg>
                WhatsApp
              </a>
            </div>

            {/* Microtrust */}
            <div className="hero-in flex flex-wrap gap-5 mt-9 text-sm text-white/35" style={{ animationDelay: "0.72s" }}>
              <span>✓ Paiement à la livraison</span>
              <span>✓ Garantie Bosch 1 an</span>
              <span>✓ SAV 7j/7</span>
            </div>
          </div>

          {/* ── Product image ────────────────────────── */}
          <div className="hero-in relative flex items-center justify-center h-[440px]" style={{ animationDelay: "0.18s" }}>
            {/* Rating badge */}
            <div className="float-a absolute top-4 right-0 bg-white rounded-2xl px-4 py-3 shadow-2xl z-20">
              <div className="flex items-center gap-1 mb-0.5">
                {[1,2,3,4,5].map(s => (
                  <svg key={s} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <p className="text-xs text-gray-500 font-medium">4.9 · 500+ avis</p>
            </div>

            {/* Delivery badge */}
            <div className="float-b absolute bottom-6 left-0 bg-orange-500 text-white rounded-2xl px-4 py-3 z-20">
              <p className="font-black text-xl leading-none">24h</p>
              <p className="text-orange-100 text-xs">Livraison</p>
            </div>

            <HeroImage />
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/25 text-xs">
        <span>Découvrir</span>
        <svg className="w-4 h-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7"/>
        </svg>
      </div>
    </section>
  );
}

/* ── Client sub-components ───────────────────────────────────────── */
import HeroImage from "./HeroImage";
import HeroOrderBtn from "./HeroOrderBtn";
