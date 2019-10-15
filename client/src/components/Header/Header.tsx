import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from 'components/Auth';
import { RouterContext } from 'components/Router';

import { IHeaderProps } from './Header.types';
import style from './Header.module.scss';

export const Header = (props: IHeaderProps) => {
  const { isAuthenticated, onLogout } = useContext(AuthContext);
  const { routes } = useContext(RouterContext);

  return (
    <div className={style.root}>
      <ul className={style.navigationLinks}>
        {routes
          .filter(route => !route.hidden)
          .map(route => (
            <li key={route.name}>
              <Link to={route.to!} className={style.link}>
                {route.name}
              </Link>
            </li>
          ))}
      </ul>

      <ul className={style.utilityLinks}>
        <li>
          {isAuthenticated ? (
            <Link to="/" onClick={onLogout} className={style.link}>
              Logout
            </Link>
          ) : (
            <Link to="/auth/login" className={style.link}>
              Login
            </Link>
          )}
        </li>
      </ul>
    </div>
  );
};
