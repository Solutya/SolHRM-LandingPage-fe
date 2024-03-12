"use client";
import FAQs from "@/components/pages/prices/FAQs";
import TrustedBrands from "@/components/pages/prices/TrustedBrands";
import price_data from "@/data/price-data";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { GoArrowRight } from "react-icons/go";

const Price = () => {
  const [currentTab, setCurrentTab] = useState("monthly");

  //   handling the tabs from monthly to yearly
  const handleTab = (selectedTab) => {
    setCurrentTab(selectedTab);
  };
  return (
    <div className="pb-20">
      <div className="bg-purple-700  min-h-[60vh] grid grid-cols-1 md:grid-cols-2 justify-center items-center p-10 ">
        <div className="text-white flex  text-center md:text-left flex-col width-[50%]">
          <h2 className="md:text-[56px] text-4xl pb-6 font-bold">
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
            <p className="text-[10px] font-bold leading-tight pt-2">SAVE 35%</p>
          </div>
        </div>
      </div>
      {/* TAB SWITCHING SECTION */}

      {/* PRICE CARD SECTION */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6  pt-10 items-center justify-center  bg-white border rounded-3xl w-[80%] mx-auto shadow-md md:-mt-14 lg:-mt-24 p-6">
        {price_data
          .filter((item) => item.category === currentTab)
          .map((item, i) => (
            <div key={i} className="even:bg-slate-100 p-6 rounded-3xl h-full  ">
              <div
                className={` ${item.cls} justify-center flex flex-col items-center text-center  `}
              >
                {/* <div className="">
                  <Image
                    src={item.img}
                    alt="plan logo"
                    width={55}
                    height={60}
                  />
                </div> */}
                <div className="space-y-2 pb-6 border-b-[1px] ">
                  <h4 className=" font-bold">{item.title}</h4>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
                {/* Purchase button */}
                <div className="flex flex-col items-center justify-center gap-4 w-fit">
                  {item.price === "" ? (
                    <span className="  text-myBlue   text-2xl font-bold">
                      Customized
                    </span>
                  ) : (
                    <span className="  text-myBlue text-2xl font-bold">
                      ৳ {Number(item.price).toLocaleString()}
                    </span>
                  )}
                  <Link
                    href="/price"
                    className=" bg-myDark text-white 
                        w-full rounded-full  top-0 py-3 left-0  transition px-3 text-sm  duration-300 hover:bg-myBlue hover:shadow-xl shadow-md font-semibold"
                  >
                    Purchase Now
                    <GoArrowRight className="inline text-xl ml-2 " />
                  </Link>
                </div>
                <div className="py-4">
                  <ul className="space-y-4">
                    {item.price_feature?.map((list, i) => (
                      <li key={i} className={`${list.cls} flex  gap-4`}>
                        <span className="inline-flex text-myBlue mt-1">
                          {list.icon}
                        </span>
                        <span className="font-semibold text-sm">
                          {list.list}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
      </div>
      {/* Trusted by Thousands Business
Section */}
      <div>
        <TrustedBrands/>
      </div>
      <div>
        <FAQs/>
      </div>
    </div>
  );
};

export default Price;
