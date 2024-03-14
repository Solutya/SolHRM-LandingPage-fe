import HeaderTitle from "@/components/headerTitle/HeaderTitle";
import SectionWrapper from "@/components/wrapper's/SectionWrapper";
import { OurExcitingData } from "@/data/OurExcitingData";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdArrowForward } from "react-icons/md";
import bg from "../../../../public/assets/images/home/exciting-bg.png";

const OurExciting = () => {
  return (
    <div className="lg:mt-10 mt-6 bg-[url('/assets/images/home/exciting-bg.png')] bg-cover bg-center lg:h-[750px] md:h-[1100px] h-[1200px]">
      <SectionWrapper>
        <div className="text-center">
          <HeaderTitle
            title="Our Exciting Features"
            subTitle="More than 15,000 companies trust and choose Itech"
          />
        </div>
        <div className="mt-12 grid lg:grid-cols-3 md:grid-cols-2 gap-6">
          {OurExcitingData.map((item, index) => (
            <div
              className="p-10 rounded-2xl flex flex-col gap-8 border transition-all duration-300 hover:shadow-2xl z-40 group bg-white"
              key={index}
            >
              <Image
                className="group-hover:[transform:rotateY(180deg)] transition-all duration-500"
                src={item?.image}
                width={40}
                height={40}
                quality={100}
                alt="Exciting Image"
              />
              <h5 className="text-xl font-bold">{item?.title}</h5>
              <Link
                className="bg-[#7472ee1c] w-12 h-12 rounded-full flex items-center justify-center text-myBlue text-xl cursor-pointer"
                href={item?.path}
              >
                <MdArrowForward />
              </Link>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
};

export default OurExciting;
