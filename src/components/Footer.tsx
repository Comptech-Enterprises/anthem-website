import Image from "next/image";
import Link from "next/link";

const pages = [
  ["Home", "/"],
  ["Services", "/services"],
  ["Team", "/team"],
  ["Careers", "/careers"],
  ["Contact Us", "/#enquiry"],
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-x py-16">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.webp"
              alt="Anthem"
              width={3000}
              height={2250}
              className="h-20 w-auto invert"
            />
          </Link>

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
            © 2025 Digital Food Talk Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
