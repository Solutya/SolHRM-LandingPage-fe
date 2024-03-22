import React from "react";

const SectionWrapper = ({ children }) => {
  return (
    <div className="max-w-[1180px] mx-auto px-[10%]  sm:px-[6%] xl:px-[15px]  ">
      {children}
    </div>
  );
};

export default SectionWrapper;
