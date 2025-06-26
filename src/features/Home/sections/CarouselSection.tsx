"use client";

import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaLongArrowAltRight } from "react-icons/fa";
import Image from "next/image";
import BgGrid from "@/assets/bg-carousel.svg";

const slides = [
  {
    title: "AI-Driven Decisions",
    description:
      "With Axova, you can leverage AI to gain deep, real-time insights from your data, leading to smarter decisions.",
    actionLabel: "Learn more",
  },
  {
    title: "Decentralized & Secure",
    description:
      "By using Solana's decentralized network, Axova offers enhanced security, scalability, and privacy for your data.",
    actionLabel: "Learn more",
  },
  {
    title: "Customizable",
    description:
      "Tailor the AI models and solutions to meet your specific business needs and industry challenges.",
    actionLabel: "Learn more",
  },
];

const CarouselSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="relative flex flex-col items-center justify-start w-full overflow-hidden space-y-60">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={BgGrid}
          alt="Background Grid"
          layout="fill"
          objectFit="cover"
          className="pointer-events-none mt-28"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#054dfd] to-transparent pointer-events-none"></div>
      </div>

      {/* Section Title */}
      <div className="relative z-10 text-center -top-24">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl italic font-black text-white">
          Why Axova?
        </h2>
        {/* <video
          className="w-full sm:w-[80%] lg:w-[45%] mx-auto mt-10 rounded-lg"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="Axova.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        <p className="text-[15px] sm:text-sm lg:text-md text-gray-400 mt-3 lg:mt-10 sm:mx-[100px] lg:mx-[300px]">
          In today's rapidly evolving business landscape, making informed
          decisions is more crucial than ever. Axova empowers organizations by
          harnessing the power of artificial intelligence to transform their
          data into actionable insights. With our state-of-the-art platform,
          businesses can unlock the potential of their data like never before.
        </p>
      </div>

      {/* Carousel Content */}
      <div className="relative z-10 w-full flex justify-center items-center space-x-6 -top-24">
        {/* Arrow Left */}
        <button
          onClick={handlePrev}
          className="absolute left-4 sm:left-8 z-20 w-[60px] h-[60px] flex items-center justify-center rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-all duration-300"
        >
          <FaArrowLeft className="text-white text-xl" />
        </button>

        <div className="relative flex justify-center items-center w-full max-w-4xl">
          {slides.map((slide, index) => {
            const isActive = index === currentIndex;
            const position = index - currentIndex;

            return (
              <div
                key={index}
                className={`absolute transition-transform duration-500 ${
                  isActive
                    ? "z-20 scale-100 opacity-100"
                    : "z-10 scale-75 opacity-50"
                }`}
                style={{
                  transform: `perspective(1000px) rotateY(${
                    position * 36
                  }deg) translateX(${position * 360}px)`,
                }}
              >
                <div className="w-[320px] h-[320px] bg-gradient-to-br from-[#352F50] to-[#393059] p-8 rounded-lg shadow-lg flex flex-col justify-start border border-[#7A7399]">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {slide.title}
                    </h3>
                    <p className="text-sm text-gray-300 mb-4">
                      {slide.description}
                    </p>
                  </div>
                  <button className="flex flex-row w-[150px] py-2 px-4 items-center gap-2 border rounded-full text-sm text-white">
                    {slide.actionLabel}
                    <FaLongArrowAltRight size={24} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Arrow Right */}
        <button
          onClick={handleNext}
          className="absolute right-4 sm:right-8 z-20 w-[60px] h-[60px] flex items-center justify-center rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-all duration-300"
        >
          <FaArrowRight className="text-white text-xl" />
        </button>
      </div>

      {/* Indicator Dots */}
      <div className="relative z-10 bottom-0 flex space-x-2 -top-24">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default CarouselSection;
