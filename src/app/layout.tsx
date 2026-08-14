import type { Metadata } from "next";
import { Poppins, Roboto, Playwrite_NZ_Basic } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

// Handwriting/display accent font. Has no subsets (preload auto-disabled).
const playwrite = Playwrite_NZ_Basic({
  variable: "--font-playwrite",
  weight: "variable",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anthem — Your New-Age Experiential Partners",
  description:
    "Anthem is an experiential agency that delivers 360° brand campaigns rooted in innovation, consumer insights and storytelling.",
  icons: {
    icon: "/logo.webp",
    apple: "/logo.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${roboto.variable} ${playwrite.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
