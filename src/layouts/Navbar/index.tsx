"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button, useDisclosure, useMediaQuery } from "@chakra-ui/react";
import clsx from "clsx";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";

import PageTabs from "../PageTabs";
import { NavbarDrawer } from "./Drawer";

import { useIsMounted } from "@/hooks/useIsMounted";

import { plasma } from "@/utils/font";
import { socialsLink } from "@/constants/links";

// import denodeLogo from "@/assets/logo-denode.svg";
import AxovaLogo from "@/assets/Logo_AxovaPNG.png";

import "./style.css";

interface Props {}

// const contractAddress = "0x00FEeF969243D9faB0913b6e97a24DC6341a986B";
// const pairAddress = "";

const Navbar: React.FC<Props> = () => {
  const isMounted = useIsMounted();

  const {
    isOpen: isScroll,
    onOpen: onOpenScroll,
    onClose: onCloseScroll,
  } = useDisclosure();
  const {
    isOpen: isOpenDrawer,
    // onOpen: onOpenDrawer,
    onToggle: onToggleDrawer,
    onClose: onCloseDrawer,
  } = useDisclosure();

  // const router = useRouter()
  // const [isEqual640] = useMediaQuery("(min-width: 640px)");
  const [isEqual1024] = useMediaQuery("(min-width: 1024px)");

  useEffect(() => {
    if (isEqual1024) {
      onCloseDrawer();
    }
  }, [isEqual1024]);

  useEffect(() => {
    window?.addEventListener("scroll", handleScroll);
    return () => window?.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (e: Event) => {
    const { scrollY } = e.currentTarget as Window;
    if (scrollY > 160) {
      onOpenScroll();
    }
    if (scrollY === 0) {
      onCloseScroll();
    }
  };

  if (!isMounted) {
    return null;
  }

  return (
    // lg:border lg:border-white lg:rounded-full
    <div
      className={clsx(
        isScroll || isOpenDrawer ? "navbar-fixed" : "navbar-container",
        plasma.className,
        "bg-transparent lg:mx-auto"
      )}
    >
      <div className={clsx(isScroll ? "navbar-scroll" : "navbar")}>
        <div className="w-1/2 lg:w-1/4 flex items-center relative">
          <Link href="/" className="logo-container flex items-center">
            <Image
              src={AxovaLogo}
              alt="Axova logo"
              className="w-[40px]  xl:w-[80px] object-contain object-left"
            />
            <span className="ml-2 text-4xl font-bold text-white">Axova</span>
          </Link>
        </div>

        <PageTabs containterClass="hidden lg:flex" />

        {/* <div className={clsx("!hidden md:!flex justify-end w-2/5 lg:w-1/2")}>
          {isMounted && <ConnectWallet hideTestnetFaucet />}
        </div> */}

        <div className="w-1/2 lg:w-1/4 sm:flex justify-end font-semibold">
          <div className="w-full hidden sm:flex justify-end">
            <Link
              href="/"
              // target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className={`${plasma.className} w-[174px] text-white border-2 border-[#054dfd] bg-gradient-to-r from-[#054dfd] to-[#019ff0] rounded-lg shadow-md shadow-[#00000040] transition-all duration-300 ease-in-out hover:bg-transparent hover:text-[#019ff0] hover:border-[#019ff0] focus:outline-none focus:ring-2 focus:ring-[#019ff0] active:scale-95 active:bg-[#0260d7]`}
                variant={"outline"}
                size={"md"}
              >
                Access Terminal
              </Button>
            </Link>
          </div>

          <div className="w-auto text-end sm:ml-4 lg:hidden">
            <Link
              href={socialsLink.bot}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className={`${plasma.className} sm:hidden  text-white`}
                variant={"outline"}
                rounded="full"
                size={"md"}
                border={0}
                boxShadow={"0px 4px 4px 0px #00000040"}
                bgGradient="conic-gradient(from 270deg at 50% 50%,
                  rgba(71, 47, 140, 0.4) 0deg,
                  rgba(0, 0, 0, 0) 172.66deg,
                  #493582 281.25deg,
                  rgba(71, 47, 140, 0.4) 360deg)"
                _hover={{
                  bgGradient:
                    "conic-gradient(from 270deg at 50% 50%,rgba(71, 47, 140, 0.4) 0deg, rgba(0, 0, 0, 0) 172.66deg,#493582 281.25deg,rgba(71, 47, 140, 0.4) 360deg)", // Add hover effect for better UX
                }}
              >
                Axova Bot
              </Button>
            </Link>
            <Button
              onClick={onToggleDrawer}
              className={`nav-menu-btn ${
                isOpenDrawer
                  ? "animate-slideInRightFast"
                  : "animate-slideInBottomBasic"
              }`}
            >
              {isOpenDrawer ? (
                <CloseOutlined
                  className="font-extrabold text-red-500"
                  style={{ fontSize: "1.5em" }}
                />
              ) : (
                <MenuOutlined
                  className="font-extrabold text-white"
                  style={{ fontSize: "1.5em" }}
                />
              )}
            </Button>
          </div>
        </div>

        <NavbarDrawer isOpen={isOpenDrawer} onClose={onCloseDrawer} />
      </div>
    </div>
  );
};

export default Navbar;
