import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';

import { PrivateRoute } from './PrivateRoute';
import { IRouterProps } from './Router.types';
import { RouterContext } from './RouterContext';

export const Router = (props: IRouterProps) => {
  const { routes } = useContext(RouterContext);

  return (
    <Switch>
      {routes.map(route =>
        route.isPrivate ? (
          <PrivateRoute key={route.name} path={route.to} {...route} />
        ) : (
          <Route key={route.name} path={route.to} {...route} />
        )
      )}
    </Switch>
  );
};
