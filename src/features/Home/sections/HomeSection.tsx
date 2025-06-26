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
      style={{ backgroundImage: `url(/bg-1.svg)` }} // Set the background image
    >
      {/* <div
        className="absolute top-0 left-0 h-[564px] w-full"
        style={{
          backgroundImage:
            "linear-gradient(360deg, rgba(1, 2, 1, 0) 0%, rgb(1, 2, 1) 100%);",
        }}
      /> */}
      {/* Content */}
      <div className="relative z-10 top-20 max-w-4xl py-28 px-4 sm:px-8 lg:px-0 space-y-14">
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
          {" "}
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
        {/* Download Button */}
        {/* <div className="relative z-10 flex flex-col items-center justify-center pb-4">
          <div className="relative z-10 flex items-center justify-center">
            <div className="absolute flex items-center justify-center">
              <div className="flex items-center bg-black bg-opacity-20 text-white px-6 py-3 shadow-lg border border-violet-300 rounded-full">
                <FaCopy className="cursor-pointer mr-4" onClick={handleCopy} />
                <span className="text-sm sm:text-base">{contractAddress}</span>
              </div>
            </div>
          </div>
        </div> */}

        {/* </div> */}
      </div>
    </section>
  );
};

export default HomeSection;
