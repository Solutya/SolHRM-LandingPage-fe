"use client";
import { project_data } from "@/data/project-data";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
// import Swiper from "swiper";
// import { Autoplay, Navigation, Scrollbar } from 'swiper';
import { Autoplay, Navigation, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "./ProjectSlider.css";
import CircleBtn from "../../btn's/CircleBtn";
const setting = {
  loop: true,
  autoplay: {
    delay: 10000,
  },
  slidesPerView: 2,
  centeredSlides: true,
  spaceBetween: 30,
  breakpoints: {
    1200: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 1,
    },
    0: {
      slidesPerView: 1,
    },
  },

  scrollbar: {
    clickable: true,
  },
};

const ProjectSlider = () => {
  const [isDragged, setIsDragged] = useState(false);

  const handleSlideChange = () => {
    setIsDragged(true);
  };

  const handleTransitionEnd = () => {
    setIsDragged(false);
  };
  return (
    <div>
      <div className="">
        <div className="px-10 xl:px-0">
          <Swiper
            {...setting}
            onSliderMove={handleSlideChange}
            onTransitionEnd={handleTransitionEnd}
            modules={[Navigation, Scrollbar, Autoplay]}
            className={`swiper-container tp-project__slider-active ${
              isDragged ? "dragged" : ""
            }`}
          >
            {project_data.map((item, i) => (
              <SwiperSlide key={i} className="">
                <div className="pb-20 ">
                  <div className="rounded-2xl flex  items-center  bg-white transition duration-300 hover:shadow-xl">
                    <div className="h-[100%] ">
                      <Image
                        src={item.img_1.src}
                        alt="theme-pure"
                        width={297}
                        height={450}
                        className="rounded-l-2xl h-[100%] object-cover "
                      />
                    </div>
                    <div
                      className=" flex-1
                     py-10 px-10 flex flex-col"
                    >
                      <div className="">
                        <Image
                          src={item.img_2.src}
                          alt="theme-pure"
                          width={100}
                          height={30}
                          className="mb-7 w-20 lg:w-28 "
                        />
                      </div>
                      <div className="">
                        <h4 className="text-2xl xl:text-3xl font-bold pb-4">
                          <Link href="">{item.title}</Link>
                        </h4>
                        <p className="text-[16px] leading-[1.9] ">
                          {item.description}
                        </p>
                        <hr className="my-10" />
                      </div>
                      <div className="flex justify-between pr-[10%]">
                        <div className="">
                          <span>Client Name</span>
                          <h4 className="font-semibold">{item.client_name}</h4>
                        </div>
                        <div className="">
                          <span>Budget</span>
                          <h4 className="font-semibold">
                            ${item.budget}
                            {item.budget_simble}
                          </h4>
                        </div>
                        <div className="">
                          <CircleBtn />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ProjectSlider;
