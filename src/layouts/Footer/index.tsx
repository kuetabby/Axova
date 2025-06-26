"use client";
import React from "react";
import { useIsMounted } from "@/hooks/useIsMounted";
import Image from "next/image";
import { Button } from "@chakra-ui/react";
import BgFooter from "@/assets/bg-footer.svg";
import LogoTelegramDex from "@/assets//Logo_AxovaPNG.png";
import { SpringDisplayBold } from "@/utils/font";
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
      className={`${SpringDisplayBold.className} relative bg-black w-full text-white mt-16 bg-cover bg-no-repeat bg-center`}
      style={{ backgroundImage: `url(/bg-4.svg)` }}
      // style={{
      //   backgroundImage: `url(${BgFooter.src})`,
      //   backgroundSize: "cover",
      //   backgroundRepeat: "no-repeat",
      //   backgroundPosition: "center bottom",
      //   paddingBottom: "120px",
      // }}
    >
      <div className="max-w-screen-2xl h-full m-auto relative mx-auto px-4 xl:px-8 flex flex-col sm:flex-row justify-between md:justify-evenly items-start py-16 md:py-24">
        {/* Left Section */}
        <div className="flex flex-col w-full sm:w-1/3 items-center sm:items-start text-center sm:text-start md:text-left mb-8 md:mb-0">
          <img src={LogoTelegramDex.src} width={200} height={40} />
          <p className="text-white mt-4">
            Transforming Data into Profitable Moves
          </p>
        </div>

        {/* Center Section */}
        <div className="md:w-full w-1/3 flex flex-col lg:flex-row self-center justify-between text-right mb-8 md:mb-20 lg:mb-40 gap-12">
          {/* <div className="w-full flex flex-row justify-center md:justify-end gap-12 text-center md:text-left md:mb-0">
            <div className="mb-6 md:mb-0">
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <Link href="/" className="hover:text-white">
                  <div>Home</div>
                </Link>

                <Link href="#about" className="hover:text-white">
                  <div className="my-2">About</div>
                </Link>

                <Link href="#roadmap" className="hover:text-white">
                  <div className="mb-2">Roadmap</div>
                </Link>

                <Link href="#faq" className="hover:text-white">
                  <div>FAQ</div>
                </Link>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Find Us</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <Link
                  href={findUsLink.etherscan}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  <div>Etherscan</div>
                </Link>

                <Link
                  href={findUsLink.uniswap}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  <div className="my-2">Uniswap</div>
                </Link>

                <Link
                  href={findUsLink.dextools}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  <div className="mb-2">DexTools</div>
                </Link>

                <Link
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pointer-events-none"
                >
                  <div className="mb-2">CoinGecko</div>
                </Link>

                <Link
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pointer-events-none"
                >
                  <div>CoinMarketCap</div>
                </Link>
              </ul>
            </div>
          </div> */}

          {/* Right Section */}
          <div className="flex flex-col w-full text-center md:text-right items-center sm:items-end">
            {/* <h3 className="font-semibold mb-4">Join the Axova Community</h3> */}
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
    </footer>
  );
};

export default AppFooter;
