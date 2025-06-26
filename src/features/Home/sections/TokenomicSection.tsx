import Image from "next/image";
import React from "react";
import vechainLogo from "@/assets/vechain-logo.svg";
import binanceBusdLogo from "@/assets/binance-busd-logo.svg";
import solanaLogo from "@/assets/solana-logo.svg";
import bitcoinLogo from "@/assets/bitcoin-logo.svg";
import ftxTokenLogo from "@/assets/ftx-token-logo.svg";

interface GridItemProps {
  src: string;
  alt: string;
}

const TokenomicSection = () => {
  const gridItems: GridItemProps[] = [
    { src: vechainLogo, alt: "Vechain" },
    { src: binanceBusdLogo, alt: "Binance BUSD" },
    { src: solanaLogo, alt: "Solana" },
    { src: bitcoinLogo, alt: "Bitcoin" },
    { src: ftxTokenLogo, alt: "FTX Token" },
  ];

  return (
    <Image
      src="/mascot-1.svg"
      alt={"mascot"}
      width={64}
      height={64}
      className="w-full h-[564px] mx-auto"
    />
  );
};

export default TokenomicSection;
