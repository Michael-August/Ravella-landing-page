import {
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  MapPin,
  Youtube,
} from "lucide-react";

const FOOTER_LINKS = {
  quickLinks: [
    { label: "About", href: "#" },
    { label: "Services", href: "#" },
    { label: "Products", href: "#" },
    { label: "Our Compensation Plan", href: "#" },
  ],
  legal: [
    { label: "Terms and Conditions", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ],
};

const SOCIAL_LINKS = [
  { Icon: Facebook, label: "Facebook", href: "#" },
  { Icon: Twitter, label: "Twitter", href: "#" },
  { Icon: Instagram, label: "Instagram", href: "#" },
  { Icon: Linkedin, label: "LinkedIn", href: "#" },
  { Icon: Youtube, label: "YouTube", href: "#" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#32241B] text-white px-4 sm:px-6 py-8 lg:px-12 xl:px-16 lg:py-12 rounded-[40px] sm:rounded-[50px] lg:rounded-[70px] my-4 sm:my-5">
      <div className="max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 mb-8 sm:mb-10 lg:mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-4">
              <img
                src="/ravella-logo.png"
                alt="Ravella"
                className="h-8 sm:h-10 w-auto rounded-md"
              />
              <span className="text-lg sm:text-xl font-bold">Ravella</span>
            </a>

            <p className="text-[#FAF8F5CC] text-sm sm:text-base lg:text-[17px] leading-relaxed mb-4 sm:mb-6 tracking-wide max-w-sm">
              Ravella is Beyond Experience... It Is The Future of Network
              Marketing
            </p>

            <div className="flex gap-2 sm:gap-3">
              {SOCIAL_LINKS.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#FAF8F51A] hover:bg-[#FF9801] flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-3 sm:mb-4 text-[#FAF8F5] tracking-wider">Quick Links</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {FOOTER_LINKS.quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-[#FAF8F5CC] hover:text-white text-sm sm:text-base lg:text-lg tracking-wide font-normal transition-colors inline-block"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-3 sm:mb-4 text-[#FAF8F5] tracking-wider">Customer Service</h3>
            <div className="space-y-3 sm:space-y-4">
              <div>
                <p className="text-[#FAF8F5CC] text-sm sm:text-base lg:text-lg tracking-wide font-normal mb-1">Service Hours:</p>
                <p className="text-[#FAF8F5CC] text-sm sm:text-base lg:text-lg tracking-wide font-normal">Mon - Fri, 8AM to 5PM</p>
              </div>

              <div>
                <p className="text-[#FAF8F5CC] text-sm sm:text-base lg:text-lg tracking-wide font-normal mb-1">Email Address:</p>
                {[
                  "hello@ravellaultrasolution.com",
                  "support@ravellaultrasolution.com",
                ].map((email) => (
                  <a
                    key={email}
                    href={`mailto:${email}`}
                    className="block text-[#FAF8F5CC] hover:text-white text-xs sm:text-sm lg:text-base tracking-wide font-normal transition-colors break-all"
                  >
                    {email}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-3 sm:mb-4 text-[#FAF8F5] tracking-wider">Legal</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {FOOTER_LINKS.legal.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-[#FAF8F5CC] hover:text-white text-sm sm:text-base lg:text-lg tracking-wide font-normal transition-colors inline-block"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Address */}
        <div className="border-t border-[#FAF8F51A] pt-6 sm:pt-8 mb-6 sm:mb-8">
          <div className="flex items-start gap-2 sm:gap-3 text-[#FAF8F5CC] text-sm sm:text-base lg:text-lg tracking-wide font-normal">
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5 sm:mt-1 text-[#FF9801]" />
            <p className="leading-relaxed">
              No 21 Church Street, ITS Plaza off Ikwelle Street, Igbosan Road,
              Opebi, Ikeja, Lagos, Nigeria.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#FAF8F51A] pt-4 sm:pt-6">
          <p className="text-[#FAF8F5CC] text-xs sm:text-sm lg:text-base tracking-wide font-normal text-center sm:text-left">
            © {currentYear} Ravella Ultra Solution Ltd. All Rights Reserved.
          </p>
        </div>

        {/* Bottom Logo */}
        <img src="/Ravella.png" alt="Ravella logo" className="mx-auto mt-4 sm:mt-6 h-16 sm:h-32 lg:h-auto w-auto" />
      </div>
    </footer>
  );
};

export default Footer;
