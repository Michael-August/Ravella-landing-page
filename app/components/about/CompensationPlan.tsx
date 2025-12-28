import { Play } from "lucide-react";
import { SectionBadge } from "../ui/SectionBadge";

const CompensationPlan = () => {
  return (
    <section className="relative mt-8 rounded-[70px] bg-[#F6F0ED] lg:mt-12">
      {/* Decorative image */}
      <img
        src="/group-how-it-works.png"
        alt=""
        className="pointer-events-none absolute left-0 top-0 hidden w-16 opacity-80 md:block"
      />

      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Header */}
        <div className="mb-12 text-center">
          <SectionBadge>Compensation Plan</SectionBadge>

          <h2 className="mb-4 text-4xl font-bold text-[#32241B] md:text-5xl">
            We Offer 15 Unique
            <br />
            Earning <span className="text-[#653424]">Opportunities</span>
          </h2>

          <p className="mx-auto max-w-2xl text-xl font-semibold text-muted-foreground">
            Every step you take is a reward. Live Healthy with our products,
            Live Wealthy with our robust pay plan.
          </p>
        </div>

        {/* Cards */}
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

              <p className="text-lg font-semibold leading-relaxed text-muted-foreground">
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <button className="inline-flex items-center gap-2 rounded-lg bg-[#653424] px-8 py-3 font-semibold text-white transition-colors hover:bg-amber-900">
            View Full Compensation Plan
            <Play className="h-4 w-4 fill-current text-gray-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CompensationPlan;
