import type { Metadata } from "next";
import Script from "next/script";
import { Poppins, Roboto, Playwrite_NZ_Basic } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
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
      "Anthem | Creative & Experiential Marketing Agency in India",
    template: "%s | Anthem",
  },
  description:
    "Anthem is an integrated creative and experiential marketing agency delivering brand activations, corporate events, digital campaigns and experiences across India.",
  keywords: [
    "experiential marketing agency India",
    "creative marketing agency India",
    "brand activation agency",
    "event management company India",
    "experiential marketing company India",
    "live events agency Delhi",
    "brand experience agency",
    "corporate events India",
    "BTL agency India",
    "digital campaigns India",
  ],
  icons: {
    icon: "/logo.webp",
    apple: "/logo.webp",
  },
  verification: {
    google: "9oULDvmqmUDX2qp5DFvHGseyDvjdJNLbeOcQkwc9-Ks",
  },
  applicationName: "Anthem",
  appleWebApp: {
    title: "Anthem",
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
      "Anthem | Creative & Experiential Marketing Agency in India",
    description:
      "Anthem is an integrated creative and experiential marketing agency delivering brand activations, corporate events, digital campaigns and experiences across India.",
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
    title: "Anthem | Creative & Experiential Marketing Agency in India",
    description:
      "Anthem is an integrated creative and experiential marketing agency delivering brand activations, corporate events, digital campaigns and experiences across India.",
    images: [
      "https://pub-c591ee037cf34224a3fb5b70122e4a59.r2.dev/uploads/world-class.webp",
    ],
  },
  robots: {
    index: true,
    follow: true,
    "max-video-preview": 0,
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
        <link
          rel="preconnect"
          href="https://pub-c591ee037cf34224a3fb5b70122e4a59.r2.dev"
          crossOrigin="anonymous"
        />
        <link
          rel="dns-prefetch"
          href="https://pub-c591ee037cf34224a3fb5b70122e4a59.r2.dev"
        />
        <Script id="js-detect" strategy="beforeInteractive">
          {`document.documentElement.classList.add('js')`}
        </Script>
        {/* Google Analytics (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SF309M7PPP"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-SF309M7PPP');
          `}
        </Script>
        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="lazyOnload">
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
        {/* Google Site Name structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Anthem",
              alternateName: [
                "The Anthem",
                "Anthem Agency",
                "Anthem India",
                "theanthem.in",
              ],
              url: "https://theanthem.in",
            }),
          }}
        />
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
                "Anthem is an integrated creative and experiential marketing agency delivering brand activations, corporate events, digital campaigns and experiences across India.",
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
