"use client";
import React from "react";
import { useIsMounted } from "@/hooks/useIsMounted";
import Image from "next/image";
import { Button } from "@chakra-ui/react";
import BgFooter from "@/assets/bg-footer.svg";
import LogoTelegramDex from "@/assets//Logo_AxovaPNG.png";
import { plasma } from "@/utils/font";
import Link from "next/link";
import { findUsLink, socialsLink } from "@/constants/links";

import { FaXTwitter } from "react-icons/fa6";
import { DexscreenerIcon } from "@/utils/Icon/dex";
import { GitbookIcon } from "@/utils/Icon/socials";

interface Props {}

const AppFooter: React.FC<Props> = () => {
  if (!useIsMounted()) {
    return null;
  }

  return (
    <footer
      className={`${plasma.className} relative bg-black w-full text-white mt-16 bg-cover bg-no-repeat bg-center`}
      style={{ backgroundImage: `url(/bg-4.svg)` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>{" "}
      {/* Dark transparent overlay */}
      <div className="max-w-screen-2xl h-full m-auto relative mx-auto px-4 xl:px-8 flex flex-col sm:flex-row justify-between md:justify-evenly items-start py-16 md:py-24 z-10">
        {/* Left Section */}
        <div className="flex flex-col w-full sm:w-1/3 items-center sm:items-start text-center sm:text-start md:text-left mb-8 md:mb-0">
          <img src={LogoTelegramDex.src} width={200} height={40} />
          <p className="text-white mt-4">
            Shaping the future of decentralized AI
          </p>
        </div>

        {/* Center Section */}
        <div className="md:w-full w-1/3 flex flex-col lg:flex-row self-center justify-between text-right mb-8 md:mb-20 lg:mb-40 gap-12">
          {/* Right Section */}
          <div className="flex flex-col w-full text-center md:text-right items-center sm:items-end">
            <div className="flex justify-center md:justify-end space-x-4">
              <Link
                href={socialsLink.twitter}
                className="text-white hover:text-primaryColor transition-colors"
                aria-label="x"
              >
                <FaXTwitter size={24} />
              </Link>

              <Link
                href={socialsLink.whitepaper}
                className="text-white hover:text-primaryColor transition-colors pointer"
                aria-label="documenation"
              >
                <GitbookIcon
                  className="fill-white"
                  style={{ fontSize: "1.5em" }}
                />
              </Link>

              <Link
                href={findUsLink.dexscreener}
                className="text-white hover:text-primaryColor transition-colors pointer"
                aria-label="documenation"
              >
                <DexscreenerIcon
                  className="fill-white"
                  style={{ fontSize: "1.5em" }}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center pb-4 text-[#F9FAFB]">
        <p className="font-thin text-white text-center lg:text-left">
          &copy; 2025 Axova.
        </p>
        <p className="font-thin text-white text-center lg:text-left">
          All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default AppFooter;
