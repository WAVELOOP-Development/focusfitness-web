"use client";

export default function AppModulesSection() {
  const modules = [
    {
      name: "Workout Planner",
      features:
        "Custom routines, progress tracking, video guides, and goal setting.",
    },
    {
      name: "Diet Manager",
      features:
        "Personalized meal plans, calorie tracking, and nutritional insights.",
    },
    {
      name: "AI Assistant",
      features:
        "Chatbot for tips, reminders, and support on your fitness journey.",
    },
    {
      name: "Gym Admin Tools",
      features:
        "Member tracking, class scheduling, attendance management (for operators).",
    },
    {
      name: "Payment System",
      features:
        "Supports LKR payments, invoice generation, and subscription management.",
    },
    {
      name: "In-App Store",
      features: "Sell supplements, gear, and more directly through the app.",
    },
  ];

  return (
    <section id="app-modules" className="py-20 bg-rich-black text-text-primary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl sm:text-5xl font-heading uppercase mb-4">
            What’s Inside Focus Fitness
          </h2>
          <p className="text-lg text-text-secondary font-body max-w-2xl mx-auto">
            Discover the comprehensive modules that power your fitness journey
            and gym operations.
          </p>
        </div>

        <div className="overflow-x-auto animate-on-scroll">
          <table className="w-full min-w-[800px] bg-[#1A1A1A] rounded-lg shadow-lg border border-[#2A2A2A]">
            <thead>
              <tr className="bg-[#2A2A2A]">
                <th className="p-4 text-left text-text-secondary font-bold uppercase text-sm rounded-tl-lg">
                  Module
                </th>
                <th className="p-4 text-left text-text-secondary font-bold uppercase text-sm">
                  Key Features
                </th>
              </tr>
            </thead>
            <tbody>
              {modules.map((module, index) => (
                <tr
                  key={index}
                  className="border-t border-[#2A2A2A] hover:bg-[#1F1F1F]"
                >
                  <td className="p-4 font-bold text-neon-green">
                    {module.name}
                  </td>
                  <td className="p-4 text-text-primary font-body">
                    {module.features}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
