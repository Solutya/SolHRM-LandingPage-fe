import React from "react";

const SectionWrapper = ({ children }) => {
  return (
    <div className="max-w-[1180px] mx-auto  sm:px-[0%] px-[10%] ">
      {children}
    </div>
  );
};

export default SectionWrapper;
