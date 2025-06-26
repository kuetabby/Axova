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
      className="flex flex-col items-center justify-center text-center h-full bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: `url(/bg-1.svg), linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%)`, // Linear gradient for black at the bottom
      }}
    >
      {/* Content */}
      <div className="relative z-10 top-20 max-w-4xl py-28 px-4 sm:px-8 lg:px-0 space-y-14 ">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
          Connects the AI capabilities directly to the goal of driving
          profitability.
        </h1>

        <Image
          src="/mascot-1.svg"
          alt={"mascot"}
          width={64}
          height={64}
          className="w-full h-[306px] lg:h-[512px] mx-auto mb-4" // Added mb-4 to reduce the gap between image and buttons
        />

        <div className="flex flex-col sm:flex-row justify-center gap-4 p-4">
          {/* Adjusted the gap and margin */}
          <Link
            href={findUsLink.pumpfun}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-8 py-3 bg-[#054dfd] text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-[#054dfd]Light/20">
              Buy AVA
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
      </div>
    </section>
  );
};

export default HomeSection;
