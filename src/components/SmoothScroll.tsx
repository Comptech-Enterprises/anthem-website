"use client";

import { useEffect } from "react";

/**
 * Controlled smooth-scroll for in-page anchor links.
 *
 * CSS `scroll-behavior: smooth` gives no control over speed. This intercepts
 * clicks on `<a href="#...">`, then animates the scroll over a fixed duration
 * with easing — a deliberate, slightly-delayed glide rather than an instant
 * jump. Offsets for the fixed header so sections land just below it.
 */

const HEADER_OFFSET = 112; // px — matches the tall fixed header (~7rem)
const DURATION = 750; // ms — a little delay, not too much

// easeInOutCubic
const ease = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

export default function SmoothScroll() {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const onClick = (e: MouseEvent) => {
      // ignore modified clicks (open-in-new-tab etc.)
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey)
        return;

      const anchor = (e.target as HTMLElement).closest<HTMLAnchorElement>(
        'a[href^="#"]',
      );
      if (!anchor) return;

      const hash = anchor.getAttribute("href");
      if (!hash || hash === "#") return;

      const target = document.querySelector(hash);
      if (!target) return;

      e.preventDefault();

      const targetY =
        target.getBoundingClientRect().top +
        window.scrollY -
        HEADER_OFFSET;

      // keep the URL hash in sync without a native jump
      history.pushState(null, "", hash);

      if (prefersReduced) {
        window.scrollTo({ top: targetY, behavior: "auto" });
        return;
      }

      const startY = window.scrollY;
      const distance = targetY - startY;
      let startTime: number | null = null;

      const step = (now: number) => {
        if (startTime === null) startTime = now;
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / DURATION, 1);
        window.scrollTo({ top: startY + distance * ease(progress), behavior: "auto" });
        if (progress < 1) requestAnimationFrame(step);
      };

      requestAnimationFrame(step);
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
