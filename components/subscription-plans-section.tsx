"use client";

import { Check, Users, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function UserTypesSection() {
  const userTypes = [
    {
      name: "Gym Members",
      icon: Users,
      description:
        "Individual fitness enthusiasts looking to achieve their personal goals",
      features: [
        "Customizable Workout Plans for Weight Loss, Muscle Gain & Overall Fitness",
        "Personalized Meal Recommendations & Nutritional Tracking",
        "Real-Time AI Support and Motivation",
        "QR-Based Attendance Tracking for Seamless Check-ins",
        "Access to Supplement & Equipment Marketplace",
        "Offline Functionality for Uninterrupted Access",
        "Payment Integration for Membership Fees",
        "Community Support & Engagement",
      ],
    },
    {
      name: "Gym Owners",
      icon: Crown,
      description:
        "Fitness business operators seeking to streamline operations and enhance member experience",
      features: [
        "Comprehensive Gym Management Dashboard",
        "Member Tracking & Performance Analysis Tools",
        "Scheduling System for Classes & Appointments",
        "QR-Based Attendance Management System",
        "Integrated Payment Processing for Membership Fees",
        "In-App Marketplace to Sell Supplements & Equipment",
        "Advanced Analytics & Reporting Features",
        "Member Engagement & Retention Tools",
      ],
    },
  ];

  return (
    <section id="user-types" className="py-20 bg-rich-black text-text-primary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl sm:text-5xl font-heading uppercase mb-4">
            Built for Everyone
          </h2>
          <p className="text-lg text-text-secondary font-body max-w-2xl mx-auto">
            Focus Fitness is designed for both individuals and gym operators,
            providing tailored features for each user type.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {userTypes.map((userType, index) => (
            <div
              key={index}
              className="group bg-[#1A1A1A] p-8 rounded-lg shadow-lg border border-[#2A2A2A] hover:border-[#F45C65] transition-all duration-300 animate-on-scroll group-hover-scale"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-center mb-6">
                <div className="p-4 bg-[#F45C65] rounded-full inline-flex items-center justify-center">
                  <userType.icon className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-3xl font-heading uppercase text-center mb-4">
                {userType.name}
              </h3>
              <p className="text-center mb-6 text-text-secondary font-body">
                {userType.description}
              </p>
              <ul className="space-y-3 mb-8">
                {userType.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-start text-text-secondary font-body"
                  >
                    <Check className="h-5 w-5 text-[#F45C65] mr-3 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
