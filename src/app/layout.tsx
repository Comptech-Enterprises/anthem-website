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
  title: "Anthem — Your New-Age Experiential Partners",
  description:
    "Anthem is an experiential agency that delivers 360° brand campaigns rooted in innovation, consumer insights and storytelling.",
  icons: {
    icon: "/logo.webp",
    apple: "/logo.webp",
  },
  verification: {
    google: "9oULDvmqmUDX2qp5DFvHGseyDvjdJNLbeOcQkwc9-Ks",
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
          src="https://www.googletagmanager.com/gtag/js?id=G-YQQGMEZVFH"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-YQQGMEZVFH');
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
        {children}
      </body>
    </html>
  );
}
