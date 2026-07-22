"use client";

import { motion } from "framer-motion";
import Placeholder from "./Placeholder";
import Reveal from "./Reveal";

const posts = [
  {
    category: "Behind the Scenes",
    title: "Building the World Class India Festival, day by day",
    excerpt:
      "How a bold idea became a multi-city celebration — the logistics, the late nights, and the moments that made it worth it.",
    date: "Jun 2026",
    read: "6 min read",
  },
  {
    category: "Insights",
    title: "What actually makes an experience memorable",
    excerpt:
      "Spectacle fades. Emotion sticks. A look at the psychology behind the experiences people never forget.",
    date: "May 2026",
    read: "4 min read",
  },
  {
    category: "Strategy",
    title: "Five trends reshaping brand activations in 2026",
    excerpt:
      "From hyper-local IPs to always-on content ecosystems — where experiential marketing is heading next.",
    date: "Apr 2026",
    read: "5 min read",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="relative border-t border-border py-28 sm:py-36">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <Reveal>
              <p className="mb-4 flex items-center gap-3 font-hand text-lg text-accent">
                <span className="h-px w-10 bg-accent" />
                The Journal
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display text-3xl font-bold leading-tight sm:text-5xl">
                Stories from{" "}
                <span className="text-gradient">behind the experiences</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <a
              href="#blog"
              className="font-body text-sm text-accent underline-offset-4 hover:underline"
            >
              View all articles →
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-accent/50"
              >
                <div className="overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Placeholder label={p.category} ratio="aspect-[16/10]" />
                  </motion.div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="font-body text-xs uppercase tracking-[0.25em] text-accent">
                    {p.category}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-semibold leading-snug transition-colors group-hover:text-accent">
                    {p.title}
                  </h3>
                  <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-muted">
                    {p.excerpt}
                  </p>
                  <div className="mt-5 flex items-center gap-3 font-body text-xs text-muted-2">
                    <span>{p.date}</span>
                    <span className="h-1 w-1 rounded-full bg-muted-2" />
                    <span>{p.read}</span>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
