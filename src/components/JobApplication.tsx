"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";

const positions = [
  "Experiential Producer",
  "Creative Strategist",
  "Content Producer",
  "Account Manager",
  "Brand Activations Lead",
  "Internship",
  "Other",
];

type Status = "idle" | "submitting" | "success" | "error";

const fieldClass =
  "w-full rounded-xl border border-border bg-background px-4 py-3 font-body text-foreground placeholder:text-muted-2 outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent";

export default function JobApplication() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    const form = e.currentTarget;

    // UI only for now — no backend / Zoho call. Simulate a short submit so the
    // success state is demonstrable. Wire this up to /api/apply later.
    await new Promise((r) => setTimeout(r, 800));
    setStatus("success");
    form.reset();
  }

  return (
    <section
      id="careers"
      className="relative border-t border-border bg-surface/60 py-28 backdrop-blur-sm sm:py-36"
    >
      <div className="container-x grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        {/* intro column */}
        <div>
          <Reveal>
            <p className="mb-4 flex items-center gap-3 font-body text-sm uppercase tracking-[0.35em] text-accent">
              <span className="h-px w-10 bg-accent" />
              Careers
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="max-w-md font-display text-3xl font-bold sm:text-5xl">
              Join the team behind the experiences
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-md font-body leading-relaxed text-muted">
              Tell us about yourself. Every application lands straight in our
              system, so our team can get back to the right people fast.
            </p>
          </Reveal>
        </div>

        {/* form column */}
        <Reveal delay={0.15}>
          <div className="rounded-2xl border border-border bg-background p-6 sm:p-8">
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
                    Application received
                  </h3>
                  <p className="max-w-sm font-body text-muted">
                    Thanks for applying. Our team will review your details and
                    reach out if there&apos;s a fit.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-2 font-body text-sm text-accent underline-offset-4 hover:underline"
                  >
                    Submit another application
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
                  <label className="flex flex-col gap-2 sm:col-span-1">
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

                  <label className="flex flex-col gap-2 sm:col-span-1">
                    <span className="font-body text-sm text-muted">
                      Email *
                    </span>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="jane@email.com"
                      className={fieldClass}
                    />
                  </label>

                  <label className="flex flex-col gap-2 sm:col-span-1">
                    <span className="font-body text-sm text-muted">Phone</span>
                    <input
                      name="phone"
                      type="tel"
                      placeholder="+91 90000 00000"
                      className={fieldClass}
                    />
                  </label>

                  <label className="flex flex-col gap-2 sm:col-span-1">
                    <span className="font-body text-sm text-muted">
                      Position
                    </span>
                    <select name="position" defaultValue="" className={fieldClass}>
                      <option value="" disabled>
                        Select a role
                      </option>
                      {positions.map((p) => (
                        <option key={p} value={p}>
                          {p}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="flex flex-col gap-2 sm:col-span-2">
                    <span className="font-body text-sm text-muted">
                      Years of experience
                    </span>
                    <input
                      name="experience"
                      placeholder="e.g. 3 years"
                      className={fieldClass}
                    />
                  </label>

                  <label className="flex flex-col gap-2 sm:col-span-2">
                    <span className="font-body text-sm text-muted">
                      Why do you want to join? (optional)
                    </span>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Tell us a bit about yourself and your work…"
                      className={`${fieldClass} resize-none`}
                    />
                  </label>

                  {status === "error" && (
                    <p className="font-body text-sm text-red-400 sm:col-span-2">
                      {error}
                    </p>
                  )}

                  <div className="flex items-center gap-4 sm:col-span-2">
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="group flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-body font-medium text-black transition-all hover:shadow-[0_0_35px_var(--accent-glow)] disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {status === "submitting"
                        ? "Submitting…"
                        : "Submit Application"}
                      {status !== "submitting" && (
                        <span className="transition-transform group-hover:translate-x-1">
                          →
                        </span>
                      )}
                    </button>
                    <span className="font-body text-xs text-muted-2">
                      * Required
                    </span>
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
