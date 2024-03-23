"use client";
import WhiteBtn from "@/components/btn's/WhiteBtn";
import navData from "@/data/navData";
import Image from "next/image";
import Link from "next/link";
import { Link as RLink, animateScroll as scroll } from "react-scroll";
import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { LuUser2 } from "react-icons/lu";
import { HiBars3 } from "react-icons/hi2";
import { motion } from "framer-motion";

//  PROPS: 3 Props are  provide (isOpen, setIsOpen mandatory) , isWhite is for other pages where background is darker.
const NavBar = ({ isOpen, setIsOpen, isWhite }) => {
  const [isNavFixed, setIsNavFixed] = useState(false);
  // console.log(isNavFixed);
  useEffect(() => {
    console.log(window.scrollY);

    const handleScroll = () => {
      if (window.scrollY >= 200) {
        setIsNavFixed(true);
      } else {
        setIsNavFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isNavFixed]);

  return (
    <div
      className={`${
        isNavFixed
          ? "fixed top-0 left-0 right-0  bg-white border-b transition-all duration-300 "
          : " z-[1000] relative transition duration-300  "
      } ${!isNavFixed && isWhite ? "text-white z-[1000]" : "z-[1000]"}`}
    >
      <div className="max-w-[1180px] mx-auto xl:px-4 lg:px-[6%]  sm:px-[6%]  px-[10%]  max-md:bg-white w-full ">
        <div className="flex items-center justify-between  py-5 font-medium text-dark">
          <div className="flex items-center xl:gap-16 lg:gap-6 sm:gap-9 gap-0">
            {/* Logo change on isWhite props */}
            <Link href="/">
              {!isNavFixed && isWhite ? (
                <>
                <Image
                  src="/assets/images/logo/solhrmForDark.png"
                  width={160}
                  height={60}
                  quality={100}
                  alt="Logo"
                  className="w-32 hidden md:block"
                />
                <Image
                  src="/assets/images/logo/solhrm.png"
                  width={160}
                  height={60}
                  quality={100}
                  alt="Logo"
                  className="w-32 md:hidden"
                />
                </>
              ) : (
                <Image
                  src="/assets/images/logo/solhrm.png"
                  width={160}
                  height={60}
                  quality={100}
                  alt="Logo"
                  className="w-32 "
                />
              )}
            </Link>
            <div className="flex items-center xl:gap-8 gap-7 lg:text-[15px] ml-6">
              {navData.map((item, index) => (
                <RLink
                  className={`hover:text-[#6865FF] lg:block hidden cursor-pointer  ${
                    isWhite ? "lg:hidden" : ""
                  }`}
                  to={`${item?.path}`}
                  key={index}
                  spy={true}
                  activeClass="active-link"
                  offset={-50}
                  duration={1500}
                >
                  {item.title}
                </RLink>
              ))}
            </div>
          </div>
          <div className="flex items-center xl:gap-7 gap-4">
            {/* <BiSearch className="text-2xl cursor-pointer max-md:hidden" />
            <div className="w-[1px] h-[27px] bg-myDark max-lg:hidden"></div> */}
            <div className="lg:block hidden">
              <Link
                href="#"
                className="flex items-center gap-1 hover:text-[#6865FF]"
              >
                <LuUser2 className="text-lg" />
                Log In
              </Link>
            </div>
            <WhiteBtn component="nav" />
            <div className="max-lg:block hidden">
              <div
                onClick={() => setIsOpen(!isOpen)}
                className="bg-white w-11 h-11 rounded-full flex items-center justify-center text-2xl border z-20 text-myDark hover:bg-myBlue hover:text-white transition duration-300 cursor-pointer "
              >
                <HiBars3 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
