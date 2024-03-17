import React from "react";
import "./WhiteBtn.css";
import Link from "next/link";

const WhiteBtn = ({component=""}) => {
  return (
    <Link
      className={`tp-btn-white tp-btn-hover alt-color-black ${component === "nav"&&" max-md:hidden"}`}
      href="https://demo.hrm.solutya.com" target='__blank'
    >
      <span className="white-text">View Demo</span>
      <b></b>
    </Link>
  );
};

export default WhiteBtn;
