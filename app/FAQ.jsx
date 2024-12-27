"use client";
import { useState } from "react";

const faqData = [
  {
    question: "What services do you offer?",
    answer:
      "We specialize in building robust SaaS applications using Django and Java. Whether you need a scalable backend, seamless frontend, or a full-stack solution, our team has you covered.",
  },
  {
    question: "Can I choose between Django and Java for my project?",
    answer:
      "Absolutely! We provide the flexibility to choose the technology stack that best suits your business requirements. If you're unsure, we’ll guide you based on your needs.",
  },
  {
    question: "Do you provide custom solutions?",
    answer:
      "Yes, we create tailor-made solutions to fit your specific business goals. Our services are designed to be adaptable, scalable, and unique to your requirements.",
  },
  {
    question: "How long does it take to build a SaaS application?",
    answer:
      "The timeline depends on the complexity of the project. Typically, a standard SaaS application takes 4–8 weeks to develop, but we’ll provide a detailed estimate after discussing your project.",
  },
  {
    question: "Do you offer post-development support?",
    answer:
      "Yes, we provide ongoing support and maintenance to ensure your application runs smoothly and remains up-to-date with the latest technologies.",
  },
  {
    question: "Are the applications you build secure?",
    answer:
      "Security is one of our top priorities. We follow industry best practices and use modern frameworks to ensure your application is secure and compliant with regulations.",
  },
  {
    question: "How do we get started?",
    answer:
      "Getting started is easy! Reach out to us through our contact form or email us directly. We’ll schedule a consultation to discuss your requirements and plan the next steps.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="bg-gray-50 w-full p-8 lg:p-24">

      <div className="flex flex-col lg:flex-row items-start lg:items-start lg:justify-between gap-8">
        <div className="lg:w-1/3">
          <h2 className="text-4xl font-bold text-black">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 mt-2">
          Everything you need to know before starting your project with us!
          </p>
        </div>


        <div className="lg:w-2/3">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border-t border-gray-200 py-4"
            >
              <button
                className="flex justify-between items-center w-full text-left text-lg font-medium text-black"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <span className="text-xl text-gray-600">
                  {openIndex === index ? "-" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
