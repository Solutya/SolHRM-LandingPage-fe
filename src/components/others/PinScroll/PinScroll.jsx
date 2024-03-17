'use client'
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../pages/home/FeaturesScroll/FeaturesScroll.css'
import Image from 'next/image';
// Make ScrollTrigger available to GSAP
gsap.registerPlugin(ScrollTrigger);

function PinScroll() {
  const pinRef = useRef(null);

  useEffect(() => {
    const pinElement = pinRef.current;

    gsap.to(pinElement, {
      xPercent: -200, // Move the container 200% to the left
      ease: 'none',
      scrollTrigger: {
        trigger: pinElement,
        start: 'top top',
        end: 'bottom bottom',
        pin: true,
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="container">
      <div className="pin-container" ref={pinRef}>
        <div className="image-container">
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
          </div> <div className="features-section-shadow">
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
        </div>
      </div>
    </div>
  );
}

export default PinScroll;
