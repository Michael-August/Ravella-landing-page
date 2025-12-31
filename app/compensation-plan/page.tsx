import Header from "@/app/components/Header";
import PageHeader from "@/app/components/PageHeader";
import TestimonialSection from "@/app/components/TestimonialSection";
import Footer from "@/app/components/Footer";
import { OurProcessSection } from "@/app/components/OurProcessSection";
import NaturalAndHealth from "../components/compensation/NaturalAndHealth";

export const metadata = {
  title: "Compensation Plan - Ravella",
  description: "Learn about our transparent compensation structure.",
};

export default function CompensationPlanPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PageHeader title="" breadcrumb="Home / Compensation Plan" titleParts={[
          {
            text: "Compensation ",
          },
          {
            text: "Plan",
            className:
              "bg-gradient-to-tr from-[#653424] to-[#FF9801] bg-clip-text text-transparent",
          },
        ]} />
      <main className="">
        <NaturalAndHealth />
      </main>
      <TestimonialSection />
      <Footer />
    </div>
  );
}
