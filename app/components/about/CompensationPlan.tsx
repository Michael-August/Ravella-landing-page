"use client";

import { Play } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { SectionBadge } from "../ui/SectionBadge";

const planItems = [
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
  [
    "Team Growth Incom",
    "Income from your organization inteligently placed by AI.",
  ],
  [
    "Rank Bonses",
    "Achiee new heights and unlock massive bonuses.",
  ],
];

const CompensationPlan = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { align: "start", loop: true },
    [
      Autoplay({
        delay: 3500,
        stopOnInteraction: true,
        stopOnMouseEnter: true,
      }),
    ]
  );

  return (
    <section className="relative rounded-2xl sm:rounded-3xl md:rounded-[50px] lg:rounded-[70px] bg-[#F6F0ED] overflow-hidden">
      {/* Decorative image */}
      <img
        src="/group-how-it-works.png"
        alt=""
        className="pointer-events-none absolute left-0 top-0 w-10 sm:w-12 md:w-14 lg:w-16 opacity-60 sm:opacity-70 md:opacity-80"
        loading="lazy"
      />

      <div className="mx-auto max-w-full sm:max-w-3xl md:max-w-5xl lg:max-w-7xl px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-14 lg:py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-8 sm:mb-10 md:mb-12 text-center"
        >
          <div className="mb-4 sm:mb-5 md:mb-6">
            <SectionBadge>Compensation Plan</SectionBadge>
          </div>

          <h2 className="font-bold text-[#32241B] leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 sm:mb-4">
            We Offer 15 Unique
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#32241B] to-[#FF9801]">
              Earning Opportunities
            </span>
          </h2>

          <p className="mx-auto max-w-full sm:max-w-xl md:max-w-2xl text-base sm:text-lg md:text-xl font-medium sm:font-semibold text-muted-foreground px-2 sm:px-0 mt-3 sm:mt-4">
            Every step you take is a reward. Live Healthy with our products,
            Live Wealthy with our robust pay plan.
          </p>
        </motion.div>

        {/* Slider */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative"
        >
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex gap-4 sm:gap-5 md:gap-6">
              {planItems.map(([title, desc], i) => (
                <motion.div
                  key={title}
                  className="flex-[0_0_90%] sm:flex-[0_0_48%] lg:flex-[0_0_32%]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="h-full rounded-lg sm:rounded-xl border border-gray-100 bg-white p-4 sm:p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="mb-3 sm:mb-4 flex h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 items-center justify-center rounded-lg sm:rounded-xl bg-[#814C311A]">
                      <span className="text-base sm:text-lg md:text-xl font-bold text-[#653424]">
                        {i + 1}
                      </span>
                    </div>

                    <h3 className="mb-2 text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
                      {title}
                    </h3>

                    <p className="text-sm sm:text-base md:text-lg font-medium leading-relaxed text-muted-foreground">
                      {desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Toggle dots */}
          <div className="mt-6 flex justify-center gap-2">
            {planItems.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                className="h-2.5 w-2.5 rounded-full bg-[#653424]/30 hover:bg-[#653424] transition"
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <div className="mt-8 sm:mt-10 md:mt-12 text-center">
          <button
            className="inline-flex items-center justify-center gap-2 rounded-lg sm:rounded-xl bg-[#653424] px-6 py-2.5 sm:px-7 sm:py-3 md:px-8 md:py-3.5 font-semibold text-white transition-all duration-300 hover:bg-amber-900 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#653424] focus:ring-opacity-50 w-full sm:w-auto"
            aria-label="View Full Compensation Plan"
          >
            <span className="text-sm sm:text-base md:text-lg">
              View Full Compensation Plan
            </span>
            <Play className="h-3 w-3 sm:h-4 sm:w-4 fill-current text-gray-300 flex-shrink-0" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CompensationPlan;
