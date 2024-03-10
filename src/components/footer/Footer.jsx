import React from "react";
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

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="lg:rounded-3xl lg:mx-10 bg-myDark text-white space-y-10 p-[5%] mt-10 lg:mt-20">
      {/* Footer top */}
      <div className="grid grid-cols-2 items-center ">
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
      <div>
        <div className="space-y-4">
          <Image
            src={"/assets/images/home/logo-white.png"}
            width={135}
            height={40}
            alt="logo-white-footer"
          />
          <p>
            Our highly skilled development teams <br />
            specialized in data analysis.
          </p>
          <div className="flex gap-2">
            <Link href="">
              <div className=" p-2  border rounded-full hover:bg-myBlue hover:border-myBlue transition duration-500 opacity-75 hover:opacity-100 hover:scale-110">
                <TiSocialFacebook className="text-2xl" />
              </div>
            </Link>
            <Link href="">
              <div className=" p-2  border rounded-full hover:bg-myBlue hover:border-myBlue transition duration-500 opacity-75 hover:opacity-100 hover:scale-110">
                <TiSocialTwitter className="text-2xl" />
              </div>
            </Link>
            <Link href="">
              <div className=" p-2  border rounded-full hover:bg-myBlue hover:border-myBlue transition duration-500 opacity-75 hover:opacity-100 hover:scale-110">
                <FaLinkedinIn className="text-2xl" />
              </div>
            </Link>
            <Link href="">
              <div className=" p-2  border rounded-full hover:bg-myBlue hover:border-myBlue transition duration-500 opacity-75 hover:opacity-100 hover:scale-110">
                <FaInstagram className="text-2xl" />
              </div>
            </Link>
          </div>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <hr className=" border-[#cfcfcf2a]" />
      {/* Footer bottom */}
      <div className="flex justify-between items-center">
        <p>&copy; Design By | SolHRM – {currentYear}</p>
        <div className="relative bg-[#7a7a7a48] rounded-full">
          <select
            name="HeadlineAct"
            id="HeadlineAct"
            className="mt-1.5 w-full rounded-full sm:text-sm outline-none p-1 mb-2 px-4 bg-transparent appearance-none mr-6"
          >
            <option value="en" className="text-gray-800">
              English (US)
            </option>
            <option value="bn" className="text-gray-800">
              Bengali
            </option>
            <option value="sp" className="text-gray-800">
              Spanish
            </option>
            <option value="ar" className="text-gray-800">
              Arabic
            </option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <IoIosArrowDropupCircle className="text-2xl" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
