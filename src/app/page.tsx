import Navbar from "@/components/Navbar";
import RibbonFlight from "@/components/RibbonFlight";
import ScrollProgress from "@/components/ScrollProgress";
import SmoothScroll from "@/components/SmoothScroll";
import ChatWidget from "@/components/ChatWidget";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Founders from "@/components/Founders";
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
        <RibbonFlight>
          <About />
          <Services />
          <Work />
        </RibbonFlight>
        <Founders />
        <JobApplication />
        <EnquiryForm />
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
