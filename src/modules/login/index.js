import * as React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Formik} from 'formik';
import * as Yup from 'yup';
import Notification from 'commons/notification';

import {loginRequest} from 'redux/ducks/authRedux';

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
  login(data) {
    dispatch(loginRequest(data));
  },
});

const TextInput = props => {
  const {label, error, name} = props;

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
          error ? 'border-red-400' : 'border-none'
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

const Login = props => {
  const {message} = props.auth;

  const onSubmitForm = values => {
    props.login(values);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-300">
      <div className="w-64 mb-8">
        <img
          src={require('../../logo.png')}
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={onSubmitForm}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email()
            .required(),
          password: Yup.string().required(),
        })}
        render={({
          values,
          touched,
          errors,
          handleChange,
          handleSubmit,
          isSubmitting,
        }) => (
          <form className="md:w-1/2 lg:w-1/3 h-auto bg-gray-100 p-5 bg-white shadow-lg">
            {(message || []).length ? (
              <Notification message={message} title="Warning" type="danger" />
            ) : null}
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

            <section className="form mb-4">
              <button
                className="bg-yellow-500 w-full p-2 mt-8"
                onClick={handleSubmit}>
                <p className="text-light font-semibold text-white">SIGN IN</p>
              </button>
            </section>
          </form>
        )}
      />

      <p className="mt-4">
        Want to open restaurant?{' '}
        <Link to="/signup" className="text-blue-600">
          Click here
        </Link>
      </p>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
