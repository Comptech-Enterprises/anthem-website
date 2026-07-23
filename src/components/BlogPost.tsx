"use client";

import Link from "next/link";
import AnimatedHeading from "./AnimatedHeading";
import Placeholder from "./Placeholder";
import Reveal from "./Reveal";
import type { Post } from "@/data/posts";

export default function BlogPost({ post }: { post: Post }) {
  return (
    <article className="relative pt-40 pb-28 sm:pt-48 sm:pb-36">
      <div className="container-x">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 font-body text-sm text-muted transition-colors hover:text-accent"
            >
              <span className="transition-transform group-hover:-translate-x-1">
                ←
              </span>
              All stories
            </Link>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="mt-8 flex items-center gap-3 font-body text-xs text-muted-2">
              <span className="uppercase tracking-[0.25em] text-accent">
                {post.category}
              </span>
              <span className="h-1 w-1 rounded-full bg-muted-2" />
              <span>{post.date}</span>
              <span className="h-1 w-1 rounded-full bg-muted-2" />
              <span>{post.read}</span>
            </div>
          </Reveal>

          <AnimatedHeading
            text={post.title}
            className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl"
          />
        </div>

        <Reveal delay={0.1} className="mx-auto mt-12 max-w-4xl">
          <Placeholder label={post.category} ratio="aspect-[21/9]" />
        </Reveal>

        <div className="mx-auto mt-12 max-w-2xl">
          <Reveal delay={0.05}>
            <p className="font-body text-xl leading-relaxed text-foreground">
              {post.excerpt}
            </p>
          </Reveal>

          <div className="mt-8 flex flex-col gap-6">
            {post.body.map((para, i) => (
              <Reveal key={i} delay={0.05 + i * 0.03}>
                <p className="font-body text-lg leading-relaxed text-muted">
                  {para}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-14 border-t border-border pt-8">
              <Link
                href="/#enquiry"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-body font-medium text-black transition-shadow hover:shadow-[0_0_35px_var(--accent-glow)]"
              >
                Let's work together
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </article>
  );
}
