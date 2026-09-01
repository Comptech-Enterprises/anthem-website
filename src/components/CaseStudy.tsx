"use client";

import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion, useInView } from "framer-motion";
import React, { useCallback, useEffect, useRef, useState } from "react";
import AnimatedHeading from "./AnimatedHeading";
import MagneticButton from "./MagneticButton";
import Placeholder from "./Placeholder";
import Reveal from "./Reveal";
import type { CaseStudy as CaseStudyType } from "@/data/cases";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const scaleFade = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

function useCountUp(target: string, active: boolean) {
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!active) return;
    const match = target.match(/^(\D*)([\d,]+)(\D*)$/);
    if (!match) { setDisplay(target); return; }
    const [, pre, raw, suf] = match;
    const end = parseInt(raw.replace(/,/g, ""), 10);
    if (isNaN(end)) { setDisplay(target); return; }

    let startTs: number;
    const duration = 1200;
    const raf = (ts: number) => {
      if (!startTs) startTs = ts;
      const p = Math.min((ts - startTs) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const cur = Math.round(eased * end);
      setDisplay(pre + cur.toLocaleString() + suf);
      if (p < 1) requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, [active, target]);

  return display;
}

function ResultCard({ value, label }: { value: string; label: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const display = useCountUp(value, inView);

  return (
    <motion.div
      ref={ref}
      variants={scaleFade}
      className="rounded-2xl border border-border bg-surface/60 p-7 text-center backdrop-blur-sm sm:text-left"
    >
      <p className="break-words font-display text-3xl font-bold text-gradient sm:text-4xl">
        {display}
      </p>
      <p className="mt-3 font-body text-sm leading-relaxed text-muted">{label}</p>
    </motion.div>
  );
}

function VideoSlide({
  src,
  onRatio,
  fit = "object-cover",
}: {
  src: string;
  onRatio?: (r: number) => void;
  fit?: string;
}) {
  const [ready, setReady] = useState(false);
  const [muted, setMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setMuted(videoRef.current.muted);
  };

  return (
    <div className="absolute inset-0 bg-surface">
      <video
        ref={(el) => {
          (videoRef as React.MutableRefObject<HTMLVideoElement | null>).current = el;
          if (!el) return;
          const report = () => {
            if (el.videoWidth && el.videoHeight) onRatio?.(el.videoWidth / el.videoHeight);
          };
          if (el.readyState >= 1) report();
          else el.addEventListener("loadedmetadata", report, { once: true });
          el.play().catch(() => {
            el.muted = true;
            setMuted(true);
            el.play().catch(() => {});
          });
        }}
        src={src}
        autoPlay
        loop
        playsInline
        preload="none"
        onCanPlay={() => setReady(true)}
        className={`h-full w-full ${fit}`}
      />
      <div
        className="pointer-events-none absolute inset-0 animate-pulse bg-gradient-to-r from-surface via-border/30 to-surface transition-opacity duration-700"
        style={{ opacity: ready ? 0 : 1 }}
      />
      <button
        onClick={toggleMute}
        aria-label={muted ? "Unmute video" : "Mute video"}
        className="absolute bottom-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-black/70"
      >
        {muted ? (
          <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2">
            <path d="M11 5L6 9H2v6h4l5 4V5z" />
            <line x1="23" y1="9" x2="17" y2="15" />
            <line x1="17" y1="9" x2="23" y2="15" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2">
            <path d="M11 5L6 9H2v6h4l5 4V5z" />
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
          </svg>
        )}
      </button>
    </div>
  );
}

type Slide =
  | { kind: "video"; src: string }
  | { kind: "image"; src: string }
  | { kind: "placeholder"; src: string };

function buildSlides(data: CaseStudyType): Slide[] {
  const slides: Slide[] = [];
  const videos = data.video ? (Array.isArray(data.video) ? data.video : [data.video]) : [];
  for (const v of videos) slides.push({ kind: "video", src: v });
  for (const m of data.media) {
    slides.push(
      m.startsWith("/") || m.startsWith("http") ? { kind: "image", src: m } : { kind: "placeholder", src: m }
    );
  }
  return slides;
}

function MediaCarousel({
  slides,
  title,
  className = "",
  fixedAspect,
}: {
  slides: Slide[];
  title: string;
  className?: string;
  fixedAspect?: number;
}) {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const [paused, setPaused] = useState(false);
  const [ratios, setRatios] = useState<Record<number, number>>({});
  const len = slides.length;

  const setRatio = useCallback((i: number, r: number) => {
    setRatios((prev) => (prev[i] === r ? prev : { ...prev, [i]: r }));
  }, []);

  const go = useCallback(
    (next: number, direction?: number) => {
      if (len < 2) return;
      const wrapped = ((next % len) + len) % len;
      setDir(direction ?? (wrapped > index ? 1 : -1));
      setIndex(wrapped);
    },
    [index, len],
  );

  useEffect(() => {
    if (len < 2) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(index + 1, 1);
      if (e.key === "ArrowLeft") go(index - 1, -1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, index, len]);

  useEffect(() => {
    if (len < 2 || paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const delay = slides[index]?.kind === "video" ? 8000 : 4500;
    const t = window.setTimeout(() => go(index + 1, 1), delay);
    return () => window.clearTimeout(t);
  }, [go, index, len, paused, slides]);

  if (len === 0) return null;

  const slide = slides[index];
  const r = ratios[index];
  // Every video slide across every case study renders at the same fixed
  // frame size (object-cover crops to fill) so pages don't jump between a
  // full 4K landscape box and a small shrunk portrait box. Images keep
  // their native ratio (whole photo shows, no crop) unless fixedAspect is set.
  const VIDEO_ASPECT = 4 / 5;
  const nativeFrame = !fixedAspect && slide.kind === "image";
  const videoFit = "object-cover";
  const effectiveAspect = fixedAspect ?? (slide.kind === "video" ? VIDEO_ASPECT : nativeFrame ? (r ?? 5 / 4) : undefined);

  return (
    <div
      className={`relative mx-auto w-full overflow-hidden rounded-2xl border border-border bg-surface ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div
        className={`relative w-full overflow-hidden bg-surface transition-[aspect-ratio] duration-500 ${
          effectiveAspect === undefined ? "aspect-square sm:aspect-[5/3] lg:aspect-[5/4]" : ""
        }`}
        style={{ aspectRatio: effectiveAspect }}
      >
        <AnimatePresence initial={false} custom={dir} mode="popLayout">
          <motion.div
            key={`${slide.kind}-${slide.src}-${index}`}
            custom={dir}
            initial={{ x: dir * 48, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: dir * -48, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            drag={len > 1 ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.18}
            onDragEnd={(_, info) => {
              if (info.offset.x < -60) go(index + 1, 1);
              else if (info.offset.x > 60) go(index - 1, -1);
            }}
            className="absolute inset-0 cursor-grab active:cursor-grabbing"
          >
            {slide.kind === "video" ? (
              <VideoSlide src={slide.src} fit={videoFit} onRatio={(r) => setRatio(index, r)} />
            ) : slide.kind === "image" ? (
              <Image
                src={slide.src}
                alt={title}
                fill
                sizes="(max-width: 1024px) 100vw, 70vw"
                className={fixedAspect ? "object-cover" : "object-contain"}
                draggable={false}
                onLoad={(e) => {
                  const img = e.currentTarget;
                  if (img.naturalWidth && img.naturalHeight)
                    setRatio(index, img.naturalWidth / img.naturalHeight);
                }}
              />
            ) : (
              <Placeholder label={slide.src} ratio="aspect-square" className="h-full w-full" />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {len > 1 && (
        <>
          <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2">
            {slides.map((s, i) => (
              <button
                key={`${s.kind}-${s.src}`}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => go(i, i >= index ? 1 : -1)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-6 bg-accent" : "w-1.5 bg-white/35 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function CaseStudy({ data }: { data: CaseStudyType }) {
  const slides = buildSlides(data);

  return (
    <article className="relative pt-24 pb-28 sm:pt-44 sm:pb-36">
      <div
        aria-hidden
        className="pointer-events-none absolute top-10 left-1/4 h-[520px] w-[520px] rounded-full opacity-[0.08]"
        style={{ background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)" }}
      />

      <div className="container-x relative">
        {/* back link */}
        <Reveal>
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 font-body text-sm text-muted transition-colors hover:text-accent"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
            All work
          </Link>
        </Reveal>

        {/* header */}
        <header className="mt-8 max-w-3xl">
          <Reveal>
            <p className="mb-4 flex items-center gap-3 font-hand text-lg text-accent">
              <span className="h-px w-10 bg-accent" />
              {data.company}
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <AnimatedHeading
              text={data.title}
              className="font-display text-4xl font-bold sm:text-5xl lg:text-6xl"
            />
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-6 flex flex-wrap gap-2">
              {data.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border/70 px-3 py-1 font-body text-[11px] uppercase tracking-[0.12em] text-muted"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </header>

        <div className="mt-14 grid items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          <div className={`order-2 flex flex-col justify-center gap-10 lg:order-none ${slides.length > 0 ? "lg:col-span-5" : "lg:col-span-12 lg:max-w-3xl"}`}>
            <Reveal>
              <div className="flex gap-6">
                <div className="w-1 shrink-0 rounded-full bg-gradient-to-b from-accent to-accent/20" />
                <div>
                  <p className="mb-3 font-body text-xs uppercase tracking-[0.2em] text-accent">Overview</p>
                  <p className="font-body text-lg leading-relaxed text-muted">{data.overview}</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="flex gap-6">
                <div className="w-1 shrink-0 rounded-full bg-gradient-to-b from-accent to-accent/20" />
                <div>
                  <p className="mb-3 font-body text-xs uppercase tracking-[0.2em] text-accent">Objective</p>
                  <p className="font-body text-lg leading-relaxed text-muted">{data.objective}</p>
                </div>
              </div>
            </Reveal>
          </div>

          {slides.length > 0 && (
            <div className="order-1 lg:order-none lg:col-span-7">
              <MediaCarousel
                slides={slides}
                title={data.title}
                fixedAspect={data.slug === "toki-dinners" ? 5 / 4 : undefined}
              />
            </div>
          )}
        </div>

        <div className="mt-20">
          <Reveal>
            <p className="mb-8 font-body text-xs uppercase tracking-[0.2em] text-accent">Execution</p>
          </Reveal>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            {data.execution.map((step) => (
              <motion.div
                key={step}
                variants={scaleFade}
                className="flex items-center rounded-2xl border border-border/40 bg-gradient-to-br from-surface/80 to-surface/40 p-6 backdrop-blur-sm"
              >
                <span className="font-body text-base leading-relaxed text-muted">{step}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="mt-20">
          <Reveal>
            <p className="mb-8 font-body text-xs uppercase tracking-[0.2em] text-accent">Impact</p>
          </Reveal>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className={`grid gap-4 ${
              data.results.length === 2
                ? "sm:grid-cols-2"
                : data.results.length === 4
                  ? "sm:grid-cols-2 lg:grid-cols-4"
                  : "sm:grid-cols-3"
            }`}
          >
            {data.results.map((r) => (
              <ResultCard key={r.label} value={r.value} label={r.label} />
            ))}
          </motion.div>
        </div>

        <Reveal>
          <div className="mt-24 flex flex-col items-center gap-6 rounded-3xl border border-border bg-surface/60 px-8 py-14 text-center backdrop-blur-sm">
            <h2 className="max-w-xl font-display text-2xl font-bold sm:text-3xl">
              Got a moment worth building?
            </h2>
            <p className="max-w-md font-body text-muted">
              Tell us what you&apos;re planning — we&apos;ll help you make it land.
            </p>
            <MagneticButton
              href="/#enquiry"
              className="rounded-full bg-accent px-8 py-4 font-body font-medium text-black transition-shadow hover:shadow-[0_0_40px_var(--accent-glow)]"
            >
              Start a project
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </article>
  );
}

