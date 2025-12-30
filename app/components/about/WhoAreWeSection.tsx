import { SectionBadge } from "../ui/SectionBadge";

const WhoWeAreSection = () => {
  return (
    <section className="relative bg-white py-8 sm:py-10">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {/* Top Content */}
        <div className="mb-4 sm:mb-5">

          <SectionBadge>Who We Are</SectionBadge>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 items-start lg:items-end">
          {/* Left: Heading */}
          <div className="flex flex-col justify-end">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[53px] font-display font-semibold leading-tight sm:leading-tight md:leading-none text-[#32241B] tracking-tight">
              Ravella Ultra Solution Limited is a pioneering health and wellness
              company dedicated to{" "}
              <span className="text-[#FF9801] block sm:inline">
                transforming lives through natural, curative products.
              </span>
            </h2>
          </div>

          {/* Right: Description */}
          <div className="text-muted-foreground font-medium sm:font-semibold text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed sm:leading-relaxed md:leading-relaxed space-y-4 sm:space-y-6">
            <p>
              With over 60 years of combined industry expertise, we stand at the
              intersection of science, nature, and opportunity. We believe
              better living and financial success should be accessible to
              everyone.
            </p>

            <p>
              Whether your goal is improved health, independence, or building a
              thriving business, Ravella provides the products, platform, and
              proven system to help you succeed.
            </p>
          </div>
        </div>

        {/* Image Card */}
        <div className="relative mt-12 sm:mt-14 md:mt-16 lg:mt-20">
          <div className="relative overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg sm:shadow-xl">
            <img
              src="/who-are-we.png"
              alt="Ravella community"
              className="w-full h-[200px] sm:h-[250px] md:h-[320px] lg:h-full xl:h-full object-cover object-center"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;