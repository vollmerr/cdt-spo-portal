import React from 'react';

import { ISectionProps } from './Section.types';
import styles from './Section.module.scss';

export const Section = (props: ISectionProps) => {
  const { children } = props;

  return (
    <div className={styles.root}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};
