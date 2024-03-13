"use client";
import FAQs from "@/components/pages/prices/FAQs";
import TrustedBrands from "@/components/pages/prices/TrustedBrands";
import ComparePlanTable from "@/components/tables/ComparePlanTable";
import PricePlanTable1 from "@/components/tables/PricePlanTable1";
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
    <div className="pb-20 relative  ">
      {/* <Image src={'/assets/images/price/price-shape-1.png'} alt="shape-1" width={500} height={500} className="absolute w-full h-auto "></Image> */}

      <div className="bg-[#600ee4] bg-[url('/assets/images/price/price-shape-1.png'),_url('/assets/images/price/price-shape-1.png')]  bg-[bottom_center,_bottom_right] ">
        <div className=" min-h-[60vh] grid grid-cols-1 md:grid-cols-2 justify-between items-center p-10  mx-auto w-[80%]">
          <div className="text-white flex  text-center md:text-left flex-col width-[50%] ">
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
              <p className="text-[10px] font-bold leading-tight pt-2">
                SAVE 35%
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* TAB SWITCHING SECTION */}

      {/* PRICE  PLAN TABLE SECTION */}

      <PricePlanTable1 currentTab={currentTab} />

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
