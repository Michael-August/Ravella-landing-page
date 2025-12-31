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
      <PageHeader
        title=""
        breadcrumb="Home / Products"
        titleParts={[
          {
            text: "Explore Our ",
          },
          {
            text: "Product Line",
            className:
              "bg-gradient-to-tr from-[#653424] to-[#FF9801] bg-clip-text text-transparent",
          },
        ]}
      />
      <main className="py-10">
        <RavellaProductSection />
      </main>
      <TestimonialSection />
      <Footer />
    </div>
  );
}
