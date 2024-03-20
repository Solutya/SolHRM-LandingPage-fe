"use client";
import Link from "next/link";
import { Link as RLink, animateScroll as scroll } from "react-scroll";
import React, { useState } from "react";
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
import { motion, useIsomorphicLayoutEffect } from "framer-motion";
import gsap from "gsap";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  // bg scaling on scrolling

  // useIsomorphicLayoutEffect(() => {
  //   gsap.set(".gsap-bg", { scaleX: 1.0 });
  //   let mm = gsap.matchMedia();
  //   mm.add("(min-width:1400px)", () => {
  //     gsap.to(".gsap-bg", {
  //       scrollTrigger: {
  //         trigger: ".gsap-bg",
  //         scrub: 0.02,
  //         start: "top top",
  //         end: "bottom ",
  //       },
  //       scaleX: 1.1,
  //       borderRadius: "30px",
  //       transformOrigin: "center center",
  //       ease: "none",
  //     });
  //   });
  // }, []);
  return (
    <div className="lg:px-[3%] relative overflow-hidden">
      <div className="max-w-[1170px] mx-auto lg:px-10 sm:px-[15%] px-[10%] bg-white max-md:hidden">
        <div className="py-5 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center gap-1"
          >
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
            transition={{ duration: 0.3, delay: 0.5, ease: "linear" }}
            className=" text-myDark  text-sm font-medium"
          >
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
        // data-aos-duration="1000"
        // data-aos-once="true"
        // useRef={hero_bg}

        //linear-gradient(180.21deg,#fff9f9 -64.58%,hsla(0,0%,100%,.1) 115.31%),linear-gradient(90deg,#ffc368,#d569e1 50%,#4164e1)

        className="  bg-cover   bg-no-repeat lg:rounded-[35px] lg:h-[900px] md:h-[650px] sm:h-[80vh] h-[90vh] min-h-[700px] gsap-bg relative bg-gradient-to-r from-[#ffc36879] via-[#d569e185] to-[#4164e18a] "
      >
        <div class="absolute lg:hidden lg:mx-auto lg:-inset-x-[3%] -bottom-0 -inset-x-16 transform ">
          <Image
            className="mx-auto lg:hidden "
            src="/assets/images/home/hero-frame.png"
            width={1920}
            height={30}
            quality={100}
            alt="Logo"
          />
        </div>
        <div class="absolute lg:w-fit lg:mx-auto lg:-inset-x-[3.3%] -bottom-0 -inset-x-16 transform ">
          <Image
            className="mx-auto "
            src="/assets/images/home/hero-frame-lg.png"
            width={1920}
            height={30}
            quality={100}
            alt="Logo"
          />
        </div>
        <div class="absolute top-2/3 z-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full  bg-cover">
          <Image
            className=" opacity-70"
            src="/assets/images/home/hero-line-shape.png"
            width={1920}
            height={800}
            quality={100}
            alt="Logo"
          />
        </div>
        <div class="absolute top-[90px] md:top-0  transform left-0    bg-contain  z-0 ">
          <Image
            className="mx-auto opacity-50"
            src="/assets/images/home/hero-line-shape-2.png"
            width={1920}
            height={30}
            quality={100}
            alt="Logo"
          />
        </div>
        <div className="z-[1000]">
          <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>

        <div
          className={`z-[1000] transition-all duration-1000  ${
            isOpen
              ? "fixed h-[100vh] right-0 top-0 bottom-0"
              : "fixed min-h-screen top-0 bottom-0 -right-[120%]"
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
                  className="w-12 h-12 text-4xl absolute top-0 right-0 bg-[#6865ff] mr-6 mt-6 rounded-full flex items-center justify-center text-white cursor-pointer font-bold"
                >
                  <HiOutlineXMark />
                </div>
                <Image
                  className="mx-auto pb-10"
                  src="/assets/images/logo/solhrmForDark.png"
                  width={140}
                  height={30}
                  quality={100}
                  alt="Logo"
                />
                <div className="flex flex-col">
                  {navData.map((item, index) => (
                    <RLink
                      className={`border-low-myDark py-[15px] font-medium flex items-center justify-between group ${
                        item?.path === "/contact" ? "" : "border-b"
                      }`}
                      to={item?.path}
                      key={index}
                    >
                      <span className="group-hover:text-myBlue">
                        {item?.title}
                      </span>

                      <div className="w-7 h-7 border border-gray-800 flex items-center justify-center text-xl cursor-pointer">
                        <LuPlus />
                      </div>
                    </RLink>
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
                    Imagine Osman Center, Sonargaon Janapath Road, Sector# 12,
                    Uttara, Dhaka-1230, Bangladesh
                  </p>
                  <div className="flex gap-2 items-center justify-center">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.332 1C14.332 1 17.2651 1.26664 20.9981 4.99966C24.7311 8.73267 24.9978 11.6658 24.9978 11.6658"
                        stroke="#FF3C82"
                        strokeWidth="2"
                        troke-linecap="round"
                      />
                      <path
                        d="M14.6079 5.71289C14.6079 5.71289 15.9277 6.08998 17.9075 8.06971C19.8872 10.0494 20.2643 11.3693 20.2643 11.3693"
                        stroke="#FF3C82"
                        strokeWidth="2"
                        troke-linecap="round"
                      />
                      <path
                        opacity="0.5"
                        d="M9.04943 5.42369L9.91471 6.97413C10.6956 8.37332 10.3821 10.2088 9.15225 11.4387C9.15225 11.4387 9.15225 11.4387 9.15225 11.4387C9.15213 11.4388 7.66057 12.9306 10.3652 15.6352C13.0692 18.3392 14.561 16.849 14.5618 16.8482C14.5618 16.8482 14.5618 16.8482 14.5618 16.8482C15.7917 15.6183 17.6271 15.3049 19.0263 16.0857L20.5768 16.951C22.6896 18.1301 22.9391 21.0931 21.082 22.9502C19.9661 24.0661 18.599 24.9344 17.0878 24.9917C14.5439 25.0882 10.2236 24.4443 5.88985 20.1106C1.55612 15.7769 0.912294 11.4566 1.00873 8.91261C1.06602 7.40143 1.93432 6.03439 3.05023 4.91848C4.90734 3.06137 7.87031 3.31089 9.04943 5.42369Z"
                        stroke="#FF3C82"
                        strokeWidth="2"
                        troke-linecap="round"
                      />
                    </svg>
                    <p className="text-gray-400 mt-4 font-semibold">
                    +880 9611-656-145 
                    </p>
                  </div>
                  <div className="flex items-center justify-center gap-4 mt-10 pb-10">
                    <div className="p-4 text-xl rounded-xl flex items-center justify-center bg-white text-myBlue hover:text-white hover:bg-myBlue">
                      <Link
                        href={"https://twitter.com/SolutyaI"}
                        target="__blank"
                      >
                        <FaXTwitter />
                      </Link>
                    </div>
                    <div className="p-4 text-xl rounded-xl flex items-center justify-center bg-white text-myBlue hover:text-white hover:bg-myBlue">
                      <Link
                        href={"https://www.instagram.com/solutyapvtltd/"}
                        target="__blank"
                      >
                        <FaInstagram />
                      </Link>
                    </div>
                    <div className="p-4 text-xl rounded-xl flex items-center justify-center bg-white text-myBlue hover:text-white hover:bg-myBlue">
                      <Link
                        href={"https://www.facebook.com/Solutya"}
                        target="__blank"
                      >
                        <FaFacebookF />
                      </Link>
                    </div>
                    <div className="p-4 text-xl rounded-xl flex items-center justify-center bg-white text-myBlue hover:text-white hover:bg-myBlue">
                      <Link
                        href={"https://www.linkedin.com/company/solutya"}
                        target="__blank"
                      >
                        <FaLinkedinIn />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* hero section */}
        <div className="lg:mt-20 md:mt-12 mt-8 text-center z-20">
          <h1
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
            data-aos-once="true"
            className="text-myDark 2xl:text-[70px] lg:text-[60px] md:text-[50px] text-[36px] leading-tight font-bold capitalize"
          >
            Connecting Minds, Empowering <br />{" "}
            <span className="text-myBlue">HR</span> journey with{" "}
            <span className="text-myBlue">SOLHRM</span>
          </h1>
          <div className="mt-4 hidden md:block">
            <HeroUnderline />
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
            data-aos-once="true"
            className="md:max-w-[630px] max-w-[500px] md:h-[60px] h-[50px] relative mx-auto md:mt-8 mt-5 max-md:flex flex-col items-center justify-center max-md:px-4"
          >
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
            className="text-sm md:mt-5 max-md:pt-24 text-gray-500"
          >
            We are not going to save your data
          </p>
        </div>
        {/* animated images */}
        <div className="hidden xl:block absolute bottom-20 xl:left-[10px] 2xl:left-[10%] z-10">
          <Image
            className="animate-updown"
            src="/assets/images/home/hero-shape-1.png"
            width={119}
            height={116}
            quality={100}
            alt="animated hero image 1"
          />
        </div>
        <div className="hidden  xl:block absolute bottom-14 xl:right-[10px] 2xl:right-[10%] z-10">
          <Image
            className="animate-updownReverse"
            src="/assets/images/home/hero-shape-2.png"
            width={140}
            height={140}
            quality={100}
            alt="animated hero image 1"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
