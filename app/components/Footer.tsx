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
    <footer className="bg-[#32241B] text-white px-6 py-10 lg:px-16 lg:py-12 rounded-[70px] my-5">
      <div className="max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="/" className="flex items-center gap-2">
              <img
                src="/ravella-logo.png"
                alt="Ravella"
                className="h-10 w-auto rounded-md"
              />
              <span className="text-xl font-bold">Ravella</span>
            </a>

            <p className="text-[#FAF8F5CC] text-[17px] leading-relaxed py-4 tracking-wide">
              Ravella is Beyond Experience... It Is The Future of Network
              Marketing
            </p>

            <div className="flex gap-3">
              {SOCIAL_LINKS.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-[#FAF8F51A] hover:bg-[#32241B] flex items-center justify-center transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#FAF8F5] tracking-wider">Quick Links</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-[#FAF8F5CC] hover:text-white text-lg tracking-wide font-normal transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#FAF8F5] tracking-wider">Customer Service</h3>
            <div className="space-y-3 text-sm text-amber-100">
              <div>
                <p className="text-[#FAF8F5CC] hover:text-white text-lg tracking-wide font-normal transition-colors mb-1">Service Hours:</p>
                <p className="text-[#FAF8F5CC] hover:text-white text-lg tracking-wide font-normal transition-colors">Mon - Fri, 8AM to 5PM</p>
              </div>

              <div>
                <p className="text-[#FAF8F5CC] hover:text-white text-lg tracking-wide font-normal transition-colorsmb-1">Email Address:</p>
                {[
                  "hello@ravellaultrasolution.com",
                  "support@ravellaultrasolution.com",
                ].map((email) => (
                  <a
                    key={email}
                    href={`mailto:${email}`}
                    className="block text-[#FAF8F5CC] hover:text-white text-lg tracking-wide font-normal transition-colors"
                  >
                    {email}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#FAF8F5] tracking-wider">Legal</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.legal.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-[#FAF8F5CC] hover:text-white text-lg tracking-wide font-normal transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Address */}
        <div className="border-t border-[#FAF8F51A] pt-8 mb-8">
          <div className="flex items-start gap-2 text-[#FAF8F5CC] text-lg tracking-wide font-normal transition-colors">
            <MapPin className="w-5 h-5 flex-shrink-0 mt-1 text-[#FF9801]" />
            <p>
              No 21 Church Street, ITS Plaza off Ikwelle Street, Igbosan Road,
              Opebi, Ikeja, Lagos, Nigeria.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#FAF8F51A] pt-6">
          <p className="text-[#FAF8F5CC] text-lg tracking-wide font-normal transition-colors">
            © {currentYear} Ravella Ultra Solution Ltd. All Rights Reserved.
          </p>
        </div>

        {/* Bottom Logo */}
        <img src="/Ravella.png" alt="Ravella logo" className="mx-auto mt-6" />
      </div>
    </footer>
  );
};

export default Footer;
