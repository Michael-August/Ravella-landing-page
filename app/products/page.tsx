import Header from "@/app/components/Header";
import PageHeader from "@/app/components/PageHeader";
import TestimonialSection from "@/app/components/TestimonialSection";
import Footer from "@/app/components/Footer";
import OurProduct from "@/app/components/OurProducts";

export const metadata = {
  title: "Products - Ravella",
  description: "Discover our premium product range.",
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PageHeader title="Products" breadcrumb="Home / Products" />
      <main className="px-6 lg:px-24 py-12">
        <OurProduct />
      </main>
      <TestimonialSection />
      <Footer />
    </div>
  );
}
