"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import AnimatedHeading from "./AnimatedHeading";
import Reveal from "./Reveal";
import { cases } from "@/data/cases";

const gridVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

// Formats Anthem owns and runs itself — distinct from client work.
const ownedIp = [
  {
    tag: "Media Platform",
    name: "Food Talk",
    title: "Food Talk India",
    summary:
      "India's leading food and drink culture platform that brings together stories, experiences and conversations shaping how India eats, drinks and goes out.",
    href: "https://food-talk-india.vercel.app/",
    external: true,
  },
  {
    tag: "Live Festival",
    name: "The Anthem",
    title: "Explorers Club",
    summary:
      "A lifestyle and culture-led experiential IP built around spirits, flavour, food, music and more. What started as an experience has grown into a culture-led platform, attracting 1.5L+ attendees across 3 cities and building a community around discovery, connection and culture.",
    href: undefined as string | undefined,
    external: false,
  },
];

export default function Services() {
  return (
    <section id="work" className="relative overflow-hidden pt-40 pb-28 sm:pt-48 sm:pb-36">
      {/* drifting ambient glows */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute top-10 left-1/4 h-[520px] w-[520px] rounded-full opacity-[0.09]"
        style={{ background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)" }}
        animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-1/4 h-[440px] w-[440px] rounded-full opacity-[0.06]"
        style={{ background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)" }}
        animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container-x relative">
        {/* header */}
        <div className="mb-16 max-w-2xl">
          <Reveal>
            <p className="mb-4 flex items-center gap-3 font-hand text-lg text-accent">
              <span className="h-px w-10 bg-accent" />
              Our Work
            </p>
          </Reveal>
        </div>

        {/* owned IP */}
        <div className="mb-10">
          <Reveal>
            <AnimatedHeading
              text="Owned IPs"
              highlight="IPs"
              className="font-display text-4xl font-bold sm:text-5xl lg:text-6xl"
            />
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-3 max-w-xl font-body text-base leading-relaxed text-muted">
              Properties we created and run under our own roof.
            </p>
          </Reveal>
        </div>

        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-24 grid gap-6 sm:grid-cols-2"
        >
          {ownedIp.map((ip) => {
            const inner = (
              <>
                <div className="relative flex flex-1 flex-col">
                  <span className="absolute top-6 right-6 z-10 rounded-full border border-border/70 bg-background/60 px-3 py-1 font-body text-[10px] uppercase tracking-[0.14em] text-muted-2">
                    {ip.tag}
                  </span>

                  <h3 className="font-display text-xl font-semibold sm:text-2xl">
                    {ip.title}
                  </h3>
                  <p className="mt-3 font-body text-sm leading-relaxed text-muted">
                    {ip.summary}
                  </p>

                  {ip.href && (
                    <span className="mt-auto flex items-center gap-2 border-t border-border/50 pt-7 font-body text-sm font-medium text-accent">
                      Visit
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  )}
                </div>
              </>
            );

            const cardClass =
              "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface/60 p-7 backdrop-blur-sm transition-colors duration-300 hover:border-accent/50 hover:shadow-[0_28px_80px_-32px_var(--accent-glow)] sm:p-8";

            return (
              <motion.article key={ip.title} variants={cardVariants}>
                {ip.href ? (
                  <a
                    href={ip.href}
                    target={ip.external ? "_blank" : undefined}
                    rel={ip.external ? "noopener noreferrer" : undefined}
                    className={cardClass}
                  >
                    {inner}
                  </a>
                ) : (
                  <div className={cardClass}>{inner}</div>
                )}
              </motion.article>
            );
          })}
        </motion.div>

        {/* brands heading */}
        <div className="mb-10">
          <Reveal>
            <AnimatedHeading
              text="Brands we brought to life"
              highlight="brought to life"
              className="font-display text-4xl font-bold sm:text-5xl lg:text-6xl"
            />
          </Reveal>
        </div>

        {/* case-study grid */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {cases.map((c) => (
            <motion.article key={c.slug} variants={cardVariants}>
              <Link
                href={`/services/${c.slug}`}
                aria-label={`Read the ${c.title} case study`}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface/60 p-7 backdrop-blur-sm transition-colors duration-300 hover:border-accent/50 hover:shadow-[0_28px_80px_-32px_var(--accent-glow)] sm:p-8"
              >
                {/* hover spotlight */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: "radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)" }}
                />
                {/* sheen sweep */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.04] to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
                />

                {/* corner tag */}
                <span className="absolute top-6 right-6 z-10 rounded-full border border-border/70 bg-background/60 px-3 py-1 font-body text-[10px] uppercase tracking-[0.14em] text-muted-2 transition-colors duration-300 group-hover:border-accent/50 group-hover:text-accent">
                  {c.tags[0]}
                </span>

                <div className="relative flex flex-1 flex-col">
                  <h3 className="font-display text-xl font-semibold sm:text-2xl">
                    {c.title}
                  </h3>

                  <p className="mt-3 font-body text-sm leading-relaxed text-muted">
                    {c.summary}
                  </p>

                  {/* read more */}
                  <span className="mt-auto flex items-center gap-2 border-t border-border/50 pt-7 font-body text-sm font-medium text-accent">
                    View case study
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
