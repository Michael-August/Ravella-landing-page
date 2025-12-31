import Header from "@/app/components/Header";
import PageHeader from "@/app/components/PageHeader";
import TestimonialSection from "@/app/components/TestimonialSection";
import Footer from "@/app/components/Footer";
import { OurServicesSection } from "@/app/components/OurServiceSection";
import HealthWellnessSection from "../components/services/HealthAndWellness";

export const metadata = {
  title: "Services - Ravella",
  description: "Explore our comprehensive services.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PageHeader
        title=""
        breadcrumb="Home / Services"
        titleParts={[
          {
            text: "Explore Our ",
          },
          {
            text: "Service Catalog",
            className:
              "bg-gradient-to-tr from-[#653424] to-[#FF9801] bg-clip-text text-transparent",
          },
        ]}
      />
      <main className="py-10">
        <HealthWellnessSection />
      </main>
      <TestimonialSection />
      <Footer />
    </div>
  );
}
