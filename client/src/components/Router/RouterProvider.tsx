import React, { useState, useEffect, useMemo } from 'react';

import { RouterContext, initialState } from './RouterContext';
import { IRouterProviderProps } from './Router.types';

export const RouterProvider = (props: IRouterProviderProps) => {
  const { routes } = props;
  const [routerState, setRouterState] = useState(initialState);

  useEffect(() => setRouterState({ routes }), [routes]);

  const routerValue = useMemo(() => ({ ...routerState }), [routerState]);

  return <RouterContext.Provider value={routerValue} {...props} />;
};
