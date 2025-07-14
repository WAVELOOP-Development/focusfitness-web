"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const demoScreens = [
  {
    title: "Home Dashboard",
    description:
      "Your personalized fitness hub with quick access to workouts, nutrition, and progress tracking.",
    image: "/Home.jpg",
    color: "from-[#F45C65] to-[#F45C65]/10",
  },
  {
    title: "Workout Library",
    description:
      "Explore a vast collection of workouts tailored to your fitness goals.",
    image: "/Workout.jpg",
    color: "from-[#F45C65] to-[#F45C65]/10",
  },
  {
    title: "Gym Admin Dashboard",
    description:
      "Comprehensive analytics and member management for gym owners.",
    image: "/Admin home.jpg",
    color: "from-[#F45C65] to-[#F45C65]/10",
  },
  {
    title: "Diet Manager",
    description:
      "Personalized meal plans and calorie tracking for optimal nutrition.",
    image: "/Diet plan.jpg",
    color: "from-[#F45C65] to-[#F45C65]/10",
  },
];

export default function VisualDemoSection() {
  const [currentScreen, setCurrentScreen] = useState(0); // Start with the first screen
  const nextScreen = () => {
    setCurrentScreen((prev) => (prev + 1) % demoScreens.length);
  };
  const prevScreen = () => {
    setCurrentScreen(
      (prev) => (prev - 1 + demoScreens.length) % demoScreens.length
    );
  };
  const getScreenIndex = (offset: number) => {
    return (currentScreen + offset + demoScreens.length) % demoScreens.length;
  };

  return (
    <section
      id="app-screens"
      className="py-24 bg-gradient-to-br from-rich-black to-black relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-5xl md:text-6xl font-heading uppercase text-text-primary mb-6">
            Explore the{" "}
            <span className="text-[#F45C65]">Focus Fitness App</span>{" "}
            {/* Updated color */}
          </h2>
          <p className="text-xl text-text-secondary font-body max-w-3xl mx-auto">
            A quick look at what you can do inside Sri Lanka's smartest fitness
            application.
          </p>
        </div>
        {/* Mobile mockup carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation buttons */}
          <Button
            variant="ghost"
            size="icon"
            onClick={prevScreen}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-rich-black/50 backdrop-blur-sm border border-gray-700 hover:border-[#F45C65] transition-colors" /* Updated color */
          >
            <ChevronLeft className="w-6 h-6 text-text-primary" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={nextScreen}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-rich-black/50 backdrop-blur-sm border border-gray-700 hover:border-[#F45C65] transition-colors" /* Updated color */
          >
            <ChevronRight className="w-6 h-6 text-text-primary" />
          </Button>
          {/* Phone mockups */}
          <div className="flex justify-center items-center space-x-8 lg:space-x-12 h-[600px]">
            {/* Left phone (previous) */}
            <div className="hidden lg:block relative transform scale-75 opacity-50 transition-all duration-500">
              <div className="relative">
                <div className="w-[280px] h-[560px] bg-black rounded-[3rem] p-4 shadow-2xl border-4 border-gray-800">
                  <div className="w-full h-full bg-gray-900 rounded-[2rem] overflow-hidden relative">
                    <img
                      src={
                        demoScreens[getScreenIndex(-1)].image ||
                        "/placeholder.svg"
                      }
                      alt={demoScreens[getScreenIndex(-1)].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                  </div>
                </div>
              </div>
            </div>
            {/* Center phone (current) */}
            <div className="relative transform scale-100 transition-all duration-500">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${demoScreens[currentScreen].color} rounded-[3rem] blur-2xl scale-110 opacity-30`}
              />
              <div className="relative">
                <div className="w-[300px] h-[600px] bg-black rounded-[3rem] p-4 shadow-2xl border-4 border-gray-700">
                  <div className="w-full h-full bg-gray-900 rounded-[2rem] overflow-hidden relative">
                    <img
                      src={
                        demoScreens[currentScreen].image || "/placeholder.svg"
                      }
                      alt={demoScreens[currentScreen].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                </div>
              </div>
            </div>
            {/* Right phone (next) */}
            <div className="hidden lg:block relative transform scale-75 opacity-50 transition-all duration-500">
              <div className="relative">
                <div className="w-[280px] h-[560px] bg-black rounded-[3rem] p-4 shadow-2xl border-4 border-gray-800">
                  <div className="w-full h-full bg-gray-900 rounded-[2rem] overflow-hidden relative">
                    <img
                      src={
                        demoScreens[getScreenIndex(1)].image ||
                        "/placeholder.svg"
                      }
                      alt={demoScreens[getScreenIndex(1)].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Screen info */}
          <div className="text-center mt-12">
            <h3 className="text-3xl font-heading uppercase text-text-primary mb-4">
              {demoScreens[currentScreen].title}
            </h3>
            <p className="text-xl text-text-secondary font-body max-w-2xl mx-auto">
              {demoScreens[currentScreen].description}
            </p>
          </div>
          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {demoScreens.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentScreen(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentScreen
                    ? "bg-[#F45C65] scale-125"
                    : "bg-gray-600 hover:bg-gray-500"
                }`} /* Updated color */
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
