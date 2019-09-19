import React, {useEffect} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';

import HomeWrapper from './components/home-wrapper';

import AccountSetting from './components/account-setting';
import BusinessSetting from './components/business-setting';

const mapStateToProps = (state: any) => ({
  auth: state.auth,
});

const Home: React.FC = (props: any) => {
  return (
    <Router>
      <HomeWrapper>
        <Route path="/" exact component={BusinessSetting} />
        <Route path="/account" exact component={AccountSetting} />
      </HomeWrapper>
    </Router>
  );
};

export default connect(mapStateToProps)(Home);
