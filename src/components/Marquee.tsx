"use client";

const items = [
  "World Class India Festival",
  "The Explorers Club",
  "BCG Palooza",
  "Tiny 10 Salon",
  "Product Launches",
  "Brand Activations",
  "360° Campaigns",
  "Live Events & IPs",
];

export default function Marquee() {
  return (
    <section
      aria-label="Selected work"
      className="relative border-y border-border bg-surface/40 py-6"
    >
      <div className="marquee-mask overflow-hidden">
        <div className="animate-marquee flex w-max items-center gap-10 whitespace-nowrap">
          {[...items, ...items].map((item, i) => (
            <span key={i} className="flex items-center gap-10">
              <span className="font-display text-lg font-semibold text-muted-2 transition-colors hover:text-accent sm:text-xl">
                {item}
              </span>
              <span className="text-accent">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
