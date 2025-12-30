import { Play } from "lucide-react";
import { SectionBadge } from "../ui/SectionBadge";

const CompensationPlan = () => {
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
  ];

  return (
    <section className="relative rounded-2xl sm:rounded-3xl md:rounded-[50px] lg:rounded-[70px] bg-[#F6F0ED]">
      {/* Decorative image */}
      <img
        src="/group-how-it-works.png"
        alt=""
        className="pointer-events-none absolute left-0 top-0 w-10 sm:w-12 md:w-14 lg:w-16 opacity-60 sm:opacity-70 md:opacity-80"
        loading="lazy"
      />

      <div className="mx-auto max-w-full sm:max-w-3xl md:max-w-5xl lg:max-w-7xl px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-14 lg:py-16">
        {/* Header */}
        <div className="mb-8 sm:mb-10 md:mb-12 text-center">
          <div className="mb-4 sm:mb-5 md:mb-6">
            <SectionBadge>Compensation Plan</SectionBadge>
          </div>

          <h2 className="font-display font-semibold leading-tight sm:leading-tight md:leading-none tracking-tight
              text-2xl
              sm:text-3xl
              md:text-4xl
              lg:text-[48px]
              xl:text-[53px]
              text-[#32241B]"> We Offer 15 Unique
            Earning <span className="text-[#653424] block sm:inline">Opportunities</span>
          </h2>

          <p className="mx-auto max-w-full sm:max-w-xl md:max-w-2xl text-base sm:text-lg md:text-xl font-medium sm:font-semibold text-muted-foreground px-2 sm:px-0 mt-3 sm:mt-4">
            Every step you take is a reward. Live Healthy with our products,
            Live Wealthy with our robust pay plan.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {planItems.map(([title, desc], i) => (
            <div
              key={title}
              className="rounded-lg sm:rounded-xl border border-gray-100 bg-white p-4 sm:p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
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
          ))}
        </div>

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

          {/* Optional secondary text */}
          {/* <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-500">
            Detailed breakdown of all 15 earning streams
          </p> */}
        </div>
      </div>
    </section>
  );
};

export default CompensationPlan;