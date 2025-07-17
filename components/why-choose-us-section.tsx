"use client";

import {
  MapPin,
  Shield,
  Zap,
  SlidersHorizontal,
  Smartphone,
  Lock,
} from "lucide-react";

export default function WhyChooseUsSection() {
  const cards = [
    {
      icon: MapPin,
      title: "Local Expertise, Global Standards",
      description:
        "Made for Sri Lankans with meal plans and fitness tips that match your lifestyle, backed by strong global tech.",
    },
    {
      icon: SlidersHorizontal,
      title: "Fully Customizable",
      description:
        "The platform is fully customizable to suit your gym's unique needs and branding.",
    },
    {
      icon: Shield,
      title: "Backed by Waveloop",
      description:
        "Created by a trusted tech company to make sure everything runs smoothly and reliably.",
    },
    {
      icon: Zap,
      title: "All-in-One Platform",
      description:
        "Everything you need in one app, no switching between different tools or systems.",
    },
    {
      icon: Smartphone,
      title: "Works Anywhere",
      description:
        "Even works without internet and can grow as your needs grow.",
    },
    {
      icon: Lock,
      title: "Safe and Secure",
      description:
        "Your data stays private, protected, and follows all Sri Lankan privacy rules.",
    },
  ];

  return (
    <section
      id="why-choose-us"
      className="py-20 bg-rich-black text-text-primary"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl sm:text-5xl font-heading uppercase mb-4">
            Why Choose Focus Fitness
          </h2>
          <p className="text-lg text-text-secondary font-body max-w-2xl mx-auto">
            We're not just another fitness app. We're the smartest fitness
            ecosystem built for real results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group bg-[#1A1A1A] p-8 rounded-lg shadow-lg border border-[#2A2A2A] hover:border-[#F45C65] transition-all duration-300 animate-on-scroll group-hover-scale"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-[#F45C65] rounded-full inline-flex items-center justify-center">
                  <card.icon className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-heading uppercase text-center mb-4">
                {card.title}
              </h3>
              <p className="text-text-secondary text-center mb-6 font-body text-base">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
