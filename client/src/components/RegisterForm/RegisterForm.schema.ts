import * as Yup from 'yup';

import { IRegisterFormSchema } from './RegisterForm.types';

export const registerValidation: Yup.Schema<
  IRegisterFormSchema
> = Yup.object().shape({
  email: Yup.string()
    .email()
    .required(),

  password: Yup.string().required(),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Password confirmation is required'),
});
