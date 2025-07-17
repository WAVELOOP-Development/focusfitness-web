"use client";

import {
  Dumbbell,
  Instagram,
  Facebook,
  Linkedin,
  Github,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-rich-black pt-20 pb-5 px-6 lg:px-8 border-t border-[#2A2A2A] text-text-primary">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-[#F45C65] rounded-xl flex items-center justify-center">
                <Dumbbell className="h-7 w-7 text-rich-black" />
              </div>
              <span className="text-2xl font-heading tracking-tight uppercase">
                Focus Fitness
              </span>
            </div>
            <p className="text-text-secondary mb-8 max-w-md text-lg font-body">
              Your ultimate digital fitness ecosystem for Sri Lanka. Built by
              Waveloop Pvt Ltd.
            </p>
            <div className="text-center lg:text-left">
              <h3 className="text-2xl sm:text-2xl mb-4">
                Wanna Stay Connected?
              </h3>
              <div className="flex space-x-4 justify-center lg:justify-start">
                <Link
                  href="https://www.instagram.com/waveloop.dev/"
                  className="text-gray-400 hover:text-white transition-colors p-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram size={20} />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/waveloop-dev/"
                  className="text-gray-400 hover:text-white transition-colors p-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={20} />
                </Link>
                <Link
                  href="https://github.com/WAVELOOP-Development"
                  className="text-gray-400 hover:text-white transition-colors p-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={20} />
                </Link>
                <Link
                  href="https://www.facebook.com/people/Wave-Loop/61575550298347/"
                  className="text-gray-400 hover:text-white transition-colors p-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook size={20} />
                </Link>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-heading uppercase mb-6">Quick Links</h3>
            <ul className="space-y-3 font-body">
              <li>
                <a
                  href="#about-us"
                  className="text-text-secondary hover:text-text-primary transition-colors duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#core-features"
                  className="text-text-secondary hover:text-text-primary transition-colors duration-300"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#why-choose-us"
                  className="text-text-secondary hover:text-text-primary transition-colors duration-300"
                >
                  Why Focus Fitness?
                </a>
              </li>
              <li>
                <a
                  href="#app-screens"
                  className="text-text-secondary hover:text-text-primary transition-colors duration-300"
                >
                  Screens
                </a>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="nav-link text-text-secondary hover:text-text-primary transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-heading uppercase mb-6">
              Contact Info
            </h3>
            <div className="space-y-4 font-body" id="contact">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-[#F45C65] mr-3" />
                <span className="text-text-secondary">info@waveloop.dev</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-[#F45C65] mr-3" />
                <span className="text-text-secondary"> (+94) 71 996 7276</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-[#F45C65] mr-3" />
                <span className="text-text-secondary">Colombo, Sri Lanka</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#2A2A2A] mt-16 pt-8 text-center">
          <p className="text-text-secondary font-body">
            © 2025 Focus Fitness by Waveloop Pvt Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
