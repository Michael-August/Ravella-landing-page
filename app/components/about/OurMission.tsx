import React from "react";
import { Package, Share2 } from "lucide-react";

const MISSION_VISION_STEPS = [
  {
    number: 1,
    Icon: Package,
    title: "Our Mission",
    description: "To transform lives through natural, curative products and empower individuals to achieve better health and financial independence.",
  },
  {
    number: 2,
    Icon: Share2,
    title: "Our Vision",
    description: "To create a world where everyone has access to holistic wellness solutions and the opportunity to build sustainable wealth.",
  },
];

const StepCard = ({ step }: { step: (typeof MISSION_VISION_STEPS)[number] }) => {
  const { Icon, number, title, description } = step;

  return (
    <div className="text-center relative">
      {/* Icon */}
      <div className="relative z-10 mx-auto mb-4 sm:mb-5 md:mb-6 flex h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 items-center justify-center rounded-lg sm:rounded-xl border border-[#FAF8F533] bg-[#FAF8F51A] backdrop-blur-sm">
        <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
      </div>

      {/* Number */}
      <span className="mx-auto mb-2 sm:mb-3 flex h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 items-center justify-center rounded-full bg-white text-base sm:text-lg md:text-lg font-bold text-[#814C31]">
        {number}
      </span>

      <h3 className="mb-2 text-lg sm:text-xl md:text-2xl font-semibold text-white">{title}</h3>
      <p className="px-2 sm:px-4 text-sm sm:text-base md:text-lg leading-relaxed text-white/90">
        {description}
      </p>
    </div>
  );
};

const OurMission = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <section className="relative mt-6 sm:mt-8 rounded-2xl sm:rounded-3xl md:rounded-[50px] lg:rounded-[70px] bg-[#814C31] px-4 sm:px-5 md:px-6 lg:px-8 xl:px-12 pt-8 sm:pt-12 md:pt-14 lg:pt-16 pb-8 sm:pb-10 md:pb-12">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-white">
            Mission & Vision
          </h2>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base md:text-lg text-white/80 max-w-2xl mx-auto px-2">
            The driving force behind everything we do at Ravella
          </p>
        </div>

        <div className="max-w-full sm:max-w-3xl lg:max-w-4xl mx-auto">
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {/* Connector line for desktop */}
            <div className="hidden md:block absolute top-[90px] md:top-[100px] left-1/4 right-1/4 h-px bg-white/30" />

            {MISSION_VISION_STEPS.map((step, index) => (
              <StepCard key={index} step={step} />
            ))}
          </div>
        </div>

        {/* Optional decorative elements */}
        {/* <div className="mt-10 sm:mt-12 md:mt-16 text-center">
          <div className="inline-flex items-center justify-center gap-3 rounded-full bg-white/10 px-6 py-3 backdrop-blur-sm">
            <span className="text-white text-sm sm:text-base">🌟</span>
            <span className="text-white font-medium text-sm sm:text-base">
              Transforming Lives Since 2023
            </span>
          </div>
        </div> */}
      </section>
    </div>
  );
};

export default OurMission;