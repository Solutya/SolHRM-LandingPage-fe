import Link from "next/link";
import React from "react";
import "./BlueBtn.css";

const BlueBtn = ({ component = "", children }) => {
  return (
    <div className="overflow-hidden max-w-[170px] rounded-[37px]  bg-myBlue flex items-center justify-center">
      <div
        className={`tp-btn-blue tp-btn-hover alt-color-black overflow-hidden ${
          component === "nav" && " max-md:hidden"
        }`}
        href="#"
      >
        <span className="white-text">{children}</span>
        <b></b>
      </div>
    </div>
  );
};

export default BlueBtn;
