"use client";

import Image from "next/image";
import Reveal from "./Reveal";

const founders = [
  {
    name: "Shuchir Suri",
    role: "Co-Founder – Strategy & Growth",
    copy: "A sharp business strategist and operator, Shuchir translates ambitious creative ideas into scalable, commercially efficient campaigns. His expertise spans brand strategy, multi-city execution, client partnerships, and growth — ensuring every mandate is both creatively compelling and business-effective.",
    img: "https://pub-c591ee037cf34224a3fb5b70122e4a59.r2.dev/uploads/founders-Shuchir.webp",
    href: "http://shuchir.theanthem.in/",
    linkedin: "https://www.linkedin.com/in/shuchir-suri-058251b",
  },
  {
    name: "Anjali Batra",
    role: "Co-Founder – Creative & Experience",
    copy: "The creative engine behind Anthem's most iconic work, Anjali brings a consumer-first lens and an instinct for culture. From conceptualising immersive brand worlds to bringing a vision into reality, she ensures every experience feels intentional, premium, and deeply resonant.",
    img: "https://pub-c591ee037cf34224a3fb5b70122e4a59.r2.dev/uploads/founders-Anjali-Batra.webp",
    href: undefined,
    linkedin: "https://www.linkedin.com/in/anjali-batra-1b45a636",
  },
];

export default function Founders() {
  return (
    <section className="relative border-t border-border bg-surface/60 py-28 backdrop-blur-sm sm:py-36">
      <div className="container-x">
        <Reveal>
          <p className="mb-4 flex items-center gap-3 font-hand text-lg text-accent">
            <span className="h-px w-10 bg-accent" />
            The Founders
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="max-w-3xl font-display text-3xl font-bold sm:text-5xl">
            The Minds Behind Anthem
          </h2>
        </Reveal>

        <div className="mt-14 flex flex-wrap justify-start gap-6">
          {founders.map((f, i) => (
            <Reveal key={f.name} delay={0.1 + i * 0.1} className="w-full sm:flex-1">
              <div
                onClick={() => {
                  if (f.href) {
                    window.open(f.href, "_blank", "noopener,noreferrer");
                  }
                }}
                className={`group flex h-full flex-col items-center justify-between gap-5 rounded-2xl border border-border bg-background p-6 text-center transition-colors hover:border-accent/50 ${
                  f.href ? "cursor-pointer" : ""
                }`}
              >
                <div className="flex w-full flex-col items-center gap-5">
                  <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden rounded-xl">
                    <Image
                      src={f.img}
                      alt={f.name}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className={`object-cover transition-transform duration-500 ${
                        f.href ? "group-hover:scale-105" : ""
                      }`}
                    />
                  </div>

                  <div>
                    <span className="font-body text-xs uppercase tracking-[0.25em] text-accent">
                      {f.role}
                    </span>
                    <h3 className="mt-1 font-display text-2xl font-semibold">
                      {f.name}
                    </h3>
                    <p className="mt-3 font-body leading-relaxed text-muted">
                      {f.copy}
                    </p>
                  </div>
                </div>

                <div className="mt-2 flex flex-wrap items-center justify-center gap-3 pt-2">
                  {f.linkedin && (
                    <a
                      href={f.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      aria-label={`${f.name} on LinkedIn`}
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 font-body text-xs text-muted transition-all hover:border-accent hover:text-accent hover:shadow-[0_0_15px_var(--accent-glow)]"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
                        <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21H9z" />
                      </svg>
                      <span>LinkedIn</span>
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 border-t border-border pt-14">
          <Reveal>
            <p className="mb-4 flex items-center gap-3 font-hand text-lg text-accent">
              <span className="h-px w-10 bg-accent" />
              The Team
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="font-body text-lg leading-relaxed text-muted">
              We&apos;re a 30+ strong team of strategists, creators, producers and digital minds who bring different perspectives to the same table — turning ideas into experiences, stories and work that people remember.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
