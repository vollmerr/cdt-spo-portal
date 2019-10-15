import React from 'react';
import { Formik } from 'formik';
import { PrimaryButton, DefaultButton } from 'office-ui-fabric-react';

import { FieldText } from 'components/Form';

import { registerValidation } from './RegisterForm.schema';
import { IRegisterFormProps } from './RegisterForm.types';
import styles from './RegisterForm.module.scss';

export const RegisterForm = (props: IRegisterFormProps) => {
  const { children, ...formikProps } = props;

  return (
    <Formik {...formikProps} validationSchema={registerValidation}>
      {({ handleSubmit, handleReset, isSubmitting, dirty }) => (
        <form onSubmit={handleSubmit} noValidate>
          <FieldText required name="email" label="Email" />

          <FieldText
            required
            name="password"
            label="Password"
            type="password"
          />

          <FieldText
            required
            name="confirmPassword"
            label="Confirm Password"
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
