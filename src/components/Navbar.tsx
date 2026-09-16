"use client";

import { useEffect, useState } from "react";
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

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Close on Escape key press
  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  // Close on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className={`animate-navbar fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-border bg-background/90 backdrop-blur-xl shadow-lg shadow-black/20"
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
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((v) => !v)}
          className="relative flex h-11 w-11 items-center justify-center rounded-lg text-foreground transition-colors hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent lg:hidden"
        >
          <div className="relative flex h-4 w-5 flex-col justify-between">
            <span
              className={`block h-0.5 w-full rounded-full bg-current transition-all duration-300 ease-out origin-center ${
                open ? "translate-y-[7px] rotate-45" : "translate-y-0 rotate-0"
              }`}
            />
            <span
              className={`block h-0.5 w-full rounded-full bg-current transition-all duration-200 ease-out ${
                open ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"
              }`}
            />
            <span
              className={`block h-0.5 w-full rounded-full bg-current transition-all duration-300 ease-out origin-center ${
                open ? "-translate-y-[7px] -rotate-45" : "translate-y-0 rotate-0"
              }`}
            />
          </div>
        </button>
      </nav>

      {/* mobile menu */}
      <div
        id="mobile-navigation"
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out lg:hidden border-t border-border/70 bg-background/95 backdrop-blur-xl ${
          open
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0 pointer-events-none"
        }`}
      >
        <div className="overflow-hidden">
          <ul className="container-x flex flex-col py-3 divide-y divide-border/30">
            {links.map((l) => {
              const href = resolve(l);
              const isActive = pathname === href;
              return (
                <li key={l.href}>
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between py-3.5 font-body text-base transition-colors ${
                      isActive ? "text-accent font-medium" : "text-muted hover:text-foreground"
                    }`}
                  >
                    <span>{l.label}</span>
                    {l.label === "Contact Us" && (
                      <span className="rounded-full bg-accent/15 px-2.5 py-0.5 font-hand text-xs text-accent">
                        Hit us up
                      </span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
}
