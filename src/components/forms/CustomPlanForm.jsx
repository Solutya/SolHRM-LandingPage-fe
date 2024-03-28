"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import SectionWrapper from "../wrapper's/SectionWrapper";
import toast from "react-hot-toast";
import { CiMail } from "react-icons/ci";
import "../btn's/BlueBtn.css";
import BlueBtn from "../btn's/BlueBtn";

const CustomPlanForm = () => {
  const form2 = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    if (isSubmitting) return; // Prevent multiple submissions
    setIsSubmitting(true);

    emailjs
      .sendForm("SolHRM", "template_cxz25un", form2.current, {
        publicKey: "iUdL_30qtZCU2lb1l",
      })
      .then(
        () => {
          toast.success("Your email has been sent!");
          if (form2.current) {
            form2.current.reset();
          }
        },
        (error) => {
          toast.error("Something went wrong!");
        }
      )
      .finally(() => {
        setIsSubmitting(false); // Reset submission status after completion
      });
  };

  return (
    <form
      ref={form2}
      onSubmit={sendEmail}
      className="pb-10 h-[60vh] overflow-y-scroll"
    >
      <div className=" md:mt-8 mt-5 flex flex-col items-center justify-center px-4 border py-4 mx-3 gap-4 rounded-2xl">
        <div className="w-[90%] space-y-2">
          <label
            htmlFor="user_email"
            className="text-left text-myBlue font-semibold text-[14px]"
          >
            Your Email
          </label>
          <input
            className="w-full h-full rounded-full px-[28px] outline-myBlue text-myDark border py-2"
            type="email"
            name="user_email"
            required
            placeholder="Business email address"
          />
        </div>
        <div className="w-[90%] space-y-2">
          <label
            htmlFor="user_name"
            className="text-left text-myBlue font-semibold text-[14px] "
          >
            Your Name
          </label>
          <input
            className="w-full h-full rounded-full px-[28px] outline-myBlue text-myDark border py-2"
            type="text"
            name="user_name"
            required
            placeholder="Type full name"
          />
        </div>
        <div className="w-[90%] space-y-2">
          <label
            htmlFor="user_phone"
            className="text-left text-myBlue font-semibold text-[14px]"
          >
            Your Phone Number
          </label>
          <input
            className="w-full h-full rounded-full px-[28px] outline-myBlue text-myDark border py-2"
            type="number"
            name="user_phone"
            required
            placeholder="Phone Number"
          />
        </div>
        <div className="w-[90%] space-y-2">
          <label
            htmlFor="user_company"
            className="text-left text-myBlue font-semibold text-[14px]"
          >
            Company Name
          </label>
          <input
            className="w-full h-full rounded-full px-[28px] outline-myBlue text-myDark border py-2"
            type="text"
            name="user_company"
            required
            placeholder="Company Name"
          />
        </div>
        <div className="w-[90%] space-y-2">
          <label
            htmlFor="user_requirements"
            className="text-left text-myBlue font-semibold text-[14px]"
          >
            Your Requirements
          </label>
          <textarea
            className="w-full h-full rounded-lg px-[28px] outline-myBlue text-myDark border py-2"
            rows="3"
            name="user_requirements"
            required
            placeholder="Your requirements..."
          />
        </div>

        <div className="w-[90%] space-y-2">
          <label
            htmlFor="user_totalEmployee"
            className="text-left text-myBlue font-semibold text-[14px] "
          >
            Number of Employee
          </label>
          <input
            className="w-full h-full rounded-full px-[28px] outline-myBlue text-myDark border py-2"
            type="number"
            name="user_totalEmployee"
            min={51}
            required
            placeholder="Total employee you want..."
          />
        </div>

        <div className="w-[90%] space-y-2">
          <label
            htmlFor="user_planDuration"
            className="text-left text-myBlue font-semibold text-[14px] "
          >
            Plan Duration
          </label>
          {/* <input
            className="w-full h-full rounded-full px-[28px] outline-myBlue text-myDark border py-2"
            type="email"
            name="user_email"
            required
            placeholder="Business email address"
          /> */}
          <select
            id="plans"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="user_planDuration"
            required
          >
            <option selected value="monthly">
              Monthly
            </option>
            <option value="yearly">Yearly</option>
          </select>
        </div>

        <div className=" w-fit">
          <BlueBtn>
            <input
              type="submit"
              value={isSubmitting ? "Submitting..." : "Submit"}
              className="text-white cursor-pointer "
              disabled={isSubmitting} // Disable button while submitting
            />
          </BlueBtn>
        </div>
      </div>
    </form>
  );
};

export default CustomPlanForm;
