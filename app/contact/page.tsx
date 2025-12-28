import Header from "@/app/components/Header";
import PageHeader from "@/app/components/PageHeader";
import Footer from "../components/Footer";
import RavellaContactSection from "../components/contact/ContactForm";

export const metadata = {
  title: "Contact Us - Ravella",
  description: "Get in touch with our team.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PageHeader title="Get In Touch" breadcrumb="Home / Contact" />
      <main className="px-6 lg:px-24 py-12">
        <RavellaContactSection />
      </main>
      <Footer />
    </div>
  );
}
