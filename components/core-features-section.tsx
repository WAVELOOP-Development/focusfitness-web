"use client";

import {
  Brain,
  LayoutDashboard,
  ShoppingBag,
  Wifi,
  Dumbbell,
  Utensils,
  QrCode,
  CreditCard,
} from "lucide-react";

export default function CoreFeaturesSection() {
  const features = [
    {
      icon: Dumbbell,
      title: "Customizable Workout Plans",
      description:
        "Tailored routines for weight loss, muscle gain, or overall fitness based on your goals.",
      backgroundImage:
        "https://plus.unsplash.com/premium_photo-1661265933107-85a5dbd815af?q=80&w=1118&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      icon: Utensils,
      title: "Dietary Guidance",
      description:
        "Nutritional tracking and personalized meal recommendations for optimal results.",
      backgroundImage:
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1153&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      icon: Brain,
      title: "AI Fitness & Wellness Support",
      description:
        "Real-time support and motivation through an intelligent AI chatbot.",
      backgroundImage:
        "https://plus.unsplash.com/premium_photo-1682435270756-134146362441?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      icon: LayoutDashboard,
      title: "Gym Management Dashboard",
      description:
        "Tools for scheduling, member tracking, and performance analysis for gym operators.",
      backgroundImage:
        "https://images.unsplash.com/photo-1741478551723-4b7ce95cf395?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      icon: QrCode,
      title: "QR-Based Attendance",
      description:
        "Allow gym members to scan a QR code for seamless attendance marking.",
      backgroundImage:
        "https://images.unsplash.com/photo-1571867424488-4565932edb41?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      icon: CreditCard,
      title: "Payment Integration",
      description:
        "Enable gym members to pay membership fees through the app with multiple payment methods.",
      backgroundImage:
        "https://images.unsplash.com/photo-1587906697341-bfbde76785c7?q=80&w=1026&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      icon: ShoppingBag,
      title: "Supplement & Equipment Marketplace",
      description:
        "In-app platform for gym owners to sell supplements and fitness equipment to members.",
      backgroundImage:
        "https://images.unsplash.com/photo-1734607404545-d50bac7baeb1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      icon: Wifi,
      title: "Offline Functionality",
      description:
        "Ensures uninterrupted access to your fitness plans in areas with limited connectivity.",
      backgroundImage:
        "https://plus.unsplash.com/premium_photo-1661766770011-b21de9d0e5a5?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <section
      id="core-features"
      className="py-20 bg-rich-black text-text-primary"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl sm:text-5xl font-heading uppercase mb-4">
            What's Inside Focus Fitness
          </h2>
          <p className="text-lg text-text-secondary font-body max-w-2xl mx-auto">
            A comprehensive digital fitness platform combining personalized
            plans, AI support, and advanced management tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative h-64 rounded-lg shadow-lg border border-[#2A2A2A] hover:border-[#F45C65] transition-all duration-300 animate-on-scroll overflow-hidden cursor-pointer"
              style={{
                animationDelay: `${index * 100}ms`,
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url(${feature.backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Icon - Top Right */}
              <div className="absolute top-4 right-4 p-4 bg-[#F45C65] rounded-full opacity-90">
                <feature.icon className="h-6 w-6 text-white" />
              </div>

              {/* Title - Bottom Left (Default State) */}
              <div className="absolute bottom-4 left-4 right-4 group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-4xl font-heading uppercase text-white">
                  {feature.title}
                </h3>
              </div>

              {/* Description - Center (Hover State) */}
              <div className="absolute inset-0 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-80">
                <div className="text-center">
                  <h3 className="text-2xl font-heading uppercase text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-text-secondary font-body text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
