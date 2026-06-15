"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function HeroImage() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      el.style.transform = `translateY(${window.scrollY * 0.1}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={ref} className="absolute inset-0 will-change-transform">
      <Image
        src="/products/cle-impact-108v.jpg"
        alt="Clé à choc Bosch 108V"
        fill
        className="object-contain drop-shadow-2xl"
        priority
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
    </div>
  );
}
