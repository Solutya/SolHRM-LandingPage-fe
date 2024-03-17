
'use client'
import React, { useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  window.addEventListener('scroll', toggleVisibility);

  return (
    <div className={`${isVisible ? 'block' : 'hidden'} fixed bottom-4 left-4`}>
      <button
        className="p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none"
        onClick={scrollToTop}
      >
        <FaArrowUp />
      </button>
    </div>
  );
};

export default ScrollToTop;
