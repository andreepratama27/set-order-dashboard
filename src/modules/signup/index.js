import * as React from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";

import Api from "api";
import Notification from "commons/notification";

const TextInput = props => {
  const { error, label, name } = props;

  const _onChange = e => {
    props.onChange(name, e.target.value);
  };

  return (
    <section className="form mb-4">
      <div className="w-48 mb-4 flex flex-row justify-between w-full">
        <label className="text-gray-500">{label}</label>
      </div>
      <input
        className={`border-2 rounded-sm h-10 w-full px-2 bg-gray-200  focus:outline-none text-dark ${
          error ? "border-red-400" : "border-none"
        }`}
        onChange={_onChange}
        {...props}
      />
      {error && (
        <label className="flex flex-row self-end text-red-400 text-sm">
          *{error}
        </label>
      )}
    </section>
  );
};

const SignUp = () => {
  const handleFormSubmit = values => {
    Api.restaurantRegister(values)
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err.response);
      });
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-300">
      <div className="w-64 mb-8">
        <img
          src={require("../../logo.png")}
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      <Formik
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email()
            .required("Email is required"),
          password: Yup.string().required("Password is required"),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), null])
            .required("Password confirm is required")
        })}
        onSubmit={handleFormSubmit}
        initialValues={{ email: "", password: "", confirmPassword: "" }}
        render={({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit
        }) => (
          <form className="md:w-1/2 lg:w-1/3 h-auto bg-gray-100 p-5 bg-white shadow-lg">
            {/* <Notification message="Ok" /> */}
            <TextInput
              label="Email"
              name="email"
              error={touched && errors.email}
              onChange={handleChange}
              value={values.email}
            />

            <TextInput
              name="password"
              label="Password"
              type="password"
              error={touched && errors.password}
              onChange={handleChange}
              value={values.password}
            />

            <TextInput
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              error={touched && errors.confirmPassword}
              onChange={handleChange}
              value={values.confirmPassword}
            />

            <section className="form mb-4">
              <button
                className="bg-yellow-500 w-full p-2 mt-8 "
                onClick={handleSubmit}
              >
                <p className="text-light font-semibold text-white">SIGN UP</p>
              </button>
            </section>
          </form>
        )}
      />

      <p className="mt-4">
        Already member?{" "}
        <Link to="/" className="text-blue-600">
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
