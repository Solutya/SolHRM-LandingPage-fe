"use client";
import NavBar from "@/components/pages/home/NavBar";
import FAQs from "@/components/pages/prices/FAQs";
import TrustedBrands from "@/components/pages/prices/TrustedBrands";
import ComparePlanTable from "@/components/tables/ComparePlanTable";
import PricePlanTable1 from "@/components/tables/PricePlanTable1";
import navData from "@/data/navData";
import price_data from "@/data/price-data";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";
import { HiOutlineXMark } from "react-icons/hi2";
import { LuPlus } from "react-icons/lu";

const Price = () => {
  const [currentTab, setCurrentTab] = useState("monthly");
  const [isOpen, setIsOpen] = useState(false);
  //   handling the tabs from monthly to yearly
  const handleTab = (selectedTab) => {
    setCurrentTab(selectedTab);
  };
  return (
    <div className="pb-20 relative  ">
    
    

      <div className="bg-[#600ee4] bg-[url('/assets/images/price/price-shape-1.png'),_url('/assets/images/price/price-shape-1.png')]  bg-[bottom_center,_bottom_right] ">
         {/* Navbar components Start */}
      <div className="overflow-hidden relative">
        <NavBar isOpen={isOpen} setIsOpen={setIsOpen}  isWhite={true}/>
        <div
          className={`z-[1000] transition-all duration-300 ${
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
      </div>
      {/* Navbar components Ends */}
        <div className=" min-h-[60vh] grid grid-cols-1 md:grid-cols-2 justify-between items-center p-10  mx-auto w-[80%]">
          <div className="text-white flex  text-center md:text-left flex-col width-[50%] ">
            <h2 className="lg:text-[56px] text-4xl pb-6 font-bold">
              Pricing plans
            </h2>
            <p>Clear, affordable plans for every team and requirement.</p>
          </div>
          <div className="rounded-full relative uppercase w-fit mx-auto grid grid-cols-2 text-center shadow-md bg-white p-1 h-fit ">
            <span
              className={`font-black text-[14px] p-3 rounded-full cursor-pointer z-20 ${
                currentTab === "monthly" ? "text-white " : ""
              } `}
              onClick={() => handleTab("monthly")}
            >
              monthly
            </span>
            <span
              className={`font-black text-[14px] p-3 rounded-full cursor-pointer text-center z-20 ${
                currentTab === "yearly" ? "text-white" : ""
              } `}
              onClick={() => handleTab("yearly")}
            >
              yearly
            </span>
            <div
              className={`bg-myBlue w-[48%] text-white transition duration-300 ease-in-out rounded-full absolute z-10 h-[75%] top-2 left-1  ${
                currentTab === "yearly" ? " translate-x-[100%]" : ""
              }`}
            ></div>
            <div className="absolute hidden sm:block bottom-full -top-3 -right-[66px] z-0 price-shape-line">
              <svg
                width="80"
                height="42"
                viewBox="0 0 80 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M78.5938 8.78059C59.0829 45.2801 2.05127 -8.72021 27.0652 32.28C52.079 73.2801 48.5771 -41.2195 0.550438 18.7821"
                  stroke="#FF3C82"
                  strokeDasharray="3 3"
                />
              </svg>
            </div>
            <div className="absolute hidden sm:block bottom-full mt-[calc(-100% - 5px)] -right-24 text-center rounded-full bg-gradient-to-br from-fuchsia-200 via-myBlue to-myBlue text-white w-10 h-10">
              <p className="text-[10px] font-bold leading-tight pt-2">
                SAVE 35%
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* TAB SWITCHING SECTION */}

      {/* PRICE  PLAN TABLE SECTION */}
      <div className="">
        <PricePlanTable1 currentTab={currentTab} />
      </div>

      <div>
        <ComparePlanTable />
      </div>
      <div>
        <TrustedBrands />
      </div>
      <div>
        <FAQs />
      </div>
    </div>
  );
};

export default Price;
