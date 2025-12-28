import { ContainerIcon } from "lucide-react";
import { SectionBadge } from "../ui/SectionBadge";

const CommunityImpactSection = () => {
  return (
    <section className="relative bg-white py-20 lg:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* LEFT: Content */}
          <div>
            {/* Badge */}
            <SectionBadge>Ravellacare – CSR Initiativet</SectionBadge>

            {/* Heading */}
            <h2 className="font-display text-4xl font-semibold leading-tight text-[#32241B] lg:text-[53px]">
              Let&apos;s Build
              <br />
              <span className="text-[#FF9801]">Communities Together</span>
            </h2>

            {/* Description */}
            <p className="mt-3 max-w-xl text-xl font-semibold leading-relaxed text-muted-foreground">
              At Ravellacare, we go beyond business—we’re on a mission to uplift
              lives, restore hope, and empower communities. Every product
              purchase, every act of kindness, every partnership contributes to
              transforming lives.
            </p>

            {/* Subheading */}
            <h3 className="mt-5 text-2xl font-semibold text-muted-foreground tracking-wide">
              Our Pledge to Impact
            </h3>

            {/* Pledge List */}
            <div className="mt-6 space-y-4">
              {[
                "Let’s create change",
                "Let’s empower lives",
                "Let’s support the less privileged",
                "Let’s build communities together",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-xl border border-gray-200 bg-gray-300/20 px-4 py-2 w-fit shadow-sm"
                >
                  {" "}
                  <ContainerIcon className="h-6 w-6 text-black" />
                  <span className="text-xl font-semibold text-black">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Image Card */}
          <div className="relative">
            <div className="relative overflow-hidden">
              <img
                src="/community-impact.png"
                alt="Ravella community"
                //   className="w-full h-[360px] lg:h-[440px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityImpactSection;
