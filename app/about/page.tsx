import Header from "@/app/components/Header";
import PageHeader from "@/app/components/PageHeader";
import TestimonialSection from "@/app/components/TestimonialSection";
import Footer from "@/app/components/Footer";
import CoreValues from "@/app/components/CoreValues";
import WhyRavella from "@/app/components/WhyRavella";
import WhoWeAreSection from "../components/about/WhoAreWeSection";
import OurMission from "../components/about/OurMission";
import CompensationPlan from "../components/about/CompensationPlan";
import CommunityImpactSection from "../components/about/CommunityImpactSection ";

export const metadata = {
  title: "About Us - Ravella",
  description: "Learn more about Ravella and our mission.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PageHeader
        title=""
        breadcrumb="Home / About"
        titleParts={[
          {
            text: "About ",
          },
          {
            text: "Ravella?",
            className:
              "bg-gradient-to-tr from-[#653424] to-[#FF9801] bg-clip-text text-transparent",
          },
        ]}
      />
      <main className="">
        <WhoWeAreSection />
        <OurMission />
        <CoreValues />
        <CompensationPlan />
        <CommunityImpactSection />
      </main>
      <TestimonialSection />
      <Footer />
    </div>
  );
}
