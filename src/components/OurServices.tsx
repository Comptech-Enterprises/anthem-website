"use client";

import { useRef, useEffect } from "react";
import Reveal from "./Reveal";

const services: { label: string; bold: boolean }[] = [
  { label: "Experience Design", bold: true },
  { label: "Brand Activations", bold: false },
  { label: "Event Management", bold: true },
  { label: "Luxury Experiences", bold: false },
  { label: "Creator Collaborations", bold: true },
  { label: "Content Production", bold: false },
  { label: "IP Development", bold: true },
  { label: "Corporate Events", bold: false },
  { label: "Influencer Marketing", bold: true },
];

export default function OurServices() {
  const listRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in-view");
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="our-services"
      aria-label="Our Services"
      className="relative border-b border-border py-24 sm:py-32"
    >
      <div className="container-x">
        <Reveal>
          <p className="mb-16 flex items-center gap-3 font-hand text-lg text-accent">
            <span className="h-px w-10 bg-accent" />
            Our Services
          </p>
        </Reveal>
        <Reveal>
          <p
            ref={listRef}
            className="service-list mx-auto max-w-5xl text-center font-display text-[1.65rem] leading-[1.65] tracking-tight text-foreground sm:text-3xl sm:leading-[1.7] lg:text-4xl lg:leading-[1.7]"
          >
            {services.map((service, i) => (
              <span
                key={service.label}
                className={`${service.bold ? "font-bold" : "font-light"} inline-block opacity-0`}
                style={{
                  animation: "none",
                }}
                ref={(el) => {
                  if (!el) return;
                  const parent = el.closest(".service-list");
                  if (parent?.classList.contains("in-view")) {
                    el.style.animation = `service-fade 0.45s cubic-bezier(0.16, 1, 0.3, 1) ${0.04 * i}s both`;
                  }
                  const obs = new MutationObserver(() => {
                    if (parent?.classList.contains("in-view")) {
                      el.style.animation = `service-fade 0.45s cubic-bezier(0.16, 1, 0.3, 1) ${0.04 * i}s both`;
                      obs.disconnect();
                    }
                  });
                  if (parent) obs.observe(parent, { attributes: true, attributeFilter: ["class"] });
                }}
              >
                {service.label}.{" "}
              </span>
            ))}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
