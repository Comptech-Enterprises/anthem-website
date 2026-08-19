"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import AnimatedHeading from "./AnimatedHeading";
import Image from "next/image";

const cards = [
  { title: "Owned IPs", href: "/services#owned-ips", img: "/what-we-do/owned-ip.webp" },
  { title: "Events", href: "/services#events", img: "/what-we-do/events.webp" },
  {
    title: "Experiential Brand Activation",
    href: "/services#experiential",
    img: "/what-we-do/brand-activation.webp",
  },
  { title: "Digital", href: "/services#digital", img: "/what-we-do/digital.webp" },
];

export default function WhatWeDo() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[700px] rounded-full opacity-[0.05]"
        style={{
          background:
            "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
        }}
      />

      <div className="container-x relative">
        <div className="mb-16 max-w-2xl">
          <Reveal>
            <p className="mb-4 flex items-center gap-3 font-hand text-lg text-accent">
              <span className="h-px w-10 bg-accent" />
              Our Expertise
            </p>
          </Reveal>
          <AnimatedHeading
            text="What We Do"
            highlight="We Do"
            className="font-display text-4xl font-bold sm:text-5xl lg:text-6xl"
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {cards.map((card, i) => (
            <Reveal key={card.title} delay={0.08 * i}>
              <motion.a
                href={card.href}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative block overflow-hidden rounded-2xl border border-border"
              >
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src={card.img}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 transition-opacity group-hover:from-black/90" />

                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <h3 className="font-display text-xl font-bold text-white sm:text-2xl lg:text-3xl text-center px-4">
                    {card.title}
                  </h3>
                </div>
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
