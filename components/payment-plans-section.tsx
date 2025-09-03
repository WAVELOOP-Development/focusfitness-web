"use client";

import { Check, Star, Crown, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { Dialog } from "@headlessui/react"; // Ensure you have @headlessui/react installed

type PlanType = {
  name: string;
  subtitle: string;
  icon: any;
  price: {
    monthly: string;
    yearly: string;
    discount: string;
  };
  features: string[];
  benefits: string;
  isPopular: boolean;
};

export default function PaymentPlansSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<PlanType | null>(null);

  const openModal = (plan: PlanType) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPlan(null);
  };

  const plans = [
    {
      name: "Basic Plan",
      subtitle: "Digitize & Streamline",
      icon: Shield,
      price: {
        monthly: "LKR 6,500",
        yearly: "LKR 69,500",
        // monthlyUSD: "≈ $15",
        discount: "12% discount",
      },
      features: [
        "QR Code Attendance System (automatic check-in via web app)",
        "FocusFitness User Portal (Shop, Exercise Bank, Diet Plans, etc.)",
        "Membership Renewal (online transfer + manual cash update)",
        "Admin Dashboard (basic member & renewal management)",
        "Custom Branding (logo, theme)",
      ],
      benefits:
        "Go paperless with QR attendance, save time, and look professional. Members can access their own portal for attendance, membership status, and renewal reminders. Affordable and perfect for small gyms or personal trainers.",
      isPopular: false,
    },
    {
      name: "Standard Plan",
      subtitle: "Engage, Manage and Grow",
      icon: Star,
      price: {
        monthly: "LKR 12,500",
        yearly: "LKR 129,000",
        // monthlyUSD: "≈ $30",
        discount: "14% discount",
      },
      features: [
        "Everything in Basic +",
        "Member Portal (attendance history, membership status, renewal reminders)",
        "Shop Access (supplements/equipment catalog + order form)",
        "Reporting & Analytics (basic attendance & renewal reports)",
      ],
      benefits:
        "Empower your members with a portal, earn more with a shop, and make smarter decisions with reports. Engage members and improve loyalty while growing your business.",
      isPopular: true,
    },
    {
      name: "Premium Plan",
      subtitle: "Automate & Scale",
      icon: Crown,
      price: {
        monthly: "LKR 24,000",
        yearly: "LKR 244,800",
        // monthlyUSD: "≈ $60-65",
        discount: "15% discount",
      },
      features: [
        "Everything in Standard +",
        "Local Payment Gateway Integration (FriMi, Genie, eZ Cash, etc.)",
        "Automated Notifications (SMS/WhatsApp/email reminders)",
        "Trainer Module (workout/diet plans, progress tracking)",
        "Advanced Analytics (revenue trends, member retention, class popularity)",
        "Multi-Branch Management (for franchises/gym chains)",
      ],
      benefits:
        "Automate payments, communication, and training with advanced tools. Manage multiple locations and grow with confidence using detailed analytics. Perfect for scaling your gym into a professional fitness brand.",
      isPopular: false,
    },
  ];

  return (
    <>
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
              Select the perfect plan for your gym. Start with our Basic Plan
              and upgrade as you grow. All plans include our core features with
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

                      <span className="text-text-secondary">/ per month</span>
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
                <Button
                  className="w-full mt-4 bg-[#1A1A1A] text-text-primary hover:text-[#F45C65] hover:bg-[#1A1A1A]"
                  onClick={() => openModal(plan)}
                >
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

      {/* Modal */}
      {isModalOpen && selectedPlan && (
        <Dialog
          open={isModalOpen}
          onClose={closeModal}
          className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/30"
        >
          <div className="bg-[#1A1A1A] rounded-lg max-w-4xl w-full p-6 m-8 overflow-y-auto max-h-[90vh] shadow-2xl border border-[#F45C65] scrollbar-hide">
            <div className="flex justify-between items-center mb-6">
              <Dialog.Title className="text-2xl sm:text-4xl font-heading text-[#F45C65] uppercase">
                FOCUSFITNESS: PRICING PLANS
              </Dialog.Title>
              <button
                onClick={closeModal}
                className="text-white hover:text-[#F45C65] text-xl sm:text-2xl"
                aria-label="Close"
              >
                &times;
              </button>
            </div>
            <p className="text-base sm:text-lg font-body mb-4 text-center text-text-primary">
              An All-in-One System for Your Fitness Center
            </p>

            <div className="text-center mb-8">
              <h2 className="text-xl sm:text-3xl font-heading mb-2 text-text-primary underline decoration-[#F45C65]">
                {selectedPlan.name}
              </h2>
              <p className="text-sm sm:text-lg font-body text-text-secondary">
                ({selectedPlan.subtitle})
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg sm:text-2xl font-heading mb-2 text-text-primary">
                Features:
              </h3>
              <ul className="list-disc pl-6 mb-4 text-text-secondary space-y-2">
                {selectedPlan.features.map((feature, index) => (
                  <li key={index} className="font-body text-sm sm:text-base">
                    {feature}
                  </li>
                ))}
              </ul>
              <h3 className="text-lg sm:text-2xl font-heading mb-2 text-text-primary">
                Benefits:
              </h3>
              <ul className="list-disc pl-6 mb-4 text-text-secondary space-y-2">
                {selectedPlan.benefits.split(". ").map((benefit, index) => (
                  <li key={index} className="font-body text-sm sm:text-base">
                    {benefit.trim()}
                  </li>
                ))}
              </ul>
              <h3 className="text-lg sm:text-2xl font-heading mb-2 text-text-primary">
                Pricing:
              </h3>
              <p className="text-text-secondary font-body mb-4 text-sm sm:text-base">
                <span className="text-[#F45C65] font-bold">
                  {selectedPlan.price.monthly}
                </span>{" "}
                / month or{" "}
                <span className="text-[#F45C65] font-bold">
                  {selectedPlan.price.yearly}
                </span>{" "}
                / year ({selectedPlan.price.discount})
              </p>
            </div>

            <div className="border-t border-gray-600 pt-6">
              <h3 className="text-lg sm:text-2xl font-heading mb-2 text-text-primary">
                Contact Information:
              </h3>
              <p className="text-text-secondary font-body mb-2 text-sm sm:text-base">
                <strong className="text-[#F45C65]">Email:</strong>{" "}
                info@waveloop.dev
              </p>
              <p className="text-text-secondary font-body mb-2 text-sm sm:text-base">
                <strong className="text-[#F45C65]">Phone:</strong> +94 71 996
                7276
              </p>
              <p className="text-text-secondary font-body mb-4 text-sm sm:text-base">
                <strong className="text-[#F45C65]">Website:</strong>{" "}
                <a
                  href="https://focusfitness.waveloop.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F45C65] underline"
                >
                  focusfitness.waveloop.dev
                </a>
              </p>
              <p className="text-text-secondary font-body text-sm sm:text-base">
                Contact us for more information and custom solutions.
              </p>
            </div>

            <div className="text-right mt-6">
              <Button
                className="bg-[#F45C65] text-white hover:bg-[#F45C65]/90 px-4 sm:px-6 py-2 text-sm sm:text-lg font-medium rounded-lg"
                onClick={closeModal}
              >
                Close
              </Button>
            </div>
          </div>
        </Dialog>
      )}
    </>
  );
}
