import React from 'react';

export interface IAuthContext {
  isAuthenticated: boolean;
  onLogin: () => void;
  onLogout: () => void;
}

export interface IAuthProviderProps {
  children: React.ReactNode;
}
