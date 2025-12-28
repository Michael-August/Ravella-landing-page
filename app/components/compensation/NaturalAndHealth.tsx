import { Play } from "lucide-react";

const NaturalAndHealth = () => {
  return (
    <section className="relative bg-white">
      <div className="container mx-auto px-6 lg:px-0">
        {/* Image Card */}
        <div className="mt-20">
          <div className="items-center overflow-hidden">
            <img
              src="/natural-health.png"
              alt="Ravella community"
              className="mx-auto h-auto"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="mx-auto mt-16 max-w-4xl text-center">
          <h2 className="font-serif text-3xl font-semibold leading-tight text-[#32241B] lg:text-5xl">
            Unlock <span className="text-[#FF9801]">Health & Wealth</span>
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-xl font-medium leading-relaxed text-muted-foreground">
            From seminars to personalized consultations, Ravella is committed to
            holistic wellness—because when you’re healthier, you’re wealthier.
          </p>
          {/* CTA */}
          <div className="mt-10 text-center">
            <button className="inline-flex items-center gap-2 rounded-lg bg-[#653424] px-8 py-3 font-semibold text-white transition-colors hover:bg-amber-900">
              Download Compensation Plan PDF
              <Play className="h-4 w-4 fill-current text-gray-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NaturalAndHealth;
