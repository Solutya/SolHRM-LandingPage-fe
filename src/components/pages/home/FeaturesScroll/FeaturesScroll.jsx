"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import "./FeaturesScroll.css";
import { FeaturesScrollData } from "@/data/FeaturesScrollData";
import Image from "next/image";
import SectionWrapper from "@/components/wrapper's/SectionWrapper";

const FeatursScrollSection = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "1000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section className="overflow-hidden">
      <div ref={triggerRef}>
        <div
          ref={sectionRef}
          className="h-[100vh] w-[400vw] flex flex-row items-center relative"
        >
          {FeaturesScrollData.map((item, index) => (
            <div
              className="bg-white lg:h-[500px] h-[400px] w-[690px] lg:w-[900px] mx-auto flex items-center justify-center relative rounded-[20px] border"
              key={index}
            >
              <div className="features-section-shadow"></div>
              <div className="bg-gray-200 p-7 w-full h-full rounded-[20px] border-white border-[6px] grid grid-cols-12 row-span-12 lg:gap-6 gap-3">
                <Image
                  className="col-span-8 row-span-8 w-auto"
                  src={item?.img1}
                  width={550}
                  height={300}
                  quality={100}
                  alt="Features"
                />
                <Image
                  className="col-span-4 row-span-12 w-auto"
                  src={item?.img2}
                  width={254}
                  height={200}
                  quality={100}
                  alt="Features"
                />
                <div className="col-span-8 row-span-4 flex gap-6 lg:h-[145px] md:h-[120px] w-auto">
                  <Image
                    className="h-full w-auto"
                    src={item?.img3}
                    width={150}
                    height={80}
                    quality={100}
                    alt="Features"
                  />
                  <Image
                    className="h-full w-auto"
                    src={item?.img4}
                    width={440}
                    height={300}
                    quality={100}
                    alt="Features"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatursScrollSection;
