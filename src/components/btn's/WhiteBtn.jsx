import React from "react";
import "./WhiteBtn.css";
import Link from "next/link";

const WhiteBtn = ({component=""}) => {
  return (
    <Link
      className={`tp-btn-white tp-btn-hover alt-color-black ${component === "nav"&&" max-md:hidden"}`}
      href="#"
    >
      <span className="white-text">Get Free</span>
      <b></b>
    </Link>
  );
};

export default WhiteBtn;
