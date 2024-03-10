import React from "react";
import "./WhiteBtn.css";
import Link from "next/link";

const WhiteBtn = () => {
  return (
    <Link
      className="tp-btn-white tp-btn-hover alt-color-black"
      href="#"
    >
      <span className="white-text">Get Free</span>
      <b></b>
    </Link>
  );
};

export default WhiteBtn;
