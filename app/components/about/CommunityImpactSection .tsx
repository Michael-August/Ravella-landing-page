import { ContainerIcon } from "lucide-react";
import { SectionBadge } from "../ui/SectionBadge";

const CommunityImpactSection = () => {
  const pledgeItems = [
    "Let's create change",
    "Let's empower lives",
    "Let's support the less privileged",
    "Let's build communities together",
  ];

  return (
    <section className="relative bg-white py-10 sm:py-14 lg:py-20 xl:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* LEFT: Content */}
          <div>
            {/* Badge */}
            <div className="mb-4 sm:mb-5">
              <SectionBadge>Ravellacare – CSR Initiative</SectionBadge>
            </div>

            {/* Heading */}
            <h2 className="font-display font-semibold leading-tight sm:leading-tight md:leading-none tracking-tight
              text-2xl
              sm:text-3xl
              md:text-4xl
              lg:text-[48px]
              xl:text-[53px]
              text-[#32241B]">
              Let's Build
              {/* <br className="hidden lg:block" /> */}
              <span className="text-[#FF9801] block sm:inline"> Communities Together</span>
            </h2>

            {/* Description */}
            <p className="mt-3 sm:mt-4 max-w-xl text-muted-foreground leading-relaxed
              text-sm
              sm:text-base
              md:text-lg
              lg:text-xl
              font-normal sm:font-medium">
              At Ravellacare, we go beyond business—we're on a mission to uplift
              lives, restore hope, and empower communities. Every product
              purchase, every act of kindness, every partnership contributes to
              transforming lives.
            </p>

            {/* Subheading */}
            <h3 className="mt-5 sm:mt-6 font-semibold tracking-wide text-muted-foreground
              text-base
              sm:text-lg
              md:text-xl">
              Our Pledge to Impact
            </h3>

            {/* Pledge List */}
            <div className="mt-4 sm:mt-5 space-y-3 sm:space-y-4">
              {pledgeItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 sm:gap-4
                    rounded-lg sm:rounded-xl
                    border border-gray-200
                    bg-gray-300/20
                    px-3 py-2 sm:px-4 sm:py-3
                    w-full lg:w-fit
                    shadow-sm hover:shadow-md transition"
                >
                  <ContainerIcon className="h-4 w-4 sm:h-5 sm:w-5 text-black flex-shrink-0" />
                  <span className="text-sm sm:text-base md:text-lg font-medium text-black">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Image (unchanged as requested) */}
          <div>
            <div className="relative overflow-hidden">
              <img
                src="/community-impact.png"
                alt="Ravella community impact"
                className="w-full h-[200px] sm:h-[250px] md:h-[320px] lg:h-full xl:h-full object-cover object-center"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CommunityImpactSection;
