"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import BgMap from "@/assets/bg-map.svg"; // Ensure this path is correct

interface Slide {
  title: string;
  description: string;
  // buttonLabel: string;
}

const slides: Slide[] = [
  {
    title: "What is Axova?",
    description:
      "Axova is an AI-integrated Telegram bot that provides real-time market analysis, automated trading strategies, and personalized recommendations for cryptocurrency traders. It also includes a smart contract scanner for analyzing blockchain contracts",
    // buttonLabel: 'Lorem ipsum',
  },
  {
    title: "How does Axova work?",
    description:
      "Axova operates through a combination of AI-powered market analysis and automation. It continuously scans market data, identifies trends, and uses machine learning to provide trading insights. The real-time trading bot then automates trades based on your settings",
    // buttonLabel: 'Lorem ipsum',
  },
  {
    title: "Who can use Axova?",
    description:
      "Axova is designed for both beginner and experienced traders who are looking to leverage AI for smarter trading",
    // buttonLabel: 'Lorem ipsum',
  },
  {
    title: "Why should I use Axova?",
    description:
      "Axova enhances your trading experience by offering cutting-edge AI tools that automate trades, provide real-time insights, and analyze market trends. It helps you make data-driven decisions quickly, optimizing your strategies and minimizing risks",
    // buttonLabel: 'Lorem ipsum',
  },
];

const CarouselSlideView: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center w-full min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]">
      {/* Background Image */}
      {/* <Image
        src={BgMap}
        alt="Background Map"
        // layout="fill"
        objectFit="cover"
        className="pointer-events-none absolute inset-0 top-20 bg-cover w-full"
      /> */}

      {/* Carousel Content */}
      <div className="relative z-10 w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-24">
          FAQ
        </h2>

        <div className="relative flex items-center justify-center h-64 sm:h-72 md:h-80 lg:h-96">
          {/* Radio Inputs */}
          {slides.map((_, index) => (
            <input
              key={`radio-${index}`}
              type="radio"
              name="slider"
              id={`item-${index + 1}`}
              checked={index === currentIndex}
              onChange={() => setCurrentIndex(index)}
              className="hidden"
            />
          ))}

          {/* Cards */}
          <div className="flex justify-center relative w-full h-full transform-style-3d">
            {slides.map((slide, index) => (
              <label
                key={`label-${index}`}
                htmlFor={`item-${index + 1}`}
                className={`absolute w-3/5 h-full transform transition-transform duration-300 cursor-pointer ${
                  index === currentIndex
                    ? "z-10 scale-100 translate-x-0 opacity-100"
                    : "scale-90 opacity-50"
                } ${
                  index === (currentIndex + 1) % slides.length
                    ? "translate-x-[40%]"
                    : ""
                } ${
                  index === (currentIndex - 1 + slides.length) % slides.length
                    ? "translate-x-[-40%]"
                    : ""
                }`}
              >
                <div className="bg-gradient-to-b justify-center text-center from-[#181431] via-[#054dfd] to-[#251C48] bg-opacity-60 text-white rounded-lg p-4 sm:p-5 md:p-6 shadow-lg backdrop-filter backdrop-blur-md border border-[#054dfd]">
                  <h3 className="text-lg sm:text-xl font-semibold">
                    {slide.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-light text-gray-300">
                    {slide.description}
                  </p>
                  {/* <h3 className="text-sm sm:text-base font-semibold">{slide.buttonLabel}</h3> */}
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center space-x-2">
          {slides.map((_, index) => (
            <div
              key={`indicator-${index}`}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
                index === currentIndex ? "bg-white" : "bg-gray-400"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselSlideView;
