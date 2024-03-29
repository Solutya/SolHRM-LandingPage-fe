import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import SectionWrapper from "../wrapper's/SectionWrapper";
import toast from "react-hot-toast";
import { CiMail } from "react-icons/ci";
import "../btn's/BlueBtn.css";
import BlueBtn from "../btn's/BlueBtn";
import CircleBtn from "../btn's/CircleBtn";

const EmailJsForm = ({isFooter}) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("SolHRM", "template_28neu3k", form.current, {
        publicKey: "iUdL_30qtZCU2lb1l",
      })
      .then(
        () => {
          toast.success("Your email has been sent!");
          if (form.current) {
            form.current.reset();
          }
        },
        (error) => {
          toast.error("Something went wrong!");
        }
      );
  };
  return (

      <form ref={form} onSubmit={sendEmail} className="">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
          data-aos-once="true"
          className="md:max-w-[630px] max-w-[500px] md:h-[60px] h-[50px] relative mx-auto md:mt-8 mt-5 max-md:flex flex-col items-center justify-center max-md:px-4"
        >
          <input
            className="w-full h-full rounded-full px-[58px] py-[30px] outline-none text-myDark"
            type="email"
            name="user_email"
            required
            placeholder="Business email address"
          />
          <CiMail className="absolute md:top-[35%] top-[30%] text-xl md:left-7 left-9 text-gray-500" />
          {
            isFooter? <div className="absolute right-6 top-0 md:right-2 md:top-[3px] w-fit">
            <CircleBtn isFooter={true}>
              <input
                type="submit"
                value="send"
                className="cursor-pointer"
              />
            </CircleBtn>
          </div>
          :
          <div className="absolute md:right-2 md:top-[7px] max-md:mt-32 w-fit">
          <BlueBtn>
            <input
              type="submit"
              value="Get a Demo"
              className="text-white cursor-pointer"
            />
          </BlueBtn>
        </div>
          }
        
        </div>
      </form>

  );
};

export default EmailJsForm;
