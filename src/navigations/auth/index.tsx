import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AuthWrapper from "../../commons/auth-wrapper";

import Home from "modules/home";
import Sales from "modules/sales";
import Menu from "modules/menu";

const Auth: React.FC = () => {
  return (
    <Router>
      <AuthWrapper>
        <Route exact path="/" component={Home} />
        <Route path="/sales" component={Sales} />
        <Route path="/menu" component={Menu} />
      </AuthWrapper>
    </Router>
  );
};

export default Auth;
