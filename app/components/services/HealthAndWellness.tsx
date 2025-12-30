const HealthWellnessSection = () => {
  const tabs = [
    { label: "Health & Wellness", active: true },
    { label: "Real Estate", soon: true },
    { label: "Technology", soon: true },
    { label: "Agriculture", soon: true },
  ];

  return (
    <section className="relative bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {/* Tabs - Responsive */}
        <div className="flex flex-wrap items-center justify-center sm:justify-between gap-4 border-b border-gray-200 pb-4 sm:pb-6 font-display overflow-x-auto">
          {tabs.map((tab) => (
            <div
              key={tab.label}
              className={`relative flex items-center gap-2 pb-3 sm:pb-4 text-sm sm:text-base md:text-lg font-semibold whitespace-nowrap ${tab.active ? "text-[#32241B]" : "text-muted-foreground"
                }`}
            >
              {tab.label}
              {tab.soon && (
                <span className="rounded-full bg-[#FFF1D6] px-2 sm:px-3 py-0.5 text-xs font-semibold text-[#FF9801]">
                  Coming soon
                </span>
              )}
              {tab.active && (
                <span className="absolute left-0 -bottom-[1px] h-[2px] sm:h-[3px] w-full bg-[#FF9801]" />
              )}
            </div>
          ))}
        </div>

        {/* Image Card */}
        <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-20">
          <div className="items-center overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg sm:shadow-xl">
            <img
              src="/health-wellness.png"
              alt="Ravella community"
              className="mx-auto w-full h-auto max-h-[200px] sm:max-h-[300px] md:max-h-[400px] lg:max-h-full xl:max-h-full object-cover object-center"
              loading="lazy"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="mx-auto mt-8 sm:mt-10 md:mt-12 lg:mt-16 max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl text-center px-2 sm:px-4">
          <h2 className="font-serif text-xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight sm:leading-tight md:leading-tight lg:leading-tight text-[#32241B] tracking-tight">
            Ravella believes lasting success begins with good health. Through
            our organic supplements, wellness programs, and expert-driven
            resources,{" "}
            <span className="text-[#FF9801] block sm:inline">
              we promote immune strength, vitality, and preventive care.
            </span>
          </h2>

          <p className="mt-4 sm:mt-5 md:mt-6 text-base sm:text-lg md:text-xl font-medium leading-relaxed text-muted-foreground max-w-full sm:max-w-xl md:max-w-2xl mx-auto px-2 sm:px-0">
            From seminars to personalized consultations, Ravella is committed to
            holistic wellness—because when you're healthier, you're wealthier.
          </p>

          {/* CTA Button (Optional - Add if needed) */}
          {/* <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 text-center">
            <button
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#653424] px-6 py-3 sm:px-7 sm:py-3.5 md:px-8 md:py-4 font-semibold text-white transition-all duration-300 hover:bg-amber-900 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#653424] focus:ring-opacity-50 w-full sm:w-auto"
              aria-label="Learn more about Health & Wellness"
            >
              <span className="text-sm sm:text-base md:text-lg">
                Explore Wellness Programs
              </span>
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default HealthWellnessSection;