"use client";

import { useState, useEffect } from "react";
import { Dumbbell, Menu, X } from "lucide-react";
import Link from "next/link";

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
            <Link
              href="/"
              className="nav-link text-white font-bold text-sm uppercase tracking-wide hover:text-[#F45C65] transition-colors "
            >
              HOME
            </Link>

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

          <div className="hidden lg:block">
            <Link
              href="/contact-us"
              className="nav-link text-text-primary font-medium text-sm uppercase tracking-wide hover:text-[#F45C65] transition-colors"
            >
              CONTACT
            </Link>
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
              <Link
                href="/"
                className="nav-link block px-3 py-2 text-white font-bold text-sm uppercase"
              >
                HOME
              </Link>
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
                <Link href="/contact-us" className="nav-link">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
