"use client";

import { useEffect } from "react";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import WhyChooseUsSection from "@/components/why-choose-us-section";
import AboutOurGymSection from "@/components/about-our-gym-section";
import CoreFeaturesSection from "@/components/core-features-section";
import SubscriptionPlansSection from "@/components/subscription-plans-section";
import TechnologySecuritySection from "@/components/quote-section"; // Renamed
import FinalCTASection from "@/components/final-cta-section";
import Footer from "@/components/footer";
import VisualDemoSection from "@/components/visual-demo-section";
import QuoteSection from "@/components/quote-section";

export default function Index() {
  useEffect(() => {
    // Intersection Observer for animate-on-scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  useEffect(() => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault();

        const targetId = anchor.getAttribute("href")?.substring(1);
        if (!targetId) return;

        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;

        // Adjust offset for fixed navbar height
        const offset = window.innerWidth < 768 ? 80 : 80; // Assuming navbar height is around 80px

        window.scrollTo({
          top: targetElement.offsetTop - offset,
          behavior: "smooth",
        });
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-rich-black text-text-primary overflow-x-hidden">
      <Navbar />
      <main className="space-y-10">
        <HeroSection />
        <AboutOurGymSection />
        <CoreFeaturesSection />
        <WhyChooseUsSection />
        <QuoteSection />
        <VisualDemoSection />
        <SubscriptionPlansSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
