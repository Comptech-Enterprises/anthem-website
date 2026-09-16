"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Home", href: "/", kind: "route" as const },
  { label: "Our Work", href: "/services", kind: "route" as const },
  { label: "Careers", href: "/careers", kind: "route" as const },
  { label: "Contact Us", href: "/#enquiry", kind: "hash" as const },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const onHome = pathname === "/";
  const menuRef = useRef<HTMLUListElement>(null);

  const resolve = (l: (typeof links)[number]) => {
    if (l.kind === "route") return l.href;
    const hash = l.href.replace(/^\/?/, "");
    return onHome ? hash : `/${hash}`;
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const el = menuRef.current;
    if (!el) return;
    if (open) {
      el.style.display = "block";
      requestAnimationFrame(() => {
        el.style.maxHeight = el.scrollHeight + "px";
        el.style.opacity = "1";
      });
    } else {
      el.style.maxHeight = "0";
      el.style.opacity = "0";
      const onEnd = () => { el.style.display = "none"; };
      el.addEventListener("transitionend", onEnd, { once: true });
    }
  }, [open]);

  return (
    <header
      className={`animate-navbar fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="container-x flex min-h-18 items-center justify-between py-2">
        <Link href="/" className="group flex items-center">
          <Image
            src="https://pub-c591ee037cf34224a3fb5b70122e4a59.r2.dev/uploads/logo.webp"
            alt="Anthem"
            width={3000}
            height={2250}
            priority
            className="h-16 w-auto invert sm:h-20"
          />
        </Link>

        {/* desktop */}
        <ul className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <li key={l.href} className="relative">
              <Link
                href={resolve(l)}
                className="group relative font-body text-sm text-muted transition-colors hover:text-foreground"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
              </Link>

              {l.label === "Contact Us" && (
                <span
                  className="absolute right-0 top-full mt-3 whitespace-nowrap pointer-events-none"
                  style={{ animation: "badge-appear 0.4s cubic-bezier(0.22, 1, 0.36, 1) 1.2s both" }}
                >
                  <span className="absolute -top-[5px] right-4 h-2.5 w-2.5 rotate-45 bg-accent" />
                  <span
                    className="relative block rounded-2xl rounded-tr-sm bg-accent px-3.5 py-1.5 font-hand text-xs text-black font-medium shadow-[0_2px_12px_var(--accent-glow)]"
                    style={{ animation: "badge-bounce 2.5s ease-in-out infinite" }}
                  >
                    Hit us up
                  </span>
                </span>
              )}
            </li>
          ))}
        </ul>

        {/* mobile toggle */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className="block h-0.5 w-6 bg-foreground transition-all duration-300"
            style={{
              transform: open ? "rotate(45deg) translateY(6px)" : "none",
            }}
          />
          <span
            className="block h-0.5 w-6 bg-foreground transition-all duration-300"
            style={{ opacity: open ? 0 : 1 }}
          />
          <span
            className="block h-0.5 w-6 bg-foreground transition-all duration-300"
            style={{
              transform: open ? "rotate(-45deg) translateY(-6px)" : "none",
            }}
          />
        </button>
      </nav>

      <ul
        ref={menuRef}
        className="overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl lg:hidden"
        style={{
          maxHeight: 0,
          opacity: 0,
          display: "none",
          transition: "max-height 0.3s ease, opacity 0.3s ease",
        }}
      >
        {links.map((l) => (
          <li key={l.href} className="border-b border-border/60">
            <Link
              href={resolve(l)}
              onClick={() => setOpen(false)}
              className="block px-6 py-4 font-body text-base text-muted hover:text-accent"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
}
