import React from 'react';
import { Field } from 'formik';

/**
 * Maps formiks Field props out
 */
export const withFormikField = (component: React.ReactNode) => (props: any) => {
  return <Field component={component} {...props} />;
};
