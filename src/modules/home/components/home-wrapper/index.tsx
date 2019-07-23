import React from "react";
import { NavLink } from "react-router-dom";

const HomeWrapper = ({ children }: any) => (
  <section className="w-full overflow-scroll">
    <nav className="navbar flex items-center justify-between flex-wrap bg-gray-200 p-6 pl-10 fixed w-full z-10">
      <ul className="flex">
        <li className="mr-12 h-16 flex flex-col items-center justify-center">
          <NavLink
            to="/"
            exact
            className="home-link text-gray-500 flex flex-row items-center h-16"
          >
            Business settings
          </NavLink>
        </li>
        <li className="mr-8 h-16 flex flex-col items-center justify-center">
          <NavLink
            to="/account"
            className="home-link text-gray-500 flex flex-row items-center h-16"
          >
            Account settings
          </NavLink>
        </li>
      </ul>
    </nav>

    {children}
  </section>
);

export default HomeWrapper;
