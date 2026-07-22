"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

const services = [
  {
    title: "Live Events & IPs",
    copy: "Owned festivals and format IPs designed to build brand equity and audiences.",
  },
  {
    title: "Experiential Strategy",
    copy: "Insight-led planning that turns brand objectives into experiences people feel.",
  },
  {
    title: "Content Production",
    copy: "Films, social, and campaign content produced end-to-end for every screen.",
  },
  {
    title: "Brand Activations",
    copy: "On-ground and retail activations that immerse, engage and convert.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative border-y border-border bg-surface/60 py-28 backdrop-blur-sm sm:py-36"
    >
      <div className="container-x">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <Reveal>
              <p className="mb-4 flex items-center gap-3 font-body text-sm uppercase tracking-[0.35em] text-accent">
                <span className="h-px w-10 bg-accent" />
                Services
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display text-3xl font-bold sm:text-5xl">
                360° Brand Campaigns
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-sm font-body text-muted">
              One partner, end to end — from the first insight to the final
              activation.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 divide-y divide-border border-t border-border">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <motion.div
                whileHover="hover"
                className="group relative grid grid-cols-1 items-center gap-4 py-8 sm:grid-cols-[auto_1fr_auto]"
              >
                <span className="font-display text-sm text-muted-2">
                  0{i + 1}
                </span>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-10">
                  <h3 className="font-display text-2xl font-semibold transition-colors group-hover:text-accent sm:text-3xl">
                    {s.title}
                  </h3>
                  <p className="max-w-md font-body text-muted">{s.copy}</p>
                </div>
                <motion.span
                  variants={{ hover: { x: 8, opacity: 1 } }}
                  className="hidden text-2xl text-accent opacity-40 sm:block"
                >
                  →
                </motion.span>
                <motion.span
                  aria-hidden
                  variants={{ hover: { scaleX: 1 } }}
                  initial={{ scaleX: 0 }}
                  className="absolute bottom-0 left-0 h-px w-full origin-left bg-accent"
                />
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
