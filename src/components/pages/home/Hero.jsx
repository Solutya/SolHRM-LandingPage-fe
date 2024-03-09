import SectionWrapper from "@/components/wrapper's/SectionWrapper";
import Link from "next/link";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const Hero = () => {
  return (
    <div className="px-[3%]">
      <SectionWrapper>
        <div className="py-6 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <p className="text-secondary text-sm font-medium">
              <span className="text-primary">Offer</span> is going on till
              Friday, $2.99/mo.{" "}
            </p>
            <Link
              href="#"
              className="bg-primary w-6 h-6 rounded-full flex items-center justify-center text-white text-xl"
            >
              <MdKeyboardArrowRight />
            </Link>
          </div>
          <p className="text-secondary text-sm font-medium">
            Get Support:<Link className="text-primary hover:text-">+806 (000) 888 99</Link>
          </p>
        </div>
      </SectionWrapper>
      <div className="bg-[url('/assets/images/home/hero-bg.png')] bg-no-repeat h-[100vh]"></div>
    </div>
  );
};

export default Hero;
