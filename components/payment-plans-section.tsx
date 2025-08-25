"use client";

import { Check, Star, Crown, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PaymentPlansSection() {
  const plans = [
    {
      name: "Basic Plan",
      subtitle: "Digitize Attendance & Renewals",
      icon: Shield,
      price: {
        monthly: "LKR 4,500",
        yearly: "LKR 48,000",
        monthlyUSD: "≈ $15",
        discount: "10% discount",
      },
      features: [
        "QR Code Attendance System (automatic check-in via web app)",
        "Membership Renewal (online transfer + manual cash update)",
        "Admin Dashboard (basic member & renewal management)",
        "Custom Branding (logo, theme)",
      ],
      benefits:
        "The Basic Plan is perfect if you just want to ditch messy registers and go digital without extra complexity. With QR attendance, easy renewals, and a clean admin dashboard, you'll save time and look more professional at a price every small gym or personal trainer can afford.",
      isPopular: false,
    },
    {
      name: "Standard Plan",
      subtitle: "Engage & Manage Members",
      icon: Star,
      price: {
        monthly: "LKR 9,500",
        yearly: "LKR 100,000",
        monthlyUSD: "≈ $30",
        discount: "12% discount",
      },
      features: [
        "Everything in Basic +",
        "Member Portal (attendance history, membership status, renewal reminders)",
        "Shop Access (supplements/equipment catalog + order form)",
        "Reporting & Analytics (basic attendance & renewal reports)",
        "Custom Branding (logo, theme)",
      ],
      benefits:
        "The Standard Plan helps you go beyond just tracking now you can actively engage members. With a personal portal, renewal reminders, a built-in shop, and useful reports, your gym feels more connected, professional, and profitable without adding admin stress.",
      isPopular: true,
    },
    {
      name: "Premium Plan",
      subtitle: "Full Gym Management Suite",
      icon: Crown,
      price: {
        monthly: "LKR 19,500",
        yearly: "LKR 200,000",
        monthlyUSD: "≈ $60-65",
        discount: "15% discount",
      },
      features: [
        "Everything in Standard +",
        "Local Payment Gateway Integration (FriMi, Genie, eZ Cash, etc.)",
        "Automated Notifications (SMS/WhatsApp/email reminders)",
        "Trainer Module (workout/diet plans, progress tracking)",
        "Advanced Analytics (revenue trends, member retention, class popularity)",
      ],
      benefits:
        "The Premium Plan is a complete gym management suite designed for growth. From seamless local payments to automated reminders, trainer tools, advanced analytics, and multi-branch management, this plan gives you everything to run your gym like a professional fitness brand.",
      isPopular: false,
    },
  ];

  return (
    <section
      id="payment-plans"
      className="py-20 bg-rich-black text-text-primary"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl sm:text-5xl font-heading uppercase mb-4">
            Choose Your Plan
          </h2>
          <p className="text-lg text-text-secondary font-body max-w-3xl mx-auto">
            Select the perfect plan for your gym. Start with our Basic Plan and
            upgrade as you grow. All plans include our core features with
            different levels of advanced functionality.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative group bg-[#1A1A1A] p-8 rounded-lg shadow-lg border transition-all duration-300 animate-on-scroll ${
                plan.isPopular
                  ? "border-[#F45C65] ring-2 ring-[#F45C65]/20 scale-105"
                  : "border-[#2A2A2A] hover:border-[#F45C65]"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#F45C65] text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="flex items-center justify-center mb-6">
                <div
                  className={`p-4 rounded-full inline-flex items-center justify-center ${
                    plan.isPopular
                      ? "bg-[#F45C65]"
                      : "bg-[#2A2A2A] group-hover:bg-[#F45C65]"
                  } transition-colors duration-300`}
                >
                  <plan.icon className="h-8 w-8 text-white" />
                </div>
              </div>

              <div className="text-center mb-6">
                <h3 className="text-2xl font-heading uppercase mb-2">
                  {plan.name}
                </h3>
                <p className="text-text-secondary font-body text-sm mb-4">
                  {plan.subtitle}
                </p>

                <div className="mb-4">
                  <div className="flex items-baseline justify-center gap-2 mb-1">
                    <span className="text-3xl font-bold">
                      {plan.price.monthly}
                    </span>
                    <span className="text-text-secondary">
                      {plan.price.monthlyUSD}
                    </span>
                    <span className="text-text-secondary">/ month</span>
                  </div>
                  <div className="text-sm text-text-secondary">
                    <span className="font-medium">{plan.price.yearly}</span> /
                    year
                    <span className="text-[#F45C65] ml-1">
                      ({plan.price.discount})
                    </span>
                  </div>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-start text-text-secondary font-body text-sm"
                  >
                    <Check className="h-4 w-4 text-[#F45C65] mr-3 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href="/contact-us">
                <Button
                  className={`w-full font-medium transition-all duration-300 ${
                    plan.isPopular
                      ? "bg-[#F45C65] hover:bg-[#F45C65]/90 text-white"
                      : "bg-transparent border border-[#F45C65] text-[#F45C65] hover:bg-[#F45C65] hover:text-white"
                  }`}
                >
                  Get Started
                </Button>
              </Link>
              <Button className="w-full mt-4 bg-[#1A1A1A] text-text-primary  hover:text-[#F45C65] hover:bg-[#1A1A1A]">
                See More Details
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-on-scroll">
          <p className="text-text-secondary font-body mb-4">
            Need a custom solution? Have questions about our plans?
          </p>
          <Link href="/contact-us">
            <Button
              variant="outline"
              className="border-[#F45C65] bg-[#1A1A1A] text-[#F45C65] hover:bg-[#F45C65] hover:text-white"
            >
              Contact Us for Custom Pricing
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
