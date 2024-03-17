import BlueBtn from "@/components/btn's/BlueBtn";
import HeaderTitle from "@/components/headerTitle/HeaderTitle";
import SectionWrapper from "@/components/wrapper's/SectionWrapper";
import Image from "next/image";
import React from "react";
import { IoIosCheckmark } from "react-icons/io";

const Offer = () => {
  return (
    <SectionWrapper>
      <div className="text-myDark  grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 ">
        <div 
        // data-aos="fade-right"
        // data-aos-duration="800"
        // data-aos-once="true"
        className=" relative bg-center bg-no-repeat ">
          <Image
            className="w-full lg:w-[80%] mx-auto pt-[200px] sm:pt-10"
            src="/assets/images/home/offer-bg.png"
            width={525}
            height={482}
            quality={100}
            alt="Offer"
            priority={true}
          />
           <Image
            className="hidden sm:block absolute bottom-0 "
            src="/assets/images/home/offer4.png"
            width={150}
            height={170}
            quality={100}
            alt="Offer"
          />
          <Image
            className="hidden sm:block animate-leftRight absolute shadow-2xl rounded-3xl top-0 left-5"
            src="/assets/images/home/offer1.jpg"
            width={231}
            height={192}
            quality={100}
            alt="Offer"
          />
          <Image
            className="animate-zoomInOut absolute shadow-2xl rounded-3xl top-[50%] sm:top-20  sm:left-[120px]"
            src="/assets/images/home/offer2.jpg"
            width={365}
            height={265}
            quality={100}
            alt="Offer"
           
          />
          <Image
            className="hidden sm:block animate-updown absolute shadow-2xl rounded-3xl bottom-8 left-[220px] "
            src="/assets/images/home/offer3.jpg"
            width={204}
            height={215}
            quality={100}
            alt="Offer"
           
          />
         
        </div>
        <div
         data-aos="fade-left"
         data-aos-duration="800"
         data-aos-once="true"
        className="max-lg:mt-12 flex-1">
          <button className="bg-[#7472ee1c] px-4 py-1 flex items-center justify-center rounded-full text-sm text-myBlue font-medium cursor-text">
            OVER 150K+ CLIENT
          </button>
          <div className="mt-6">
            <h1 className="lg:text-[50px] text-[40px] leading-none font-bold">
              We Offer Real Time Data Solutions
            </h1>
            <p className="text-gray-500 md:text-xl  md:mt-6 mt-4">
              Excepteur sint occaecat cupidatat officia non proident sunt in
              culpa qui deserunt.!
            </p>
            <div className="flex flex-col gap-6 xl:mt-8 mt-5">
              <div className="flex items-center gap-3 font-medium">
                <div className="w-5 h-5 flex items-center justify-center text-white bg-myPink rounded-full text-xl">
                  <IoIosCheckmark />
                </div>
                Various analysis options.
              </div>
              <div className="flex items-center gap-3 font-medium">
                <div className="w-5 h-5 flex items-center justify-center text-white bg-myPink rounded-full text-xl">
                  <IoIosCheckmark />
                </div>
                Page Load (time, size, number of requests).
              </div>
              <div className="flex items-center gap-3 font-medium">
                <div className="w-5 h-5 flex items-center justify-center text-white bg-myPink rounded-full text-xl">
                  <IoIosCheckmark />
                </div>
                Big data analysis.
              </div>
            </div>
          </div>
          <div className="md:mt-12 mt-8 w-fit ">
            <BlueBtn>About Us</BlueBtn>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Offer;