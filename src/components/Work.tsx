"use client";

import { motion } from "framer-motion";
import Placeholder from "./Placeholder";
import Reveal from "./Reveal";

const projects = [
  {
    title: "World Class India Festival",
    tag: "Live Event & IP",
    span: "lg:col-span-2",
  },
  { title: "Explorers Club", tag: "World's Largest Gin Festival", span: "" },
  { title: "BCG Palooza", tag: "Brand Activation", span: "" },
  { title: "Tiny 10 Salon", tag: "Experiential Pop-Up", span: "" },
  { title: "Product Launches", tag: "360° Campaign", span: "lg:col-span-2" },
];

export default function Work() {
  return (
    <section id="work" className="relative py-28 sm:py-36">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <Reveal>
              <p className="mb-4 flex items-center gap-3 font-body text-sm uppercase tracking-[0.35em] text-accent">
                <span className="h-px w-10 bg-accent" />
                Our Work
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display text-3xl font-bold sm:text-5xl">
                Campaigns that{" "}
                <span className="text-gradient">left a mark</span>
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 0.08}
              className={p.span}
            >
              <motion.article
                whileHover="hover"
                className="group relative h-full cursor-pointer overflow-hidden rounded-2xl border border-border"
              >
                <motion.div
                  variants={{ hover: { scale: 1.05 } }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Placeholder
                    label={p.title}
                    ratio={p.span ? "aspect-[21/9]" : "aspect-[4/5]"}
                  />
                </motion.div>

                {/* overlay */}
                <div className="pointer-events-none absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/85 via-black/20 to-transparent p-6">
                  <motion.div
                    variants={{ hover: { y: 0, opacity: 1 } }}
                    initial={{ y: 8 }}
                  >
                    <span className="font-body text-xs uppercase tracking-[0.25em] text-accent">
                      {p.tag}
                    </span>
                    <h3 className="mt-1 font-display text-xl font-semibold sm:text-2xl">
                      {p.title}
                    </h3>
                  </motion.div>
                </div>

                <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-accent text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  ↗
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
