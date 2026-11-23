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
        url: "/og-default.webp",
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
      "/og-default.webp",
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
              logo: "https://theanthem.in/logo.png",
              description:
                "Anthem is an integrated creative and experiential marketing agency in India, with offices in Delhi NCR and Mumbai.",
              foundingDate: "2014",
              address: {
                "@type": "PostalAddress",
                streetAddress: "1st floor, 134, D Block Rd, Dr Ambedkar Colony, Chhatarpur",
                addressLocality: "New Delhi",
                addressRegion: "Delhi",
                postalCode: "110074",
                addressCountry: "IN",
              },
              sameAs: [
                "https://www.instagram.com/theanthemindia/",
                "https://www.linkedin.com/company/theanthemindia/",
              ],
              numberOfEmployees: {
                "@type": "QuantitativeValue",
                minValue: 30,
              },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What does Anthem do?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Anthem is a leading experiential marketing agency in India that builds brands through strategic ideas, immersive experiences, and culture. Backed by 12+ years of experience and a core 30+ member team, Anthem operates out of Delhi NCR and Mumbai to deliver creative strategy, integrated marketing, brand activations, corporate event management, content production, influencer marketing, and large-scale entertainment properties.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Where does Anthem operate?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Anthem operates on a pan-India scale, anchored by physical offices in Delhi NCR and Mumbai. The agency has executed over 150+ experiences across 30+ cities for 80+ global and national brands, regularly deploying multi-city marketing campaigns, corporate offsites, and brand activations across Bangalore, Hyderabad, and Pune.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Does Anthem create and manage original brand IPs?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, Anthem specializes in developing, producing, and scaling original experiential intellectual properties. A prime example is The Gin Explorers Club, India's largest cocktail festival, which has welcomed over 100,000 enthusiasts across Delhi, Mumbai, and Bengaluru.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Does Anthem work with startups or only enterprise brands?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Anthem partners with a diverse portfolio ranging from high-growth startups to established enterprise brands and Fortune 500 companies, tailoring creative strategies, brand activations, and corporate event production to match the specific scale, budget, and goals of each client.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What industries does Anthem specialize in?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Anthem has deep domain expertise across FMCG, food and beverage, alcohol and spirits, luxury and lifestyle, automotive, technology, fashion, beauty, hospitality, and corporate services.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What is Anthem Amplify?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Anthem Amplify is Anthem's dedicated digital, creator, and culture marketing arm that manages micro-creator ambassador programs, meme and culture-page seeding, short-form video production, event clipping, and digital-first campaigns to extend live brand moments into the digital ecosystem.",
                  },
                },
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
