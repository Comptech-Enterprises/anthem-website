"use client";

import Image from "next/image";
import Reveal from "./Reveal";

const founders = [
  {
    name: "Shuchir Suri",
    role: "Co-Founder – Strategy & Growth",
    copy: "A sharp business strategist and operator, Shuchir translates ambitious creative ideas into scalable, commercially efficient campaigns. His expertise spans brand strategy, multi-city execution, client partnerships, and growth — ensuring every mandate is both creatively compelling and business-effective.",
    img: "/founders/Shuchir.webp",
    href: "https://shuchir.com/",
  },
  {
    name: "Anjali Batra",
    role: "Co-Founder – Creative & Experience",
    copy: "The creative engine behind Anthem's most iconic work, Anjali brings a consumer-first lens and an instinct for culture. From conceptualising immersive brand worlds to bringing a vision into reality, she ensures every experience feels intentional, premium, and deeply resonant.",
    img: "/founders/Anjali-Batra.webp",
    href: undefined,
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
              {(() => {
                const Card = f.href ? "a" : "div";
                return (
                  <Card
                    {...(f.href
                      ? {
                          href: f.href,
                          target: "_blank",
                          rel: "noopener noreferrer",
                        }
                      : {})}
                    className={`group flex h-full flex-col items-center gap-5 rounded-2xl border border-border bg-background p-6 text-center transition-colors hover:border-accent/50 ${
                      f.href ? "cursor-pointer" : ""
                    }`}
                  >
                    <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden rounded-xl">
                      <Image src={f.img} alt={f.name} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover" unoptimized />
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
                  </Card>
                );
              })()}
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
              We&apos;re a team of 30+ individuals across production, digital, and strategy. Different disciplines, one shared goal: creating work that people want to engage with, talk about and be a part of.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
