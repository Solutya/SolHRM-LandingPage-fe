import React from "react";
import "./WhiteBtn.css";
import Link from "next/link";

const WhiteBtn = ({component=""}) => {
  return (
    <Link
      className={`tp-btn-white tp-btn-hover alt-color-black ${component === "nav"&&" max-md:hidden"}`}
      href="/price"
    >
      <span className="white-text">Purchase Now</span>
      <b></b>
    </Link>
  );
};

export default WhiteBtn;
