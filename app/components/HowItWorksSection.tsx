import React from "react";
import { Package, Share2, Clock, Trophy, CreditCard, Play } from "lucide-react";
import { SectionBadge } from "./ui/SectionBadge";

const STEPS = [
  {
    number: 1,
    Icon: Package,
    title: "Use the Products",
    description:
      "Your health journey begins. Every usage earns points and progresses your rank.",
  },
  {
    number: 2,
    Icon: Share2,
    title: "Share the Products",
    description:
      "Spread the Ravella story and grow your network organically.",
  },
  {
    number: 3,
    Icon: Clock,
    title: "Earn Through AI",
    description:
      "AI analyzes your structure, predicts averages, and helps maximize rewards.",
  },
  {
    number: 4,
    Icon: Trophy,
    title: "Level Up",
    description:
      "Unlock badges, ranks, travel rewards, bonuses, and exclusive gift packages.",
  },
  {
    number: 5,
    Icon: CreditCard,
    title: "Withdraw Your Way",
    description:
      "Choose bank transfer, Ravella wallet, USDT/USDC, or SPAY token.",
  },
];

const StepCard = ({ step }: { step: (typeof STEPS)[number] }) => {
  const { Icon, number, title, description } = step;

  return (
    <div className="relative text-center">
      {/* Icon */}
      <div className="relative z-10 mx-auto mb-4 sm:mb-6 flex h-11 w-11 sm:h-14 sm:w-14 lg:h-16 lg:w-16 items-center justify-center rounded-lg sm:rounded-xl border border-[#FAF8F533] bg-[#FAF8F51A] backdrop-blur-sm">
        <Icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white" />
      </div>

      {/* Number */}
      <span className="mx-auto mb-2 sm:mb-3 flex h-7 w-7 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-white text-xs sm:text-sm md:text-base font-bold text-ravella-brown">
        {number}
      </span>

      <h3 className="mb-1.5 sm:mb-2 text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white">
        {title}
      </h3>
      <p className="px-3 sm:px-4 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed text-white">
        {description}
      </p>
    </div>
  );
};

const StepsRow = ({
  steps,
  cols,
  connectorInset = "left-0 right-0",
}: {
  steps: typeof STEPS;
  cols: string;
  connectorInset?: string;
}) => (
  <div className={`relative grid ${cols} gap-6 sm:gap-8 mb-10 sm:mb-12 lg:mb-16`}>
    <div
      className={`hidden md:block absolute top-[96px] lg:top-[110px] h-px bg-white/30 ${connectorInset}`}
    />
    {steps.map((step) => (
      <StepCard key={step.number} step={step} />
    ))}
  </div>
);

const HowItWorksSection = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* HOW IT WORKS */}
      <section className="relative mt-6 sm:mt-8 lg:mt-12 rounded-[40px] sm:rounded-[50px] lg:rounded-[70px] bg-[#814C31] px-4 sm:px-6 lg:px-12 pt-10 sm:pt-12 lg:pt-16 pb-10 sm:pb-12">
        <div className="mb-10 sm:mb-12 lg:mb-16 text-center">
          <div className="mb-2 sm:mb-4">
            <SectionBadge variant="automated">How It Works</SectionBadge>
          </div>

          <h1
            className="
              font-bold text-white leading-tight
              text-2xl
              sm:text-3xl
              md:text-4xl
              lg:text-6xl
              mb-3 sm:mb-4
            "
          >
            Simple. Smart.{" "}
            <span className="text-[#FF9801]">Automated.</span>
          </h1>

          <p
            className="
              text-[#FFFFFFB2] leading-relaxed
              text-sm
              sm:text-base
              md:text-lg
              lg:text-xl
              px-4
            "
          >
            Five simple steps to transform your health and wealth journey.
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          <StepsRow steps={STEPS.slice(0, 3)} cols="grid-cols-1 md:grid-cols-3" />
          <StepsRow
            steps={STEPS.slice(3)}
            cols="grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto"
          />
        </div>
      </section>

      {/* COMPENSATION PLAN */}
      <section className="relative mt-6 sm:mt-8 lg:mt-12 rounded-[40px] sm:rounded-[50px] lg:rounded-[70px] bg-[#F6F0ED]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 py-10 sm:py-12 lg:py-16">
          <div className="mb-8 sm:mb-10 lg:mb-12 text-center">
            <div className="mb-2 sm:mb-4">
              <SectionBadge>Compensation Plan</SectionBadge>
            </div>

            <h2
              className="
                font-bold text-[#32241B] leading-tight
                text-2xl
                sm:text-3xl
                md:text-4xl
                lg:text-5xl
                mb-3 sm:mb-4
              "
            >
              We Offer 15 Unique
              <br />
              Earning{" "}
              <span className="text-[#653424]">Opportunities</span>
            </h2>

            <p
              className="
                mx-auto max-w-2xl text-muted-foreground leading-relaxed
                text-sm
                sm:text-base
                md:text-lg
                lg:text-xl
                px-4
              "
            >
              Every step you take is a reward. Live Healthy with our products,
              Live Wealthy with our robust pay plan.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["Direct Referral Rewards", "Instant rewards when you share the Ravella story."],
              ["Team Growth Income", "Income from your organization intelligently placed by AI."],
              ["Rank Bonuses", "Achieve new heights and unlock massive bonuses."],
            ].map(([title, desc], i) => (
              <div
                key={title}
                className="rounded-lg sm:rounded-xl border border-gray-100 bg-white p-4 sm:p-5 lg:p-6 shadow-sm"
              >
                <div className="mb-3 sm:mb-4 flex h-11 w-11 sm:h-14 sm:w-14 items-center justify-center rounded-lg sm:rounded-xl bg-[#814C311A]">
                  <span className="text-sm sm:text-base md:text-lg font-bold text-[#653424]">
                    {i + 1}
                  </span>
                </div>

                <h3 className="mb-1.5 sm:mb-2 text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900">
                  {title}
                </h3>

                <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed font-medium text-muted-foreground">
                  {desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 sm:mt-10 text-center">
            <button className="inline-flex items-center gap-2 rounded-lg bg-[#653424] px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold text-white transition-colors hover:bg-amber-900 w-full sm:w-auto">
              View Full Compensation Plan
              <Play className="h-4 w-4 fill-current text-gray-300" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksSection;
