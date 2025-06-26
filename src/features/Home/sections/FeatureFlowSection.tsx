"use client";

import React from "react";
import { FaLightbulb, FaCog, FaRocket, FaLayerGroup } from "react-icons/fa";
import { PiStarFourFill } from "react-icons/pi";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureFlowSection: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center justify-center px-4 py-12">
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-4">
        AI Bot in your pocket
      </h2>
      {/* <p className="text-xl sm:text-2xl md:text-3xl text-gray-400 text-center mb-20">
        consectetur.
      </p> */}

      {/* Central Icon with Ring Effect */}
      <div className="relative mb-12 sm:mb-15 flex items-center justify-center">
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
          <div className="absolute inset-0 w-full h-full rounded-full border-4 border-primary animate-pulse" />
          <div className="absolute inset-0 w-full h-full rounded-full border-2 border-[#019ff0]" />
          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-b from-[#054dfd] to-[#019ff0] border-2 border-[#054dfd] rounded-full flex items-center justify-center shadow-md">
            <FaLayerGroup className="text-white text-2xl sm:text-3xl" />
          </div>
        </div>
      </div>

      {/* Lines and Cards */}
      <div className="relative w-full max-w-6xl mx-auto flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-10 md:gap-16 flex-wrap">
        {/* Feature Cards */}
        <FeatureItemCard
          icon={<FaLightbulb className="text-white text-3xl" />}
          title="Decentralized AI"
          description="Access secure, scalable, and real-time data insights powered by AI, built on Solana."
        />
        <FeatureItemCard
          icon={<FaRocket className="text-white text-3xl" />}
          title="AI-Driven Intelligence"
          description="Use advanced AI algorithms to unlock the true potential of your data, turning it into actionable insights."
        />
        <FeatureItemCard
          icon={<FaCog className="text-white text-3xl" />}
          title="Real-Time Insights"
          description="Make informed decisions quickly with real-time AI-powered data processing."
        />
      </div>
    </div>
  );
};

export default FeatureFlowSection;

const FeatureItemCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="relative flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
      {/* Icon with outer circle */}
      <div className="relative z-10 flex items-center justify-center mb-4">
        <div className="absolute -top-4 flex items-center justify-center">
          <div className="w-16 h-16 bg-gradient-to-b from-[#054dfd] to-[#019ff0] border-2 border-[#019ff0] rounded-full flex items-center justify-center shadow-lg">
            {icon}
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div
        className="relative space-y-4 z-0 mt-8 border border-violet-200 text-white rounded-lg shadow-lg p-6 w-full max-w-xs text-center h-[300px]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(5, 77, 253, 0.1), rgba(5, 77, 253, 0.3), rgba(139, 92, 246, 0.2))",
        }}
      >
        <div className="flex flex-row justify-between items-center">
          <PiStarFourFill size={12} />
          <PiStarFourFill size={12} />
        </div>
        <h3 className="text-xl mb-3">{title}</h3>
        <p className="text-sm font-light text-gray-300">{description}</p>
      </div>
    </div>
  );
};
