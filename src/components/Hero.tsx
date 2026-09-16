"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";

const R2 = "https://pub-c591ee037cf34224a3fb5b70122e4a59.r2.dev/uploads";

const slides = [
  `${R2}/sliders-1.webp`,
  `${R2}/sliders-2.webp`,
  `${R2}/sliders-10.webp`,
  `${R2}/sliders-11.webp`,
  `${R2}/sliders-12.webp`,
];

const words = ["We", "Build", "Moments", "People", "Remember"];

const segments = [
  { text: "Anthem is an ", highlight: false },
  { text: "experiential marketing agency", highlight: true },
  { text: " that builds ideas people don't just see, but ", highlight: false },
  { text: "get to live", highlight: true },
  { text: ". From large-scale festivals and brand activations to creator-led campaigns and ", highlight: false },
  { text: "cultural IPs", highlight: true },
  { text: ", we create work that lives both ", highlight: false },
  { text: "online and offline", highlight: true },
  { text: ".", highlight: false },
];

const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const bandRef = useRef<HTMLDivElement>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const descRef = useRef<HTMLParagraphElement>(null);

  const [slide, setSlide] = useState(0);

  // Entrance animations — all JS-driven inline styles
  useEffect(() => {
    const run = () => {
      wordRefs.current.forEach((el, i) => {
        if (!el) return;
        el.style.transition = `transform 0.7s ${EASE}`;
        el.style.transitionDelay = `${0.2 + i * 0.1}s`;
        el.style.transform = "translateY(0)";
      });
      if (descRef.current) {
        const d = descRef.current;
        d.style.transition = `opacity 0.5s ${EASE}, transform 0.5s ${EASE}`;
        d.style.transitionDelay = "0.7s";
        d.style.opacity = "1";
        d.style.transform = "translateY(0)";
      }
      if (bandRef.current) {
        const b = bandRef.current;
        b.style.transition = `opacity 0.6s ${EASE}, transform 0.6s ${EASE}`;
        b.style.transitionDelay = "0.5s";
        b.style.opacity = "1";
        b.style.transform = "translateY(0)";
      }
    };
    requestAnimationFrame(() => requestAnimationFrame(run));
  }, []);

  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % slides.length), 2500);
    return () => clearInterval(t);
  }, []);

  // Scroll parallax — vanilla JS
  useEffect(() => {
    const section = ref.current;
    const content = contentRef.current;
    const band = bandRef.current;
    if (!section) return;
    const isMobile = window.innerWidth < 640;

    let ticking = false;
    const onScroll = () => {
      if (ticking || isMobile) return;
      ticking = true;
      requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, -rect.top / rect.height));
        if (content) {
          content.style.transform = `translateY(${progress * 160}px)`;
          content.style.opacity = `${1 - progress * 1.25}`;
        }
        if (band) {
          band.style.transform = `translateY(${progress * -80}px)`;
        }
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-screen flex-col justify-start overflow-hidden pt-28 pb-16 sm:justify-center sm:pt-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/4 top-10 h-[20rem] w-[20rem] -translate-x-1/2 rounded-full bg-accent/20 blur-[80px] sm:h-[34rem] sm:w-[34rem] sm:blur-[150px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/3 h-[16rem] w-[16rem] rounded-full blur-[70px] sm:h-[28rem] sm:w-[28rem] sm:blur-[140px]"
        style={{ background: "rgba(108,92,231,0.15)" }}
      />

      <div
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
        className="pointer-events-none absolute -inset-10 opacity-[0.05] hidden sm:block"
      />

      <div
        ref={contentRef}
        className="container-x relative z-10 flex flex-col items-center text-center"
      >
        <h1 className="mx-auto max-w-5xl font-display text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-7xl lg:text-[7rem]">
          {words.map((w, i) => (
            <span key={w} className="inline-block overflow-hidden pb-[0.12em] align-bottom">
              <span
                ref={(el) => { wordRefs.current[i] = el; }}
                className={`mr-4 inline-block ${w === "Moments" ? "text-gradient" : ""}`}
                style={{ transform: "translateY(115%)" }}
              >
                {w}
              </span>
            </span>
          ))}
        </h1>

        <p
          ref={descRef}
          className="mt-8 max-w-2xl font-body text-lg leading-relaxed text-muted"
          style={{ opacity: 0, transform: "translateY(10px)" }}
        >
          {segments.map((segment, i) => (
            <span
              key={i}
              className={segment.highlight ? "text-gradient font-medium" : ""}
            >
              {segment.text}
            </span>
          ))}
        </p>
      </div>

      {/* cinematic image band */}
      <div
        ref={bandRef}
        className="container-x relative z-10 mt-16"
        style={{ opacity: 0, transform: "translateY(10px)" }}
      >
        <div className="relative overflow-hidden rounded-3xl border border-border bg-surface-2">
          <div className="relative aspect-[3/4] w-full overflow-hidden sm:aspect-[21/9]">
            {slides.map((src, i) => (
              <div
                key={src}
                className={`carousel-slide ${i === slide ? "active" : ""}`}
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  className={`object-cover ${
                    src === `${R2}/sliders-2.webp`
                      ? "object-top"
                      : src === `${R2}/sliders-12.webp`
                        ? "object-right sm:object-center"
                        : "object-center"
                  }`}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
                  priority={i === 0}
                />
              </div>
            ))}
            <div className="pointer-events-none absolute inset-0 bg-black/30" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6 sm:p-8" />
          </div>
        </div>
      </div>
    </section>
  );
}
