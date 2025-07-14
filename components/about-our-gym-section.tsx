"use client";

import {
  Handshake,
  Users,
  Heart,
  Target,
  Globe,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

export default function AboutOurGymSection() {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    {
      src: "/focusfitness.png",
      alt: "Focus Fitness app interface on a smartphone",
    },
    {
      src: "/pic2.jpg",
      alt: "Focus Fitness gym management interface",
    },
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="about-us" className="py-20 bg-rich-black text-text-primary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Image Side */}
        <div className="relative animate-on-scroll">
          <div className="relative">
            <img
              src={images[currentImage].src}
              alt={images[currentImage].alt}
              className="w-full h-auto rounded-lg shadow-xl transition-opacity duration-300"
            />

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Image Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentImage
                      ? "bg-[#F45C65]"
                      : "bg-white/50 hover:bg-white/70"
                  }`}
                  aria-label={`View image ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="absolute -bottom-8 -right-8 bg-[#F45C65] p-6 rounded-full text-white text-center font-heading text-2xl sm:text-3xl shadow-lg">
            From <br /> Team <br /> WAVELOOP!
          </div>
        </div>

        {/* Content Side */}
        <div className="animate-on-scroll">
          <h2 className="text-4xl sm:text-5xl font-heading uppercase mb-6">
            About Focus Fitness
          </h2>
          <p className="text-lg text-text-secondary mb-8 font-body">
            Focus Fitness is a comprehensive digital fitness platform tailored
            to the needs of Sri Lankans. Designed for individuals and gym
            operators, it combines personalized workout and diet plans,
            real-time AI support, and advanced gym management tools. With an
            intuitive interface and localized features, Focus Fitness aims to
            bridge gaps in personal fitness tracking and gym operations,
            promoting healthier lifestyles across Sri Lanka.
          </p>
          <div className="space-y-4">
            <div className="flex items-center text-text-primary font-body">
              <Heart className="h-6 w-6 text-[#F45C65] mr-3" />
              <span>Promoting Healthier Lifestyles Across the Nation</span>
            </div>
            <div className="flex items-center text-text-primary font-body">
              <Handshake className="h-6 w-6 text-[#F45C65] mr-3" />
              <span>Connecting Individuals with Fitness Professionals</span>
            </div>
            <div className="flex items-center text-text-primary font-body">
              <Target className="h-6 w-6 text-[#F45C65] mr-3" />
              <span>Empowering Everyone to Achieve Their Fitness Goals</span>
            </div>
            <div className="flex items-center text-text-primary font-body">
              <TrendingUp className="h-6 w-6 text-[#F45C65] mr-3" />
              <span>Transforming How Sri Lanka Approaches Wellness</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
