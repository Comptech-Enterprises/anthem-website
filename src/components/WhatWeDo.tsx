"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import AnimatedHeading from "./AnimatedHeading";
import Placeholder from "./Placeholder";

const cards = [
  { title: "Digital", href: "/services#digital" },
  { title: "Events", href: "/services#events" },
  {
    title: "Experiential Brand Activation",
    href: "/services#experiential",
  },
  { title: "Owned IPs", href: "/services#owned-ips" },
];

export default function WhatWeDo() {
  return (
    <section className="relative border-t border-border py-24 sm:py-32">
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[700px] rounded-full opacity-[0.05]"
        style={{
          background:
            "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
        }}
      />

      <div className="container-x relative">
        <div className="mb-16 max-w-2xl">
          <Reveal>
            <p className="mb-4 flex items-center gap-3 font-hand text-lg text-accent">
              <span className="h-px w-10 bg-accent" />
              Our Expertise
            </p>
          </Reveal>
          <AnimatedHeading
            text="What We Do"
            highlight="We Do"
            as="h2"
            className="font-display text-4xl font-bold sm:text-5xl lg:text-6xl"
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {cards.map((card, i) => (
            <Reveal key={card.title} delay={0.08 * i}>
              <motion.a
                href={card.href}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative block overflow-hidden rounded-2xl border border-border"
              >
                <Placeholder
                  label={card.title}
                  ratio="aspect-[16/10]"
                  className="w-full !rounded-none !border-0"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 transition-opacity group-hover:from-black/90" />

                <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
                  <h3 className="font-display text-xl font-bold text-white sm:text-2xl lg:text-3xl text-center px-4">
                    {card.title}
                  </h3>
                  <span className="inline-flex items-center gap-2 rounded border border-white/40 px-6 py-2.5 font-body text-xs uppercase tracking-[0.2em] text-white/90 transition-all group-hover:border-accent group-hover:text-accent group-hover:shadow-[0_0_20px_var(--accent-glow)]">
                    View All
                  </span>
                </div>
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
