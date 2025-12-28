import React from "react";
import { Package, Share2, Clock, Trophy, CreditCard, Play } from "lucide-react";
import { SectionBadge } from "../ui/SectionBadge";

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
    number: 1,
    Icon: Package,
    title: "Our Mission",
    description:
      "Unlock badges, ranks, travel rewards, bonuses, and exclusive gift packages.",
  },
  {
    number: 2,
    Icon: Share2,
    title: "Our Vision",
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

const OurMission = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* HOW IT WORKS */}
      <section className="relative mt-8 rounded-[70px] bg-[#814C31] px-6 pt-16 pb-12">
        <div className="">
          <StepsRow
            steps={STEPS.slice(3)}
            cols="grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto"
          />
        </div>
      </section>
    </div>
  );
};

export default OurMission;
