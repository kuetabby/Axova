import Image from 'next/image';
import React from 'react'
import vechainLogo from '@/assets/vechain-logo.svg';
import binanceBusdLogo from '@/assets/binance-busd-logo.svg';
import solanaLogo from '@/assets/solana-logo.svg';
import bitcoinLogo from '@/assets/bitcoin-logo.svg';
import ftxTokenLogo from '@/assets/ftx-token-logo.svg';


interface GridItemProps {
    src: string;
    alt: string;
}

const TokenomicSection = () => {
    const gridItems: GridItemProps[] = [
        { src: vechainLogo, alt: 'Vechain' },
        { src: binanceBusdLogo, alt: 'Binance BUSD' },
        { src: solanaLogo, alt: 'Solana' },
        { src: bitcoinLogo, alt: 'Bitcoin' },
        { src: ftxTokenLogo, alt: 'FTX Token' },
    ];

    return (
        <section className="relative flex flex-col items-center justify-center text-center bg-cover bg-no-repeat bg-center">
            <div className="flex justify-center items-center py-6">
                <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 gap-12 md:gap-8 items-center justify-center">
                    {gridItems.map((item, index) => (
                        <div key={index} className="flex justify-center">
                            <Image
                                src={item.src}
                                alt={item.alt}
                                width={64}
                                height={64}
                                className="opacity-50 hover:opacity-100 transition-opacity duration-300 ease-in-out"
                            />
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}

export default TokenomicSection