"use client";

export default function QuoteSection() {
  return (
    <section
      id="quote"
      className="py-32 bg-rich-black text-text-primary relative overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-rich-black bg-opacity-75"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div className="animate-on-scroll">
          <blockquote className="text-3xl sm:text-4xl lg:text-5xl font-heading uppercase leading-tight mb-8">
            "Focus Fitness aims to bridge gaps in personal fitness tracking and
            gym operations, promoting healthier lifestyles across Sri Lanka."
          </blockquote>

          <div className="flex items-center justify-center space-x-4">
            <div className="h-px bg-[#F45C65] w-16"></div>
            <p className="text-xl text-[#F45C65] font-body uppercase tracking-wider">
              Our Mission
            </p>
            <div className="h-px bg-[#F45C65] w-16"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
