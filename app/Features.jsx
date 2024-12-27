import React from "react";

export default function Features() {
  const features = [
    {
      title: "Flexible Tech Stack",
      description:
        "Whether you prefer Django, Java, or another platform, we adapt to your chosen technology to deliver a website that aligns with your goals.",
      icon: "↔️",
    },
    {
      title: "Tailored Solutions",
      description:
        "From e-commerce stores to corporate websites, we provide solutions that reflect your brand and meet your audience's needs.",
      icon: "⚙️",
    },
    {
      title: "Fast Delivery",
      description:
        "We understand the importance of time. That’s why we ensure quick turnarounds without compromising quality.",
      icon: "⏩",
    },
    {
      title: "Scalable and Secure",
      description:
        "Our websites are built to grow with your business while maintaining the highest standards of security.",
      icon: "🔒",
    },
    {
      title: "Affordable Pricing",
      description:
        "Professional websites shouldn’t cost a fortune. We offer competitive rates with no hidden fees.",
      icon: "💰",
    },
    {
      title: "Dedicated Support",
      description:
        "From project kickoff to post-launch, our team is here to assist you every step of the way.",
      icon: "📞",
    },
  ];

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800">
          Features
        </h2>
        <p className="mt-4 text-xl text-gray-600">
          Custom Websites, Built with Your Vision in Mind
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-xl transform transition-transform duration-300 hover:shadow-xl hover:scale-110"
          >
            <div className="text-blue-500 text-3xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
