import { SectionBadge } from "../ui/SectionBadge";

const WhoWeAreSection = () => {
  return (
    <section className="relative bg-white py-10 lg:py-14">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Top Content */}
            <SectionBadge>Who We Are</SectionBadge>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-end">
          {/* Left: Heading */}
          <div className="flex flex-col justify-end">

            <h2 className="text-4xl lg:text-[53px] font-display font-semibold leading-none text-[#32241B]">
              Ravella Ultra Solution Limited is a pioneering health and wellness
              company dedicated to{" "}
              <span className="text-[#FF9801]">
                transforming lives through natural, curative products.
              </span>
            </h2>
          </div>

          {/* Right: Description */}
          <div className="text-muted-foreground font-semibold text-base lg:text-xl leading-relaxed">
            <p>
              With over 60 years of combined industry expertise, we stand at the
              intersection of science, nature, and opportunity. We believe
              better living and financial success should be accessible to
              everyone.
            </p>

            <p className="mt-6">
              Whether your goal is improved health, independence, or building a
              thriving business, Ravella provides the products, platform, and
              proven system to help you succeed.
            </p>
          </div>
        </div>

        {/* Image Card */}
        <div className="relative mt-20">
          <div className="relative overflow-hidden">
            <img
              src="/who-are-we.png"
              alt="Ravella community"
              className="w-full h-[360px] lg:h-[440px] object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
