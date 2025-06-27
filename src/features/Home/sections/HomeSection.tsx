"use client";

import React from "react";
import Image from "next/image";
import { FaCopy } from "react-icons/fa";
// Import other assets or components if needed
import Link from "next/link";
import { findUsLink, contractAddress, socialsLink } from "@/constants/links";

const HomeSection: React.FC = () => {
  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    alert("Contract address copied!");
  };

  return (
    <section
      className="flex flex-col items-center justify-center text-center h-full bg-cover bg-no-repeat bg-center relative"
      style={{
        backgroundImage: `url(/bg-1.svg)`, // Set the background image
      }}
    >
      {/* Content */}
      <div className="relative z-10 top-20 max-w-4xl py-28 px-4 sm:px-8 lg:px-0 space-y-10">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
          {/* The future of
          <br />
          Decentralized AI */}
          Shaping the future of
          <br />
          Decentralized AI.
        </h1>

        <p className="w-[343px] md:w-[690px] xl:w-[800px] mx-auto opacity-[70%] font-manrope font-normal text-[16px] md:text-[18px] xl:text-[20px] text-center leading-[26px] md:leading-[32px] text-gray-300">
          Empowering industries with secure and scalable solutions, we turn
          complex data into real-time insights
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 p-2">
          {/* Adjusted the gap and margin */}
          <Link
            href={findUsLink.pumpfun}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-8 py-3 bg-[#054dfd] text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-[#054dfd]Light/20">
              Buy AXO
            </button>
          </Link>

          <Link
            href={socialsLink.whitepaper}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-8 py-3 border-2 border-[#054dfd] text-white font-semibold rounded-lg shadow-lg hover:bg-[#054dfd]Light hover:text-white transition-transform duration-300">
              Documentation
            </button>
          </Link>
        </div>

        <Image
          src="/mascot-1.svg"
          alt={"mascot"}
          width={200}
          height={200}
          priority
          className="w-full h-[75vh] mx-auto mb-4" // Adjusted height for the image
        />
      </div>

      {/* Black Gradient at the Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-black to-transparent z-50"></div>
    </section>
  );
};

export default HomeSection;
