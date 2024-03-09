import Link from "next/link";
import "./CircleBtn.css";
import { IoMdArrowForward } from "react-icons/io";

const CircleBtn = () => {
  return (
    <div className="circular-btn circular-btn-hover alt-color-purple d-none d-md-inline-block w-fit p-4">
      <span className="white-text">
        <IoMdArrowForward className="text-[22px] " />
      </span>
      <b></b>
    </div>
  );
};

export default CircleBtn;
