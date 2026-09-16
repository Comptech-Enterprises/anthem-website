"use client";

import { useCallback, useEffect, useState, useRef } from "react";
import Image from "next/image";
import AnimatedHeading from "./AnimatedHeading";
import Reveal from "./Reveal";

const testimonials = [
  {
    quote:
      "Anthem created a niche with Gin Explorers Club, and we had been waiting for the right moment to be part of it. It had evolved into this incredible carnival for gin lovers, with enthusiasts coming together in one place. For Jaisalmer Gin, being able to show up where the most passionate gin drinkers already were made all the difference.",
    name: "Abhishek Khaitan",
    org: "Managing Director, Radico Khaitan",
    img: "https://pub-c591ee037cf34224a3fb5b70122e4a59.r2.dev/uploads/testimonials-radico.webp",
  },
  {
    quote:
      "Over the years, Anthem has become an extension of our own team. What I value most is that they're not afraid to speak their mind. They challenge our thinking, push our ideas and help us take them in the right direction.",
    name: "Inderpreet Singh Sethi",
    org: "Marketing Lead, Diageo India",
    img: "https://pub-c591ee037cf34224a3fb5b70122e4a59.r2.dev/uploads/testimonials-diageo.webp",
  },
];

const AUTOPLAY_MS = 5000;

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const progressRef = useRef<HTMLSpanElement>(null);

  const go = useCallback((next: number) => {
    const len = testimonials.length;
    setIndex(((next % len) + len) % len);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => go(index + 1), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [index, paused, go]);

  // Restart progress animation on index change
  useEffect(() => {
    const el = progressRef.current;
    if (!el) return;
    el.style.animation = "none";
    void el.offsetHeight;
    el.style.animation = `autoplay-fill ${AUTOPLAY_MS}ms linear forwards`;
  }, [index, paused]);

  const t = testimonials[index];

  return (
    <section
      id="testimonials"
      className="relative border-t border-border py-28 sm:py-36"
    >
      <div className="container-x">
        <div className="max-w-2xl">
          <Reveal>
            <p className="mb-4 flex items-center gap-3 font-hand text-lg text-accent">
              <span className="h-px w-10 bg-accent" />
              Testimonials
            </p>
          </Reveal>
          <AnimatedHeading
            text="Words From Our Partners"
            highlight="Our Partners"
            className="font-display text-3xl font-bold leading-tight sm:text-5xl"
          />
        </div>

        <Reveal delay={0.1}>
          <div
            className="relative mt-14"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="relative overflow-hidden rounded-3xl border border-border bg-surface px-6 py-12 sm:px-16 sm:py-16">
              <div className="pointer-events-none absolute -right-20 -top-20 hidden h-64 w-64 rounded-full bg-accent/10 blur-[100px] sm:block" />

              <span className="block font-display text-6xl leading-none text-accent/40">
                &ldquo;
              </span>

              <div className="relative min-h-[16rem] sm:min-h-[11rem]">
                {testimonials.map((item, i) => (
                  <div
                    key={i}
                    className={`testimonial-slide ${
                      i === index ? "active" : i < index ? "prev" : ""
                    }`}
                    aria-hidden={i !== index}
                  >
                    <blockquote className="max-w-4xl font-display text-lg font-medium leading-snug text-foreground sm:text-2xl">
                      {item.quote}
                    </blockquote>
                    <figcaption className="mt-8 flex items-center gap-4">
                      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-border bg-background">
                        <Image
                          src={item.img}
                          alt={item.org}
                          fill
                          sizes="48px"
                          className="object-contain p-1.5"
                        />
                      </div>
                      <div>
                        <p className="font-display text-base font-semibold">
                          {item.name}
                        </p>
                        <p className="font-body text-sm text-muted-2">{item.org}</p>
                      </div>
                    </figcaption>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Go to testimonial ${i + 1}`}
                    onClick={() => go(i)}
                    className="group relative h-2 overflow-hidden rounded-full bg-surface-3 transition-all"
                    style={{ width: i === index ? 40 : 10 }}
                  >
                    {i === index && !paused && (
                      <span
                        ref={i === index ? progressRef : undefined}
                        className="absolute inset-0 origin-left rounded-full bg-accent"
                        style={{
                          animation: `autoplay-fill ${AUTOPLAY_MS}ms linear forwards`,
                        }}
                      />
                    )}
                    {i === index && paused && (
                      <span className="absolute inset-0 rounded-full bg-accent" />
                    )}
                  </button>
                ))}
              </div>

              <div className="flex gap-3">
                <button
                  aria-label="Previous"
                  onClick={() => go(index - 1)}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  ←
                </button>
                <button
                  aria-label="Next"
                  onClick={() => go(index + 1)}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
