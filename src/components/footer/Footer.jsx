"use client";
import React, { useEffect, useState } from "react";
import CircleBtn from "../btn's/CircleBtn";
import { CiMail } from "react-icons/ci";
import Image from "next/image";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import Link from "next/link";
import { IoMailOutline } from "react-icons/io5";
import { IoIosArrowDropupCircle } from "react-icons/io";
import footerData from "@/data/footerData";
import { motion, useAnimation, useIsomorphicLayoutEffect } from "framer-motion";
import { gsap } from "gsap";
import SectionWrapper from "@/components/wrapper's/SectionWrapper";
import EmailJsForm from "../forms/EmailJsForm";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isOpen, setIsOpen] = useState(false);

  // this transition is for myDark background
  useIsomorphicLayoutEffect(() => {
    gsap.set(".tp-gsap-bg", { scale: 0.98 });
    let mm = gsap.matchMedia();
    mm.add("(min-width:1400px)", () => {
      gsap.to(".tp-gsap-bg", {
        scrollTrigger: {
          trigger: ".tp-gsap-bg",
          scrub: 0.02,
          start: "top bottom",
          end: "bottom bottom",
        },
        scale: 0.95,
        borderRadius: "30px",
        zIndex: 10,
        transformOrigin: "center center",
        ease: "none",
      });
    });
  }, []);

  // This is for the text designs so that they dont change their scale
  useIsomorphicLayoutEffect(() => {
    gsap.set(".tp-gsap-bg2", { scale: 1 });
    let mm = gsap.matchMedia();
    mm.add("(min-width:1400px)", () => {
      gsap.to(".tp-gsap-bg2", {
        scrollTrigger: {
          trigger: ".tp-gsap-bg2",
          scrub: 0.02,
          start: "top bottom",
          end: "bottom bottom",
        },
        scale: 1,
        borderRadius: "30px",
        zIndex: 10,
        transformOrigin: "center center",
        ease: "none",
      });
    });
  }, []);

  return (
    <footer className="lg:rounded-3xl lg:mb-10  bg-myDark tp-gsap-bg px-[2%] md:px-0 ">
      <div className="text-white space-y-10  mt-10 lg:mt-20  mx-auto p-[1%] pt-[50px] px-[6%] md:px-0 tp-gsap-bg2 max-w-[1230px]">
        {/* Footer top */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-0 items-center   ">
          <div>
            <h3
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-once="true"
              className="text-xl"
            >
              Get Our Latest's News <br /> & Updates
            </h3>
          </div>
          {/* demo email input from starts */}
          {/* <div
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
            data-aos-once="true"
            className="relative :w-[90%]"
          >
            <input
              className="w-full  h-16 rounded-full px-16 text-myDark outline-myBlue "
              type="email"
            />
            <CiMail className="absolute md:top-[35%] top-6 text-xl md:left-7 left-6 text-black" />
            <div className="absolute md:right-2 top-1 right-2 ">
              <CircleBtn />
            </div>
          </div> */}
          <div>

          <EmailJsForm/>
          </div>
          {/* demo email input from ends */}
        </div>
        <hr
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-once="true"
          className="w-[90%] mx-auto border-[#cfcfcf2a]"
        />
        {/* Footer middle */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between xl:space-x-4 xl:space-y-0 space-y-10">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
            className="space-y-4"
          >
            <Image
              src={"/assets/images/logo/solhrmForDark.png"}
              width={180}
              height={80}
              alt="logo-white-footer"
            />
            <p className="text-sm leading-relaxed">
              Our highly skilled development teams <br />
              specialized in data analysis.
            </p>
            <div className="flex gap-2">
              <Link href={"https://www.facebook.com/Solutya"} target="__blank">
                <div className=" p-2  border-[1px] border-opacity-50 rounded-full hover:bg-myBlue hover:border-myBlue transition duration-500 opacity-55 hover:opacity-100 hover:scale-110">
                  <TiSocialFacebook className="text-xl" />
                </div>
              </Link>
              <Link href={"https://twitter.com/SolutyaI"} target="__blank">
                <div className=" p-2  border-[1px] border-opacity-50 rounded-full hover:bg-myBlue hover:border-myBlue transition duration-500 opacity-55 hover:opacity-100 hover:scale-110">
                  <TiSocialTwitter className="text-xl" />
                </div>
              </Link>
              <Link
                href={"https://www.linkedin.com/company/solutya"}
                target="__blank"
              >
                <div className=" p-2  border-[1px] border-opacity-50 rounded-full hover:bg-myBlue hover:border-myBlue transition duration-500 opacity-55 hover:opacity-100 hover:scale-110">
                  <FaLinkedinIn className="text-xl" />
                </div>
              </Link>
              <Link
                href={"https://www.instagram.com/solutyapvtltd/"}
                target="__blank"
              >
                <div className=" p-2  border-[1px] border-opacity-50 rounded-full hover:bg-myBlue hover:border-myBlue transition duration-500 opacity-55 hover:opacity-100 hover:scale-110">
                  <FaInstagram className="text-xl" />
                </div>
              </Link>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="50"
            data-aos-once="true"
          >
            <h3 className="font-bold text-lg capitalize pb-6">What we do</h3>
            <div className="text-[#f5f5fa99] flex flex-col gap-4 font-[500]">
              {footerData.dataOne.map((item, i) => (
                <Link
                  key={i}
                  href={item.path}
                  className="transition duration-200 hover:text-white hover:translate-x-1"
                >
                  <p key={i}>{item.title}</p>
                </Link>
              ))}
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="80"
            data-aos-once="true"
          >
            <h3 className="font-bold text-lg capitalize pb-6">Other Pages</h3>
            <div className="text-[#f5f5fa99] flex flex-col gap-4 font-[500]">
              {footerData.dataTwo.map((item, i) => (
                <Link key={i} href={item.path}>
                  <p className="transition duration-200 hover:text-white hover:translate-x-1">
                    {item.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1400"
            data-aos-delay="120"
            data-aos-once="true"
          >
            <h3 className="font-bold text-lg capitalize pb-6">Contact Us</h3>
            <div className="text-gray-500 flex flex-col gap-4 font-semibold">
              {footerData.dataThree.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <p>{item.icon}</p>
                  <p className="transition duration-200 text-white hover:translate-x-1">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <hr className=" border-[#cfcfcf2a]" />
        {/* Footer bottom */}
        <div className="flex justify-between items-center text-xs md:text-base pb-4 flex-wrap gap-6">
          <p className="">
            Copyright &copy; {currentYear}
            <Link
              href={"https://solutya.com/"}
              target="__blank"
              className="font-bold text-myBlue hover:scale-110"
            >
              {" "}
              Solutya Pvt. Ltd
            </Link>{" "}
            . All Rights Reserved.
          </p>
          <div className="relative">
            <div className="relative bg-[#7a7a7a48] rounded-full">
              <div
                className="w-full p-2 pr-9 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              >
                <p>English (US)</p>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <IoIosArrowDropupCircle className="text-2xl" />
              </div>
            </div>
            <div
              className={`absolute bottom-full mt-[calc(-100% - 5px)] right-0 w-full bg-white rounded-xl text-myDark p-2  ${
                isOpen ? "block" : "hidden"
              }`}
            >
              <p className="p-2 hover:bg-myBlue hover:text-white rounded-lg cursor-pointer">
                Bengali
              </p>
              <p className="p-2 hover:bg-myBlue hover:text-white rounded-lg cursor-pointer">
                Arabic
              </p>
              <p className="p-2 hover:bg-myBlue hover:text-white rounded-lg cursor-pointer">
                Hindi
              </p>
              <p className="p-2 hover:bg-myBlue hover:text-white rounded-lg cursor-pointer">
                Spanish
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
