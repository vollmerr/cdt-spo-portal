import { RouteProps, LinkProps } from 'react-router-dom';

export interface IRouteProps
  extends RouteProps,
    Omit<LinkProps, keyof RouteProps | 'to'> {
  /** Is route that requires authentication */
  isPrivate?: boolean;
  /** Is route that should be hidden from navigation */
  hidden?: boolean;
  /** Name of route to display in links */
  name: string;
  /** Internal path to link to */
  to?: string;
}

export interface IRouterProps {}

export interface IRouterContext {
  routes: Array<IRouteProps>;
}

export interface IRouterProviderProps {
  routes: Array<IRouteProps>;
  children?: React.ReactNode;
}
