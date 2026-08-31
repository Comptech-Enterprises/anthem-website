import Image from "next/image";
import Link from "next/link";

const pages = [
  ["Home", "/"],
  ["Our Work", "/services"],
  ["Careers", "/careers"],
  ["Contact Us", "/#enquiry"],
];

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/anthem.in/?hl=en",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/anthemagency/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
        <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21H9z" />
      </svg>
    ),
  },
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
                className="h-12 w-auto invert sm:h-16 md:h-20"
              />
            </Link>
          </div>

          <div className="flex flex-col items-center gap-6 sm:items-end">
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

            <ul className="flex items-center gap-3">
              {socials.map(({ label, href, icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
                  >
                    {icon}
                  </a>
                </li>
              ))}
            </ul>
            <p className="font-body text-xs leading-relaxed text-muted-2 text-center sm:text-right max-w-[260px]">
              1st floor, 134, D Block Rd, Dr Ambedkar Colony,<br />
              Chhatarpur, New Delhi, Delhi 110074
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
