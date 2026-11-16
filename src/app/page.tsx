import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import RibbonFlight from "@/components/RibbonFlight";
import ScrollProgress from "@/components/ScrollProgress";
import SmoothScroll from "@/components/SmoothScroll";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Brands from "@/components/Brands";
import OurServices from "@/components/OurServices";

const WhatWeDo = dynamic(() => import("@/components/WhatWeDo"));
const Founders = dynamic(() => import("@/components/Founders"));
const EnquiryForm = dynamic(() => import("@/components/EnquiryForm"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
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
        {/* <Testimonials /> */}
        <Founders />
        <EnquiryForm />
      </main>
      <Footer />
    </>
  );
}
