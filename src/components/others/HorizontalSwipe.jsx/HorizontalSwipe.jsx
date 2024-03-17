// "use client";
// import React, { useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "./HorizontalSwipe.css";
// import Image from "next/image";

// const HorizontalSwipe = () => {
//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     let currentIndex = -1;
//     let animating;
//     let swipePanels;

//     // Initialize GSAP ScrollTrigger
//     function initScrollTrigger() {
//       swipePanels = gsap.utils.toArray(".swipe-section .panel");

//       // set second panel two initial 100%
//       gsap.set(".x-100", { xPercent: 100 });

//       // set z-index levels for the swipe panels
//       gsap.set(swipePanels, {
//         zIndex: (i) => i,
//       });

//       // handle the panel swipe animations
//       function gotoPanel(index, isScrollingDown) {
//         animating = true;
//         // return to normal scroll if we're at the end or back up to the start
//         if (
//           (index === swipePanels.length && isScrollingDown) ||
//           (index === -1 && !isScrollingDown)
//         ) {
//           intentObserver.disable();
//           preventScroll.disable();
//           animating = false;
//           // now make it go 1px beyond in the correct direction so that it doesn't trigger onEnter/onEnterBack.
//           preventScroll.scrollY(
//             preventScroll.scrollY() + (index === swipePanels.length ? 1 : -1)
//           );
//           return;
//         }

//         // target the second panel, last panel?
//         let target = isScrollingDown
//           ? swipePanels[index]
//           : swipePanels[currentIndex];

//         gsap.to(target, {
//           xPercent: isScrollingDown ? 0 : 100,
//           duration: 0.75,
//           onComplete: () => {
//             animating = false;
//           },
//         });
//         currentIndex = index;
//       }

//       // create an observer and disable it to start
//       let intentObserver = ScrollTrigger.observe({
//         type: "wheel,touch",
//         onUp: () => !animating && gotoPanel(currentIndex + 1, true),
//         onDown: () => !animating && gotoPanel(currentIndex - 1, false),
//         wheelSpeed: -1, // to match mobile behavior, invert the wheel speed
//         tolerance: 10,
//         preventDefault: true,
//         onPress: (self) => {
//           // on touch devices like iOS, if we want to prevent scrolling, we must call preventDefault() on the touchstart (Observer doesn't do that because that would also prevent side-scrolling which is undesirable in most cases)
//           ScrollTrigger.isTouch && self.event.preventDefault();
//         },
//       });
//       intentObserver.disable();

//       let preventScroll = ScrollTrigger.observe({
//         preventDefault: true,
//         type: "wheel,scroll",
//         allowClicks: true,
//         onEnable: (self) => (self.savedScroll = self.scrollY()), // save the scroll position
//         onChangeY: (self) => self.scrollY(self.savedScroll), // refuse to scroll
//       });
//       preventScroll.disable();

//       // pin swipe section and initiate observer
//       ScrollTrigger.create({
//         trigger: ".swipe-section",
//         pin: true,
//         anticipatePin: true,
//         start: "top top",
//         end: "+=50%",
//         onEnter: (self) => {
//           if (preventScroll.isEnabled === false) {
//             self.scroll(self.start);
//             preventScroll.enable();
//             intentObserver.enable();
//             gotoPanel(currentIndex + 1, true);
//           }
//         },
//         onEnterBack: (self) => {
//           if (preventScroll.isEnabled === false) {
//             self.scroll(self.start);
//             preventScroll.enable();
//             intentObserver.enable();
//             gotoPanel(currentIndex - 1, false);
//           }
//         },
//       });
//     }

//     initScrollTrigger();

//     return () => {
//       // Cleanup function if needed
//     };
//   }, []);

//   return (
//     <div className="container">
//       <Swiper className="swipe-section">
//         <SwiperSlide className="panel bg-red-500">
//           ScrollTrigger.observe() section
//         </SwiperSlide>
//         <SwiperSlide className="panel bg-purple-500">
//           <Image
//             src={"/assets/images/home/feature1.png"}
//             alt="horizontal pic 1"
//             width={200}
//             height={200}
//           ></Image>
//         </SwiperSlide>
//         <SwiperSlide className="panel bg-blue-500 ">
//           <Image
//             src={"/assets/images/home/feature1.png"}
//             alt="horizontal pic 1"
//             width={200}
//             height={200}
//           ></Image>
//         </SwiperSlide>
//         <SwiperSlide className="panel bg-amber-500  ">
//           This section should switch to vertical scroll (500vh)
//         </SwiperSlide>
//       </Swiper>

