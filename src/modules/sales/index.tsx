import React from "react";
import {
  FiTrendingUp,
  FiUsers,
  FiFileText,
  FiTarget,
  FiDownload
} from "react-icons/fi";

const Sales: React.FC = () => {
  return (
    <section className="w-full">
      <nav className="navbar flex items-center justify-between flex-wrap bg-gray-200 p-6 pl-10 w-full fixed z-10">
        <ul className="flex">
          <li className="mr-12 h-16 flex flex-col items-center justify-center">
            <a
              href="#"
              className="font-semibold h-16 border-b-4 border-yellow-400 flex flex-col items-center justify-center"
            >
              All time
            </a>
          </li>
          <li className="mr-8 h-16 flex flex-col items-center justify-center">
            <a href="#" className="text-gray-500 font-light">
              Month
            </a>
          </li>
          <li className="mr-8 h-16 flex flex-col items-center justify-center">
            <a href="#" className="text-gray-500 font-light">
              Week
            </a>
          </li>
        </ul>
      </nav>

      <div className="content h-full overflow-scroll">
        <div className="flex w-full mt-20">
          <div className="w-1/4 items-center flex flex-col justify-center h-40 border-r-2">
            <FiTrendingUp size={30} color={"mediumseagreen"} className="mb-2" />
            <p className="text-3xl text-gray-700">$1.300</p>
            <p className="text-gray-500">Net sales</p>
          </div>
          <div className="w-1/4 items-center flex flex-col justify-center h-40 border-r-2">
            <FiTarget size={30} color="mediumseagreen" className="mb-2" />
            <p className="text-3xl text-gray-700">100</p>
            <p className="text-gray-500">Orders</p>
          </div>
          <div className="w-1/4 items-center flex flex-col justify-center h-40 border-r-2">
            <FiUsers size={30} color="mediumseagreen" className="mb-2" />
            <p className="text-3xl text-gray-700">$1.300</p>
            <p className="text-gray-500">Guests</p>
          </div>
          <div className="w-1/4 items-center flex flex-col justify-center h-40">
            <FiFileText size={30} color="mediumseagreen" className="mb-2" />
            <p className="text-3xl text-gray-700">$1.300</p>
            <p className="text-gray-500">Average Order</p>
          </div>
        </div>

        <div className="w-full mt-4">
          <div className="bg-gray-200 p-4 pl-10 pr-10 flex flex-row justify-between custom-header">
            <p className="text-gray-700 font-light">Full summary</p>
            <p className="text-gray-700 font-light flex flex-row items-center">
              <FiDownload className="mr-2" />
              Export
            </p>
          </div>

          <div className="w-full mt-2">
            <table className="w-full">
              <thead>
                <tr className="border-b-2">
                  <td className="pl-10 pb-2 w-1/3 font-semibold">Net sales</td>
                  <td className="pb-2 font-semibold">$80,000</td>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b-2">
                  <td className="pl-10 pt-2 pb-2 w-1/3 font-light">
                    Net sales
                  </td>
                  <td className="pb-2 pt-2 font-light">$80,000</td>
                </tr>
                <tr className="border-b-2">
                  <td className="pl-10 pt-2 pb-2 w-1/3 font-light">
                    Net sales
                  </td>
                  <td className="pb-2 pt-2 font-light">$80,000</td>
                </tr>
                <tr className="border-b-2">
                  <td className="pl-10 pt-2 pb-2 w-1/3 font-light">
                    Net sales
                  </td>
                  <td className="pb-2 pt-2 font-light">$80,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sales;
