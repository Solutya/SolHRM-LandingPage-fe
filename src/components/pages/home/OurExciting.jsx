import HeaderTitle from "@/components/headerTitle/HeaderTitle";
import SectionWrapper from "@/components/wrapper's/SectionWrapper";
import { OurExcitingData } from "@/data/OurExcitingData";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdArrowForward } from "react-icons/md";
import bg from "../../../../public/assets/images/home/exciting-bg.png";
import CircleBtn from "@/components/btn's/CircleBtn";

const OurExciting = () => {
  return (
    <div className="py-24 lg:mt-10 mt-6 bg-[url('/assets/images/home/exciting-bg.png')] bg-contain bg-bottom bg-no-repeat lg:h-[750px] md:h-[1100px] h-[1200px]">
      <SectionWrapper>
        <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true"
        className="text-center">
          <HeaderTitle
            title="Our Exciting Features"
            subTitle="More than 15,000 companies trust and choose Itech"
          />
        </div>
        <div className="mt-12 grid lg:grid-cols-3 md:grid-cols-2 gap-6 pb-6">
          {OurExcitingData.map((item, index) => (
            <div
            data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="50"
          data-aos-once="true"
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
             <CircleBtn/>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
};

export default OurExciting;
