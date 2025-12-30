import React from "react";
import {
  Droplet,
  Shield,
  Activity,
  Sparkles,
  Heart,
  Pill,
  Flame,
  Calendar,
  Stethoscope,
  Zap,
  Cross,
  Brain,
  Flower2,
  TrendingUp,
} from "lucide-react";
import { SectionBadge } from "../ui/SectionBadge";

const ailments = [
  { icon: Droplet, label: "Liver and kidney diseases" },
  { icon: Cross, label: "Ulcers" },
  { icon: Shield, label: "Immune boost" },
  { icon: Activity, label: "Repair Damaged Cells" },
  { icon: Brain, label: "Virtual Health" },
  { icon: Heart, label: "Enhance sexual performance" },
  { icon: Flame, label: "Arthritis" },
  { icon: Droplet, label: "Hemorrhoids (pile)" },
  { icon: Sparkles, label: "Anti Aging" },
  { icon: Calendar, label: "Menstruation issues" },
  { icon: Pill, label: "Diabetes" },
  { icon: Stethoscope, label: "Skin Health Conditions" },
  { icon: Zap, label: "STDs" },
  { icon: Activity, label: "Chronic Pains" },
  { icon: Cross, label: "Cancer" },
  { icon: Brain, label: "Stroke" },
  { icon: Flower2, label: "Fibroid" },
  { icon: TrendingUp, label: "Aids Fertility" },
  { icon: Activity, label: "Hypertension" },
];

export default function RavellaProductSection() {
  return (
    <section className="">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {/* Header Section */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          {/* Left Content */}
          <div className="w-full order-2 lg:order-1">
            <div className="">
              <SectionBadge>Ravella Ultra Solution</SectionBadge>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px] font-bold text-[#32241B] mb-4 sm:mb-5 md:mb-6 leading-tight sm:leading-tight md:leading-tight lg:leading-tight xl:leading-tight">
              A premium herbal formulation designed to{" "}
              <span className="text-[#FF9801] block sm:inline mt-1 sm:mt-0">
                detoxify, strengthen, and restore balance to the body.
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl font-medium leading-relaxed text-muted-foreground max-w-full sm:max-w-xl md:max-w-2xl">
              At Ravella Ultra Solution, we harness the healing power of nature to
              provide products that promote wellness, vitality, and overall
              health. We believe in preventive care, natural remedies, and
              holistic living as the foundation for a healthier and wealthier
              society.
            </p>
          </div>

          {/* Right Image - order first on mobile, second on desktop */}
          <div className="w-full order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl shadow-md sm:shadow-lg md:shadow-xl">
              <img
                src="/product-line.png"
                alt="Ravella product lineup showing various health products"
                className="w-full h-auto max-h-[280px] sm:max-h-[320px] md:max-h-[360px] lg:max-h-full xl:max-h-full object-cover object-center"
                loading="lazy"
              />
              {/* Optional overlay for better text readability */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>

        {/* Ailments Section */}
        <div className="mt-10 sm:mt-12 md:mt-14 lg:mt-16">
          <h2 className="text-lg sm:text-xl md:text-2xl font-medium leading-relaxed text-muted-foreground mb-4 sm:mb-6 md:mb-8 text-center lg:text-left">
            Our Product is Developed to fight the following Ailments
          </h2>

          <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 md:gap-4">
            {ailments.map((ailment, index) => {
              const Icon = ailment.icon;

              return (
                <div key={index} className="flex">
                  <div className="flex w-fit items-center gap-1.5 sm:gap-2 md:gap-3 rounded-lg sm:rounded-xl border border-gray-200 bg-gray-300/20 px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02] hover:border-[#FF9801]/30 active:scale-95">
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-black" />

                    <span className="whitespace-nowrap text-xs sm:text-sm md:text-base font-medium sm:font-semibold text-black">
                      {ailment.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile view note for ailments that overflow */}
          {/* <div className="lg:hidden mt-6 text-center">
            <p className="text-xs sm:text-sm text-gray-500">
              Scroll horizontally to see all ailments
            </p>
            <div className="flex justify-center mt-2">
              <div className="w-12 h-1 bg-gray-300 rounded-full"></div>
            </div>
          </div> */}
        </div>

        {/* Optional CTA Section */}
        {/* <div className="mt-10 sm:mt-12 md:mt-16 lg:mt-20 text-center lg:text-left">
          <button
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#653424] px-6 py-3 sm:px-7 sm:py-3.5 md:px-8 md:py-4 font-semibold text-white transition-all duration-300 hover:bg-amber-900 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#653424] focus:ring-opacity-50 w-full sm:w-auto"
            aria-label="Learn more about Ravella Ultra Solution"
          >
            <span className="text-sm sm:text-base md:text-lg">
              Learn More About Our Products
            </span>
            <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 fill-current text-gray-300 flex-shrink-0" />
          </button>
        </div> */}
      </div>
    </section>
  );
}