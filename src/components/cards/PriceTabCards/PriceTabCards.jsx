"use client";
import price_data from "@/data/price-data";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const PriceTabCards = () => {
  const [currentTab, setCurrentTab] = useState("monthly");

  //   handling the tabs from monthly to yearly
  const handleTab = (selectedTab) => {
    setCurrentTab(selectedTab);
  };
  return (
    <div className="py-20">

        {/* TAB SWITCHING SECTION */}

      <div className="rounded-full relative uppercase w-fit mx-auto grid grid-cols-2 text-center shadow-md bg-white p-2 ">
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
        <div className="absolute bottom-full mt-[calc(-100% - 5px)] -right-20 text-center rounded-full bg-gradient-to-br from-fuchsia-500 to-myBlue text-white w-12 h-12">
          <p className="text-xs font-bold leading-tight pt-2">SAVE 35%</p>
        </div>
      </div>

      
        {/* PRICE CARD SECTION */}

        <div className="flex flex-wrap xl:w-[1180px]"> 
                  {price_data.filter(item=> item.category === currentTab ).map((item, i) => (
                  <div key={i} className="col-xl-4 col-lg-4 col-md-6 mb-30">
                    <div className={`tp-price__item ${item.cls} p-relative`}>
                      <div className="tp-price__icon">
                        <Image src={item.img} alt="theme-pure" />
                      </div>
                      <div className="tp-price__title-box">
                        <h4 className="tp-price__title-sm">{item.title}</h4>
                        <p>{item.desctiption}</p>
                      </div>
                      <div className="tp-price__feature">
                        <ul>
                          {item.price_feature?.map((list, i) => (
                            <li key={i} className={list.cls}>
                              <span>{list.icon}</span>
                              {list.list}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="tp-price__btn tp-btn-price">
                        <span>Price: {item.price}</span>
                        <Link href="/price">
                          Purchase Now <i className="fal fa-arrow-right"></i>
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
