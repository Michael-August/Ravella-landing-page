import React from "react";
import { Users, Heart, Trophy, Play } from "lucide-react";
import { SectionBadge } from "./ui/SectionBadge";
import { Button } from "./ui/button";

// Stat Card Component
const StatCard = ({
  icon: Icon,
  value,
  label,
}: {
  icon: any;
  value: string;
  label: string;
}) => (
  <div className="flex flex-col items-center font-display bg-gray-500/10 rounded-lg sm:rounded-xl p-3 sm:p-4">
    <Icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 mb-1.5 sm:mb-2 text-amber-700" strokeWidth={1.5} />
    <div className="text-2xl sm:text-3xl font-bold text-gray-900">{value}</div>
    <div className="text-xs sm:text-sm text-muted-foreground font-semibold mt-0.5 sm:mt-1 text-center">
      {label}
    </div>
  </div>
);

// Feature Card Component
const FeatureCard = ({
  title,
  description,
  bgColor,
}: {
  title: string;
  description: string;
  bgColor: string;
}) => (
  <div
    className={`${bgColor} rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 flex flex-col justify-start min-h-[120px] sm:min-h-[140px]`}
  >
    <h3 className="mb-1.5 sm:mb-2 text-lg sm:text-xl lg:text-2xl font-bold text-[#FAF8F5]">{title}</h3>
    <p className="text-sm sm:text-base lg:text-lg leading-relaxed font-semibold text-[#FAF8F5]">
      {description}
    </p>
  </div>
);

// Main Component
export default function OurCommunity() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-white px-4 sm:px-6 py-10 sm:py-12 lg:px-12 xl:px-16 lg:py-16 mt-12 sm:mt-16 lg:mt-20 xl:mt-32">
        <div className="max-w-7xl mx-auto">
          {/* Header Label */}
          <SectionBadge>Our Community</SectionBadge>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#32241B] leading-tight mb-4 sm:mb-6">
                Ravella Is More Than A Platform{" "}
                <span className="text-[#653424]">Opportunities</span>
              </h1>

              <p className="max-w-2xl text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8">
                It is a family — connected by purpose, growth, health, and
                freedom. We learn together. We earn together. We win together.
                This is where leaders are built and destinies are changed.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6 xl:gap-8 py-4 sm:py-6">
                <StatCard icon={Users} value="50K+" label="Members" />
                <StatCard icon={Heart} value="87+" label="Countries" />
                <StatCard icon={Trophy} value="7K+" label="Leaders" />
              </div>
            </div>

            {/* Right Image */}
            <div className="relative order-first lg:order-last">
              <div className="relative overflow-hidden rounded-2xl lg:rounded-3xl">
                <img
                  src="/our-community.png"
                  alt="Team meeting"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="py-6 sm:py-8 lg:py-12 border-t max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <FeatureCard
            title="Share the Story"
            description="Invite your friends, family, colleagues, and followers to join the movement."
            bgColor="bg-gradient-to-br from-[#653424] to-[#FF9801]"
          />
          <FeatureCard
            title="Earn Together"
            description="Share in the success of the community"
            bgColor="bg-[#7A6233]"
          />
          <FeatureCard
            title="Team Growth Income"
            description="Personal development and leadership growth"
            bgColor="bg-[#339991]"
          />
          <FeatureCard
            title="Win Together"
            description="Celebrate achievements as one family"
            bgColor="bg-[#7F56D9]"
          />
        </div>
      </section>

      {/* Bottom Section */}
      <section className="relative bg-[#F5F5F7] rounded-[40px] sm:rounded-[50px] lg:rounded-[70px] px-4 sm:px-6 py-10 sm:py-12 lg:px-12 xl:px-16 lg:py-16 mt-12 sm:mt-16 lg:mt-20 xl:mt-32">
        <img
          src="/group-how-it-works.png"
          alt=""
          className="pointer-events-none absolute left-0 top-0 hidden w-12 sm:w-14 lg:w-16 opacity-80 md:block"
        />
        <div className="max-w-7xl mx-auto">
          {/* Header Label */}
          <SectionBadge>Our Products</SectionBadge>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#32241B] leading-tight mb-4 sm:mb-6">
                Celebrating Dedication, Rewarding{" "}
                <span className="text-[#653424]">Success</span>
              </h1>

              <p className="max-w-lg text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8">
                The Ravella Global Award System honors hard work at every stage.
                With our innovative reward plan, everyone wins. By enjoying our
                products, sharing your experience, and referring others, you
                unlock real pathways to growth—no extra effort required. Take
                the step. Become a distributor today.
              </p>
              <Button variant="brown" size="lg" className="gap-2 rounded-lg w-full sm:w-auto">
                Join Our Community{" "}
                <Play className="h-4 w-4 fill-current text-gray-400" />
              </Button>
            </div>

            {/* Right Image */}
            <div className="relative order-first lg:order-last">
              <div className="relative overflow-hidden rounded-2xl lg:rounded-3xl">
                <img
                  src="/celebrating.png"
                  alt="Team meeting"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
