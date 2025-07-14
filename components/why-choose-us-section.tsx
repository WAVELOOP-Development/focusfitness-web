"use client";

import {
  MapPin,
  Shield,
  Zap,
  Clock,
  Smartphone,
  Handshake,
  Lock,
} from "lucide-react";

export default function WhyChooseUsSection() {
  const cards = [
    {
      icon: MapPin,
      title: "Local Expertise, Global Standards",
      description:
        "Built specifically for Sri Lankans, understanding local dietary preferences, cultural fitness practices, and economic realities. Unlike generic international platforms, we provide culturally relevant meal plans featuring rice and curry, hoppers, and traditional Sri Lankan ingredients while maintaining world-class technical standards.",
    },
    {
      icon: Shield,
      title: "Proven Track Record with Waveloop",
      description:
        "Backed by Waveloop PVT LTD's established technology expertise, Focus Fitness combines innovative development with reliable business practices. Our systematic approach to integration, testing, and deployment ensures a smooth launch and sustained performance.",
    },
    {
      icon: Zap,
      title: "End-to-End Ecosystem",
      description:
        "While other platforms force you to juggle multiple apps, Focus Fitness provides a complete ecosystem where individual users, gym operators, and corporate wellness programs seamlessly connect. This unified approach eliminates data silos and creates a more engaging fitness community.",
    },
    {
      icon: Clock,
      title: "Rapid Implementation",
      description:
        "Our streamlined 2-month integration and testing process means you can start benefiting from Focus Fitness quickly. With comprehensive training and 3 months of free post-launch support, we ensure your transition is smooth and successful.",
    },
    {
      icon: Smartphone,
      title: "Future-Ready Technology",
      description:
        "Built with offline functionality and scalable architecture, Focus Fitness works reliably even in areas with limited connectivity while being ready to grow with your needs. Our platform evolves with emerging fitness trends and technological advances.",
    },
    {
      icon: Lock,
      title: "Data Security You Can Trust",
      description:
        "Full compliance with Sri Lankan data privacy laws, end-to-end encryption, and a commitment to keeping your personal information secure and private. Your data stays yours – we're just here to help you achieve your fitness goals.",
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
              <p className="text-text-secondary text-center mb-6 font-body text-sm">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
