import React, { useContext } from 'react';
import { withRouter, Link } from 'react-router-dom';

import { AuthContext } from 'components/Auth';
import { LoginForm } from 'components/LoginForm';
import { ILoginPageProps } from './LoginPage.types';
import styles from './LoginPage.module.scss';

export const LoginPage = withRouter((props: ILoginPageProps) => {
  const { history } = props;
  const { onLogin } = useContext(AuthContext);

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <h1>Login</h1>

        <div className={styles.content}>
          <LoginForm
            initialValues={{ email: '', password: '' }}
            onSubmit={(values, actions) => {
              onLogin();
              console.log('logging in with: ', values);
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
