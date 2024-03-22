import { useEffect, useRef } from 'react';
import { compareTabledData } from "@/data/compare-table-data";
import price_data from "@/data/price-data";
import Link from "next/link";
import HeaderTitle from "@/components/headerTitle/HeaderTitle";

const ComparePlanTable = () => {
  return (
    <div className="py-10 md:py-20">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true"
        className="text-center"
      >
        <HeaderTitle
          title="Compare our plans"
          subTitle="Comparing our pricing plans side-by-side so you can choose the best
            one for yourself."
        />
      </div>
      <div className="overflow-x-auto rounded-t-3xl border border-gray-200 w-[80%] mx-auto  my-10  bg-[#f1f2f6] ">
        <table className="min-w-full divide-y-2 divide-gray-200  text-sm text-center ">
          <thead className="text-left sticky top-0 bg-[#f1f2f6] z-10">
            <tr>
              <th className="whitespace-nowrap px-4 py-4 font-medium text-gray-900 max-w-56 text-wrap ">
                <div className="p-6 text-xl font-bold">
                  <p>Features and Services</p>
                </div>
              </th>

              {price_data
                .filter((item, i) => item.category === "monthly")
                .slice(0, 3)
                .map((item, i) => (
                  <th
                    key={i}
                    className=" whitespace-nowrap px-4  font-medium text-gray-900 min-w-52 max-w-56 text-wrap   rounded-t-3xl h-full "
                  >
                    <div
                      key={i}
                      className="even:bg-slate-100 p-6 rounded-3xl h-full  z-20 flex flex-col justify-center items-center text-center  "
                    >
                      <div className="space-y-2  pb-2">
                        <h4 className=" font-bold text-lg">{item.title}</h4>
                      </div>
                      {/* Purchase button */}
                      <div className="flex flex-col items-center justify-center gap-4 w-fit z-20">
                        <Link
                          href=""
                          className="bg-myDark text-white 
                        w-fit rounded-full  top-0 py-3 left-0  transition px-6 text-xs  duration-300 hover:bg-myBlue hover:shadow-xl shadow-md font-semibold cursor-pointer"
                        >
                          Get {item.title}
                        </Link>
                      </div>
                    </div>
                  </th>
                ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {compareTabledData.map((item, i) => (
              <tr key={i} className="odd:bg-white text-md ">
                <td className="whitespace-nowrap px-4 py-6  text-gray-900  ">
                  {item.feature_title}
                </td>
                <td className="whitespace-nowrap px-4 py-6  ">{item.plan1}</td>
                <td className="whitespace-nowrap px-4 py-6   ">{item.plan2}</td>
                <td className="whitespace-nowrap px-4 py-6   text-center ">
                  {item.plan3}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComparePlanTable;
