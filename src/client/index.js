import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './assets/scss/material-kit-react.scss';

// pages for this product
import ProfilePage from './views/ProfilePage/ProfilePage';
import LoginPage from './views/LoginPage/LoginPage';
import Components from './views/Components/Components';
import LandingPage from './views/LandingPage/LandingPage';

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/landing-page" exact component={LandingPage} />
      <Route path="/profile-page" exact component={ProfilePage} />
      <Route path="/login-page" exact component={LoginPage} />
      <Route path="/" exact component={Components} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
