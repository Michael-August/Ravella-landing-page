import { 
  Brain, 
  Trophy, 
  Wallet, 
  Share2, 
  DollarSign, 
  Users 
} from 'lucide-react';

const WhyRavella = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Smart Placement",
      description: "Intelligent algorithms analyze and optimize your network for maximum growth.",
      iconColor: "text-ravella-brown",
      bgColor: "bg-ravella-brown/20"
    },
    {
      icon: Trophy,
      title: "Gamified Dashboard",
      description: "Track earnings, missions, and achievements in an engaging, game-like experience.",
      iconColor: "text-ravella-brown",
      bgColor: "bg-ravella-brown/20"
    },
    {
      icon: Wallet,
      title: "Web3 Wallet & Tokens",
      description: "Own your rewards with blockchain-secured tokens and digital assets.",
      iconColor: "text-ravella-brown",
      bgColor: "bg-ravella-brown/20"
    },
    {
      icon: Share2,
      title: "SocialFi Income",
      description: "Earn through social engagement, content creation, and community building.",
     iconColor: "text-ravella-brown",
      bgColor: "bg-ravella-brown/20"
    },
    {
      icon: DollarSign,
      title: "Flexible Withdrawals",
      description: "Choose bank transfer, crypto, or $RAV tokens — your earnings, your way.",
     iconColor: "text-ravella-brown",
      bgColor: "bg-ravella-brown/20"
    },
    {
      icon: Users,
      title: "Community-Owned Value",
      description: "The people who build the value finally own the value. Together.",
      iconColor: "text-ravella-brown",
      bgColor: "bg-ravella-brown/20"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-ravella-brown/10 rounded-[70px]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full bg-ravella-brown/20 px-4 py-1.5 mb-6 shadow-sm">
            <span className="text-[17px] font-sans text-ravella-brown font-medium">Why Choose Us</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold font-serif text-[#32241B] leading-tight mb-6">
            Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Ravella?</span>
          </h2>
          
          <p className="text-muted-foreground text-lg lg:text-xl leading-relaxed">
            Because the world wants more than another MLM. They want freedom, predictability, technology, and real ownership. 
            This is MLM re-imagined, rebuilt for the next generation.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-white p-8 border rounded-xl border-gray-100"
            >
              {/* Icon Container */}
              <div className={`${feature.bgColor} w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
              </div>
              
              {/* Content */}
              <h3 className="text-2xl font-normal text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {feature.description}
              </p>
              
              {/* Decorative Line */}
              {/* <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent group-hover:via-accent transition-all duration-300"></div> */}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        {/* <div className="text-center mt-20">
          <button className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-primary to-accent rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            <Wallet className="w-5 h-5 mr-2" />
            Get Started Free
          </button>
          <p className="text-gray-500 mt-4 text-sm">
            No credit card required • Join 50,000+ members
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default WhyRavella;