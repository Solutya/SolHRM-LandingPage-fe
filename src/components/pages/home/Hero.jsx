"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import NavBar from "./NavBar";
import Image from "next/image";
import { HiOutlineXMark } from "react-icons/hi2";
import navData from "@/data/navData";
import { LuPlus } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import HeroUnderline from "./HeroUnderline";
import { CiMail } from "react-icons/ci";
import BlueBtn from "@/components/btn's/BlueBtn";
import { motion } from "framer-motion";
import gsap from "gsap";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  let hero_bg = useRef(null);

  useEffect(() => {
      gsap.from(hero_bg.current, {
          opacity: 0,
          scale: 1.2,
          duration: 1.5
      });
      gsap.to(hero_bg.current, {
          opacity: 1,
          scale: 1,
          duration: 1.5
      })
  }, []);
  return (
    <div className="lg:px-[3%] relative overflow-hidden">
      <div className="max-w-[1170px] mx-auto lg:px-10 sm:px-[15%] px-[10%] bg-white max-md:hidden">
        <div className="py-5 flex items-center justify-between">
          <motion.div 
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 ,delay:0.5}}
          className="flex items-center gap-1">
            <p className="text-gray-500 text-sm font-medium">
              <span className="text-myDark">Offer</span> is going on till
              Friday, $2.99/mo.{" "}
            </p>
            <Link
              href="#"
              className="bg-myBlue w-6 h-6 rounded-full flex items-center justify-center text-white text-xl"
            >
              <MdKeyboardArrowRight />
            </Link>
          </motion.div>
          <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 ,delay:0.5 , ease:"linear"}}
          className=" text-myDark  text-sm font-medium">
            Get Support:
            <Link
              href="#"
              className="text-gray-500 hover:text-myPink transition-all duration-300"
            >
              +806 (000) 888 99
            </Link>
          </motion.p>
        </div>
      </div>
      <div
        // data-aos="zoom-out"
        // data-aos-duration="500"
        // data-aos-once="true"
        // useRef={hero_bg}
        className="lg:bg-[url('/assets/images/home/hero-bg.png')] bg-[url('/assets/images/home/hero-bg-max-lg.png')] bg-cover bg-center bg-no-repeat lg:rounded-[35px] lg:h-[900px] md:h-[650px] sm:h-[80vh] h-[90vh] "
      >
        <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
        
        <div
          className={`z-[1000] transition-all duration-1000 ${
            isOpen
              ? "fixed h-[100vh] right-0 top-0 bottom-0"
              : "absolute top-0 bottom-0 -right-[120%]"
          }`}
        >
          <div className={`flex items-center justify-between`}>
            <div
              className={`sm:w-[40vw] mobile:w-[30vw] xs:w-[20vw] w-[0vw] h-[100vh] bg-black opacity-50 transition-all duration-700 z-50`}
            ></div>
            <div
              className={`sm:w-[60vw] mobile:w-[70vw] xs:w-[80vw] w-[100vw] h-[100vh] bg-myDark overflow-y-auto text-white`}
            >
              <div className="relative p-12">
                <div
                  onClick={() => setIsOpen(!isOpen)}
                  className="w-12 h-12 text-4xl absolute top-0 right-0 bg-white flex items-center justify-center text-myDark cursor-pointer"
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
                      className={`border-low-myDark py-[15px] font-medium flex items-center justify-between group ${
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
                    <div className="p-4 text-xl rounded-xl flex items-center justify-center bg-white text-myBlue hover:text-white hover:bg-myBlue">
                      <FaXTwitter />
                    </div>
                    <div className="p-4 text-xl rounded-xl flex items-center justify-center bg-white text-myBlue hover:text-white hover:bg-myBlue">
                      <FaInstagram />
                    </div>
                    <div className="p-4 text-xl rounded-xl flex items-center justify-center bg-white text-myBlue hover:text-white hover:bg-myBlue">
                      <FaFacebookF />
                    </div>
                    <div className="p-4 text-xl rounded-xl flex items-center justify-center bg-white text-myBlue hover:text-white hover:bg-myBlue">
                      <FaLinkedinIn />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* hero section */}
        <div className="lg:mt-20 md:mt-12 mt-8 text-center">
          <h1
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
            data-aos-once="true"
            className="text-myDark lg:text-[80px] md:text-[60px] text-[36px] leading-tight font-bold"
          >
            The Leading Customer <br /> Data Platform
          </h1>
          <div className="mt-4">
            <HeroUnderline />
          </div>
          <div 
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
          data-aos-once="true"
          className="md:max-w-[630px] max-w-[500px] md:h-[60px] h-[50px] relative mx-auto md:mt-8 mt-5 max-md:flex flex-col items-center justify-center max-md:px-4">
            <input
              className="w-full h-full rounded-full px-[58px] outline-none"
              type="email"
              placeholder="Business email address"
            />
            <CiMail className="absolute md:top-[35%] top-[30%] text-xl md:left-7 left-9" />
            <div className="absolute md:right-2 md:top-[7px] max-md:mt-32">
              <BlueBtn>Get A Demo</BlueBtn>
            </div>
          </div>
          <p 
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="100"
          data-aos-once="true"
          className="text-sm md:mt-5 max-md:pt-24 text-gray-500">
            We are not going to save your data
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
