"use client";

import React from "react";
import Image from "next/image";
import LinesImage from "@/assets/zone-line.svg";
import { Button } from "@chakra-ui/react";
import { plasma } from "@/utils/font";
import Link from "next/link";
import { socialsLink } from "@/constants/links";

const RoadMapSection: React.FC = () => {
  return (
    <section className="mt-24 relative flex flex-col items-center justify-center pt-16 overflow-hidden z-[100]">
      {/* Background Lines */}
      <div className="absolute inset-0 flex justify-center items-center clip-half-circle">
        <Image
          src={LinesImage}
          alt="Curved Lines"
          // layout="fill"
          objectFit="contain"
          className="pointer-events-none w-[360px] sm:w-[800px] sm:mt-56"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050321] to-transparent via-[#050321FF] pointer-events-none"></div>
      </div>

      {/* Roadmap Content */}
      <div className="relative z-10 text-center h-[300px] sm:h-[500px]">
        <div className="absolute top-[28%] -left-20 text-center">
          <h2 className="text-4xl italic font-black text-white mb-3">
            Roadmap
          </h2>
          <Link
            href={socialsLink.whitepaper}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              className={`${plasma.className} text-white bg-[#054dfd] hover:bg-transparent border-2 border-transparent hover:border-[#054dfd]`}
              variant={"outline"}
              rounded="full"
              // w={100}
              // h={30}
              size={"md"}
              boxShadow={"0px 4px 4px 0px #00000040"}
            >
              Read More
            </Button>
          </Link>
        </div>

        {/* Roadmap Items */}
        <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] mt-8">
          <div className="absolute left-4 -top-24 sm:-top-6">
            <div className="flex space-x-2 py-2 px-2 flex-row w-[120px] justify-start items-center bg-gradient-to-r from-[#054dfd] to-[#019ff0] rounded-full shadow-md">
              {/* <div className='w-5 h-5 bg-[#8C85AA] rounded-full' /> */}
              <div className="flex flex-col">
                <span className="text-white text-[8px] lg:text-xs font-bold">
                  Phase 2: Pilot Testing & Feedback
                </span>
              </div>
            </div>
          </div>

          <div className="absolute right-10 sm:right-40 -top-[10%] sm:top-[0%]">
            <div className="flex space-x-2 py-2 px-2 flex-row w-[120px] justify-start items-center bg-gradient-to-r from-[#054dfd] to-[#019ff0] rounded-full shadow-md">
              {/* <div className='w-5 h-5 bg-[#8C85AA] rounded-full' /> */}
              <div className="flex flex-col">
                <span className="text-white text-[8px] lg:text-xs font-bold">
                  Phase 1: Development & Customization
                </span>
              </div>
            </div>
          </div>

          <div className="absolute right-24 sm:right-20 top-[5%] sm:top-[15%]">
            <div className="flex space-x-2 py-2 px-2 flex-row w-[120px] justify-start items-center bg-gradient-to-r from-[#5B5575] to-[#019ff0] rounded-full shadow-md">
              {/* <div className='w-5 h-5 bg-[#8C85AA] rounded-full' /> */}
              <div className="flex flex-col">
                <span className="text-white text-[8px] lg:text-xs font-bold">
                  Phase 3: Full Deployment & Integration
                </span>
              </div>
            </div>
          </div>

          <div className="absolute left-20 sm:left-40 top-[0%] sm:top-[15%]">
            <div className="flex space-x-2 py-2 px-2 flex-row w-[120px] justify-start items-center bg-gradient-to-r from-[#5B5575] to-[#019ff0] rounded-full shadow-md">
              {/* <div className='w-5 h-5 bg-[#8C85AA] rounded-full' /> */}
              <div className="flex flex-col">
                <span className="text-white text-[8px] lg:text-xs font-bold">
                  Phase 4: Scaling & Innovation
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadMapSection;
