"use client";
import { useEffect, useRef, useState } from "react";

import YinLoader from "@/components/Loader/Custom";

import { useIsMounted } from "@/hooks/useIsMounted";

import { contractAddress, socialsLink } from "@/constants/links";
import { SpringDisplay } from "@/utils/font";
import iconHome from "@/assets/icon-home.png";
import { motion } from "framer-motion";

import AppBackground from "@/assets/bg-home.png";

// import "./style.css";
// import Image from "next/image";
import Link from "next/link";

import { useToast } from "@chakra-ui/react";
// import FAQSection from "./sections/FAQSections";
import HomeSection from "./sections/HomeSection";
import TokenomicSection from "./sections/TokenomicSection";
import CarouselSection from "./sections/CarouselSection";
import CarouselSlideView from "./sections/CorouselSlideSection";
import FeatureFlowSection from "./sections/FeatureFlowSection";
import RoadMapSection from "./sections/RoadmapSections";

interface Props {}

const Home: React.FC<Props> = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const isMounted = useIsMounted();
  const toast = useToast();

  useEffect(() => {
    if (isMounted) {
      const timeOut = setTimeout(() => {
        setIsLoaded(true);
      }, 2000);

      return () => clearTimeout(timeOut);
    }
  }, [isMounted, isLoaded]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    toast({
      title: "Copied to clipboard",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  if (isMounted && isLoaded) {
    return (
      <div className={`homepage-container ${SpringDisplay.className}`}>
        {/* / Set the background image}> */}
        {/* <div
          id="welcome"
          className="relative z-30"
        />
        <Image
          src={AppBackground}
          alt="home-bg"
          priority
          className="w-full absolute top-0 left-0 bg-cover bg-center bg-no-repeat"
        />
        <Image
          src={iconHome}
          alt="home-bg"
          priority
          className="w-[100px] absolute top-[600px] left-[660px] bg-cover bg-center bg-no-repeat"
        />
        <Flex
          className="welcome-container w-full relative mx-auto"
          cursor="pointer"
          w="100%"
          h={{ base: "auto", lg: "100vh" }} // Full screen height on larger screens
          bg={"transparent"}
          justifyContent="center" // Center horizontally
          alignItems="center" // Center vertically
          direction={"column"}
          zIndex={1} // Ensure it stacks properly with the navbar
          pt={{ base: "15vh", md: "8vh", lg: "15vh", xl: "35vh", "2xl": "35vh" }} // Dynamic top padding
          pb={{ base: "20vh", md: "12vh", lg: "25vh", xl: "35vh", "2xl": "35vh" }} // Dynamic bottom padding
        >
          <Flex
            direction="column"
            alignItems="center"
            textAlign="center"
            px={{ base: 4, lg: 0 }}
            w={{ base: "100%", lg: "auto" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: 'easeInOut', delay: 0.2 }} // Add a delay for staggered animation
              viewport={{ once: false, amount: 0.8 }}
            >
              <Box
                className={clsx(
                  'w-[320px] lg:w-[850px] text-4xl lg:text-8xl font-bold uppercase leading-tight',
                  SpringDisplay.className
                )}
              >
                <Text
                  fontSize={{ base: '4xl', lg: '8xl' }}
                  fontWeight="bold"
                  textTransform="uppercase"
                  lineHeight="short"
                  sx={{
                    background: 'linear-gradient(180deg, #FFFFFF 2.39%, rgba(255, 255, 255, 0.3) 91.52%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    display: 'inline', // Ensures text gradient works properly
                  }}
                >
                  Telegram <br /> Dex
                </Text>
              </Box>
            </motion.div>
          </Flex>
        </Flex> */}

        {/* <section
          id="welcome"
          className="relative flex flex-col items-center justify-center text-center min-h-screen bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: `url(/bg-2.svg)` }} // Set the background image
        > */}
        <HomeSection />
        {/* <TokenomicSection /> */}

        {/* <div id="feature">
          <FeatureFlowSection />
        </div> */}

        {/* <div
          className="flex flex-col items-center justify-center text-center min-h-screen bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: `url(/bg-2.svg)` }} // Set the background image
        > */}
        <div id="about" className="mt-10">
          <CarouselSection />
        </div>

        <div id="roadmap" className="" />
        <div>
          <RoadMapSection />
        </div>
        {/* </div> */}

        <div id="faq" className="h-20" />
        <div>
          <CarouselSlideView />
        </div>

        <div id="slide" className="-mt-24 relative z-30"></div>
        {/* <FAQSection /> */}
      </div>
    );
  } else {
    return (
      <div className="homepage-container">
        <YinLoader />
      </div>
    );
  }
};

export default Home;
