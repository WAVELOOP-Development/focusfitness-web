"use client";

import { Button } from "@/components/ui/button";
import { Mail, Phone, Globe, Send, Settings, Palette, Zap } from "lucide-react";
import { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import Navbar from "@/components/navbar";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    customizationType: "",
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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
    setFormData({ name: "", email: "", message: "", customizationType: "" });
  };

  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="min-h-screen bg-rich-black text-text-primary mt-20">
        {/* Section 1: Hero Section with Background */}
        <section className="relative py-16 bg-rich-black text-text-primary">
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
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-heading uppercase mb-6">
                Get Your Custom Fitness Solution
              </h1>
              <p className="text-lg text-text-secondary font-body max-w-3xl mx-auto mb-8">
                Focus Fitness is fully customizable to match your gym's unique
                needs and branding. Contact us to discuss how we can tailor this
                solution specifically for your business.
              </p>

              {/* Customization Features */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-[#1A1A1A] p-6 rounded-lg border border-[#2A2A2A]">
                  <div className="p-3 bg-[#F45C65] rounded-full w-fit mx-auto mb-4">
                    <Palette className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-heading uppercase mb-3">
                    Custom Branding
                  </h3>
                  <p className="text-text-secondary font-body text-base">
                    Your logo, colors, and brand identity seamlessly integrated
                    throughout the platform
                  </p>
                </div>

                <div className="bg-[#1A1A1A] p-6 rounded-lg border border-[#2A2A2A]">
                  <div className="p-3 bg-[#F45C65] rounded-full w-fit mx-auto mb-4">
                    <Settings className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-heading uppercase mb-3">
                    Feature Customization
                  </h3>
                  <p className="text-text-secondary font-body text-base">
                    Enable/disable features, custom workflows, and specialized
                    modules for your gym type
                  </p>
                </div>

                <div className="bg-[#1A1A1A] p-6 rounded-lg border border-[#2A2A2A]">
                  <div className="p-3 bg-[#F45C65] rounded-full w-fit mx-auto mb-4">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-heading uppercase mb-3">
                    Integration Ready
                  </h3>
                  <p className="text-text-secondary font-body text-base">
                    Connect with your existing systems, payment gateways, and
                    third-party services
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Contact Information and Form */}
        <section className="py-16 bg-rich-black text-text-primary">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              {/* Contact Form */}
              <div>
                <h2 className="text-4xl sm:text-5xl font-heading uppercase mb-8 text-center">
                  Request Your Custom Solution
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-text-secondary font-body mb-2"
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg text-text-primary font-body focus:outline-none focus:border-[#F45C65] transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-text-secondary font-body mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg text-text-primary font-body focus:outline-none focus:border-[#F45C65] transition-colors"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-text-secondary font-body mb-2"
                    >
                      Tell us about your requirements *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg text-text-primary font-body focus:outline-none focus:border-[#F45C65] transition-colors resize-none"
                      placeholder="Describe your gym type, current systems, specific requirements, and how you'd like Focus Fitness customized for your business..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#F45C65] hover:bg-[#F45C65]/80 text-white py-4 text-lg font-heading uppercase transition-all duration-300"
                  >
                    SUBMIT
                  </Button>
                </form>
              </div>
              {/* Contact Information */}
              <div>
                <h2 className="text-4xl sm:text-5xl font-heading uppercase mb-8 text-center mt-20">
                  Contact Information
                </h2>
                <div className="grid md:grid-cols-2">
                  <div className="space-y-12">
                    <div className="flex items-center">
                      <div className="p-3 bg-[#F45C65] rounded-full mr-4">
                        <Globe className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="text-text-secondary font-body">Website</p>
                        <a
                          href="https://waveloop.dev/"
                          target="_blank"
                          rel="noopener noreferrer"
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
                          href="tel:+94719967276"
                          className="text-white hover:text-[#F45C65]/80 font-body"
                        >
                          (+94) 71 996 7276
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-[#1A1A1A] rounded-lg border border-[#2A2A2A] mt-8 md:mt-0">
                    <Image
                      src="/logo-secondary-T-white.png"
                      alt="Waveloop Logo"
                      width={150}
                      height={150}
                      className="mb-4"
                    />
                    <p className="text-text-secondary font-body leading-relaxed mb-4">
                      Focus Fitness is proudly developed by Waveloop PVT LTD,
                      bringing innovative and customizable technology solutions
                      to Sri Lanka's fitness industry.
                    </p>
                    <p className="text-[#F45C65] font-body text-sm">
                      Every installation is uniquely tailored to your business
                      needs
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
