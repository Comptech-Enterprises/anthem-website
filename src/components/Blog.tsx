"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { posts } from "@/data/posts";
import AnimatedHeading from "./AnimatedHeading";
import Placeholder from "./Placeholder";
import Reveal from "./Reveal";

export default function Blog() {
  return (
    <section id="blog" className="relative pt-40 pb-28 sm:pt-48 sm:pb-36">
      <div className="container-x">
        <div className="max-w-2xl">
          <Reveal>
            <p className="mb-4 flex items-center gap-3 font-hand text-lg text-accent">
              <span className="h-px w-10 bg-accent" />
              The Blog
            </p>
          </Reveal>
          <AnimatedHeading
            text="Stories from behind the experiences"
            highlight="behind the experiences"
            className="font-display text-4xl font-bold leading-tight sm:text-6xl"
          />
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl font-body leading-relaxed text-muted">
              Notes on the craft — how we build live IPs, activations and
              moments that people carry with them long after the lights go down.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="group h-full"
              >
                <Link
                  href={`/blog/${p.slug}`}
                  className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-accent/50"
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
                </Link>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
