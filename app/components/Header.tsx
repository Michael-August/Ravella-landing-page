"use client";

import { useState, useEffect } from "react";
import { Menu, X, Play } from "lucide-react";
import { Button } from "@/app/components/ui/button";

const HEADER_HEIGHT = 88; // increased from 64

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Track scroll state
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
    { name: "Compensation Plan", href: "/compensation-plan" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm"
          : "bg-background"
          }`}
        style={{ height: HEADER_HEIGHT }}
      >
        <div className="h-full flex items-center justify-between px-4 sm:px-6 lg:px-10 xl:px-24">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <img
              src="/ravella-logo.png"
              alt="Ravella"
              className="h-12 w-auto rounded-lg"
            />
            <span className="text-xl font-bold text-[#3A241D]">
              Ravella
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="xl:text-[17px] lg:text-[15px] text-[13px] font-medium text-foreground hover:text-[#5A2D1B] transition"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex">
            <Button className="bg-[#653424] xl:text-[17px] lg:text-[15px] text-[13px] text-white rounded-xl px-6 gap-2">
              Login / Back Office
              <Play className="h-4 w-4 text-gray-200 fill-current" />
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((v) => !v)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-x-0 z-40 lg:hidden transition-opacity duration-300 ${isMobileMenuOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
          }`}
        style={{
          top: HEADER_HEIGHT,
          height: `calc(100dvh - ${HEADER_HEIGHT}px)`,
        }}
      >
        <nav className="h-full bg-background flex flex-col items-center gap-6 pt-10 px-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-semibold text-foreground hover:text-[#5A2D1B]"
            >
              {link.name}
            </a>
          ))}

          <Button className="mt-6 w-full max-w-xs bg-[#5A2D1B] text-white rounded-2xl gap-2">
            Login / Back Office
            <Play className="h-4 w-4 text-gray-400 fill-current" />
          </Button>
        </nav>
      </div>

      {/* Spacer */}
      <div style={{ height: HEADER_HEIGHT }} />
    </>
  );
};

export default Header;
