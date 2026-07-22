import Navbar from "@/components/Navbar";
import RibbonFlight from "@/components/RibbonFlight";
import ScrollProgress from "@/components/ScrollProgress";
import SmoothScroll from "@/components/SmoothScroll";
import ChatWidget from "@/components/ChatWidget";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Services from "@/components/Services";
import Work from "@/components/Work";
import CaseStudies from "@/components/CaseStudies";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Founders from "@/components/Founders";
import Blog from "@/components/Blog";
import EnquiryForm from "@/components/EnquiryForm";
import JobApplication from "@/components/JobApplication";
import Footer from "@/components/Footer";

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
          <About />
          <Services />
          <Work />
        </RibbonFlight>
        <CaseStudies />
        <Gallery />
        <Testimonials />
        <Founders />
        <Blog />
        <JobApplication />
        <EnquiryForm />
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
