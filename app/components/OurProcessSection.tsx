import { ProcessStepCard } from "./ProcessStepCard";

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
    <section className="py-8 lg:py-10 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-6 inline-flex items-center rounded-full border border-border bg-ravella-brown/20 px-4 py-1.5">
            <span className="text-[16px] font-semibold text-ravella-brown">
              Our Process
            </span>
          </div>

          <h2 className="mt-6 mb-4 font-serif text-3xl font-semibold text-foreground md:text-4xl lg:text-5xl">
            Join the Movement in{" "}
            <span className="text-primary">4 Steps</span>
          </h2>

          <p className="mx-auto max-w-2xl text-base font-semibold leading-relaxed text-muted-foreground lg:text-lg">
            Your journey to prosperity starts here. Don&apos;t wait—experience
            how simple, rewarding, and life-changing Ravella can be.
          </p>
        </div>

        {/* Staggered Grid */}
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-3 md:gap-2 md:grid-cols-3 items-start">
          {/* Left */}
          <div className="md:mt-24">
            <ProcessStepCard {...steps[0]} />
          </div>

          {/* Center */}
          <div className="flex flex-col gap-6">
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
