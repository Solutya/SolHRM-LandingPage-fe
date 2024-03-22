import Link from "next/link";
import "./CircleBtn.css";
import { IoMdArrowForward } from "react-icons/io";

const CircleBtn = ({ children, isFooter }) => {
  return (
    <div className="overflow-hidden">
      <div className="circular-btn circular-btn-hover alt-color-purple d-none d-md-inline-block w-fit p-4">
        {!isFooter ? (
          <span className="white-text">
            <IoMdArrowForward className="text-[22px] " />
          </span>
        ) : (
          <span className="white-text">{children}</span>
        )}

        <b></b>
      </div>
    </div>
  );
};

export default CircleBtn;
