"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import {
  MapPin,
  Shield,
  Zap,
  SlidersHorizontal,
  Smartphone,
  Lock,
} from "lucide-react";

export default function WhyChooseUsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

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

  const updateCurrentIndex = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const containerRect = container.getBoundingClientRect();
    const containerCenter = containerRect.left + containerRect.width / 2;
    let closestIndex = 0;
    let closestDistance = Infinity;

    cardRefs.current.forEach((card, index) => {
      if (!card) return;

      const cardRect = card.getBoundingClientRect();
      const cardCenter = cardRect.left + cardRect.width / 2;
      const distance = Math.abs(containerCenter - cardCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setCurrentIndex(closestIndex);
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      requestAnimationFrame(updateCurrentIndex);
    };

    container.addEventListener("scroll", handleScroll);
    updateCurrentIndex(); // Initial call

    return () => container.removeEventListener("scroll", handleScroll);
  }, [updateCurrentIndex]);

  const scrollToCard = (index: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const cardWidth = 280; // focused card width
    const gap = 16; // gap between cards
    const containerWidth = container.offsetWidth;

    // For the last few cards, we need to adjust scroll position
    // so they can be properly centered
    const cardWithGap = cardWidth + gap;
    let scrollPosition = index * cardWithGap;

    // For the last cards, adjust scroll position to ensure proper centering
    const maxScroll = container.scrollWidth - containerWidth;
    scrollPosition = Math.min(scrollPosition, maxScroll);

    container.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });
    setCurrentIndex(index);
  };

  return (
    <section
      id="why-choose-us"
      className="py-4 bg-rich-black text-text-primary"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl sm:text-5xl text-white font-heading uppercase mb-4">
            Why Choose Focus Fitness
          </h2>
          <p className="text-lg text-text-secondary font-body max-w-2xl mx-auto">
            We're not just another fitness app. We're the smartest fitness
            ecosystem built for real results.
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-4 pb-4 px-4"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              paddingRight: "calc(50vw - 140px)", // Ensure last cards can be centered
            }}
          >
            {cards.map((card, index) => (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`
                  flex-shrink-0 transition-all duration-300 snap-center h-64
                  ${
                    index === currentIndex
                      ? "w-[280px] scale-100"
                      : "w-[240px] scale-90 opacity-70"
                  }
                `}
              >
                <div className="group bg-[#1A1A1A] p-6 rounded-lg shadow-lg border border-[#2A2A2A] hover:border-[#F45C65] transition-all duration-300 h-full">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-[#F45C65] rounded-full inline-flex items-center justify-center">
                      <card.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg font-heading uppercase text-center mb-3">
                    {card.title}
                  </h3>
                  <p className="text-text-secondary text-center font-body text-sm">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {cards.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToCard(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-[#F45C65] w-8"
                    : "bg-[#4A4A4A] hover:bg-[#6A6A6A]"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
