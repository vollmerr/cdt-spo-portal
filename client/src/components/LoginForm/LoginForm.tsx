import React from 'react';
import { Formik } from 'formik';
import { PrimaryButton, DefaultButton } from 'office-ui-fabric-react';

import { FieldText } from 'components/Form';

import { loginValidation } from './LoginForm.schema';
import { ILoginFormProps } from './LoginForm.types';
import styles from './LoginForm.module.scss';

export const LoginForm = (props: ILoginFormProps) => {
  const { children, ...formikProps } = props;

  return (
    <Formik {...formikProps} validationSchema={loginValidation}>
      {({ handleSubmit, handleReset, isSubmitting, dirty }) => (
        <form onSubmit={handleSubmit} noValidate>
          <FieldText required name="email" label="Email" />

          <FieldText
            required
            name="password"
            label="Password"
            type="password"
          />

          <div className={styles.buttons}>
            <DefaultButton
              text="Reset"
              disabled={isSubmitting || !dirty}
              onClick={handleReset}
            />

            <PrimaryButton
              type="submit"
              text="Submit"
              disabled={isSubmitting}
              className={styles.submitButton}
            />
          </div>
        </form>
      )}
    </Formik>
  );
};
