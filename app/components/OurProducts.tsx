import { Button } from "@/app/components/ui/button";
import { Play } from "lucide-react";
import { SectionBadge } from "./ui/SectionBadge";

const OurProduct = () => {
  return (
    <section className="py-8 sm:py-10 lg:py-16 px-4 sm:px-6 lg:px-12 bg-[#F5F5F7] rounded-[40px] sm:rounded-[50px] lg:rounded-[70px] mt-6 sm:mt-8 lg:mt-12">
      <div className="">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 xl:gap-20 items-center">

          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="mb-2 sm:mb-4">
              <SectionBadge>Our Products</SectionBadge>
            </div>

            {/* Heading */}
            <h2
              className="
                font-serif text-foreground leading-tight
                text-2xl
                sm:text-3xl
                md:text-4xl
                lg:text-5xl
                font-semibold
                mb-4 sm:mb-6
              "
            >
              100% <span className="text-accent">Organic</span>
            </h2>

            {/* Description */}
            <p
              className="
                text-muted-foreground max-w-xl leading-relaxed
                text-sm
                sm:text-base
                md:text-lg
                font-normal sm:font-medium
                mb-6 sm:mb-8
              "
            >
              At Ravella Ultra Solution Limited, we don't just offer products—we
              deliver life-changing solutions designed to restore health, boost
              vitality, and transform lives. Our NAFDAC-approved, scientifically
              formulated herbal products combine the best of nature and science
              to promote total well-being.
            </p>

            {/* CTA */}
            <Button
              variant="brown"
              size="lg"
              className="gap-2 rounded-lg w-full sm:w-auto"
            >
              Find Out More
              <Play className="h-4 w-4 fill-current text-gray-400" />
            </Button>
          </div>

          {/* Right Image (unchanged) */}
          <div className="relative order-first lg:order-last">
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden">
              <img
                src="/our-product.png"
                alt="Woman with natural wellness elements"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurProduct;
