import Image from "next/image";
import Link from "next/link";

const pages = [
  ["Home", "/"],
  ["Our Work", "/services"],
  ["Careers", "/careers"],
  ["Contact Us", "/#enquiry"],
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-x py-16">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between">
          <div className="flex flex-col items-center gap-2 sm:items-start">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.webp"
                alt="Anthem"
                width={3000}
                height={2250}
                className="h-20 w-auto invert"
              />
            </Link>
            <div className="flex flex-col items-center gap-2 sm:items-start">
              <p className="font-body text-xs uppercase tracking-[0.2em] text-muted-2">
                Units
              </p>
              <a
                href="https://food-talk-india.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex opacity-80 transition-opacity hover:opacity-100"
              >
                <Image
                  src="/food-talk.webp"
                  alt="Food Talk"
                  width={576}
                  height={576}
                  className="h-10 w-auto"
                />
              </a>
            </div>
          </div>

          <ul className="flex flex-wrap items-center gap-6 font-body text-sm">
            {pages.map(([label, href]) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-muted transition-colors hover:text-accent"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center">
          <p className="font-body text-xs text-muted-2">
            © 2025 Digital{" "}
            <a
              href="https://food-talk-india.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-accent"
            >
              Food Talk
            </a>{" "}
            Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
