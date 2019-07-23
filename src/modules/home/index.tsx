import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import HomeWrapper from "./components/home-wrapper";

import AccountSetting from "./components/account-setting";
import BusinessSetting from "./components/business-setting";

const Home: React.FC = () => {
  return (
    <Router>
      <HomeWrapper>
        <Route path="/" exact component={BusinessSetting} />
        <Route path="/account" exact component={AccountSetting} />
      </HomeWrapper>
    </Router>
  );
};

export default Home;
