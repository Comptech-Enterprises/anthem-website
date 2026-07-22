const socials = ["Instagram", "LinkedIn", "Behance"];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-x py-16">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display text-2xl font-extrabold">
                ANTHEM
              </span>
              <span className="h-2 w-2 rounded-full bg-accent" />
            </div>
            <p className="mt-4 max-w-xs font-body text-sm leading-relaxed text-muted">
              Your new-age experiential partners — creating brand realities that
              transform insights into impactful experiences.
            </p>
          </div>

          <div>
            <h4 className="font-body text-xs uppercase tracking-[0.25em] text-muted-2">
              Navigate
            </h4>
            <ul className="mt-4 space-y-3 font-body text-sm">
              {[
                ["About Us", "#about"],
                ["Services", "#services"],
                ["Our Work", "#work"],
                ["Contact Us", "#contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-muted transition-colors hover:text-accent"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-body text-xs uppercase tracking-[0.25em] text-muted-2">
              Get in Touch
            </h4>
            <p className="mt-4 font-body text-sm leading-relaxed text-muted">
              134, D Block Rd, Dr Ambedkar Colony,
              <br />
              Chhatarpur, New Delhi 110074
            </p>
            <div className="mt-5 flex gap-4">
              {socials.map((s) => (
                <a
                  key={s}
                  href="#"
                  className="font-body text-sm text-muted transition-colors hover:text-accent"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="font-body text-xs text-muted-2">
            © 2025 Digital Food Talk Pvt. Ltd. All rights reserved.
          </p>
          <p className="font-body text-xs text-muted-2">
            Made with intent — in New Delhi.
          </p>
        </div>
      </div>
    </footer>
  );
}
