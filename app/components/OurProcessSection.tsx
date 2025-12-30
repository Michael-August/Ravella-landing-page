import { ProcessStepCard } from "./ProcessStepCard";
import { SectionBadge } from "./ui/SectionBadge";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Connect with our ambassadors, ask the right questions, and explore Ravella's proven wealth creation model.",
    variant: "discover" as const,
  },
  {
    number: "02",
    title: "Register",
    description:
      "Create your Ravella account, choose a package that matches your goals, and join our fast-growing community.",
    variant: "register" as const,
  },
  {
    number: "03",
    title: "Understand",
    description:
      "Learn the referral system, bonus structures, and earning strategies to maximize your success.",
    variant: "understand" as const,
  },
  {
    number: "04",
    title: "Refer",
    description:
      "Invite others, grow your network, and earn attractive rewards with weekly withdrawals.",
    variant: "refer" as const,
  },
];

export const OurProcessSection = () => {
  return (
    <section className="py-8 sm:py-10 lg:py-16 px-4 sm:px-6 lg:px-12 bg-background">
      <div className="">

        {/* Header */}
        <div className="mb-10 sm:mb-12 text-center">
          {/* Badge */}
          <div className="mb-3">
            <SectionBadge>Our Process</SectionBadge>
          </div>

          {/* Heading */}
          <h2
            className="
              font-serif font-semibold text-foreground leading-tight
              text-2xl
              sm:text-3xl
              md:text-4xl
              lg:text-5xl
              mt-2 sm:mt-4
              mb-1.5 sm:mb-3
            "
          >
            Join the Movement in{" "}
            <span className="text-primary">4 Steps</span>
          </h2>

          {/* Description */}
          <p
            className="
              mx-auto max-w-2xl text-muted-foreground leading-relaxed
              text-sm
              sm:text-base
              md:text-lg
              font-normal sm:font-medium
            "
          >
            Your journey to prosperity starts here. Don&apos;t wait—experience
            how simple, rewarding, and life-changing Ravella can be.
          </p>
        </div>

        {/* Staggered Grid */}
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-2 items-start">

          {/* Left */}
          <div className="md:mt-24">
            <ProcessStepCard {...steps[0]} />
          </div>

          {/* Center */}
          <div className="flex flex-col gap-4 sm:gap-6">
            <ProcessStepCard {...steps[1]} />
            <ProcessStepCard {...steps[2]} />
          </div>

          {/* Right */}
          <div className="md:mt-12">
            <ProcessStepCard {...steps[3]} />
          </div>

        </div>
      </div>
    </section>
  );
};
