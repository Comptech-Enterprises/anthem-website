"use client";

import { useRef, useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";

type Status = "idle" | "submitting" | "success" | "error";

// Zoho CRM Web-to-Lead (region: crm.zoho.in). The form posts natively to Zoho
// through a hidden iframe so the page never navigates away and we keep our own
// success screen. These token values come from the generated webform — do not
// change them or Zoho rejects the submission.
const ZOHO_ACTION = "https://crm.zoho.in/crm/WebToLeadForm";
const ZOHO_XNQSJSDP =
  "d9ddfb2c95414f25515752ab245967c6c0ca43ca6bca131757c50bbc13d7b9a7";
const ZOHO_XMIWTLD =
  "482c44dfdb88df2d950b50a0ccc1c0f528c6789209fc73ec2e7ea85e8936234f08487edb3aaa4737b303b060f8874d34";

const fieldClass =
  "w-full rounded-xl border border-border bg-background px-4 py-3 font-body text-foreground placeholder:text-muted-2 outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent";

export default function EnquiryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const submittedRef = useRef(false);

  function handleSubmit(_e: FormEvent<HTMLFormElement>) {
    // Native required/type validation has already passed by the time onSubmit
    // fires. Do NOT preventDefault — let the browser POST to the hidden iframe.
    submittedRef.current = true;
    setStatus("submitting");
  }

  // Fires when the hidden iframe finishes loading Zoho's response. The first
  // (empty) load is ignored; the one after a submit flips us to success.
  function handleIframeLoad() {
    if (!submittedRef.current) return;
    submittedRef.current = false;
    setStatus("success");
  }

  return (
    <section
      id="enquiry"
      className="relative border-t border-border py-28 sm:py-36"
    >
      {/* Zoho submits into this hidden frame so the page stays put. */}
      <iframe
        title="zoho-target"
        name="zoho_target"
        onLoad={handleIframeLoad}
        className="hidden"
        aria-hidden
      />

      <div className="container-x grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        {/* intro column */}
        <div>
          <Reveal>
            <p className="mb-4 flex items-center gap-3 font-hand text-lg text-accent">
              <span className="h-px w-10 bg-accent" />
              Let's work together
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-md font-body leading-relaxed text-muted">
              For business enquiries, partnerships, collaborations and project opportunities, get in touch with our team.
            </p>
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
                  action={ZOHO_ACTION}
                  method="POST"
                  target="zoho_target"
                  acceptCharset="UTF-8"
                  onSubmit={handleSubmit}
                  className="grid gap-5"
                >
                  {/* Zoho required hidden fields — do not remove. */}
                  <input type="hidden" name="xnQsjsdp" value={ZOHO_XNQSJSDP} />
                  <input type="hidden" name="xmIwtLD" value={ZOHO_XMIWTLD} />
                  <input type="hidden" name="actionType" value="TGVhZHM=" />
                  <input type="hidden" name="returnURL" value="null" />
                  <input type="hidden" name="zc_gad" value="" />
                  {/* Lead routing defaults from the Zoho webform. */}
                  <input type="hidden" name="Lead Source" value="Anthem Website" />
                  <input type="hidden" name="Lead Status" value="Not Contacted" />
                  <input type="hidden" name="LEADCF1" value="Anthem" />
                  {/* Honeypot — leave empty; Zoho drops the lead if filled. */}
                  <input
                    type="text"
                    name="aG9uZXlwb3Q"
                    defaultValue=""
                    tabIndex={-1}
                    autoComplete="off"
                    className="hidden"
                    aria-hidden
                  />

                  <label className="flex flex-col gap-2">
                    <span className="font-body text-sm text-muted">
                      Name <span className="text-red-500">*</span>
                    </span>
                    <input
                      name="Last Name"
                      required
                      maxLength={80}
                      className={fieldClass}
                    />
                  </label>

                  <label className="flex flex-col gap-2">
                    <span className="font-body text-sm text-muted">
                      Email <span className="text-red-500">*</span>
                    </span>
                    <input
                      name="Email"
                      type="email"
                      required
                      maxLength={100}
                      className={fieldClass}
                    />
                  </label>

                  <label className="flex flex-col gap-2">
                    <span className="font-body text-sm text-muted">
                      Company
                    </span>
                    <input
                      name="Company"
                      maxLength={200}
                      className={fieldClass}
                    />
                  </label>

                  <label className="flex flex-col gap-2">
                    <span className="font-body text-sm text-muted">
                      Phone <span className="text-red-500">*</span>
                    </span>
                    <input
                      name="Mobile"
                      type="tel"
                      required
                      maxLength={30}
                      className={fieldClass}
                    />
                  </label>

                  <label className="flex flex-col gap-2">
                    <span className="font-body text-sm text-muted">
                      Message <span className="text-red-500">*</span>
                    </span>
                    <textarea
                      name="Description"
                      rows={4}
                      required
                      className={fieldClass}
                    />
                  </label>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full rounded-xl border border-border bg-background py-3.5 font-body font-medium text-foreground transition-all hover:border-accent hover:text-accent hover:shadow-[0_0_25px_var(--accent-glow)] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === "submitting" ? "Sending…" : "Get In Touch"}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
