import React from "react";
import { connect } from "react-redux";
import AuthNavigation from "./navigations/auth";
import GuestNavigation from "./navigations/guest";

import "./styles/index.scss";

const mapStateToProps = state => ({
  auth: state.auth
});

const App = props => {
  const { isLogin } = props.auth;
  return isLogin ? <AuthNavigation /> : <GuestNavigation />;
};

export default connect(mapStateToProps)(App);
