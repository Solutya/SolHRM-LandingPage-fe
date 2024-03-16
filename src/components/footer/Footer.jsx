"use client";
import React, { useState } from "react";
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

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <footer className="lg:rounded-3xl lg:mx-10 bg-myDark px-[2%] ">
      <div className="text-white space-y-10  mt-10 lg:mt-20 xl:w-[1180px] mx-auto p-[1%] pt-[50px] px-[6%] md:px-[0] ">
        {/* Footer top */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-0 items-center  ">
          <div>
            <h3 className="text-xl">
              Get Our Latest's News <br /> & Updates
            </h3>
          </div>
          <div className="relative text-black bg-white px-2 flex justify-between items-center rounded-full ">
            <div className="flex flex-1 pl-4 items-center">
              <CiMail className="text-2xl" />
              <input
                type="text"
                className="p-6 rounded-full w-full shadow-sm sm:text-sm focus:outline-none "
              />
            </div>
            <div className="">
              <CircleBtn />
            </div>
          </div>
          {/* <div className="relative w-[500px] h-[70px]">
          <input
            className="absolute top-0 left-0 w-full h-full bg-white outline-none rounded-full px-8"
            type="email"
            placeholder="Bussiness email address"
          />
          <div className="absolute right-3 top-[10%]">
            <CircleBtn />
          </div>
        </div> */}
        </div>
        <hr className="w-[90%] mx-auto border-[#cfcfcf2a]" />
        {/* Footer middle */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between xl:space-x-4 space-y-10">
          <div className="space-y-4">
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
              <Link href="">
                <div className=" p-2  border-[1px] border-opacity-50 rounded-full hover:bg-myBlue hover:border-myBlue transition duration-500 opacity-55 hover:opacity-100 hover:scale-110">
                  <TiSocialFacebook className="text-xl" />
                </div>
              </Link>
              <Link href="">
                <div className=" p-2  border-[1px] border-opacity-50 rounded-full hover:bg-myBlue hover:border-myBlue transition duration-500 opacity-55 hover:opacity-100 hover:scale-110">
                  <TiSocialTwitter className="text-xl" />
                </div>
              </Link>
              <Link href="">
                <div className=" p-2  border-[1px] border-opacity-50 rounded-full hover:bg-myBlue hover:border-myBlue transition duration-500 opacity-55 hover:opacity-100 hover:scale-110">
                  <FaLinkedinIn className="text-xl" />
                </div>
              </Link>
              <Link href="">
                <div className=" p-2  border-[1px] border-opacity-50 rounded-full hover:bg-myBlue hover:border-myBlue transition duration-500 opacity-55 hover:opacity-100 hover:scale-110">
                  <FaInstagram className="text-xl" />
                </div>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg capitalize pb-6">What we do</h3>
            <div className="text-gray-500 flex flex-col gap-4 font-semibold">
              {footerData.dataOne.map((item, i) => (
                <Link
                  href={item.path}
                  className="transition duration-200 hover:text-white hover:translate-x-1"
                >
                  <p key={i}>{item.title}</p>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg capitalize pb-6">Other Pages</h3>
            <div className="text-gray-500 flex flex-col gap-4 font-semibold">
              {footerData.dataTwo.map((item, i) => (
                <Link href={item.path}>
                  <p
                    key={i}
                    className="transition duration-200 hover:text-white hover:translate-x-1"
                  >
                    {item.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg capitalize pb-6">Contact Us</h3>
            <div className="text-gray-500 flex flex-col gap-4 font-semibold">
              {footerData.dataThree.map((item, i) => (
                <div className="flex gap-4">
                  <p key={i}>{item.icon}</p>
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
        <div className="w-full p-2 pr-9 cursor-pointer" onClick={()=>setIsOpen(!isOpen)}>
          <p>English (US)</p>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <IoIosArrowDropupCircle className="text-2xl" />
        </div>
      </div>
      <div className={`absolute bottom-full mt-[calc(-100% - 5px)] right-0 w-full bg-white rounded-xl text-myDark p-2  ${isOpen? "block":"hidden"}`}>
        <p className="p-2 hover:bg-myBlue hover:text-white rounded-lg cursor-pointer">Bengali</p>
        <p className="p-2 hover:bg-myBlue hover:text-white rounded-lg cursor-pointer">Arabic</p>
        <p className="p-2 hover:bg-myBlue hover:text-white rounded-lg cursor-pointer">Hindi</p>
        <p className="p-2 hover:bg-myBlue hover:text-white rounded-lg cursor-pointer">Spanish</p>
      </div>
    </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
