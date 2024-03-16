// components/SmoothScrollLink.js
import React from 'react';
import Link from 'next/link';

const SmoothScrollLink = ({ href, children }) => {
  const handleClick = (e) => {
    e.preventDefault();
    document.querySelector(href).scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <a href={href} onClick={handleClick}>
      {children}
    </a>
  );
};

export default SmoothScrollLink;
