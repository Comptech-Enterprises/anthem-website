"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

// `hash` links resolve to same-page anchors on the home page and to
// `/#anchor` (navigate home, then scroll) from any other route. `route`
// links are standalone pages.
const links = [
  { label: "Home", href: "/", kind: "route" as const },
  { label: "Services", href: "/services", kind: "route" as const },
  { label: "Team", href: "/team", kind: "route" as const },
  { label: "Careers", href: "/careers", kind: "route" as const },
  { label: "Contact Us", href: "/#enquiry", kind: "hash" as const },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const onHome = pathname === "/";

  // Anchor links jump within the home page; off-home they must first route home.
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

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="container-x flex min-h-18 items-center justify-between py-2">
        <Link href={onHome ? "#top" : "/"} className="group flex items-center">
          <Image
            src="/logo.webp"
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
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute left-1/2 top-full mt-3 -translate-x-1/2 whitespace-nowrap pointer-events-none"
                >
                  <span className="absolute -top-[5px] right-4 h-2.5 w-2.5 rotate-45 bg-accent" />
                  <motion.span
                    animate={{ y: [0, -2, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    className="relative block rounded-2xl rounded-tr-sm bg-accent px-3.5 py-1.5 font-hand text-xs text-black font-medium shadow-[0_2px_12px_var(--accent-glow)]"
                  >
                    I know you want to 😉
                  </motion.span>
                </motion.span>
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
          <motion.span
            animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block h-0.5 w-6 bg-foreground"
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            className="block h-0.5 w-6 bg-foreground"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="block h-0.5 w-6 bg-foreground"
          />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl lg:hidden"
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
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
