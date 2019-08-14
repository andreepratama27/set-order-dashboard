import React from "react";

const Login: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-300">
      <div className="w-64 mb-8">
        <img
          src={require("../../logo.png")}
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      <div className="w-1/4 h-auto bg-gray-100 p-5 bg-white shadow-lg">
        <section className="form mb-4">
          <div className="w-48 mb-4">
            <label className="text-gray-500">Email</label>
          </div>
          <input className="border-2 rounded-sm h-10 w-full px-2 bg-gray-200  focus:outline-none border-none text-dark" />
        </section>

        <section className="form">
          <div className="w-48 mb-4">
            <label className="text-gray-500">Password</label>
          </div>
          <input
            type="password"
            className="border-2 rounded-sm h-10 w-full px-2 bg-gray-200  focus:outline-none border-none text-dark"
          />
        </section>

        <section className="form mb-4">
          <button className="bg-yellow-500 w-full p-2 mt-8 ">
            <p className="text-light font-semibold text-white">SIGN IN</p>
          </button>
        </section>
      </div>

      <p className="mt-4">
        Want to open restaurant?{" "}
        <a href="#" className="text-blue-600">
          Click here
        </a>
      </p>
    </div>
  );
};

export default Login;
