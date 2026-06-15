"use client";
import { useEffect, useRef, type ReactNode } from "react";

type Direction = "up" | "left" | "right" | "scale" | "width";

interface Props {
  children: ReactNode;
  delay?: 0 | 1 | 2 | 3 | 4;
  className?: string;
  direction?: Direction;
}

const dirClass: Record<Direction, string> = {
  up:    "reveal",
  left:  "reveal-left",
  right: "reveal-right",
  scale: "reveal-scale",
  width: "reveal-width",
};

export default function ScrollReveal({ children, delay = 0, className = "", direction = "up" }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); obs.disconnect(); } },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const delay_ = delay > 0 ? `reveal-delay-${delay}` : "";

  return (
    <div ref={ref} className={`${dirClass[direction]} ${delay_} ${className}`}>
      {children}
    </div>
  );
}
