"use client";

import { useState, useEffect } from "react";
import { Dumbbell, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsNavVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsNavVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 bg-rich-black/95 backdrop-blur-xl transition-transform duration-300 ease-in-out ${
        isNavVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-[#F45C65] rounded-lg flex items-center justify-center">
              <Dumbbell className="h-6 w-6 text-rich-black" />
            </div>
            <span className="text-2xl font-heading tracking-tight uppercase text-text-primary">
              Focus Fitness
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a
              href="#home"
              className="text-[#F45C65] font-bold text-sm uppercase tracking-wide hover:text-[#F45C65] transition-colors"
            >
              HOME
            </a>

            <a
              href="#about-us"
              className="text-text-primary font-medium text-sm uppercase tracking-wide hover:text-[#F45C65] transition-colors"
            >
              ABOUT
            </a>
            <a
              href="#core-features"
              className="text-text-primary font-medium text-sm uppercase tracking-wide hover:text-[#F45C65] transition-colors"
            >
              FEATURES
            </a>

            <a
              href="#app-screens"
              className="text-text-primary font-medium text-sm uppercase tracking-wide hover:text-[#F45C65] transition-colors"
            >
              SCREENS
            </a>
          </div>

          {/* Get Started Button */}
          <div className="hidden lg:block">
            <Button
              className="bg-[#F45C65] hover:bg-[#F45C65]/80 hover:text-white text-rich-black font-bold px-6 py-3 text-sm uppercase tracking-wide transition-all duration-300 group-hover-scale"
              onClick={() => {
                const section = document.getElementById("contact");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              CONTACT US →
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-rich-black border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#home"
                className="block px-3 py-2 text-[#F45C65] font-bold text-sm uppercase"
              >
                HOME
              </a>

              <a
                href="#about-us"
                className="block px-3 py-2 text-text-primary font-medium text-sm uppercase hover:text-[#F45C65]"
              >
                ABOUT
              </a>
              <a
                href="#core-features"
                className="block px-3 py-2 text-text-primary font-medium text-sm uppercase hover:text-[#F45C65]"
              >
                FEATURES
              </a>

              <a
                href="#app-screens"
                className="block px-3 py-2 text-text-primary font-medium text-sm uppercase hover:text-[#F45C65]"
              >
                SCREENS
              </a>

              <div className="px-3 py-2">
                <Button
                  className="w-full bg-[#F45C65] hover:bg-[#F45C65]/80 text-rich-black font-bold py-3 text-sm uppercase group-hover-scale"
                  onClick={() => {
                    const section = document.getElementById("contact");
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  CONTACT US →
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
