import * as Yup from 'yup';

import { IForgotPasswordFormSchema } from './ForgotPasswordForm.types';

export const registerValidation: Yup.Schema<
  IForgotPasswordFormSchema
> = Yup.object().shape({
  email: Yup.string()
    .email()
    .required(),

  password: Yup.string().required(),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Password confirmation is required'),
});
