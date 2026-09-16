"use client";

import { useEffect, useRef, type ReactNode } from "react";

const VB_W = 1440;
const VB_H = 2000;

const FLIGHT_PATH = `M 1150 10
  C 1000 110, 360 200, 360 320
  C 360 440, 1080 520, 1080 640
  C 1080 760, 360 840, 360 960
  C 360 1080, 1080 1160, 1080 1280
  C 1080 1400, 420 1480, 420 1600
  C 420 1720, 720 1880, 720 1998`;

export default function RibbonFlight({ children }: { children: ReactNode }) {
  const zoneRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const planeOuterRef = useRef<HTMLDivElement>(null);
  const planeInnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const zone = zoneRef.current;
    const path = pathRef.current;
    const planeOuter = planeOuterRef.current;
    const planeInner = planeInnerRef.current;
    if (!zone || !path) return;

    const totalLength = path.getTotalLength();
    path.style.strokeDasharray = `${totalLength}`;
    path.style.strokeDashoffset = `${totalLength}`;

    let ticking = false;

    const update = () => {
      const rect = zone.getBoundingClientRect();
      const winH = window.innerHeight;
      const start = winH * 0.8;
      const end = rect.height;
      const scrolled = -rect.top + start;
      const total = end + start;
      const progress = Math.max(0, Math.min(1, scrolled / total));

      // Draw the ribbon
      path.style.strokeDashoffset = `${totalLength * (1 - progress)}`;
      path.style.opacity = "0.4";

      // Position the plane
      if (planeOuter && planeInner) {
        const clf = Math.max(0.0001, Math.min(progress, 1));
        const p = path.getPointAtLength(totalLength * clf);
        const back = path.getPointAtLength(Math.max(0, totalLength * clf - 2));

        planeOuter.style.left = `${(p.x / VB_W) * 100}%`;
        planeOuter.style.top = `${(p.y / VB_H) * 100}%`;
        planeOuter.style.opacity = progress > 0.01 ? "1" : "0";

        const svg = path.ownerSVGElement;
        const scaleX = svg && svg.clientWidth ? svg.clientWidth / VB_W : 1;
        const scaleY = svg && svg.clientHeight ? svg.clientHeight / VB_H : 1;
        const dx = (p.x - back.x) * scaleX;
        const dy = (p.y - back.y) * scaleY;
        const angle = (Math.atan2(dy, dx) * 180) / Math.PI;
        planeInner.style.transform = `rotate(${angle}deg)`;
      }

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", () => requestAnimationFrame(update));
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", () => requestAnimationFrame(update));
    };
  }, []);

  return (
    <div ref={zoneRef} className="relative">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-20 h-full w-full overflow-hidden"
      >
        <svg
          className="h-full w-full [filter:drop-shadow(0_0_4px_rgba(139,127,232,0.3))]"
          viewBox={`0 0 ${VB_W} ${VB_H}`}
          preserveAspectRatio="none"
          fill="none"
        >
          <defs>
            <linearGradient id="flight" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#8b7fe8" />
              <stop offset="50%" stopColor="#b8a8f0" />
              <stop offset="100%" stopColor="#e0c8f2" />
            </linearGradient>
          </defs>

          <path
            ref={pathRef}
            d={FLIGHT_PATH}
            stroke="url(#flight)"
            strokeWidth="3"
            strokeLinecap="round"
            style={{ opacity: 0 }}
          />
        </svg>

        <div
          ref={planeOuterRef}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ opacity: 0 }}
        >
          <div
            ref={planeInnerRef}
            className="[filter:drop-shadow(0_0_8px_rgba(139,127,232,0.9))]"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="#ffffff">
              <path d="M2 21l21-9L2 3v7l15 2-15 2z" />
            </svg>
          </div>
        </div>
      </div>

      {children}
    </div>
  );
}
