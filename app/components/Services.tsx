import Image from "next/image";

const Services = () => {
  const services = [
    {
      title: "Health",
      description: "Ravella believes lasting success begins with good health. Through our organic supplements, wellness programs, and expert-driven resources, we promote immune strength, vitality, and preventive care.",
      badge: null,
      highlighted: true
    },
    {
      title: "Real Estate",
      badge: "Coming soon"
    },
    {
      title: "Technology",
      badge: "Coming soon"
    },
    {
      title: "Agriculture",
      badge: "Coming soon"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-ravella-brown/5">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="inline-flex items-center rounded-full bg-ravella-brown/20 px-4 py-1.5 mb-6">
            <span className="text-sm font-sans text-ravella-brown font-medium">Four Focal Area</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground leading-tight mb-6">
            Our <span className="text-accent">Services</span>
          </h2>
          
          <p className="text-muted-foreground text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
            Be it Health and Wellness or Real Estate, Ravella offers distinct services designed to help you grow, thrive, and achieve true freedom—both physically and financially.
          </p>
        </div>

        {/* Services Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Services List */}
          <div className="space-y-8">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className={`pb-6 border-b border-gray-200 ${index === services.length - 1 ? "border-b-0" : ""}`}>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className={`text-2xl md:text-3xl font-serif font-bold mb-3 ${
                        service.highlighted 
                          ? "text-foreground" 
                          : "text-foreground"
                      }`}>
                        {service.title}
                        {index === 0 && <span className="text-accent"> and Wellness</span>}
                      </h3>
                      
                      {service.description && (
                        <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
                          {service.description}
                        </p>
                      )}
                    </div>

                    {service.badge && (
                      <div className="flex-shrink-0 ml-2">
                        <span className="inline-flex items-center rounded-full bg-accent/20 px-3 py-1 text-sm font-medium text-accent whitespace-nowrap">
                          {service.badge}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right - Service Image */}
          <div className="relative">
            <div className="relative h-96 lg:h-full min-h-96 rounded-3xl overflow-hidden shadow-lg bg-gradient-to-br from-gray-900 to-gray-800">
              {/* Placeholder with fallback */}
              <div className="w-full h-full relative">
                <Image
                  src="/placeholder-service.jpg"
                  alt="Health and Wellness Product"
                  fill
                  className="object-cover"
                  priority
                />
                
                {/* Fallback content if image doesn't load */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-gray-800/80 flex items-center justify-center">
                  <div className="text-center px-6">
                    <div className="text-6xl mb-4">💊</div>
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">
                      Health &amp; Wellness
                    </h3>
                    <p className="text-gray-300 text-lg">
                      Premium organic supplements and wellness solutions
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative corner shapes */}
              <div className="absolute top-6 left-6 w-16 h-16 bg-white/10 rounded-lg backdrop-blur-sm"></div>
              <div className="absolute top-6 right-6 w-12 h-12 bg-white/10 rounded-lg backdrop-blur-sm"></div>
              <div className="absolute bottom-6 left-6 w-12 h-12 bg-white/10 rounded-lg backdrop-blur-sm"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
