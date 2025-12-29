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
            // className: "mr-2",
          },
          {
            text: "In Touch",
            className: "font-extrabold",
            gradient: GRADIENTS.orangeToBrown,
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
