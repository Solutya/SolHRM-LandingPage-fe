import BlueBtn from "@/components/btn's/BlueBtn";
import HeaderTitle from "@/components/headerTitle/HeaderTitle";
import SectionWrapper from "@/components/wrapper's/SectionWrapper";
import Image from "next/image";
import React from "react";
import { IoIosCheckmark } from "react-icons/io";

const Offer = () => {
  return (
    <SectionWrapper>
      <div className="py-24 grid lg:grid-cols-2 gap-x-20 text-myDark">
        <div className="bg-[url('/assets/images/home/offer-bg.png')] bg-cover bg-center bg-no-repeat md:h-[450px] h-[300px] relative">
          <Image
            className="shadow-2xl rounded-2xl absolute top-12 max-md:hidden block animate-leftRight"
            src="/assets/images/home/offer1.jpg"
            width={250}
            height={250}
            quality={100}
            alt="Offer"
            layout="fixed" 
          />
          <Image
            className="shadow-2xl rounded-2xl absolute md:top-24 top-6 lg:right-0 md:right-[230px] animate-zoomInOut"
            src="/assets/images/home/offer2.jpg"
            width={350}
            height={350}
            quality={100}
            alt="Offer"
           
          />
          <Image
            className="shadow-2xl rounded-2xl absolute bottom-0 lg:right-[60px] right-[200px] max-md:hidden block animate-updown"
            src="/assets/images/home/offer3.jpg"
            width={210}
            height={210}
            quality={100}
            alt="Offer"
            layout="fixed" 
          />
          <Image
            className="rounded-2xl absolute -bottom-12 left-0 z-10 max-md:hidden block"
            src="/assets/images/home/offer4.png"
            width={180}
            height={180}
            quality={100}
            alt="Offer"
          />
        </div>
        <div className="max-lg:mt-12">
          <button className="bg-[#7472ee1c] px-4 py-1 flex items-center justify-center rounded-full text-sm text-myBlue font-medium cursor-text">
            OVER 150K+ CLIENT
          </button>
          <div className="mt-6">
            <h1 className="lg:text-[50px] text-[40px] leading-none font-bold">
              We Offer Real Time Data Solutions
            </h1>
            <p className="text-gray-500 md:text-xl = md:mt-6 mt-4">
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