"use client"
import React, { useState } from "react";
import HeaderTitle from "../../headerTitle/HeaderTitle";
import BlueBtn from "@/components/btn's/BlueBtn";
import { GoNoEntry, GoPlusCircle } from "react-icons/go";
import Image from "next/image";
import SectionWrapper from "@/components/wrapper's/SectionWrapper";

const FAQs = () => {
  const accordianDataset = [
    {
      id: "0",

      titleWriting: "Why choose SolHRM?",
      imgsideWriting: "Day 1",
      accordianContent:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you ",
    },
    {
      id: "1",

      imgsideWriting: "Day  2 - 4",
      titleWriting: "Do I need to change Banks?",
      accordianContent:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you ",
    },
    {
      id: "2",

      imgsideWriting: "Day 5",
      titleWriting: "How can i order packages?",
      accordianContent:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.",
    },
    {
      id: "3",

      imgsideWriting: "Day 5",
      titleWriting: "How do i offer volume discount?",
      accordianContent:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.",
    },
  ];
  const [isAccordianClosed, setIsAccordianClosed] = useState(null);
  const setTheAccordianToOpen = (id) => {
    if (isAccordianClosed === id) {
      return setIsAccordianClosed(null);
    } else setIsAccordianClosed(id);
  };
  return (
    <SectionWrapper>
    <div className="flex flex-col lg:flex-row justify-center items-center">
      <div className="space-y-4 bg-yellow- pl-4 md:py-6 py-28 mobile:py-16 relative flex-1">
        <p className="uppercase bg-[#f6f5fa] text-myBlue text-sm font-semibold rounded-full p-2 px-4 w-fit ">
          SUPPORT
        </p>
        <HeaderTitle
          title={
            <>
              Frequently <br />
              Asked Questions
            </>
          }
          subTitle={
            <>The most frequently asked questions from our clents are here</>
          }
        />
        <div className="pt-3 relative w-full ">
          <div className="w-fit">

          <BlueBtn>Get In Touch</BlueBtn>
          </div>
          <Image src={'/assets/images/faq/faq-1.png'} alt="faq-bg" width={210} height={240} className="absolute hidden lg:block top-0 right-10 " />
        </div>
      
        
      </div>
      <div className="relative  h-[600px] md:h-auto lg:col-span-2 xl:col-span-1 lg:ml-20 flex-1 ">
        {/* Faqs starts */}
        <div className="mb-[58px] ">
          {accordianDataset.map((accordian, index) => (
            <div className="mt-[15px] rounded-xl   px-6 py-2 " key={accordian.id}>
              <div
                className=" flex justify-between pb-2 cursor-pointer"
                onClick={() => setTheAccordianToOpen(accordian.id)}
              >
                <div className="font-medium text-[18px] lg:text-[22px]  ">
                  <h1>{accordian.titleWriting}</h1>
                </div>
                <div className="flex items-center justify-center">
                  {isAccordianClosed === accordian.id ? (
                    <div className=" text-2xl text-gray-600 font-bold ">
                      <GoNoEntry />
                    </div>
                  ) : (
                    <div className="text-2xl text-gray-600 font-bold ">
                      <GoPlusCircle />
                    </div>
                  )}
                </div>
              </div>
              <hr />
              <div
                className={`w-full overflow-hidden transition-max-height  duration-500 ease-in-out ${
                  isAccordianClosed === accordian.id
                    ? "max-h-[1000px] px-10 shadow-xl p-4 rounded-xl "
                    : " max-h-0 px-10"
                }`}
              >
                <div className="mt-[15px]">{accordian.accordianContent}</div>
                <div className="mt-[45px] w-full flex xsm:flex-wrap lg:flex-nowrap justify-around items-center"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </SectionWrapper>
  );
};

export default FAQs;
