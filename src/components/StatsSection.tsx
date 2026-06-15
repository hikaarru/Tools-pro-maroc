"use client";
import { useEffect, useRef, useState } from "react";

interface Stat {
  value: number;
  suffix: string;
  decimals?: number;
  label: string;
}

const stats: Stat[] = [
  { value: 500, suffix: "+",  label: "Commandes livrées" },
  { value: 4.9, suffix: "★",  decimals: 1, label: "Note satisfaction" },
  { value: 24,  suffix: "h",  label: "Délai de livraison" },
  { value: 100, suffix: "%",  label: "Pièces originales" },
];

function Counter({ value, suffix, decimals = 0, label }: Stat) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || started.current) return;
      started.current = true;
      const duration = 1600;
      const t0 = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - t0) / duration, 1);
        const ease = 1 - Math.pow(1 - t, 4); // easeOutQuart
        setCount(ease * value);
        if (t < 1) requestAnimationFrame(tick);
        else setCount(value);
      };
      requestAnimationFrame(tick);
      obs.disconnect();
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [value]);

  const display = decimals > 0
    ? count.toFixed(decimals)
    : Math.floor(count).toString();

  return (
    <div ref={ref} className="text-center group">
      <div className="font-black tabular-nums leading-none mb-3" style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}>
        <span className="text-white">{display}</span>
        <span className="text-orange-500">{suffix}</span>
      </div>
      <div className="text-white/40 text-sm font-medium tracking-wide uppercase">{label}</div>
      <div className="mx-auto mt-4 h-px w-8 bg-orange-500/30 group-hover:w-16 group-hover:bg-orange-500/60 transition-all duration-500" />
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="py-24 bg-[#0d1117]">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((s) => (
            <Counter key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
