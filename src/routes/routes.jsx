import React from 'react';

import { Route, Switch } from 'react-router-dom';
import App from '../App';
import About from '../pages/About';
import NavRoutes from './navRoutes';
import Login from '../pages/Login';

const Routes = () => (
  <Switch>
    <NavRoutes path="/about">
      <About />
    </NavRoutes>
    <Route path="/login" component={Login} />
    <NavRoutes path="/">
      <App />
    </NavRoutes>
  </Switch>
);

export default Routes;
