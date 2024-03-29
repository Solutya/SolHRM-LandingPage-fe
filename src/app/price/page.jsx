"use client";
import SideNavbar from "@/components/SideNavbar/SideNavbar";
import EmailJsForm from "@/components/forms/EmailJsForm";
import EmailModal from "@/components/modals/EmailModal";
import NavBar from "@/components/pages/home/NavBar";
import FAQs from "@/components/pages/prices/FAQs";
import TrustedBrands from "@/components/pages/prices/TrustedBrands";
import ComparePlanTable from "@/components/tables/ComparePlanTable";
import PricePlanTable1 from "@/components/tables/PricePlanTable1";
import SectionWrapper from "@/components/wrapper's/SectionWrapper";
import React, { useState } from "react";

const Price = () => {
  const [currentTab, setCurrentTab] = useState("monthly");
  const [isOpen, setIsOpen] = useState(false);
  //   handling the tabs from monthly to yearly
  const handleTab = (selectedTab) => {
    setCurrentTab(selectedTab);
  };
  return (
    <div className="pb-20 relative  ">
      <div className="bg-[#600ee4]  bg-[url('/assets/images/price/price-shape-1.png'),_url('/assets/images/price/price-shape-1.png')]  bg-[bottom_center,_bottom_right]">
        {/* Navbar Components Start */}
        <div className="overflow-hidden relative">
          <NavBar isOpen={isOpen} setIsOpen={setIsOpen} isWhite={true} />
        </div>
        <div>
          <SideNavbar isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
        {/* Navbar Components Ends */}

        {/* Price Banner Section Starts */}
        <SectionWrapper>
        <div className=" md:min-h-[60vh] my-auto flex flex-col md:flex-row gap-6 md:justify-between items-center py-10 ">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
            className="text-white flex  text-center md:text-left flex-col width-[50%] "
          >
            <h2 className="lg:text-[56px] text-4xl pb-6 font-bold">
              Pricing plans
            </h2>
            <p>Clear, affordable plans for every team and requirement.</p>
          </div>
          {/* TAB SWITCHING SECTION STARTS*/}
          <div
            // data-aos="fade-up"
            // data-aos-duration="1000"
            // data-aos-delay="50"
            // data-aos-once="true"
            className="rounded-full relative uppercase w-fit mr-[8%] grid grid-cols-2 text-center shadow-md bg-white p-1 h-fit"
          >
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
          {/* TAB SWITCHING SECTION ENDS*/}
        </div>
        </SectionWrapper>
        {/* Price Banner Section Ends */}
      </div>

      {/* PRICE  PLAN TABLE SECTION */}
      <div>
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
