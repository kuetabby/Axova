"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import { PiStarFourFill } from "react-icons/pi";

interface FAQItemProps {
  question: string;
  answer: string;
}

const faqItems: FAQItemProps[] = [
  {
    question: "How does Axova ensure data security?",
    answer:
      "Axova leverages Solana decentralized network, encrypting your data and ensuring its securely distributed across multiple nodes, providing protection against breaches and unauthorized access.",
  },
  {
    question: "What makes Axova different from other AI platforms?",
    answer:
      "Axova combines decentralized storage, real-time AI insights, and customizable solutions to deliver a unique AI experience that adapts to your business needs while ensuring security.",
  },
  {
    question: "Is Axova scalable for large enterprises?",
    answer:
      "Yes! Axova is designed to scale with your business, from startups to large enterprises, ensuring seamless performance even as your data needs grow.",
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative mt-40 max-w-5xl mx-auto px-4 py-12 z-50">
      <h2 className="text-4xl font-bold text-center text-gray-200 mb-16">
        Lorem ipsum dolor
      </h2>
      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className=" rounded-lg p-6 w-full sm:min-w-[600px] md:min-w-[700px] max-w-full md:max-w-4xl mx-auto"
          >
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg italic font-semibold text-white">
                {item.question}
              </h3>
              {openIndex === index ? (
                <FaTimes className="text-white" />
              ) : (
                <PiStarFourFill className="text-white" />
              )}
            </div>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <p className="mt-4 text-gray-400 font-light text-sm">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
