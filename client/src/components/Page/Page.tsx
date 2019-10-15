import React from 'react';

import { IPageProps } from './Page.types';
import styles from './Page.module.scss';

export const Page = (props: IPageProps) => {
  const { children, title } = props;

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        {title && <h1>{title}</h1>}
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};
