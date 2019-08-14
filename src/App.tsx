import React from "react";
import "./styles/index.scss";
import AuthNavigation from "./navigations/auth";
import GuestNavigation from "./navigations/guest";

const App: React.FC = () => {
  return <GuestNavigation />;
};

export default App;
