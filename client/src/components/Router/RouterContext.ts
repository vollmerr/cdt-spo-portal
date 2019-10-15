import { createContext } from 'react';

import { IRouterContext, IRouteProps } from './Router.types';

export const initialState: { routes: Array<IRouteProps> } = {
  routes: [],
};

export const RouterContext = createContext<IRouterContext>(initialState);
