import { IRouteProps } from 'components/Router';

import * as pages from './pages';

export const routes: Array<IRouteProps> = [
  {
    name: 'CDT SPO Portal',
    to: '/',
    exact: true,
    component: pages.HomePage,
  },
  {
    name: 'Help',
    to: '/help',
    exact: true,
    component: pages.HelpPage,
  },
  {
    hidden: true,
    name: 'Login',
    to: '/auth/login',
    exact: true,
    component: pages.LoginPage,
  },
  {
    hidden: true,
    name: 'Login',
    to: '/auth/register',
    exact: true,
    component: pages.RegistrationPage,
  },
  // {
  //   hidden: true,
  //   name: 'Login',
  //   to: '/auth/forgot-password',
  //   exact: true,
  //   component: pages.RegistrationPage,
  // },
  // {
  //   hidden: true,
  //   name: 'Login',
  //   to: '/auth/reset-password',
  //   exact: true,
  //   component: pages.RegistrationPage,
  // },
  {
    hidden: true,
    name: 'Error',
    to: '/error',
    exact: true,
    component: pages.ErrorPage,
  },
];
