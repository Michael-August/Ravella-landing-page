const JoinTheMovement = () => {
  const steps = [
    {
      number: "01",
      title: "Discover",
      description: "Connect with our ambassadors, ask the right questions, and explore Ravella's proven wealth creation model.",
      position: "left"
    },
    {
      number: "02",
      title: "Register",
      description: "Create your Ravella account, choose a package that matches your goals, and join our fast-growing community.",
      position: "top"
    },
    {
      number: "03",
      title: "Understand",
      description: "Learn the referral system, bonus structures, and earning strategies to maximize your success.",
      position: "bottom"
    },
    {
      number: "04",
      title: "Refer",
      description: "Invite others, grow your network, and earn attractive rewards with weekly withdrawals.",
      position: "right"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center rounded-full bg-ravella-brown/20 px-4 py-1.5 mb-6">
            <span className="text-sm font-sans text-ravella-brown font-medium">Our Process</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground leading-tight">
            Join the Movement in <span className="text-accent">4 Steps</span>
          </h2>
          
          <p className="text-muted-foreground text-base lg:text-lg max-w-2xl mx-auto mt-6">
            Your journey to prosperity starts here. Don't wait—experience how simple, rewarding, and life-changing Ravella can be.
          </p>
        </div>

        {/* Diamond Layout */}
        <div className="max-w-5xl mx-auto">
          <div className="relative h-full">
            {/* SVG for connecting lines and dots */}
           <svg
  className="absolute inset-0 w-full h-full pointer-events-none"
  viewBox="0 0 1000 800"
  preserveAspectRatio="xMidYMid meet"
>
  {/* Connecting lines */}
  <line x1="250" y1="350" x2="500" y2="150" stroke="#cccccc" strokeWidth="2" strokeDasharray="5,5" />
  <line x1="500" y1="150" x2="750" y2="350" stroke="#cccccc" strokeWidth="2" strokeDasharray="5,5" />
  <line x1="750" y1="350" x2="500" y2="650" stroke="#cccccc" strokeWidth="2" strokeDasharray="5,5" />
  <line x1="500" y1="650" x2="250" y2="350" stroke="#cccccc" strokeWidth="2" strokeDasharray="5,5" />

  {/* Decorative dots */}
  <circle cx="375" cy="250" r="8" fill="#cccccc" opacity="0.5" />
  <circle cx="625" cy="250" r="8" fill="#cccccc" opacity="0.5" />
  <circle cx="625" cy="500" r="8" fill="#cccccc" opacity="0.5" />
  <circle cx="375" cy="500" r="8" fill="#cccccc" opacity="0.5" />
</svg>


            {/* Cards Grid - Diamond Layout */}
            <div className="grid grid-cols-3 gap-6 lg:gap-12 relative">
              {/* Empty column */}
              <div></div>
              
              {/* Top Center - Register (02) */}
              <div className="flex justify-center">
                <div className="w-full max-w-xs">
                  <div className="relative bg-white/50 backdrop-blur rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
                    {/* Step Number Circle */}
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-ravella-brown to-primary rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-2xl font-serif font-bold text-white">02</span>
                    </div>

                    {/* Decorative Circles */}
                    <div className="absolute top-6 -left-4 w-8 h-8 bg-gray-300 rounded-full opacity-30"></div>
                    <div className="absolute top-6 -right-4 w-8 h-8 bg-gray-300 rounded-full opacity-30"></div>

                    {/* Content */}
                    <div className="pt-8">
                      <h3 className="text-2xl font-serif font-bold text-foreground mb-4 text-center">
                        Register
                      </h3>
                      <p className="text-muted-foreground text-base leading-relaxed text-center">
                        Create your Ravella account, choose a package that matches your goals, and join our fast-growing community.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Empty column */}
              <div></div>

              {/* Left - Discover (01) */}
              <div className="flex justify-center">
                <div className="w-full max-w-xs">
                  <div className="relative bg-white/50 backdrop-blur rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
                    {/* Step Number Circle */}
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-ravella-brown to-primary rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-2xl font-serif font-bold text-white">01</span>
                    </div>

                    {/* Decorative Circles */}
                    <div className="absolute top-1/2 -left-4 w-8 h-8 bg-gray-300 rounded-full opacity-30"></div>
                    <div className="absolute bottom-6 -right-4 w-8 h-8 bg-gray-300 rounded-full opacity-30"></div>

                    {/* Content */}
                    <div className="pt-8">
                      <h3 className="text-2xl font-serif font-bold text-foreground mb-4 text-center">
                        Discover
                      </h3>
                      <p className="text-muted-foreground text-base leading-relaxed text-center">
                        Connect with our ambassadors, ask the right questions, and explore Ravella's proven wealth creation model.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Center - empty */}
              <div></div>

              {/* Right - Refer (04) */}
              <div className="flex justify-center">
                <div className="w-full max-w-xs">
                  <div className="relative bg-white/50 backdrop-blur rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
                    {/* Step Number Circle */}
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-ravella-brown to-primary rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-2xl font-serif font-bold text-white">04</span>
                    </div>

                    {/* Decorative Circles */}
                    <div className="absolute top-1/2 -right-4 w-8 h-8 bg-gray-300 rounded-full opacity-30"></div>
                    <div className="absolute bottom-6 -left-4 w-8 h-8 bg-gray-300 rounded-full opacity-30"></div>

                    {/* Content */}
                    <div className="pt-8">
                      <h3 className="text-2xl font-serif font-bold text-foreground mb-4 text-center">
                        Refer
                      </h3>
                      <p className="text-muted-foreground text-base leading-relaxed text-center">
                        Invite others, grow your network, and earn attractive rewards with weekly withdrawals.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Empty column */}
              <div></div>

              {/* Bottom Center - Understand (03) */}
              <div className="flex justify-center">
                <div className="w-full max-w-xs">
                  <div className="relative bg-white/50 backdrop-blur rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
                    {/* Step Number Circle */}
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-ravella-brown to-primary rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-2xl font-serif font-bold text-white">03</span>
                    </div>

                    {/* Decorative Circles */}
                    <div className="absolute bottom-6 -left-4 w-8 h-8 bg-gray-300 rounded-full opacity-30"></div>
                    <div className="absolute bottom-6 -right-4 w-8 h-8 bg-gray-300 rounded-full opacity-30"></div>

                    {/* Content */}
                    <div className="pt-8">
                      <h3 className="text-2xl font-serif font-bold text-foreground mb-4 text-center">
                        Understand
                      </h3>
                      <p className="text-muted-foreground text-base leading-relaxed text-center">
                        Learn the referral system, bonus structures, and earning strategies to maximize your success.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Empty column */}
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinTheMovement;
