"use client";

import { motion } from "framer-motion";
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
          <Reveal>
            <p className="mb-4 flex items-center gap-3 font-hand text-lg text-accent">
              <span className="h-px w-10 bg-accent" />
              Trusted by
            </p>
          </Reveal>
          <AnimatedHeading
            text="Brands that trust us to create the moment"
            highlight="trust us"
            className="font-display text-3xl font-bold leading-tight sm:text-5xl"
          />
        </div>

        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3 lg:grid-cols-4">
          {brands.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.6,
                delay: (i % 4) * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group flex items-center justify-center bg-surface px-6 py-10 transition-colors hover:bg-surface-2"
            >
              <span className="font-display text-xl font-semibold tracking-tight text-muted-2 transition-colors duration-300 group-hover:text-foreground sm:text-2xl">
                {name}
                <span className="text-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  .
                </span>
              </span>
            </motion.div>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-8 font-body text-sm text-muted-2">
            Placeholder roster — brand names and logos to be added.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
