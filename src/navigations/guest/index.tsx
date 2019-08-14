import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "modules/login";

const Guest: React.FC = () => {
  return (
    <Router>
      <Fragment>
        <Route exact path="/" component={Login} />
      </Fragment>
    </Router>
  );
};

export default Guest;
