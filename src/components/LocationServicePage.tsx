"use client";

import Link from "next/link";
import AnimatedHeading from "./AnimatedHeading";
import Reveal from "./Reveal";
import type { LocationService, City } from "@/data/location-services";
import { services, cities } from "@/data/location-services";

type Props = {
  service: LocationService;
  city: City;
};

export default function LocationServicePage({ service, city }: Props) {
  const otherCities = cities.filter((c) => c.key !== city.key);

  return (
    <div className="pt-36 pb-24">
      {/* Hero */}
      <section className="container-x mb-24">
        <p className="font-hand text-sm tracking-widest text-accent uppercase mb-4">
          {city.name} &middot; {city.region}
        </p>
        <AnimatedHeading
          as="h1"
          text={`${service.name} in ${city.name}`}
          highlight={service.name}
          className="font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl max-w-4xl"
        />
        <Reveal delay={0.2}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted">
            {service.description}
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-10">
            <Link
              href="/#enquiry"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 font-display text-sm font-semibold tracking-wide text-white transition-colors hover:bg-accent/90"
            >
              Get in Touch
            </Link>
          </div>
        </Reveal>
      </section>

      {/* What We Offer */}
      <section className="container-x mb-24">
        <Reveal>
          <p className="font-hand text-sm tracking-widest text-accent uppercase mb-3">
            What We Offer
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl mb-12">
            Our <span className="text-gradient">{service.name}</span> Services in{" "}
            {city.name}
          </h2>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {service.features.map((feature, i) => (
            <Reveal key={feature} delay={i * 0.05}>
              <div className="rounded-2xl border border-border bg-surface-2 p-6 transition-colors hover:border-accent/40">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent font-display font-bold text-sm">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">
                  {feature}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Professional {feature.toLowerCase()} services by Anthem in{" "}
                  {city.name}. We bring creative excellence and flawless
                  execution to every project.
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Why Anthem */}
      <section className="container-x mb-24">
        <Reveal>
          <p className="font-hand text-sm tracking-widest text-accent uppercase mb-3">
            Why Anthem
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl mb-8">
            Why Choose Anthem for{" "}
            <span className="text-gradient">{service.name}</span> in {city.name}?
          </h2>
        </Reveal>
        <div className="grid gap-8 sm:grid-cols-2 max-w-4xl">
          {[
            {
              title: "Proven Track Record",
              text: `We've delivered ${service.name.toLowerCase()} projects for brands like Diageo, Pernod Ricard, BCG and more across ${city.name} and ${city.region}.`,
            },
            {
              title: "Local Expertise",
              text: `Deep understanding of ${city.name}'s venues, vendors, regulations and audience preferences ensures seamless execution every time.`,
            },
            {
              title: "End-to-End Execution",
              text: `From concept and strategy to on-ground production, we handle every aspect of ${service.name.toLowerCase()} in ${city.name}.`,
            },
            {
              title: "Creative Excellence",
              text: "Award-winning creative team that pushes boundaries and delivers work people talk about long after the event ends.",
            },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div>
                <h3 className="font-display text-lg font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-muted leading-relaxed">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Other Cities */}
      <section className="container-x mb-24">
        <Reveal>
          <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl mb-8">
            {service.name} in Other Cities
          </h2>
        </Reveal>
        <div className="flex flex-wrap gap-4">
          {otherCities.map((c) => (
            <Reveal key={c.key} delay={0.05}>
              <Link
                href={`/${service.key}-in-${c.key}`}
                className="rounded-full border border-border px-6 py-3 font-display text-sm font-medium transition-colors hover:border-accent hover:text-accent"
              >
                {service.name} in {c.name}
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Other Services in This City */}
      <section className="container-x mb-24">
        <Reveal>
          <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl mb-8">
            Our Other Services in {city.name}
          </h2>
        </Reveal>
        <div className="flex flex-wrap gap-4">
          {services
            .filter((s) => s.key !== service.key)
            .map((s) => (
              <Reveal key={s.key} delay={0.05}>
                <Link
                  href={`/${s.key}-in-${city.key}`}
                  className="rounded-full border border-border px-6 py-3 font-display text-sm font-medium transition-colors hover:border-accent hover:text-accent"
                >
                  {s.name} in {city.name}
                </Link>
              </Reveal>
            ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-x text-center">
        <Reveal>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl mb-6">
            Ready to Create Something{" "}
            <span className="text-gradient">Extraordinary</span>?
          </h2>
          <p className="mx-auto max-w-xl text-muted text-lg mb-10">
            Let&apos;s talk about your next {service.name.toLowerCase()} project
            in {city.name}.
          </p>
          <Link
            href="/#enquiry"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-10 py-4 font-display text-sm font-semibold tracking-wide text-white transition-colors hover:bg-accent/90"
          >
            Start a Conversation
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
