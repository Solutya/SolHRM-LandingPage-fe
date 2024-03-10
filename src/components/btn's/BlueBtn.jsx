import Link from "next/link";
import React from "react";
import "./BlueBtn.css";
const BlueBtn = ({ component = "", children }) => {
  return (
    <div className="overflow-hidden rounded-[37px] border bg-myBlue">
      <Link
        className={`tp-btn-blue tp-btn-hover alt-color-black overflow-hidden ${
          component === "nav" && " max-md:hidden"
        }`}
        href="#"
      >
        <span className="white-text">{children}</span>
        <b></b>
      </Link>
    </div>
  );
};
export default BlueBtn;