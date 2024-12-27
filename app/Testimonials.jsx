"use client";

import { useState } from "react";

const Testimonials = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  const testimonials = [
    {
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
      name: "Sarah Mitchell",
      role: "Marketing Director",
      handle: "@sarahmdigital",
      feedback: "They delivered our e-commerce website in half the time we expected, with exceptional quality.",
      details: "The team understood our vision perfectly and added valuable suggestions that improved our user experience. Our conversion rate has increased by 40% since launch."
    },
    {
      avatar: "/pic2.png",
      name: "Litesh Goyal",
      role: "Startup Founder",
      handle: "@dchen_tech",
      feedback: "From concept to launch in just two weeks - I couldn't believe how efficient they were!",
      details: "Their rapid website development service helped us meet our investor deadline. The collaborative process was smooth, and they were incredibly responsive to our needs."
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      name: "Rachel Thompson",
      role: "Small Business Owner",
      handle: "@rachelt_boutique",
      feedback: "Finally found a web development service that speaks my language and delivers results.",
      details: "As someone with minimal tech background, I appreciated their clear communication and guidance throughout the process. My online boutique looks exactly how I envisioned it."
    },
    {
      avatar: "/hemant.jpg",
      name: "Hemant Sharma",
      role: "Software Engineer",
      handle: "@marcusrpm",
      feedback: "Their on-demand website service saved us countless hours of development time.",
      details: "The ability to request updates and changes as our needs evolved was invaluable. Their platform made the entire process transparent and stress-free."
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/45.jpg",
      name: "Emma Wright",
      role: "Non-Profit Director",
      handle: "@emmawright_org",
      feedback: "They transformed our outdated website into a modern, accessible platform that our donors love.",
      details: "The team's expertise in accessibility standards and mobile optimization has helped us reach a wider audience. Our online donations have increased by 85% since the redesign."
    },
    {
      avatar: "pic6.png",
      name: "Jatin Kumar",
      role: "Restaurant Owner",
      handle: "@jkumar_eats",
      feedback: "The custom ordering system they built into our website revolutionized our takeout business.",
      details: "During the pandemic, they helped us pivot quickly by adding online ordering capabilities. The interface is so intuitive that even our older customers find it easy to use."
    }
  ];

  return (
    <div className="bg-gray-50 text-black lg:max-w-6xl mx-auto p-8 space-y-6">
      <h2 className="text-3xl font-bold mb-6 text-center">
        We have worked with hundreds of amazing people
      </h2>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="border rounded-lg p-6 bg-white shadow-xl hover:shadow-xl  duration-300 ease-in-out hover:scale-110 cursor-pointer space-y-4"
            onClick={() => setSelectedTestimonial(testimonial)}
          >
            <div className="flex items-center space-x-4">
              <img
                src={testimonial.avatar}
                alt={`${testimonial.name} avatar`}
                className="w-12 h-12 rounded-full shadow-sm"
              />
              <div>
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-gray-600 text-sm">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-gray-800">{testimonial.feedback}</p>
          </div>
        ))}
      </div>


      {selectedTestimonial && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full shadow-xl space-y-4">
            <button
              className="text-gray-500 hover:text-gray-800 float-right text-2xl font-bold"
              onClick={() => setSelectedTestimonial(null)}
            >
              &times;
            </button>
            <div className="flex items-center space-x-4">
              <img
                src={selectedTestimonial.avatar}
                alt={`${selectedTestimonial.name} avatar`}
                className="w-16 h-16 rounded-full shadow"
              />
              <div>
                <h3 className="text-xl font-bold">
                  {selectedTestimonial.name}
                </h3>
                <p className="text-gray-500 text-sm">
                  {selectedTestimonial.role} • {selectedTestimonial.handle}
                </p>
              </div>
            </div>
            <p className="text-gray-700">{selectedTestimonial.details}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Testimonials;
