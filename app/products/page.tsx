import Header from "@/app/components/Header";
import PageHeader from "@/app/components/PageHeader";
import TestimonialSection from "@/app/components/TestimonialSection";
import Footer from "@/app/components/Footer";
import OurProduct from "@/app/components/OurProducts";
import RavellaProductSection from "../components/product/RavellaProductSection";

export const metadata = {
  title: "Products - Ravella",
  description: "Discover our premium product range.",
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PageHeader title="Explore Our Product Line" breadcrumb="Home / Products" />
      <main className="">
        <RavellaProductSection />
      </main>
      <TestimonialSection />
      <Footer />
    </div>
  );
}
