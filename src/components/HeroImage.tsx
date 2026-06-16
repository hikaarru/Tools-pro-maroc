"use client";
import Image from "next/image";
import { useRef } from "react";
import { product } from "@/data/product";

export default function HeroImage() {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width  - 0.5) * 10;
    const y = ((e.clientY - r.top)  / r.height - 0.5) * -10;
    el.style.transform = `perspective(800px) rotateX(${y}deg) rotateY(${x}deg) scale(1.03)`;
    el.style.transition = "transform 0.06s ease";
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)";
    el.style.transition = "transform 0.6s cubic-bezier(0.16,1,0.3,1)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="relative w-full h-full rounded-3xl overflow-hidden"
      style={{ willChange: "transform" }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/15 via-transparent to-transparent rounded-3xl" />
      <Image
        src={product.images.hero}
        alt={product.nom}
        fill
        className="object-cover object-center"
        sizes="(max-width: 1024px) 100vw, 50vw"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117]/40 via-transparent to-transparent" />
    </div>
  );
}
