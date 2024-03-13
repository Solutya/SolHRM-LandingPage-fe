import price_data from "@/data/price-data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoArrowRight } from "react-icons/go";
import paymentIco from "../../../public/assets/images/price/price-4.1.png";
const PricePlanTable1 = ({ currentTab }) => {
  return (
    <>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6  pt-10 items-center justify-center  bg-white border rounded-3xl w-[80%] mx-auto shadow-md md:-mt-14 lg:-mt-24 p-6">
        {price_data
          .filter((item) => item.category === currentTab)
          .map((item, i) => (
            <div
              key={i}
              className="even:bg-slate-100 p-6 rounded-3xl h-full  z-20 "
            >
              <div
                className={` ${item.cls} justify-center flex flex-col items-center text-center  `}
              >
                <div className="space-y-2 pb-6 border-b-[1px] ">
                  <h4 className=" font-bold">{item.title}</h4>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
                
                <div className="flex flex-col items-center justify-center gap-4 w-fit z-20">
                  {item.price === "" ? (
                    <span className="  text-myBlue   text-2xl font-bold">
                      Customized
                    </span>
                  ) : (
                    <span className="  text-myBlue text-2xl font-bold">
                      ৳ {Number(item.price).toLocaleString()}
                    </span>
                  )}
                  <Link
                    href=""
                    className="bg-myDark text-white 
                        w-full rounded-full  top-0 py-3 left-0  transition px-3 text-sm  duration-300 hover:bg-myBlue hover:shadow-xl shadow-md font-semibold cursor-pointer"
                  >
                    Purchase Now
                    <GoArrowRight className="inline text-xl ml-2 " />
                  </Link>
                </div>
                <div className="py-4">
                  <ul className="space-y-4">
                    {item.price_feature?.map((list, i) => (
                      <li key={i} className={`${list.cls} flex  gap-4`}>
                        <span className="inline-flex text-myBlue mt-1">
                          {list.icon}
                        </span>
                        <span className="font-semibold text-sm">
                          {list.list}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
      </div> */}
      {/* Table */}

      <div className="overflow-x-auto rounded-t-3xl border border-gray-200 w-[80%] mx-auto pt-10  md:-mt-14 lg:-mt-24  bg-white pr-6">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm text-center ">
          <thead className="text-left pt-24">
            <tr>
              <th className="whitespace-nowrap px-4 py-4 font-medium text-gray-900 max-w-56 text-wrap ">
                <div className="p-6">
                  <Image src={paymentIco}></Image>
                  <p className=" pt-2">
                    You pay $59.00/mo today Renews April 2024 For $69.00/mo
                  </p>
                </div>
              </th>

              {price_data
                .filter((item) => item.category === currentTab)
                .map((item, i) => (
                  <th className="whitespace-nowrap px-4  font-medium text-gray-900 min-w-52 max-w-56 text-wrap odd:bg-gray-100  rounded-t-3xl h-full ">
                    <div
                      key={i}
                      className="even:bg-slate-100 p-6 rounded-3xl h-full  z-20 flex flex-col justify-center items-center text-center  "
                    >
                      <div className="space-y-2 pb-6 border-b-[1px] mb-4 ">
                        <h4 className=" font-bold text-lg">{item.title}</h4>
                        <p className="text-sm text-gray-500">
                          Collect more submissions, access most of the features
                        </p>
                        {/* <p className="text-sm text-gray-500">{item.description}</p> */}
                      </div>
                      {/* Purchase button */}
                      <div className="flex flex-col items-center justify-center gap-4 w-fit z-20">
                        {item.price === "" ? (
                          <>
                          <span className="  text-myBlue   text-2xl font-bold">
                            Customized
                          </span>
                          <span>
                            {item.category}
                          </span>
                          </>
                          
                        ) : (
                          <>
                          <span className="  text-myBlue text-2xl font-bold">
                            ৳ {Number(item.price).toLocaleString()}
                          </span>
                          <span>
                            {item.category}
                          </span>
                          </>
                        )}
                        <Link
                          href=""
                          className="bg-myDark text-white 
                        w-fit rounded-full  top-0 py-3 left-0  transition px-6 text-xs  duration-300 hover:bg-myBlue hover:shadow-xl shadow-md font-semibold cursor-pointer"
                        >
                          Get Now
                          {/* <GoArrowRight className="inline text-xl ml-2 " /> */}
                        </Link>
                      </div>
                    </div>
                  </th>
                ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 ">
            {/* Custom row starts */}
            {/* Row 1 */}
            <tr className="">
              <td className="whitespace-nowrap px-4 py-4 font-semibold text-gray-900 odd:bg-slate-100">
                Employess
              </td>
              <td className="whitespace-nowrap px-4 py-4 text-gray-700 odd:bg-slate-100">
                25
              </td>
              <td className="whitespace-nowrap px-4 py-4 text-gray-700 odd:bg-slate-100">
                50
              </td>
              <td className="whitespace-nowrap px-4 py-4 text-gray-700">
                100+
              </td>
              <td className="whitespace-nowrap px-4 py-4 text-gray-700 odd:bg-slate-100">
                -
              </td>
            </tr>
            {/* Row 2 */}
            <tr className="">
              <td className="whitespace-nowrap px-4 py-4 font-semibold text-gray-900 odd:bg-slate-100">
                Extra 10 Employee cost
              </td>
              <td className="whitespace-nowrap px-4 py-4 text-gray-700 odd:bg-slate-100">
                -
              </td>
              <td className="whitespace-nowrap px-4 py-4 text-gray-700 odd:bg-slate-100">
                -
              </td>
              <td className="whitespace-nowrap px-4 py-4 text-gray-700">-</td>
              <td className="whitespace-nowrap px-4 py-4 text-gray-700 odd:bg-slate-100">
                ৳ 1000
              </td>
            </tr>

            {/* Row 3 */}
            <tr className="">
              <td className="whitespace-nowrap px-4 py-4 font-semibold text-gray-900 odd:bg-slate-100">
                Hidden Cost
              </td>
              <td className="whitespace-nowrap px-4 py-4 text-gray-700 odd:bg-slate-100">
                None
              </td>
              <td className="whitespace-nowrap px-4 py-4 text-gray-700 odd:bg-slate-100">
                None
              </td>
              <td className="whitespace-nowrap px-4 py-4 text-gray-700">
                None
              </td>
              <td className="whitespace-nowrap px-4 py-4 text-gray-700 odd:bg-slate-100">
                None
              </td>
            </tr>
            {/* Row 4 */}
            <tr className="">
              <td className="whitespace-nowrap px-4 py-4 font-semibold text-gray-900 odd:bg-slate-100">
                Installation Charge
              </td>
              <td className="whitespace-nowrap px-4 py-4 text-gray-700 odd:bg-slate-100">
                None
              </td>
              <td className="whitespace-nowrap px-4 py-4 text-gray-700 odd:bg-slate-100">
                None
              </td>
              <td className="whitespace-nowrap px-4 py-4 text-gray-700">
                None
              </td>
              <td className="whitespace-nowrap px-4 py-4 text-gray-700 odd:bg-slate-100">
                None
              </td>
            </tr>
            {/* Row 5 */}
            <tr className="">
              <td className="whitespace-nowrap px-4 py-4 font-semibold text-gray-900 odd:bg-slate-100">
                24/7 Support
              </td>
              <td className="whitespace-nowrap px-4 py-4 text-gray-700 odd:bg-slate-100">
                Yes
              </td>
              <td className="whitespace-nowrap px-4 py-4 text-gray-700 odd:bg-slate-100">
               Yes
              </td>
              <td className="whitespace-nowrap px-4 py-4 text-gray-700">
                Yes
              </td>
              <td className="whitespace-nowrap px-4 py-4 text-gray-700 odd:bg-slate-100">
                Yes
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PricePlanTable1;
