"use client";

import AnimatedHeading from "./AnimatedHeading";
import Reveal from "./Reveal";

// Placeholder client roster — swap these for real brand names/logos.
const brands = [
  "Aurora",
  "Northwind",
  "Solstice",
  "Vertex",
  "Meridian",
  "Lumen",
  "Cobalt",
  "Halcyon",
  "Everest",
  "Quill",
  "Zephyr",
  "Ironwood",
];

export default function Brands() {
  return (
    <section
      id="brands"
      aria-label="Brands that trust us"
      className="relative border-t border-border py-24 sm:py-32"
    >
      <div className="container-x">
        <div className="max-w-2xl">
          <AnimatedHeading
            text="Brands we've created great work with"
            highlight="great work"
            className="font-display text-3xl font-bold leading-tight sm:text-5xl"
          />
        </div>

        <Reveal delay={0.1}>
          <p className="mt-6 font-body text-sm text-muted-2">
            Placeholder roster — brand names and logos to be added.
          </p>
        </Reveal>
      </div>

      {/* auto-scrolling brand slider */}
      <div className="marquee-mask mt-12 overflow-hidden">
        <div className="animate-marquee flex w-max items-center gap-4 whitespace-nowrap">
          {[...brands, ...brands].map((name, i) => (
            <span
              key={i}
              className="group flex items-center justify-center rounded-2xl border border-border bg-surface px-10 py-8 transition-colors hover:border-accent/50 hover:bg-surface-2"
            >
              <span className="font-display text-xl font-semibold tracking-tight text-muted-2 transition-colors duration-300 group-hover:text-foreground sm:text-2xl">
                {name}
                <span className="text-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  .
                </span>
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
