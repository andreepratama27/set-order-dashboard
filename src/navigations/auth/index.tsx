import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AuthWrapper from '../../commons/auth-wrapper';

import Home from 'modules/home';
import Sales from 'modules/sales';
import Menu from 'modules/menu';
import Section from 'modules/section';

const Auth: React.FC = () => {
  return (
    <Router>
      <AuthWrapper>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/sales" component={Sales} />
          <Route path="/section" component={Section} />
          <Route path="/menu" component={Menu} />
        </Switch>
      </AuthWrapper>
    </Router>
  );
};

export default Auth;
