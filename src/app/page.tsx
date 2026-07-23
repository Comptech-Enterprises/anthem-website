import Navbar from "@/components/Navbar";
import RibbonFlight from "@/components/RibbonFlight";
import ScrollProgress from "@/components/ScrollProgress";
import SmoothScroll from "@/components/SmoothScroll";
import ChatWidget from "@/components/ChatWidget";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Stats from "@/components/Stats";
import Brands from "@/components/Brands";
import HowWeWork from "@/components/HowWeWork";
import Work from "@/components/Work";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import Founders from "@/components/Founders";
import EnquiryForm from "@/components/EnquiryForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <SmoothScroll />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <Stats />
        <Brands />
        <RibbonFlight>
          <HowWeWork />
          <Work />
        </RibbonFlight>
        <CaseStudies />
        <Testimonials />
        <Founders />
        <EnquiryForm />
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
