const HealthWellnessSection = () => {
  return (
    <section className="relative bg-white">
      <div className="container mx-auto px-6 lg:px-0">
        {/* Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-10 border-b border-gray-200 pb-6 font-display">
          {[
            { label: "Health & Wellness", active: true },
            { label: "Real Estate", soon: true },
            { label: "Technology", soon: true },
            { label: "Agriculture", soon: true },
          ].map((tab) => (
            <div
              key={tab.label}
              className={`relative flex items-center gap-2 pb-4 text-lg font-semibold ${
                tab.active ? "text-[#32241B]" : "text-muted-foreground"
              }`}
            >
              {tab.label}
              {tab.soon && (
                <span className="rounded-full bg-[#FFF1D6] px-3 py-0.5 text-xs font-semibold text-[#FF9801]">
                  Coming soon
                </span>
              )}
              {tab.active && (
                <span className="absolute left-0 -bottom-[1px] h-[3px] w-full bg-[#FF9801]" />
              )}
            </div>
          ))}
        </div>

        {/* Image Card */}
        <div className="mt-20">
          <div className="items-center overflow-hidden">
            <img
              src="/health-wellness.png"
              alt="Ravella community"
              className="w-[85%] mx-auto h-auto"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="mx-auto mt-16 max-w-4xl text-center">
          <h2 className="font-serif text-3xl font-semibold leading-tight text-[#32241B] lg:text-5xl">
            Ravella believes lasting success begins with good health. Through
            our organic supplements, wellness programs, and expert-driven
            resources,{" "}
            <span className="text-[#FF9801]">
              we promote immune strength, vitality, and preventive care.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-xl font-medium leading-relaxed text-muted-foreground">
            From seminars to personalized consultations, Ravella is committed to
            holistic wellness—because when you’re healthier, you’re wealthier.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HealthWellnessSection;
