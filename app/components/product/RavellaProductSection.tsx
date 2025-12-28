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
  Footprints,
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
    <section className="max-w-7xl mx-auto py-6 lg:py-12">
      {/* Header Section */}
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
        {/* Left Content */}
        <div>
          <SectionBadge>Ravella Ultra Solution</SectionBadge>

          <h1 className="text-4xl lg:text-5xl font-bold text-[#32241B] mb-6 leading-tight">
            A premium herbal formulation designed to{" "}
            <span className="text-[#FF9801]">
              detoxify, strengthen, and restore balance to the body.
            </span>
          </h1>

          <p className="mx-auto text-xl font-medium leading-relaxed text-muted-foreground">
            At Ravella Ultra Solution, we harness the healing power of nature to
            provide products that promote wellness, vitality, and overall
            health. We believe in preventive care, natural remedies, and
            holistic living as the foundation for a healthier and wealthier
            society.
          </p>
        </div>

        {/* Right Image Placeholder */}
        {/* <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 lg:p-12 min-h-[400px] flex items-center justify-center">
          <div className="text-center text-gray-400">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-white flex items-center justify-center">
              <Sparkles className="w-12 h-12" />
            </div>
            <p className="text-sm">Replace with your image</p>
          </div>
        </div> */}
        {/* Image Card */}
        <div className="relative">
          <div className="relative overflow-hidden">
            <img
              src="/product-line.png"
              alt="Ravella community"
              //   className="w-full h-[360px] lg:h-[440px] object-contain"
            />
          </div>
        </div>
      </div>

      {/* Ailments Section */}
      <div>
        <h2 className="text-xl font-sans font-medium leading-relaxed text-muted-foreground mb-4 lg:mb-8">
          Our Product is Developed to fight the following Ailments
        </h2>

         <div className="flex flex-wrap gap-3">
          {ailments.map((ailment, index) => {
            const Icon = ailment.icon;

            return (
              <div key={index} className="flex">
                <div className="flex w-fit items-center gap-2 rounded-xl border border-gray-200 bg-gray-300/20 px-4 py-2 shadow-sm transition hover:shadow-md">
                  <Icon className="h-5 w-5 text-black" />

                  <span className="whitespace-nowrap text-sm font-semibold text-black">
                    {ailment.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
