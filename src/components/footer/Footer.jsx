import React from "react";
import CircleBtn from "../btn's/CircleBtn";

const Footer = () => {
  return (
    <footer className="text-white bg-[#000229]lg:rounded-3xl lg:mx-10">
      {/* Footer top */}
      <section className="flex justify-between">
        <div>
          <h3>Get Our Latest's News & Updates</h3>
        </div>
        <div className="relative text-black">
          <label htmlFor="email" className="sr-only">
           Business email address
          </label>

          <input
            type="text"
            id="email"
            placeholder="Business email address"
            className="w-full rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm"
          />

          <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
            <CircleBtn />
          </span>
        </div>
      </section>
      {/* Footer middle */}
      <section></section>

      {/* Footer bottom */}
      <section></section>
    </footer>
  );
};

export default Footer;
