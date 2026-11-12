import type { Metadata } from "next";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import RibbonFlight from "@/components/RibbonFlight";
import ScrollProgress from "@/components/ScrollProgress";
import SmoothScroll from "@/components/SmoothScroll";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Brands from "@/components/Brands";
import OurServices from "@/components/OurServices";
import { getAllSlugs, getServiceCity } from "@/data/location-services";

const WhatWeDo = dynamic(() => import("@/components/WhatWeDo"));
const Founders = dynamic(() => import("@/components/Founders"));
const EnquiryForm = dynamic(() => import("@/components/EnquiryForm"));
const Footer = dynamic(() => import("@/components/Footer"));

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const match = getServiceCity(slug);
  if (!match) return { title: "Anthem" };

  const { service, city } = match;
  const title = `${service.name} Company in ${city.name} — Anthem`;
  const description = `Anthem is a leading ${service.name.toLowerCase()} company in ${city.name}. ${service.description}`;

  return {
    title,
    description,
    alternates: { canonical: `/${slug}` },
    openGraph: {
      title,
      description,
      url: `https://theanthem.in/${slug}`,
      siteName: "Anthem",
      type: "website",
      locale: "en_IN",
      images: [
        {
          url: "https://pub-c591ee037cf34224a3fb5b70122e4a59.r2.dev/uploads/world-class.webp",
          width: 1200,
          height: 630,
          alt: `${service.name} in ${city.name} — Anthem`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function ServiceCityPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const match = getServiceCity(slug);
  if (!match) notFound();

  return (
    <>
      <ScrollProgress />
      <SmoothScroll />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Stats />
        <RibbonFlight>
          <Brands />
          <OurServices />
          <WhatWeDo />
        </RibbonFlight>
        <Founders />
        <EnquiryForm />
      </main>
      <Footer />
    </>
  );
}
