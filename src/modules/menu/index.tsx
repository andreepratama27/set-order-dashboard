import React from "react";
import { FiMenu, FiTrash, FiClock, FiPlus } from "react-icons/fi";

const Food = () => (
  <div className="list px-10 py-5 border-b-2 border-gray-100">
    <div className="information flex flex-col justify-center">
      <p className="text-gray-800 font-semibold">Burrito chicken special</p>
      <p className="text-gray-600 font-light text-sm mt-1">
        Apple, Walnuts, Mossend, Blue, Pickled blueberries, Carrot
      </p>
    </div>
    <div className="price flex flex-col justify-center">
      <p className="font-semibold text-gray-800">$13.00</p>
    </div>
    <div className="display">
      <div className="image-box w-16 h-16 rounded-lg">
        <img
          src="https://picsum.photos/id/235/200/300"
          className="w-full h-full rounded-lg"
          alt=""
        />
      </div>
    </div>

    <div className="delete-grid flex flex-col justify-center items-center">
      <FiTrash size={22} color={"#aaaaaa"} />
    </div>
  </div>
);

const Menu: React.FC = () => {
  return (
    <section className="w-full overflow-scroll">
      <nav className="navbar flex items-center justify-between flex-wrap bg-gray-200 p-6 pl-10 fixed w-full z-10">
        <ul className="flex">
          <li className="mr-12 h-16 flex flex-col items-center justify-center">
            <a
              href="#"
              className="font-semibold text-gray-700 flex flex-row items-center"
            >
              <FiMenu className="mr-2" />
              Allday Menu
            </a>
          </li>
          <li className="mr-8 h-16 flex flex-col items-center justify-center">
            <a
              href="#"
              className="font-light text-gray-500 flex flex-row items-center"
            >
              <FiMenu className="mr-2" />
              Menu Lunch
            </a>
          </li>
          <li className="mr-8 h-16 flex flex-col items-center justify-center">
            <a
              href="#"
              className="font-light text-gray-500 flex flex-row items-center"
            >
              <FiMenu className="mr-2" />
              Menu Dinner
            </a>
          </li>
        </ul>
      </nav>

      <div className="flex full mt-24  mb-8 px-10 w-full overflow-scroll">
        <div className="flex flex-col">
          <p className="text-gray-800 text-xl mb-2">Lunch</p>
          <div className="flex flex-row items-center">
            <FiClock color="#aaaaaa" className="mr-2" size={20} />
            <p className="text-gray-600 font-light mr-4">
              Monday - Tuesday, 11:00 am - 2:00 pm
            </p>

            <FiTrash color="#aaaaaa" size={20} />
          </div>
        </div>
      </div>

      <nav className="navbar flex items-center justify-between flex-wrap bg-gray-200 px-10">
        <ul className="flex">
          <li className="h-16 flex flex-col items-center justify-center mr-12">
            <a
              href="#"
              className="font-semibold text-gray-700 h-16 border-b-4 border-yellow-400 flex flex-col items-center justify-center"
            >
              Appertizer
            </a>
          </li>
          <li className=" h-16 flex flex-col items-center justify-center mr-12">
            <a href="#" className="font-light text-gray-500">
              Month
            </a>
          </li>
          <li className=" h-16 flex flex-col items-center justify-center">
            <a href="#" className="font-light text-gray-500">
              Week
            </a>
          </li>
        </ul>
      </nav>

      <div className="wrapper">
        <Food />
        <Food />
        <Food />
        <Food />
      </div>

      <div className="button-wrapper px-10 pb-4 pt-4 flex flex-row">
        <button className="mt-4 h-12 w-48 text-white mr-6 flex flex-row px-2 button-primary">
          <FiPlus color={"#ffffff"} size={22} className="mr-2" />
          Add new item
        </button>
        <button className="mt-4 h-12 w-48 text-white mr-6 flex flex-row px-2 button-primary">
          <FiPlus color={"#ffffff"} size={22} className="mr-2" />
          Add new section
        </button>
      </div>
    </section>
  );
};

export default Menu;
