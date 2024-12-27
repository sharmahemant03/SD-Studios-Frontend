import React from 'react';

const CheckIcon = () => (
  <svg
    className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 13l4 4L19 7"
    />
  </svg>
);

const Pricing = () => {
  const features = [
    "Modern & responsive website (Java / Python)",
    "Safe payment processing",
    "Reliable data storage",
    "Fast technical assistance",
    "Quick Scaling",
    "Chat Support",
  ];

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl text-black font-bold mb-4">
          One Simple Plan for Everyone
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Get access to all premium features with our straightforward pricing. 
          No hidden fees, no complicated tiers.
        </p>
      </div>

      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
          <div className="bg-blue-600 p-6 text-white text-center">
            <h3 className="text-2xl font-bold mb-2  transition-colors duration-300">
              Premium Plan
            </h3>
            <div className="text-5xl font-bold mb-2 hover:scale-110 transition-transform duration-300">
              &#8377;6000
            </div>
          </div>

          <div className="p-8">
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckIcon />
                  <span className="text-gray-700 hover:text-blue-600 transition-colors duration-300">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <button className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 hover:scale-105 transition-all duration-300">
              Start
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
