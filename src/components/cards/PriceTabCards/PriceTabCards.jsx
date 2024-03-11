"use client";
import price_data from "@/data/price-data";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { GoArrowRight } from "react-icons/go";


const PriceTabCards = () => {
  const [currentTab, setCurrentTab] = useState("monthly");

  //   handling the tabs from monthly to yearly
  const handleTab = (selectedTab) => {
    setCurrentTab(selectedTab);
  };
  return (
    <div className="py-20">

        {/* TAB SWITCHING SECTION */}

      <div className="rounded-full relative uppercase w-fit mx-auto grid grid-cols-2 text-center shadow-md bg-white p-1 ">
        <span
          className={`font-black text-[14px] p-3 rounded-full cursor-pointer z-20 ${
            currentTab === "monthly"
              ? "text-white "
              : ""
          } `}
          onClick={() => handleTab("monthly")}
        >
          monthly
        </span>
        <span
          className={`font-black text-[14px] p-3 rounded-full cursor-pointer text-center z-20 ${
            currentTab === "yearly"
              ? "text-white"
              : ""
          } `}
          onClick={() => handleTab("yearly")}
        >
          yearly
        </span>
        <div className={`bg-myBlue w-[48%] text-white transition duration-300 ease-in-out rounded-full absolute z-10 h-[75%] top-2 left-1  ${(currentTab==="yearly")?" translate-x-[100%]":""}`}>

        </div>
        <div className="absolute hidden sm:block bottom-full mt-[calc(-100% - 5px)] -right-20 text-center rounded-full bg-gradient-to-br from-fuchsia-500 to-myBlue text-white w-12 h-12">
          <p className="text-xs font-bold leading-tight pt-2">SAVE 35%</p>
        </div>
      </div>

      
        {/* PRICE CARD SECTION */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 xl:w-[1160px] pt-10 items-center justify-center "> 
                  {price_data.filter(item=> item.category === currentTab ).map((item, i) => (
                  <div key={i} className=" mb-30 w-full md:w-fit max-w-80 mx-auto h-full">
                    <div className={` ${item.cls} bg-white rounded-3xl px-[30px] py-[25px] md:px-[60px] md:py-[50px] lg:px-[35px] lg:py-[28px] space-y-4 h-full flex flex-col justify-between `}>
                      <div className="tp-price__icon">
                        <Image src={item.img} alt="plan logo" width={55} height={60} />
                      </div>
                      <div className="space-y-2 pb-6 border-b-[1px] ">
                        <h4 className="text-[22px] font-bold">{item.title}</h4>
                        <p className="text-sm text-gray-500">{item.desctiption}</p>
                      </div>
                      <div className="py-4">
                        <ul className="space-y-4">
                          {item.price_feature?.map((list, i) => (
                            <li key={i} className={`${list.cls} flex items-center gap-4` }>
                              <span className="inline-flex text-myBlue ">{list.icon}</span>
                              <span className="font-semibold text-sm">

                              {list.list}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      {/* Purchase button */}
                      <div className="relative  mx-auto text-center rounded-full p-3 bg-[#5956e914] font-semibold text-sm w-full">
                        <span className="  text-myBlue  cursor-pointer">Price: ${item.price}</span>
                        <Link href="" className="absolute bg-black text-white 
                        w-full rounded-full  top-0 py-3 left-0 -translate-x-10 transition opacity-0 duration-500 hover:opacity-100 hover:translate-x-0" >
                          Purchase Now <GoArrowRight className="inline text-xl ml-2 "/> 
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
                </div>
    </div>
  );
};

export default PriceTabCards;
