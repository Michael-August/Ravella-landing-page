import React from "react";
import { Package, Share2, Clock, Trophy, CreditCard, Play } from "lucide-react";
import { SectionBadge } from "./ui/SectionBadge";

const ICON_PROPS = "w-8 h-8 text-white";

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
    title: "Use the Products",
    description:
      "Your health journey begins. Every usage earns points and progresses your rank.",
  },
  {
    number: 3,
    Icon: Clock,
    title: "Earn Through AI",
    description:
      "AI analyzes your structure, predicts average, and helps maximize rewards.",
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
    <div className="text-center relative">
      {/* Icon */}
      <div className="relative z-10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-xl border border-[#FAF8F533] bg-[#FAF8F51A] backdrop-blur-sm">
        <Icon className={ICON_PROPS} />
      </div>

      {/* Number (connector anchor) */}
      <span className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg font-bold text-ravella-brown">
        {number}
      </span>

      <h3 className="mb-2 text-xl font-semibold text-white">{title}</h3>
      <p className="px-4 text-lg leading-relaxed text-white">{description}</p>
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
  <div className={`relative grid ${cols} gap-8 mb-16`}>
    {/* Connector line (numbers axis) */}
    <div
      className={`hidden md:block absolute top-[110px] h-px bg-white/30 ${connectorInset}`}
    />
    {steps.map((step) => (
      <StepCard key={step.number} step={step} />
    ))}
  </div>
);

const HowItWorksSection = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* HOW IT WORKS */}
      <section className="relative mt-8 rounded-[70px] bg-[#814C31] px-6 pt-16 pb-12 lg:mt-12">
        <div className="mb-16 text-center">
          <SectionBadge variant="automated">How It Works</SectionBadge>
          <h1 className="mb-4 text-5xl font-bold text-white md:text-6xl">
            Simple. Smart. <span className="text-[#FF9801]">Automated.</span>
          </h1>
          <p className="text-xl text-[#FFFFFFB2]">
            Five simple steps to transform your health and wealth journey.
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          <StepsRow
            steps={STEPS.slice(0, 3)}
            cols="grid-cols-1 md:grid-cols-3"
          />
          <StepsRow
            steps={STEPS.slice(3)}
            cols="grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto"
          />
        </div>

        <img
          src="/group-how-it-works.png"
          alt=""
          className="pointer-events-none absolute bottom-0 right-0 hidden w-16 opacity-80 md:block"
        />
      </section>

      {/* COMPENSATION PLAN */}
      <section className="relative mt-8 rounded-[70px] bg-[#F6F0ED] lg:mt-12">
        <img
          src="/group-how-it-works.png"
          alt=""
          className="pointer-events-none absolute left-0 top-0 hidden w-16 opacity-80 md:block"
        />

        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-12 text-center">
            <SectionBadge>Compensation Plan</SectionBadge>
            <h2 className="mb-4 text-4xl font-bold text-[#32241B] md:text-5xl">
              We Offer 15 Unique
              <br />
              Earning <span className="text-[#653424]">Opportunities</span>
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Every step you take is a reward. Live Healthy with our products,
              Live Wealthy with our robust pay plan.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              [
                "Direct Referral Rewards",
                "Instant rewards when you share the Ravella story.",
              ],
              [
                "Team Growth Income",
                "Income from your organization intelligently placed by AI.",
              ],
              [
                "Rank Bonuses",
                "Achieve new heights and unlock massive bonuses.",
              ],
            ].map(([title, desc], i) => (
              <div
                key={title}
                className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#814C311A]">
                  <span className="text-lg font-bold text-[#653424]">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mb-2 text-2xl font-bold text-gray-900">
                  {title}
                </h3>
                <p className="text-lg leading-relaxed font-semibold text-muted-foreground">
                  {desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button className="inline-flex items-center gap-2 rounded-lg bg-[#653424] px-8 py-3 font-semibold text-white transition-colors hover:bg-amber-900">
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
