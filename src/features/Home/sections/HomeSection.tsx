"use client";

import React from "react";
import Image from "next/image";
import BgHome from "@/assets/bg-home.jpg"; // Ensure your image path is correct
import { FaCopy } from "react-icons/fa";
// Import other assets or components if needed
import Link from "next/link";
import { findUsLink, contractAddress } from "@/constants/links";

const HomeSection: React.FC = () => {
  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    alert("Contract address copied!");
  };

  return (
    <section
      id="welcome"
      className="relative flex flex-col items-center justify-center text-center min-h-screen bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${BgHome.src})` }} // Set the background image
    >
      {/* Content */}
      <div className="relative z-10 top-20 max-w-4xl px-4 sm:px-8 lg:px-0 space-y-40 sm:space-y-32">
        {/* Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white">
          Connects the AI capabilities directly to the goal of driving
          profitability.
        </h1>

        {/* Download Button */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          <div className="relative z-10 flex items-center justify-center">
            <div className="absolute flex items-center justify-center">
              <div className="flex items-center bg-black bg-opacity-20 text-white px-6 py-3 shadow-lg border border-violet-300 rounded-full">
                <FaCopy className="cursor-pointer mr-4" onClick={handleCopy} />
                <span className="text-sm sm:text-base">{contractAddress}</span>
              </div>
            </div>
          </div>

          {/* Partner Icons */}
          <div className="flex flex-col items-center justify-center">
            {/* Partner Icons (Uncomment if needed) */}
            {/* <div className="mt-6 flex items-center justify-center space-x-4 sm:space-x-4">
              <Link href={findUsLink.dextools}>
                <Image
                  src={CoinMarketCap}
                  alt="CoinMarketCap"
                  width={120}
                  height={40}
                />
              </Link>
              <Link href={findUsLink.coingecko}>
                <Image
                  src={CoinGecko}
                  alt="CoinGecko"
                  width={100}
                  height={40}
                />
              </Link>
              <Link href={findUsLink.dextools}>
                <Image src={DexTools} alt="DexTools" width={80} height={40} />
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
