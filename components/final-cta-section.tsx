"use client";

import { Button } from "@/components/ui/button";
import { Mail, Phone, Globe, Send } from "lucide-react";
import { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";

export default function ContactUsSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="relative py-20 bg-rich-black text-text-primary"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Modern gym equipment and technology"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-rich-black/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl sm:text-5xl font-heading uppercase mb-6">
            Ready to Upgrade Your Fitness?
          </h2>
          <p className="text-lg text-text-secondary font-body max-w-2xl mx-auto">
            Ready to transform your fitness journey or gym operations? Contact
            us today to learn more about Focus Fitness.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-heading uppercase mb-8">
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="p-3 bg-[#F45C65] rounded-full mr-4">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-text-secondary font-body">Website</p>
                  <a
                    href="https://waveloop.dev/"
                    className="text-white hover:text-[#F45C65]/80 font-body"
                  >
                    www.waveloop.dev
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="p-3 bg-[#F45C65] rounded-full mr-4">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-text-secondary font-body">Email</p>
                  <a
                    href="mailto:info@waveloop.dev"
                    className="text-white hover:text-[#F45C65]/80 font-body"
                  >
                    info@waveloop.dev
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="p-3 bg-[#F45C65] rounded-full mr-4">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-text-secondary font-body">Phone</p>
                  <a
                    href="tel:+94771234567"
                    className="text-white hover:text-[#F45C65]/80 font-body"
                  >
                    (+94) 71 996 7276
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-[#1A1A1A] rounded-lg border border-[#2A2A2A]">
              <Image
                src="/logo-secondary-T-white.png"
                alt="Waveloop Logo"
                width={150}
                height={150}
                className="mb-4"
              />
              <p className="text-text-secondary font-body leading-relaxed">
                Focus Fitness is proudly developed by Waveloop PVT LTD, bringing
                innovative technology solutions to Sri Lanka's fitness industry.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-heading uppercase mb-8">
              Send us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-text-secondary font-body mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg text-text-primary font-body focus:outline-none focus:border-neon-green transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-text-secondary font-body mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg text-text-primary font-body focus:outline-none focus:border-neon-green transition-colors"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-text-secondary font-body mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg text-text-primary font-body focus:outline-none focus:border-neon-green transition-colors resize-none"
                  placeholder="Tell us about your fitness goals or gym requirements..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#F45C65] hover:bg-[#F45C65]/80 text-white py-4 text-2xl font-heading uppercase transition-all duration-300 group-hover-scale"
              >
                Send
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
