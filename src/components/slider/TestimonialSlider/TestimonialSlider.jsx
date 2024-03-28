"use client";
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonial_data from "@/data/testimonial-data";
import Image from "next/image";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import testimonial_img from "@/data/testimonial_svg";



const tp_setting = {
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 3000,
  infinite: true,
  pauseOnHover: true,
  arrows: false,
  fade: false,
};

const brands_setting = {
  slidesToShow: 5,
  slidesToScroll: 1,
  dots: false,
  pauseOnHover: true,
  arrows: false,
  focusOnSelect: true,
  centerPadding: "0",
  centerMode: true,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1024,
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
      <Slider
        asNavFor={slider2}
        // ref={sliderRef}
        ref={(slider) => setSlider1(slider)}
        {...tp_setting}
        className="rounded-3xl sm:w-[510px] md:w-[690px] lg:w-[90%] xl:w-[65%] 2xl:w-[50%] mx-auto mainSlick h-full "
        data-wow-duration=".9s"
        data-wow-delay=".5s"
      >
        {testimonial_data.map((item, i) => (
          <div key={i} className="h-full   ">
            <div className="flex flex-col lg:flex-row h-full w-full shadow-xl rounded-3xl mb-10">
              <div className="lg:w-[65%] h-auto">
                <div className="bg-myBlue text-white h-full p-6 md:p-10 rounded-3xl  rounded-br-none shadow-md 2xl:p-16">
                  <div className="rounded-xl  w-fit">
                    <Image src={item?.img} alt="brand-logo" className="py-4 rounded-xl" width={140} height={120} />
                  </div>
                  <div className="text-left md:text-[24px] font-semibold  ">
                    <p className="line-clamp-3">{item.description} </p>
                  </div>
                  <div className="flex flex-col text-left pt-10 gap-1 ">
                    <span className="font-bold">{item.name}</span>
                    <span className="text-sm font-light">{item.title}</span>
                  </div>
                </div>
              </div>
              <div className="lg:w-[35%] gap-6 md:gap-0 p-6 md:p-10 h-auto flex justify-between flex-col">
                <div className="text-left md:text-[40px] text-5xl font-bold space-y-6">
                <p className="">
                    Rating
                  </p>   
                <div className=" text-sm">
                            <Rating style={{ maxWidth: 150 }} value={item.rating} 
                          //  itemStyles={myStyles}
                            readOnly  />
                          </div>
                  <p className="md:text-[18px] text-base font-medium text-[#5f6368]">
                    {item.sub_des}
                  </p>
                </div>
                <div className="pt-4 ">
                  {/* <Link
                    href="#"
                    className=" flex items-center text-myBlue font-semibold"
                  >
                    Read Case Study
                    <MdArrowForward className="text-xl" />
                  </Link> */}
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
        className="md:w-[60%] xl:w-[50%]  mx-auto  pt-10 brand-slider mt-10"
      >
        {testimonial_img.map((item, i) => (
          <div key={i} className="mx-auto flex justify-center items-center   h-full">
            <div className="cursor-pointer w-[120px]   flex mx-auto">
              <Image src={item?.img_url} width={150} height={120} alt="testimonial brands" className="rounded-xl"/>
             
              </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;
