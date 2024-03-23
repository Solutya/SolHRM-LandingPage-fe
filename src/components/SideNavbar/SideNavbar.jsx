import { Link as RLink, animateScroll as scroll } from "react-scroll";
import { HiOutlineArrowSmallRight, HiOutlineXMark } from "react-icons/hi2";
import navData from "@/data/navData";
import { LuPlus } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import WhiteBtn from "@/components/btn's/WhiteBtn";
import BlueBtn from "../btn's/BlueBtn";
const SideNavbar = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={`z-[1000] transition-all duration-1000  ${
        isOpen
          ? "fixed h-[100vh] right-0 top-0 bottom-0"
          : "fixed min-h-screen top-0 bottom-0 -right-[120%]"
      }`}
    >
      <div className={`flex items-center justify-between`}>
        <div
          className={`sm:w-[40vw] mobile:w-[30vw] xs:w-[20vw] w-[0vw] h-[100vh] bg-black opacity-50 transition-all duration-700 z-50`}
        ></div>
        <div
          className={`sm:w-[60vw] mobile:w-[70vw] xs:w-[80vw] w-[100vw] h-[100vh] bg-myDark overflow-y-auto text-white`}
        >
          <div className="relative p-12">
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="w-12 h-12 text-4xl absolute top-0 right-0 bg-[#6865ff] mr-6 mt-6 rounded-full flex items-center justify-center text-white cursor-pointer hover:rotate-180 transition duration-300 font-bold "
            >
              <HiOutlineXMark />
            </div>
            <Image
              className="mx-auto pb-10"
              src="/assets/images/logo/solhrmForDark.png"
              width={140}
              height={30}
              quality={100}
              alt="Logo"
            />
            <div className="flex flex-col">
              {navData.map((item, index) => (
                <RLink
                  className={`border-low-myDark py-[15px] font-medium flex items-center justify-between group ${
                    item?.path === "/contact" ? "" : "border-b"
                  }`}
                  activeClass="active-link"
                  to={item?.path}
                  key={index}
                >
                  <span className="group-hover:text-myBlue transition duration-300 cursor-pointer">
                    {item?.title}
                  </span>

                  <div className="w-7 h-7 border border-gray-800 flex items-center justify-center text-xl cursor-pointer group-hover:text-myBlue transition duration-300">
                    <HiOutlineArrowSmallRight />
                  </div>
                </RLink>
              ))}
            </div>
            <div className="w-fit pt-10 mx-auto">
              <Link href='https://demo.hrm.solutya.com/' target='__blank' className="px-8 py-3 rounded-full bg-white text-myDark hover:text-white hover:bg-myBlue transition duration-500 font-semibold">
              
              View Demo
              </Link>
        </div>
            <div className="text-center mt-[70px]">
              <h5 className="font-bold text-2xl">Instagram</h5>
              <div className="grid grid-cols-4 gap-3 mt-5">
                <Image
                  className="w-full h-full"
                  src="/assets/images/home/ins1.jpg"
                  width={400}
                  height={400}
                  alt="Instagram Image"
                />
                <Image
                  className="w-full h-full"
                  src="/assets/images/home/ins2.jpg"
                  width={400}
                  height={400}
                  alt="Instagram Image"
                />
                <Image
                  className="w-full h-full"
                  src="/assets/images/home/ins3.jpg"
                  width={400}
                  height={400}
                  alt="Instagram Image"
                />
                <Image
                  className="w-full h-full"
                  src="/assets/images/home/ins4.png"
                  width={400}
                  height={400}
                  alt="Instagram Image"
                />
              </div>
              <h5 className="font-bold text-2xl mt-14 capitalize">
                we are here
              </h5>
              <p className="text-gray-400 mt-4 font-semibold">
                Imagine Osman Center, Sonargaon Janapath Road, Sector# 12,
                Uttara, Dhaka-1230, Bangladesh
              </p>
              <div className="flex gap-2 items-center justify-center mt-4">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.332 1C14.332 1 17.2651 1.26664 20.9981 4.99966C24.7311 8.73267 24.9978 11.6658 24.9978 11.6658"
                    stroke="#FF3C82"
                    strokeWidth="2"
                    troke-linecap="round"
                  />
                  <path
                    d="M14.6079 5.71289C14.6079 5.71289 15.9277 6.08998 17.9075 8.06971C19.8872 10.0494 20.2643 11.3693 20.2643 11.3693"
                    stroke="#FF3C82"
                    strokeWidth="2"
                    troke-linecap="round"
                  />
                  <path
                    opacity="0.5"
                    d="M9.04943 5.42369L9.91471 6.97413C10.6956 8.37332 10.3821 10.2088 9.15225 11.4387C9.15225 11.4387 9.15225 11.4387 9.15225 11.4387C9.15213 11.4388 7.66057 12.9306 10.3652 15.6352C13.0692 18.3392 14.561 16.849 14.5618 16.8482C14.5618 16.8482 14.5618 16.8482 14.5618 16.8482C15.7917 15.6183 17.6271 15.3049 19.0263 16.0857L20.5768 16.951C22.6896 18.1301 22.9391 21.0931 21.082 22.9502C19.9661 24.0661 18.599 24.9344 17.0878 24.9917C14.5439 25.0882 10.2236 24.4443 5.88985 20.1106C1.55612 15.7769 0.912294 11.4566 1.00873 8.91261C1.06602 7.40143 1.93432 6.03439 3.05023 4.91848C4.90734 3.06137 7.87031 3.31089 9.04943 5.42369Z"
                    stroke="#FF3C82"
                    strokeWidth="2"
                    troke-linecap="round"
                  />
                </svg>
                <p className="text-gray-400  font-semibold">
                +880 1329-65-9900-(09)
                </p>
              </div>
              <div className="flex items-center justify-center gap-4 mt-10 pb-10">
                <Link href={"https://twitter.com/SolutyaI"} target="__blank">
                  <div className="p-4 text-xl rounded-xl flex items-center justify-center bg-white text-myBlue hover:text-white hover:bg-myBlue transition duration-300">
                    <FaXTwitter />
                  </div>
                </Link>
                <Link
                  href={"https://www.instagram.com/solutyapvtltd/"}
                  target="__blank"
                >
                  <div className="p-4 text-xl rounded-xl flex items-center justify-center bg-white text-myBlue hover:text-white hover:bg-myBlue transition duration-300">
                    <FaInstagram />
                  </div>
                </Link>
                <Link
                  href={"https://www.facebook.com/Solutya"}
                  target="__blank"
                >
                  <div className="p-4 text-xl rounded-xl flex items-center justify-center bg-white text-myBlue hover:text-white hover:bg-myBlue transition duration-300">
                    <FaFacebookF />
                  </div>
                </Link>
                <Link
                  href={"https://www.linkedin.com/company/solutya"}
                  target="__blank"
                >
                  <div className="p-4 text-xl rounded-xl flex items-center justify-center bg-white text-myBlue hover:text-white hover:bg-myBlue transition duration-300">
                    <FaLinkedinIn />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
