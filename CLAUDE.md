# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Critical version constraint

This project runs **Next.js 16.2.11 / React 19 / Tailwind CSS v4**, all newer than most training data. As `AGENTS.md` stresses, APIs and conventions differ from older versions. Before writing framework code, consult the bundled docs at `node_modules/next/dist/docs/` (`01-app` is the App Router reference) and heed deprecation notices.

## Commands

```bash
npm run dev     # dev server (Next 16 uses Turbopack by default)
npm run build   # production build — run this to type-check the whole app
npm run lint    # eslint (flat config, eslint-config-next)
```

There is no test suite. `npm run build` is the closest thing to full verification since it type-checks every route/component.

## Architecture

Single-page marketing site for **The Anthem**, an experiential events agency. Everything renders from one route.

- **`src/app/page.tsx`** is the home page — a flat composition of section components in `src/components/`. Section order and which sections exist are controlled here. Adding/removing a section means editing this file.
- **Secondary routes** `src/app/about/page.tsx`, `src/app/services/page.tsx`, `src/app/gallery/page.tsx`, `src/app/blog/page.tsx` and `src/app/careers/page.tsx` each render their own `Navbar`/`Footer`/chrome (these live in the page files, not `layout.tsx`) around one section component (`About`, `Services`, `Gallery`, `Blog`, `JobApplication`). When adding a route, mirror that chrome and set page `metadata`.
- **`src/app/layout.tsx`** loads three Google fonts via `next/font/google` (Poppins → `--font-poppins`, Roboto → `--font-roboto`, Playwrite NZ Basic → `--font-playwrite`) and exposes them as CSS variables on `<html>`. Playwrite has no `subsets`, so preload auto-disables — don't "fix" that.
- **`src/app/globals.css`** is the design system. Tailwind v4 is CSS-configured here: brand tokens live in `:root`, are mapped into Tailwind via `@theme inline` (so `bg-surface`, `text-accent`, `font-hand`, etc. work), and utilities/keyframes (`container-x`, `text-gradient`, `animate-marquee`) are defined with `@utility`/`@keyframes`. Change colors and fonts here, not in component files.

### Conventions that recur across components

- **Client components everywhere.** Almost every section is `"use client"` because of framer-motion. Server components are the exception, not the rule.
- **Animation stack is framer-motion v12** (`motion`, `useScroll`, `useSpring`, `useTransform`, `useInView`, `AnimatePresence`, variants/stagger). Reusable motion primitives: `Reveal` (scroll fade/rise/blur-in wrapper), `AnimatedHeading` (word-rise clipped headings, takes `text` + `highlight`), `MagneticButton` (cursor-follow CTA), `Marquee`.
- **Brand identity is fixed:** near-black background, single periwinkle/violet accent (`--accent: #8b7fe8`). Eyebrows use the hand font (`font-hand`); headlines use `font-display` with `.text-gradient` on emphasized words.
- **Images are intentional placeholders** — `Placeholder.tsx` renders shimmer boxes; the site ships without real photography by design.
- **Navigation is mostly anchor-based.** Home sections are reached via section `id`s (`#about`, `#work`, `#enquiry`, …); `SmoothScroll.tsx` intercepts `href^="#"` clicks for controlled-duration scrolling with a header offset (`globals.css` keeps `scroll-padding-top` only as a no-JS fallback). `Navbar` marks each link `kind: "hash" | "route"`: hash links stay `#id` on the home page but become `/#id` off-home (via `usePathname`) so they route home first; route links (`/services`, `/blog`) are standalone pages. `Footer` uses the same root-relative `/#id` scheme. Keep section `id`s stable when refactoring.
- **`RibbonFlight.tsx`** wraps the How-We-Work→Work group and draws a scroll-linked paper-plane trail over them via an SVG path (`preserveAspectRatio="none"`, so tangent angles are computed in screen space). It's purely decorative; the flight path is proportional to the wrapped zone's scroll range, so it adapts if the grouped sections change.
- **Forms (`EnquiryForm`, `JobApplication`) are UI-only** — they simulate submission client-side. There is no backend/API route (a former Zoho CRM integration was removed). Don't assume `src/app/api/` handlers exist.
- **Reduced motion is respected** in `globals.css` — preserve that when adding animations.
