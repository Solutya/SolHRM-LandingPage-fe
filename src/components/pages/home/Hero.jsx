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
import SideNavbar from "@/components/SideNavbar/SideNavbar";
import EmailJsForm from "@/components/forms/EmailJsForm";

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
              <span className="text-myDark">Offer</span> is going on .
              <Link href="price">
            
                <span className="font-bold animate-text-color-change animation duration-2000 infinite">
                  Purchase now!
                </span>
              </Link>
            </p>
            <Link
              href="price"
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
              +880 9611-656-145
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
            width={2550}
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
        <div>
          <SideNavbar isOpen={isOpen} setIsOpen={setIsOpen} />
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
          {/* Email For Demo Section Starts */}
          <div className="relative z-20">
            <EmailJsForm />
          </div>
          {/* Email For Demo Section Ends */}
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
        <div className="hidden xl:block z-0 absolute bottom-20 xl:left-[10px] 2xl:left-[10%] ">
          <Image
            className="animate-updown -z-10"
            src="/assets/images/home/hero-shape-1.png"
            width={119}
            height={116}
            quality={100}
            alt="animated hero image 1"
          />
        </div>
        <div className="hidden z-0  xl:block absolute bottom-14 xl:right-[10px] 2xl:right-[10%] ">
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
