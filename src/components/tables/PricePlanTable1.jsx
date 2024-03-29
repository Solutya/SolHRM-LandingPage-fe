import price_data from "@/data/price-data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoArrowRight } from "react-icons/go";
import paymentIco from "../../../public/assets/images/price/price-4.1.png";
import EmailModal from "../modals/EmailModal";
const PricePlanTable1 = ({ currentTab }) => {
  return (
    <>
      <div className="overflow-x-auto rounded-3xl border border-gray-200 w-[80%] mx-auto pt-10  md:-mt-14 lg:-mt-24  bg-white pr-6">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm text-center ">
          <thead className="text-left pt-24">
            <tr>
              <th className="whitespace-nowrap px-4 py-4 font-medium text-gray-900 max-w-56 text-wrap ">
                <div className="p-6">
                  <Image src={paymentIco} alt='payment icons'></Image>
                  <p className=" pt-2">
                    Choose from the best plans available for you today!
                  </p>
                </div>
              </th>

              {price_data
                .filter((item,i) => item.category === currentTab)
                .map((item, i) => (
                  <th 
                  key={i}
                  className="whitespace-nowrap px-4  font-medium text-gray-900 min-w-52 max-w-56 text-wrap odd:bg-gray-100  rounded-t-3xl h-full ">
                    <div
                      key={i}
                      className="even:bg-slate-100 p-6 rounded-3xl h-full  z-20 flex flex-col justify-center items-center text-center  "
                    >
                      <div className="space-y-2 pb-6 border-b-[1px] mb-4 ">
                        <h4 className=" font-bold text-lg">{item.title}</h4>
                        <p className="text-sm text-gray-500">
                          {item.fullDescription}
                        </p>
                        {/* <p className="text-sm text-gray-500">{item.description}</p> */}
                      </div>
                      {/* Purchase button */}
                      <div className="flex flex-col items-center justify-center gap-4 w-fit ">
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
                        {
                          item.cls === "custom-plan"?
                    
                         <div className="">

                           <EmailModal modalTitle="Buy Now"/>
                         </div>
                         
             
                        :
                         <Link
                         href={item.paymentLink}
                         className="bg-myDark text-white 
                       w-fit rounded-full  top-0 py-3 left-0  transition px-6 text-xs  duration-300 hover:bg-myBlue hover:shadow-xl shadow-md font-semibold cursor-pointer"
                       >
                         Buy Now
                         {/* <GoArrowRight className="inline text-xl ml-2 " /> */}
                       </Link>                        }
                       
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