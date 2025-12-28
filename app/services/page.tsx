import Header from "@/app/components/Header";
import PageHeader from "@/app/components/PageHeader";
import TestimonialSection from "@/app/components/TestimonialSection";
import Footer from "@/app/components/Footer";
import { OurServicesSection } from "@/app/components/OurServiceSection";

export const metadata = {
  title: "Services - Ravella",
  description: "Explore our comprehensive services.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PageHeader title="Services" breadcrumb="Home / Services" />
      <main className="px-6 lg:px-24 py-12">
        <OurServicesSection />
      </main>
      <TestimonialSection />
      <Footer />
    </div>
  );
}
