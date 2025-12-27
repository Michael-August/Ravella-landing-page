import { SectionBadge } from "@/app/components/ui/SectionBadge";
import { ServiceItem } from "./ServiceItem";
// import wellnessProduct from "@/assets/wellness-product.png";

const services = [
  {
    title: "Health",
    titleHighlight: "and Wellness",
    description: "Ravella believes lasting success begins with good health. Through our organic supplements, wellness programs, and expert-driven resources, we promote immune strength, vitality, and preventive care.",
    comingSoon: false,
    isActive: true,
  },
  {
    title: "Real Estate",
    comingSoon: true,
    isActive: false,
  },
  {
    title: "Technology",
    comingSoon: true,
    isActive: false,
  },
  {
    title: "Agriculture",
    comingSoon: true,
    isActive: false,
  },
];

export const OurServicesSection = () => {
  return (
    <section className="bg-ravella-brown/10 py-20 lg:py-32 rounded-[70px]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <SectionBadge>Four Focal Area</SectionBadge>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mt-6 mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg lg:text-xl leading-relaxed mx-auto max-w-2xl">
            Be it Health and Wellness or Real Estate, Ravella offers distinct services designed to help you grow, thrive, and achieve true freedom—both physically and financially.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mt-16">
          {/* Left Column - Service Items */}
          <div className="order-2 lg:order-1">
            {services.map((service, index) => (
              <ServiceItem
                key={index}
                title={service.title}
                titleHighlight={service.titleHighlight}
                description={service.description}
                comingSoon={service.comingSoon}
                isActive={service.isActive}
              />
            ))}
          </div>

          {/* Right Column - Product Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              <div className="rounded-2xl overflow-hidden shadow-card">
                <img
                  src={"/indigestion.png"}
                  alt="Ravella Complete Remedy for Indigestion - Organic health supplement product"
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Navigation dots */}
              <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col gap-2">
                <div className="w-2 h-2 rounded-sm bg-muted-foreground/50" />
                <div className="w-2 h-2 rounded-sm bg-muted-foreground/30" />
                <div className="w-2 h-2 rounded-sm bg-muted-foreground/30" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
