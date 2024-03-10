"use client";
import WhiteBtn from "@/components/btn's/WhiteBtn";
import navData from "@/data/navData";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { LuUser2 } from "react-icons/lu";
import { HiBars3 } from "react-icons/hi2";

const NavBar = ({ isOpen,setIsOpen }) => {
  const [isNavFixed, setIsNavFixed] = useState(false);

  useEffect(() => {
    console.log(window.scrollY);
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsNavFixed(true);
      } else {
        setIsNavFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        isNavFixed
          ? "fixed top-0 left-0 right-0 z-50 bg-white border-b transition-all duration-300"
          : ""
      } `}
    >
      <div className="max-w-[1170px] mx-auto xl:px-0 lg:px-10 md:px-36">
        <div className="flex items-center justify-between py-5 font-medium text-dark">
          <div className="flex items-center xl:gap-11 gap-9">
            <Link href="/">
              <Image
                src="/assets/images/home/logo-black.png"
                width={130}
                height={50}
                quality={100}
                alt="Logo"
              />
            </Link>
            <div className="flex items-center xl:gap-10 gap-8">
              {navData.map((item, index) => (
                <Link
                  className="hover:text-[#6865FF] lg:block hidden"
                  href={`/${item?.path}`}
                  key={index}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center xl:gap-7 gap-4">
            <BiSearch className="text-2xl cursor-pointer" />
            <div className="w-[1px] h-[27px] bg-dark lg:block hidden"></div>
            <div className="lg:block hidden">
              <Link
                href="#"
                className="flex items-center gap-1 hover:text-[#6865FF]"
              >
                <LuUser2 className="text-lg" />
                Log In
              </Link>
            </div>
            <WhiteBtn />
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="bg-white w-11 h-11 rounded-full flex items-center justify-center text-2xl border"
            >
              <HiBars3 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
