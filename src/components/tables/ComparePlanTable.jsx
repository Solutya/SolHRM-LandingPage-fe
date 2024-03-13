import { compareTabledData } from "@/data/compare-table-data";
import price_data from "@/data/price-data";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import { IoCheckmark, IoCheckmarkCircle } from "react-icons/io5";

const ComparePlanTable = () => {
  return (
    <div className="overflow-x-auto rounded-t-3xl border border-gray-200 w-[80%] mx-auto pt-10 my-10  bg-white ">
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm text-center ">
        <thead className="text-left pt-24">
          <tr>
            <th className="whitespace-nowrap px-4 py-4 font-medium text-gray-900 max-w-56 text-wrap ">
              <div className="p-6 text-xl font-bold">
                <p>Features and Services</p>
              </div>
            </th>

            {price_data
              .filter((item) => item.category === "monthly")
              .slice(0, 3)
              .map((item, i) => (
                <th className="whitespace-nowrap px-4  font-medium text-gray-900 min-w-52 max-w-56 text-wrap   rounded-t-3xl h-full ">
                  <div
                    key={i}
                    className="even:bg-slate-100 p-6 rounded-3xl h-full  z-20 flex flex-col justify-center items-center text-center  "
                  >
                    <div className="space-y-2  pb-2">
                      <h4 className=" font-bold text-lg">{item.title}</h4>

                      {/* <p className="text-sm text-gray-500">{item.description}</p> */}
                    </div>
                    {/* Purchase button */}
                    <div className="flex flex-col items-center justify-center gap-4 w-fit z-20">
                      <Link
                        href=""
                        className="bg-myDark text-white 
                        w-fit rounded-full  top-0 py-3 left-0  transition px-6 text-xs  duration-300 hover:bg-myBlue hover:shadow-xl shadow-md font-semibold cursor-pointer"
                      >
                        Get {item.title}
                        {/* <GoArrowRight className="inline text-xl ml-2 " /> */}
                      </Link>
                    </div>
                  </div>
                </th>
              ))}
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200     ">
          {/* Custom row starts */}
          {/* Rows */}
          {compareTabledData.map((item) => (
            <>
              <tr className="odd:bg-slate-100">
                <td className="whitespace-nowrap px-4 py-4 font-semibold text-gray-900 ">
                  {item.feature_title}
                </td>
                <td className="whitespace-nowrap px-4 py-4  ">
                  {
                    item.plan1
                  }
                </td>
                <td className="whitespace-nowrap px-4 py-4   ">
                  {
                    item.plan2
                  }
                </td><td className="whitespace-nowrap px-4 py-4   text-center ">
                  {
                    item.plan3
                  }
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComparePlanTable;
