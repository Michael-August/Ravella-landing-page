import {
  Brain,
  Trophy,
  Wallet,
  Share2,
  DollarSign,
  Users
} from "lucide-react";
import { SectionBadge } from "./ui/SectionBadge";

const WhyRavella = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Smart Placement",
      description:
        "Our intelligent AI algorithm ensures optimal placement for maximum earning potential in your network.",
    },
    {
      icon: Trophy,
      title: "Gamified Dashboard",
      description:
        "Track your progress with an engaging, game-like experience. Earn badges, climb leaderboards, and unlock achievements.",
    },
    {
      icon: Wallet,
      title: "Web3 Wallet & Tokens",
      description:
        "Seamlessly manage your earnings with our integrated Web3 wallet and get rewarded with Ravella Tokens/Points.",
    },
    {
      icon: Share2,
      title: "SocialFi Income",
      description:
        "Turn your social connections into income streams. Build community and get rewarded for your influence.",
    },
    {
      icon: DollarSign,
      title: "Flexible Withdrawals",
      description:
        "Withdraw your earnings anyway you want with multiple payment options including crypto and bank transfers.",
    },
    {
      icon: Users,
      title: "Community-Owned Value",
      description:
        "Be part of a community that shares in the success. The people who build the value finally own the value.",
    },
  ];

  return (
    <section className="py-8 sm:py-10 lg:py-16 px-4 sm:px-6 lg:px-12 bg-ravella-brown/10 rounded-[70px]">
      <div className="">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="mb-4">
            <SectionBadge>Why Choose Us</SectionBadge>
          </div>

          <h2
            className="
              font-serif font-semibold text-[#32241B] leading-tight tracking-tight
              text-2xl
              sm:text-3xl
              md:text-4xl
              lg:text-5xl
              mb-4 sm:mb-6
            "
          >
            Built for {" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#32241B] to-[#FF9801]">
              the Future
            </span>
          </h2>

          <p
            className="
              text-muted-foreground leading-relaxed
              text-sm
              sm:text-base
              md:text-lg
              lg:text-xl
            "
          >
            Ravella fuses innovation, community, and true ownership to create predictable growth and lasting freedom. MLM, re-imagined for tomorrow.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white p-6 sm:p-8 border rounded-xl border-gray-100"
            >
              {/* Icon */}
              <div className="bg-ravella-brown/20 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-ravella-brown" />
              </div>

              {/* Title */}
              <h3
                className="
                  text-lg
                  sm:text-xl
                  md:text-2xl
                  font-medium
                  text-gray-900
                  mb-2 sm:mb-4
                "
              >
                {feature.title}
              </h3>

              {/* Description */}
              <p
                className="
                  text-gray-600 leading-relaxed
                  text-sm
                  sm:text-base
                  md:text-lg
                "
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyRavella;
