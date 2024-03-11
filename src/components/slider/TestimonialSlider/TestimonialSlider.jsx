"use client";
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import testimonial_data from "@/data/testimonial-data";
import testimonial_svg from "@/data/testimonial_svg";
import Link from "next/link";
import Image from "next/image";
import { MdArrowForward } from "react-icons/md";
const tp_setting = {
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  speed: 500,
  arrows: false,
  fade: false,
  
};

const brands_setting = {
  slidesToShow: 5,
  slidesToScroll: 1,
  dots: false,
  arrows: false,
  focusOnSelect: true,
  centerPadding: "0",
  centerMode: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        slidesToShow: 1,
      },
    },
  ],
};
const TestimonialSlider = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  const sliderRef = useRef(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);
  return (
    <div className="slider-container pt-20 px-2">
      {/* <Slider asNavFor={nav2} ref={slider => (sliderRef1 = slider)}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
      <h4>Second Slider</h4>
      <Slider
        asNavFor={nav1}
        ref={slider => (sliderRef2 = slider)}
        slidesToShow={3}
        swipeToSlide={true}
        focusOnSelect={true}
      >
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider> */}

      <Slider
        asNavFor={slider2}
        // ref={sliderRef}
        ref={(slider) => setSlider1(slider)}
        {...tp_setting}
        className="rounded-3xl lg:w-[90%] xl:w-[65%] mx-auto mainSlick "
        data-wow-duration=".9s"
        data-wow-delay=".5s"
      >
        {testimonial_data.slice(0, 12).map((item, i) => (
          <div key={i} className="h-full   ">
            <div className="flex flex-col lg:flex-row h-full w-full shadow-md rounded-3xl ">
              <div className="lg:w-[65%] h-auto">
                <div className="bg-myBlue text-white h-full p-6 md:p-10 rounded-3xl  rounded-br-none shadow-md ">
                  <div className="">
                    <Image src={item?.img} alt="brand-logo" className="py-4" />
                  </div>
                  <div className="text-left md:text-[24px] font-semibold  ">
                    <p>{item.description} </p>
                  </div>
                  <div className="flex flex-col text-left pt-10 gap-1 ">
                    <span className="font-bold">{item.name}</span>
                    <span className="text-sm font-light">{item.title}</span>
                  </div>
                </div>
              </div>
              <div className="lg:w-[35%] gap-6 md:gap-0 p-6 md:p-10 h-auto flex justify-between flex-col">
                <div className="text-left md:text-[60px] text-5xl font-bold space-y-6">
                  <span>{item.count}%</span>
                  <p className="md:text-[18px] text-base font-medium text-[#5f6368]">
                    {item.sub_des}
                  </p>
                </div>
                <div className="pt-4 ">
                  <Link
                    href="#"
                    className="flex items-center text-myBlue font-semibold"
                  >
                    Read Case Study
                    <MdArrowForward className="text-xl" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <Slider
        asNavFor={slider1}
        ref={(slider) => setSlider2(slider)}
        {...brands_setting}
        className="md:w-[60%]  mx-auto  pt-20 brand-slider"
      >
        {testimonial_svg.map((item, i) => (
          <div key={i} className=" mx-auto">
            <div className="cursor-pointer w-fit mx-auto">{item?.svg_img}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;
