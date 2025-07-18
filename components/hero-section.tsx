"use client";

import { ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const router = useRouter();

  const navigateToContact = () => {
    router.push("/contact-us");
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-end justify-center text-center overflow-hidden bg-rich-black"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1521804906057-1df8fdb718b7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Fitness app interface on a phone with gym background"
          className="w-full h-full object-cover object-center sm:object-center md:object-top opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-rich-black via-rich-black/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pb-20 animate-on-scroll text-center justify-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading uppercase text-text-primary leading-tight mb-6">
          Transform Your Fitness Journey with "Focus Fitness"
        </h1>
        <p className="text-lg sm:text-xl text-text-secondary mb-5 font-body">
          Sri Lanka's Smartest Fitness App – Personalized Plans, AI Coaching,
          Fully Customizable, and Seamless Gym Management.
        </p>

        {/* Scroll Down Icon */}
        <button
          onClick={navigateToContact}
          className="text-2xl font-heading uppercase mt-10 p-5 rounded-full border-2 border-[#F45C65] transition-all duration-300 hover:bg-[#F45C65] text-white cursor-pointer animate-pulse"
          style={{
            animation: "slowBounce 2s ease-in-out infinite",
          }}
        >
          Start Today!
        </button>
      </div>
    </section>
  );
}
