import { Button } from "@/app/components/ui/button";
import { ChevronRight, Play } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center rounded-full border border-border px-4 py-1.5 mb-6 bg-ravella-brown/20">
              <span className="text-[16px] font-semibold text-ravella-brown">
                About us
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#32241B] leading-tight mb-6">
              Building Better Lives
              <br />
              Through <span className="text-accent">Wellness And</span>
              <br />
              <span className="text-accent">Opportunity</span>
            </h2>

            <p className="text-muted-foreground font-semibold text-base lg:text-lg leading-relaxed mb-8 max-w-md">
              Ravella Ultra Solution Limited is more than a health and wellness
              brand— it's a movement for better living and smarter earning. We
              combine natural, high-quality products with a transparent business
              model that empowers individuals to achieve wellness, financial
              freedom, and lasting success.
            </p>

            <Button variant="brown" size="lg" className="gap-2 rounded-lg">
              Find Out More
              <Play className="h-4 w-4 fill-current text-gray-400/70" />
            </Button>
          </div>

          {/* Right Image */}
          <div className="relative">
            {/* Decorative squares */}
            {/* <div className="absolute -top-0 -left-0 flex flex-col gap-3 z-10">
              <div className="w-6 h-6 border-2 border-muted-foreground/30 rounded-sm bg-white"></div>
              <div className="w-6 h-6 border-2 border-muted-foreground/30 rounded-sm"></div>
              <div className="w-6 h-6 border-2 border-muted-foreground/30 rounded-sm bg-white"></div>
            </div> */}

            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="/green-smoke.png"
                alt="Woman with natural wellness elements"
                // className="w-full aspect-[6/5] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
