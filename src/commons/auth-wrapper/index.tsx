import React from "react";
import { NavLink } from "react-router-dom";
import { FiSettings, FiBarChart, FiLayers } from "react-icons/fi";

const logo = require("../../logo.png");

const AuthWrapper = ({ children }: any) => {
  return (
    <div className="flex mb-4 h-screen">
      <aside className="side-bar h-screen w-64 overflow-hidden">
        <nav
          className="justify-center h-16 flex flex-col px-6 text-white font-bold"
          style={{ backgroundColor: "#EFBF4C" }}
        >
          <img src={logo} />
        </nav>
        <div className="h-screen p-6 side-bar">
          <ul>
            <li className="flex h-16 items-center">
              <NavLink
                to="/"
                exact
                className="text-gray-500 flex flex-row items-center"
              >
                <FiSettings className="mr-2" />
                Settings
              </NavLink>
            </li>
            <li className="h-16 flex items-center">
              <NavLink
                to="/sales"
                className="text-gray-500 flex flex-row items-center"
              >
                <FiBarChart className="mr-2" />
                Sales
              </NavLink>
            </li>
            <li className="h-16 flex items-center">
              <NavLink
                to="/menu"
                className="text-gray-500 flex flex-row items-center"
              >
                <FiLayers className="mr-2" />
                Menu Items
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>

      {children}
    </div>
  );
};

export default AuthWrapper;
