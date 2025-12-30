import { Play } from "lucide-react";

const NaturalAndHealth = () => {
  return (
    <section className="relative bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {/* Image Card */}
        <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-20">
          <div className="items-center overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg sm:shadow-xl">
            <img
              src="/natural-health.png"
              alt="Ravella community"
              className="mx-auto w-full h-auto max-h-[200px] sm:max-h-[250px] md:max-h-[300px] lg:max-h-full xl:max-h-full object-cover object-center"
              loading="lazy"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="mx-auto mt-8 sm:mt-10 md:mt-12 lg:mt-16 max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl text-center px-2 sm:px-4">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight sm:leading-tight md:leading-tight lg:leading-tight text-[#32241B] tracking-tight">
            Unlock{" "}
            <span className="text-[#FF9801] block sm:inline mt-1 sm:mt-0">
              Health & Wealth
            </span>
          </h2>

          <p className="mt-4 sm:mt-5 md:mt-6 text-base sm:text-lg md:text-xl font-medium leading-relaxed text-muted-foreground max-w-full sm:max-w-xl md:max-w-2xl mx-auto px-2 sm:px-0">
            From seminars to personalized consultations, Ravella is committed to
            holistic wellness—because when you're healthier, you're wealthier.
          </p>

          {/* CTA */}
          <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 text-center">
            <button
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#653424] px-6 py-3 sm:px-7 sm:py-3.5 md:px-8 md:py-4 font-semibold text-white transition-all duration-300 hover:bg-amber-900 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#653424] focus:ring-opacity-50 w-full sm:w-auto"
              aria-label="Download Compensation Plan PDF"
            >
              <span className="text-xs sm:text-base md:text-lg">
                Download Compensation Plan PDF
              </span>
              <Play className="h-3 w-3 sm:h-4 sm:w-4 fill-current text-gray-300 flex-shrink-0" />
            </button>

            {/* Optional secondary text */}
            {/* <p className="mt-4 text-xs sm:text-sm text-gray-500">
              Free download • No credit card required
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NaturalAndHealth;