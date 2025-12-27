import { Button } from "@/app/components/ui/button";
import { Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/hero-img.png"
          alt="Woman on dock with wellness products"
          className="h-full w-full object-cover"
        />

        {/* Left vignette */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-[#2B160E]/95 via-[#2B160E]/70 to-transparent" /> */}

        {/* Bottom blur / fade */}
        <div className="absolute bottom-0 left-0 right-0 h-[220px] bg-gradient-to-t from-black/70 via-black/30 to-transparent backdrop-blur-[6px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 pt-32 lg:pt-28">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 mb-8">
          <span className="h-2 w-2 rounded-full bg-[#FF9801]" />
          <span className="text-sm text-white font-display">
            Reliable Solutions for Everyday Care
          </span>
        </div>

        {/* Copy */}
        <div className="max-w-3xl">
          <h1 className="text-white leading-[1.05] font-semibold text-4xl sm:text-5xl lg:text-7xl mb-6">
            Health, Wealth,
            <br />
            and Community
            <br />
            <span className="text-[#FF9801]">Together with Ravella</span>
          </h1>

          <p className="max-w-xl text-white/80 text-base md:text-xl leading-relaxed mb-8">
            We promote wellness and build sustainable income with multiple
            earning opportunities. Live healthy. Earn massively. Share
            effortlessly. Grow globally.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="gap-2 bg-[#5A2D1B] text-white hover:bg-[#5A2D1B]/90 font-display"
            >
              <Play className="h-4 w-4 fill-current text-white/80" />
              Explore Products
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="gap-2 bg-white text-[#2B160E] hover:bg-white/90 font-display"
            >
              Join Now
              <Play className="h-4 w-4 fill-current text-gray-400/70" />
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="relative mt-28 lg:mt-20 font-display">
          {/* Soft blur plate behind stats */}

          <div className="relative flex flex-wrap justify-between max-w-3xl gap-16 border-t border-white/20 pt-8">
            <div>
              <p className="text-white font-semibold text-4xl md:text-5xl">
                15+
              </p>
              <p className="text-white/70 text-sm mt-1 font-light font-sans">
                Earning Opportunities
              </p>
            </div>

            <div>
              <p className="text-white font-semibold text-4xl md:text-5xl">
                50K+
              </p>
              <p className="text-white/70 text-sm mt-1 font-light font-sans">Active Members</p>
            </div>

            <div>
              <p className="text-white font-semibold text-4xl md:text-5xl">
                98%
              </p>
              <p className="text-white/70 text-sm mt-1 font-light font-sans">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>
        <div className="inset-x-0 -bottom-6 h-28 bg-white/90 backdrop-blur-4xl" />
    </section>
  );
};

export default Hero;
