import React, { useContext } from 'react';
import { Route, RouteProps } from 'react-router-dom';

import { AuthContext } from 'components/Auth';
import { LoginPage } from 'pages';

export interface PrivateRouteProps extends RouteProps {}

export const PrivateRoute = ({ component, ...options }: PrivateRouteProps) => {
  const { isAuthenticated } = useContext(AuthContext);
  const protectedComponent = isAuthenticated ? component : LoginPage;

  return <Route {...options} component={protectedComponent} />;
};
