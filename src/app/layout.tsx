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
                    text: "Anthem is a leading experiential marketing agency and creative agency in India that builds brands through strategic ideas, immersive experiences, and culture. Backed by 12+ years of experience and a core 30+ member team, Anthem operates out of primary hubs in Delhi NCR and Mumbai to deliver comprehensive campaigns nationwide. The agency’s multi-disciplinary capabilities span creative strategy, integrated marketing, brand activations, corporate event management, digital marketing, content production via Anthem Amplify, influencer marketing, and large-scale entertainment properties.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Where does Anthem operate?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Anthem operates on a pan-India scale, anchored by physical offices in Delhi NCR (covering Delhi, Gurgaon, and Noida) and Mumbai. Leveraging a proven track record of executing over 150+ experiences across 30+ cities for 80+ global and national brands, Anthem regularly deploys multi-city marketing campaigns, corporate offsites, and brand activations across key metropolitan markets including Bengaluru, Hyderabad, and Pune.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Does Anthem handle corporate events?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, as a premier corporate event management company in India, Anthem specializes in conceptualizing, planning, producing, and executing large-scale corporate experiences and B2B business events. The agency manages corporate conferences, annual leadership summits, business conventions, product launches, dealer meets, employee engagement programs, and corporate offsites across key hubs like Delhi NCR and Mumbai.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Does Anthem offer creative and digital marketing services?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, operating as a top-tier integrated marketing agency in India, Anthem provides full-suite creative strategy and digital marketing solutions to support brands across both digital and physical touchpoints. Its digital arm, Anthem Amplify, delivers creator and influencer marketing programs, social media campaign management, digital content strategy, short-form video production, meme and culture marketing, and micro-influencer seeding to extend brand moments online.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Does Anthem handle brand activations?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, brand activations and experiential campaigns are core strengths of Anthem as a leading brand activation agency in India. The agency designs and executes immersive consumer engagement campaigns, retail pop-up experiences, mall activations, product sampling tours, roadshows, and interactive brand installations.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Does Anthem create and manage original brand IPs?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, Anthem specializes in developing, producing, and scaling original experiential intellectual properties (IPs). A prime example is The Gin Explorers Club, India’s largest and most celebrated cocktail festival created and produced by the team. Having welcomed over 100,000 enthusiasts across major metropolitan hubs like Delhi, Mumbai, and Bengaluru.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Does Anthem work with startups or only enterprise brands?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Anthem partners with a diverse portfolio ranging from high-growth startups to established enterprise brands and Fortune 500 companies. The agency tailors its creative strategies, brand activations, and corporate event production capabilities to match the specific scale, budget, and commercial goals of each client—backed by a track record supporting over 80+ brands nationwide.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What industries does Anthem specialize in?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Anthem possesses deep domain expertise across multiple high-impact industries, including FMCG, food and beverage, alcohol and spirits (Alcobev), luxury and lifestyle, automotive, technology, fashion, beauty, hospitality, and corporate services.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What is Anthem Amplify?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Anthem Amplify is Anthem’s dedicated digital, creator, and culture marketing arm designed to extend live physical brand moments into the digital ecosystem. Amplify manages micro-creator ambassador programs, meme and culture-page seeding, short-form video production, event clipping, and digital-first campaigns.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What is the process for working with Anthem?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Working with Anthem begins with an initial strategic discovery call to understand your brand objectives, campaign timeline, and target markets. From there, the 30+ member multidisciplinary team collaborates through structured phases covering creative concept development, spatial design, logistics planning, and execution—delivering seamless campaigns backed by 12+ years of industry experience.",
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
