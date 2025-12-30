import Image from "next/image";
import { SectionBadge } from "./ui/SectionBadge";

const CoreValues = () => {
  return (
    <section className="py-8 sm:py-10 md:py-12 lg:py-14 bg-background">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 xl:mb-16">
          <div className="mb-4">
            <SectionBadge>C-Value</SectionBadge>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold font-serif text-[#32241B] leading-tight sm:leading-tight mb-3 sm:mb-4 tracking-tight">
            Our <span className="text-accent">Core Value</span>
          </h2>

          <p className="text-muted-foreground font-medium sm:font-semibold text-sm sm:text-base md:text-lg lg:text-lg max-w-full sm:max-w-xl md:max-w-2xl mx-auto px-2 sm:px-0">
            Your journey to prosperity starts here. Don't wait—experience how
            simple, rewarding, and life-changing Ravella can be.
          </p>
        </div>

        {/* Values Diagram */}
        <div className="relative max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-6xl mx-auto">
          <div className="relative w-full aspect-[2/1] sm:aspect-[20/9] md:aspect-[20/8] lg:aspect-[20/6] overflow-hidden">
            <Image
              src="/core-value.png"
              alt="Ravella Core Values"
              fill
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 80vw, 1200px"
              className="object-cover object-center"
            />
          </div>

          {/* Optional decorative elements for mobile */}
          {/* <div className="mt-4 sm:hidden text-center">
            <p className="text-xs text-muted-foreground">
              Tap to explore our core values
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;