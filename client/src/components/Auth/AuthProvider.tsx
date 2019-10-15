import React, { useState, useEffect } from 'react';

import { AuthContext, initialState } from './AuthContext';

import { IAuthProviderProps } from './Auth.types';

export const AuthProvider = (props: IAuthProviderProps) => {
  const [authState, setAuthState] = useState(initialState);

  useEffect(() => {
    const currentAuthData = null; // = someManager.getAuthData();
    if (currentAuthData) {
      setAuthState(currentAuthData);
    }
  }, []);

  const onLogin = () => setAuthState({ isAuthenticated: true, ...authState });

  const onLogout = () => setAuthState(initialState);

  const authValue = { ...authState, onLogin, onLogout };

  return <AuthContext.Provider value={authValue} {...props} />;
};
