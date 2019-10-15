import { createContext } from 'react';

import { IAuthContext } from './Auth.types';

export const initialState = {
  isAuthenticated: false,
  onLogin: () => {},
  onLogout: () => {}
};

export const AuthContext = createContext<IAuthContext>(initialState);
