import Header from "@/app/components/Header";
import PageHeader, { TitlePart } from "@/app/components/PageHeader";
import Footer from "../components/Footer";
import RavellaContactSection from "../components/contact/ContactForm";
import { GRADIENTS } from "../lib/gradient";

export const metadata = {
  title: "Contact Us - Ravella",
  description: "Get in touch with our team.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PageHeader
        breadcrumb="Home / Contact"
        titleParts={[
          {
            text: "Get ",
          },
          {
            text: "In Touch",
            className:
              "bg-gradient-to-tr from-[#653424] to-[#FF9801] bg-clip-text text-transparent",
          },
        ]}
      />
      <main className="">
        <RavellaContactSection />
      </main>
      <Footer />
    </div>
  );
}
