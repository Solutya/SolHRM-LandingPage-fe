"use client";
import { project_data } from "@/data/project-data";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Rating ,ThinStar} from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Autoplay, Navigation, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "./ProjectSlider.css";
import CircleBtn from "../../btn's/CircleBtn";

const myStyles = {
  itemShapes: ThinStar,
  activeFillColor: '#ffb700',
  inactiveFillColor: '#fbf1a9'
}
const setting = {
  loop: true,
  autoplay: {
    delay: 2500,
    pauseOnMouseEnter: true,
  },
  slidesPerView: 2,
  centeredSlides: true,
  spaceBetween: 30,
  breakpoints: {
    1506:{
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 1.5,
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
        <div className="px-10 xl:px-0 ">
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
              <SwiperSlide key={i} className=" ">
                
                
                <div className="pb-20">
                <div className="rounded-3xl flex  items-center flex-col md:flex-row bg-white transition duration-300 hover:shadow-xl w-full">
                    <div className="h-[100%] md:w-fit w-[100%]  ">
                    <Link href={item?.live_link} target="__blank" className="h-full ">
                      <Image
                        src={item.img_1.src}
                        alt="theme-pure"
                        width={700}
                        height={1000}
                        className="rounded-ss-3xl md:rounded-es-3xl rounded-se-3xl md:rounded-se-none h-[100%]  w-full md:object-cover md:h-full  md:w-96 lg:w-80"
                      />
                      </Link>
                    </div>
                    <div
                      className=" flex-1
                     py-10 px-10 flex flex-col  "
                    >
                      <div className="">
                        <Image
                          src={item.img_2.src}
                          alt="theme-pure"
                          width={100}
                          height={30}
                          className="mb-7 w-20 lg:max-w-24 "
                        />
                      </div>
                      <div className="">
                        <h4 className="text-2xl xl:text-3xl font-bold pb-4">
                          {item.title}
                        </h4>
                        <p className="text-[16px] leading-[1.9] ">
                          {item.description}
                        </p>
                        <hr className="my-10" />
                      </div>
                      <div className="grid grid-cols-2 sm:flex justify-between pr-[10%] gap-2">
                        <div className="">
                          <span className="text-[14px]">Company Name</span>
                          <h4 className="font-[500] text-[16px]">
                            Solutya Pvt Ltd
                          </h4>
                        </div>
                        <div className="">
                          <span className="text-[14px]">Ratings</span>
                          <div className=" text-sm">
                            
                            <Rating style={{ maxWidth: 100 }} value={item.rating} 
                           itemStyles={myStyles}
                            readOnly  />
                          </div>
                        </div>
                        <div className="">
                          <Link href={item?.live_link} target="__blank">
                          <CircleBtn />
                          </Link>
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