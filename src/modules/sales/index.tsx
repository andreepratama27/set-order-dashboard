import React from "react";
import { FiTrendingUp, FiUsers, FiFileText, FiTarget } from "react-icons/fi";

const Sales: React.FC = () => {
  return (
    <section className="w-full">
      <nav className="flex items-center justify-between flex-wrap bg-gray-200 p-6 pl-10">
        <ul className="flex">
          <li className="mr-12">
            <a href="#" className="font-bold">
              All time
            </a>
          </li>
          <li className="mr-8">
            <a href="#" className="text-gray-500">
              Month
            </a>
          </li>
          <li className="mr-8">
            <a href="#" className="text-gray-500">
              Week
            </a>
          </li>
        </ul>
      </nav>

      <div className="flex w-full mt-8">
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

      <div className="w-full mt-10">
        <div className="bg-gray-200 p-4 pl-10">
          <p className="text-gray-500">Full summary</p>
        </div>
      </div>
    </section>
  );
};

export default Sales;
