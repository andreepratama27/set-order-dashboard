import React from "react";

const Menu: React.FC = () => {
  return (
    <section className="w-full">
      <nav className="flex items-center justify-between flex-wrap bg-gray-200 p-6 pl-10">
        <ul className="flex">
          <li className="mr-12">
            <a href="#" className="font-bold">
              Allday Menu
            </a>
          </li>
          <li className="mr-8">
            <a href="#" className="text-gray-500">
              Lunch
            </a>
          </li>
          <li className="mr-8">
            <a href="#" className="text-gray-500">
              Dinner
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Menu;
