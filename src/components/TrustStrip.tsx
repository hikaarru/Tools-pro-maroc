const items = [
  { val: "500+",  label: "Commandes livrées" },
  { val: "4.9★",  label: "Satisfaction client" },
  { val: "24h",   label: "Délai de livraison" },
  { val: "100%",  label: "Pièces originales Bosch" },
  { val: "0 DH",  label: "Frais à la commande" },
  { val: "7j/7",  label: "Service client" },
];

export default function TrustStrip() {
  const doubled = [...items, ...items];

  return (
    <div className="bg-orange-500 overflow-hidden py-4 select-none">
      <div className="marquee-track flex gap-0 w-max">
        {doubled.map((c, i) => (
          <div key={i} className="flex items-center shrink-0">
            <span className="font-black text-white text-xl px-2">{c.val}</span>
            <span className="text-orange-100 text-sm pr-6">{c.label}</span>
            <span className="text-white/30 text-base pr-6">·</span>
          </div>
        ))}
      </div>
    </div>
  );
}
