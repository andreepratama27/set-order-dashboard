import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state: any) => ({
  auth: state.auth
});

const AccountSetting = (props: any) => {
  const {
    data: { data }
  } = props.auth;

  return (
    <>
      <div className="menu p-6 border-gray-200 pl-10">
        <div className="menu-input">
          <p className="text-2xl mb-4">Account settings</p>
        </div>

        <form className="mt-10">
          <div className="w-full mb-6 flex flex-row">
            <div className="w-48">
              <label className="text-gray-700">Email address</label>
            </div>
            <input
              className="border-2 rounded-sm h-10 w-1/3 px-2"
              value={data.email}
            />
          </div>
          <div className="w-full mb-6 flex flex-row">
            <div className="w-48">
              <label className="text-gray-700">Current password</label>
            </div>
            <input className="border-2 rounded-sm h-10 w-1/3 px-2" disabled />
          </div>
          <div className="w-full mb-6 flex flex-row">
            <div className="w-48">
              <label className="text-gray-700">New password</label>
            </div>
            <input className="border-2 rounded-sm h-10 w-1/3 px-2" />
          </div>
          <div className="w-full mb-6 flex flex-row">
            <div className="w-48">
              <label className="text-gray-700">Confirm password</label>
            </div>
            <input className="border-2 rounded-sm h-10 w-1/3 px-2" />
          </div>

          <div className="w-full mb-6 flex flex-row">
            <div className="w-48" />

            <button className="bg-green-500 mt-4 h-10 w-48 rounded-sm text-white">
              Save change
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default connect(mapStateToProps)(AccountSetting);
