import React from 'react';
import PropTypes from 'prop-types';

import { Route } from 'react-router-dom';
import NavBar from '../common/navBar/navBar';

const NavRoutes = ({ exact, path, children }) => (
  <Route
    exact={exact}
    path={path}
  >
    <div>
      <NavBar />
      {children}
    </div>
  </Route>

);

NavRoutes.propTypes = {
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired,
};

export default NavRoutes;
