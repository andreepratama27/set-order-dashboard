import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { FiSettings, FiStar, FiBarChart, FiLayers } from "react-icons/fi";

import Home from "../../modules/home";
import Sales from "../../modules/sales";
import Menu from "../../modules/menu";

const Auth: React.FC = () => {
  return (
    <Router>
      <div className="flex mb-4">
        <section className="w-64 h-screen">
          <nav
            className="items-center p-6"
            style={{ backgroundColor: "#EFBF4C" }}
          >
            Sidebar
          </nav>
          <div className="h-screen bg-gray-800 p-6">
            <ul>
              <li className="flex h-12 items-center">
                <Link
                  to="/"
                  className="text-gray-500 flex flex-row items-center"
                >
                  <FiSettings className="mr-2" />
                  Settings
                </Link>
              </li>
              <li className="h-12 flex items-center">
                <Link
                  to="/sales"
                  className="text-gray-500 flex flex-row items-center"
                >
                  <FiBarChart className="mr-2" />
                  Sales
                </Link>
              </li>
              <li className="h-12 flex items-center">
                <Link
                  to="/menu"
                  className="text-gray-500 flex flex-row items-center"
                >
                  <FiLayers className="mr-2" />
                  Menu Items
                </Link>
              </li>
            </ul>
          </div>
        </section>

        <Route path="/" exact component={Home} />
        <Route path="/sales" component={Sales} />
        <Route path="/menu" component={Menu} />
      </div>
    </Router>
  );
};

export default Auth;
