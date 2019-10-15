import React, { useContext } from 'react';
import { withRouter, Link } from 'react-router-dom';

import { AuthContext } from 'components/Auth';
import { RegisterForm } from 'components/RegisterForm';
import { IRegistrationPageProps } from './RegistrationPage.types';
import styles from './RegistrationPage.module.scss';

export const RegistrationPage = withRouter((props: IRegistrationPageProps) => {
  const { history } = props;
  const { onLogin } = useContext(AuthContext);

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <h1>Register</h1>

        <div className={styles.content}>
          <RegisterForm
            initialValues={{ email: '', password: '', confirmPassword: '' }}
            onSubmit={(values, actions) => {
              onLogin();
              console.log('registering in with: ', values);
              actions.setSubmitting(false);
              history.push('/');
            }}
          />
        </div>

        <div className={styles.linkSection}>
          <Link to="/auth/register" className={styles.link}>
            Register
          </Link>

          <Link to="/auth/reset-password" className={styles.link}>
            Forgot Password?
          </Link>
        </div>
      </div>
    </div>
  );
});
