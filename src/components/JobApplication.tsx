import Reveal from "./Reveal";
import AnimatedHeading from "./AnimatedHeading";

export default function JobApplication() {
  return (
    <section id="careers" className="relative pt-40 pb-28 sm:pt-48 sm:pb-36">
      {/* ambient glow */}
      <div
        className="pointer-events-none absolute top-24 left-1/2 -translate-x-1/2 h-[500px] w-[600px] rounded-full opacity-[0.07]"
        style={{
          background:
            "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
        }}
      />

      <div className="container-x relative">
        {/* header — two-column: text left, email CTA right */}
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Reveal>
              <p className="mb-4 flex items-center gap-3 font-hand text-lg text-accent">
                <span className="h-px w-10 bg-accent" />
                Careers
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <AnimatedHeading
                text="Work with us, not for us"
                highlight="with us"
                className="font-display text-4xl font-bold sm:text-5xl lg:text-6xl"
              />
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-lg font-body text-lg leading-relaxed text-muted">
                We&apos;re always looking for sharp, restless people who&apos;d rather make
                the moment than watch it. No open roles listed — if you&apos;re good,
                we&apos;ll find a seat.
              </p>
            </Reveal>
          </div>

          {/* email CTA card — right side */}
          <Reveal delay={0.15}>
            <div className="flex flex-col items-center rounded-2xl border border-border bg-surface/60 px-8 py-10 text-center backdrop-blur-sm">
              <p className="mb-4 font-body text-sm leading-relaxed text-muted">
                Send us your portfolio, a note about yourself, and the role you see yourself in.
              </p>
              <a
                href="https://mail.google.com/mail/?view=cm&to=hr@theanthem.in&su=Application%20—%20Anthem"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 rounded-full border border-accent/40 px-8 py-4 font-display text-lg font-semibold text-accent transition-all hover:border-accent hover:shadow-[0_0_40px_var(--accent-glow)]"
              >
                <span className="relative z-10">hr@theanthem.in</span>
                <span className="relative z-10 transition-transform group-hover:translate-x-1">
                  &rarr;
                </span>
                <span className="absolute inset-0 rounded-full bg-accent/5 opacity-0 transition-opacity group-hover:opacity-100" />
              </a>
              <p className="mt-4 font-body text-xs text-muted-2">
                We read every email. If there&apos;s a fit, you&apos;ll hear back within a week.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
