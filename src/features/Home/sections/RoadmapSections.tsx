"use client";

import React from "react";
import Image from "next/image";
import LinesImage from "@/assets/zone-line.svg";
import { Button } from "@chakra-ui/react";
import { SpringDisplayBold } from "@/utils/font";

const RoadMapSection: React.FC = () => {
  return (
    <section className="mt-24 relative flex flex-col items-center justify-center pt-16 bg-[#050321] overflow-hidden">
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
          <Button
            className={`${SpringDisplayBold.className} text-white`}
            variant={"outline"}
            rounded="full"
            // w={100}
            // h={30}
            size={"md"}
            border={0}
            boxShadow={"0px 4px 4px 0px #00000040"}
            bgGradient="conic-gradient(from 270deg at 50% 50%, rgba(4, 104, 251, 0.4) 0deg, rgba(0, 0, 0, 0) 172.66deg, #0468fb 281.25deg, rgba(4, 104, 251, 0.4) 360deg)"
            _hover={{
              bgGradient:
                "conic-gradient(from 270deg at 50% 50%,rgba(71, 47, 140, 0.4) 0deg, rgba(0, 0, 0, 0) 172.66deg,#493582 281.25deg,rgba(71, 47, 140, 0.4) 360deg)",
            }}
          >
            Read More
          </Button>
        </div>

        {/* Roadmap Items */}
        <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] mt-8">
          <div className="absolute left-4 -top-24 sm:-top-6">
            <div className="flex space-x-2 py-2 px-2 flex-row w-[120px] justify-start items-center bg-gradient-to-r from-[#054dfd] to-[#019ff0] rounded-full shadow-md">
              {/* <div className='w-5 h-5 bg-[#8C85AA] rounded-full' /> */}
              <div className="flex flex-col">
                <span className="text-white text-[8px] lg:text-xs font-bold">
                  Phase 2: Development & Testing
                </span>
              </div>
            </div>
          </div>

          <div className="absolute right-10 sm:right-40 -top-[10%] sm:top-[0%]">
            <div className="flex space-x-2 py-2 px-2 flex-row w-[120px] justify-start items-center bg-gradient-to-r from-[#054dfd] to-[#019ff0] rounded-full shadow-md">
              {/* <div className='w-5 h-5 bg-[#8C85AA] rounded-full' /> */}
              <div className="flex flex-col">
                <span className="text-white text-[8px] lg:text-xs font-bold">
                  Phase 1: Project Initialization
                </span>
              </div>
            </div>
          </div>

          <div className="absolute right-24 sm:right-20 top-[5%] sm:top-[15%]">
            <div className="flex space-x-2 py-2 px-2 flex-row w-[120px] justify-start items-center bg-gradient-to-r from-[#5B5575] to-[#019ff0] rounded-full shadow-md">
              {/* <div className='w-5 h-5 bg-[#8C85AA] rounded-full' /> */}
              <div className="flex flex-col">
                <span className="text-white text-[8px] lg:text-xs font-bold">
                  Phase 3: Launch & Marketing
                </span>
              </div>
            </div>
          </div>

          <div className="absolute left-20 sm:left-40 top-[0%] sm:top-[15%]">
            <div className="flex space-x-2 py-2 px-2 flex-row w-[120px] justify-start items-center bg-gradient-to-r from-[#5B5575] to-[#019ff0] rounded-full shadow-md">
              {/* <div className='w-5 h-5 bg-[#8C85AA] rounded-full' /> */}
              <div className="flex flex-col">
                <span className="text-white text-[8px] lg:text-xs font-bold">
                  Phase 4: Expansion & Feature Enhancements
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
