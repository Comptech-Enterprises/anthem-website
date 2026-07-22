"use client";

import { motion } from "framer-motion";
import Placeholder from "./Placeholder";
import Reveal from "./Reveal";

// mix of photo tiles and one video tile; span classes build a masonry-ish grid
const tiles = [
  { label: "Main Stage", span: "sm:col-span-2 sm:row-span-2", video: false },
  { label: "Crowd Moments", span: "", video: false },
  { label: "Aftermovie", span: "", video: true },
  { label: "Brand Activation", span: "", video: false },
  { label: "Backstage", span: "", video: false },
  { label: "Installation", span: "sm:col-span-2", video: false },
  { label: "Highlights Reel", span: "", video: true },
];

function PlayBadge() {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/90 text-black shadow-[0_0_30px_var(--accent-glow)]">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
    </div>
  );
}

export default function Gallery() {
  return (
    <section id="gallery" className="relative border-t border-border py-28 sm:py-36">
      <div className="container-x">
        <div className="max-w-2xl">
          <Reveal>
            <p className="mb-4 flex items-center gap-3 font-hand text-lg text-accent">
              <span className="h-px w-10 bg-accent" />
              Media Gallery
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-3xl font-bold leading-tight sm:text-5xl">
              Our work, <span className="text-gradient">in living colour</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl font-body leading-relaxed text-muted">
              Photos and films from the ground — the proof of what we build,
              captured as it happened.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-4 sm:grid-cols-4">
          {tiles.map((t, i) => (
            <Reveal key={t.label} delay={i * 0.05} className={t.span}>
              <motion.div
                whileHover="hover"
                className="group relative h-full overflow-hidden rounded-2xl border border-border"
              >
                <motion.div
                  variants={{ hover: { scale: 1.06 } }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full"
                >
                  <Placeholder label={t.label} ratio="" className="h-full w-full" />
                </motion.div>
                {t.video && <PlayBadge />}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center gap-2 bg-gradient-to-t from-black/80 to-transparent p-4">
                  {t.video && (
                    <span className="rounded-full bg-accent/20 px-2 py-0.5 font-body text-[10px] uppercase tracking-[0.2em] text-accent">
                      Video
                    </span>
                  )}
                  <span className="font-body text-sm font-medium text-foreground">
                    {t.label}
                  </span>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
