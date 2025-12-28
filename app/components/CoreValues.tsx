import Image from "next/image";

const CoreValues = () => {
  return (
    <section className="py-10 lg:py-10 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center md:mb-16 mb-8">
          <div className="inline-flex items-center rounded-full  bg-ravella-brown/20 px-4 py-1.5 mb-6">
            <span className="text-[16px] font-semibold text-ravella-brown">
              C-Value
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold font-serif text-[#32241B] leading-tight mb-4">
            Our <span className="text-accent">Core Value</span>
          </h2>

          <p className="text-muted-foreground font-semibold text-base lg:text-lg max-w-2xl mx-auto">
            Your journey to prosperity starts here. Don’t wait—experience how
            simple, rewarding, and life-changing Ravella can be.
          </p>
        </div>

        {/* Values Diagram */}
        <div className="relative max-w-6xl mx-auto">
          <div className="relative w-full aspect-[20/6] overflow-hidden">
            <Image
              src="/core-value.png"
              alt="Ravella Core Values"
              fill
              priority
              //   sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
