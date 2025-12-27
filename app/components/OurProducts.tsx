import { Button } from "@/app/components/ui/button";
import { ChevronRight, Play } from "lucide-react";

const OurProduct = () => {
  return (
    <section id="about" className="py-20 lg:py-20 bg-[#F5F5F7] rounded-[70px] mt-8 lg:mt-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center rounded-full border border-border px-4 py-1.5 mb-6 bg-ravella-brown/20">
              <span className="text-[16px] font-semibold text-ravella-brown">
                Our Products
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground leading-tight mb-6 font-[540]">
              100% <span className="text-accent">Organic</span>
            </h2>

            <p className="text-muted-foreground font-semibold text-base lg:text-lg max-w-xl mx-auto mb-8">
              At Ravella Ultra Solution Limited, we don't just offer products—we
              deliver life-changing solutions designed to restore health, boost
              vitality, and transform lives. Our NAFDAC-approved, scientifically
              formulated herbal products combine the best of nature and science
              to promote total well-being.
            </p>

            <Button variant="brown" size="lg" className="gap-2 rounded-lg">
              Find Out More
              <Play className="h-4 w-4 fill-current text-gray-400" />
            </Button>
          </div>

          {/* Right Image */}
          <div className="relative">
            {/* Decorative squares */}
            {/* <div className="absolute -top-0 -left-0 flex flex-col gap-3 z-10">
              <div className="w-6 h-6 border-2 border-muted-foreground/30 rounded-sm bg-white"></div>
              <div className="w-6 h-6 border-2 border-muted-foreground/30 rounded-sm"></div>
              <div className="w-6 h-6 border-2 border-muted-foreground/30 rounded-sm bg-white"></div>
            </div> */}

            <div className="relative rounded-2xl overflow-hidden">
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
