import { Button } from "@/app/components/ui/button";
import { ChevronRight, Play } from "lucide-react";
import { SectionBadge } from "./ui/SectionBadge";

const About = () => {
  return (
    <section
      id="about"
      className="py-8 sm:py-10 md:py-12 lg:py-14 bg-background"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-14 xl:gap-20 items-start lg:items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="mb-4 sm:mb-5 md:mb-6">
              <SectionBadge>About Us</SectionBadge>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px] font-bold font-serif text-[#32241B] leading-tight sm:leading-tight tracking-tight mb-4 sm:mb-5 md:mb-6">
              Building Better Lives {" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#32241B] to-[#FF9801]">
                Through Wellness And Opportunity
              </span>
            </h2>

            <p className="text-muted-foreground font-medium sm:font-semibold text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-7 md:mb-8 max-w-full sm:max-w-md">
              Ravella Ultra Solution Limited is more than a health and wellness
              brand— it's a movement for better living and smarter earning. We
              combine natural, high-quality products with a transparent business
              model that empowers individuals to achieve wellness, financial
              freedom, and lasting success.
            </p>

            <Button
              variant="brown"
              size="lg"
              className="gap-2 rounded-lg w-full sm:w-auto order-last lg:order-first"
            >
              Find Out More
              <Play className="h-4 w-4 sm:h-5 sm:w-5 fill-current text-gray-400/70" />
            </Button>
          </div>

          {/* Right Image */}
          <div className="">
            <div className="relative overflow-hidden">
              <img
                src="/green-smoke.png"
                alt="Woman with natural wellness elements"
                className="w-full h-[200px] sm:h-[250px] md:h-[320px] lg:h-full xl:h-full object-cover object-center"
                loading="lazy"
                // sizes="(max-width: 1024px) 100vw, 50vw"
              />

              {/* Optional play button overlay for video */}
              {/* <div className="absolute inset-0 flex items-center justify-center bg-black/10 opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                <div className="bg-white/90 hover:bg-white rounded-full p-3 sm:p-4 md:p-5 transition-all duration-300">
                  <Play className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-[#653424] fill-current" />
                </div>
              </div> */}
            </div>

            {/* Optional decorative element for mobile */}
            {/* <div className="mt-2 sm:hidden flex items-center justify-center gap-1">
              <span className="text-xs text-gray-500">Tap image to play video</span>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
