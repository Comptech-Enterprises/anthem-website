"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

const services: { label: string; bold: boolean }[] = [
  { label: "Experience Design", bold: true },
  { label: "Branding", bold: false },
  { label: "Event Management", bold: true },
  { label: "Creative Storytelling", bold: false },
  { label: "Content Gamification", bold: true },
  { label: "Design Thinking", bold: false },
  { label: "Program Design", bold: true },
  { label: "Digital Experiences", bold: false },
  { label: "Product Launches", bold: true },
  { label: "Crisis Management", bold: false },
  { label: "Marquee Concepts", bold: true },
  { label: "Experience IPs", bold: false },
  { label: "Content IPs", bold: true },
  { label: "Sustainable Event Design", bold: false },
  { label: "Online Experiences", bold: true },
];

export default function OurServices() {
  return (
    <section
      id="our-services"
      aria-label="Our Service"
      className="relative border-b border-border py-24 sm:py-32"
    >
      <div className="container-x">
        <Reveal>
          <p className="mb-16 flex items-center gap-3 font-hand text-lg text-accent">
            <span className="h-px w-10 bg-accent" />
            Our Service
          </p>
        </Reveal>
        <Reveal>
          <p className="mx-auto max-w-5xl text-center font-display text-[1.65rem] leading-[1.65] tracking-tight text-foreground sm:text-3xl sm:leading-[1.7] lg:text-4xl lg:leading-[1.7]">
            {services.map((service, i) => (
              <motion.span
                key={service.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.45,
                  delay: 0.04 * i,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={service.bold ? "font-bold" : "font-light"}
              >
                {service.label}.{" "}
              </motion.span>
            ))}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
