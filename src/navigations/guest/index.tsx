import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "modules/login";
import Signup from "modules/signup";

const Guest: React.FC = () => {
  return (
    <Router>
      <Fragment>
        <Route exact path="/" component={Login} />
        <Route path="/signup" component={Signup} />
      </Fragment>
    </Router>
  );
};

export default Guest;
