import * as Yup from 'yup';

import { ILoginFormSchema } from './LoginForm.types';

export const loginValidation: Yup.Schema<ILoginFormSchema> = Yup.object().shape(
  {
    email: Yup.string()
      .email()
      .required(),

    password: Yup.string().required(),
  }
);
