import Header from "@/app/components/Header";
import PageHeader from "@/app/components/PageHeader";

export const metadata = {
  title: "Contact Us - Ravella",
  description: "Get in touch with our team.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PageHeader title="Contact" breadcrumb="Home / Contact" />
      <main className="px-6 lg:px-24 py-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-foreground">
            Contact page content coming soon...
          </p>
        </div>
      </main>
    </div>
  );
}
