import type { Metadata } from "next";
import Script from "next/script";
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
  title: {
    default:
      "Anthem — Experiential Marketing Agency in India | Brand Activations & Live Events",
    template: "%s | Anthem",
  },
  description:
    "Anthem is a leading experiential marketing company in India. We create brand activations, live events, festivals, corporate experiences and 360° campaigns for brands like Diageo, Pernod Ricard, BCG and more.",
  keywords: [
    "experiential marketing agency India",
    "brand activation agency",
    "event management company India",
    "experiential marketing company India",
    "live events agency Delhi",
    "brand experience agency",
    "corporate events India",
    "BTL agency India",
  ],
  icons: {
    icon: "/logo.webp",
    apple: "/logo.webp",
  },
  verification: {
    google: "9oULDvmqmUDX2qp5DFvHGseyDvjdJNLbeOcQkwc9-Ks",
  },
  metadataBase: new URL("https://theanthem.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://theanthem.in",
    siteName: "Anthem",
    title:
      "Anthem — Experiential Marketing Agency in India | Brand Activations & Live Events",
    description:
      "India's leading experiential marketing agency. Brand activations, live events, festivals and 360° campaigns for top brands.",
    images: [
      {
        url: "https://pub-c591ee037cf34224a3fb5b70122e4a59.r2.dev/uploads/world-class.webp",
        width: 1200,
        height: 630,
        alt: "Anthem — Experiential Marketing Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anthem — Experiential Marketing Agency in India",
    description:
      "Brand activations, live events, festivals and 360° campaigns for India's top brands.",
    images: [
      "https://pub-c591ee037cf34224a3fb5b70122e4a59.r2.dev/uploads/world-class.webp",
    ],
  },
  robots: {
    index: true,
    follow: true,
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
      suppressHydrationWarning
    >
      <head>
        <Script id="js-detect" strategy="beforeInteractive">
          {`document.documentElement.classList.add('js')`}
        </Script>
        {/* Google Analytics (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SF309M7PPP"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-SF309M7PPP');
          `}
        </Script>
        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "ymp7ftjx78");
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Anthem",
              url: "https://theanthem.in",
              logo: "https://theanthem.in/logo.webp",
              description:
                "Anthem is a leading experiential marketing agency in India specializing in brand activations, live events, festivals and 360° campaigns.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "New Delhi",
                addressCountry: "IN",
              },
              sameAs: [
                "https://www.instagram.com/theanthemindia/",
                "https://www.linkedin.com/company/theanthemindia/",
              ],
              knowsAbout: [
                "Experiential Marketing",
                "Brand Activations",
                "Live Events",
                "Corporate Events",
                "Festival Management",
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
