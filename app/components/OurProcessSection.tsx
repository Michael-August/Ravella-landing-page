import { SectionBadge } from "@/app/components/ui/SectionBadge";
import { ProcessStepCard } from "./ProcessStepCard";

const steps = [
  {
    number: "01",
    title: "Discover",
    description: "Connect with our ambassadors, ask the right questions, and explore Ravella's proven wealth creation model.",
    variant: "discover" as const,
  },
  {
    number: "02",
    title: "Register",
    description: "Create your Ravella account, choose a package that matches your goals, and join our fast-growing community.",
    variant: "register" as const,
  },
  {
    number: "03",
    title: "Understand",
    description: "Learn the referral system, bonus structures, and earning strategies to maximize your success",
    variant: "understand" as const,
  },
  {
    number: "04",
    title: "Refer",
    description: "Invite others, grow your network, and earn attractive rewards with weekly withdrawals.",
    variant: "refer" as const,
  },
];

export const OurProcessSection = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          {/* <SectionBadge>Our Process</SectionBadge> */}
           <div className="inline-flex items-center rounded-full border border-border px-4 py-1.5 mb-6 bg-ravella-brown/20">
              <span className="text-[16px] font-semibold text-ravella-brown">
                Our Process
              </span>
            </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mt-6 mb-4">
            Join the Movement in <span className="text-primary">4 Steps</span>
          </h2>
          <p className="text-muted-foreground font-semibold text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
            Your journey to prosperity starts here. Don't wait—experience how simple, rewarding, and life-changing Ravella can be.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {/* Left Column - Step 1 */}
          <div className="md:mt-8">
            <ProcessStepCard {...steps[0]} />
          </div>

          {/* Center Column - Steps 2 & 3 */}
          <div className="flex flex-col gap-6">
            <ProcessStepCard {...steps[1]} />
            <ProcessStepCard {...steps[2]} />
          </div>

          {/* Right Column - Step 4 */}
          <div className="md:mt-8">
            <ProcessStepCard {...steps[3]} />
          </div>
        </div>
      </div>
    </section>
  );
};
