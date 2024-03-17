"use client"
import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { RiArrowUpDoubleLine  } from "react-icons/ri";

const ScrollToTop = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [showButton, setShowButton] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.body.clientHeight;
        const scrollTop = window.scrollY;
        const scrolled = scrollTop / (documentHeight - windowHeight);
        setScrollProgress(scrolled);
  
        // Conditionally show/hide the button based on window height
        setShowButton(windowHeight >= 200 && scrollTop > 0);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const scrollToTop = () => {
      scroll.scrollToTop();
    };
  

 

  return (

        <button
          id="topButton"
         
          className={`fixed bottom-4 left-4 flex items-center justify-center p-2 bg-myBlue text-white rounded-full hover:bg-puple-800 focus:outline-none transition-all duration-500 ${showButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          onClick={scrollToTop}
          style={{ opacity: showButton ? 1 : 0, transform: `translateY(${showButton ? '0' : '10px'})` }}
        >
          <div className="relative w-10 h-10">
            <svg className="absolute" viewBox="0 0 36 36" width="100%" height="100%">
              <circle className="progress-ring__circle" cx="18" cy="18" r="15.91549430918954" fill="transparent" stroke="#ffffff" strokeWidth="3" strokeDasharray={`${scrollProgress * 100}, 100`} strokeLinecap="round" transform="rotate(-90 18 18)" />
            </svg>
            <RiArrowUpDoubleLine   className="absolute arrowUp text-xl" />
          </div>
        </button>
   

  );
};

export default ScrollToTop;
