import React from "react";

const SectionWrapper = ({ children }) => {
  return (
    <div className="max-w-[1170px] mx-auto lg:px-10 sm:px-[5%] px-[10%]">
      {children}
    </div>
  );
};

export default SectionWrapper;