//       {/* Spacer */}
//       <div style={{ height: "100vh" }}></div>
//     </div>
//   );
// };

// export default HorizontalSwipe;
'use client'
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Mousewheel, Pagination } from "swiper/modules";
import Image from "next/image";
import "../../pages/home/FeaturesScroll/FeaturesScroll.css";
const HorizontalScrolll = () => {
  const currentSlideRef = useRef(0);
  const [mouseWheelEnabled, setMouseWheelEnabled] = useState(true);
  const [scrolling, setScrolling] = useState(null);
  const [swiperKey, setSwiperKey] = useState(0); 
  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.realIndex;

    currentSlideRef.current = currentIndex;
    const isLastSlide = (currentIndex === 4) ;
    const isScrollingDown = swiper.translate < swiper.getTranslate(swiper.previousIndex);
    console.log(currentIndex, swiper.slides.length-1 , isLastSlide , isScrollingDown)

    if (isLastSlide && scrolling==="down") {
      setMouseWheelEnabled(false);
      console.log("mouseWheelEnabled",mouseWheelEnabled , currentIndex)
    }else if(isLastSlide && scrolling==="up"){
      setMouseWheelEnabled(true);
      console.log("working")
    }
    else {
      setMouseWheelEnabled(true);
      console.log(mouseWheelEnabled)
      console.log("mouseWheelEnabled : ",mouseWheelEnabled, currentIndex)
    }

   
  };
    window.addEventListener("wheel", (event) => {
    const deltaY = event.deltaY;
    if (deltaY > 0) {
      setScrolling("down");
      // console.log(scrolling)
    } else if (deltaY < 0) {
      setScrolling("up");

     // console.log(scrolling)
    }
  });
  useEffect(() => {
    // Update swiperKey to trigger re-render with updated mouseWheelEnabled value
    setSwiperKey((prevKey) => prevKey + 1);
  }, [mouseWheelEnabled]);



  return (
    <div className="-mt-56 swiper-container">
      <Swiper
      key={swiperKey} 
      direction={"vertical"}
      slidesPerView={1}
      spaceBetween={30}
      mousewheel={true}
      showsPagination={false}
      onSlideChange={(swiper) => handleSlideChange(swiper)}
      modules={[Mousewheel, Pagination]}
      className="mySwiper h-[600px] "
      >
        <SwiperSlide className=" w-fit">
          <div className="features-section-shadow">
            <div className="bg-white lg:h-[500px] h-[400px] w-[690px] lg:w-[900px] mx-auto flex items-center justify-center relative rounded-[20px] border">
              <Image
                className="col-span-8 row-span-8"
                src={"/assets/images/home/feature1.jpg"}
                width={550}
                height={300}
                quality={100}
                alt="Features"
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="">
          <div className="features-section-shadow">
            <div className="bg-white lg:h-[500px] h-[400px] w-[690px] lg:w-[900px] mx-auto flex items-center justify-center relative rounded-[20px] border">
              <Image
                className="col-span-8 row-span-8"
                src={"/assets/images/home/feature1.jpg"}
                width={550}
                height={300}
                quality={100}
                alt="Features"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="features-section-shadow">
            <div className="bg-white lg:h-[500px] h-[400px] w-[690px] lg:w-[900px] mx-auto flex items-center justify-center relative rounded-[20px] border">
              <Image
                className="col-span-8 row-span-8"
                src={"/assets/images/home/feature1.jpg"}
                width={550}
                height={300}
                quality={100}
                alt="Features"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="features-section-shadow">
            <div className="bg-white lg:h-[500px] h-[400px] w-[690px] lg:w-[900px] mx-auto flex items-center justify-center relative rounded-[20px] border">
              <Image
                className="col-span-8 row-span-8"
                src={"/assets/images/home/feature1.jpg"}
                width={550}
                height={300}
                quality={100}
                alt="Features"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="features-section-shadow">
            <div className="bg-white lg:h-[500px] h-[400px] w-[690px] lg:w-[900px] mx-auto flex items-center justify-center relative rounded-[20px] border">
              <Image
                className="col-span-8 row-span-8"
                src={"/assets/images/home/feature1.jpg"}
                width={550}
                height={300}
                quality={100}
                alt="Features"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="features-section-shadow">
            <div className="bg-white lg:h-[500px] h-[400px] w-[690px] lg:w-[900px] mx-auto flex items-center justify-center relative rounded-[20px] border">
              <Image
                className="col-span-8 row-span-8"
                src={"/assets/images/home/feature1.jpg"}
                width={550}
                height={300}
                quality={100}
                alt="Features"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HorizontalScrolll;
