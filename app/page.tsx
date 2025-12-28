import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import CoreValues from "@/app/components/CoreValues";
import WhyRavella from "@/app/components/WhyRavella";
import JoinTheMovement from "@/app/components/JoinTheMovement";
import Services from "@/app/components/Services";
import Footer from "@/app/components/Footer";
import OurProduct from "./components/OurProducts";
import HowItWorksSection from "./components/HowItWorksSection";
import OurCommunity from "./components/OurCommunity";
import TestimonialSection from "./components/TestimonialSection";
import { OurProcessSection } from "./components/OurProcessSection";
import { OurServicesSection } from "./components/OurServiceSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <CoreValues />
        <WhyRavella />
        <OurProcessSection />
        <OurServicesSection />
        {/* <JoinTheMovement />
        <Services /> */}
        <OurProduct />
        <HowItWorksSection />
        <OurCommunity />
      </main>
      <TestimonialSection />
      <Footer />
    </div>
  );
}
