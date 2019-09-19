import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {FiSettings, FiBarChart, FiLayers} from 'react-icons/fi';
import ReactModal from 'react-modal';

import {logoutRequest} from 'redux/ducks/authRedux';

const logo = require('../../logo.png');

const mapDispatchToProps = (dispatch: any) => ({
  logout() {
    dispatch(logoutRequest());
  },
});

const AuthWrapper = ({children, logout}: any) => {
  const setLogout = () => {
    logout();
  };

  return (
    <>
      <ReactModal isOpen={false}>
        <div className="w-full flex flex-col justify-center items-center">
          <img src="../../assets/spinner.svg" alt="" />
        </div>
      </ReactModal>

      <div className="flex mb-4 h-screen">
        <aside className="side-bar h-screen w-64 overflow-hidden">
          <nav
            className="justify-center h-16 flex flex-col px-6 text-white font-bold"
            style={{backgroundColor: '#EFBF4C'}}
            onClick={setLogout}>
            <img src={logo} />
          </nav>
          <div className="h-screen p-6 side-bar">
            <ul>
              <li className="flex h-16 items-center">
                <NavLink
                  to="/"
                  exact
                  className="text-gray-500 flex flex-row items-center">
                  <FiSettings className="mr-2" />
                  Settings
                </NavLink>
              </li>
              <li className="h-16 flex items-center">
                <NavLink
                  to="/sales"
                  className="text-gray-500 flex flex-row items-center">
                  <FiBarChart className="mr-2" />
                  Sales
                </NavLink>
              </li>
              <li className="h-16 flex items-center">
                <NavLink
                  to="/section"
                  className="text-gray-500 flex flex-row items-center">
                  <FiLayers className="mr-2" />
                  Section
                </NavLink>
              </li>
              {/* <li className="h-16 flex items-center">
              <NavLink
                to="/menu"
                className="text-gray-500 flex flex-row items-center"
              >
                <FiLayers className="mr-2" />
                Food Category
              </NavLink>
            </li> */}
              <li className="h-16 flex items-center">
                <NavLink
                  to="/menu"
                  className="text-gray-500 flex flex-row items-center">
                  <FiLayers className="mr-2" />
                  Menu Items
                </NavLink>
              </li>
            </ul>
          </div>
        </aside>

        {children}
      </div>
    </>
  );
};

export default connect(null, mapDispatchToProps)(AuthWrapper);
