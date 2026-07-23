"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";

const eventTypes = [
  "Corporate Event",
  "Product Launch",
  "Brand Activation",
  "Festival / Live IP",
  "Conference / Summit",
  "Experiential Pop-Up",
  "Wedding / Private",
  "Other",
];

type Status = "idle" | "submitting" | "success" | "error";

const fieldClass =
  "w-full rounded-xl border border-border bg-background px-4 py-3 font-body text-foreground placeholder:text-muted-2 outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent";

export default function EnquiryForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    // UI only for now — no backend. Simulate a short submit.
    await new Promise((r) => setTimeout(r, 800));
    setStatus("success");
    form.reset();
  }

  return (
    <section
      id="enquiry"
      className="relative border-t border-border py-28 sm:py-36"
    >
      <div className="container-x grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        {/* intro column */}
        <div>
          <Reveal>
            <p className="mb-4 flex items-center gap-3 font-hand text-lg text-accent">
              <span className="h-px w-10 bg-accent" />
              Start a Project
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="max-w-md font-display text-3xl font-bold sm:text-5xl">
              Tell us about your event
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-md font-body leading-relaxed text-muted">
              Share the details and our team will craft a tailored proposal.
              The more you tell us, the sharper our first response.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8">
              <a
                href="/Profile.pdf"
                download
                className="group flex w-fit items-center gap-2 rounded-full border border-border px-6 py-3 font-body text-sm font-medium transition-colors hover:border-accent hover:text-accent"
              >
                <span className="transition-transform group-hover:translate-y-0.5" aria-hidden>
                  ↓
                </span>
                Download Company Profile
              </a>
            </div>
          </Reveal>
        </div>

        {/* form column */}
        <Reveal delay={0.15}>
          <div className="rounded-2xl border border-border bg-surface/60 p-6 backdrop-blur-sm sm:p-8">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center gap-4 py-16 text-center"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/15 text-2xl text-accent">
                    ✓
                  </div>
                  <h3 className="font-display text-2xl font-semibold">
                    Enquiry received
                  </h3>
                  <p className="max-w-sm font-body text-muted">
                    Thanks for reaching out. Our team will review your brief and
                    get back to you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-2 font-body text-sm text-accent underline-offset-4 hover:underline"
                  >
                    Send another enquiry
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="grid gap-5 sm:grid-cols-2"
                >
                  <label className="flex flex-col gap-2">
                    <span className="font-body text-sm text-muted">
                      Full name *
                    </span>
                    <input
                      name="name"
                      required
                      placeholder="Jane Doe"
                      className={fieldClass}
                    />
                  </label>

                  <label className="flex flex-col gap-2">
                    <span className="font-body text-sm text-muted">
                      Email *
                    </span>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="jane@company.com"
                      className={fieldClass}
                    />
                  </label>

                  <label className="flex flex-col gap-2">
                    <span className="font-body text-sm text-muted">Phone</span>
                    <input
                      name="phone"
                      type="tel"
                      placeholder="+91 90000 00000"
                      className={fieldClass}
                    />
                  </label>

                  <label className="flex flex-col gap-2">
                    <span className="font-body text-sm text-muted">
                      Type of event *
                    </span>
                    <select
                      name="eventType"
                      required
                      defaultValue=""
                      className={fieldClass}
                    >
                      <option value="" disabled>
                        Select event type
                      </option>
                      {eventTypes.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="flex flex-col gap-2">
                    <span className="font-body text-sm text-muted">
                      Event date
                    </span>
                    <input
                      name="eventDate"
                      type="date"
                      className={`${fieldClass} [color-scheme:dark]`}
                    />
                  </label>

                  <label className="flex flex-col gap-2">
                    <span className="font-body text-sm text-muted">
                      Number of guests
                    </span>
                    <input
                      name="guests"
                      type="number"
                      min="1"
                      placeholder="e.g. 250"
                      className={fieldClass}
                    />
                  </label>

                  <label className="flex flex-col gap-2 sm:col-span-2">
                    <span className="font-body text-sm text-muted">
                      Venue / location
                    </span>
                    <input
                      name="venue"
                      placeholder="City, or a specific venue if decided"
                      className={fieldClass}
                    />
                  </label>

                  <label className="flex flex-col gap-2 sm:col-span-2">
                    <span className="font-body text-sm text-muted">
                      Requirements & brief
                    </span>
                    <textarea
                      name="requirements"
                      rows={4}
                      placeholder="Tell us about the objective, scope, budget range and anything specific you need…"
                      className={`${fieldClass} resize-none`}
                    />
                  </label>

                  <div className="flex items-center gap-4 sm:col-span-2">
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="group flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-body font-medium text-black transition-all hover:shadow-[0_0_35px_var(--accent-glow)] disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {status === "submitting" ? "Sending…" : "Send Enquiry"}
                      {status !== "submitting" && (
                        <span className="transition-transform group-hover:translate-x-1">
                          →
                        </span>
                      )}
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
