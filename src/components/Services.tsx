"use client";

import { motion } from "framer-motion";
import Placeholder from "./Placeholder";
import Reveal from "./Reveal";

type Category = {
  key: string;
  label: string;
  title: string;
  description: string;
  offerings: string[];
  projects: { title: string; tag: string }[];
};

const categories: Category[] = [
  {
    key: "digital",
    label: "01 — Digital",
    title: "Digital",
    description:
      "We build brands where audiences actually live — on their screens. From always-on social storytelling to high-craft films and performance-led campaigns, we plan, produce and publish content that earns attention and drives measurable action.",
    offerings: [
      "Social Media & Community",
      "Content Production",
      "Films, Reels & Motion",
      "Performance Marketing",
      "Web & Digital Experiences",
    ],
    projects: [
      { title: "Always-On Social", tag: "Content System" },
      { title: "Brand Film", tag: "Film & Motion" },
      { title: "Performance Campaign", tag: "Growth" },
    ],
  },
  {
    key: "events",
    label: "02 — Events",
    title: "Events",
    description:
      "We turn spaces into stories. From owned festival IPs to brand activations, launches and immersive pop-ups, we design and deliver on-ground experiences end-to-end — where audiences don't just watch, they take part.",
    offerings: [
      "Live Events & Owned IPs",
      "Brand Activations",
      "Product Launches",
      "Experiential Pop-Ups",
      "Stage, Set & Production",
    ],
    projects: [
      { title: "World Class India Festival", tag: "Live IP" },
      { title: "Explorers Club", tag: "Festival" },
      { title: "BCG Palooza", tag: "Activation" },
    ],
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
          <div className="max-w-2xl">
            <Reveal>
              <p className="mb-4 flex items-center gap-3 font-hand text-lg text-accent">
                <span className="h-px w-10 bg-accent" />
                Services
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display text-3xl font-bold leading-tight sm:text-5xl">
                Digital & Events —{" "}
                <span className="text-gradient">one seamless brand story</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-sm font-body text-muted">
              One partner, end to end — from the first insight to the final
              activation, across every screen and every stage.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 flex flex-col gap-20">
          {categories.map((cat) => (
            <div key={cat.key}>
              {/* header + description */}
              <div className="grid gap-8 border-t border-border pt-10 lg:grid-cols-[0.9fr_1.1fr]">
                <Reveal>
                  <div>
                    <span className="font-body text-xs uppercase tracking-[0.3em] text-muted-2">
                      {cat.label}
                    </span>
                    <h3 className="mt-3 font-display text-4xl font-bold sm:text-6xl">
                      {cat.title}
                    </h3>
                  </div>
                </Reveal>
                <Reveal delay={0.1}>
                  <div>
                    <p className="font-body text-lg leading-relaxed text-muted">
                      {cat.description}
                    </p>
                    <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
                      {cat.offerings.map((o) => (
                        <li
                          key={o}
                          className="flex items-center gap-2 font-body text-sm text-foreground"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                          {o}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </div>

              {/* project images */}
              <div className="mt-10 grid gap-5 sm:grid-cols-3">
                {cat.projects.map((p, j) => (
                  <Reveal key={p.title} delay={0.1 + j * 0.08}>
                    <motion.article
                      whileHover="hover"
                      className="group relative h-full cursor-pointer overflow-hidden rounded-2xl border border-border"
                    >
                      <motion.div
                        variants={{ hover: { scale: 1.05 } }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <Placeholder label={p.title} ratio="aspect-[4/3]" />
                      </motion.div>
                      <div className="pointer-events-none absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/85 via-black/20 to-transparent p-5">
                        <span className="font-body text-[11px] uppercase tracking-[0.25em] text-accent">
                          {p.tag}
                        </span>
                        <h4 className="mt-1 font-display text-lg font-semibold">
                          {p.title}
                        </h4>
                      </div>
                    </motion.article>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
