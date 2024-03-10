"use client";
import Link from "next/link";
import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import NavBar from "./NavBar";
import Image from "next/image";
import { HiOutlineXMark } from "react-icons/hi2";
import navData from "@/data/navData";
import { LuPlus } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:px-[3%] relative overflow-hidden">
      <div className="max-w-[1170px] mx-auto lg:px-10 md:px-36 bg-white">
        <div className="py-5 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <p className="text-gray-500 text-sm font-medium">
              <span className="text-primary-1">Offer</span> is going on till
              Friday, $2.99/mo.{" "}
            </p>
            <Link
              href="#"
              className="bg-blue w-6 h-6 rounded-full flex items-center justify-center text-white text-xl"
            >
              <MdKeyboardArrowRight />
            </Link>
          </div>
<<<<<<< HEAD
          <p className="text-secondary text-sm font-medium">
            Get Support:<Link href="#" className="text-primary hover:text-">+806 (000) 888 99</Link>
=======
          <p className="text-gray-500 text-sm font-medium">
            Get Support:
            <Link
              href="#"
              className="text-primary-1 hover:text-pink-500 transition-all duration-300"
            >
              +806 (000) 888 99
            </Link>
>>>>>>> b269093f513750a8dd08c09f2be62175a1435ec7
          </p>
        </div>
      </div>
      <div className="bg-no-repeat h-[100vh] lg:rounded-[35px]">
        <Image
          className="z-[-10] bg-cover absolute max-w-[94.3vw] lg:block hidden"
          src="/assets/images/home/hero-bg.png"
          width={5000}
          height={1000}
        />
        <Image
          className="z-[-10] bg-cover absolute lg:hidden block"
          src="/assets/images/home/hero-bg-max-lg.png"
          width={5000}
          height={1000}
        />
        <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
        <div
          className={`z-[1000] transition-all duration-300 ${
            isOpen
              ? "fixed h-[100vh] right-0 top-0 bottom-0"
              : "absolute top-0 bottom-0 -right-[120%]"
          }`}
        >
          <div className={`flex items-center justify-between`}>
            <div
              className={`w-[40vw] h-[100vh] bg-black opacity-50 transition-all duration-700 z-50`}
            ></div>
            <div
              className={`w-[60vw] h-[100vh] bg-dark overflow-y-auto text-white`}
            >
              <div className="relative p-12">
                <div
                  onClick={() => setIsOpen(!isOpen)}
                  className="w-12 h-12 text-4xl absolute top-0 right-0 bg-white flex items-center justify-center text-dark cursor-pointer"
                >
                  <HiOutlineXMark />
                </div>
                <Image
                  className="mx-auto"
                  src="/assets/images/home/logo-white.png"
                  width={140}
                  height={30}
                  quality={100}
                  alt="Logo"
                />
                <div className="flex flex-col">
                  {navData.map((item, index) => (
                    <Link
                      className={`border-low-dark py-[15px] font-medium flex items-center justify-between group ${
                        item?.path === "/contact" ? "" : "border-b"
                      }`}
                      href={item?.path}
                      key={index}
                    >
                      <span className="group-hover:text-[#FFA8B8]">
                        {item?.title}
                      </span>
                      {item?.path === "/contact" ? (
                        ""
                      ) : (
                        <div className="w-7 h-7 border border-gray-800 flex items-center justify-center text-xl cursor-pointer">
                          <LuPlus />
                        </div>
                      )}
                    </Link>
                  ))}
                </div>
                <div className="text-center mt-[70px]">
                  <h5 className="font-bold text-2xl">Instagram</h5>
                  <div className="grid grid-cols-4 gap-3 mt-5">
                    <Image
                      className="w-full h-full"
                      src="/assets/images/home/ins1.jpg"
                      width={400}
                      height={400}
                      alt="Instagram Image"
                    />
                    <Image
                      className="w-full h-full"
                      src="/assets/images/home/ins2.jpg"
                      width={400}
                      height={400}
                      alt="Instagram Image"
                    />
                    <Image
                      className="w-full h-full"
                      src="/assets/images/home/ins3.jpg"
                      width={400}
                      height={400}
                      alt="Instagram Image"
                    />
                    <Image
                      className="w-full h-full"
                      src="/assets/images/home/ins4.png"
                      width={400}
                      height={400}
                      alt="Instagram Image"
                    />
                  </div>
                  <h5 className="font-bold text-2xl mt-14">we are here</h5>
                  <p className="text-gray-400 mt-4 font-semibold">
                    uttara-12, Dhaka <br /> Bangladesh
                  </p>
                  <div className="flex items-center justify-center gap-4 mt-10">
                    <div className="p-4 text-xl rounded-xl flex items-center justify-center bg-white text-blue hover:text-white hover:bg-blue">
                      <FaXTwitter />
                    </div>
                    <div className="p-4 text-xl rounded-xl flex items-center justify-center bg-white text-blue hover:text-white hover:bg-blue">
                      <FaInstagram />
                    </div>
                    <div className="p-4 text-xl rounded-xl flex items-center justify-center bg-white text-blue hover:text-white hover:bg-blue">
                      <FaFacebookF />
                    </div>
                    <div className="p-4 text-xl rounded-xl flex items-center justify-center bg-white text-blue hover:text-white hover:bg-blue">
                      <FaLinkedinIn />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
