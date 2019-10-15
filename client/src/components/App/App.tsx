import React from 'react';

import { Header } from 'components/Header';
import { Router } from 'components/Router';

import { IAppProps } from './App.types';
import styles from './App.module.scss';

export const App = (props: IAppProps) => {
  return (
    <div className={styles.root}>
      <Header />
      <Router />
    </div>
  );
};
